<p align="center">
  <img src="docs/images/hero.jpg" width="100%" alt="让你的实力，被机会看见。面向求职、转岗和职业发展，从真实经历与工作成果出发。">
</p>

<h1 align="center">让你的实力，被机会看见</h1>

<p align="center">
  求职 · 转岗 · 晋升竞聘 · 职业发展 · Codex Skill<br>
  <strong>先给现有简历或工作资料，多轮深挖真实贡献，让你的经历与下一步机会建立联系。</strong>
</p>

<p align="center">
  <strong>简体中文</strong> · <a href="README.en.md">English</a>
</p>

<p align="center">
  <a href="#start">开始使用</a> ·
  <a href="#example">看一次具体改变</a> ·
  <a href="#workflow">它会怎么追问</a> ·
  <a href="#preview">查看输出示例</a>
</p>

从第一次找实习，到社招、转岗、晋升竞聘或承接自由职业项目，你都需要把“做过什么”讲成别人能理解的价值。日常任务、跨部门协作、客户跟进、业务改进和技术交付，往往散落在不同材料里，最后只剩下“负责某项工作”。

**technical-resume-html 帮助不同岗位、不同职业阶段的人，把真实贡献讲清楚。** 它先读取现有简历、工作成果、项目资料或代码，再围绕目标岗位持续追问个人行动、关键选择和实际改善，整理成便于招聘者、用人团队或竞聘评审理解的经历。

技术、产品、运营、市场、销售、设计、职能支持和管理等岗位，都可从自己的真实工作开始。它保留原有名称，方便已有安装继续使用；提问和栏目会根据你的职业背景调整。先提供一种材料，暂时不知道亮点也可以开始。

<a id="example"></a>

## 第一次使用：给材料，回答追问，拿到简历文件

| 你需要输入 | 一份够用的例子 | 最终输出 |
| --- | --- | --- |
| 一种真实经历材料 | 现有简历、工作总结、项目说明或代码仓库，任选其一 | 经追问核实后的经历结构和简历正文 |
| 使用目标 | “运营岗位、中文、应届求职”或目标JD | 相应岗位与语言的内容组织 |
| 你的实际贡献与证据 | 对AI追问逐轮补充，未知就说未知 | 可编辑HTML简历；环境支持时打印PDF与版面检查 |

这是一项安装到AI编程助手的Skill，不是启动npm后出现的网页网站，也不是只输入JD就能编造完整经历。

