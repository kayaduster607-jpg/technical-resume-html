#!/usr/bin/env node
'use strict';

// Render a local resume in screen/print media; report real bounds and export review artifacts.
const fs = require('node:fs/promises');
const path = require('node:path');
const { pathToFileURL, fileURLToPath } = require('node:url');

function parseArgs(argv) {
  const options = { html: null, out: null, allowMarkers: false };
  const flags = { '--out': 'out', '--playwright-module': 'module', '--browser-executable': 'browser' };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--allow-template-markers') options.allowMarkers = true;
    else if (flags[arg]) {
      const value = argv[++i];
      if (!value || value.startsWith('--')) throw new Error(`Missing value for ${arg}`);
      options[flags[arg]] = value;
    } else if (!arg.startsWith('-') && !options.html) options.html = arg;
    else throw new Error(`Unknown argument: ${arg}`);
  }
  if (!options.html || !options.out) {
    throw new Error('Usage: node validate_resume.cjs <resume.html> --out <qa-directory> [--playwright-module <path>] [--browser-executable <path>] [--allow-template-markers]');
  }
  options.html = path.resolve(options.html);
  options.out = path.resolve(options.out);
  if (path.extname(options.html).toLowerCase() !== '.html') throw new Error('Input must be an HTML file.');
  if (isEnvPath(options.html)) throw new Error('Reading .env files is forbidden.');
  return options;
}

function isEnvPath(target) {
  return target.split(/[\\/]/).some(part => part === '.env' || part.startsWith('.env.'));
}

function loadPlaywright(options) {
  try { return require(options.module || 'playwright'); }
  catch { throw new Error('Playwright is unavailable. Supply --playwright-module with an existing installation.'); }
}

async function waitForAssets(page) {
  // Hidden, unused photo elements have no src and do not count as broken images.
  return page.evaluate(async () => {
    await document.fonts.ready;
    const images = Array.from(document.images).filter(img => img.getAttribute('src'));
    await Promise.all(images.map(async img => {
      try { await img.decode(); } catch { /* Report failed decoding below. */ }
    }));
    return images.filter(img => !img.complete || !img.naturalWidth).map(img => img.id || img.alt || 'image');
  });
}

function measureDocument({ media, allowMarkers }) {
  // Runs inside Chromium: text fragment rectangles catch long words that overflow their boxes.
  const issues = [];
  const pages = Array.from(document.querySelectorAll('.page'));
  const tolerance = 1;
  const textOf = element => (element.textContent || '').trim().slice(0, 100);
  const visible = element => {
    const style = getComputedStyle(element);
    return element.getClientRects().length > 0 && style.visibility !== 'hidden'
      && style.visibility !== 'collapse' && parseFloat(style.opacity) !== 0;
  };
  const addIssue = (page, kind, detail) => issues.push({ media, page, kind, detail });
  if (!pages.length) addIssue(null, 'structure', 'No .page elements.');

  const dimensions = pages.map((page, index) => {
    const number = index + 1;
    const content = page.querySelector(':scope > .page-content');
    const frame = page.getBoundingClientRect();
    const style = getComputedStyle(page);
    const footer = page.querySelector('.page-num');
    const footerRect = footer && footer.getBoundingClientRect();
    const bounds = {
      left: frame.left + parseFloat(style.paddingLeft),
      right: frame.right - parseFloat(style.paddingRight),
      top: frame.top + parseFloat(style.paddingTop),
      bottom: Math.min(frame.bottom - parseFloat(style.paddingBottom), footerRect ? footerRect.top - 6 : Infinity),
    };
    if (!content) {
      addIssue(number, 'structure', 'Missing direct .page-content wrapper.');
      return { number, width: frame.width, height: frame.height };
    }
    if (!content.innerText.trim()) addIssue(number, 'empty-page', 'Page has no visible resume text.');
    for (const box of [page, content]) {
      const css = getComputedStyle(box);
      if (['hidden', 'clip', 'scroll', 'auto'].includes(css.overflowY)) {
        addIssue(number, 'clipping', 'Page or content uses a clipping/scrolling overflow mode.');
      }
    }

    function checkRect(rect, label) {
      if (rect.width === 0 && rect.height === 0) return;
      if (rect.left < bounds.left - tolerance || rect.right > bounds.right + tolerance
        || rect.top < bounds.top - tolerance || rect.bottom > bounds.bottom + tolerance) {
        addIssue(number, 'overflow', label);
      }
    }
    Array.from(content.querySelectorAll('*')).filter(visible).forEach(element => {
      checkRect(element.getBoundingClientRect(), `${element.tagName}: ${textOf(element)}`);
    });
    const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      if (!node.textContent.trim() || /^(SCRIPT|STYLE)$/.test(node.parentElement.tagName)) continue;
      const element = node.parentElement;
      if (!visible(element)) {
        if (!element.closest('[data-allow-hidden]')) addIssue(number, 'hidden-text', node.textContent.trim().slice(0, 100));
        continue;
      }
      const range = document.createRange();
      range.selectNodeContents(node);
      Array.from(range.getClientRects()).forEach(rect => checkRect(rect, node.textContent.trim().slice(0, 100)));
    }
    if (!allowMarkers && /【[^】]+】/.test(content.textContent)) addIssue(number, 'template-markers', 'Unfilled template fields remain.');
    if (footerRect && (footerRect.bottom > frame.bottom + tolerance || footerRect.right > frame.right + tolerance)) {
      addIssue(number, 'footer', 'Footer extends beyond page.');
    }
    return { number, width: frame.width, height: frame.height, contentHeight: content.getBoundingClientRect().height };
  });

  // Detect text accidentally placed outside measured resume content.
  const bodyWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let node = bodyWalker.nextNode(); node; node = bodyWalker.nextNode()) {
    const element = node.parentElement;
    if (!node.textContent.trim() || /^(SCRIPT|STYLE)$/.test(element.tagName)) continue;
    if (!element.closest('.page-content, .page-num, .no-print')) {
      addIssue(null, 'unwrapped-text', node.textContent.trim().slice(0, 100));
    }
  }
  if (media === 'print') {
    document.querySelectorAll('.no-print').forEach(element => {
      if (visible(element)) addIssue(null, 'print-controls', 'A .no-print element remains visible.');
    });
  }
  return { media, pageCount: pages.length, dimensions, issues };
}

