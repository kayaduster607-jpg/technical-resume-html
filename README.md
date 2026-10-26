# Technical Resume HTML

[简体中文](README.md) | [English](README.en.md)

**先把真实贡献问清楚，再写成一份能投递、能解释的简历。**

这是供 AI 助手使用的 Skill：读取现有简历、工作成果或项目材料，多轮追问个人贡献，按“问题 → 解决 → 带来的改善”组织经历，最后生成可编辑、可打印的 HTML 简历。既可用于技术岗位，也可用于运营、转岗和竞聘等场景。

你不需要先准备一份完美简历；提供一种真实材料和目标方向即可。缺信息时，正常下一步是访谈，不是替你补出经历或数字。

[安装](#安装到-codex) · [开始一次简历整理](#开始一次简历整理) · [输出](#交付文件与版面检查) · [示例](#先看看成品) · [English](README.en.md)

## 安装到 Codex

把包含 SKILL.md 的整个仓库安装为 `technical-resume-html`，用户级目录为 `~/.agents/skills/technical-resume-html/`，项目级目录为 `.agents/skills/technical-resume-html/`。不要只复制 SKILL.md，模板、参考文件和检查脚本也需要保留。

Windows PowerShell 的用户级安装示例：

```powershell
$resumeSkillsRoot = Join-Path $env:USERPROFILE '.agents\skills'
New-Item -ItemType Directory -Path $resumeSkillsRoot -Force | Out-Null
git clone https://github.com/kayaduster607-jpg/technical-resume-html.git (Join-Path $resumeSkillsRoot 'technical-resume-html')
```

如果已有同名目录，先比较版本，保留现有内容。安装后在 Codex 中显式选择或输入 `$technical-resume-html`；若未出现，重新加载应用。目录与调用约定见 [官方 Skills 文档](https://learn.chatgpt.com/docs/build-skills)。

## 开始一次简历整理

把下面的方括号换成自己的信息，随调用一起提供文件、正文或可读取的路径：

```text
使用 $technical-resume-html 帮我整理中文简历。
目标：后端开发实习；目标 JD：[粘贴岗位要求，没有则先说明方向]
材料：[现有简历、项目说明或工作成果的附件 / 路径]
交付位置：output/resume.html

先读取材料，再逐轮追问我的个人贡献与证据。
经历按“问题、解决、改善”组织；没有依据的指标不要补写。
```

一次完整使用会经历以下过程：

1. 助手读材料，区分已有事实、需要确认的信息和缺失依据。
2. 你回答关于背景、角色、方案选择、困难与结果的追问。没有统计数据可以明确说没有；团队成果需要说清自己的部分。
3. 信息足够后，核对经历正文，再生成指定路径的 HTML。关键选择和可证明改善应当能在面试中解释。
4. 浏览器打开 HTML，检查内容与打印分页。需要 PDF 时明确要求导出，并核对版面检查结果。

| 需要你提供 | 具体例子 | 用来确定 |
| --- | --- | --- |
| 原始材料 | 简历、项目仓库、复盘、工作总结，任选一种 | 经历事实 |
| 使用目标 | 岗位 / JD、求职或竞聘、中文或英文 | 取舍与表达 |
| 追问回答 | 本人做了什么、如何验证、结果有何依据 | 个人贡献与可信指标 |

只有 JD 而没有经历材料时，能先做岗位分析和访谈，不能据此生成真实经历。

## 交付文件与版面检查

主要产物是**原生文字可编辑的 HTML**，例如 `output/resume.html`。PDF、逐页截图和检查报告取决于当前助手的文件与浏览器工具。原始材料应保留，核验提醒放在投递正文之外。

已经安装 Node.js、Playwright 和 Chromium 时，可在 Skill 根目录检查一份成品：

```bash
node scripts/validate_resume.cjs output/resume.html --out output/qa
```

输出目录包含逐页截图、`report.json`、`resume.pdf`，发现问题时退出码为 1。它检查溢出、分页、页脚遮挡等版面问题，不替代经历事实核查。环境和参数见 [版式说明](references/html-layout.md)。

## 先看看成品

![运营协调示例的实际 HTML 渲染](docs/images/resume-preview.jpg)

直接用浏览器打开 [技术示例](examples/demo-resume.html) 或 [运营协调示例](examples/operations-resume.html)，也可从 [通用模板](assets/resume-template.html)开始。示例人物、单位和成果均为虚构教学内容，只用于展示排版。

## 为什么先访谈再排版

经历中最容易失真的不是格式，而是把团队成果写成本人独立完成、把试点写成全面上线、把建议写成已取得结果。Skill 将这几类状态分开，再追问“解决了什么问题、为何这样做、怎样确认改善”，让材料同时适用于投递与后续面试。

写作规则位于 [SKILL.md](SKILL.md)，方法说明在 [problem-solution-efficiency.md](references/problem-solution-efficiency.md)，HTML 版式与检查分别在 `assets/` 和 `scripts/`。修改 Skill 时应同步检查示例与交付要求。
