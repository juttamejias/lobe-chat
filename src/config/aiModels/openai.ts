import {
  AIChatModelCard,
  AIEmbeddingModelCard,
  AIRealtimeModelCard,
  AISTTModelCard,
  AITTSModelCard,
  AIText2ImageModelCard,
} from '@/types/aiModel';

export const openaiChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 200_000,
    description:
      'o3-mini 是我们最新的小型推理模型，在与 o1-mini 相同的成本和延迟目标下提供高智能。',
    displayName: 'OpenAI o3-mini',
    enabled: true,
    id: 'o3-mini',
    maxOutput: 100_000,
    pricing: {
      cachedInput: 0.55,
      input: 1.1,
      output: 4.4,
    },
    releasedAt: '2025-01-31',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 128_000,
    description:
      'o1-mini是一款针对编程、数学和科学应用场景而设计的快速、经济高效的推理模型。该模型具有128K上下文和2023年10月的知识截止日期。',
    displayName: 'OpenAI o1-mini',
    enabled: true,
    id: 'o1-mini',
    maxOutput: 65_536,
    pricing: {
      cachedInput: 0.55,
      input: 1.1,
      output: 4.4,
    },
    releasedAt: '2024-09-12',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'o1是OpenAI新的推理模型，支持图文输入并输出文本，适用于需要广泛通用知识的复杂任务。该模型具有200K上下文和2023年10月的知识截止日期。',
    displayName: 'OpenAI o1',
    enabled: true,
    id: 'o1',
    maxOutput: 100_000,
    pricing: {
      cachedInput: 7.5,
      input: 15,
      output: 60,
    },
    releasedAt: '2024-12-17',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 128_000,
    description:
      'o1是OpenAI新的推理模型，适用于需要广泛通用知识的复杂任务。该模型具有128K上下文和2023年10月的知识截止日期。',
    displayName: 'OpenAI o1-preview',
    enabled: true,
    id: 'o1-preview',
    maxOutput: 32_768,
    pricing: {
      input: 15,
      output: 60,
    },
    releasedAt: '2024-09-12',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'GPT-4.5 的研究预览版，它是我们迄今为止最大、最强大的 GPT 模型。它拥有广泛的世界知识，并能更好地理解用户意图，使其在创造性任务和自主规划方面表现出色。GPT-4.5 可接受文本和图像输入，并生成文本输出（包括结构化输出）。支持关键的开发者功能，如函数调用、批量 API 和流式输出。在需要创造性、开放式思考和对话的任务（如写作、学习或探索新想法）中，GPT-4.5 表现尤为出色。知识截止日期为 2023 年 10 月。',
    displayName: 'GPT-4.5 Preview',
    enabled: true,
    id: 'gpt-4.5-preview',
    maxOutput: 16_384,
    pricing: {
      cachedInput: 37.5,
      input: 75,
      output: 150,
    },
    releasedAt: '2025-02-27',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'GPT-4o mini是OpenAI在GPT-4 Omni之后推出的最新模型，支持图文输入并输出文本。作为他们最先进的小型模型，它比其他近期的前沿模型便宜很多，并且比GPT-3.5 Turbo便宜超过60%。它保持了最先进的智能，同时具有显著的性价比。GPT-4o mini在MMLU测试中获得了 82% 的得分，目前在聊天偏好上排名高于 GPT-4。',
    displayName: 'GPT-4o mini',
    enabled: true,
    id: 'gpt-4o-mini',
    maxOutput: 16_384,
    pricing: {
      cachedInput: 0.075,
      input: 0.15,
      output: 0.6,
    },
    releasedAt: '2024-07-18',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
    displayName: 'GPT-4o 1120',
    id: 'gpt-4o-2024-11-20',
    pricing: {
      input: 2.5,
      output: 10,
    },
    releasedAt: '2024-11-20',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
    displayName: 'GPT-4o',
    enabled: true,
    id: 'gpt-4o',
    pricing: {
      cachedInput: 1.25,
      input: 2.5,
      output: 10,
    },
    releasedAt: '2024-05-13',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
    displayName: 'GPT-4o 0806',
    id: 'gpt-4o-2024-08-06',
    pricing: {
      input: 2.5,
      output: 10,
    },
    releasedAt: '2024-08-06',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
    displayName: 'GPT-4o 0513',
    id: 'gpt-4o-2024-05-13',
    pricing: {
      input: 5,
      output: 15,
    },
    releasedAt: '2024-05-13',
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description: 'GPT-4o Audio 模型，支持音频输入输出',
    displayName: 'GPT-4o Audio',
    id: 'gpt-4o-audio-preview',
    maxOutput: 16_384,
    pricing: {
      input: 2.5,
      output: 10,
    },
    releasedAt: '2024-10-01',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
    displayName: 'ChatGPT-4o',
    enabled: true,
    id: 'chatgpt-4o-latest',
    pricing: {
      input: 5,
      output: 15,
    },
    releasedAt: '2024-08-14',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
    displayName: 'GPT-4 Turbo',
    id: 'gpt-4-turbo',
    pricing: {
      input: 10,
      output: 30,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
    displayName: 'GPT-4 Turbo Vision 0409',
    id: 'gpt-4-turbo-2024-04-09',
    pricing: {
      input: 10,
      output: 30,
    },
    releasedAt: '2024-04-09',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
    displayName: 'GPT-4 Turbo Preview',
    id: 'gpt-4-turbo-preview',
    pricing: {
      input: 10,
      output: 30,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
    displayName: 'GPT-4 Turbo Preview 0125',
    id: 'gpt-4-0125-preview',
    pricing: {
      input: 10,
      output: 30,
    },
    releasedAt: '2024-01-25',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
    displayName: 'GPT-4 Turbo Preview 1106',
    id: 'gpt-4-1106-preview',
    pricing: {
      input: 10,
      output: 30,
    },
    releasedAt: '2023-11-06',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 8192,
    description:
      'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
    displayName: 'GPT-4',
    id: 'gpt-4',
    pricing: {
      input: 30,
      output: 60,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 8192,
    description:
      'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
    displayName: 'GPT-4 0613',
    id: 'gpt-4-0613',
    pricing: {
      input: 30,
      output: 60,
    },
    releasedAt: '2023-06-13',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,

    description:
      'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
    displayName: 'GPT-4 32K',
    id: 'gpt-4-32k',
    // Will be discontinued on June 6, 2025
    legacy: true,
    pricing: {
      input: 60,
      output: 120,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description:
      'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
    displayName: 'GPT-4 32K 0613',
    id: 'gpt-4-32k-0613',
    pricing: {
      input: 60,
      output: 120,
    },
    releasedAt: '2023-06-13',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 16_384,
    description:
      'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
    displayName: 'GPT-3.5 Turbo',
    id: 'gpt-3.5-turbo',
    pricing: {
      input: 0.5,
      output: 1.5,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 16_384,
    description:
      'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
    displayName: 'GPT-3.5 Turbo 0125',
    id: 'gpt-3.5-turbo-0125',
    pricing: {
      input: 0.5,
      output: 1.5,
    },
    releasedAt: '2024-01-25',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 16_384,
    description:
      'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
    displayName: 'GPT-3.5 Turbo 1106',
    id: 'gpt-3.5-turbo-1106',
    pricing: {
      input: 1,
      output: 2,
    },
    releasedAt: '2023-11-06',
    type: 'chat',
  },
  {
    contextWindowTokens: 4096,
    description:
      'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
    displayName: 'GPT-3.5 Turbo Instruct',
    id: 'gpt-3.5-turbo-instruct',
    pricing: {
      input: 1.5,
      output: 2,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.7 Sonnet 是 Anthropic 迄今为止最智能的模型，也是市场上首个混合推理模型。Claude 3.7 Sonnet 可以产生近乎即时的响应或延长的逐步思考，用户可以清晰地看到这些过程。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: 'Claude 3.7 Sonnet 0219',
    enabled: true,
    id: 'claude-3-7-sonnet-20250219',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0.3,
      input: 3,
      output: 15,
      writeCacheInput: 3.75,
    },
    releasedAt: '2025-02-24',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.7 Sonnet 是 Anthropic 迄今为止最智能的模型，也是市场上首个混合推理模型。Claude 3.7 Sonnet 可以产生近乎即时的响应或延长的逐步思考，用户可以清晰地看到这些过程。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: 'Claude 3.7 Sonnet Extended thinking',
    enabled: true,
    id: 'claude-3-7-sonnet-20250219-thinking',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0.3,
      input: 3,
      output: 15,
      writeCacheInput: 3.75,
    },
    releasedAt: '2025-02-24',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.7 Sonnet 是 Anthropic 迄今为止最智能的模型，也是市场上首个混合推理模型。Claude 3.7 Sonnet 可以产生近乎即时的响应或延长的逐步思考，用户可以清晰地看到这些过程。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: '官Claude 3.7 Sonnet 0219',
    enabled: true,
    id: 'claude-3-7-sonnet-guan-20250219',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0.3,
      input: 3,
      output: 15,
      writeCacheInput: 3.75,
    },
    releasedAt: '2025-02-24',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.7 Sonnet 是 Anthropic 迄今为止最智能的模型，也是市场上首个混合推理模型。Claude 3.7 Sonnet 可以产生近乎即时的响应或延长的逐步思考，用户可以清晰地看到这些过程。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: '官Claude 3.7 Sonnet Extended thinking',
    enabled: true,
    id: 'claude-3-7-sonnet-guan-20250219-thinking',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0.3,
      input: 3,
      output: 15,
      writeCacheInput: 3.75,
    },
    releasedAt: '2025-02-24',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.5 Haiku 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.5 Haiku 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
    displayName: '官Claude 3.5 Haiku',
    enabled: true,
    id: 'claude-3-5-haiku-guan-20241022',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0.1,
      input: 1,
      output: 5,
      writeCacheInput: 1.25,
    },
    releasedAt: '2024-11-05',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: '官Claude 3.5 Sonnet',
    enabled: true,
    id: 'claude-3-5-sonnet-guan-20241022',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0.3,
      input: 3,
      output: 15,
      writeCacheInput: 3.75,
    },
    releasedAt: '2024-10-22',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: '官Claude 3.5 Sonnet 0620',
    id: 'claude-3-5-sonnet-guan-20240620',
    maxOutput: 8192,
    pricing: {
      cachedInput: 0.3,
      input: 3,
      output: 15,
      writeCacheInput: 3.75,
    },
    releasedAt: '2024-06-20',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3 Haiku 是 Anthropic 的最快且最紧凑的模型，旨在实现近乎即时的响应。它具有快速且准确的定向性能。',
    displayName: '官Claude 3 Haiku',
    id: 'claude-3-haiku-guan-20240307',
    maxOutput: 4096,
    pricing: {
      input: 0.25,
      output: 1.25,
    },
    releasedAt: '2024-03-07',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3 Sonnet 在智能和速度方面为企业工作负载提供了理想的平衡。它以更低的价格提供最大效用，可靠且适合大规模部署。',
    displayName: '官Claude 3 Sonnet',
    id: 'claude-3-sonnet-guan-20240229',
    maxOutput: 4096,
    pricing: {
      input: 3,
      output: 15,
    },
    releasedAt: '2024-02-29',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3 Opus 是 Anthropic 用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: '官Claude 3 Opus',
    enabled: true,
    id: 'claude-3-opus-guan-20240229',
    maxOutput: 4096,
    pricing: {
      input: 15,
      output: 75,
    },
    releasedAt: '2024-02-29',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-R1 是一款强化学习（RL）驱动的推理模型，解决了模型中的重复性和可读性问题。在 RL 之前，DeepSeek-R1 引入了冷启动数据，进一步优化了推理性能。它在数学、代码和推理任务中与 OpenAI-o1 表现相当，并且通过精心设计的训练方法，提升了整体效果。',
    displayName: 'DeepSeek R1(SL)',
    enabled: true,
    id: 'deepseek-ai/DeepSeek-R1',
    pricing: {
      currency: 'CNY',
      input: 4,
      output: 16,
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-V3 是一款拥有 6710 亿参数的混合专家（MoE）语言模型，采用多头潜在注意力（MLA）和 DeepSeekMoE 架构，结合无辅助损失的负载平衡策略，优化推理和训练效率。通过在 14.8 万亿高质量tokens上预训练，并进行监督微调和强化学习，DeepSeek-V3 在性能上超越其他开源模型，接近领先闭源模型。',
    displayName: 'DeepSeek V3(SL)',
    enabled: true,
    id: 'deepseek-ai/DeepSeek-V3',
    pricing: { // 2.9 涨价
      currency: 'CNY',
      input: 1,
      output: 2,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-R1 是一款强化学习（RL）驱动的推理模型，解决了模型中的重复性和可读性问题。在 RL 之前，DeepSeek-R1 引入了冷启动数据，进一步优化了推理性能。它在数学、代码和推理任务中与 OpenAI-o1 表现相当，并且通过精心设计的训练方法，提升了整体效果。',
    displayName: 'DeepSeek R1(NV)',
    enabled: true,
    id: 'deepseek-ai/deepseek-r1-nv',
    pricing: {
      currency: 'CNY',
      input: 4,
      output: 16,
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-R1 是一款强化学习（RL）驱动的推理模型，解决了模型中的重复性和可读性问题。在 RL 之前，DeepSeek-R1 引入了冷启动数据，进一步优化了推理性能。它在数学、代码和推理任务中与 OpenAI-o1 表现相当，并且通过精心设计的训练方法，提升了整体效果。',
    displayName: 'DeepSeek R1(AZ)',
    enabled: true,
    id: 'deepseek-reasoner-az',
    pricing: {
      currency: 'CNY',
      input: 4,
      output: 16,
    },
    type: 'chat',
  },
];

export const openaiEmbeddingModels: AIEmbeddingModelCard[] = [
  {
    contextWindowTokens: 8192,
    description: '最强大的向量化模型，适用于英文和非英文任务',
    displayName: 'Text Embedding 3 Large',
    id: 'text-embedding-3-large',
    maxDimension: 3072,
    pricing: {
      currency: 'USD',
      input: 0.13,
    },
    releasedAt: '2024-01-25',
    type: 'embedding',
  },
  {
    contextWindowTokens: 8192,
    description: '高效且经济的新一代 Embedding 模型，适用于知识检索、RAG 应用等场景',
    displayName: 'Text Embedding 3 Small',
    id: 'text-embedding-3-small',
    maxDimension: 1536,
    pricing: {
      currency: 'USD',
      input: 0.02,
    },
    releasedAt: '2024-01-25',
    type: 'embedding',
  },
];

// 语音合成模型
export const openaiTTSModels: AITTSModelCard[] = [
  {
    description: '最新的文本转语音模型，针对实时场景优化速度',
    displayName: 'TTS-1',
    id: 'tts-1',
    pricing: {
      input: 15,
    },
    type: 'tts',
  },
  {
    description: '最新的文本转语音模型，针对质量进行优化',
    displayName: 'TTS-1 HD',
    id: 'tts-1-hd',
    pricing: {
      input: 30,
    },
    type: 'tts',
  },
];

// 语音识别模型
export const openaiSTTModels: AISTTModelCard[] = [
  {
    description: '通用语音识别模型，支持多语言语音识别、语音翻译和语言识别',
    displayName: 'Whisper',
    id: 'whisper-1',
    pricing: {
      input: 0.006, // per minute
    },
    type: 'stt',
  },
];

// 图像生成模型
export const openaiImageModels: AIText2ImageModelCard[] = [
  {
    description:
      '最新的 DALL·E 模型，于2023年11月发布。支持更真实、准确的图像生成，具有更强的细节表现力',
    displayName: 'DALL·E 3',
    id: 'dall-e-3',
    pricing: {
      hd: 0.08,
      standard: 0.04,
    },
    resolutions: ['1024x1024', '1024x1792', '1792x1024'],
    type: 'image',
  },
  {
    description: '第二代 DALL·E 模型，支持更真实、准确的图像生成，分辨率是第一代的4倍',
    displayName: 'DALL·E 2',
    id: 'dall-e-2',
    pricing: {
      input: 0.02, // $0.020 per image (1024×1024)
    },
    resolutions: ['256x256', '512x512', '1024x1024'],
    type: 'image',
  },
];

// GPT-4o 和 GPT-4o-mini 实时模型
export const openaiRealtimeModels: AIRealtimeModelCard[] = [
  {
    contextWindowTokens: 128_000,
    description: 'GPT-4o 实时版本，支持音频和文本实时输入输出',
    displayName: 'GPT-4o Realtime',
    id: 'gpt-4o-realtime-preview',
    maxOutput: 4096,
    pricing: {
      audioInput: 100,
      audioOutput: 200,
      cachedAudioInput: 20,
      cachedInput: 2.5,
      input: 5,
      output: 20,
    },
    releasedAt: '2024-10-01',
    type: 'realtime',
  },
  {
    contextWindowTokens: 128_000,
    description: 'GPT-4o 实时版本，支持音频和文本实时输入输出',
    displayName: 'GPT-4o Realtime 10-01',
    id: 'gpt-4o-realtime-preview-2024-10-01',
    maxOutput: 4096,
    pricing: {
      audioInput: 100,
      audioOutput: 200,
      cachedAudioInput: 20,
      cachedInput: 2.5,
      input: 5,
      output: 20,
    },
    releasedAt: '2024-10-01',
    type: 'realtime',
  },
  {
    contextWindowTokens: 128_000,
    description: 'GPT-4o 实时版本，支持音频和文本实时输入输出',
    displayName: 'GPT-4o Realtime 12-17',
    id: 'gpt-4o-realtime-preview-2024-12-17',
    maxOutput: 4096,
    pricing: {
      audioInput: 40,
      audioOutput: 80,
      cachedAudioInput: 2.5,
      cachedInput: 2.5,
      input: 5,
      output: 20,
    },
    releasedAt: '2024-12-17',
    type: 'realtime',
  },
  {
    contextWindowTokens: 128_000,
    description: 'GPT-4o-mini 实时版本，支持音频和文本实时输入输出',
    displayName: 'GPT-4o Mini Realtime',
    id: 'gpt-4o-mini-realtime-preview',
    maxOutput: 4096,
    pricing: {
      audioInput: 10,
      audioOutput: 20,
      cachedAudioInput: 0.3,
      cachedInput: 0.3,
      input: 0.6,
      output: 2.4,
    },
    releasedAt: '2024-12-17',
    type: 'realtime',
  },
];

export const allModels = [
  ...openaiChatModels,
  ...openaiEmbeddingModels,
  ...openaiTTSModels,
  ...openaiSTTModels,
  ...openaiImageModels,
  ...openaiRealtimeModels,
];

export default allModels;
