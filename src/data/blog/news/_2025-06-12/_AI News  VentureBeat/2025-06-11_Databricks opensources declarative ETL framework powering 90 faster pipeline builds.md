---
title: Databricks开源声明式ETL框架，助力管道构建提速90%
pubDatetime: 2025-06-11 17:29:32+00:00
tags:
- Databricks
- Apache Spark Declarative Pipelines
- Delta Live Tables
- 数据流水线
- SQL/Python声明式编程
- 批处理/流处理
description: Databricks开源Spark Declarative Pipelines框架，通过SQL/Python声明式编程将数据流水线效率提升90%，支持批流处理及多数据源。
---

*[源信息](https://venturebeat.com/data-infrastructure/databricks-open-sources-declarative-etl-framework-powering-90-faster-pipeline-builds/)经过deepseek翻译并总结*

## 摘要：

Databricks在2025年Data + AI峰会上开源了Apache Spark Declarative Pipelines框架，源自Delta Live Tables，可将数据流水线构建效率提升90%。用户通过SQL或Python声明目标后，Spark自动处理执行、依赖和错误恢复，支持批处理、流处理及多数据源。该技术经Block等企业验证能大幅减少开发维护时间。与Snowflake的Openflow方案不同，Databricks提供端到端处理能力。开源版本将并入Spark代码库，商业版Lakeflow同步发布。

---

```markdown
Databricks 开源声明式 ETL 框架，助力流水线构建速度提升 90% | VentureBeat

[跳至正文](#primary)

[活动](https://venturebeat.com/events/)  
[视频](/video/)  
[特刊](/venturebeat-special-issues/)  
[招聘](https://jobs.venturebeat.com/?source=navbar&utm_source=navbar&utm_medium=partner_referral)  

[返回 VentureBeat 首页](/)

[订阅](/newsletters/?utm_source=VBsite&utm_medium=desktopNav)

* [人工智能](/category/ai/)
  + [全部](/category/ai/)
  + [AI、ML 与深度学习](/tag/ai-ml-deep-learning/)
  + [自动机器学习](/tag/auto-ml/)
  + [数据标注](/tag/data-labelling/)
  + [合成数据](/tag/synthetic-data/)
  + [对话式 AI](/tag/conversational-ai/)
  + [自然语言处理](/tag/nlp/)
  + [文本转语音](/tag/text-to-speech/)
* [安全](/category/security/)
  + [全部](/category/security/)
  + [数据安全与隐私](/tag/data-security-privacy/)
  + [网络安全与隐私](/tag/network-security-privacy/)
  + [软件安全](/tag/software-security/)
  + [计算机硬件安全](/tag/computer-hardware-security/)
  + [云与数据存储安全](/tag/cloud-data-storage-security/)
* [数据基础设施](/category/data-infrastructure/)
  + [全部](/category/data-infrastructure/)
  + [数据科学](/tag/data-science/)
  + [数据管理](/tag/data-management/)
  + [数据存储与云](/tag/data-storage-cloud/)
  + [大数据与分析](/tag/big-data-and-analytics/)
  + [数据网络](/tag/data-networks/)
* [自动化](/category/automation/)
  + [全部](/category/automation/)
  + [工业自动化](/tag/industrial-automation/)
  + [业务流程自动化](/tag/business-process-automation/)
  + [开发自动化](/tag/development-automation/)
  + [机器人流程自动化](/tag/robotic-process-automation/)
  + [测试自动化](/tag/test-automation/)
* [企业分析](/category/enterprise-analytics/)
  + [全部](/category/enterprise-analytics/)
  + [商业智能](/tag/business-intelligence/)
  + [灾难恢复与业务连续性](/tag/disaster-recovery-business-continuity/)
  + [统计分析](/tag/statistical-analysis/)
  + [预测分析](/tag/predictive-analysis/)
* 更多分类
  + [数据决策者](/category/datadecisionmakers/)
  + [虚拟通讯](/category/virtual/)
    - [团队协作](/tag/team-collaboration/)
    - [统一通信即服务](/tag/ucaas/)
    - [虚拟现实协作](/tag/virtual-reality-collaboration/)
    - [虚拟员工体验](/tag/virtual-employee-experience/)
  + [编程与开发](/category/programming-development/)
    - [产品开发](/tag/product-development/)
    - [应用开发](/tag/application-development/)
    - [测试管理](/tag/test-management/)
    - [开发语言](/tag/development-languages/)

[订阅](/newsletters/?utm_source=VBsite&utm_medium=mobileNav)  
[活动](https://venturebeat.com/events/)  
[视频](/video/)  
[特刊](/venturebeat-special-issues/)  
[招聘](https://jobs.venturebeat.com/?source=navbar&utm_source=navbar&utm_medium=partner_referral)  

独家

Databricks 开源声明式 ETL 框架，助力流水线构建速度提升 90%
=================================================================

[Shubham Sharma](https://venturebeat.com/author/shubham-sharma/)  
[@mr\_bumss](https://twitter.com/mr_bumss)  

2025 年 6 月 11 日 上午 10:29  

* [分享至 Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fdata-infrastructure%2Fdatabricks-open-sources-declarative-etl-framework-powering-90-faster-pipeline-builds%2F&t=Databricks%20开源声明式%20ETL%20框架，助力流水线构建速度提升%2090%25)
* [分享至 X](//twitter.com/intent/tweet?text=Databricks%20开源声明式%20ETL%20框架，助力流水线构建速度提升%2090%25&url=https%3A%2F%2Fventurebeat.com%2Fdata-infrastructure%2Fdatabricks-open-sources-declarative-etl-framework-powering-90-faster-pipeline-builds%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [分享至 LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fdata-infrastructure%2Fdatabricks-open-sources-declarative-etl-framework-powering-90-faster-pipeline-builds%2F)

*图片来源：VentureBeat，通过 Ideogram 生成*

---

在年度 [Data + AI 峰会](https://www.databricks.com/dataaisummit)上，[Databricks](https://www.databricks.com/) 宣布将其核心声明式 ETL 框架开源为 Apache Spark Declarative Pipelines，即将在 Apache Spark 的后续版本中向社区开放。

该框架最初于 2022 年作为 [Delta Live Tables (DLT)](https://venturebeat.com/data-infrastructure/databricks-launches-delta-live-tables-in-general-availability/) 发布，现已扩展为帮助团队端到端构建和运营可靠、可扩展的数据流水线。此次开源举措强化了该公司对开放生态的承诺，同时也意在超越竞争对手 Snowflake——后者最近推出了自己的数据集成服务 Openflow（数据工程的关键组件）。

Snowflake 的服务基于 Apache NiFi，旨在将各类数据集中到其平台，而 Databricks 则选择将其内部流水线工程技术开源，允许用户在任意支持 Apache Spark 的环境中运行，而不仅限于其自有平台。

### 声明流水线，其余交给 Spark

传统数据工程存在三大痛点：复杂的流水线编写、手动操作负担以及需要为批处理和流处理维护独立系统。通过 Spark Declarative Pipelines，工程师只需用 SQL 或 Python 描述流水线目标，Apache Spark 将自动处理执行。该框架会跟踪表间依赖关系、管理表的创建与演进，并处理生产环境中的并行执行、检查点和重试等操作。

“您只需声明数据集和数据流，Apache Spark 会自动生成最优执行计划。”Databricks 杰出软件工程师 Michael Armbrust 在接受 VentureBeat 采访时表示。该框架原生支持批处理、流处理及半结构化数据（包括来自 Amazon S3、ADLS 或 GCS 等对象存储的文件）。工程师通过单一 API 即可定义实时和周期性处理，流水线定义会在执行前验证以提前发现问题，无需维护独立系统。

“它专为现代数据需求设计，例如支持 AI 系统的变更数据捕获、消息总线和实时分析。只要 Apache Spark 能处理的数据，这些流水线就能应对。”Armbrust 解释道。他还指出，声明式方法是 Databricks 简化 Apache Spark 的最新尝试。

### 规模化验证

虽然该声明式流水线框架尚未正式并入 Spark 代码库，但其能力已被数千家通过 Databricks Lakeflow 解决方案使用的企业所验证，处理场景涵盖每日批处理报告到亚秒级流式应用。效果显著：开发时间和维护任务大幅减少，性能、延迟或成本（取决于优化目标）显著提升。

金融公司 Block 使用该框架将开发时间缩短 90% 以上，Navy Federal Credit Union 则将流水线维护时间减少 99%。基于 Spark Structured Streaming 引擎的声明式流水线允许团队根据需求定制延迟，最低可达实时流式处理。

### 与 Snowflake 的差异化路径

Snowflake 在近期大会上推出了名为 Openflow 的数据摄取服务，但其范围与 Databricks 有所不同。Openflow 基于 Apache NiFi，主要聚焦数据集成和向 Snowflake 平台的迁移，用户仍需在数据到达后执行清洗、转换和聚合。而 Spark Declarative Pipelines 则实现了从数据源到可用数据的端到端处理。

### 发布时间表

Apache Spark Declarative Pipelines 将在 Apache Spark 的后续版本中提交代码库，具体时间尚未明确。此次开源与 Databricks Lakeflow Declarative Pipelines（包含额外企业功能和支持的商业版本）的正式发布同步进行。

[Databricks Data + AI 峰会](https://www.databricks.com/dataaisummit) 于 2025 年 6 月 9 日至 12 日举行。

* [返回 VentureBeat 首页](/)
* [在 Facebook 关注我们](https://www.facebook.com/venturebeat/)
* [在 X 关注我们](https://twitter.com/venturebeat)
* [在 LinkedIn 关注我们](https://www.linkedin.com/company/venturebeat)
* [通过 RSS 订阅](https://feeds.feedburner.com/venturebeat/SZYF)

© 2025 [VentureBeat](https://venturebeat.com/)。保留所有权利。
```### 您所需的深度洞察，远离喧嚣

提交

感谢您的订阅。查看更多 [VB 简报请点击此处](/newsletters/)。

发生错误。