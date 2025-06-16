---
title: 推理模型真的会“思考”吗？苹果研究引发热议与回应
pubDatetime: 2025-06-13 22:02:22+00:00
tags:
- 苹果机器学习团队
- OpenAI
- 推理模型
- 模式匹配
- 评估方法
- 实验设计
description: 苹果与研究者就AI模型是否真正思考展开辩论，双方争议焦点在于评估方法的设计合理性及其对结果的影响。
---

*[源信息](https://venturebeat.com/ai/do-reasoning-models-really-think-or-not-apple-research-sparks-lively-debate-response/)经过deepseek翻译并总结*

## 摘要：

苹果机器学习团队在《思考的错觉》中指出，OpenAI等公司的推理模型仅进行模式匹配而非真正思考，高难度任务下性能崩溃。该结论遭质疑，用户指出实验设计缺陷（如输出限制导致误判）。后续论文《思考错觉的错觉》反驳称苹果测试设置不当（如超长步骤、无解问题），扭曲结果。辩论显示评估方法对衡量AI能力至关重要，企业需避免任务框架掩盖模型潜力，研究者应确保测试环境合理。

---

推理模型真的会“思考”吗？苹果研究报告引发激烈辩论与回应
========================================================================================

作者：[Carl Franzen](https://venturebeat.com/author/carlfranzen/ "Posts by Carl Franzen")[@carlfranzen](https://twitter.com/carlfranzen)  
2025年6月13日 下午3:02

* [Facebook分享](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fai%2Fdo-reasoning-models-really-think-or-not-apple-research-sparks-lively-debate-response%2F&t=Do%20reasoning%20models%20really%20%E2%80%9Cthink%E2%80%9D%20or%20not%3F%20Apple%20research%20sparks%20lively%20debate%2C%20response)
* [X平台分享](//twitter.com/intent/tweet?text=Do%20reasoning%20models%20really%20%E2%80%9Cthink%E2%80%9D%20or%20not%3F%20Apple%20research%20sparks%20lively%20debate%2C%20response&url=https%3A%2F%2Fventurebeat.com%2Fai%2Fdo-reasoning-models-really-think-or-not-apple-research-sparks-lively-debate-response%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [LinkedIn分享](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fai%2Fdo-reasoning-models-really-think-or-not-apple-research-sparks-lively-debate-response%2F&token=&isFramed=true)

---

苹果机器学习团队本月发布的53页研究报告《[思考的错觉](https://machinelearning.apple.com/research/illusion-of-thinking)》引发轩然大波。该论文认为，OpenAI的"o"系列、谷歌Gemini-2.5 Pro和Flash Thinking等大型推理模型（LRMs）或推理大语言模型（reasoning LLMs）实际上并未基于训练数据习得的通用原则进行独立的"思考"或"推理"。

作者主张，这些推理型LLM实际上是在执行某种"模式匹配"，当任务复杂度超过阈值时，其表面推理能力就会瓦解。这表明其架构和性能并非改进生成式AI实现人工通用智能（AGI）的有效路径——根据OpenAI定义，AGI指在多数经济价值工作中超越人类表现的模型，而超级智能则是人类无法理解的更高级AI形态。

不出所料，论文迅速在X平台的机器学习社区广泛传播。EasyGen（一款LLM驱动的LinkedIn帖子自动生成工具）开发者Ruben Hassid等读者第一时间宣称："苹果证实了Claude、DeepSeek-R1和o3-mini等AI'推理'模型根本不具备真正推理能力，只是擅长记忆模式。"

但今日arXiv平台发布的新论文《[思考错觉的错觉](https://arxiv.org/pdf/2506.09250)》——值得注意的是由推理LLM Claude Opus 4与人类研究者Alex Lawsen（独立AI技术作家）合著——汇集了机器学习社区对苹果论文的多项批评，指出其研究方法和实验设计存在根本缺陷。

虽然VentureBeat团队并非ML研究人员，无法断言苹果研究存在谬误，但这场关于LRMs推理能力与人类思维差异的辩论显然远未尘埃落定。

### 苹果研究设计与发现  
研究团队选用汉诺塔、积木世界、渡河难题和跳棋四个经典规划问题，设计了一系列需要多步前瞻性规划的任务。这些游戏因在认知科学和AI研究中的悠久历史，以及随步骤/约束增加可扩展复杂度的特性而被选中。每个谜题不仅要求模型给出正确答案，还需通过思维链提示解释推理过程。

随着难度提升，所有领先推理模型的准确率均持续下降。在最复杂任务中，性能甚至归零。值得注意的是，模型内部推理轨迹长度（通过思考问题的token数量衡量）也开始收缩。研究者将此解读为模型面对高难度问题时放弃求解的迹象。

论文在苹果全球开发者大会(WWDC)前夕发布后迅速引爆X平台。许多观点认为这相当于承认当前LLM本质仍是高级自动补全工具，而非通用思考者。尽管存在争议，这种解读主导了初期讨论。

### X平台上的批评声浪  
机器学习研究员@scaling01（别称"Lisan al Gaib"）指出苹果团队将token预算不足误判为推理失败："所有模型在超过13个圆盘时准确率归零，纯粹是因输出容量不足！"对于汉诺塔等谜题，输出量呈指数级增长，而LLM上下文窗口固定。他通过Claude 3 Sonnet和DeepSeek-R1常能生成算法正确的文本/代码策略却被判错的实例，有力佐证了这一观点。

法国高效能AI初创公司Pleias的LLM训练师Alexander Doria（又名Pierre-Carl Langlais）批评论文框架过于二元化："模型可能在学习部分启发式方法，而非简单模式匹配。"

宾夕法尼亚大学沃顿商学院AI专家Ethan Mollick认为"LLM遭遇瓶颈"的论断为时过早，类似此前关于"模型崩溃"的不实预测。更尖锐的批评者如@arithmoquine则暗示落后于OpenAI和谷歌的苹果试图降低市场预期，借研究"揭露这一切都是虚假把戏"。

### 测量误差还是能力天花板？  
卡内基梅隆大学研究员Rohan Paul在热门讨论串中指出："是token限制而非逻辑缺陷导致模型停滞。"当允许模型输出生成汉诺塔解决方案的Lua函数（而非逐行步骤）时，模型在更高复杂度任务中突然取得成功。这种格式转换完全消除了性能崩塌，表明失败源于人为设置的严格评分标准而非认知局限。

### 反驳论文：《思考错觉的错觉》  
非营利组织Open Philanthropy的技术作家Alex Lawsen与Anthropic的Claude Opus 4合作发表的这篇论文指出，苹果研究中的许多失败案例源于测试设置本身。例如河内塔任务需要打印超32,000步移动（仅15个圆盘），导致模型触及输出上限。但苹果的评估脚本仍将这些因token溢出而截断的输出判为错误。

论文同时揭露苹果基准测试中若干问题构造：部分渡河难题在数学上本就无解，但模型输出仍被计分。这进一步质疑了"准确率下降反映认知局限"的结论。

### 对企业决策者的启示  
这场论战凸显出：评估设计已与模型设计同等重要。要求LRMs枚举每个步骤可能更多测试其"打印能力"而非"规划能力"，而压缩格式、程序化答案或外部暂存机制才能真实反映推理能力。

对基于推理LLM构建生产系统的企业技术决策者而言，这场辩论具有现实意义。当模型在复杂提示上"失败"时，问题可能源于任务框架、输出要求或内存访问限制，而非推理能力缺陷。这对开发副驾驶、自主代理或决策支持系统等需要高可解释性和任务复杂度的行业尤为重要。

最终给ML研究者的重要启示是：在宣告AI里程碑（或讣告）前，请先确认测试环境没有给系统套上过小的思维枷锁。### 你所需的AI洞见，引领未来

提交

感谢订阅。查看更多[VB新闻通讯请点击此处](/newsletters/)。

发生错误。