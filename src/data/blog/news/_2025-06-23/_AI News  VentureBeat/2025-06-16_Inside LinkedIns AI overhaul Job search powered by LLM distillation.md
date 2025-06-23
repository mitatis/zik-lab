---
title: 领英AI革新内幕：基于大语言模型精馏的求职搜索
pubDatetime: 2025-06-16 22:52:31+00:00
tags:
- AI职位搜索
- 大语言模型
- 自然语言查询
- 模型蒸馏
- 领英AI
- 检索排序
description: 领英推出AI职位搜索功能，利用大语言模型蒸馏技术实现自然语言精准匹配，优化搜索效率并降低成本。
---

*[源信息](https://venturebeat.com/ai/inside-linkedins-ai-overhaul-job-search-powered-by-llm-distillation/)经过deepseek翻译并总结*

## 摘要：

领英推出基于大语言模型蒸馏技术的AI职位搜索功能，通过微调模型实现自然语言查询匹配，解决传统关键词搜索局限。用户可用描述性语言（如“查找硅谷近期发布的软件工程师职位”）精准获取结果。技术上将LLM拆分为检索和排序两步，采用蒸馏技术降低算力成本，优化搜索流程。此举顺应企业搜索AI趋势，与谷歌、Cohere等技术方向一致。领英持续加码AI，其首席AI官将在VB Transform大会分享战略。

---

领英AI改造内幕：基于大语言模型蒸馏技术的职位搜索 | VentureBeat

[跳至主要内容](#primary)

[活动](https://venturebeat.com/events/)
[视频](/video/)
[特刊](/venturebeat-special-issues/)
[招聘](https://jobs.venturebeat.com/?source=navbar&utm_source=navbar&utm_medium=partner_referral)

[VentureBeat 首页](/)

[订阅](/newsletters/?utm_source=VBsite&utm_medium=desktopNav)

* [人工智能](/category/ai/)
  + [查看全部](/category/ai/)
  + [AI、ML与深度学习](/tag/ai-ml-deep-learning/)
  + [自动化机器学习](/tag/auto-ml/)
  + [数据标注](/tag/data-labelling/)
  + [合成数据](/tag/synthetic-data/)
  + [对话式AI](/tag/conversational-ai/)
  + [自然语言处理](/tag/nlp/)
  + [文本转语音](/tag/text-to-speech/)* [安全](/category/security/)
    + [查看全部](/category/security/)
    + [数据安全与隐私](/tag/data-security-privacy/)
    + [网络安全与隐私](/tag/network-security-privacy/)
    + [软件安全](/tag/software-security/)
    + [计算机硬件安全](/tag/computer-hardware-security/)
    + [云与数据存储安全](/tag/cloud-data-storage-security/)* [数据基础设施](/category/data-infrastructure/)
      + [查看全部](/category/data-infrastructure/)
      + [数据科学](/tag/data-science/)
      + [数据管理](/tag/data-management/)
      + [数据存储与云](/tag/data-storage-cloud/)
      + [大数据与分析](/tag/big-data-and-analytics/)
      + [数据网络](/tag/data-networks/)* [自动化](/category/automation/)
        + [查看全部](/category/automation/)
        + [工业自动化](/tag/industrial-automation/)
        + [业务流程自动化](/tag/business-process-automation/)
        + [开发自动化](/tag/development-automation/)
        + [机器人流程自动化](/tag/robotic-process-automation/)
        + [测试自动化](/tag/test-automation/)* [企业分析](/category/enterprise-analytics/)
          + [查看全部](/category/enterprise-analytics/)
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
[特刊](/venturebeat-special-issues/)
[招聘](https://jobs.venturebeat.com/?source=navbar&utm_source=navbar&utm_medium=partner_referral)

领英AI改造内幕：基于大语言模型蒸馏技术的职位搜索
=====================================================================

[Emilia David](https://venturebeat.com/author/emilia-david/ "作者：Emilia David")[@miyadavid](http://x.com/miyadavid)

2025年6月16日 下午3:52

* [分享至Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fai%2Finside-linkedins-ai-overhaul-job-search-powered-by-llm-distillation%2F&t=领英AI改造内幕：基于大语言模型蒸馏技术的职位搜索)
* [分享至X](//twitter.com/intent/tweet?text=领英AI改造内幕：基于大语言模型蒸馏技术的职位搜索&url=https%3A%2F%2Fventurebeat.com%2Fai%2Finside-linkedins-ai-overhaul-job-search-powered-by-llm-distillation%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [分享至LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fai%2Finside-linkedins-ai-overhaul-job-search-powered-by-llm-distillation%2F&token=&isFramed=true)

图片来源：VentureBeat，由MidJourney生成

*参加近二十年来深受企业领导者信赖的盛会。VB Transform汇聚构建真实企业AI战略的开拓者。[了解更多](http://vbtransform.com/)*

---

自然语言搜索的兴起改变了人们获取信息的方式，而[领英](http://www.linkedin.com)——过去一年[已应用多种AI模型](https://venturebeat.com/ai/taking-ai-to-the-playground-linkedin-combines-llms-langchain-and-jupyter-notebooks-to-improve-prompt-engineering/)——希望这一变革能延伸至职位搜索领域。

领英的AI驱动职位搜索功能现已面向全美用户开放，该功能通过基于专业社交平台知识库训练的精炼微调模型，可根据自然语言精准匹配潜在职位机会。

"这项新搜索体验让会员能用自然语言描述目标，并获得真正符合需求的推荐结果，"领英产品开发副总裁Erran Berger在邮件中告诉VentureBeat，"这是让求职过程更直观、包容和赋能的第一步。"

领英此前在[博文](https://www.linkedin.com/blog/engineering/ai/building-the-next-generation-of-job-search-at-linkedin)中指出，用户面临的核心问题是过度依赖精确关键词查询。例如搜索"记者"时，既会出现媒体机构的记者职位，也会显示对技能要求完全不同的法庭记录员岗位。

领英工程副总裁Wenjing Zhang在专访中表示，团队意识到必须改进职位匹配机制，而关键在于精准理解用户意图："过去使用关键词匹配时，即使职位描述中包含'记者'但实际不符，系统仍会检索显示这类信息。"

如今，用户可超越关键词进行描述性搜索，例如直接输入"查找硅谷近期发布的软件工程师职位"。

技术实现路径
-----------------

领英首先重构了搜索系统的语义理解能力："第一阶段是理解查询意图，接着从职位库检索匹配信息，最后对数百个候选职位进行智能排序。"

此前系统依赖固定分类法和传统排序模型，旧版大语言模型(LLM)缺乏深度语义理解能力。领英转而采用微调后的现代LLM增强自然语言处理(NLP)功能。但LLM的高算力成本迫使团队采用蒸馏技术：将LLM拆分为数据检索和结果排序两个步骤，通过教师模型对齐两者。

该方法还简化了原有多达9个环节的搜索流程。"我们采用多目标优化技术确保检索与排序的一致性，在保持检索简洁性的同时不影响AI开发效率。"领英还开发了可生成个性化建议的查询引擎。

AI搜索浪潮
----------------------

领英并非唯一看到[LLM企业搜索潜力](https://venturebeat.com/ai/beyond-the-keyword-how-ai-is-forging-the-future-of-enterprise-search/)的玩家。[谷歌](http://www.google.com)宣称[2025年将成为](http://www.google.com)企业搜索的变革之年。

[Cohere](https://cohere.com/)的Rerank 3.5模型正[打破企业语言壁垒](https://venturebeat.com/ai/cohere-rerank-3-5-is-here-and-its-about-to-change-enterprise-search-forever/)，[OpenAI](http://www.openai.com)、[谷歌](http://www.google.com)和[Anthropic](http://www.anthropic.com)的各类["深度研究"产品](https://venturebeat.com/ai/openais-surprise-new-o3-powered-deep-research-shows-the-power-of-the-ai-agent-era/)则显示企业对数据智能代理的需求激增。

领英近一年持续推出AI功能，去年10月即发布了[AI招聘助手](https://venturebeat.com/ai/linkedin-upgrades-its-recruiter-with-an-ai-hiring-assistant/)。其首席AI官Deepak Agarwal将于本月在[旧金山VB Transform大会](https://www.vbtransform.com/?utm_source=vb&utm_medium=article&utm_content=transformpromo&utm_campaign=vbarticles)分享AI战略，包括招聘助手从原型到量产的历程。[立即注册参会](https://www.vbtransform.com/?utm_source=vb&utm_medium=article&utm_content=transformpromo&utm_campaign=vbarticles)。

* [VentureBeat 首页](/)
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
* 不出售我的个人信息

© 2025 [VentureBeat](https://venturebeat.com/). 保留所有权利。

×### 引领未来所需的人工智能洞见

提交

感谢您的订阅。查看更多[VB新闻通讯请点击此处](/newsletters/)。

发生错误。