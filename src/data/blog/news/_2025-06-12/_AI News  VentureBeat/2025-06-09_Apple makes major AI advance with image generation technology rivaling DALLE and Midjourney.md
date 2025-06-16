---
title: 苹果在图像生成技术上取得重大突破，媲美DALL-E与Midjourney
pubDatetime: 2025-06-09 18:50:06+00:00
tags:
- STARFlow
- AI图像生成
- 标准化流
- 自回归变换器
- Apple机器学习
- 高分辨率图像生成
description: Apple开发高性能AI图像生成系统STARFlow，结合流模型与Transformer技术，性能比肩DALL-E，或助力设备端AI应用。
---

*[源信息](https://venturebeat.com/ai/apple-makes-major-ai-advance-with-image-generation-technology-rivaling-dall-e-and-midjourney/)经过deepseek翻译并总结*

## 摘要：

Apple的机器学习团队开发出AI图像生成系统STARFlow，结合标准化流与自回归变换器技术，性能媲美主流扩散模型（如DALL-E和Midjourney）。该系统通过深浅Transformer设计及潜在空间操作解决高分辨率图像生成难题，保持数学可训练性。研究发布于Apple面临AI竞争背景下，展现其高校合作开发差异化技术的战略。STARFlow可能为设备端AI应用提供优势，但快速转化为消费者功能仍是挑战。论文已公开于arXiv。

---

Apple 在图像生成技术领域取得重大AI突破，媲美DALL-E与Midjourney  
================================================================

[作者：Michael Nuñez](https://venturebeat.com/author/michael_nunez/)  
2025年6月9日 上午11:50  

---

Apple的[机器学习研究团队](https://machinelearning.apple.com/)开发出一项突破性AI系统，可生成高分辨率图像，有望挑战当前主导图像生成领域的扩散模型技术——该技术正是[DALL-E](https://openai.com/index/dall-e/)和[Midjourney](https://www.midjourney.com/)等流行工具的核心。

这项名为"[STARFlow](https://arxiv.org/pdf/2506.06276)"的进展发表于上周的研究论文中。该系统由Apple研究人员与高校合作伙伴共同开发，通过将标准化流（normalizing flows）与自回归变换器（autoregressive transformers）相结合，实现了研究团队所称的"与尖端扩散模型相媲美的性能"。

这一突破正值Apple面临人工智能领域[日益严峻的批评](https://www.bloomberg.com/news/features/2025-05-18/how-apple-intelligence-and-siri-ai-went-so-wrong?embedded-checkout=true)之际。在周一的[全球开发者大会](https://developer.apple.com/wwdc25/)上，该公司仅展示了[Apple Intelligence平台](https://www.apple.com/apple-intelligence/)的[温和AI更新](https://www.cnn.com/2025/06/09/tech/apple-wwdc-iphone-ai-what-to-expect)，凸显了这家被视为在AI军备竞赛中落后的公司所面临的竞争压力。

"据我们所知，这是首个成功证明标准化流能在此规模和分辨率下有效运作的研究，"研究团队写道。团队成员包括Apple机器学习研究员Jiatao Gu、Joshua M. Susskind和Shuangfei Zhai，以及来自[加州大学伯克利分校](https://www.berkeley.edu/)和[佐治亚理工学院](https://www.gatech.edu/)等机构的学术合作者。

### Apple如何在AI战争中反击OpenAI与Google  

[STARFlow](https://arxiv.org/pdf/2506.06276)研究体现了Apple开发差异化AI能力的整体战略。当[Google](https://www.google.com/)和[OpenAI](https://openai.com/)等公司凭借生成式AI进展占据头条时，Apple一直在研究可能提供独特优势的替代方案。

研究团队解决了AI图像生成中的一个基础性挑战：将标准化流扩展至高分辨率图像。标准化流是一种学习将简单分布转换为复杂分布的生成模型，但在图像合成应用中，传统上一直被扩散模型和生成对抗网络所 overshadowed（ overshadowed 的翻译需要根据上下文确定，此处建议保留英文或意译为"超越"）。

"STARFlow在类别条件与文本条件图像生成任务中均展现出竞争力，在样本质量上接近最先进的扩散模型，"研究人员写道，展示了该系统在不同类型图像合成挑战中的通用性。

### 解析Apple新AI系统的数学突破  

Apple研究团队引入了多项关键创新以克服现有标准化流方法的局限。该系统采用研究人员所称的"深浅设计"：使用"深度Transformer模块捕捉大部分模型表征能力，辅以少量计算高效但效果显著的浅层Transformer模块"。

根据论文描述，这一突破还涉及"在预训练自动编码器的潜在空间中操作，这被证明比直接像素级建模更有效"。该方法使模型能够处理图像的压缩表示而非原始像素数据，显著提升了效率。

与依赖迭代去噪过程的扩散模型不同，[STARFlow](https://arxiv.org/pdf/2506.06276)保持了标准化流的数学特性，实现了"连续空间中无需离散化的精确最大似然训练"。

### STARFlow对iPhone与Mac产品的未来意义  

此项研究发布之际，Apple正面临展示人工智能实质性进展的日益增长的压力。近期[彭博社分析](https://www.bloomberg.com/news/features/2025-05-18/how-apple-intelligence-and-siri-ai-went-so-wrong?embedded-checkout=true)指出Apple Intelligence与Siri难以与竞争对手抗衡。Apple本周在WWDC上的平淡公告凸显了该公司在AI领域的挑战。

对Apple而言，STARFlow的精确似然训练可能在需要精确控制生成内容的应用中提供优势，或在理解模型不确定性对决策至关重要的场景中显现价值——这对于Apple强调的企业应用与设备端AI能力可能尤为宝贵。

该研究证明，扩散模型的替代方法可以获得可比结果，可能为创新开辟新途径，从而发挥Apple在软硬件集成与设备端处理方面的优势。

### Apple为何押注高校合作解决AI难题  

这项研究体现了Apple与顶尖学术机构合作推进AI能力的战略。论文合著者[田荣晨](https://tianrongchen.github.io/)是佐治亚理工学院的博士生，曾在Apple机器学习研究团队实习，专攻随机最优控制与生成建模。

合作者还包括加州大学伯克利分校数学系的[张瑞祥](https://sites.google.com/view/ruixiang-zhang/home)，以及在[Google Brain](https://research.google.com/teams/brain/)和[DeepMind](https://deepmind.google/)从事流模型开创性研究的机器学习研究员Laurent Dinh。

"关键的是，我们的模型始终保持端到端的标准化流特性，"研究人员强调，以此区分其方法与那些为提升性能而牺牲数学可处理性的混合方法。

完整研究论文已发布于[arXiv](https://arxiv.org/abs/2506.06276)，为这个竞争激烈的生成式AI领域的研究人员与工程师提供了技术细节。虽然STARFlow代表着重大技术成就，但真正的考验在于Apple能否将此类研究突破转化为使ChatGPT等竞争对手家喻户晓的消费者导向AI功能。对于曾用iPhone等产品彻底改变整个行业的公司而言，问题不在于Apple能否在AI领域创新，而在于他们是否能足够快地实现。### 你所需的AI洞察力  

提交  

感谢订阅。查看更多[VB新闻通讯请点击此处](/newsletters/)。  

发生错误。