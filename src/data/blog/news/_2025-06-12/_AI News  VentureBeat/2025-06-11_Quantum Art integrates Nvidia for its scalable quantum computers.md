---
title: 量子艺术集成英伟达技术打造可扩展量子计算机
pubDatetime: 2025-06-11 13:00:00+00:00
tags:
- 量子比特系统
- CUDA-Q平台
- 离子阱量子比特
- 多核量子处理器
- 量子体积
- 逻辑量子比特
description: '"Quantum Art集成CUDA-Q平台优化量子系统，提升性能25%，利用离子阱技术实现高相干性，目标200逻辑量子比特推动商用应用。"（49字）'
---

*[源信息](https://venturebeat.com/games/quantum-art-integrates-nvidia-for-its-scalable-quantum-computers/)经过deepseek翻译并总结*

## 摘要：

Quantum Art将英伟达的CUDA-Q平台集成至其量子比特系统，结合多核量子处理器和先进编译器优化电路深度与量子体积，提升性能25%。其离子阱量子比特技术具备高相干性和操作保真度，通过多量子比特门和动态可重构架构解决扩展性挑战，目标实现200个逻辑量子比特的商用规模，推动材料、物流等领域的量子应用。

---

# Quantum Art 整合英伟达技术以实现可扩展量子计算机

[Dean Takahashi](https://venturebeat.com/author/dean-takahashi/ "Dean Takahashi的文章")[@deantak](https://twitter.com/deantak)  
2025年6月11日 上午6:00  

* [分享到Facebook](//www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fventurebeat.com%2Fgames%2Fquantum-art-integrates-nvidia-for-its-scalable-quantum-computers%2F&t=Quantum%20Art%20整合英伟达技术以实现可扩展量子计算机)
* [分享到Twitter](//twitter.com/intent/tweet?text=Quantum%20Art%20整合英伟达技术以实现可扩展量子计算机&url=https%3A%2F%2Fventurebeat.com%2Fgames%2Fquantum-art-integrates-nvidia-for-its-scalable-quantum-computers%2F&via=VentureBeat&related=VentureBeat,GamesBeat)
* [分享到LinkedIn](https://www.linkedin.com/cws/share?url=https%3A%2F%2Fventurebeat.com%2Fgames%2Fquantum-art-integrates-nvidia-for-its-scalable-quantum-computers%2F&token=&isFramed=true)

[Quantum Art](https://www.quantum-art.tech/)作为全栈量子计算机开发商，已将英伟达的CUDA-Q混合量子-经典计算平台集成至其"量子比特"系统中。

这项整合将英伟达开源平台与Quantum Art先进的逻辑量子比特电路编译器相结合，将提升可扩展量子计算在实际应用中的性能表现。

这项合作将总部位于以色列的Quantum Art逻辑量子比特编译器（采用独特的多量子比特门和多核架构）与英伟达CUDA-Q开源混合量子-经典计算平台相结合，使开发者能够在量子处理器(QPU)、CPU和GPU上运行应用程序。

通过将Quantum Art专为低电路深度和可扩展性能优化的编译器，与英伟达在多核协调和开发者赋能方面的专业技术相结合，为推进量子计算的实际应用奠定了关键基础。

## 技术原理

要使量子算法具有实用性和商业价值，必须保持离子阱量子比特的优异性能及其全连接特性，同时实现量子比特数量的扩展。

当前主流的扩展方法速度过慢且会损害连接性，导致系统体积庞大且工程复杂度高。Quantum Art的解决方案通过在多核量子处理器(QPU)上实现动态可重构的先进多量子比特逻辑门，充分发挥物理系统潜力。

这种技术能实现大规模纠缠分布和连接性，获得超越竞争解决方案的计算能力。离子阱量子比特是目前量子计算领域的领先技术平台：
* 天然量子比特，比特间无制造差异
* 最长的相干时间
* 逻辑操作的最高保真度

离子量子比特被电磁场束缚在超高真空中，经过电离和微开尔文温度冷却后，通过激光进行操控。

## 整合效益

Quantum Art编译器与英伟达CUDA-Q的整合预计将显著降低电路深度，并因其优越的多量子比特和可重构多核操作而获得更好性能。在物理层的初步结果已显示出更优的扩展性(N与N²代码行对比)，以及量子体积电路对数高达25%的有效提升，实现了电路深度大幅降低和性能显著改善。

这项技术的重要意义在于能够通过在此类量子硬件系统上使用该编译器，大幅提高量子体积。

关键目标是实现约200个逻辑量子比特级别的电路合成与优化，这一规模与新兴商业用例需求相匹配。将分析电路深度、T门数量和所需核心重构次数等可量化的性能改进。量子体积将作为系统级基准，评估该组合平台的整体效能和可扩展性。

"我们很高兴与下一代计算基础设施领导者英伟达合作，结合双方互补优势加速可扩展量子计算的未来发展，"Quantum Art首席执行官Tal David在声明中表示，"我们的离子阱量子比特和专有多核架构提供了无与伦比的扩展机会，正解决量子计算机商业化道路上的首要挑战。我们的编译器与CUDA-Q的集成将使开发者能够大规模开发和优化有意义的量子应用。"

"CUDA-Q平台建立在AI超级计算的成功基础上，旨在加速量子计算的突破，"英伟达量子计算产品经理Sam Stanwyck表示，"Quantum Art将CUDA-Q与其编译器集成，是在量子与经典硬件交叉领域取得显著性能提升的典范"。

这一成果标志着Quantum Art通过其离子阱系统、多量子比特门和动态可重构多核架构扩展量子计算努力的又一里程碑。这些创新解决了扩展至数千乃至数百万量子比特的核心挑战，以提供实质性商业价值。此次整合推进了Quantum Art实现商业量子优势的愿景，为材料发现、物流和能源系统等领域解锁新能力。

Quantum Art Ltd.总部位于以色列Ness Ziona，专注于基于离子阱量子比特的可扩展量子计算机开发。### 您所需的洞见，无需杂音干扰

提交

感谢您的订阅。查看更多[VB新闻通讯请点击此处](/newsletters/)。

发生错误。