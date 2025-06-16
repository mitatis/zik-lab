---
title: Mistral首款推理模型Magistral发布，提供大小Apache 2.0版本
pubDatetime: 2025-06-10 18:55:59+00:00
tags:
- Mistral
- Magistral
- 开源模型
- 推理模型
- 多语言支持
- 金融法律应用
description: Mistral推出开源Magistral Small和专有Magistral Medium模型，后者性能强、成本低，支持多语言及复杂推理，适用于专业领域，采用开源与商业并行的双轨策略。
---

*[源信息](https://venturebeat.com/ai/mistrals-first-reasoning-model-magistral-launches-with-large-and-small-apache-2-0-version/)经过deepseek翻译并总结*

## 摘要：

Mistral发布推理模型Magistral系列，包括开源Apache 2.0协议的240亿参数Magistral Small和专有版Magistral Medium。后者在基准测试中表现优异且定价低于竞品，支持多语言、高速推理及思维链追溯，适用于金融、法律等场景。此次发布通过双轨策略平衡开源与商业发展。

---

以下是翻译后的简体中文内容，已去除广告部分并保留所有原始超链接及Markdown格式：

Mistral首款推理模型Magistral发布：推出Apache 2.0协议的大规模与小规模版本
==================================================================

[作者：Carl Franzen](https://venturebeat.com/author/carlfranzen/ "Carl Franzen的文章")[@carlfranzen](https://twitter.com/carlfranzen)  
2025年6月10日 上午11:55

* [分享到Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fai%2Fmistrals-first-reasoning-model-magistral-launches-with-large-and-small-apache-2-0-version%2F&t=Mistral%E9%A6%96%E6%AC%BE%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8BMagistral%E5%8F%91%E5%B8%83%EF%BC%9A%E6%8E%A8%E5%87%BAApache%202.0%E5%8D%8F%E8%AE%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%B8%8E%E5%B0%8F%E8%A7%84%E6%A8%A1%E7%89%88%E6%9C%AC)
* [分享到Twitter](//twitter.com/intent/tweet?text=Mistral%E9%A6%96%E6%AC%BE%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8BMagistral%E5%8F%91%E5%B8%83%EF%BC%9A%E6%8E%A8%E5%87%BAApache%202.0%E5%8D%8F%E8%AE%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%B8%8E%E5%B0%8F%E8%A7%84%E6%A8%A1%E7%89%88%E6%9C%AC&url=https%3A%2F%2Fventurebeat.com%2Fai%2Fmistrals-first-reasoning-model-magistral-launches-with-large-and-small-apache-2-0-version%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [分享到LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fai%2Fmistrals-first-reasoning-model-magistral-launches-with-large-and-small-apache-2-0-version%2F&token=&isFramed=true)

---

欧洲AI巨头[Mistral今日发布Magistral](https://mistral.ai/news/magistral)，这是该公司首个进军"推理"领域的大语言模型（LLM）家族，该模型能通过反思纠正错误，解决比基础文本生成更复杂的任务。此次发布采用双轨策略：面向企业客户的专有版Magistral Medium，以及开源的240亿参数版本Magistral Small。

后者彰显了公司回归开源的决心。此前Mistral因推出闭源企业模型（如[2025年5月发布的Medium 3](https://venturebeat.com/ai/mistral-comes-out-swinging-for-enterprise-ai-customers-with-new-le-chat-enterprise-medium-3-model/)而受到质疑。

回归开源初心
-----------------------------
[Mistral将Magistral Small置于宽松的Apache 2.0开源协议下](https://huggingface.co/mistralai/Magistral-Small-2506)，允许自由商用和修改。这一举措对初创公司和成熟企业都意义重大，尤其在公司因Medium 3转向闭源后引发社区担忧之际，此次发布重新确立了其开源承诺。

竞品性能对标
--------------------------------
在AIME-24数学基准测试中，Magistral-Medium准确率达73.6%，多数投票模式下更飙升至90%。该模型在GPQA Diamond（研究生级问答基准）和LiveCodeBench（编程挑战）等测试中也表现优异，与Deepseek-V3等竞品形成有力竞争。

企业级实力
----------------
专供企业使用的**Magistral Medium**可通过Le Chat界面和La Plateforme API调用，并登陆Amazon SageMaker等主流云平台（后续将扩展至Azure AI、IBM WatsonX和Google Cloud Marketplace）。这种双轨策略使Mistral既能培育开源生态，又能通过高性能模型实现商业变现。

成本对比
---------------
Magistral Medium定价为每百万输入token 2美元/输出token 5美元，虽比自家Mistral Medium 3（输入0.4美元/输出2美元）昂贵，但显著低于OpenAI和Gemini 2.5 Pro（输出token 8-10美元），相较Anthropic的Claude Opus 4更是性价比突出。

透明、多语言、高速的推理体验
------------------------------------------
Magistral系列主打三大优势：  
1. 可追溯的"思维链"设计，适用于法律/金融/医疗等高风险领域  
2. 支持法语、西班牙语、德语、意大利语、阿拉伯语、俄语和简体中文的多语言能力  
3. 新推出的"思考模式"和"快速应答"功能，宣称比竞品快10倍的token处理速度

应用场景拓展
---------------------------------------------
从金融建模、法律分析到软件架构设计，Magistral适用于所有需要精密推理的场景。Mistral甚至演示了其单次生成物理仿真的能力，同时推荐其作为"创意伙伴"用于连贯或"趣味性"的文学创作。

通过Magistral，Mistral正试图在AI推理领域实现技术领先与开源普惠的双重突破。正如公司所暗示的，未来推理AI的发展方向将兼具高性能与开放性。### 你所需的AI前沿洞察  

提交  

感谢订阅。查看更多[VB新闻通讯请点击此处](/newsletters/)。  

发生错误。  

（注：严格遵循翻译要求，保留原Markdown格式、链接位置及功能文本，未添加任何额外内容或代码块标识）