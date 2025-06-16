---
title: 谷歌DeepMind凭借新AI模型彻底改变飓风预测
pubDatetime: 2025-06-12 15:00:00+00:00
tags:
- AI气象预测
- 飓风预测
- Google DeepMind
- 气候变化
- 概率建模
- 早期预警
description: Google DeepMind推出高效AI飓风预测模型，可提前15天精准预测路径和强度，计算速度远超传统方法，2025年投入实时验证。
---

*[源信息](https://venturebeat.com/ai/google-deepmind-just-changed-hurricane-forecasting-forever-with-new-ai-model/)经过deepseek翻译并总结*

## 摘要：

Google DeepMind推出新型AI模型，显著提升飓风预测能力，可同步预测路径和强度，突破传统气象模型限制。该模型提前15天生成50种风暴情景，五天路径预测误差比欧洲模型缩小140公里，强度预测优于NOAA系统。其计算效率极高，单芯片一分钟完成15天预测，符合国家飓风中心6.5小时时限要求。模型基于双数据集训练，整合概率建模技术，历史案例验证其早期预警潜力。2025年飓风季将开展实时业务验证，标志着AI气象预测从科研转向实际应用，对应对气候变化至关重要。

---

Google DeepMind 用全新AI模型永久改变飓风预测
============================================

作者：[Michael Nuñez](https://venturebeat.com/author/michael_nunez/ "Michael Nuñez的文章")[@MichaelFNunez](https://twitter.com/MichaelFNunez)  
2025年6月12日 上午8:00

* [分享到Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fai%2Fgoogle-deepmind-just-changed-hurricane-forecasting-forever-with-new-ai-model%2F&t=Google+DeepMind+用全新AI模型永久改变飓风预测)
* [分享到Twitter](//twitter.com/intent/tweet?text=Google+DeepMind+用全新AI模型永久改变飓风预测&url=https%3A%2F%2Fventurebeat.com%2Fai%2Fgoogle-deepmind-just-changed-hurricane-forecasting-forever-with-new-ai-model%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [分享到LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fai%2Fgoogle-deepmind-just-changed-hurricane-forecasting-forever-with-new-ai-model%2F&token=&isFramed=true)

图片来源：VentureBeat使用Midjourney制作

---

[Google DeepMind](https://deepmind.google/)周四宣布了一项飓风预测领域的重大突破，其人工智能系统能够以前所未有的精度同时预测热带气旋的路径和强度——这个困扰传统气象模型数十年的难题终于迎来转机。

该公司推出了[Weather Lab](http://deepmind.google.com/science/weather)交互平台，展示其实验性气旋预测模型。该模型可提前15天生成50种可能的风暴情景。更关键的是，DeepMind宣布与[美国国家飓风中心](https://www.nhc.noaa.gov/)建立合作，这标志着该联邦机构首次将实验性AI预测纳入业务预报工作流程。

"我们呈现了三项成果，"项目负责人、DeepMind研究科学家Ferran Alet在周三的新闻发布会上表示，"首先是专为气旋定制的新型实验模型；其次，我们激动地宣布与国家飓风中心的合作，让专业预报员能实时查看我们的预测。"

该公告标志着人工智能应用于气象预测的关键转折点。在这个领域，机器学习模型正迅速超越传统的物理模型。过去50年间，热带气旋（包括飓风、台风和旋风）已造成[1.4万亿美元经济损失](https://wmo.int/topics/tropical-cyclone)，对沿海脆弱地区的数百万居民而言，精准预测关乎生死存亡。

传统气象模型为何难以兼顾风暴路径与强度
---------------------------------------

这项突破解决了现有预测方法的根本局限。传统气象模型面临严峻权衡：全球低分辨率模型擅长通过捕捉大气环流预测风暴路径，而区域高分辨率模型则聚焦风暴核心的湍流过程，更擅长强度预测。

"热带气旋预测之所以困难，是因为我们需要预测两个不同维度，"Alet解释道，"首先是路径预测——气旋将去向何方？其次是强度预测——气旋会增强到何种程度？"

DeepMind的实验模型宣称能同步解决这两个问题。根据[国家飓风中心](https://www.nhc.noaa.gov/)协议进行的内部评估显示，该AI系统相较现有方法有显著提升。在路径预测方面，其五天预测的平均误差比欧洲领先的物理集合模型[ENS](https://ens-newswire.com/above-normal-2025-atlantic-hurricane-season-looms/)缩小了140公里。

更引人注目的是，该系统在强度预测上超越了[NOAA飓风分析与预测系统](https://wpo.noaa.gov/the-hurricane-analysis-and-forecast-system-hafs/)(HAFS)——这个AI模型历来表现欠佳的领域。"这是首个在热带气旋强度预测上也展现出卓越技能的AI模型，"Alet强调道。

AI模型如何实现速度与效率的双重突破
---------------------------------

除精度提升外，该AI系统还展现出惊人的效率优势。传统物理模型需要数小时生成预测，而DeepMind的模型在单块专用芯片上仅需约一分钟就能完成15天预测。

"我们的概率模型比前代更快，"Alet表示，"新模型耗时仅约一分钟，而前代天气模型需要八分钟。"

这种速度优势使系统能满足紧迫的业务时限。DeepMind天气团队研究工程师Tom Anderson透露，[国家飓风中心](https://www.nhc.noaa.gov/)特别要求预测需在数据收集后6.5小时内完成——AI系统现已提前达标。

国家飓风中心合作验证AI天气预报
------------------------------

与[国家飓风中心](https://www.nhc.noaa.gov/)的合作极大提升了AI天气预报的可信度。DeepMind天气团队负责人Keith Battaglia将合作历程描述为从非正式对话发展为正式伙伴关系，让预报员能将AI预测与传统方法结合使用。

"最初只是非正式交流，"Battaglia谈及18个月前开始的讨论，"现在我们正建立更正式的伙伴关系，使他们能使用我们构建的模型，并自行决定如何将其纳入官方指导。"

2025年大西洋飓风季已经开始，合作时机至关重要。飓风中心预报员将能同时查看AI预测、传统物理模型和观测数据，有望提升预报精度并提前发布预警。

科罗拉多州立大学大气合作研究所研究员Kate Musgrave博士独立评估了DeepMind模型。据公司透露，她发现该模型"在路径和强度预测上的技能可比肩或超越最佳业务模型"。Musgrave表示"期待通过2025年飓风季的实时预报验证这些结果"。

突破背后的训练数据与技术革新
---------------------------

该AI模型的有效性源于其独特的双数据集训练：重构全球天气模式的再分析数据，以及包含过去45年近5000个气旋详细信息的专业数据库。

这种双重训练有别于此前主要关注大气条件的AI天气模型。"我们在气旋专用数据上训练，"Alet解释道，"使用IBTrACS等数据集，这些数据提供了过去30-40年间约5000个气旋的经纬度、强度及风圈半径。"

系统还通过[功能生成网络](http://deepmind.google.com/science/weather)(FGN)整合了概率建模的最新进展（随公告发布的研究论文详述了该方法）。这种技术通过扰动模型参数生成预测集合，比先前方法创建更结构化的变异。

历史飓风预测展现早期预警潜力
---------------------------

[Weather Lab](http://deepmind.google.com/science/weather)上线时已包含两年多的历史预测，专家可据此评估模型在各大洋盆地的表现。Anderson以2024年飓风Beryl和2023年著名飓风Otis为例展示了系统能力。

飓风Otis特别具有代表性——它在袭击墨西哥前快速增强，令多数传统模型措手不及。"许多模型预测该风暴将维持较弱强度，"Anderson解释道。当DeepMind向国家飓风中心预报员展示这个案例时，"他们表示若当时能获得我们的模型，很可能更早识别出该气旋的潜在风险。"

对天气预报与气候适应的深远影响
-------------------------------

这一进展标志着继DeepMind的[GraphCast](https://deepmind.google/discover/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/)等AI天气模型在多指标上超越传统系统后，人工智能在气象预测领域正日趋成熟。

"最初几年我们主要聚焦科研论文和学术突破，"Battaglia回顾道，"但随着证明这些机器学习系统可比肩甚至超越传统物理系统，将其从科研领域引入现实世界确实令人振奋。"

与政府机构的合作是AI天气系统投入业务应用的关键一步。不过DeepMind强调Weather Lab仍是研究工具，用户应继续以官方气象机构的预报和预警为准。

公司计划持续收集气象机构和应急部门的反馈以改进技术应用。随着气候变化可能加剧热带气旋活动，预测精度的提升对保护全球沿海脆弱群体将愈发重要。

"我们认为AI能提供解决方案，"Alet总结道，他指的是使气旋预测如此复杂的交互作用。随着2025年飓风季的推进，DeepMind实验系统的实战表现即将迎来终极检验。