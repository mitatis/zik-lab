---
title: Meta的新世界模型让机器人能在陌生环境中操控物体
pubDatetime: 2025-06-12 22:22:07+00:00
tags:
- 世界模型
- V-JEPA 2
- 自监督学习
- 零样本规划
- 机器人抓取
- 数字孪生
description: Meta发布V-JEPA 2世界模型，通过自监督学习实现物理认知和零样本规划，提升机器人任务成功率并降低部署成本，已开源推动AI发展。
---

*[源信息](https://venturebeat.com/ai/metas-new-world-model-lets-robots-manipulate-objects-in-environments-theyve-never-encountered-before/)经过deepseek翻译并总结*

## 摘要：

Meta发布世界模型V-JEPA 2，通过自监督学习百万小时视频建立物理认知，经微调实现零样本规划能力。其12亿参数模型高效预测高层特征，测试显示机器人在新物体抓取任务成功率65%-80%。该技术可降低企业部署成本，适用于物流制造及数字孪生等场景。Meta开源代码以推动AI与物理世界交互的变革。

---


Meta新型世界模型让机器人在陌生环境中操控物体
======================================================================================================

[作者：Ben Dickson](https://venturebeat.com/author/ben-dickson-techtalks/ "Ben Dickson的文章")[@BenDee983](https://twitter.com/BenDee983)

2025年6月12日 下午3:22

* [Facebook分享](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fai%2Fmetas-new-world-model-lets-robots-manipulate-objects-in-environments-theyve-never-encountered-before%2F&t=Meta新型世界模型让机器人在陌生环境中操控物体)
* [X平台分享](//twitter.com/intent/tweet?text=Meta新型世界模型让机器人在陌生环境中操控物体&url=https%3A%2F%2Fventurebeat.com%2Fai%2Fmetas-new-world-model-lets-robots-manipulate-objects-in-environments-theyve-never-encountered-before%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [LinkedIn分享](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fai%2Fmetas-new-world-model-lets-robots-manipulate-objects-in-environments-theyve-never-encountered-before%2F)

图片来源：VentureBeat与Gemini合作

---

虽然大语言模型（LLMs）已精通文本处理（某种程度上也掌握其他模态），但它们缺乏在动态现实世界中运作所需的物理"常识"。这限制了AI在制造和物流等需要理解因果关系的关键领域的应用。

Meta最新发布的[V-JEPA 2](https://ai.meta.com/vjepa/)模型通过从视频和物理互动中学习世界模型，向弥合这一差距迈出了重要一步。该模型可帮助开发需要在存在诸多边缘案例的不可预测环境中预测结果和规划行动的AI应用，为更具能力的机器人和物理环境中的高级自动化提供了清晰路径。

### 世界模型如何学习规划

人类在生命早期通过观察周围环境发展出物理直觉。当你看到抛出的球时，会本能知道其轨迹并预测落点。V-JEPA 2学习的正是类似的"世界模型"——即AI系统对物理世界运行机制的内在模拟。

该模型建立在三项对企业应用至关重要的核心能力上：理解场景动态、预测行动引发的场景变化、规划达成目标的行动序列。正如Meta在其[博客](https://ai.meta.com/blog/v-jepa-2-world-model-benchmarks/)所述，其"长期愿景是世界模型能让AI代理在物理世界中进行规划和推理"。

这种名为视频联合嵌入预测架构（V-JEPA）的模型包含两个关键部分："编码器"将视频片段压缩为称为[嵌入](https://venturebeat.com/ai/beyond-chatbots-the-wide-world-of-embeddings/)的紧凑数值摘要，捕捉场景中物体及其关系的核心信息；"预测器"则根据该摘要推演场景变化，生成对下一时刻场景的预测。

V-JEPA由编码器和预测器组成（来源：Meta博客）

该架构是最初应用于图像的[I-JEPA](https://venturebeat.com/ai/meta-releases-i-jepa-a-machine-learning-model-that-learns-high-level-abstractions-from-images/)框架的最新演进，现升级至视频领域，展示了构建世界模型的一贯方法。

不同于需要预测未来帧每个像素颜色的生成式AI模型（计算量巨大），仅12亿参数的V-JEPA 2在抽象空间中运作，专注于预测场景的高层特征（如物体位置和轨迹），使其效率远高于其他大型模型。

### 从观察到行动的學習

V-JEPA 2的训练分为两个阶段：首先通过[自监督学习](https://venturebeat.com/ai/yann-lecun-and-yoshua-bengio-self-supervised-learning-is-the-key-to-human-level-intelligence/)观看超100万小时未标记网络视频建立物理基础认知；随后在仅62小时的机器人任务视频及对应控制命令上进行微调，学习将特定行动与物理结果关联。

V-JEPA两阶段训练流程（来源：Meta）

这种训练方式实现了现实自动化的关键能力：零样本机器人规划。搭载V-JEPA 2的机器人可在全新环境中直接操控从未见过的物体，无需针对特定场景重新训练。该模型在开源数据集训练后，已成功部署于Meta实验室的不同机器人。

例如执行抓取任务时，机器人会获得目标状态的图像，通过V-JEPA 2预测器在内部模拟多种可能动作，评估每个动作与目标的接近程度，执行最优动作并循环该过程直至完成任务。该方法使模型在陌生环境的新物体抓放任务中取得了65%-80%的成功率。

### 物理推理的现实影响

这种应对新情境的能力对企业运营具有直接意义。在物流制造领域，它使机器人能适应产品和仓库布局的变化，无需大量重新编程。这对企业探索在工厂部署[人形机器人](https://venturebeat.com/games/nvidia-charges-ahead-with-humanoid-robotics-aided-by-the-cloud/)尤为重要。

相同世界模型还可驱动高保真数字孪生，让企业在物理精准的虚拟环境中模拟新流程或训练其他AI。在工业场景中，此类模型能基于学习的物理知识，通过监控设备视频预测安全隐患和故障。

Meta称这项研究是实现"高级机器智能（AMI）"的关键一步，届时AI系统将能"像人类一样认识世界，规划陌生任务执行，并高效适应不断变化的环境"。Meta已公开模型及训练代码，希望"围绕该研究建立广泛社区，推动实现AI与物理世界交互方式变革的终极目标"。

### 对企业技术决策者的意义

V-JEPA 2使机器人技术更接近云团队熟知的"一次预训练，随处部署"的软件定义模式。由于模型从公开视频学习通用物理知识，仅需数十小时任务特定视频，企业可大幅缩短通常拖累试点项目的数据收集周期。实际操作中，可先在廉价桌面机械臂上原型测试抓取机器人，再将相同策略直接部署到工厂工业设备上，无需采集数千新样本或编写定制运动脚本。

更低的训练开销也改变了成本等式。12亿参数的V-JEPA 2可单张高端GPU流畅运行，其抽象预测目标进一步降低推理负载。这使得团队能在本地或边缘端运行闭环控制，避免云端延迟及视频外流带来的合规风险。原用于大型计算集群的预算可转投传感器、冗余系统或更快的迭代周期。
