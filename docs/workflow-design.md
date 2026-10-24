# 流程图设计记录

## 设计目标

将 GitHub 默认 Mermaid 的细小横排图，改为在 README 正文宽度下可阅读的四阶段信息图。采用深蓝底、暖白纸张、金色箭头与立体物件，呼应“让真实实力被看见”的求职定位。

- 提供材料：现有简历、工作成果或项目资料。
- 深挖经历：梳理事实、追问贡献、找证据；信息不足就在此阶段继续追问。
- 写清价值：事实充分后，按问题＋解决＋提升效率逐点写作。
- 准备投递：组织 HTML 排版并检查 PDF。

图解将完整流程合并为四个阶段；完整逻辑保留在 [workflow.mmd](workflow.mmd)。深挖阶段下方的循环图标只表示该阶段重复访谈，不表示写完后才补问事实。

当前图解已拓展为通用职业场景并提供英文版；更新提示词见[双语配图记录](career-localization.md)。下方的初始提示词保留其历史技术求职语境，供追溯构图过程。

## 生成方式

使用内置 `image_gen` 绘制。最终版经过一次局部调整，将长回路线改为深挖阶段下方的局部循环标记，保证标题无遮挡。图片 JPEG 导出只调整格式，不改变画面内容。

源图：[workflow.png](images/workflow.png)。README 使用：[workflow.jpg](images/workflow.jpg)。

## 初始生成提示词

```text
Use case: infographic-diagram. Create ONE original premium, publication-quality horizontal Chinese workflow infographic for a GitHub README about helping students and junior developers make their true abilities visible while seeking jobs and internships. This replaces a tiny default Mermaid diagram. Wide landscape, about 2.25:1 ratio, high resolution and exceptionally readable at 900px display width. Strong art direction: matte midnight-navy background (#0b182b), tactile ivory paper (#f5f1e8), rich cobalt-blue elements, restrained warm brushed-gold routing lines, sophisticated editorial typography. A refined architectural model / physical information-design aesthetic, with subtle paper sculpture, controlled lighting and dimensional shadows, excellent optical alignment. Four evenly spaced, large stages connected LEFT TO RIGHT by clear single-direction fine warm-gold arrows. Each stage has a beautiful bespoke small three-dimensional editorial object above its readable label: 01 a tidy project folder with a simple code sheet; 02 a magnifying glass over annotated project material and a conversation bubble; 03 three aligned ivory typographic strips representing the three-part value argument; 04 a crisp prepared document beside an open blue doorway with inviting warm light, symbolizing readiness to be seen. Objects should enhance meaning without crowding text. No rectangles enclosing whole stages, no card-within-card layout. Large, elegant Chinese header at top-left, exact text: “让真实实力，一步步被看见”. Small restrained top-right label: “technical-resume-html”. The four stage titles MUST be large and exactly: “01 提供材料”, “02 深挖项目”, “03 写清价值”, “04 准备投递”. Each stage has ONE readable subtitle, exactly respectively: “项目地址 / 现有简历”; “读实现 · 问贡献 · 找证据”; “问题 ＋ 解决 ＋ 提升效率”; “HTML 排版 · PDF 检查”. IMPORTANT LOGIC: immediately beneath stage 02 show one distinct elegant curved return arrow whose arrowhead returns to stage 02 itself, clearly labelled “信息不足，继续追问”. The forward arrow from stage 02 toward stage 03 must carry the small but readable label “事实充分后”. The feedback loop must not point to stage 01 or to any later stage. This is the key condition in the workflow. Make routing easy to follow with no crossing or ambiguous arrows. Generous margins, integrated composition, larger text than a typical software flowchart, no unnecessary paragraphs or microtext. Beautiful measured visual hierarchy, expensive editorial visual character, strong contrast, human-centered hopeful tone. All Chinese spelling must be exact. No generic purple boxes, neon effects, gradients, robot icons, fake GitHub interface controls, zoom buttons, browser chrome, stock-watermarks, fake employment guarantees or extra labels.
```

## 最终采用的调整提示词

```text
Edit the attached infographic. Preserve ALL artwork, title, four stages, every existing stage title and subtitle, the three horizontal left-to-right arrows, and the connector label “事实充分后” exactly. Make only this precise change to the bottom feedback indicator: completely REMOVE the long curved gold U-shaped arrow and both of its endpoints from the original image. Replace it with one neat compact GOLD CIRCULAR RETURN-ARROW ICON followed by the exact gold text “信息不足，继续追问”. Position this icon-and-text group wholly in the empty bottom area DIRECTLY UNDER STAGE 02, BELOW the stage 02 subtitle “读实现 · 问贡献 · 找证据”, with generous vertical spacing; center the entire group beneath stage 02 only. The group must fit entirely within stage 02 column. It is a local repeat indicator, not a connecting line to another stage. NO long curved connectors anywhere; NO arrows near or across stage titles; NO connector from stage 03 back to stage 02. The icon is a simple single circular arrow pointing back to itself and does not connect to any other line. Leave the rest of the diagram completely unchanged. The final layout should be clean, spacious, correctly spelled and logically unambiguous.
```

