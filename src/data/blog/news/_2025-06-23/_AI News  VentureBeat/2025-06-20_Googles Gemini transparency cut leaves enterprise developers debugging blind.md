---
title: 谷歌Gemini透明度缺失令企业开发者"调试无门"
pubDatetime: 2025-06-20 12:00:00+00:00
tags:
- 谷歌Gemini 2.5 Pro
- 原始推理标记
- 开发者争议
- 思维链
- AI透明度
- 竞争壁垒
description: 谷歌Gemini 2.5 Pro隐藏推理标记引发争议，开发者调试受阻，专家质疑透明度与竞争壁垒问题。
---

*[源信息](https://venturebeat.com/ai/googles-gemini-transparency-cut-leaves-enterprise-developers-debugging-blind/)经过deepseek翻译并总结*

## 摘要：

谷歌Gemini 2.5 Pro隐藏原始推理标记引发开发者争议，此举与OpenAI类似调整均以简化摘要替代详细推理过程，导致企业开发者难以诊断模型问题。开发者依赖思维链优化提示词的功能受阻，陷入调试困境。谷歌回应称为界面优化，承诺评估恢复相关功能。专家质疑中间标记的可靠性及隐藏思维链可能形成竞争壁垒，凸显AI透明度与用户体验的矛盾。

---

谷歌Gemini透明度削减致企业开发者陷入“盲目调试”困境 | VentureBeat

[跳至主内容](#primary)

[活动](https://venturebeat.com/events/)  
[视频](/video/)  
[特刊](/venturebeat-special-issues/)  
[招聘](https://jobs.venturebeat.com/?source=navbar&utm_source=navbar&utm_medium=partner_referral)  

[返回VentureBeat首页](/)  

[订阅](/newsletters/?utm_source=VBsite&utm_medium=desktopNav)  

* [人工智能](/category/ai/)  
  + [全部](/category/ai/)  
  + [AI、ML与深度学习](/tag/ai-ml-deep-learning/)  
  + [自动化机器学习](/tag/auto-ml/)  
  + [数据标注](/tag/data-labelling/)  
  + [合成数据](/tag/synthetic-data/)  
  + [对话式AI](/tag/conversational-ai/)  
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
* 更多  
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

---

# 谷歌Gemini透明度削减致企业开发者陷入“盲目调试”困境

[Ben Dickson](https://venturebeat.com/author/ben-dickson-techtalks/ "Ben Dickson的文章")[@BenDee983](https://twitter.com/BenDee983)  
2025年6月20日 上午5:00  

* [分享至Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fai%2Fgoogles-gemini-transparency-cut-leaves-enterprise-developers-debugging-blind%2F&t=谷歌Gemini透明度削减致企业开发者陷入“盲目调试”困境)
* [分享至Twitter](//twitter.com/intent/tweet?text=谷歌Gemini透明度削减致企业开发者陷入“盲目调试”困境&url=https%3A%2F%2Fventurebeat.com%2Fai%2Fgoogles-gemini-transparency-cut-leaves-enterprise-developers-debugging-blind%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [分享至LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fai%2Fgoogles-gemini-transparency-cut-leaves-enterprise-developers-debugging-blind%2F&token=&isFramed=true)  

图片来源：VentureBeat与ChatGPT  

*立即加入企业领导者近二十年来信赖的盛会。VB Transform汇聚构建真实企业AI战略的精英。[了解更多](http://vbtransform.com/)*  

---

[谷歌](https://www.google.com/)近期决定隐藏其旗舰模型[Gemini 2.5 Pro](https://venturebeat.com/ai/google-launches-production-ready-gemini-2-5-ai-models-to-challenge-openais-enterprise-dominance/)的原始推理标记（raw reasoning tokens），引发开发者强烈反弹。这一变化与[OpenAI的类似举措](https://venturebeat.com/ai/heres-how-openai-o1-might-lose-ground-to-open-source-models/)相呼应，将模型的逐步推理替换为简化摘要，突显了打造流畅用户体验与提供企业所需的可观察、可信工具之间的核心矛盾。

随着企业将大语言模型（LLM）集成至更复杂的关键任务系统中，关于应暴露多少模型内部运作的争论正成为行业焦点。

## AI透明度的“根本性降级”

为解决复杂问题，先进AI模型会生成内部独白，即“[思维链](https://venturebeat.com/ai/dont-believe-reasoning-models-chains-of-thought-says-anthropic/)”（Chain of Thought，简称CoT）。这是模型在得出最终答案前产生的一系列中间步骤（如计划、代码草稿、自我修正）。例如，它可能揭示模型如何处理数据、使用哪些信息片段、如何评估自身代码等。

对开发者而言，这一推理轨迹常作为关键的诊断和调试工具。当模型输出错误或意外结果时，思维过程能揭示其逻辑偏差所在。这也曾是Gemini 2.5 Pro相比OpenAI的o1和o3模型的关键优势。

在谷歌AI开发者论坛中，用户称此功能移除是“[严重倒退](https://discuss.ai.google.dev/t/massive-regression-detailed-gemini-thinking-process-vanished-from-ai-studio/83916)”。缺乏该功能后，开发者陷入盲区。如一位论坛用户所言：“如果看不到原始思维链，我无法准确诊断问题。”另一位开发者描述称被迫“猜测”模型失败原因，导致“陷入令人沮丧的重复修正循环”。

除调试外，这种透明度对构建复杂AI系统至关重要。开发者依赖CoT优化提示词和系统指令——这是引导模型行为的主要方式。该功能对创建代理工作流（AI需执行系列任务）尤为重要。一位开发者指出：“思维链对正确调整代理工作流有巨大帮助。”

对企业而言，这种不透明趋势可能带来问题。隐藏推理的黑箱AI模型会引入重大风险，使其输出难以在高风险场景中被信任。这一由OpenAI的o系列推理模型开创、现被谷歌效仿的趋势，为[DeepSeek-R1](https://venturebeat.com/ai/deepseek-r1-0528-arrives-in-powerful-open-source-challenge-to-openai-o3-and-google-gemini-2-5-pro/)和[QwQ-32B](https://venturebeat.com/ai/alibabas-new-open-source-model-qwq-32b-matches-deepseek-r1-with-way-smaller-compute-requirements/)等开源替代品创造了机会。

## 谷歌的回应

面对抗议，谷歌团队成员作出解释。Google DeepMind高级产品经理Logan Kilpatrick[澄清](https://discuss.ai.google.dev/t/massive-regression-detailed-gemini-thinking-process-vanished-from-ai-studio/83916/103)，此举“纯属界面优化”，不影响模型内部性能。他指出，面向消费者的Gemini应用中隐藏冗长思维过程可提升用户体验：“会阅读思维链的用户比例极低。”

对开发者而言，新摘要旨在作为通过API编程访问推理痕迹的第一步——此前该功能不可用。

谷歌团队承认原始思维对开发者的价值。“我理解你们需要原始思维，其价值很明确，某些用例确实需要，”Kilpatrick写道，并补充称在面向开发者的AI Studio中恢复该功能“是我们可以探讨的方向”。

谷歌对开发者反弹的回应暗示可能存在折中方案，例如通过“开发者模式”重新启用原始思维访问。随着AI模型进化为使用工具、执行复杂多步骤计划的自主代理，可观测性需求将只增不减。

正如Kilpatrick总结所言：“……鉴于日益增长的复杂性与可观测性+追踪需求，原始思维很可能成为所有AI系统的关键要求。”

## 推理标记被高估了吗？

但专家指出，除用户体验外还有更深层动因。亚利桑那州立大学AI教授Subbarao Kambhampati质疑，推理模型在最终答案前生成的“中间标记”是否能可靠反映其解题逻辑。他近期合著的[论文](https://arxiv.org/abs/2504.09762v2)指出，将“中间标记”拟人化为“推理痕迹”或“思维”可能带来危险影响。

模型常在推理过程中陷入冗长难解的路径。多项实验表明，基于错误推理痕迹和正确结果训练的模型，其解题能力与基于精心策划推理痕迹训练的模型相当。此外，最新一代推理模型通过[强化学习](https://venturebeat.com/ai/open-source-deepseek-r1-uses-pure-reinforcement-learning-to-match-openai-o1-at-95-less-cost/)算法训练，这些算法仅验证最终结果，不评估模型的“推理痕迹”。

“中间标记序列常看似人类草稿的规整版本……但这并不能说明它们被用于类似人类的目的，更遑论能否作为窥探LLM‘思考’的可解释窗口，或作为最终答案的可靠依据，”研究者写道。

“大多数用户无法从模型喷涌而出的原始中间标记中获取有效信息，”Kambhampati告诉VentureBeat，“正如我们提到的，DeepSeek R1解决简单规划问题时会产生30页伪英文内容！o1/o3最初决定不展示原始标记的 cynical解释或许是：他们意识到人们会发现这些内容多么不连贯！”

> 或许这就是为什么即使妥协后，OAI也只放出中间标记的“摘要”（推测经过适当美化）..  
> — Subbarao Kambhampati (@rao2z) [2025年2月7日](https://twitter.com/rao2z/status/1887880905626382799?ref_src=twsrc%5Etfw)

不过Kambhampati指出，摘要或事后解释可能更易被终端用户理解。“问题在于它们在多大程度上真实反映LLM的内部运作，”他举例道，“比如作为教师，我解新题时会有多次试错，但讲解时会采用便于学生理解的方式。”

隐藏思维链的决策也构成竞争壁垒。原始推理痕迹是极具价值的训练数据。Kambhampati指出，竞争对手可利用这些痕迹进行“蒸馏”——训练更小、更廉价的模型以模仿强大模型的能力。隐藏原始思维极大增加了对手复制“秘方”的难度，在这个资源密集型行业中形成关键优势。

关于思维链的争论预示了AI未来更宏大的讨论。关于推理模型的内部运作、我们如何利用它们、以及模型提供商愿意开放多少权限，仍有大量未知。

**VB Daily商业用例每日洞察**  
若想给老板留下深刻印象，VB Daily为您提供内幕。我们解读企业应用生成式AI的最新动态，从监管变化到实际部署，助您分享洞察以实现最大投资回报。  
[立即订阅](/)  
阅读我们的[隐私政策](/terms-of-service/)  

感谢订阅。查看更多[VB新闻通讯](/newsletters/)。  
发生错误。  

**VB Transform 2025新增50张门票**  
6月24-25日旧金山盛会，携手顶尖领袖解决真实AI挑战，分享有效方案，塑造未来趋势。席位有限，速抢！  
[了解更多](https://www.vbtransform.com/)  

* [返回VentureBeat首页](/)  
* [Facebook关注我们](https://www.facebook.com/venturebeat/)  
* [Twitter关注我们](https://twitter.com/venturebeat)  
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

×### 你所需的AI洞察指南  

提交  

感谢订阅。查看更多[VB新闻通讯请点击这里](/newsletters/)。  

发生错误。