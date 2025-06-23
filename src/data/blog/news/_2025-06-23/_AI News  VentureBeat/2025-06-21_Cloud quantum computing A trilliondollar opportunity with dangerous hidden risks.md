---
title: 云端量子计算：暗藏危险隐患的万亿美元机遇
pubDatetime: 2025-06-21 20:00:00+00:00
tags:
- 量子计算
- 后量子加密
- 肖尔算法
- 格罗弗算法
- 加密敏捷性
- NIST标准
description: 量子计算将带来万亿级经济机遇，但会威胁现行加密体系，需提前升级标准并应对过渡挑战。
---

*[源信息](https://venturebeat.com/security/cloud-quantum-computing-a-trillion-dollar-opportunity-with-dangerous-hidden-risks/)经过deepseek翻译并总结*

## 摘要：

量子计算既是万亿级机遇，也带来重大风险，预计2025-2035年为全球经济贡献超1万亿美元，但可能破解现行加密算法。肖尔算法和格罗弗算法分别威胁非对称和对称加密，迫使行业升级标准。"现在窃取，将来解密"攻击策略要求实现"加密敏捷性"。NIST已制定后量子加密标准，但过渡面临实施周期长、性能影响、人才短缺等挑战。应对措施包括清查密码学资产、评估数据价值、制定迁移计划。量子计算机可能仍需数十年，但需未雨绸缪。

---

云计算量子计算：万亿美元机遇背后的潜在风险 | VentureBeat

嘉宾观点：云计算量子计算——蕴含危险隐性风险的万亿级机遇
==================================================================================

作者：[Julius Černiauskas, Oxylabs](https://venturebeat.com/author/julius-cerniauskas-oxylabs/ "Julius Černiauskas, Oxylabs的文章")  
2025年6月21日 下午1:00

---

量子计算（QC）既带来了革命性前景，也伴随着重大风险。[IBM](https://quantum.ibm.com/)、[Google](https://quantumai.google/cirq/google/concepts)、[微软](https://azure.microsoft.com/en-us/solutions/quantum-computing)和[亚马逊](https://aws.amazon.com/braket/)等科技巨头已推出商业量子云服务，而Quantinuum、PsiQuantum等专业公司迅速成为独角兽。专家预测2025-2035年间全球量子计算市场将为世界经济贡献超[1万亿美元](https://thequantuminsider.com/2024/09/13/the-quantum-insider-projects-1-trillion-in-economic-impact-from-quantum-computing-by-2035/)。但谁能断言收益一定大于风险？

一方面，这项尖端技术有望重塑药物研发、气候建模、AI乃至[人工通用智能](https://venturebeat.com/ai/from-disruption-to-reinvention-how-knowledge-workers-can-thrive-after-ai/)（AGI）开发领域；另一方面，它也将引发严峻的网络安全挑战——尽管能破解现有加密标准的成熟量子计算机仍需数年，但防范措施必须即刻启动。

### 量子计算威胁全景图

量子计算的主要安全威胁在于其可能破解现行"不可破解"的加密算法。毕马威[调查](https://kpmg.com/uk/en/insights/technology/quantum-and-cybersecurity.html)显示，约78%美国企业和60%加拿大企业预计量子计算机将在2030年前普及。更严峻的是，73%美国受访者和60%加拿大受访者认为网络罪犯利用量子计算攻破现行加密只是时间问题。

现代加密技术依赖经典计算机无法在合理时间内解决的数学难题。例如经典计算机分解RSA加密所用的大质数需约[300万亿年](https://www.quintessencelabs.com/blog/breaking-rsa-encryption-update-state-art)，但采用肖尔算法（1994年为量子计算开发的大数分解算法）的量子计算机可[指数级提速](https://www.quantamagazine.org/thirty-years-later-a-speed-boost-for-quantum-factoring-20231017/)。

格罗弗算法则彻底改变了对称加密格局，其将加密强度减半——AES-128的实际防护效果仅相当于64位系统，量子攻击下不堪一击。这迫使行业转向更强大的AES-256等标准以抵御[近期量子威胁](https://doverunner.com/blogs/everything-to-know-about-aes-256-encryption/)。

### "现在窃取，将来解密"攻击模式

最值得警惕的是["现在窃取，将来解密"](https://www.nist.gov/cybersecurity/what-post-quantum-cryptography)（HNDL）攻击策略：攻击者当前收集加密数据，待量子计算成熟后解密。这对医疗记录、财务数据、政府机密和军事情报等长期有效数据构成重大威胁。

鉴于HNDL攻击的潜在灾难性后果，全球关键系统运营方必须实现"加密敏捷性"——随时准备在新漏洞出现时快速更换加密算法。这种担忧也体现在美国《[量子计算领域促进领导力同时降低脆弱加密系统风险的国家安全备忘录](https://bidenwhitehouse.archives.gov/briefing-room/statements-releases/2022/05/04/national-security-memorandum-on-promoting-united-states-leadership-in-quantum-computing-while-mitigating-risks-to-vulnerable-cryptographic-systems/)》中。

### 威胁时间线预测

关于量子威胁时间表，专家意见分歧明显。MITRE[最新报告](https://www.mitre.org/sites/default/files/2025-01/PR-24-3812-Quantum-Computing-Quantifying-Current-State-Assess-Cybersecurity-Threats.pdf)基于量子体积（量子计算机质量比较指标）发展趋势，推测破解RSA-2048加密的量子计算机可能要到2055-2060年才会出现。

但部分专家持乐观态度，认为量子纠错和算法设计的突破可能将这一时间提前至2035年。例如研究者Jaime Sevilla与Jess Riedel在2020年末发布的[报告](https://arxiv.org/pdf/2009.05045)中，以90%置信度预测RSA-2048将在2060年前被破解。

尽管时间表尚未明确，但专家共识是：无论量子威胁何时降临，各组织必须立即行动。

### 量子机器学习——终极黑箱？

除现有组织的加密敏捷性缺陷外，安全研究者与未来学家还持续担忧[AI与QS的必然融合](https://www.lexology.com/library/detail.aspx?g=aa1944f4-73be-4eee-b534-be05f15b834d)。量子技术能以超高速处理复杂运算，为[AI发展](https://venturebeat.com/ai/rethinking-ai-deepseeks-playbook-shakes-up-the-high-spend-high-compute-paradigm/)提供强大助力。在实现AGI过程中，当前AI系统需要万亿级参数带来的算力瓶颈可能通过量子计算突破——但这种协同效应也将催生超出人类预测能力的情境。

无需AGI也能理解问题本质：假设量子计算融入机器学习（ML），我们将面临所谓的终极黑箱问题。深度神经网络（DNN）本就以难以解读的隐藏层著称，而量子ML将导致更复杂的局面。

问题根源在于量子计算的叠加、纠缠和干涉等特性，其信息处理方式没有经典对应物。当这些特性应用于ML算法时，产生的模型可能包含人类难以理解的推理过程，这对医疗、金融和自动驾驶等需要决策透明度的关键领域构成明显隐患。

### 后量子密码学足够安全吗？

为应对量子威胁，美国国家标准与技术研究院（NIST）2016年启动[后量子密码标准化](https://csrc.nist.gov/projects/post-quantum-cryptography/post-quantum-cryptography-standardization)项目，全球密码学家提交的69种候选算法经过严格评审后，NIST最终选定基于结构化格与哈希函数的抗量子算法，这些数学难题被认为能抵御经典与量子计算机的双重攻击。

2024年NIST发布详细的后量子[加密标准](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)后，科技巨头纷纷部署早期防护措施：苹果为iMessage推出抗量子攻击的PQ3协议；谷歌自2016年起在Chrome测试后量子算法并逐步推广至全线服务。

与此同时，微软在量子位纠错领域取得突破——今年初宣布创造被称为"拓扑量子位"的["新物质形态"](https://www.nytimes.com/2025/02/19/technology/microsoft-quantum-computing-topological-qubit.html)，有望将完全体量子计算机的诞生时间从数十年缩短至数年。### 关键转型挑战

然而，向抗量子密码学的过渡仍面临一系列必须直面的挑战：

* **实施时间框架**：美国官员预测，在所有系统中部署新加密标准可能需要[10至15年](https://www.moodys.com/research/Cyber-Risk-Global-Transition-to-post-quantum-data-encryption-will-be-Sector-In-Depth--PBC_1417045#5150d02c73f8b68222f3bfbcda4470fe)。对于卫星、车辆和ATM等难以触及的硬件设备尤为棘手。
* **性能影响**：抗量子加密通常需要[更大的密钥尺寸](https://www.ibm.com/think/insights/cios-must-prepare-their-organizations-today-for-quantum-safe-cryptography)和更复杂的数学运算，可能拖慢加解密流程。
* **[技术人才短缺](https://www.idemia.com/insights/key-obstacles-post-quantum-cryptography-pqc-adoption)**：要成功将抗量子密码学整合到现有系统中，组织需要精通经典与量子概念的资深IT专家。
* **漏洞发现**：即便最有前景的抗量子算法也可能存在隐藏缺陷，[正如我们所见证的](https://www.mdpi.com/2410-387X/8/2/15)NIST选定的CRYSTALS-Kyber算法案例。
* **[供应链问题](https://www.newscientist.com/article/2466718-why-quantum-computers-are-being-held-back-by-geopolitical-tussles/)**：低温冷却器、专用激光器等关键量子元件可能受地缘政治紧张和供应中断影响。

最后同样重要的是，在量子时代保持技术敏锐至关重要。当企业争相采用抗量子密码学时，需谨记：仅靠加密无法防范员工点击恶意链接、打开可疑邮件附件或滥用数据访问权限的行为。

典型案例是微软发现两款应用意外暴露了私钥——尽管底层数学逻辑坚实，人为失误仍导致防护失效。实施过程中的错误常会破坏理论上安全的系统。

---

### 备战量子未来

组织需采取以下关键步骤应对量子安全威胁：

* **开展密码学资产清查**——统计所有使用加密且可能受量子攻击的系统。
* **评估数据生命周期价值**——识别需要长期保护的信息，优先升级相关系统。
* **制定迁移时间表**——为全系统过渡到抗量子密码学设定合理计划。
* **配置专项资源**——为实施抗量子安全措施的巨额成本做好预算。
* **增强监控能力**——建立检测潜在HNDL攻击的系统。

Michele Mosca提出的[定理](https://utimaco.com/service/knowledge-base/post-quantum-cryptography/what-mosca-theorem)可助企业规划量子安全：若X（数据需保密时长）+Y（密码系统升级耗时）>Z（量子计算机破解当前加密的倒计时），则必须立即行动。

---

### 结语

我们正迈入伴随严峻网络安全挑战的量子计算时代，即便无法完全预判这些挑战何时显现，快速行动仍刻不容缓。距离能破解当前加密的量子计算机问世或许还需数十年，但无所作为的风险实在太大。

《外交政策》的Vivek Wadhwa[直言不讳](https://foreignpolicy.com/2022/08/21/quantum-computing-artificial-intelligence-ai-technology-regulation/)：“世界对AI（或伪装成AI的粗糙技术）的失控应成为深刻警示。还有一项结合AI后破坏力更强的技术：量子计算。”

为抢占先机，组织应开始部署抗量子密码学，警惕敌对量子项目并保障量子供应链安全。趁当前安全措施尚未被量子计算机彻底淘汰，现在就做好准备至关重要。

*Julius Černiauskas为[Oxylabs](https://oxylabs.io/)首席执行官。*### 你需要的高见，摒弃冗余杂音

提交

感谢订阅。查看更多[VB时事通讯请点击此处](/newsletters/)。

发生错误。