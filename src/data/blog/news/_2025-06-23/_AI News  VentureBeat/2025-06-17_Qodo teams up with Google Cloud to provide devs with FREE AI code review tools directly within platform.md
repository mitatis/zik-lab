---
title: Qodo与Google Cloud合作，为开发者提供平台内免费AI代码审查工具
pubDatetime: 2025-06-17 13:10:45+00:00
tags:
- Qodo
- 谷歌云
- AI代码审查
- Gemini模型
- 开源模型
- 代码完整性标准
description: 以色列AI编码公司Qodo与谷歌云合作推出免费AI代码审查工具Qodo Merge（基于Gemini），并提供开源模型及模块化企业方案，助力开发者提升代码质量。
---

*[源信息](https://venturebeat.com/programming-development/qodo-teams-up-with-google-cloud-to-provide-devs-with-free-ai-code-review-tools-directly-within-platform/)经过deepseek翻译并总结*

## 摘要：

以色列AI编码公司Qodo（前身Codium）与谷歌云合作，为开发者提供免费AI代码审查工具Qodo Merge（基于Gemini模型），并集成至谷歌云服务。其开源模型Qodo-Embed-1-1.5B在代码检索中表现优异，Qodo Gen代码助手整合Gemini 2.5 Pro提供精准建议。企业可采用模块化方案，Intuit和英伟达已部署。参与谷歌云创业计划可获商业产品折扣。Qodo致力于建立跨平台代码完整性标准，确保AI生成代码质量。

---

Qodo与谷歌云合作 为开发者提供平台内免费AI代码审查工具
=======================================================================================================

[作者：Carl Franzen](https://venturebeat.com/author/carlfranzen/ "Carl Franzen的文章")[@carlfranzen](https://twitter.com/carlfranzen)

2025年6月17日 上午6:10

* [Facebook分享](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fprogramming-development%2Fqodo-teams-up-with-google-cloud-to-provide-devs-with-free-ai-code-review-tools-directly-within-platform%2F&t=Qodo与谷歌云合作为开发者提供平台内免费AI代码审查工具)
* [X分享](//twitter.com/intent/tweet?text=Qodo与谷歌云合作为开发者提供平台内免费AI代码审查工具&url=https%3A%2F%2Fventurebeat.com%2Fprogramming-development%2Fqodo-teams-up-with-google-cloud-to-provide-devs-with-free-ai-code-review-tools-directly-within-platform%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [LinkedIn分享](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fprogramming-development%2Fqodo-teams-up-with-google-cloud-to-provide-devs-with-free-ai-code-review-tools-directly-within-platform%2F&token=&isFramed=true)

---

专注于代码质量的以色列AI编码新锐[Qodo](https://www.qodo.ai/)宣布与谷歌云达成合作，共同提升AI生成软件的可靠性。随着企业日益依赖人工智能生成大量代码，对有效监督和质量保障工具的需求正快速增长。

Qodo首席执行官Itamar Friedman表示，AI生成代码已从辅助角色转变为现代开发的基础组成部分。"想象未来所有代码都由AI编写，人类将无法逐行审查，"Friedman说，"必须建立机制来确保代码背后的价值观和意图得以贯彻。"

### Qodo的发展历程
在本次合作前，Qodo已在企业软件开发领域取得显著进展。该公司前身为Codium，[2024年秋季更名为Qodo](https://www.qodo.ai/blog/introducing-qodo-a-new-name-the-same-commitment-to-quality/)，以体现其对整体代码质量和AI驱动工程支持的专注。

2025年2月，Qodo发布**Qodo-Embed-1-1.5B**开源代码嵌入模型取得[重大突破](https://venturebeat.com/programming-development/qodos-open-code-embedding-model-sets-new-enterprise-standard-beating-openai-salesforce/)。这个15亿参数的轻量级模型在代码信息检索基准测试(CoIR)中超越OpenAI和Salesforce的更大规模方案，专为帮助开发团队在多语言代码库中精准搜索和上下文检索而设计。

2024年12月，Qodo在AWS re:Invent发布[全自动回归测试工具](https://venturebeat.com/ai/qodos-fully-autonomous-agent-tackles-the-complexities-of-regression-testing/)**Qodo Cover**，成功为Hugging Face的PyTorch Image Models开源库贡献验证代码。

### 开源项目免费代码审查
合作核心是采用谷歌Gemini模型的**Qodo Merge**代码审查工具，可分析潜在缺陷、结构问题和规范偏离。该工具将免费提供给开源项目维护者。

"通过帮助开源项目保持最高质量标准，我们正在强化整个开发生态的基础模块，"Friedman解释道。

### 深度集成生态系统
Qodo工具现已原生集成至谷歌云服务，包括入驻Vertex AI模型花园的**QodoEmbed**。"我们的代码嵌入模型现可通过谷歌云平台轻松部署，"Friedman表示。该模型支持快速精准的代码检索，优化了企业级RAG流程实施。

### 基于Gemini 2.5 Pro的增强代码辅助
**Qodo Gen**代码助手整合谷歌Gemini 2.5 Pro后，可提供更精准的上下文感知建议，支持全自动提交-审查工作流。

### 模块化企业解决方案
Qodo提供"无头"(headless)和"有头"(head-full)两种模式，支持通过API/CLI灵活集成。Intuit和英伟达等财富500强已采用其方案，英伟达曾在行业活动中展示Qodo工具与其AI工作流的整合。

### 面向创业公司的谷歌云优惠
通过参与谷歌云创业支持计划，符合条件的新创公司可获得商业产品50%折扣。"我们致力于消除开发速度与质量间的取舍，"Friedman强调。

### 质量至上的承诺
Friedman将Qodo比作"代码界的Datadog"——无论代码来源如何，始终提供中立的质量验证。随着AI驱动开发成为常态，Qodo正通过谷歌云等平台建立跨平台代码完整性标准。### 您所需的洞察，无需杂音干扰

提交

感谢订阅。查看更多[VB新闻通讯请点击此处](/newsletters/)。

发生错误。