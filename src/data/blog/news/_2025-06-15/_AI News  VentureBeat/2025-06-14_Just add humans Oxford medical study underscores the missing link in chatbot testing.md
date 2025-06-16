---
title: 仅需加入人类：牛津医学研究揭示聊天机器人测试中的缺失环节
pubDatetime: 2025-06-14 00:34:19+00:00
tags:
- 大语言模型
- 医学诊断
- 人机交互
- 评估标准
- 用户体验
- LLM测试
description: 牛津大学研究揭示，GPT-4医学考试表现优异但实际诊断中人类使用正确率反降34.5%，凸显人机协作需优化评估与交互设计。
---

*[源信息](https://venturebeat.com/ai/just-add-humans-oxford-medical-study-underscores-the-missing-link-in-chatbot-testing/)经过deepseek翻译并总结*

## 摘要：

牛津大学研究发现，大语言模型（LLM）如GPT-4在医学考试中表现优异（通过率90%），但在实际诊断中人类使用LLM的正确率仅34.5%，低于未使用LLM的对照组（47%）。模拟1,298名患者互动显示，人类常提供不完整信息，LLM易误解提示。专家指出现有测试仅评估知识库，忽略人机交互复杂性。LLM间相互测试正确率达60.7%，凸显人机协作挑战。研究呼吁改进评估标准并优化用户体验。

---

只需加入人类：牛津医学研究揭示聊天机器人测试中的缺失环节 | VentureBeat

[Skip to main content](#primary)

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
  + [文本转语音](/tag/text-to-speech/)  

（其他分类导航链接按相同模式翻译，此处略）  

[订阅](/newsletters/?utm_source=VBsite&utm_medium=mobileNav)  
[活动](https://venturebeat.com/events/)  
[视频](/video/)  
[特刊](/venturebeat-special-issues/)  
[招聘](https://jobs.venturebeat.com/?source=navbar&utm_source=navbar&utm_medium=partner_referral)  

只需加入人类：牛津医学研究揭示聊天机器人测试中的缺失环节  
=====================================================================================

作者：[Nick Mokey](https://venturebeat.com/author/nick-mokey/ "Nick Mokey的文章")  
2025年6月13日 下午5:34  

* [分享到Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fai%2Fjust-add-humans-oxford-medical-study-underscores-the-missing-link-in-chatbot-testing%2F&t=只需加入人类：牛津医学研究揭示聊天机器人测试中的缺失环节)  
* [分享到Twitter](//twitter.com/intent/tweet?text=只需加入人类：牛津医学研究揭示聊天机器人测试中的缺失环节&url=https%3A%2F%2Fventurebeat.com%2Fai%2Fjust-add-humans-oxford-medical-study-underscores-the-missing-link-in-chatbot-testing%2F&via=VentureBeat&related=VentureBeat,GamesBeat)  
* [分享到LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fai%2Fjust-add-humans-oxford-medical-study-underscores-the-missing-link-in-chatbot-testing%2F&token=&isFramed=true)  

由VentureBeat通过ChatGPT创建  

*加入企业领导者信任近二十年的活动。VB Transform汇聚了构建真实企业AI战略的精英。[了解更多](http://vbtransform.com/)*  

---

多年来，头条新闻不断宣称：大语言模型（LLM）不仅能通过医学执照考试，还能超越人类。早在2023年AI的"史前时代"，GPT-4就能正确回答美国医学执照考试90%的问题。此后，LLM更是在[住院医师考试](https://www.hcinnovationgroup.com/analytics-ai/news/55020061/for-the-first-time-gpt-outperforms-medical-students-on-board-exams)和[执业医师](https://www.psychologytoday.com/us/blog/the-future-brain/202505/enhanced-llm-aces-the-us-medical-licensing-examination)测试中胜出。

让开吧，"谷歌医生"，ChatGPT医学博士要登场了。但患者可能需要的不仅仅是一张LLM颁发的文凭。就像一名能脱口而出手部每块骨骼名称的优等医学生，却在见到真实血液时晕倒一样，LLM对医学的掌握并不总能直接转化为现实世界的应用。

牛津大学研究人员的[论文](https://arxiv.org/pdf/2504.18919)发现，当直接面对测试场景时，LLM能94.9%准确识别相关病症，但使用LLM进行诊断的人类参与者正确识别率却低于34.5%。更值得注意的是，使用LLM的患者组表现甚至比仅被要求"采用家庭常用方法"自我诊断的对照组更差。未借助LLM的组别正确识别病症的可能性高出76%。

这项研究对LLM提供医疗建议的适用性，以及我们评估聊天机器人在各种应用中部署的基准提出了质疑。

### 诊断猜谜游戏

在Adam Mahdi博士的带领下，牛津大学研究人员招募了1,298名参与者模拟患者与LLM互动。他们的任务是弄清自己的病症及应采取的行动（从自我护理到呼叫救护车）。每个参与者会收到详细场景描述，涵盖从肺炎到普通感冒等各种病症，并包含生活背景和医疗史。

研究测试了三种LLM：选择[GPT-4o](https://venturebeat.com/ai/openai-announces-new-free-model-gpt-4o-and-chatgpt-for-desktop/)因其流行度，[Llama 3](https://venturebeat.com/ai/llama-3-launches-alongside-new-stand-alone-meta-ai-chatbot/)因其开源特性，[Command R+](https://venturebeat.com/ai/cohere-launches-command-r-a-powerful-llm-optimized-for-enterprise-ai/)则因其检索增强生成(RAG)能力。

### 信息传递失真

虽然人们可能认为能通过医学考试的LLM是帮助普通人自我诊断的理想工具，但结果并非如此。研究指出："使用LLM的参与者正确识别相关病症的比例最高仅34.5%，而对照组达到47%。"在采取正确行动方面，LLM辅助组正确率44.2%，独立运行的LLM则达56.3%。

问题出在哪里？研究发现参与者既向LLM提供了不完整信息，LLM也误解了提示。例如，一名本应表现出胆结石症状的用户仅告诉LLM："我出现持续一小时的剧烈胃痛，会呕吐，似乎与外卖有关"，却遗漏了疼痛位置、严重程度和频率等关键信息。

### 人的变量

北卡罗来纳大学RENCI研究所用户体验专家Nathalie Volkheimer表示："对经历过早期互联网搜索时代的人来说，这似曾相识。作为一种工具，大语言模型需要特定质量的提示才能产生优质输出。"她指出，经历剧痛的人很难提供优质提示，临床医生接受特定问诊训练是有原因的。

"我不认为重点应该放在机器上，"Volkheimer强调，"而应关注人机交互。"她以汽车类比：安全抵达目的地不仅取决于车辆，还涉及驾驶员、道路、天气等多重因素。

### 更好的基准

牛津研究揭示的核心问题不在于人类或LLM，而在于测量方式。当宣称LLM能通过医学、房地产或律师资格考试时，我们只是在用人类评估工具测试其知识库深度。这些测量几乎无法预测聊天机器人与人类互动的实际效果。

想象企业部署基于内部知识库训练的客服聊天机器人前，采用与人工客服相同的测试：回答预设问题并选择多选答案。95%准确率看似前景光明。但实际部署后，真实客户使用模糊表述、发泄情绪或以非常规方式描述问题，LLM就会混淆并提供错误答案——尽管它轻松通过了针对人类设计的测试。

### 用AI测试AI的局限

牛津研究人员尝试用模拟参与者（由另一个LLM扮演）进行测试。这些"AI患者"与LLM互动时，正确识别病症的平均率达60.7%，远高于人类参与者的34.5%。这表明LLM之间互动效果优于人机互动，因此AI测试者无法预测真实场景表现。

### 勿归咎用户

尽管LLM单独测试表现优异，但将问题归咎于参与者是危险的。Volkheimer警告："在任何客户环境中，如果用户行为不符合预期，最后才该责怪客户。首先要做的是深入调查原因。"她建议部署聊天机器人前必须了解受众、目标和用户体验，这些将决定使LLM真正有用的专业化训练材料。

"设计技术、开发内容、构建流程系统的人同样带着背景、假设、缺陷和盲点，"Volkheimer指出，"这些都会被植入技术解决方案中。"

**VB每日商业用例洞察**  
想给老板留下深刻印象？VB每日为您提供生成式AI在企业应用中的内幕，从监管变化到实际部署，助您分享最具投资回报率的见解。  
[立即订阅](/newsletters/)  
阅读我们的[隐私政策](/terms-of-service/)  

订阅出错。查看更多[VB新闻通讯](/newsletters/)。  

企业AI实践峰会——参加2025年VB Transform  
------------------------------------------------------------  
2025年6月24-25日，与顶尖领袖齐聚旧金山，解决真实挑战，分享已验证策略，共同塑造AI未来。  
[了解更多](https://www.vbtransform.com/)  

* [VentureBeat首页](/)  
* [Facebook关注我们](https://www.facebook.com/venturebeat/)  
* [Twitter关注我们](https://twitter.com/venturebeat)  
* [LinkedIn关注我们](https://www.linkedin.com/company/venturebeat)  

（底部链接区块按相同模式翻译，此处略）  

© 2025 [VentureBeat](https://venturebeat.com/)。保留所有权利。  

×### 您所需的AI洞察力  

提交  

感谢您的订阅。查看更多[VB新闻通讯请点击此处](/newsletters/)。  

发生错误。