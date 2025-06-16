---
title: 资产蔓延、数据孤岛与CloudQuery对统一云治理的探索
pubDatetime: 2025-06-11 13:30:00+00:00
tags:
- 企业云资源管理
- 数据孤岛
- CloudQuery
- SQL查询
- 无服务器数据湖
- 跨云IP管理
description: CloudQuery通过集中存储云资产并提供SQL查询，解决企业云资源分散问题，近期获1600万美元融资以扩展可视化方案。
---

*[源信息](https://venturebeat.com/data-infrastructure/asset-sprawl-siloed-data-and-cloudquerys-search-for-unified-cloud-governance/)经过deepseek翻译并总结*

## 摘要：

企业云资源管理面临分散化和数据孤岛问题，现有工具在整合成本、安全数据方面存在局限。CloudQuery通过集中存储云资产、安全元数据和成本数据，支持SQL查询和报告，提供统一视图。其采用开发者优先策略，基于ClickHouse和Apache Arrow技术，从60多个数据源提取数据形成标准化资产清单。Hexagon案例展示了其在构建无服务器数据湖中的应用，解决了跨云IP管理等挑战。该公司近期获1600万美元融资，将扩展云可视化方案。

---

以下是翻译后的简体中文Markdown内容，已去除广告并保留所有超链接和原始格式：

```markdown
资源分散、数据孤岛与CloudQuery对统一云治理的探索 | VentureBeat

[跳过至主内容](#primary)

[活动](https://venturebeat.com/events/)
[视频](/video/)
[特刊](/venturebeat-special-issues/)
[招聘](https://jobs.venturebeat.com/?source=navbar&utm_source=navbar&utm_medium=partner_referral)

[VentureBeat首页](/)

[订阅](/newsletters/?utm_source=VBsite&utm_medium=desktopNav)

* [人工智能](/category/ai/)
  + [查看全部](/category/ai/)
  + [AI、ML与深度学习](/tag/ai-ml-deep-learning/)
  + [自动化机器学习](/tag/auto-ml/)
  + [数据标注](/tag/data-labelling/)
  + [合成数据](/tag/synthetic-data/)
  + [对话式AI](/tag/conversational-ai/)
  + [自然语言处理](/tag/nlp/)
  + [文本转语音](/tag/text-to-speech/)
* [安全](/category/security/)
  + [查看全部](/category/security/)
  + [数据安全与隐私](/tag/data-security-privacy/)
  + [网络安全与隐私](/tag/network-security-privacy/)
  + [软件安全](/tag/software-security/)
  + [计算机硬件安全](/tag/computer-hardware-security/)
  + [云与数据存储安全](/tag/cloud-data-storage-security/)
* [数据基础设施](/category/data-infrastructure/)
  + [查看全部](/category/data-infrastructure/)
  + [数据科学](/tag/data-science/)
  + [数据管理](/tag/data-management/)
  + [数据存储与云](/tag/data-storage-cloud/)
  + [大数据与分析](/tag/big-data-and-analytics/)
  + [数据网络](/tag/data-networks/)
* [自动化](/category/automation/)
  + [查看全部](/category/automation/)
  + [工业自动化](/tag/industrial-automation/)
  + [业务流程自动化](/tag/business-process-automation/)
  + [开发自动化](/tag/development-automation/)
  + [机器人流程自动化](/tag/robotic-process-automation/)
  + [测试自动化](/tag/test-automation/)
* [企业分析](/category/enterprise-analytics/)
  + [查看全部](/category/enterprise-analytics/)
  + [商业智能](/tag/business-intelligence/)
  + [灾备与业务连续性](/tag/disaster-recovery-business-continuity/)
  + [统计分析](/tag/statistical-analysis/)
  + [预测分析](/tag/predictive-analysis/)
* 更多
  + [数据决策者](/category/datadecisionmakers/)
  + [虚拟通信](/category/virtual/)
    - [团队协作](/tag/team-collaboration/)
    - [统一通信即服务](/tag/ucaas/)
    - [虚拟现实协作](/tag/virtual-reality-collaboration/)
    - [虚拟员工体验](/tag/virtual-employee-experience/)
  + [编程与开发](/category/programming-development/)
    - [产品开发](/tag/product-development/)
    - [应用开发](/tag/application-development/)
    - [测试管理](/tag/test-management/)
    - [开发语言](/tag/development-languages/)

独家报道：资源分散、数据孤岛与CloudQuery对统一云治理的探索
================================================================

[Taryn Plumb](https://venturebeat.com/author/taryn-plumb/ "Taryn Plumb的文章")[@taryn\_plumb](https://twitter.com/taryn_plumb)

2025年6月11日 上午6:30

* [分享到Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fdata-infrastructure%2Fasset-sprawl-siloed-data-and-cloudquerys-search-for-unified-cloud-governance%2F&t=资源分散、数据孤岛与CloudQuery对统一云治理的探索)
* [分享到X](//twitter.com/intent/tweet?text=资源分散、数据孤岛与CloudQuery对统一云治理的探索&url=https%3A%2F%2Fventurebeat.com%2Fdata-infrastructure%2Fasset-sprawl-siloed-data-and-cloudquerys-search-for-unified-cloud-governance%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [分享到LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fdata-infrastructure%2Fasset-sprawl-siloed-data-and-cloudquerys-search-for-unified-cloud-governance%2F&token=&isFramed=true)

VentureBeat/Midjourney

---

对企业云资源实现可视化并最终获得洞察正变得日益困难。

云资产呈现分散化和碎片化趋势，现有工具的库存管理功能往往局限且反直觉——例如将成本数据和[安全数据](https://venturebeat.com/security/top-five-security-principles-driving-open-source-cyber-apps-at-scale/)割裂在不同平台，缺乏灵活性。

云治理公司[CloudQuery](https://www.cloudquery.io/)正通过将云资产、安全元数据和成本数据集中存储，并支持通过简易的内置SQL查询和报告进行访问来解决这一问题。该公司采用开发者优先的云治理方案，从AWS、GCP、Azure、Okta和Wiz等60多个数据源提取数据，汇入统一的可查询数据仓库。

该公司宣布获得由Partech领投的1600万美元融资，将进一步扩展其云可视化方案。

"现有工具的最大问题在于形成孤岛——安全、成本、资产库存各自为政，难以获得跨领域的统一视图，"CloudQuery创始人Yevgeny Pats告诉VentureBeat，"即便是'已关机的EC2实例挂载了哪些EBS卷？'这类简单问题，也需要拼接多个工具才能回答。"

*(编者注：我们将在本月VB Transform大会举办"数据质量：生成式AI及未来的信任与性能基石"专题讨论。[立即注册](https://www.vbtransform.com/?utm_source=vb&utm_medium=article&utm_content=transformpromo&utm_campaign=vbarticles))*

技术内核
-------------------------

CloudQuery底层采用两大关键技术：ClickHouse开源数据仓库和Apache Arrow数据分析框架。

这套基于Go语言构建的高性能插件架构直连AWS、Azure、谷歌云平台(GCP)等API接口，抓取配置、安全和[成本元数据](https://venturebeat.com/data-infrastructure/how-sp-is-using-deep-web-scraping-ensemble-learning-and-snowflake-architecture-to-collect-5x-more-data-on-smes/)。该平台持续从数十家云服务商同步数据，形成标准化、集中化的资产清单。

"我们特别注重数据准确性和时效性，通过高频同步确保团队使用最新可靠数据，"Pats解释道。数据采用关系型结构以支持SQL引擎和内置报告功能，使团队能完全自主分析，无需依赖黑盒工具。

该公司"选择性"运用[大语言模型](https://venturebeat.com/ai/voice-ai-that-actually-converts-new-tts-model-boosts-sales-15-for-major-brands/)处理自然语言查询、SQL生成和推荐，"但始终建立在准确透明的基础数据之上"。Pats指出，由于Claude和OpenAI等工具能理解SQL语法，用户可用自然语言生成定制化分析报告。

开发者优先策略至关重要，因为开发者才是实际构建、运营和保障云基础设施的群体。而多数云可视化工具采用自上而下的治理模式，并未服务于一线人员。

"当开发者能够通过SQL等熟悉语言自由访问数据时，他们就能更快发现问题，构建更安全的系统，"Pats表示。实际使用场景已超越资产清单范畴："客户从可视化起步，很快扩展到合规监控、安全态势管理、成本优化等应用场景。"

Hexagon如何构建全云存储的无服务器数据湖
-----------------------------------------------------------------

软件公司[Hexagon](https://hexagon.com/)的云卓越中心(CCoE)团队曾计划构建全云账户数据的无服务器数据湖，要求支持SQL查询、AWS QuickSight可视化，并能追溯云配置历史。

该团队利用CloudQuery构建无服务器数据管道：从所有账户收集数据存入S3，通过AWS Glue导入Glue DB，最终由Athena查询并在QuickSight呈现。"无服务器架构是关键要求，"Hexagon云治理与FinOps专家Peter Figueiredo与CloudQuery工程总监Herman Schaaf在[博客](https://www.cloudquery.io/blog/how-hexagon-built-an-infrastructure-data-lake)中写道："这带来免维护、零更新等显著优势。"

他们克服了Amazon S3插件支持等挑战。作为首批测试S3目的地功能的用户，Hexagon团队推动了三项改进：
* Parquet格式支持：最初仅支持CSV/JSON格式，因JSON解析问题新增Parquet格式
* 数据分区：新增写入时分区功能，减少后续处理步骤
* Athena资源视图：针对Athena不兼容Postgres的问题，新增表清单检索功能

Figueiredo团队还用CloudQuery替代了AWS昂贵的VPC IP地址管理器(IPAM)，实现跨云IP统一管理。"我们以'数据湖'模式运行，采用超低成本架构包括S3、ECS、Glue等，"Figueiredo告诉VentureBeat，"现在能快速查询任意IP归属，这彻底改变了我们的工作方式。"

企业级AI实践平台——VB Transform 2025邀您参与
------------------------------------------------------------

6月24-25日旧金山峰会，与行业领袖共同解决真实挑战，分享已验证策略，塑造AI未来。

[了解更多](https://www.vbtransform.com/)

* [VentureBeat首页](/)
* [Facebook关注我们](https://www.facebook.com/venturebeat/)
* [X关注我们](https://twitter.com/venturebeat)
* [LinkedIn关注我们](https://www.linkedin.com/company/venturebeat)
* [RSS订阅](https://feeds.feedburner.com/venturebeat/SZYF)

* [新闻稿](/tag/business-sponsored-company-news/)
* [联系我们](/contact/)
* [广告合作](https://media.venturebeat.com/)
* [新闻线索](/contact/)
* [投稿DataDecisionMakers](/guest-posts/)

* [隐私政策](/privacy-policy/)
* [服务条款](/terms-of-service/)
* 请勿出售我的个人信息

© 2025 [VentureBeat](https://venturebeat.com/) 版权所有
```### 您需要的高效洞察，无冗余干扰

提交

感谢您的订阅。查看更多[VB资讯简报请点击此处](/newsletters/)。

发生错误