async function captureMedia(page, media, options) {
  await page.emulateMedia({ media });
  const brokenImages = await waitForAssets(page);
  const measurement = await page.evaluate(measureDocument, { media, allowMarkers: options.allowMarkers });
  measurement.issues.push(...brokenImages.map(detail => ({ media, kind: 'broken-image', detail })));
  for (let i = 0; i < measurement.pageCount; i += 1) {
    await page.locator('.page').nth(i).screenshot({ path: path.join(options.out, `${media}-${i + 1}.png`) });
  }
  return measurement;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  await fs.access(options.html);
  await fs.mkdir(options.out, { recursive: true });
  const { chromium } = loadPlaywright(options);
  const browser = await chromium.launch({ headless: true, ...(options.browser ? { executablePath: options.browser } : {}) });
  const failures = [];
  let report;
  try {
    const context = await browser.newContext({ viewport: { width: 1200, height: 1400 }, serviceWorkers: 'block' });
    const page = await context.newPage();
    page.on('pageerror', error => failures.push({ kind: 'browser-error', detail: error.message }));
    page.on('console', message => {
      if (message.type() === 'error') failures.push({ kind: 'console-error', detail: message.text() });
    });
    await context.route('**/*', async route => {
      const url = route.request().url();
      const remote = /^https?:/i.test(url);
      const env = url.startsWith('file:') && isEnvPath(fileURLToPath(url));
      if (remote || env) {
        failures.push({ kind: remote ? 'remote-resource' : 'forbidden-file', detail: remote ? new URL(url).origin : '.env resource blocked' });
        await route.abort();
      } else await route.continue();
    });
    await page.goto(pathToFileURL(options.html).href, { waitUntil: 'load' });
    const measurements = [];
    for (const media of ['screen', 'print']) measurements.push(await captureMedia(page, media, options));
    await page.pdf({ path: path.join(options.out, 'resume.pdf'), preferCSSPageSize: true,
      format: 'A4', printBackground: true, displayHeaderFooter: false, scale: 1 });
    const issues = [...failures, ...measurements.flatMap(item => item.issues)];
    report = { input: options.html, expectedPdfPages: measurements[1].pageCount,
      templateMode: options.allowMarkers, passed: issues.length === 0, measurements, issues };
    await context.close();
  } finally {
    await browser.close();
  }
  await fs.writeFile(path.join(options.out, 'report.json'), JSON.stringify(report, null, 2), 'utf8');
  console.log(JSON.stringify({ passed: report.passed, expectedPdfPages: report.expectedPdfPages,
    issues: report.issues.length, output: options.out }));
  if (!report.passed) process.exitCode = 1;
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
