# Technical Resume HTML

[简体中文](README.md) | [English](README.en.md)

**Establish real contributions first, then write a resume you can submit and explain.**

An assistant skill that reads resumes, work outputs, or project materials, asks follow-up questions about individual contributions, organizes experience as “problem → solution → improvement,” and produces an editable, printable HTML resume. It supports technical roles as well as operations, career changes, and internal applications.

You do not need a polished resume to begin. Provide one source of real evidence and a target direction. When information is missing, the next step is an interview—not invented experience or numbers.

[Install](#install-in-codex) · [Start](#start-a-resume-session) · [Outputs](#deliverables-and-layout-checks) · [Examples](#preview-the-output)

## Install in Codex

Install the whole repository containing SKILL.md as `technical-resume-html`. User-level location: `~/.agents/skills/technical-resume-html/`; project-level location: `.agents/skills/technical-resume-html/`. Do not copy SKILL.md alone: retain templates, references, and checking scripts.

User-level installation in Windows PowerShell:

```powershell
$resumeSkillsRoot = Join-Path $env:USERPROFILE '.agents\skills'
New-Item -ItemType Directory -Path $resumeSkillsRoot -Force | Out-Null
git clone https://github.com/kayaduster607-jpg/technical-resume-html.git (Join-Path $resumeSkillsRoot 'technical-resume-html')
```

If the directory already exists, compare versions and preserve existing content first. Select or enter `$technical-resume-html` in Codex after installation; reload the app if it does not appear. See the [official Skills documentation](https://learn.chatgpt.com/docs/build-skills) for paths and invocation conventions.

## Start a resume session

Replace bracketed placeholders with your information and attach files, pasted text, or readable paths along with the invocation:

```text
使用 $technical-resume-html 帮我整理中文简历。
目标：后端开发实习；目标 JD：[粘贴岗位要求，没有则先说明方向]
材料：[现有简历、项目说明或工作成果的附件 / 路径]
交付位置：output/resume.html

先读取材料，再逐轮追问我的个人贡献与证据。
经历按“问题、解决、改善”组织；没有依据的指标不要补写。
```

A complete session follows these steps:

1. The assistant reads the material and separates established facts, points needing confirmation, and unsupported claims.
2. You answer questions about context, role, choices, difficulties, and results. State explicitly when no statistics exist, and distinguish your contribution from team outcomes.
3. Once evidence is sufficient, review the experience text before the assistant writes HTML to the requested location. Be ready to explain important decisions and verifiable improvements in an interview.
4. Open the HTML in a browser and check content and print pagination. Explicitly request PDF export if needed and inspect the layout-check results.

| Required input | Examples | What it establishes |
| --- | --- | --- |
| Source material | Any one of a resume, project repository, retrospective, or work summary | Experience facts |
| Intended use | Role / JD, job search or internal application, Chinese or English | Selection and wording |
| Follow-up answers | What you did, how you verified it, and evidence for outcomes | Individual contributions and credible metrics |

A JD without experience material supports role analysis and an interview, not generation of factual work experience.

## Deliverables and layout checks

The main output is **HTML with editable native text**, such as `output/resume.html`. PDF, page screenshots, and check reports depend on the assistant's available file and browser tools. Preserve original materials and keep verification reminders outside application-ready text.

With Node.js, Playwright, and Chromium already installed, check a completed resume from the skill root:

```bash
node scripts/validate_resume.cjs output/resume.html --out output/qa
```

The output directory contains per-page screenshots, `report.json`, and `resume.pdf`; detected issues produce exit code 1. Checks cover overflow, pagination, and footer overlap, not the truth of the experience. See [layout documentation](references/html-layout.md) for environment and arguments.

## Preview the output

![Actual HTML render of the operations-coordination example](docs/images/resume-preview.jpg)

Open the [technical example](examples/demo-resume.html) or [operations-coordination example](examples/operations-resume.html) in a browser, or start from the [general template](assets/resume-template.html). Example people, organizations, and accomplishments are fictional teaching material demonstrating layout only.

## Why interview before formatting

The greatest distortions in experience are often factual: presenting team results as solo work, a pilot as a full rollout, or a suggestion as an achieved result. The skill separates these states and asks what problem was solved, why that approach was chosen, and how improvement was established, making the material useful both for applications and interviews.

Writing rules are in [SKILL.md](SKILL.md), methodology in [problem-solution-efficiency.md](references/problem-solution-efficiency.md), and HTML layouts and checks in `assets/` and `scripts/`. Keep examples and delivery requirements aligned when changing the skill.
