---
title: 大规模削减云资源浪费：Akamai借助Kubernete编排AI代理实现70%成本节省
pubDatetime: 2025-06-16 23:11:15+00:00
tags:
- Akamai Technologies
- Cast AI
- Kubernetes
- 云资源优化
- 机器学习
- 自动化扩缩容
description: Akamai通过Cast AI的自动化AI方案优化多云资源，减少40%-70%浪费并降低管理成本，同时保障安全与性能。
---

*[源信息](https://venturebeat.com/data-infrastructure/cutting-cloud-waste-at-scale-akamai-saves-70-using-ai-agents-orchestrated-by-kubernetes/)经过deepseek翻译并总结*

## 摘要：

Akamai Technologies利用Cast AI平台的应用程序性能自动化（APA）解决方案，通过Kubernetes编排的AI代理成功减少40%-70%云资源浪费。该方案采用机器学习与强化学习算法，实时监控并自动优化多云环境中的成本、安全及性能，支持自动扩缩容、装箱算法优化和Spot实例管理。Akamai云工程高级总监Dekel Shavit指出，方案显著降低云支出并减少手动管理负担。Cast AI创始人Laurent Gil强调平台遵循"人在回路"原则，所有操作均在客户专属Kubernetes集群内完成，确保数据安全。该方案帮助Akamai在复杂基础设施和严格服务水平协议下实现成本与性能平衡，尤其有效应对突发流量。

---

大规模削减云资源浪费：Akamai通过Kubernetes编排的AI代理节省70%成本 | VentureBeat  

[跳过主内容](#primary)  

[活动](https://venturebeat.com/events/)  
[视频](/video/)  
[专题](/venturebeat-special-issues/)  
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
  + [灾难恢复与业务连续性](/tag/disaster-recovery-business-continuity/)  
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

[订阅](/newsletters/?utm_source=VBsite&utm_medium=mobileNav)  
[活动](https://venturebeat.com/events/)  
[视频](/video/)  
[专题](/venturebeat-special-issues/)  
[招聘](https://jobs.venturebeat.com/?source=navbar&utm_source=navbar&utm_medium=partner_referral)  

大规模削减云资源浪费：Akamai通过Kubernetes编排的AI代理节省70%成本  
================================================================  

[Taryn Plumb](https://venturebeat.com/author/taryn-plumb/ "Taryn Plumb的文章")[@taryn\_plumb](https://twitter.com/taryn_plumb)  
2025年6月16日 下午4:11  

* [分享至Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fdata-infrastructure%2Fcutting-cloud-waste-at-scale-akamai-saves-70-using-ai-agents-orchestrated-by-kubernetes%2F&t=大规模削减云资源浪费：Akamai通过Kubernetes编排的AI代理节省70%成本)  
* [分享至X](//twitter.com/intent/tweet?text=大规模削减云资源浪费：Akamai通过Kubernetes编排的AI代理节省70%成本&url=https%3A%2F%2Fventurebeat.com%2Fdata-infrastructure%2Fcutting-cloud-waste-at-scale-akamai-saves-70-using-ai-agents-orchestrated-by-kubernetes%2F&via=VentureBeat&related=VentureBeat,GamesBeat)  
* [分享至LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fdata-infrastructure%2Fcutting-cloud-waste-at-scale-akamai-saves-70-using-ai-agents-orchestrated-by-kubernetes%2F&token=&isFramed=true)  

VentureBeat/Midjourney  

*近二十年来，企业领导者信赖的盛会。VB Transform汇聚了制定真实企业AI战略的精英。[了解更多](http://vbtransform.com/)*  

---  

在生成式AI兴起的当下，云成本已达到历史高点。但这不仅仅是因为企业使用了更多算力——而是未能高效利用。事实上，今年企业预计将因不必要的云支出浪费[445亿美元](https://www.itpro.com/cloud/cloud-computing/enterprises-are-set-to-waste-usd44-5-billion-on-needless-cloud-spending-this-year-the-growing-disconnect-between-finops-and-engineering-teams-is-a-key-factor)。  

对于[Akamai Technologies](https://www.akamai.com/)而言，这一问题尤为突出：该公司在多云环境中拥有庞大而复杂的基础设施，同时还面临严格的安全要求。  

为解决这一问题，这家网络安全与内容交付提供商选择了应用程序性能自动化平台[Cast AI](https://cast.ai/)，其AI代理可优化多云环境中的成本、安全性与速度。最终，该平台帮助Akamai根据不同工作负载削减了40%至70%的云成本。  

“我们需要一种持续优化基础设施并降低云成本的方法，同时不牺牲性能，”Akamai云工程高级总监Dekel Shavit告诉VentureBeat。“我们是处理安全事件的环节，延迟不是选项。若无法实时响应安全攻击，我们就失败了。”  

### 监控、分析与行动的专用代理  

Kubernetes管理着运行应用程序的基础设施，使其更易于部署、扩展和管理，尤其在[云原生](https://venturebeat.com/data-infrastructure/asset-sprawl-siloed-data-and-cloudquerys-search-for-unified-cloud-governance/)和微服务架构中。  

Cast AI创始人兼总裁Laurent Gil解释，该平台已集成至Kubernetes生态，帮助客户扩展集群与工作负载、选择最佳基础设施并管理计算生命周期。其核心平台“应用程序性能自动化（APA）”通过一组专用代理运行，持续监控、分析并采取行动以提升应用性能、安全性、效率与成本。企业仅需从AWS、微软或谷歌等云服务商按需调配计算资源。  

APA由多个基于历史数据与学习模式的机器学习（ML）和强化学习（RL）模型驱动，并辅以可观测性工具堆栈和启发式算法。它与多云环境下的基础设施即代码（IaC）工具结合，形成全自动化平台。  

Gil强调，APA的核心理念是可观测性仅是起点——“基础而非目标”。Cast AI支持渐进式采用，客户无需推翻现有系统，即可集成至现有工具与工作流。此外，所有分析与操作均在客户专属的Kubernetes集群内完成，确保数据不外泄，增强安全性与控制力。  

Gil还指出“以人为中心”的重要性：“自动化辅助人类决策”，APA始终保持“人在回路”的工作流程。  

### Akamai的独特挑战  

Shavit表示，Akamai庞大而复杂的[云基础设施](https://venturebeat.com/ai/microsoft-backed-mistral-launches-european-ai-cloud-to-compete-with-aws-and-azure/)为内容分发网络（CDN）和网络安全服务提供支持，服务于“全球要求最严苛的客户与行业”，同时需遵守严格的服务水平协议（SLA）和性能要求。  

他提到，在某些服务领域，他们可能是供应商的最大客户，并与超大规模云服务商合作进行了“大量核心工程与重构”以满足需求。此外，Akamai服务于不同规模与行业的客户，包括大型金融机构与信用卡公司，其服务直接关系到客户的安全态势。  

最终，Akamai需要在复杂性与成本间取得平衡。Shavit指出，真实攻击可能导致特定基础设施组件的容量激增100倍或1000倍，但“提前将云容量扩展1000倍在财务上不可行”。团队曾考虑从代码侧优化，但业务模型的复杂性迫使其聚焦于核心基础设施本身。  

### 全自动优化Kubernetes基础设施  

Shavit解释，Akamai真正需要的是一个能实时优化跨多云环境下[核心基础设施](https://venturebeat.com/data-infrastructure/databricks-open-sources-declarative-etl-framework-powering-90-faster-pipeline-builds/)成本的Kubernetes自动化平台，并基于需求波动动态扩展应用，同时不牺牲性能。  

在采用Cast前，Akamai的DevOps团队每月仅手动调整Kubernetes工作负载数次。面对庞大而复杂的基础设施，这一过程既困难又昂贵，且间歇性分析显然无法实现实时优化潜力。“如今，数百个Cast代理每秒都在执行相同调整，”Shavit说。  

Akamai使用的APA核心功能包括：自动扩缩容、通过装箱算法（最小化资源单元使用）实现深度Kubernetes自动化、自动选择最具成本效益的计算实例、工作负载规模调整、Spot实例全生命周期自动化以及成本分析能力。  

“集成两分钟后我们就获得了成本分析洞察，这是前所未有的，”Shavit表示。“代理激活后，优化自动启动，节省立即显现。”  

Spot实例（以折扣价使用闲置云容量）在商业逻辑上具有吸引力，但由于Akamai复杂的Apache Spark等工作负载，实际操作困难重重。Shavit指出，这迫使团队要么过度设计工作负载，要么投入更多人力，反而违背了财务初衷。  

通过Cast AI，团队得以“零工程投入”在Spark上使用Spot实例。其价值“极其明显”，只需找到合适工具即可。这也成为选择Cast的关键原因之一。  

尽管节省2-3倍的云账单令人欣喜，但Shavit强调“无需人工干预的自动化”才是“无价之宝”，带来了“巨大”的时间节省。此前，团队需“不断调整旋钮与开关”以确保生产环境与客户服务达标。  

“最大的好处无疑是无需再手动管理基础设施，”Shavit总结道。“Cast代理团队现已接管此事，让我们的团队能专注于最重要的事：更快为客户交付功能。”  

*编者注：本月[VB Transform](https://www.vbtransform.com/?utm_source=vb&utm_medium=article&utm_content=transformpromo&utm_campaign=vbarticles)大会上，谷歌云CTO Will Grannis与Highmark Health高级副总裁兼首席分析官Richard Clarke将探讨医疗领域的新AI技术栈，以及在复杂监管环境中部署多模型AI系统的现实挑战。[立即注册](https://www.vbtransform.com/?utm_source=vb&utm_medium=article&utm_content=transformpromo&utm_campaign=vbarticles)。*  

**VB每日商业用例洞察**  

若想给老板留下深刻印象，VB每日为您提供内幕。我们分享企业在生成式AI领域的实践，从法规变动到实际部署，助您掌握最大化投资回报的洞见。  

[立即订阅](https://venturebeat.com/newsletters/)  

阅读我们的[隐私政策](/terms-of-service/)  

感谢订阅。查看更多[VB新闻通讯](/newsletters/)。  

发生错误。  

### 新发布：VB Transform 2025新增50张门票  

2025年6月24-25日，加入旧金山盛会，与顶尖领袖共商真实AI挑战，分享有效方案，塑造未来趋势。席位有限，即刻抢占。  

[了解更多](https://www.vbtransform.com/)  

---  

* [VentureBeat首页](/)  
* [Facebook关注我们](https://www.facebook.com/venturebeat/)  
* [X关注我们](https://twitter.com/venturebeat)  
* [LinkedIn关注我们](https://www.linkedin.com/company/venturebeat)  
* [RSS订阅](https://feeds.feedburner.com/venturebeat/SZYF)  

* [新闻稿](/tag/business-sponsored-company-news/)  
* [联系我们](/contact/)  
* [广告合作](https://media.venturebeat.com/)  
* [提供新闻线索](/contact/)  
* [投稿DataDecisionMakers](/guest-posts/)  

* [隐私政策](/privacy-policy/)  
* [服务条款](/terms-of-service/)  
* 请勿出售我的个人信息  

© 2025 [VentureBeat](https://venturebeat.com/)。版权所有。  

×### 您所需的真知灼见，免去冗余干扰

提交

感谢订阅。查看更多[VB新闻通讯请点击此处](/newsletters/)。

发生错误。