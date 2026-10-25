# Technical Resume HTML

An assistant skill that turns real work materials into an editable HTML resume. It reads the evidence, asks follow-up questions about personal contributions, and writes experience around the problem, the solution and the resulting improvement.

[中文](README.md) · [Install](#install) · [First use](#first-use) · [Files and validation](#files-and-validation)

## Install

Install the entire repository as `technical-resume-html`, including templates, references and scripts. For Codex, use `~/.agents/skills/technical-resume-html/` for your account, or `.agents/skills/technical-resume-html/` inside a project. Keep any existing installation until you have compared versions.

```bash
mkdir -p ~/.agents/skills
git clone https://github.com/kayaduster607-jpg/technical-resume-html.git ~/.agents/skills/technical-resume-html
```

Select the skill explicitly or invoke `$technical-resume-html`. Reload Codex if needed. See the [official skill documentation](https://learn.chatgpt.com/docs/build-skills) for discovery and invocation.

## First use

Provide one real source: an existing resume, work summary, project report or accessible repository. Add the target role, job description if available, language and desired output path.

```text
Use $technical-resume-html to prepare my English resume.
Target: backend engineering internship.
Sources: [attach files or provide accessible paths].
Job description: [paste it, if available].
Output: output/resume.html.

Read the sources first. Ask about my personal contribution and evidence.
Do not invent metrics. Confirm the experience before producing the HTML.
```

Answer follow-up questions about the problem, your role, design choices and verified results. Missing information leads to more questions, rather than fabricated experience. Separate team outcomes from your own work, and a pilot from a production rollout.

The final HTML contains editable text and print styles. Open it in a browser and check the content and pagination. PDF export and screenshots require suitable tools in the assistant environment; installing this skill alone does not install a browser.

## Files and validation

With Node.js, Playwright and Chromium available, validate an existing resume from the skill root:

```bash
node scripts/validate_resume.cjs output/resume.html --out output/qa
```

The output includes page screenshots, `report.json` and `resume.pdf`. Layout failures return exit code 1. This checks layout, not whether career claims are true. See [layout requirements](references/html-layout.md).

Preview the [technical example](examples/demo-resume.html), [operations example](examples/operations-resume.html) or [blank template](assets/resume-template.html). Example people, organizations and results are fictional teaching material.

The workflow is defined in [SKILL.md](SKILL.md). Its purpose is to make credible experience easier to understand and explain, rather than to generate claims from a job description alone.
