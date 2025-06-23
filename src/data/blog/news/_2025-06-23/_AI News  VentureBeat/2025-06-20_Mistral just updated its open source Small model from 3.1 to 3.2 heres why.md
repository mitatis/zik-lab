---
title: Mistral将其开源小模型从3.1版本更新至3.2：原因如下
pubDatetime: 2025-06-20 22:51:45+00:00
tags:
- Mistral Small
- AI模型升级
- 指令遵循
- 输出稳定性
- 函数调用鲁棒性
- 开源模型
description: 法国Mistral公司升级开源模型至3.2-24B版本，优化指令遵循和工具调用性能，保持GPU兼容性，适用欧洲企业需求。
---

*[源信息](https://venturebeat.com/ai/mistral-just-updated-its-open-source-small-model-from-3-1-to-3-2-heres-why/)经过deepseek翻译并总结*

## 摘要：

法国AI公司Mistral将其开源模型Mistral Small从3.1升级至3.2-24B Instruct-2506版本，改进指令遵循、输出稳定性和函数调用鲁棒性，减少无限生成和重复内容，优化工具使用场景，保持单块Nvidia A100/H100 80GB GPU兼容性。基准测试显示指令遵循和部分代码任务表现提升，但视觉和多语言理解测试结果持平或略降。该版本采用Apache 2.0许可，适合欧洲企业需求，侧重优化而非新增功能，实际价值取决于具体用例。

---

以下是翻译后的简体中文内容，已去除所有商业广告和非正文内容，保留原始超链接和Markdown格式：

---
Mistral 刚刚将其开源 Small 模型从 3.1 升级至 3.2：原因如下  
============================================================================  
作者：[Carl Franzen](https://venturebeat.com/author/carlfranzen/ "Posts by Carl Franzen") [@carlfranzen](https://twitter.com/carlfranzen)  
2025年6月20日 下午3:51  

法国AI新星Mistral在这个夏天持续推出新版本。  

继宣布推出[本土AI优化云服务Mistral Compute](https://venturebeat.com/ai/microsoft-backed-mistral-launches-european-ai-cloud-to-compete-with-aws-and-azure/)几天后，这家资金雄厚的公司又发布了[其240亿参数开源模型Mistral Small的更新](https://x.com/MistralAI/status/1936093325116781016)，版本号从3.1升级至3.2-24B Instruct-2506。  

新版本直接基于Mistral Small 3.1开发，旨在改进指令遵循、输出稳定性和函数调用鲁棒性等特定行为。虽然整体架构保持不变，但此次更新引入了针对性优化，影响了内部评估和公开基准测试结果。  

据Mistral AI称，Small 3.2能更好地遵循精确指令，并降低了生成无限或重复内容的概率——这是旧版本在处理长提示或模糊提示时偶尔出现的问题。函数调用模板也进行了升级，以支持更可靠的工具使用场景（尤其在vLLM等框架中）。同时，该模型可在单块Nvidia A100/H100 80GB GPU上运行，大幅拓宽了计算资源或预算有限的企业的选择范围。  

### 时隔3个月的模型更新  
[Mistral Small 3.1于2025年3月发布](https://venturebeat.com/ai/mistral-ai-drops-new-open-source-model-that-outperforms-gpt-4o-mini-with-fraction-of-parameters/)，是240亿参数范围内的旗舰开源版本。它具备全模态能力、多语言理解和128K token的长上下文处理能力。该模型明确对标GPT-4o Mini、Claude 3.5 Haiku和Gemma 3-it等专有模型，据Mistral称，其在多项任务中表现更优。  

Small 3.1还强调高效部署，宣称推理速度达每秒150个token，并支持在32GB内存的设备上运行。该版本提供基础版和指令调优版，支持法律、医疗和技术等领域的微调。  

相比之下，Small 3.2专注于行为和可靠性的精准改进，未引入新功能或架构变化。它更像一个维护版本：清理输出生成中的边缘案例、加强指令合规性，并优化系统提示交互。  

### Small 3.2 vs. 3.1：变化何在？  
指令遵循基准测试显示小幅提升。Mistral内部准确率从3.1的82.75%升至3.2的84.78%。在Wildbench v2和Arena Hard v2等外部数据集上表现显著提升——Wildbench提高近10个百分点，Arena Hard则从19.56%跃至43.10%。  

内部指标显示输出重复率降低。无限生成率从3.1的2.11%降至3.2的1.29%，几乎减少一半，使模型在需要稳定、有界响应的应用开发中更可靠。  

文本和代码基准测试结果较为复杂。Small 3.2在HumanEval Plus（88.99%→92.90%）、MBPP Pass@5（74.63%→78.33%）和SimpleQA上有所提升，MMLU Pro和MATH结果也有小幅改进。  

视觉基准测试基本持平：ChartQA和DocVQA微升，AI2D和Mathvista下降不到2个百分点，平均视觉性能从81.39%略降至81.00%。这与Mistral的定位一致——Small 3.2是优化而非重构，多数基准波动在预期范围内，部分退步可能是其他方面改进的权衡。  

但AI资深用户[@chatgpt21在X平台指出](https://x.com/chatgpt21/status/1936102511221322188)：“MMLU表现变差了。”确实，Small 3.2在这项涵盖57个学科的多任务语言理解测试中得分为80.50%，略低于3.1的80.62%。  

### 开源许可证将吸引成本敏感和定制化需求用户  
Small 3.1和3.2均采用Apache 2.0许可，可通过热门AI代码库[Hugging Face](https://huggingface.co/mistralai/Mistral-Small-3.2-24B-Instruct-2506)（总部位于法国和纽约的初创公司）获取。  

Small 3.2支持vLLM和Transformers等框架，bf16或fp16精度下约需55GB GPU内存。模型库中提供了系统提示和推理示例供开发者参考。  

虽然Small 3.1已集成至Google Cloud Vertex AI等平台，并计划部署于NVIDIA NIM和Microsoft Azure，但Small 3.2目前仅限通过Hugging Face自助访问或直接部署。  

### 企业评估Small 3.2时的关键考量  
尽管Small 3.2可能不会改变开源模型的竞争格局，但它体现了Mistral AI对迭代优化的承诺。在指令精度和工具使用等可靠性方面的显著提升，为基于Mistral生态开发的开发者和企业提供了更流畅的体验。  

其法国初创公司背景及对GDPR和《欧盟AI法案》的合规性，也使其对欧洲企业更具吸引力。  

不过，对于追求最大基准提升的用户，Small 3.1仍是参照点——尤其在MMLU等测试中3.2未超越前代。这使得本次更新更像是稳定性优化而非全面升级，具体价值取决于用例需求。### 你所需的AI洞见，助力领导力

提交

感谢订阅。查看更多[VB新闻通讯请点击此处](/newsletters/)。

发生错误。