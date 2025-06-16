---
title: 云端崩溃：Replit和LlamaIndex因谷歌云身份验证中断而离线
pubDatetime: 2025-06-12 22:05:33+00:00
tags:
- 谷歌云服务中断
- Cloudflare服务中断
- AI工具影响
- 云服务依赖风险
- 企业冗余方案
- 中断原因调查
description: 2025年6月12日谷歌云与Cloudflare服务中断，波及ChatGPT等AI工具及多平台，暴露云服务依赖风险。
---

*[源信息](https://venturebeat.com/ai/cloud-collapse-replit-llamaindex-knocked-offline-by-google-cloud-identity-outage/)经过deepseek翻译并总结*

## 摘要：

2025年6月12日，谷歌云服务（GCP）和部分Cloudflare服务中断，影响ChatGPT、Claude等AI工具及Firebase、API网关等GCP服务。Cloudflare称少量服务受影响，AWS未波及。OpenAI、Anthropic出现登录及API问题，LlamaIndex、Replit、Spotify、Discord等服务也受牵连。此次中断暴露单一云服务依赖风险，企业需建立冗余方案，中断原因仍在调查中。

---

# 云服务崩溃：Replit和LlamaIndex因谷歌云身份验证中断而离线

作者：[Emilia David](https://venturebeat.com/author/emilia-david/)  
发表日期：2025年6月12日 下午3:05

---

在[OpenAI](http://www.openai.com)与[谷歌云](https://cloud.google.com/)宣布合作支持生成式AI平台增长需求的数日后，由于主要云服务提供商的中断，大量AI驱动的网络和工具陷入瘫痪。

谷歌云服务平台（GCP）和部分[Cloudflare](https://www.cloudflare.com/)服务于太平洋时间上午10点左右开始出现问题，影响了包括ChatGPT和Claude在内的多个AI开发工具及数据存储服务。

> 我们已知悉部分谷歌云服务中断，正在全力恢复服务。  
> 最新进展请查看状态仪表盘：<https://t.co/sT6UxoRK4R>  
> — Google Cloud (@googlecloud) [2025年6月12日](https://twitter.com/googlecloud/status/1933250172290511228)

受影响的GCP服务包括API网关、Agent Assist、云数据融合、联络中心AI平台、谷歌应用引擎、BigQuery、云存储、身份验证平台、语音转文字、文字转语音及Vertex AI搜索等工具。谷歌移动开发平台Firebase也[出现故障](https://status.firebase.google.com/)。

Cloudflare向VentureBeat表示仅"少量使用谷歌云的服务受影响，核心服务未中断"。尽管有用户反馈，[AWS](https://aws.amazon.com/)声明其服务[保持正常运行](https://health.aws.amazon.com/health/status)。

OpenAI确认部分用户登录问题已[解决](https://status.openai.com/incidents/01JXJPWKHTPB8Y3B6MBTCAE76X)，[Anthropic](http://www.anthropic.com)则报告Claude出现[API错误率升高](https://status.anthropic.com/)。

开发工具如[LlamaIndex](http://llamaindex.ai)的LlamaCloud、[Weights & Biases](https://wandb.ai/site/)、[Replit](https://replit.com/)等均受影响，[Character AI](https://character.ai/)也[发布通知](https://status.character.ai/)。Spotify和Discord等互联网服务同样出现问题。

## 云服务的脆弱性

此次中断凸显了单一云服务依赖的风险。谷歌云凭借大量开发者工具在[企业AI市场](https://venturebeat.com/ai/from-catch-up-to-catch-us-how-google-quietly-took-the-lead-in-enterprise-ai/)逐步领先，而Cloudflare正通过[与Hugging Face等合作](https://venturebeat.com/ai/cloudflare-makes-it-simple-to-deploy-ai-apps-with-hugging-face-launches-workers-ai-to-public/)加速AI应用部署。

据[路透社](https://www.reuters.com/business/retail-consumer/openai-taps-google-unprecedented-cloud-deal-despite-ai-rivalry-sources-say-2025-06-10/)报道，OpenAI与谷歌达成协议将使用谷歌云满足增长需求。但企业用户需建立冗余方案应对服务中断，去年7月CrowdStrike就曾引发[大规模Windows系统瘫痪](https://venturebeat.com/ai/crowdstrikes-it-outage-makes-it-clear-why-cyber-resilience-matters/)。

网络用户对此事件反应各异：

> "终于有时间处理积压的87个工具、14个模型和12个AI创业想法了"  
> — @gregisenberg

> "感谢GCP，我终于有理由退出下午的会议了！"  
> — Adam (@adambahm)

本次中断原因仍在调查中。