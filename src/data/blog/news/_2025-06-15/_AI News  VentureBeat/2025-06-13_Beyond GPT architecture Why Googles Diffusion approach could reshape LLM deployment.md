---
title: 超越GPT架构：谷歌的Diffusion方法为何可能重塑大语言模型部署
pubDatetime: 2025-06-13 21:48:11+00:00
tags:
- Gemini Diffusion
- 扩散模型
- 文本生成
- 并行处理
- 编程助手
- 数学领域
description: 谷歌DeepMind的Gemini Diffusion采用扩散技术实现高速文本生成（1000-2000 token/秒），具备低延迟和迭代优化优势，特别适合编程和数学应用，但存在成本较高的问题。
---

*[源信息](https://venturebeat.com/ai/beyond-gpt-architecture-why-googles-diffusion-approach-could-reshape-llm-deployment/)经过deepseek翻译并总结*

## 摘要：

谷歌DeepMind的Gemini Diffusion采用扩散方法生成文本，通过正向扩散（加噪）和逆向扩散（去噪）两阶段训练，支持并行处理（1000-2000 token/秒）和错误修正。相比传统自回归模型，其优势包括低延迟、自适应计算、非因果推理和迭代优化，但在服务成本和首token生成速度上存在不足。基准测试显示该模型在编程和数学领域表现优异，生成速度显著提升，适用于实时AI、编程助手等场景，可能改变语言模型部署方式。

---

以下是翻译后的简体中文内容，严格保留原始Markdown格式及超链接，并去除商业广告部分：

超越GPT架构：为何谷歌的Diffusion方法可能重塑大语言模型部署  
=====================================================================================

[David Chen](https://venturebeat.com/author/david-chen/ "David Chen的文章")

2025年6月13日 下午2:48

* [分享到Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fai%2Fbeyond-gpt-architecture-why-googles-diffusion-approach-could-reshape-llm-deployment%2F&t=超越GPT架构：为何谷歌的Diffusion方法可能重塑大语言模型部署)
* [分享到X平台](//twitter.com/intent/tweet?text=超越GPT架构：为何谷歌的Diffusion方法可能重塑大语言模型部署&url=https%3A%2F%2Fventurebeat.com%2Fai%2Fbeyond-gpt-architecture-why-googles-diffusion-approach-could-reshape-llm-deployment%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [分享到LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fai%2Fbeyond-gpt-architecture-why-googles-diffusion-approach-could-reshape-llm-deployment%2F&token=&isFramed=true)

由VentureBeat通过ChatGPT创建

---

上月，谷歌DeepMind在发布全套[新AI工具](https://venturebeat.com/tag/googleio2024/)时同步推出了[Gemini Diffusion](https://blog.google/technology/google-deepmind/gemini-diffusion/)。这项实验性研究模型采用基于扩散的方法生成文本。传统上，GPT和Gemini等大语言模型（LLM）依赖自回归技术——即基于前文逐个生成词语。[扩散语言模型（DLM）](https://venturebeat.com/ai/30-seconds-vs-3-the-d1-reasoning-framework-thats-slashing-ai-response-times/)则采用了图像生成领域更常见的方法，从随机噪声开始逐步优化输出。这种技术能显著提升生成速度，并改善连贯性与一致性。

Gemini Diffusion目前作为实验性演示开放，[点击此处加入候补名单](https://docs.google.com/forms/d/1aLm6J13tAkq4v4qwGR3z35W2qWy7mHiiA0wGEpecooo/edit?resourcekey=0-RbgTkrNpFAWD4fowpPPL_A)。

**扩散与自回归的技术差异**  
----------------------------------------------

两种方法存在根本差异：自回归模型按顺序生成文本，逐个预测标记（token）。虽然能确保强连贯性和上下文追踪，但计算密集且速度较慢，尤其对于长文本。

扩散模型则从随机噪声出发，通过渐进去噪形成连贯输出。应用于文本时，该技术具备多项优势：可并行处理文本块，快速生成完整段落。Gemini Diffusion据称每秒可生成1000-2000个token，而Gemini 2.5 Flash的平均输出速度为272.4 token/秒。此外，生成错误可在优化过程中修正，从而提高准确性并减少幻觉现象。尽管可能在细粒度精度和标记级控制方面存在权衡，但速度提升将为众多应用带来变革。

**扩散文本生成原理**  
--------------------------------------------------

训练过程中，DLM通过多步骤逐渐用噪声破坏句子，直至原始内容完全不可识别。随后模型学习逆向操作，从噪声版本逐步重建原句。通过迭代优化，它掌握了训练数据中所有合理句子的分布模式。

虽然Gemini Diffusion的具体细节尚未公开，但典型扩散模型训练包含以下关键阶段：

**正向扩散**：对每个训练样本进行多轮噪声叠加（通常500-1000次），直至其与随机噪声无法区分。  
**逆向扩散**：模型学习逆向每个噪声添加步骤，逐步"去噪"被破坏的句子，最终恢复原始结构。  

该过程通过多样化样本和噪声级别重复数百万次，使模型掌握可靠的去噪函数。

训练完成后，模型能生成全新句子。DLM通常需要条件输入（如提示、类别标签或嵌入向量）来引导生成方向。条件信息会注入每个去噪步骤，将初始噪声转化为结构清晰的文本。

**扩散模型的优势与劣势**  
----------------------------------------------------------

谷歌DeepMind研究科学家、Gemini Diffusion项目负责人Brendan O'Donoghue向VentureBeat阐述了扩散技术的核心优势：

* **更低延迟**：相比自回归模型，扩散模型能更快生成token序列  
* **自适应计算**：根据任务难度动态调整收敛速度，节省资源消耗  
* **非因果推理**：得益于去噪器的双向注意力机制，token可关注同一生成块中的后续内容，实现全局编辑  
* **迭代优化/自我修正**：去噪过程中的采样可能产生错误，但模型有机会在后续步骤中修正  

O'Donoghue也指出主要缺点："服务成本较高，首token生成时间（TTFT）略长。自回归模型会立即产生首token，而扩散模型需要等待完整序列就绪。"

**性能基准测试**  
--------------------------

谷歌表示Gemini Diffusion性能[可比肩Gemini 2.0 Flash-Lite](https://deepmind.google/models/gemini-diffusion/#benchmarks)。

| **测试项** | **类型** | **Gemini Diffusion** | **Gemini 2.0 Flash-Lite** |
| --- | --- | --- | --- |
| LiveCodeBench (v6) | 代码 | 30.9% | 28.5% |
| BigCodeBench | 代码 | 45.4% | 45.8% |
| LBPP (v2) | 代码 | 56.8% | 56.0% |
| SWE-Bench Verified* | 代码 | 22.9% | 28.5% |
| HumanEval | 代码 | 89.6% | 90.2% |
| MBPP | 代码 | 76.0% | 75.8% |
| GPQA Diamond | 科学 | 40.4% | 56.5% |
| AIME 2025 | 数学 | 23.3% | 20.0% |
| BIG-Bench Extra Hard | 推理 | 15.0% | 21.0% |
| Global MMLU (Lite) | 多语言 | 69.1% | 79.0% |

*非代理评估（仅单轮编辑），最大提示长度32K。

两项模型在多项基准测试中对比，分数基于模型首次回答的正确率。Gemini Diffusion在编程与数学测试中表现优异，而Gemini 2.0 Flash-lite在推理、科学知识和多语言能力上略胜一筹。

随着Gemini Diffusion的发展，其性能有望追平成熟模型。O'Donoghue表示："至少在现有规模下，两种技术的基准表现差距已基本消除。对于需要非局部一致性的领域（如编程和推理），扩散模型可能更具优势。"

**Gemini Diffusion实测**  
--------------------------

VentureBeat获得实验版访问权限。测试中最直观的感受是速度：运行谷歌建议的提示（如构建Xylophone和Planet Tac Toe等交互式HTML应用）时，每个请求均在3秒内完成，速度区间为600-1300 token/秒。

为测试实际应用表现，我们要求Gemini Diffusion构建视频聊天界面：

```
构建视频聊天应用界面。需包含访问设备摄像头并显示画面的预览窗口，以及实时测量麦克风输入的音量计。
```

不到两秒，Gemini Diffusion便创建出带视频预览和音频仪表的可运行界面。虽然实现不复杂，但通过进一步提示可快速完成MVP开发。需注意Gemini 2.5 Flash也能生成可运行界面，但耗时约7秒。

Gemini Diffusion还提供"即时编辑"模式，可粘贴文本/代码进行实时修改。该模式适用于多种文本编辑场景（如语法修正、读者定位调整、SEO关键词插入），以及代码重构、功能添加或跨语言代码库转换等任务。

**DLM的企业级应用场景**  
---------------------------------

任何需要快速响应的应用都将受益于DLM技术，包括实时/低延迟场景（如对话式AI、聊天机器人、实时转录翻译、IDE自动补全和编程助手）。据O'Donoghue介绍，"对于内联编辑等应用场景，扩散模型具有自回归模型无法比拟的优势。"DLM在推理、数学和编程问题上也更具潜力，因其"双向注意力机制支持非因果推理"。

虽然DLM尚处发展初期，但这项技术可能彻底改变语言模型的构建方式。其不仅生成速度远超自回归模型，通过错误修正机制未来还可能产出更精确的结果。

Gemini Diffusion正加入不断壮大的DLM生态系统，其中值得注意的包括Inception Labs开发的[Mercury](https://www.inceptionlabs.ai/introducing-mercury)和GSAI的开源模型[LLaDa](https://huggingface.co/GSAI-ML/LLaDA-1.5)。这些模型共同展现了扩散式文本生成的蓬勃发展趋势，为传统自回归架构提供了可扩展、可并行的替代方案。### 你所需的AI前沿洞见  

提交  

感谢订阅。查看更多[VB新闻简报请点击此处](/newsletters/)。  

发生错误。