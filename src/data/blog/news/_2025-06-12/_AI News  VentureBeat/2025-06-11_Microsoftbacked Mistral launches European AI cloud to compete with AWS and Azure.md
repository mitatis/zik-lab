---
title: 微软支持的Mistral推出欧洲AI云服务 挑战AWS和Azure
pubDatetime: 2025-06-11 17:51:22+00:00
tags:
- Mistral Compute
- 英伟达Grace Blackwell
- 欧洲AI云服务
- 数据主权
- 在线强化学习
- Magistral模型
description: 法国AI初创公司Mistral推出欧洲AI云服务平台Mistral Compute，搭载18,000块英伟达芯片，提供多语言模型和垂直解决方案，旨在减少欧洲对美国云服务的依赖。
---

*[源信息](https://venturebeat.com/ai/microsoft-backed-mistral-launches-european-ai-cloud-to-compete-with-aws-and-azure/)经过deepseek翻译并总结*

## 摘要：

微软支持的法国AI初创公司Mistral推出欧洲AI云服务平台Mistral Compute，搭载18,000块英伟达Grace Blackwell芯片，挑战AWS和Azure，减少欧洲对美国云服务的依赖。平台发布Magistral系列推理模型，支持多语言并具备涌现能力，采用"在线强化学习"技术实现GPU间秒级模型更新。强调数据主权和环保，确保数据留在欧盟并使用脱碳能源。Mistral从模型供应商转型为综合AI平台，提供垂直解决方案，获微软超10亿美元支持，被视为欧洲挑战美国AI主导地位的关键一步。

---

以下是翻译后的简体中文内容，已去除广告部分并保留所有原始超链接及Markdown格式：

---

微软支持的Mistral推出欧洲AI云服务 挑战AWS和Azure
=================================================================================

作者：[Michael Nuñez](https://venturebeat.com/author/michael_nunez/ "Michael Nuñez的文章") [@MichaelFNunez](https://twitter.com/MichaelFNunez)  
2025年6月11日 上午10:51  

* [分享到Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fai%2Fmicrosoft-backed-mistral-launches-european-ai-cloud-to-compete-with-aws-and-azure%2F&t=微软支持的Mistral推出欧洲AI云服务挑战AWS和Azure)
* [分享到Twitter](//twitter.com/intent/tweet?text=微软支持的Mistral推出欧洲AI云服务挑战AWS和Azure&url=https%3A%2F%2Fventurebeat.com%2Fai%2Fmicrosoft-backed-mistral-launches-european-ai-cloud-to-compete-with-aws-and-azure%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [分享到LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fai%2Fmicrosoft-backed-mistral-launches-european-ai-cloud-to-compete-with-aws-and-azure%2F&token=&isFramed=true)

图片来源：VentureBeat（Midjourney生成）

---

法国人工智能初创公司[Mistral AI](https://mistral.ai/)周三宣布全面扩展AI基础设施业务，推出欧洲版AI云服务平台以挑战美国云计算巨头，同时发布媲美OpenAI最先进系统的新型推理模型。

这家总部位于巴黎的公司发布了与[Nvidia](https://www.nvidia.com/)合作构建的[Mistral Compute](https://mistral.ai/news/mistral-compute)平台，旨在为欧洲企业和政府提供替代方案，减少对[亚马逊AWS](https://aws.amazon.com/)、[微软Azure](https://azure.microsoft.com/)和[谷歌云](https://cloud.google.com/)等美国云服务商的依赖。此举标志着Mistral从单纯开发AI模型转向控制完整技术栈的战略转型。

"进军AI基础设施是Mistral AI的关键转折点，让我们能够覆盖AI价值链的核心环节，"Mistral AI CEO兼联合创始人Arthur Mensch表示，"我们肩负着确保解决方案既能推动创新和AI应用，又能维护欧洲技术主权并促进其可持续发展领导地位的责任。"

### Mistral如何构建多语言推理模型

除基础设施外，Mistral还推出了[Magistral](https://venturebeat.com/ai/mistrals-first-reasoning-model-magistral-launches-with-large-and-small-apache-2-0-version/)系列推理模型，其逐步逻辑推理能力可与OpenAI的[o1模型](https://openai.com/o1/)和中国的[DeepSeek R1](https://api-docs.deepseek.com/news/news250120)媲美。但首席科学家Guillaume Lample指出，该公司的技术路线存在关键差异。

"我们从零开始构建一切，目的是掌握核心技术灵活性，"Lample在独家专访中告诉我，"我们建立了真正高效的在线强化学习训练流程。"与竞争对手不同，Mistral的模型会向用户展示完整思维链，且支持用户母语而非默认英语。"用户可以阅读母语呈现的完整推理过程，判断其合理性。"

公司发布两个版本：开源模型[Magistral Small](https://mistral.ai/news/magistral)（240亿参数）和通过API提供的更强力专有系统[Magistral Medium](https://mistral.ai/news/magistral)。

### 训练过程中涌现的意外能力

这些模型在训练中展现出令人惊讶的"涌现能力"。最突出的是，尽管训练仅聚焦文本数学和编程问题，Magistral Medium仍保留了图像分析的多模态推理能力。

"我们发现，如果在强化学习训练末期重新接入视觉编码器，模型会突然获得图像推理能力，这完全超出预期，"Lample解释道。模型还具备复杂函数调用能力，可自动执行多步网络搜索和代码运行来解答复杂查询。"它会思考后判断信息是否需要更新，执行网络搜索并分析结果，甚至可能发起二次搜索。"这种行为无需专门训练就能自然涌现。

### 突破性训练技术

Mistral技术团队攻克重大工程挑战，开发出Lample所称的"在线强化学习"系统，使AI模型能在生成响应时持续改进，而非依赖既有训练数据。关键创新在于实时同步数百块GPU的模型更新。"我们实现了GPU间的模型权重秒级更新，而非传统耗时数小时的方式，"Lample表示。这套自研系统的训练效率远超开源方案，"成本远低于常规预训练，后者通常需要数周甚至数月"。

### 英伟达助力欧洲AI自主

[Mistral Compute](https://mistral.ai/news/mistral-compute)平台将搭载18,000块英伟达最新[Grace Blackwell芯片](https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/)，首座数据中心设于法国埃松省，未来将扩展至全欧洲。英伟达CEO黄仁勋称此合作为"欧洲技术主权的关键"。他在巴黎联合发布会上表示："每个国家都应自主发展AI。通过与Mistral合作，我们正在打造服务欧洲企业的智能规模化平台。"黄仁勋预测欧洲AI算力未来两年将增长十倍，计划建设20多座"AI工厂"，部分设施容量将超1吉瓦，跻身全球最大数据中心之列。

### 解决环境与主权问题

[Mistral Compute](https://mistral.ai/news/mistral-compute)针对AI发展的两大痛点——环境影响和数据主权——提供解决方案。平台确保欧洲客户数据留在欧盟境内并受欧洲法律管辖。公司已与法国生态转型机构和气候咨询公司Carbone 4合作，评估并最小化AI模型全生命周期的碳足迹，计划采用脱碳能源为数据中心供电。

### 速度优势带来实用价值

早期测试显示，Mistral推理模型在保持竞争力的同时解决了现有系统的速度瓶颈。当前主流推理模型响应复杂查询可能需要数分钟，而Mistral的解决方案"通常能在5秒内输出结果，极大改善了使用体验"。这种速度优势对企业场景尤为重要。

### 全球AI竞争新格局

Mistral进军基础设施领域，直接挑战主导云计算市场的科技巨头。其差异化在于提供从硬件基础设施到AI模型再到软件服务的垂直整合解决方案，包括开发者平台[Mistral AI Studio](https://mistral.ai/products/la-plateforme)、企业生产力工具[Le Chat](https://mistral.ai/products/le-chat)和编程辅助系统[Mistral Code](https://mistral.ai/news/mistral-code)。行业分析师认为这反映了区域化AI发展趋势。随着欧盟对美企技术依赖的担忧加剧，该计划恰逢其时——欧盟已承诺200亿欧元建设AI"超级工厂"，而[Mistral与英伟达的合作](https://www.bloomberg.com/news/articles/2025-06-11/nvidia-teams-up-with-startup-mistral-as-part-of-european-ai-push)将加速这一进程。

获得微软等投资者超10亿美元支持的Mistral，正从单纯的模型供应商转型为综合AI平台。Lample透露："内部测试显示模型性能曾连续六周保持每周5%的准确率提升。"这场欧洲对美AI主导地位的挑战能否成功，最终取决于客户对主权和可持续性的重视程度。但至少，他们现在有了选择。

--- 

（注：已按要求去除所有广告内容，保留原文所有有效超链接及Markdown格式）### 你所需的AI洞察力  

提交  

感谢订阅。查看更多[VB新闻通讯请点击此处](/newsletters/)。  

发生错误。