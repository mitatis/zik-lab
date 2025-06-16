---
title: 在扩展前将审计追踪嵌入人工智能系统的理由
pubDatetime: 2025-06-13 20:13:09+00:00
tags:
- AI审计追踪
- 合规性
- 可观察性
- 版本控制
- 透明工具
- 闭源系统
description: AI规模化需嵌入审计追踪以确保合规可控，企业应优先设计透明管道并选择可观察工具，避免黑盒系统。
---

*[源信息](https://venturebeat.com/ai/the-case-for-embedding-audit-trails-in-ai-systems-before-scaling/)经过deepseek翻译并总结*

## 摘要：

AI系统规模化前需嵌入审计追踪以确保可管理性、合规性，企业应早期设计包含可观察性和审计日志的管道，利用数据盘点、版本控制和透明工具（如MLFlow、LangChain）。闭源系统可能缺乏灵活性，合规工具（如AWS、Microsoft）可监控政策遵守。企业应选择透明系统，避免黑盒决策，部署前建立基线评估性能。VB Transform 2025将探讨相关实践。

---

规模化前在AI系统中嵌入审计追踪的必要性 | VentureBeat

[跳过主内容](#primary)

[活动](https://venturebeat.com/events/)
[视频](/video/)
[专题报道](/venturebeat-special-issues/)
[招聘](https://jobs.venturebeat.com/?source=navbar&utm_source=navbar&utm_medium=partner_referral)

[VentureBeat首页](/)

[订阅](/newsletters/?utm_source=VBsite&utm_medium=desktopNav)

* [人工智能](/category/ai/)
  + [全部](/category/ai/)
  + [AI、ML与深度学习](/tag/ai-ml-deep-learning/)
  + [自动机器学习](/tag/auto-ml/)
  + [数据标注](/tag/data-labelling/)
  + [合成数据](/tag/synthetic-data/)
  + [对话式AI](/tag/conversational-ai/)
  + [自然语言处理](/tag/nlp/)
  + [文本转语音](/tag/text-to-speech/)* [安全](/category/security/)
    + [全部](/category/security/)
    + [数据安全与隐私](/tag/data-security-privacy/)
    + [网络安全与隐私](/tag/network-security-privacy/)
    + [软件安全](/tag/software-security/)
    + [计算机硬件安全](/tag/computer-hardware-security/)
    + [云与数据存储安全](/tag/cloud-data-storage-security/)* [数据基础设施](/category/data-infrastructure/)
      + [全部](/category/data-infrastructure/)
      + [数据科学](/tag/data-science/)
      + [数据管理](/tag/data-management/)
      + [数据存储与云](/tag/data-storage-cloud/)
      + [大数据与分析](/tag/big-data-and-analytics/)
      + [数据网络](/tag/data-networks/)* [自动化](/category/automation/)
        + [全部](/category/automation/)
        + [工业自动化](/tag/industrial-automation/)
        + [业务流程自动化](/tag/business-process-automation/)
        + [开发自动化](/tag/development-automation/)
        + [机器人流程自动化](/tag/robotic-process-automation/)
        + [测试自动化](/tag/test-automation/)* [企业分析](/category/enterprise-analytics/)
          + [全部](/category/enterprise-analytics/)
          + [商业智能](/tag/business-intelligence/)
          + [灾难恢复与业务连续性](/tag/disaster-recovery-business-continuity/)
          + [统计分析](/tag/statistical-analysis/)
          + [预测分析](/tag/predictive-analysis/)* 更多 
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

[订阅](/newsletters/?utm_source=VBsite&utm_medium=mobileNav)
[活动](https://venturebeat.com/events/)
[视频](/video/)
[专题报道](/venturebeat-special-issues/)
[招聘](https://jobs.venturebeat.com/?source=navbar&utm_source=navbar&utm_medium=partner_referral)

规模化前在AI系统中嵌入审计追踪的必要性
================================================================

[Emilia David](https://venturebeat.com/author/emilia-david/ "Emilia David的文章")[@miyadavid](http://x.com/miyadavid)

2025年6月13日 下午1:13

* [分享到Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fai%2Fthe-case-for-embedding-audit-trails-in-ai-systems-before-scaling%2F&t=规模化前在AI系统中嵌入审计追踪的必要性)
* [分享到X](//twitter.com/intent/tweet?text=规模化前在AI系统中嵌入审计追踪的必要性&url=https%3A%2F%2Fventurebeat.com%2Fai%2Fthe-case-for-embedding-audit-trails-in-ai-systems-before-scaling%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [分享到LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fai%2Fthe-case-for-embedding-audit-trails-in-ai-systems-before-scaling%2F&token=&isFramed=true)

图片来源：VentureBeat，由ChatGPT生成

*加入近二十年来企业领导者信赖的盛会。VB Transform汇聚了制定真实企业AI战略的精英。[了解更多](http://vbtransform.com/)*

---

*编者注：Emilia将于本月在VB Transform主持关于此主题的编辑圆桌会议。[立即注册](https://www.vbtransform.com/?utm_source=vb&utm_medium=article&utm_content=transformpromo&utm_campaign=vbarticles)。*

AI服务的编排框架对企业具有多重功能。它们不仅规定了应用程序或代理的协作流程，还应让管理员能够管理工作流和代理，并审计其系统。

随着企业开始规模化其AI服务并将其投入生产，构建可管理、可追踪、可审计且[健壮的管道](https://venturebeat.com/ai/build-or-buy-scaling-your-enterprise-gen-ai-in-pipeline-in-2025/)确保其代理按预期运行。没有这些控制措施，组织可能无法了解其AI系统中发生的情况，只有在问题出现或未能遵守法规时才发现问题，但为时已晚。

企业编排公司[Airia](https://airia.com/about/)的总裁Kevin Kiley在接受VentureBeat采访时表示，框架必须包含可审计性和可追踪性。

“拥有这种可观察性并能够回溯审计日志以展示在特定时间点提供了哪些信息至关重要，”Kiley说。“你需要知道这是恶意行为者、不知情分享信息的内部员工，还是幻觉导致的。你需要这些记录。”

理想情况下，健壮性和审计追踪应在非常早期的阶段就内置到AI系统中。了解新AI应用或代理的潜在风险，并确保它们在部署前持续符合标准，将有助于缓解将AI投入生产的担忧。

然而，组织最初在设计系统时并未考虑[可追踪性和可审计性](https://venturebeat.com/data-infrastructure/the-new-paradigm-architecting-the-data-stack-for-ai-agents/)。许多AI试点项目最初是作为实验开始的，没有编排层或审计追踪。

企业现在面临的大问题是如何管理所有代理和应用程序，[确保其管道保持健壮](https://venturebeat.com/data-infrastructure/databricks-open-sources-declarative-etl-framework-powering-90-faster-pipeline-builds/)，并在出现问题时知道问题出在哪里，同时监控AI性能。

选择正确的方法
-------------------------

然而，专家表示，在构建任何AI应用之前，组织需要[盘点其数据](https://venturebeat.com/data-infrastructure/snowflakes-openflow-tackles-ais-toughest-engineering-challenge-data-ingestion-at-scale/)。如果公司知道哪些数据允许AI系统访问，以及哪些数据用于微调模型，他们就有了与长期性能进行比较的基线。

“当你运行一些AI系统时，更多的是关于，我可以用什么样的数据来验证我的系统是否正常运行？”[DataDog](https://www.datadoghq.com/)产品副总裁Yrieix Garnier在接受VentureBeat采访时表示。“这实际上非常困难，很难理解我有正确的参考系统来验证AI解决方案。”

一旦组织识别并定位了其数据，就需要建立数据集版本控制——本质上是分配时间戳或版本号——以使实验可重现，并了解模型的变化。这些数据集和模型、任何使用这些特定模型或代理的应用程序、授权用户以及基线运行时数字可以加载到编排或可观察性平台中。

就像选择基础模型构建时一样，编排团队需要考虑透明度和开放性。虽然一些闭源编排系统具有诸多优势，但更多的开源平台也可能提供一些企业重视的好处，例如增加对决策系统的可见性。

像[MLFlow](https://mlflow.org/)、[LangChain](https://www.langchain.com/)和[Grafana](https://grafana.com/)这样的开源平台为代理和模型提供了细粒度和灵活的指令与监控。企业可以选择通过单一的端到端平台（如DataDog）或利用[AWS](https://aws.amazon.com/)的各种互连工具来开发其AI管道。

企业的另一个考虑是插入一个系统，将代理和应用程序响应映射到合规工具或负责任的AI政策。[AWS](https://aws.amazon.com/)和[Microsoft](http://www.microsoft.com)都提供服务，跟踪AI工具及其如何遵守用户设置的护栏和其他政策。

Kiley表示，企业在构建这些可靠管道时的一个考虑因素是选择更透明的系统。对Kiley来说，不了解AI系统如何工作是不可行的。

“无论用例或行业是什么，你都会遇到必须灵活应对的情况，而封闭系统无法胜任。市场上有一些提供优秀工具的供应商，但它就像一个黑盒子。我不知道它是如何做出这些决定的。我没有能力在可能需要干预的点上进行拦截或干预，”他说。

在VB Transform加入讨论
-------------------------------------

我将于2025年6月24日至25日在旧金山主持VB Transform 2025的编辑圆桌会议，主题为“构建代理AI编排框架的最佳实践”，希望你能加入讨论。[立即注册](https://www.vbtransform.com/?utm_source=vb&utm_medium=article&utm_content=transformpromo&utm_campaign=vbarticles)。

**每日商业用例洞察与VB Daily**

如果你想给老板留下深刻印象，VB Daily能帮到你。我们为你提供企业如何运用生成式AI的内幕消息，从监管变化到实际部署，让你能分享见解以获得最大投资回报。

立即订阅

阅读我们的[隐私政策](/terms-of-service/)

感谢订阅。查看更多[VB新闻通讯](/newsletters/)。

发生错误。

企业AI实现之地——加入我们参加VB Transform 2025
------------------------------------------------------------

6月24日至25日，与顶尖领袖齐聚旧金山，解决真实挑战，分享已验证策略，并塑造AI的未来于VB Transform 2025。

[了解更多](https://www.vbtransform.com/)

* [VentureBeat首页](/)
* [在Facebook关注我们](https://www.facebook.com/venturebeat/)
* [在X关注我们](https://twitter.com/venturebeat)
* [在LinkedIn关注我们](https://www.linkedin.com/company/venturebeat)
* [通过RSS关注我们](https://feeds.feedburner.com/venturebeat/SZYF)

* [新闻稿](/tag/business-sponsored-company-news/)
* [联系我们](/contact/)
* [广告](https://media.venturebeat.com/)
* [分享新闻线索](/contact/)
* [投稿DataDecisionMakers](/guest-posts/)

* [隐私政策](/privacy-policy/)
* [服务条款](/terms-of-service/)
* 请勿出售我的个人信息

© 2025 [VentureBeat](https://venturebeat.com/)。保留所有权利。

×### 引领你所需的AI洞察

提交

感谢订阅。查看更多[VB新闻通讯请点击此处](/newsletters/)。

发生了一个错误。