---
title: 为什么大多数企业人工智能代理从未投入生产，以及Databricks计划如何解决这一问题
pubDatetime: 2025-06-11 13:00:00+00:00
tags:
- 企业AI智能体
- Mosaic Agent Bricks
- 自动优化技术
- TAO无标注数据调整
- 合成数据生成
- Lakeflow数据工程平台
description: Databricks推出的Mosaic Agent Bricks平台通过自动优化技术和数据工程整合，解决企业AI智能体生产化难题，实现高效评估与系统优化。
---

*[源信息](https://venturebeat.com/ai/why-most-enterprise-ai-agents-never-reach-production-and-how-databricks-plans-to-fix-it/)经过deepseek翻译并总结*

## 摘要：

企业AI智能体难以投入生产主要因低效的人工评估流程。Databricks推出的Mosaic Agent Bricks平台通过自动优化技术（如TAO无标注数据调整、合成数据生成）解决该问题，提供四类智能体配置，并与Lakeflow数据工程平台协同确保数据基础。其人类反馈驱动学习机制替代提示词堆砌，实现系统级优化，相比Langchain等竞品优势在于自动化整合技术。企业需重视评估机制和数据基础以释放智能体潜力。

---

为何大多数企业AI智能体无法投入生产及Databricks的解决之道
=======================================================================================

作者：[Sean Michael Kerner](https://venturebeat.com/author/sean-michael-kerner/ "Sean Michael Kerner的文章")[@TechJournalist](https://twitter.com/TechJournalist)

2025年6月11日 上午6:00

* [分享到Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fai%2Fwhy-most-enterprise-ai-agents-never-reach-production-and-how-databricks-plans-to-fix-it%2F&t=为何大多数企业AI智能体无法投入生产及Databricks的解决之道)
* [分享到Twitter](//twitter.com/intent/tweet?text=为何大多数企业AI智能体无法投入生产及Databricks的解决之道&url=https%3A%2F%2Fventurebeat.com%2Fai%2Fwhy-most-enterprise-ai-agents-never-reach-production-and-how-databricks-plans-to-fix-it%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [分享到LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fai%2Fwhy-most-enterprise-ai-agents-never-reach-production-and-how-databricks-plans-to-fix-it%2F&token=&isFramed=true)

图片来源：VentureBeat使用Stable Diffusion 3.5 Large生成

---

许多企业AI智能体开发项目从未投入生产，问题并非技术不成熟。据[Databricks](https://www.databricks.com/)分析，症结在于企业仍依赖人工评估流程——这种流程缓慢、不一致且难以扩展。

在今年的Data + AI峰会上，Databricks推出了Mosaic Agent Bricks解决方案。该技术基于2024年发布的[Mosaic AI智能体框架](https://venturebeat.com/data-infrastructure/databricks-bolsters-mosaic-ai-with-tools-to-build-and-evaluate-compound-ai-systems/)进一步扩展。简而言之，仅能构建AI智能体已不足以产生实际影响。

Mosaic Agent Bricks平台通过系列研究创新实现智能体自动优化。关键创新包括集成[TAO](https://venturebeat.com/data-infrastructure/the-tao-of-data-how-databricks-is-optimizing-ai-llm-fine-tuning-without-data-labels/)（测试时自适应优化），无需标注数据即可调整AI模型。该平台还能生成领域特定合成数据、创建任务感知基准，并自动优化质量与成本平衡。

该平台旨在解决Databricks用户在现有AI智能体开发中遇到的痛点。

"用户如同盲飞，缺乏评估智能体的有效方法。"Databricks神经网络首席技术官Hanlin Tang告诉VentureBeat，"多数人依赖主观感受判断智能体表现，这种缺乏量化依据的评估难以支撑生产环境部署。"

从研究创新到企业级生产规模
----------------------------------------------------------

Tang此前是Mosaic联合创始人兼CTO，该公司于2023年被Databricks以[13亿美元收购](https://venturebeat.com/data-infrastructure/databricks-is-acquiring-mosaicml-for-a-jaw-dropping-1-3-billion/)。

在Mosaic时期，许多研究创新并未直接产生企业影响。收购后情况彻底改变。

"关键转折点是产品登陆Databricks平台后，一夜之间我们就获得了数千家企业用户。"Tang表示。相较之下，收购前他们需耗费数月才能争取少数企业试用。整合后，研究团队得以直接接触规模化企业需求，从而发现新的研究方向。

"只有深度接触企业客户，才能真正发现值得研究的问题。Agent Bricks某种程度上是Mosaic所有工作的进化成果——现在我们都是真正的'Bricksters'了。"Tang解释道。

解决智能体AI评估危机
----------------------------------------

企业团队面临高成本的试错优化过程。缺乏任务感知基准和领域特定测试数据，每次调整都变成昂贵猜测。随之而来的是质量漂移、成本超支和工期延误。

Agent Bricks自动化整个优化流程。平台接收高层级任务描述和企业数据后，将自动完成后续工作：首先生成任务特定评估和LLM评判器，接着创建模拟客户数据的合成数据，最后搜索最优配置方案。

"客户只需描述高层级问题，底层细节由系统处理。"Tang介绍，"系统会生成合成数据，并为每个任务构建定制化LLM评判器。"

平台提供四种智能体配置：

* **信息提取**：将文档（PDF、邮件）转为结构化数据。例如零售企业可从供应商PDF中提取复杂格式的产品详情。
* **知识助手**：基于企业数据提供带引用的精准答案。例如制造厂技师无需翻阅手册即可获取设备维护指南。
* **定制LLM**：处理文本转换任务（摘要、分类）。例如医疗机构可定制临床工作流所需的病历摘要模型。
* **多智能体监管器**：协调复杂工作流中的多个智能体。例如金融机构可协同意图识别、文档检索和合规审查智能体。

智能体虽好，数据基础不可或缺
---------------------------------------------

构建和评估智能体只是企业AI落地的环节之一。Databricks将Mosaic Agent Bricks定位为统一数据栈顶层的AI消费层。

在Data + AI峰会上，Databricks还宣布了2024年预览的[Lakeflow数据工程](https://venturebeat.com/ai/databricks-data-and-ai-summit-2024-the-biggest-innovations/)平台正式发布。Lakeflow解决数据准备挑战，统一了过去需要多工具完成的三个关键流程：结构化/非结构化数据摄取、高效数据清洗与转换、生产工作流调度。

其工作流直接关联：Lakeflow通过统一摄取和转换准备企业数据，Agent Bricks基于这些数据构建优化智能体。

"我们帮助数据接入平台，之后用户可进行ML、BI和AI分析。"Databricks产品管理高级总监Bilal Aslam向VentureBeat表示。

除数据摄取外，Mosaic Agent Bricks还受益于Databricks Unity Catalog的治理功能，包括访问控制和数据血缘追踪，确保智能体行为自动符合企业治理要求。

人类反馈驱动的智能体学习根治提示词堆砌
-------------------------------------------------------------

当前引导AI智能体的常见方法是使用系统提示词。Tang称之为"提示词堆砌"——用户将各种指引塞入提示词，期望智能体遵循。

Agent Bricks引入"人类反馈驱动的智能体学习"新概念，能基于自然语言指引自动调整系统组件。Tang表示，提示词堆砌常因智能体系统存在多个需调整组件而失效。新方法在智能体系统层级（而非单个模型参数）实现类似人类反馈强化学习（[RLHF](https://venturebeat.com/ai/how-reinforcement-learning-with-human-feedback-is-unlocking-the-power-of-generative-ai/)）的效果。

该系统解决两大核心挑战：一是自然语言指引的模糊性（例如"遵循品牌调性"的实际含义），二是智能体系统众多配置点的定位难题。

"这能让智能体变得更具可引导性。"Tang强调。

相较现有框架的技术优势
---------------------------------------------

当前市场中已有[Langchain](https://venturebeat.com/ai/reduce-model-integration-costs-while-scaling-ai-langchains-open-ecosystem-delivers-where-closed-vendors-cant/)、[微软](https://venturebeat.com/ai/microsoft-announces-over-50-ai-tools-to-build-the-agentic-web-at-build-2025/)和[谷歌](https://venturebeat.com/ai/googles-new-agent-development-kit-lets-enterprises-rapidly-prototype-and-deploy-ai-agents-without-recoding/)等多家厂商的智能体开发工具。

Tang认为Mosaic Agent Bricks的差异化在于自动化优化。平台自动整合TAO、上下文学习、提示词优化和微调等多种研究技术，无需手动配置。

关于智能体间通信，目前市场有谷歌的[Agent2Agent协议](https://venturebeat.com/ai/googles-agent2agent-interoperability-protocol-aims-to-standardize-agentic-communication/)等方案。Tang透露Databricks正在评估多种协议，尚未确定单一标准。当前Agent Bricks通过两种主要方式处理通信：

1. 将智能体暴露为支持不同协议的端点
2. 使用支持MCP（模型上下文协议）的多智能体监管器

对企业决策者的战略启示
-----------------------------------------------------

对于致力AI领先的企业，建立质量与效果评估机制至关重要。未经评估部署智能体难以获得最优结果，缺乏数据基础的智能体同样无效。考虑智能体开发技术时，必须配备科学的评估机制。

人类反馈驱动的智能体学习方法同样值得关注，它能有效引导智能体AI达成最佳结果。对企业而言，这意味着评估基础设施不再是部署障碍，可将资源集中于用例识别和数据准备而非框架构建。