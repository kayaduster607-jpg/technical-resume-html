# 视觉记录

## 创作目标

围绕找工作、找实习的人展开：让真实实力更容易被招聘者理解与看见。简历深挖、文字表达和 HTML 输出是实现目标的手段。

封面采用求职者走向明亮职业空间的意象，暖白、深蓝和自然光，避免将纸张或工具能力作为视觉主角。封面不是产品界面截图，不表达已经获得面试或录用的事实。

## 资源

- `images/hero.png`：内置 ImageGen 生成的原始封面。
- `images/hero.jpg`：同一封面的 README 展示导出。
- `images/social-preview.jpg`：同一封面的 1280 × 640 社交预览导出。
- `images/resume-preview.jpg`：由 `examples/demo-resume.html` 实际渲染；人物、单位、经历与效果均为虚构教学内容，只演示排版和条目组织。
- `images/workflow.png`：内置 ImageGen 绘制的四阶段流程信息图；以深蓝、暖白和金色细线展示材料、深挖、价值表达与投递准备。
- `images/workflow.jpg`：相同流程图的 README 展示导出；逻辑源见 `workflow.mmd`，生成提示词与调整记录见 [流程图设计记录](workflow-design.md)。

封面使用内置 `image_gen`，没有调用 CLI/API 回退。导出仅调整文件格式和分辨率，不改变画面内容。

## 最终封面提示词

```text
Use case: ads-marketing. Create a completely new original wide horizontal GitHub project cover, about 2:1 aspect ratio. Audience: Chinese students and early-career developers looking for their next internship or job. The central promise is helping a person's real abilities be seen by recruiters and suitable opportunities; resume crafting is only the means. Do not focus the cover on documents or on an AI tool's technical power. Main exact Chinese headline, very large and beautifully typeset: “让你的实力，” on one line, “被机会看见。” on the next. Secondary exact copy: “找工作 · 找实习 · 从真实项目出发”. Small quiet product label only: “technical-resume-html”. Art direction: an emotionally resonant premium editorial illustration, warm ivory tactile background, deep ink-blue wide Chinese typography, a single rich cobalt structural accent and gentle warm sunlight. A small, thoughtfully rendered gender-neutral young job seeker in dark-blue simple clothing stands on a luminous path through an open architectural doorway, moving from the muted foreground into a warmer inviting professional space where two softly silhouetted people are turning toward them. The person's individuality and calm confidence matter more than the door. Light entering from the doorway visibly reveals a previously quiet figure; metaphor for being noticed for real skill. Use sophisticated paper sculpture / architectural model material, subtle grain, believable soft shadows and refined depth. Innovative expansive composition: headline across the upper left and center, meaningful human scene in the lower right, generous negative space, strong readable hierarchy on a GitHub README, all elements inside generous safe margins. Make the image calm, hopeful, human, memorable and genuinely art-directed. No resume pages, no document stacks, no code windows, no robot or AI-brain motifs, no floating cards, no trophy, no fake job offers, no fake logos, no stars counts, no guarantee of employment, no fear-based messaging, no decorative badges or watermarks. Chinese text must match exactly; no other text.
```
