---
title: OpenAI开源全新客服代理框架——深入了解其不断扩张的企业战略
pubDatetime: 2025-06-18 22:30:02+00:00
tags:
- OpenAI
- 客服代理框架
- MIT许可证
- Python后端
- Next.js前端
- Agents SDK
description: OpenAI开源客服代理框架，含前后端及安全功能，支持航空业应用，并发布指南及企业实践分享。
---

*[源信息](https://venturebeat.com/programming-development/openai-open-sourced-a-new-customer-service-agent-framework-learn-more-about-its-growing-enterprise-strategy/)经过deepseek翻译并总结*

## 摘要：

OpenAI开源了基于MIT许可证的客服代理框架，支持开发者免费使用和修改。该框架包含Python后端和Next.js前端，通过Agents SDK协调代理处理航空业请求（如订座、航班查询），并具备安全防护功能。配套发布的《构建代理的实用指南》提供了智能自动化设计模式。OpenAI还将在VentureBeat Transform 2025大会上分享企业级代理架构的实践见解，推动代理技术从理论迈向应用。

---

OpenAI开源全新客服代理框架——深入解读其扩张中的企业战略  
=============================================================================================================

作者：[Carl Franzen](https://venturebeat.com/author/carlfranzen/ "Carl Franzen的文章")[@carlfranzen](https://twitter.com/carlfranzen)  
2025年6月18日 下午3:30  

* [分享到Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fprogramming-development%2Fopenai-open-sourced-a-new-customer-service-agent-framework-learn-more-about-its-growing-enterprise-strategy%2F&t=OpenAI%20开源全新客服代理框架——深入解读其扩张中的企业战略)  
* [分享到Twitter](//twitter.com/intent/tweet?text=OpenAI%20开源全新客服代理框架——深入解读其扩张中的企业战略&url=https%3A%2F%2Fventurebeat.com%2Fprogramming-development%2Fopenai-open-sourced-a-new-customer-service-agent-framework-learn-more-about-its-growing-enterprise-strategy%2F&via=VentureBeat&related=VentureBeat,GamesBeat)  
* [分享到LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fprogramming-development%2Fopenai-open-sourced-a-new-customer-service-agent-framework-learn-more-about-its-growing-enterprise-strategy%2F&token=&isFramed=true)  

---  

*编者注：Carl将于下周在VB Transform主持关于此话题的圆桌讨论。[立即注册](https://www.vbtransform.com/?utm_source=vb&utm_medium=article&utm_content=transformpromo&utm_campaign=vbarticles)。*  

[OpenAI](https://openai.com/)发布了一个新的开源演示项目，开发者可通过Agents SDK亲身体验如何构建智能、感知工作流的AI代理。  

据[AI影响者兼工程师Tibor Blaho首次发现](https://x.com/btibor91/status/1935276630471229515)（来自第三方ChatGPT浏览器扩展[AIPRM](https://www.aiprm.com/tutorials/quick-start-guide/getting-started-with-aiprm/)），OpenAI的新项目[*客服代理*](https://github.com/openai/openai-cs-agents-demo)今日早些时候发布在AI代码共享社区Hugging Face上，采用宽松的MIT许可证，意味着任何第三方开发者或用户均可免费获取、修改并部署该代码用于商业或实验用途。  

该代理示例展示了如何在专业代理（如座位预订、航班状态查询、取消服务和常见问题解答）之间路由航空公司相关请求，同时确保安全性和相关性防护栏生效。  

此版本旨在帮助团队超越理论应用，自信地将代理投入实际运营。  

这一实践演示恰逢[OpenAI即将在**VentureBeat Transform 2025**大会](https://www.vbtransform.com/?utm_source=vb&utm_medium=article&utm_content=transformpromo&utm_campaign=vbarticles)上进行演讲前夕。大会将于下周（6月24日至25日）在旧金山举行，OpenAI平台负责人**Olivier Godement**将深入探讨支撑Stripe和Box等企业用例的企业级代理架构。  

*在[VB Transform 2025](https://www.vbtransform.com/?utm_source=vb&utm_medium=article&utm_content=transformpromo&utm_campaign=vbarticles)会见OpenAI产品平台负责人Olivier Godement*  

路由、防护栏与专业代理的蓝图  
----------------------------------------------------------  

今日发布的版本包含Python后端和Next.js前端。后端利用OpenAI Agents SDK协调专业代理之间的交互，而前端则通过聊天界面实时可视化这些交互，展示决策和交接过程。  

在一个流程中，客户请求更换座位。分流代理（Triage Agent）识别请求并将其路由至座位预订代理（Seat Booking Agent），后者以交互方式确认预订变更。另一场景中，航班取消请求通过取消代理（Cancellation Agent）处理，该代理在完成任务前验证客户的确认编号。  

值得注意的是，演示还展示了防护栏在生产环境中的功能：**相关性防护栏**（Relevance Guardrail）会拦截超出范围的问题（如请求作诗），而**防越狱防护栏**（Jailbreak Guardrail）则阻止提示注入尝试（例如要求暴露系统指令）。  

该架构反映了现实中的航空公司支持流程，展示了企业如何构建响应迅速、合规且符合用户期望的领域专属助手。OpenAI以MIT许可证发布代码，并鼓励团队根据自身需求定制和适配。  

从开源到现实企业用例：解读OpenAI构建实用AI代理的基础  
---------------------------------------------------------------------------------------------------------------  

这一开源版本延续了OpenAI帮助团队规模化设计和部署基于代理的系统的广泛计划。  

今年早些时候，公司发布了《[构建代理的实用指南](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf)》，这是一份32页的手册，面向希望实现智能自动化的产品和工程团队。  

指南列出了基础组件——大语言模型（LLM）、外部工具和行为指令，并涵盖构建单代理系统和复杂多代理架构的策略。它还提供了编排、防护栏实施和可观测性的设计模式，借鉴了OpenAI支持大规模部署的经验。  

指南的关键要点包括：  

* **模型选择**：使用顶级模型建立性能基准，随后尝试较小模型以优化成本。  
* **工具集成**：为代理配备外部API或功能以检索数据或执行操作。  
* **指令设计**：使用清晰、面向行动的提示和条件语句引导代理决策。  
* **防护栏**：叠加安全性、相关性和合规性约束以确保行为安全可预测。  
* **人工干预**：为需要人工监督的情况设置阈值和升级路径。  

指南强调从小规模开始，逐步增加代理复杂性——这一方法在新发布的演示中得到呼应，演示展示了模块化、使用工具的子代理如何清晰协调。  

在VB Transform 2025上深入了解OpenAI的见解  
-------------------------------------------  

希望从原型过渡到生产的团队将在VentureBeat主办的**Transform 2025**大会上更深入地了解OpenAI的企业级方案。  

根据[当前议程](https://www.vbtransform.com/vb-transform-2025---agenda)，该环节定于**太平洋时间6月25日周三下午3:10**举行，题为《代理之年：OpenAI如何推动下一波智能自动化》，由**OpenAI API平台产品负责人Olivier Godement**与**VentureBeat执行编辑Carl Franzen**对话。  

这20分钟的讨论将涵盖：  

* 代理架构模式：何时使用单循环、子代理或协调交接。  
* 针对受监管环境的内置防护栏，包括策略拒绝、SOC-2日志记录和数据驻地支持。  
* Stripe和Box的成本/ROI杠杆与基准，包括发票处理提速35%和无接触支持分流。  
* 路线图洞察：多模态动作、代理记忆和跨云编排的未来发展。  

无论您是在试验客服代理演示等开源工具，还是将代理扩展至关键工作流，本环节都将提供实用视角，揭示有效方法、需避免的陷阱及未来趋势。  

对企业和开发者的重要意义  
---------------------------------------------  

新发布的演示与《构建代理的实用指南》中概述的原则相结合，标志着OpenAI正加倍推进其战略：帮助开发者超越单轮LLM应用，转向能理解上下文、智能路由任务且安全运行的自主系统。  

通过提供透明的工具和清晰的实现示例，OpenAI正将代理系统从实验室推向日常应用——无论是客服、运营还是内部治理。对于探索智能自动化的组织，这些资源不仅提供灵感，更是一份可操作的实战手册。  

VB Transform 2025新增50张门票  
---------------------------------------------------  

加入6月24日至25日在旧金山举行的盛会，与顶尖领袖共同应对真实AI挑战，分享有效经验并塑造未来。名额有限，速速报名。  

[了解更多](https://www.vbtransform.com/)  

（注：原文中的订阅推广、页脚导航链接及企业标识等非正文内容已按用户要求省略，仅保留核心新闻内容的中文翻译。）### 你需要的高见，减去杂音

提交

感谢订阅。查看更多 [VB 新闻通讯请点击此处](/newsletters/)。

发生错误。