1. 按[开始使用](#start)安装整个Skill目录，让助手能读到SKILL.md及资源。Codex可使用skill-installer安装仓库，或按下方官方目录说明手动放置；安装不代表已经生成简历。
2. 明确调用 `technical-resume-html`，同时给可访问的材料路径或附件、目标岗位与语言。
3. 可以直接发：“请用technical-resume-html读取我的现有简历，目标是运营岗位，输出中文。先确认我的实际贡献，问清楚后再写，不要编造指标。”
4. 回答每轮追问；没有统计数据就说明没有，不把团队实现自动写成个人贡献。信息不够时正常输出是继续提问，而非立刻生成一份最终简历。
5. 事实够用后，让助手写入你指定的HTML路径，例如 `output/resume.html`。浏览器打开后可编辑检查、打印到PDF；原始简历默认保留。

**先看成品：**可直接用浏览器打开[技术示例](examples/demo-resume.html)或[运营示例](examples/operations-resume.html)。它们的人物和经历是虚构教学内容，不能直接当成你的经历。

**文件检查：**有Node与Playwright时，用后文验证脚本检查你已经生成的HTML；输出包含逐页截图、report.json和resume.pdf。PDF是否生成取决于当前工具环境，单独安装Skill不会自动补齐浏览器依赖。

## 同一段经历，怎样更容易被理解

以下是一个虚构的跨部门协作示例，只展示表达结构。实际写作时会核对你的行动、效果与证据。

> 负责项目沟通和交接工作。

按 **问题＋解决＋提升效率** 展开：

> 针对跨部门交接材料不完整、接收方需要反复确认的问题，梳理交付清单，明确责任人、验收节点与异常反馈路径，使接收方能够按统一标准核对交付内容，减少遗漏带来的往返沟通。

| 读者想了解的事 | 条目中对应的信息 |
| --- | --- |
| 你遇到了什么具体问题？ | 交接材料不完整，需要反复确认 |
| 你采取了什么行动？ | 交付清单、责任人、验收节点与反馈路径 |
| 你的工作带来了什么改善？ | 按统一标准核对，减少遗漏与往返沟通 |

“解决”可以是技术机制，也可以是业务方法、流程设计、研究判断、组织协调或客户策略。原有技术视频案例和更多岗位的深挖示例，见[三段式深挖说明](references/problem-solution-efficiency.md)。

“提升效率”也包括已验证的最终效果：节约时间和成本、改善交付质量、推动业务目标、降低风险、改善客户体验。已有数据时说明基线、结果和统计范围；没有数据时继续挖掘可证明的改善，不硬凑百分比。

<a id="workflow"></a>

## 从材料到一段能讲清楚的经历

![四阶段职业经历深挖流程：提供简历、工作成果或项目资料，梳理事实并追问贡献与证据；信息不足时继续追问，事实充分后按问题＋解决＋提升效率写作，再检查 HTML 排版与 PDF 材料。](docs/images/workflow.jpg)

**信息不足就继续追问，事实充分后才进入写作。** 可查看[完整流程定义](docs/workflow.mmd)。

例如你说“优化过交接流程”，它会接着问：原来在哪一步反复确认？哪些改动由你推动？涉及哪些团队？改后省了什么步骤或减少了什么遗漏？有什么记录能说明变化？如果是技术岗位，再进一步追问实现、测试与部署。

**每轮通常聚焦 3—5 个关键问题，不设固定总轮数。** 已读到的信息不重复索要；关键经历还缺“问题、解决、提升效率”中的某一段，就继续问。你也可以要求先用已知事实出草稿，再逐步补充。

| 你现在手里的材料 | 可以从这里开始 |
| --- | --- |
| 应届、实习或首次就业 | 从课程、实践、志愿活动、项目或实习中梳理可证明的贡献 |
| 社招、跳槽或重返职场 | 结合目标岗位重组工作成果，讲清经验积累与当前能力 |
| 转岗或跨行业求职 | 找出可迁移的方法、协作能力与结果，解释与新岗位的联系 |
| 晋升或内部竞聘 | 深挖决策、业务责任、团队影响与成果归属，说明职责变化 |
| 自由职业或咨询服务 | 结合客户需求、个人服务边界、交付物与验收结果组织项目履历 |
| 技术、产品、运营、销售、设计或职能岗位 | 按岗位选择提问与证据类型，不要求人人提供代码仓库 |

<a id="start"></a>

## 开始使用

这是供 AI 编程代理读取的 **Skill**，包含访谈与写作指令、HTML 模板和版面检查脚本。需要在支持该机制的代理中使用；不会独立运行成一个求职网站。

### 1. 安装到 Codex

下载或克隆本仓库，将包含 `SKILL.md` 的整个目录命名为 `technical-resume-html`，放入以下一个位置：

```bash
git clone https://github.com/kayaduster607-jpg/technical-resume-html.git
cd technical-resume-html
```

| 使用范围 | 目录 |
| --- | --- |
| 当前用户的项目都可使用 | `~/.agents/skills/technical-resume-html/` |
| 只在某个项目中使用 | `<项目根目录>/.agents/skills/technical-resume-html/` |

目录约定及显式调用方式依据[官方 OpenAI 文档](https://learn.chatgpt.com/docs/build-skills)。安装后若未出现，可重启 Codex；已有同名 skill 时先比较内容，避免重复安装。

<details>
<summary>Windows：从下载后的仓库根目录安装</summary>

在包含 `SKILL.md` 的目录打开 PowerShell，执行：

```powershell
# 检查当前位置，防止把无关目录当作 skill 安装。
$resumeSkillSource = (Get-Location).Path
if (-not (Test-Path -LiteralPath (Join-Path $resumeSkillSource 'SKILL.md'))) {
    throw '请先进入包含 SKILL.md 的仓库根目录。'
}

# 安装到当前用户目录；发现已有版本时停止，保留原文件。
$resumeSkillsRoot = Join-Path $env:USERPROFILE '.agents\skills'
$resumeSkillTarget = Join-Path $resumeSkillsRoot 'technical-resume-html'
if (Test-Path -LiteralPath $resumeSkillTarget) {
    throw '已有同名 skill，请先比较版本。'
}
New-Item -ItemType Directory -Path $resumeSkillsRoot -Force | Out-Null
Copy-Item -LiteralPath $resumeSkillSource -Destination $resumeSkillTarget -Recurse
```

</details>

### 2. 提供一种材料

在 Codex 中选择该 skill，或输入：

```text
使用 $technical-resume-html，帮我整理面向下一步职业机会的简历。

我的目标岗位或使用场景：[填写岗位、求职、转岗或竞聘等]
这是我的现有简历、工作成果或项目资料：[提供文件、正文或路径]
希望使用的语言：[中文、英文或其他语言]

先读材料，多轮追问到能写。
每个关键经历点采用“问题＋解决＋提升效率”，
重点讲清我的个人贡献、关键选择和可证明的改善。
```

现有简历、工作总结、项目资料、业绩复盘或代码仓库提供任意一种即可。目标岗位或 JD 已有的话一起给；材料尚不充分时，先从访谈开始。

### 3. 回答追问，再生成投递材料

写作前会区分：已有依据的事实、需要你确认的推测、没有依据的假设。个人工作与团队成果、已经落地与仍在规划、试点与全面推广分别表述；技术岗位另核对测试环境与生产结果。

信息充分后，按目标语言和岗位生成经历正文与可编辑 HTML；环境支持时导出 PDF，并检查打印版面。面试或竞聘证据提醒保留在简历正文之外，方便后续复习。

<a id="preview"></a>

## 输出长什么样

![由通用 HTML 模板实际渲染的运营协调履历，人物、单位与经历均为虚构教学内容](docs/images/resume-preview.jpg)

上图由[运营协调示例 HTML](examples/operations-resume.html)实际渲染，人物、单位与经历均为虚构教学内容，用来展示 A4 版式。另有[技术岗位示例](examples/demo-resume.html)可供比较。不同岗位会调整栏目、措辞和信息顺序，也可从[通用空白模板](assets/resume-template.html)开始。

- **正文可编辑：**原生 HTML/CSS，姓名、经历和项目都是文字。
- **打印有检查：**检查屏幕与打印模式下的溢出、页脚遮挡和图片错误，并导出 PDF。
- **版面随内容调整：**优先去重和重新分页，保留重要内容的可读性。

## 文件与工具

```text
technical-resume-html/
├── SKILL.md                         # 访谈、三段式写作与交付规则
├── README.md                        # 面向使用者的项目首页
├── README.en.md                     # English documentation
├── agents/openai.yaml               # 技能名称和调用提示
├── assets/resume-template.html      # 可编辑的 A4 简历模板
├── references/
│   ├── problem-solution-efficiency.md
│   ├── html-layout.md
│   └── source-notes.md
├── scripts/validate_resume.cjs       # 浏览器版面检查与 PDF 导出
├── examples/                        # 技术与运营协调的虚构教学示例
└── docs/                            # 配图、生成记录与发布说明
```

访谈和写作由代理执行。HTML 预览只需要浏览器；自动检查另外需要 Node.js、Playwright 和可用的 Chromium 浏览器。详细运行参数见[版式与检查说明](references/html-layout.md)。

已有这些依赖时，在 skill 根目录检查一份成品：

```bash
node scripts/validate_resume.cjs path/to/resume.html --out path/to/qa
```

输出包含逐页截图、`report.json` 和 `resume.pdf`；发现问题时退出码为 `1`。脚本检查版面，事实与技术结论仍需结合原始材料核对。

## 使用时的几个约定

不会读取项目 `.env` 文件或其变体。照片预览在浏览器本地完成；代理读取简历或代码时的隐私边界取决于所用工具与账户配置，提交材料前请移除密钥、客户数据和不便分享的信息。

不编造技术、指标、职位或个人贡献。课程练习如实标注，设计方案保留实际状态。现有简历里的数字也会继续核对来源与口径。

它帮助你把已有能力表达清楚，求职结果仍取决于岗位匹配、实际能力与招聘流程。

## 一起让更多求职者被看见

如果它帮你找回了一个被忽略的工作亮点，欢迎点一个 **Star**，也欢迎分享给正在求职、转岗或整理职业经历的朋友。

欢迎[提交 Issue](https://github.com/kayaduster607-jpg/technical-resume-html/issues)，附上脱敏后的“原始描述 → 追问过程 → 最终条目”，以及你觉得仍没挖清楚的地方。改进访谈、补充案例、优化模板和修复版面检查都很有帮助。

维护者可参考[仓库展示与检索配置](docs/github-presentation.md)。配图生成方式及提示词见[视觉记录](docs/visuals.md)，写作方法来源见[来源说明](references/source-notes.md)。
