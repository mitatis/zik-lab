---
title: 医院网络攻击每小时造成60万美元损失，AI如何改变这一局面
pubDatetime: 2025-06-20 23:16:20+00:00
tags:
- 医院网络攻击
- AI安全平台
- 勒索软件
- 医疗数据安全
- 事件响应
- Securonix
description: AI助力医院抵御网络攻击，缩短响应时间30%，减少误报90%，有效应对勒索软件威胁并提升防护效率。
---

*[源信息](https://venturebeat.com/security/hospital-cyber-attacks-cost-600k-hour-heres-how-ai-is-changing-the-math/)经过deepseek翻译并总结*

## 摘要：

医院网络攻击每小时损失60万美元，AI正有效应对。勒索软件即服务和医疗数据价值上升使医院成为主要目标。阿尔伯塔卫生服务局（AHS）采用Securonix的AI安全平台后，高优先级事件响应时间缩短30%，误报减少90%，每日节省2-3小时。作为北美第二大医院网络，AHS利用AI分析TB级数据，识别异常并阻止勒索攻击。AI通过模式识别和自然语言处理快速解析攻击意图，提升响应速度，同时帮助追踪攻击热点并加强乡村医院防护教育。AI未取代员工，而是提升效率并减少倦怠。

---

医院网络攻击每小时造成60万美元损失，AI如何改变这一局面 | VentureBeat  

作者：[Taryn Plumb](https://venturebeat.com/author/taryn-plumb/ "Taryn Plumb的文章") [@taryn\_plumb](https://twitter.com/taryn_plumb)  
2025年6月20日 下午4:16  

* [分享到Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fsecurity%2Fhospital-cyber-attacks-cost-600k-hour-heres-how-ai-is-changing-the-math%2F&t=医院网络攻击每小时造成60万美元损失，AI如何改变这一局面)  
* [分享到X](//twitter.com/intent/tweet?text=医院网络攻击每小时造成60万美元损失，AI如何改变这一局面&url=https%3A%2F%2Fventurebeat.com%2Fsecurity%2Fhospital-cyber-attacks-cost-600k-hour-heres-how-ai-is-changing-the-math%2F&via=VentureBeat&related=VentureBeat,GamesBeat)  
* [分享到LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fsecurity%2Fhospital-cyber-attacks-cost-600k-hour-heres-how-ai-is-changing-the-math%2F&token=&isFramed=true)  

VentureBeat/Ideogram  

---

过去，[医疗机构](https://venturebeat.com/ai/how-the-ottawa-hospital-uses-ai-ambient-voice-capture-to-reduce-physician-burnout-by-70-achieve-97-patient-satisfaction/)并非如今这般脆弱；黑客曾有一条不成文的规定：不攻击可能危及人身安全的机构或服务。  

但如今情况已变：勒索软件即服务（Ransomware-as-a-service）泛滥，被盗医疗信息变得极具变现价值，促使威胁行为者对医院发起前所未有的攻击。  

[阿尔伯塔卫生服务局](https://www.albertahealthservices.ca/)（AHS）不愿坐以待毙——这家医疗系统正通过AI加强防御。通过部署网络安全平台[Securonix](https://www.securonix.com/)的AI强化网络运营，AHS已将高优先级事件的响应时间缩短了30%以上，同时将误报警报减少了90%，每日工作量减少了2至3小时，节省了数十万美元。  

“许多医院网络是又大又容易得手的目标，”AHS执行董事兼首席信息安全官Richard Henderson告诉VentureBeat，“我睡得很少，因为我总担心凌晨2点接到电话，说我们的整个系统因勒索软件而瘫痪。”  

### 完成1000名（甚至更多）SOC分析师的工作  

AHS是北美第二大医院网络，也是全球最大的单一实例电子健康记录（EHR）平台Epic用户。  

Henderson解释说，他和团队负责106家医院、800家诊所、2万名医生和15万名员工的网络安全，为450万至500万阿尔伯塔省居民提供服务。他将AHS描述为“一个庞大的本地组织”，所有设施都连接到同一个Epic系统。  

“如果系统崩溃，所有人的服务都会中断。毫不夸张地说，这可能会影响患者的生命。”他指出，Epic完全中断（无论是否与勒索软件有关）可能让阿尔伯塔省每小时损失50万至60万美元。  

为避免这种情况，AHS在其环境中全面部署了Securonix平台，包括其人工智能驱动的安全信息和事件管理（SIEM）平台提供的威胁检测、调查和响应（TDIR）功能，集成了日志管理、行为分析和安全数据湖。  

Henderson解释说，医疗网络每天将数TB的数据输入SIEM，并依赖Securonix的云原生架构处理数据规范化和路由，其中Snowflake是后端的重要组成部分。  

行为分析是AHS检测策略的关键部分。Securonix平台不断学习用户、终端和系统的正常行为模式，帮助团队发现“细微异常”，例如可信账户的“轻微异常行为”。  

“它通过模式识别将事件关联起来，”Henderson说，“即使雇佣1000名安全分析师，也无法手动筛选现代数字企业产生的所有遥测数据。”  

### 缩短解决时间，提高响应速度  

例如，AHS的AI工具会学习[医院网络](https://venturebeat.com/ai/just-add-humans-oxford-medical-study-underscores-the-missing-link-in-chatbot-testing/)的正常行为模式。当出现异常（如某设备突然与从未接触过的外部服务器通信）时，系统会立即标记。这可能帮助安全团队发现配置错误的工具，防止其被利用。  

“这类配置错误曾导致其他医院网络发生灾难性的勒索软件爆发。”Henderson说。  

再比如，某个负载可能被标记为可疑，但经过混淆处理，人工分析需耗费大量时间。现在，团队可以要求平台去混淆负载并分析攻击者意图，“几秒钟内”即可完成。  

“过去几年，能够像与人对话一样与计算机交流，彻底改变了人们对AI的认知，”他说，“自然语言处理技术已存在多年，但从未达到这种水平，其能力仍然让我惊叹。”  

因此，AWS显著缩短了解决时间并提高了响应速度。Henderson表示，与去年相比，高优先级事件的平均响应时间减少了三分之一以上。  

这是因为AI承担了繁重的工作，帮助分析师理解事件本质和攻击者意图。Henderson指出，在现代网络安全中，AI对网络检测、终端保护、邮件过滤等功能至关重要。“我的团队使用AI工具每天能节省数小时。”  

Securonix平台还减少了噪音，AHS初级分析师接收的误报大幅减少，“这有助于集中注意力并避免倦怠”。  

Henderson认为，AI不会取代初级员工，“而是帮助他们更快学习、更好地工作，从而保护企业环境。”  

### 攻击增加使教育至关重要  

由于AHS规模庞大，设施遍布全省，Henderson的团队需要追踪事件高发区域，以判断特定地区是否成为攻击目标。  

他指出，卡尔加里和埃德蒙顿是阿尔伯塔省最大的两个城市，自然可能承受更多攻击。但实际情况并非如此；小型乡村医院常成为目标，因为攻击者认为其防御较弱。  

AI仪表板可实时显示事件发生地，便于团队规划额外外展工作。Henderson将大量时间投入安全教育，向护士和医生讲解过往攻击活动，帮助他们识别威胁。  

“如果我们发现乡村医院攻击增加，我会立即开展教育活动，告诉他们：‘攻击者认为乡村医院更容易得手，你们需要注意以下迹象。’”他说。  

**VB每日：商业用例深度洞察**  

想让老板对你刮目相看？VB每日为您提供企业应用生成式AI的内幕信息，从监管变化到实际部署，助您分享见解以实现最大投资回报。  

[立即订阅](/newsletters/)  

阅读我们的[隐私政策](/terms-of-service/)  

感谢订阅。查看更多[VB新闻通讯](/newsletters/)。  

发生错误。  

### 最新发布：VB Transform 2025新增50张门票  

2025年6月24日至25日，加入旧金山的顶尖领导者行列，解决实际AI挑战，分享成功经验，塑造未来趋势。名额有限，速速报名。  

[了解更多](https://www.vbtransform.com/)### 你需要的高效洞察，远离信息噪音

提交

感谢您的订阅。查看更多[VB新闻简报](/newsletters/)。

发生错误。