---
title: MiniMax-M1是一款全新开源模型，具备100万token上下文处理能力及超高效强化学习技术
pubDatetime: 2025-06-16 22:46:47+00:00
tags:
- MiniMax-M1
- 开源大语言模型
- 混合专家系统
- CISPO强化学习
- 长文本处理
- 企业集成
description: MiniMax-M1是中国MiniMax公司推出的高效开源大语言模型，支持百万级TOKEN处理，成本低且性能优异，适用于企业集成与长文本任务。
---

*[源信息](https://venturebeat.com/ai/minimax-m1-is-a-new-open-source-model-with-1-million-token-context-and-new-hyper-efficient-reinforcement-learning/)经过deepseek翻译并总结*

## 摘要：

MiniMax-M1是中国MiniMax公司推出的开源大语言模型，支持100万TOKEN输入和8万TOKEN输出，采用Apache 2.0许可。基于混合专家系统(MoE)架构和CISPO强化学习算法，训练成本仅53.47万美元。提供40k和80k输出版本，在数学、编程及长文本任务中表现优异，支持vLLM和Transformers部署，内置函数调用及多工具API，适用于企业成本控制与系统集成。

---

以下为翻译后的简体中文内容，已去除广告部分并保留所有原始超链接及Markdown格式：

MiniMax-M1 是一款具备100万TOKEN上下文窗口的全新开源模型 | VentureBeat

MiniMax-M1 以超高效强化学习技术实现百万级上下文处理能力
==================================================================================================================

[Carl Franzen](https://venturebeat.com/author/carlfranzen/ "Carl Franzen的文章")[@carlfranzen](https://twitter.com/carlfranzen)

2025年6月16日 下午3:46

* [Facebook分享](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fai%2Fminimax-m1-is-a-new-open-source-model-with-1-million-token-context-and-new-hyper-efficient-reinforcement-learning%2F&t=MiniMax-M1%20是具备百万TOKEN上下文窗口和超高效强化学习技术的新开源模型)
* [X平台分享](//twitter.com/intent/tweet?text=MiniMax-M1%20是具备百万TOKEN上下文窗口和超高效强化学习技术的新开源模型&url=https%3A%2F%2Fventurebeat.com%2Fai%2Fminimax-m1-is-a-new-open-source-model-with-1-million-token-context-and-new-hyper-efficient-reinforcement-learning%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [LinkedIn分享](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fai%2Fminimax-m1-is-a-new-open-source-model-with-1-million-token-context-and-new-hyper-efficient-reinforcement-learning%2F&token=&isFramed=true)

图片来源：VentureBeat使用Midjourney制作

---

中国AI初创公司MiniMax（西方用户可能更熟悉其爆款写实级[AI视频模型Hailuo](https://venturebeat.com/ai/hailuo-gets-feature-competitive-launching-image-to-video-ai-generation-capability/)）最新发布了大型语言模型[MiniMax-M1](https://huggingface.co/MiniMaxAI/MiniMax-M1-80k)。对企业与开发者而言的重大利好是：该模型采用完全[Apache 2.0许可开源](https://huggingface.co/datasets/choosealicense/licenses/blob/main/markdown/apache-2.0.md)，意味着商业应用可不受限制地免费使用和修改。

这款开放权重的模型在长程推理、工具调用和计算效率方面树立了新标杆，现已在AI代码社区[Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-M1-80k)及[微软旗下GitHub](https://github.com/minimax-ai)发布，该公司在X平台宣布本周为"MiniMax主题周"，预计还将推出更多产品。

MiniMax-M1的突出优势在于其100万输入TOKEN和最高8万输出TOKEN的上下文窗口，使其成为长文本推理任务中处理能力最强的模型之一。TOKEN作为大语言模型(LLM)的基础文本单位（可能是完整单词、词段、标点或代码符号），通过模型参数（权重与偏置）转化为数值向量进行语义处理——本质上是LLM的"母语"。

对比来看，[OpenAI的GPT-4o](https://platform.openai.com/docs/models/gpt-4o)仅支持12.8万TOKEN上下文（约等效于[一部小说的信息量](https://michaelcurrin.github.io/token-translator/)），而MiniMax-M1的百万TOKEN容量可处理相当于一个丛书系列的数据量。[谷歌Gemini 2.5 Pro](https://venturebeat.com/ai/beyond-benchmarks-gemini-2-5-pro-is-probably-the-best-reasoning-model-yet/)同样支持百万级上下文，并正在开发200万TOKEN版本。

但M1还有秘密武器：采用创新高效的强化学习训练技术。该模型采用混合专家系统(MoE)架构与闪电注意力机制，显著降低推理成本。技术报告显示，在处理10万TOKEN生成任务时，MiniMax-M1仅需消耗[DeepSeek R1](https://venturebeat.com/ai/deepseek-r1-0528-arrives-in-powerful-open-source-challenge-to-openai-o3-and-google-gemini-2-5-pro/)25%的浮点运算量(FLOPs)。

架构与变体
-------------------------

模型提供两个版本：MiniMax-M1-40k和MiniMax-M1-80k，数字代表其"思维预算"即输出长度。架构基于早期MiniMax-Text-01框架，包含4560亿参数，每个TOKEN激活459亿参数。

最引人注目的是训练成本——MiniMax宣称采用大规模强化学习(RL)训练M1的总成本仅为53.47万美元。这种高效性得益于名为CISPO的自研RL算法（通过裁剪重要性采样权重而非TOKEN更新实现），以及简化扩展的混合注意力设计。相比[DeepSeek R1模型](https://wandb.ai/byyoung3/ml-news/reports/DeepSeek-V3-Training-671-billion-parameters-with-a-6-million-dollar-budget--VmlldzoxMDczNTI2Ng)500-600万美元的训练成本，以及[OpenAI GPT-4](https://www.wired.com/story/openai-ceo-sam-altman-the-age-of-giant-ai-models-is-already-over/)超1亿美元的投入，堪称突破性成本控制。

基准测试表现
---------------------
在数学竞赛基准AIME 2024中，M1-80k模型取得86.0%准确率，在编码和长上下文任务中表现优异：
* LiveCodeBench: 65.0%
* SWE-bench Verified: 56.0% 
* TAU-bench: 62.8%
* OpenAI MRCR(4针版本): 73.4%

这些成绩使MiniMax-M1在多项复杂任务上超越[DeepSeek-R1](https://venturebeat.com/ai/deepseek-r1-0528-arrives-in-powerful-open-source-challenge-to-openai-o3-and-google-gemini-2-5-pro/)和[Qwen3-235B-A22B](https://venturebeat.com/ai/alibaba-launches-open-source-qwen3-model-that-surpasses-openai-o1-and-deepseek-r1/)等开源竞品。虽然闭源模型如OpenAI o3和Gemini 2.5 Pro仍在部分测试领先，但M1大幅缩小差距的同时保持Apache-2.0许可的开放访问。

部署方案与开发者工具
--------------------------------------
MiniMax推荐使用vLLM作为服务后端（因其针对大模型负载优化），同时支持Transformers库部署。该模型内置结构化函数调用能力，并配备含在线搜索、音视频生成、语音克隆等工具的聊天API，支持实际应用中的智能体行为。

对技术决策者的意义
----------------------------------------------------------------
开放访问、长上下文支持和计算效率三大特性，为规模化AI系统管理者提供了解决方案：
* 工程负责人可降低运营成本的同时处理高级推理任务，超长上下文窗口能大幅减少企业文档/日志数据的预处理
* AI流程管理者可通过vLLM等工具便捷集成现有基础设施
* 数据平台团队可基于开放特性定制性能，避免供应商锁定
* 安全主管可评估模型在敏感数据本地化部署中的价值

MiniMax-M1为寻求平衡性能、成本与自主权的组织提供了灵活选择，其发布彰显了MiniMax对实用化、可扩展AI模型的持续专注。我们将持续跟踪本周其他产品发布，敬请关注！### 你所需的AI洞察力  

提交  

感谢订阅。查看更多[VB新闻简报请点击此处](/newsletters/)。  

发生错误。