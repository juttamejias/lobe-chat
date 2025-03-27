import { ModelProviderCard } from '@/types/llm';

// ref: https://platform.openai.com/docs/deprecations
const OpenAI: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 128_000,
      description:
        'o1-mini是一款针对编程、数学和科学应用场景而设计的快速、经济高效的推理模型。该模型具有128K上下文和2023年10月的知识截止日期。',
      displayName: 'OpenAI o1-mini',
      enabled: true,
      id: 'o1-mini',
      maxOutput: 65_536,
      pricing: {
        input: 3,
        output: 12,
      },
      releasedAt: '2024-09-12',
    },
    {
      contextWindowTokens: 200_000,
      description:
        'o1是OpenAI新的推理模型，支持图文输入并输出文本，适用于需要广泛通用知识的复杂任务。该模型具有200K上下文和2023年10月的知识截止日期。',
      displayName: 'OpenAI o1',
      enabled: true,
      id: 'o1-2024-12-17',
      maxOutput: 100_000,
      pricing: {
        input: 15,
        output: 60,
      },
      releasedAt: '2024-12-17',
      vision: true,
    },
    {
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
    },
    {
      contextWindowTokens: 128_000,
      description:
        'GPT-4o mini是OpenAI在GPT-4 Omni之后推出的最新模型，支持图文输入并输出文本。作为他们最先进的小型模型，它比其他近期的前沿模型便宜很多，并且比GPT-3.5 Turbo便宜超过60%。它保持了最先进的智能，同时具有显著的性价比。GPT-4o mini在MMLU测试中获得了 82% 的得分，目前在聊天偏好上排名高于 GPT-4。',
      displayName: 'GPT-4o mini',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o-mini',
      maxOutput: 16_385,
      pricing: {
        input: 0.15,
        output: 0.6,
      },
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'GPT-4o 1120',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o-2024-11-20',
      pricing: {
        input: 2.5,
        output: 10,
      },
      releasedAt: '2024-11-20',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'GPT-4o',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o',
      pricing: {
        input: 2.5,
        output: 10,
      },
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'GPT-4o 0806',
      functionCall: true,
      id: 'gpt-4o-2024-08-06',
      pricing: {
        input: 2.5,
        output: 10,
      },
      releasedAt: '2024-08-06',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'GPT-4o 0513',
      functionCall: true,
      id: 'gpt-4o-2024-05-13',
      pricing: {
        input: 5,
        output: 15,
      },
      releasedAt: '2024-05-13',
      vision: true,
    },
    {
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
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo',
      functionCall: true,
      id: 'gpt-4-turbo',
      pricing: {
        input: 10,
        output: 30,
      },
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo Vision 0409',
      functionCall: true,
      id: 'gpt-4-turbo-2024-04-09',
      pricing: {
        input: 10,
        output: 30,
      },
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo Preview',
      functionCall: true,
      id: 'gpt-4-turbo-preview',
      pricing: {
        input: 10,
        output: 30,
      },
    },
    {
      contextWindowTokens: 128_000,
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo Preview 0125',
      functionCall: true,
      id: 'gpt-4-0125-preview',
      pricing: {
        input: 10,
        output: 30,
      },
    },
    {
      contextWindowTokens: 128_000,
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo Preview 1106',
      functionCall: true,
      id: 'gpt-4-1106-preview',
      pricing: {
        input: 10,
        output: 30,
      },
    },
    {
      contextWindowTokens: 8192,
      description:
        'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
      displayName: 'GPT-4',
      functionCall: true,
      id: 'gpt-4',
      pricing: {
        input: 30,
        output: 60,
      },
    },
    {
      contextWindowTokens: 8192,
      description:
        'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
      displayName: 'GPT-4 0613',
      functionCall: true,
      id: 'gpt-4-0613',
      pricing: {
        input: 30,
        output: 60,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
      // Will be discontinued on June 6, 2025
      displayName: 'GPT-4 32K',
      functionCall: true,
      id: 'gpt-4-32k',
      pricing: {
        input: 60,
        output: 120,
      },
    },
    {
      contextWindowTokens: 32_768,
      // Will be discontinued on June 6, 2025
      description:
        'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
      displayName: 'GPT-4 32K 0613',
      functionCall: true,
      id: 'gpt-4-32k-0613',
      pricing: {
        input: 60,
        output: 120,
      },
    },
    {
      contextWindowTokens: 16_385,
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo',
      functionCall: true,
      id: 'gpt-3.5-turbo',
      pricing: {
        input: 0.5,
        output: 1.5,
      },
    },
    {
      contextWindowTokens: 16_385,
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo 0125',
      functionCall: true,
      id: 'gpt-3.5-turbo-0125',
      pricing: {
        input: 0.5,
        output: 1.5,
      },
    },
    {
      contextWindowTokens: 16_385,
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo 1106',
      functionCall: true,
      id: 'gpt-3.5-turbo-1106',
      pricing: {
        input: 1,
        output: 2,
      },
    },
    {
      contextWindowTokens: 4096,
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo 0301',
      functionCall: true,
      id: 'gpt-3.5-turbo-0301',
      pricing: {
        input: 0.5,
        output: 1.5,
      },
    },
    {
      contextWindowTokens: 4096,
      description:
        'GPT-3.5 Turbo 是 OpenAI 的一款基础模型，结合了高效性和经济性，广泛用于文本生成、理解和分析，专为指导性提示进行调整，去除了与聊天相关的优化。',
      displayName: 'GPT-3.5 Turbo 0613',
      // Will be discontinued on September 13, 2024
      id: 'gpt-3.5-turbo-0613',
      legacy: true,
      pricing: {
        input: 1.5,
        output: 2,
      },
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
    },
    {
      contextWindowTokens: 16_385,
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125', // Will be discontinued on September 13, 2024

      displayName: 'GPT-3.5 Turbo 16K',
      id: 'gpt-3.5-turbo-16k',
      legacy: true,
      pricing: {
        input: 3,
        output: 4,
      },
    },
    {
      contextWindowTokens: 16_385,
      description:
        'GPT-3.5 Turbo 是 OpenAI 的一款基础模型，结合了高效性和经济性，广泛用于文本生成、理解和分析，专为指导性提示进行调整，去除了与聊天相关的优化。', // Will be discontinued on September 13, 2024
      id: 'gpt-3.5-turbo-16k-0613',
      legacy: true,
      pricing: {
        input: 3,
        output: 4,
      },
    },
    {
      contextWindowTokens: 128_000,
      description: 'Currently points to gpt-4o-mini-2024-07-18',
      displayName: 'GPT-4o mini 2024-07-18',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o-mini-2024-07-18',
      maxOutput: 16_385,
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description: 'Currently points to gpt-4o-2024-05-13',
      displayName: 'GPT-4o 2024-05-13',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o-2024-05-13',
      vision: true,
    },
    // deepseek
    {
      contextWindowTokens: 65_536,
      description:
        '最新模型 DeepSeek-V3 多项评测成绩超越 Qwen2.5-72B 和 Llama-3.1-405B 等开源模型，性能对齐领军闭源模型 GPT-4o 与 Claude-3.5-Sonnet。',
      displayName: 'DeepSeek V3',
      enabled: true,
      functionCall: true,
      id: 'deepseek-chat',
      pricing: { // 2025.2.9 之后涨价
        cachedInput: 0.1,
        currency: 'CNY',
        input: 1,
        output: 2,
      },
      releasedAt: '2024-12-26',
    },
    {
      contextWindowTokens: 65_536,
      description:
        'DeepSeek 推出的推理模型。在输出最终回答之前，模型会先输出一段思维链内容，以提升最终答案的准确性。',
      displayName: 'DeepSeek R1',
      enabled: true,
      id: 'deepseek-reasoner',
      pricing: {
        cachedInput: 1,
        currency: 'CNY',
        input: 4,
        output: 16,
      },
      releasedAt: '2025-01-20',
    },
    // claude
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.7 sonnet 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.7 Sonnet 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
      displayName: 'Claude 3.7 Sonnet',
      enabled: true,
      functionCall: true,
      id: 'claude-3-7-sonnet-20250219',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.1,
        input: 1,
        output: 5,
        writeCacheInput: 1.25,
      },
      releasedAt: '2025-02-24',
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.7 sonnet Extended thinking 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.7 Sonnet 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
      displayName: 'Claude 3.7 Sonnet Extended thinking',
      enabled: true,
      functionCall: true,
      id: 'claude-3-7-sonnet-20250219-thinking',
      maxOutput: 64_000,
      pricing: {
        cachedInput: 0.1,
        input: 1,
        output: 5,
        writeCacheInput: 1.25,
      },
      releasedAt: '2025-02-24',
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.5 Haiku 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.5 Haiku 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
      displayName: 'Claude 3.5 Haiku 1022',
      enabled: true,
      functionCall: true,
      id: 'claude-3-5-haiku-20241022',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.1,
        input: 1,
        output: 5,
        writeCacheInput: 1.25,
      },
      releasedAt: '2024-11-05',
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
      displayName: 'Claude 3.5 Sonnet 1022',
      enabled: true,
      functionCall: true,
      id: 'claude-3-5-sonnet-20241022',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.3,
        input: 3,
        output: 15,
        writeCacheInput: 3.75,
      },
      releasedAt: '2024-10-22',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
      displayName: 'Claude 3.5 Sonnet 0620',
      functionCall: true,
      id: 'claude-3-5-sonnet-20240620',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.3,
        input: 3,
        output: 15,
        writeCacheInput: 3.75,
      },
      releasedAt: '2024-06-20',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Ideal balance of intelligence and speed for enterprise workloads. Maximum utility at a lower price, dependable, balanced for scaled deployments',
      displayName: 'Claude 3 Sonnet 20240229',
      enabled: true,
      functionCall: true,
      id: 'claude-3-sonnet-20240229',
      maxOutput: 4096,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Most powerful model for highly complex tasks. Top-level performance, intelligence, fluency, and understanding',
      displayName: 'Claude 3 Opus 20240229',
      enabled: true,
      functionCall: true,
      id: 'claude-3-opus-20240229',
      maxOutput: 4096,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Fastest and most compact model for near-instant responsiveness. Quick and accurate targeted performance',
      displayName: 'Claude 3 Haiku 20240307',
      enabled: true,
      functionCall: true,
      id: 'claude-3-haiku-20240307',
      maxOutput: 4096,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.7 sonnet 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.7 Sonnet 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
      displayName: '官Claude 3.7 Sonnet',
      enabled: true,
      functionCall: true,
      id: 'claude-3-7-sonnet-guan-20250219',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.1,
        input: 1,
        output: 5,
        writeCacheInput: 1.25,
      },
      releasedAt: '2025-02-24',
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.7 sonnet Extended thinking 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.7 Sonnet 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
      displayName: '官Claude 3.7 Sonnet Extended thinking',
      enabled: true,
      functionCall: true,
      id: 'claude-3-7-sonnet-guan-20250219-thinking',
      maxOutput: 64_000,
      pricing: {
        cachedInput: 0.1,
        input: 1,
        output: 5,
        writeCacheInput: 1.25,
      },
      releasedAt: '2025-02-24',
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.5 Haiku 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.5 Haiku 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
      displayName: '官Claude 3.5 Haiku 1022',
      enabled: true,
      functionCall: true,
      id: 'claude-3-5-haiku-guan-20241022',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.1,
        input: 1,
        output: 5,
        writeCacheInput: 1.25,
      },
      releasedAt: '2024-11-05',
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
      displayName: '官Claude 3.5 Sonnet 1022',
      enabled: true,
      functionCall: true,
      id: 'claude-3-5-sonnet-guan-20241022',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.3,
        input: 3,
        output: 15,
        writeCacheInput: 3.75,
      },
      releasedAt: '2024-10-22',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
      displayName: '官Claude 3.5 Sonnet 0620',
      functionCall: true,
      id: 'claude-3-5-sonnet-guan-20240620',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.3,
        input: 3,
        output: 15,
        writeCacheInput: 3.75,
      },
      releasedAt: '2024-06-20',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Ideal balance of intelligence and speed for enterprise workloads. Maximum utility at a lower price, dependable, balanced for scaled deployments',
      displayName: '官Claude 3 Sonnet 20240229',
      enabled: true,
      functionCall: true,
      id: 'claude-3-sonnet-guan-20240229',
      maxOutput: 4096,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Most powerful model for highly complex tasks. Top-level performance, intelligence, fluency, and understanding',
      displayName: '官Claude 3 Opus 20240229',
      enabled: true,
      functionCall: true,
      id: 'claude-3-opus-guan-20240229',
      maxOutput: 4096,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'Fastest and most compact model for near-instant responsiveness. Quick and accurate targeted performance',
      displayName: '官Claude 3 Haiku 20240307',
      enabled: true,
      functionCall: true,
      id: 'claude-3-haiku-guan-20240307',
      maxOutput: 4096,
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      displayName: 'Claude 2.1',
      enabled: false,
      id: 'claude-2.1',
      maxOutput: 4096,
    },
    {
      contextWindowTokens: 100_000,
      displayName: 'Claude 2.0',
      enabled: false,
      id: 'claude-2.0',
      maxOutput: 4096,
    },
    {
      contextWindowTokens: 100_000,
      displayName: 'Claude Instant 1.2',
      enabled: false,
      id: 'claude-instant-1.2',
      maxOutput: 4096,
    },
    {
      contextWindowTokens: 8192,
      description: '通义千问超大规模语言模型，支持中文、英文等不同语言输入。',
      displayName: 'Qwen Turbo',
      enabled: true,
      id: 'qwen-turbo',
    },
    {
      contextWindowTokens: 30_720,
      description: '通义千问超大规模语言模型增强版，支持中文、英文等不同语言输入。',
      displayName: 'Qwen Plus',
      enabled: true,
      id: 'qwen-plus',
    },
    {
      contextWindowTokens: 8192,
      description:
        '通义千问千亿级别超大规模语言模型，支持中文、英文等不同语言输入，当前通义千问2.5产品版本背后的API模型。',
      displayName: 'Qwen Max',
      enabled: true,
      id: 'qwen-max',
    },
    // command
    {
      contextWindowTokens: 128_000,
      description:
        'An instruction-following conversational model that performs language tasks at a higher quality, more reliably, and with a longer context than previous models. Best suited for complex RAG workflows and multi-step tool use.',
      displayName: 'Command R+',
      enabled: true,
      functionCall: true,
      id: 'command-r-plus',
      maxOutput: 4096,
      vision: false,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'An instruction-following conversational model that performs language tasks at a higher quality, more reliably, and with a longer context than previous models. It can be used for complex workflows like code generation, retrieval augmented generation (RAG), tool use, and agents.',
      displayName: 'Command R',
      enabled: true,
      functionCall: true,
      id: 'command-r',
      maxOutput: 4096,
      vision: false,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'An instruction-following conversational model that performs language tasks at a higher quality, more reliably, and with a longer context than previous models. Best suited for complex RAG workflows and multi-step tool use.',
      displayName: 'Command R+ 08-2024',
      enabled: true,
      functionCall: true,
      id: 'command-r-plus-08-2024',
      maxOutput: 4096,
      vision: false,
    },
    {
      contextWindowTokens: 128_000,
      description:
        'An instruction-following conversational model that performs language tasks at a higher quality, more reliably, and with a longer context than previous models. It can be used for complex workflows like code generation, retrieval augmented generation (RAG), tool use, and agents.',
      displayName: 'Command R 08-2024',
      enabled: true,
      functionCall: true,
      id: 'command-r-08-2024',
      maxOutput: 4096,
      vision: false,
    },
    // cloudflare
    {
      contextWindowTokens: 16_384,
      displayName: 'deepseek-coder-6.7b-instruct-awq',
      enabled: true,
      id: '@hf/thebloke/deepseek-coder-6.7b-instruct-awq',
    },
    {
      contextWindowTokens: 2048,
      displayName: 'gemma-7b-it',
      enabled: true,
      id: '@hf/google/gemma-7b-it',
    },
    {
      contextWindowTokens: 4096,
      displayName: 'hermes-2-pro-mistral-7b',

      enabled: true,
      // functionCall: true,
      id: '@hf/nousresearch/hermes-2-pro-mistral-7b',
    },
    {
      contextWindowTokens: 8192,
      displayName: 'llama-3-8b-instruct-awq',
      id: '@cf/meta/llama-3-8b-instruct-awq',
    },
    {
      contextWindowTokens: 4096,
      displayName: 'mistral-7b-instruct-v0.2',
      id: '@hf/mistral/mistral-7b-instruct-v0.2',
    },
    {
      contextWindowTokens: 32_768,
      displayName: 'neural-chat-7b-v3-1-awq',
      enabled: true,
      id: '@hf/thebloke/neural-chat-7b-v3-1-awq',
    },
    {
      contextWindowTokens: 8192,
      displayName: 'openchat-3.5-0106',
      id: '@cf/openchat/openchat-3.5-0106',
    },
    {
      contextWindowTokens: 32_768,
      displayName: 'openhermes-2.5-mistral-7b-awq',
      enabled: true,
      id: '@hf/thebloke/openhermes-2.5-mistral-7b-awq',
    },
    {
      contextWindowTokens: 32_768,
      displayName: 'qwen1.5-14b-chat-awq',
      enabled: true,
      id: '@cf/qwen/qwen1.5-14b-chat-awq',
    },
    {
      contextWindowTokens: 4096,
      displayName: 'starling-lm-7b-beta',
      enabled: true,
      id: '@hf/nexusflow/starling-lm-7b-beta',
    },
    {
      contextWindowTokens: 32_768,
      displayName: 'zephyr-7b-beta-awq',
      enabled: true,
      id: '@hf/thebloke/zephyr-7b-beta-awq',
    },
    {
      displayName: 'meta-llama-3-8b-instruct',
      enabled: true,
      functionCall: false,
      id: '@hf/meta-llama/meta-llama-3-8b-instruct',
    },
    //bing
    {
      contextWindowTokens: 128_000,
      displayName: 'bing-ai',
      enabled: true,
      id: 'bing-ai',
      pricing: {
        input: 5,
        output: 15,
      },
    },
    {
      contextWindowTokens: 128_000,
      displayName: 'bing-balanced',
      enabled: true,
      id: 'bing-balanced',
      pricing: {
        input: 5,
        output: 15,
      },
    },
    {
      contextWindowTokens: 128_000,
      displayName: 'bing-creative',
      enabled: true,
      id: 'bing-creative',
      pricing: {
        input: 5,
        output: 15,
      },
    },
    {
      contextWindowTokens: 128_000,
      displayName: 'bing-precise',
      enabled: true,
      id: 'bing-precise',
      pricing: {
        input: 5,
        output: 15,
      },
    },
    //gemini
    {
      contextWindowTokens: 1_048_567 + 65_536,
      description:
        'Gemini 2.5 Pro Experimental 是 Google 最先进的思维模型，能够对代码、数学和STEM领域的复杂问题进行推理，还能利用长上下文来分析大型数据集、代码库和文档。',
      displayName: 'Gemini 2.5 Pro Experimental 03-25',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.5-pro-exp-03-25',
      maxOutput: 65_536,
      pricing: {
        cachedInput: 0,
        input: 0,
        output: 0,
      },
      releasedAt: '2025-03-25',
      vision: true,
    },
    {
      contextWindowTokens: 2_097_152 + 8192,
      description:
        'Gemini 2.0 Pro Experimental 是 Google 最新的实验性多模态AI模型，与历史版本相比有一定的质量提升，特别是对于世界知识、代码和长上下文。',
      displayName: 'Gemini 2.0 Pro Experimental 02-05',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.0-pro-exp-02-05',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0,
        input: 0,
        output: 0,
      },
      releasedAt: '2025-02-05',
      vision: true,
    },
    {
      contextWindowTokens: 1_048_576 + 8192,
      description:
        'Gemini 2.0 Flash 提供下一代功能和改进，包括卓越的速度、原生工具使用、多模态生成和1M令牌上下文窗口。',
      displayName: 'Gemini 2.0 Flash',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.0-flash',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.025,
        input: 0.1,
        output: 0.4,
      },
      releasedAt: '2025-02-05',
      vision: true,
    },
    {
      contextWindowTokens: 1_048_576 + 8192,
      description:
        'Gemini 2.0 Flash 提供下一代功能和改进，包括卓越的速度、原生工具使用、多模态生成和1M令牌上下文窗口。',
      displayName: 'Gemini 2.0 Flash 001',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.0-flash-001',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.025,
        input: 0.1,
        output: 0.4,
      },
      releasedAt: '2025-02-05',
      vision: true,
    },
    {
      contextWindowTokens: 1_048_576 + 8192,
      description:
        '一个 Gemini 2.0 Flash 模型，针对成本效益和低延迟等目标进行了优化。',
      displayName: 'Gemini 2.0 Flash-Lite Preview 02-05',
      enabled: true,
      id: 'gemini-2.0-flash-lite-preview-02-05',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.018_75,
        input: 0.075,
        output: 0.3,
      },
      releasedAt: '2025-02-05',
      vision: true,
    },
    {
      contextWindowTokens: 1_048_576 + 65_536,
      description:
        'Gemini 2.0 Flash Exp 是 Google 最新的实验性多模态AI模型，拥有下一代特性，卓越的速度，原生工具调用以及多模态生成。',
      displayName: 'Gemini 2.0 Flash Thinking Experimental 01-21',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.0-flash-thinking-exp-01-21',
      maxOutput: 65_536,
      pricing: {
        cachedInput: 0,
        input: 0,
        output: 0,
      },
      releasedAt: '2025-01-21',
      vision: true,
    },
    {
      contextWindowTokens: 32_767 + 8192,
      description:
        'Gemini 2.0 Flash Exp 是 Google 最新的实验性多模态AI模型，拥有下一代特性，卓越的速度，原生工具调用以及多模态生成。',
      displayName: 'Gemini 2.0 Flash Thinking Experimental 1219',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.0-flash-thinking-exp-1219',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0,
        input: 0,
        output: 0,
      },
      releasedAt: '2024-12-19',
      vision: true,
    },
    {
      contextWindowTokens: 1_048_576 + 8192,
      description:
        'Gemini 2.0 Flash Exp 是 Google 最新的实验性多模态AI模型，拥有下一代特性，卓越的速度，原生工具调用以及多模态生成。',
      displayName: 'Gemini 2.0 Flash Experimental',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.0-flash-exp',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0,
        input: 0,
        output: 0,
      },
      releasedAt: '2024-12-11',
      vision: true,
    },
    {
      contextWindowTokens: 2_097_152 + 8192,
      description:
        'Gemini Exp 1206 是 Google 最新的实验性多模态AI模型，与历史版本相比有一定的质量提升。',
      displayName: 'Gemini Experimental 1206',
      enabled: true,
      functionCall: true,
      id: 'gemini-exp-1206',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0,
        input: 0,
        output: 0,
      },
      releasedAt: '2024-12-06',
      vision: true,
    },
    {
      contextWindowTokens: 32_767 + 8192,
      description:
        'Gemini Exp 1121 是 Google 的实验性多模态AI模型，拥有改进的编码、推理和视觉能力。',
      displayName: 'Gemini Experimental 1121',
      functionCall: true,
      id: 'gemini-exp-1121',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0,
        input: 0,
        output: 0,
      },
      releasedAt: '2024-11-21',
      vision: true,
    },
    {
      contextWindowTokens: 32_767 + 8192,
      description: 'Gemini Exp 1114 是 Google 的实验性多模态AI模型，对输出质量有一定改进。',
      displayName: 'Gemini Experimental 1114',
      functionCall: true,
      id: 'gemini-exp-1114',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0,
        input: 0,
        output: 0,
      },
      releasedAt: '2024-11-14',
      vision: true,
    },
    {
      contextWindowTokens: 32_767 + 8192,
      description:
        'LearnLM 是一个实验性的、特定于任务的语言模型，经过训练以符合学习科学原则，可在教学和学习场景中遵循系统指令，充当专家导师等。',
      displayName: 'LearnLM 1.5 Pro Experimental',
      functionCall: true,
      id: 'learnlm-1.5-pro-experimental',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0,
        input: 0,
        output: 0,
      },
      releasedAt: '2024-11-19',
      vision: true,
    },
    {
      contextWindowTokens: 1_000_000 + 8192,
      description:
        'Gemini 1.5 Flash 是 Google 最新的多模态AI模型，具备快速处理能力，支持文本、图像和视频输入，适用于多种任务的高效扩展。',
      displayName: 'Gemini 1.5 Flash',
      enabled: true,
      functionCall: true,
      id: 'gemini-1.5-flash-latest',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.018_75,
        input: 0.075,
        output: 0.3,
      },
      vision: true,
    },
    {
      contextWindowTokens: 1_000_000 + 8192,
      description: 'Gemini 1.5 Flash 002 是一款高效的多模态模型，支持广泛应用的扩展。',
      displayName: 'Gemini 1.5 Flash 002',
      enabled: true,
      functionCall: true,
      id: 'gemini-1.5-flash-002',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.018_75,
        input: 0.075,
        output: 0.3,
      },
      releasedAt: '2024-09-25',
      vision: true,
    },
    {
      contextWindowTokens: 1_000_000 + 8192,
      description: 'Gemini 1.5 Flash 001 是一款高效的多模态模型，支持广泛应用的扩展。',
      displayName: 'Gemini 1.5 Flash 001',
      functionCall: true,
      id: 'gemini-1.5-flash-001',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.018_75,
        input: 0.075,
        output: 0.3,
      },
      vision: true,
    },
    {
      contextWindowTokens: 2_000_000 + 8192,
      description:
        'Gemini 1.5 Pro 支持高达200万个tokens，是中型多模态模型的理想选择，适用于复杂任务的多方面支持。',
      displayName: 'Gemini 1.5 Pro',
      enabled: true,
      functionCall: true,
      id: 'gemini-1.5-pro-latest',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.875,
        input: 3.5,
        output: 10.5,
      },
      releasedAt: '2024-02-15',
      vision: true,
    },
    {
      contextWindowTokens: 2_000_000 + 8192,
      description:
        'Gemini 1.5 Pro 002 是最新的生产就绪模型，提供更高质量的输出，特别在数学、长上下文和视觉任务方面有显著提升。',
      displayName: 'Gemini 1.5 Pro 002',
      enabled: true,
      functionCall: true,
      id: 'gemini-1.5-pro-002',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.315,
        input: 1.25,
        output: 2.5,
      },
      releasedAt: '2024-09-24',
      vision: true,
    },
    {
      contextWindowTokens: 2_000_000 + 8192,
      description: 'Gemini 1.5 Pro 001 是可扩展的多模态AI解决方案，支持广泛的复杂任务。',
      displayName: 'Gemini 1.5 Pro 001',
      functionCall: true,
      id: 'gemini-1.5-pro-001',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.875,
        input: 3.5,
        output: 10.5,
      },
      releasedAt: '2024-02-15',
      vision: true,
    },
    {
      contextWindowTokens: 1_000_000 + 8192,
      description: 'Gemini 1.5 Flash 8B 是一款高效的多模态模型，支持广泛应用的扩展。',
      displayName: 'Gemini 1.5 Flash 8B',
      enabled: true,
      functionCall: true,
      id: 'gemini-1.5-flash-8b',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.02,
        input: 0.075,
        output: 0.3,
      },
      releasedAt: '2024-10-03',
      vision: true,
    },
    {
      contextWindowTokens: 1_000_000 + 8192,
      description:
        'Gemini 1.5 Flash 8B 0924 是最新的实验性模型，在文本和多模态用例中都有显著的性能提升。',
      displayName: 'Gemini 1.5 Flash 8B 0924',
      functionCall: true,
      id: 'gemini-1.5-flash-8b-exp-0924',
      maxOutput: 8192,
      pricing: {
        cachedInput: 0.018_75,
        input: 0.075,
        output: 0.3,
      },
      releasedAt: '2024-09-24',
      vision: true,
    },
    // Gemini 1.0 Pro will be removed on 2025.02.15
    {
      contextWindowTokens: 30_720 + 2048,
      description: 'Gemini 1.0 Pro 是Google的高性能AI模型，专为广泛任务扩展而设计。',
      displayName: 'Gemini 1.0 Pro',
      id: 'gemini-1.0-pro-latest',
      maxOutput: 2048,
      pricing: {
        input: 0.5,
        output: 1.5,
      },
      releasedAt: '2023-12-06',
    },
    {
      contextWindowTokens: 30_720 + 2048,
      description:
        'Gemini 1.0 Pro 001 (Tuning) 提供稳定并可调优的性能，是复杂任务解决方案的理想选择。',
      displayName: 'Gemini 1.0 Pro 001 (Tuning)',
      functionCall: true,
      id: 'gemini-1.0-pro-001',
      maxOutput: 2048,
      pricing: {
        input: 0.5,
        output: 1.5,
      },
      releasedAt: '2023-12-06',
    },
    {
      contextWindowTokens: 30_720 + 2048,
      description: 'Gemini 1.0 Pro 002 (Tuning) 提供出色的多模态支持，专注于复杂任务的有效解决。',
      displayName: 'Gemini 1.0 Pro 002 (Tuning)',
      id: 'gemini-1.0-pro-002',
      maxOutput: 2048,
      pricing: {
        input: 0.5,
        output: 1.5,
      },
      releasedAt: '2023-12-06',
    },
    // 硅基流动
    {
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
    },
    {
      contextWindowTokens: 65_536,
      description:
        'DeepSeek-V3 是一款拥有 6710 亿参数的混合专家（MoE）语言模型，采用多头潜在注意力（MLA）和 DeepSeekMoE 架构，结合无辅助损失的负载平衡策略，优化推理和训练效率。通过在 14.8 万亿高质量tokens上预训练，并进行监督微调和强化学习，DeepSeek-V3 在性能上超越其他开源模型，接近领先闭源模型。',
      displayName: 'DeepSeek V3(SL)',
      enabled: true,
      functionCall: true,
      id: 'deepseek-ai/DeepSeek-V3',
      pricing: { // 2.9 涨价
        currency: 'CNY',
        input: 1,
        output: 2,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'DeepSeek-V2.5 是 DeepSeek-V2-Chat 和 DeepSeek-Coder-V2-Instruct 的升级版本，集成了两个先前版本的通用和编码能力。该模型在多个方面进行了优化，包括写作和指令跟随能力，更好地与人类偏好保持一致。DeepSeek-V2.5 在各种评估基准上都取得了显著的提升，如 AlpacaEval 2.0、ArenaHard、AlignBench 和 MT-Bench 等',
      displayName: 'DeepSeek V2.5',
      enabled: true,
      functionCall: true,
      id: 'deepseek-ai/DeepSeek-V2.5',
      pricing: {
        currency: 'CNY',
        input: 5,
        output: 5,
      },
    },
    {
      contextWindowTokens: 4096,
      description:
        'DeepSeek-VL2 是一个基于 DeepSeekMoE-27B 开发的混合专家（MoE）视觉语言模型，采用稀疏激活的 MoE 架构，在仅激活 4.5B 参数的情况下实现了卓越性能。该模型在视觉问答、光学字符识别、文档/表格/图表理解和视觉定位等多个任务中表现优异。',
      displayName: 'DeepSeek VL2',
      id: 'deepseek-ai/deepseek-vl2',
      pricing: {
        currency: 'CNY',
        input: 0.99,
        output: 0.99,
      },
      vision: true,
    },
    {
      contextWindowTokens: 32_768,
      description:
        'QVQ-72B-Preview 是由 Qwen 团队开发的专注于视觉推理能力的研究型模型，其在复杂场景理解和解决视觉相关的数学问题方面具有独特优势。',
      displayName: 'QVQ 72B Preview',
      enabled: true,
      id: 'Qwen/QVQ-72B-Preview',
      pricing: {
        currency: 'CNY',
        input: 9.9,
        output: 9.9,
      },
      vision: true,
    },
    {
      contextWindowTokens: 32_768,
      description:
        'QwQ-32B-Preview是Qwen 最新的实验性研究模型，专注于提升AI推理能力。通过探索语言混合、递归推理等复杂机制，主要优势包括强大的推理分析能力、数学和编程能力。与此同时，也存在语言切换问题、推理循环、安全性考虑、其他能力方面的差异。',
      displayName: 'QwQ 32B Preview',
      enabled: true,
      id: 'Qwen/QwQ-32B-Preview',
      pricing: {
        currency: 'CNY',
        input: 1.26,
        output: 1.26,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2.5-7B-Instruct 是阿里云发布的最新大语言模型系列之一。该 7B 模型在编码和数学等领域具有显著改进的能力。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
      displayName: 'Qwen2.5 7B Instruct (Free)',
      enabled: true,
      functionCall: true,
      id: 'Qwen/Qwen2.5-7B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2.5-7B-Instruct 是阿里云发布的最新大语言模型系列之一。该 7B 模型在编码和数学等领域具有显著改进的能力。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
      displayName: 'Qwen2.5 7B Instruct (LoRA)',
      id: 'LoRA/Qwen/Qwen2.5-7B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0.53,
        output: 0.53,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2.5-7B-Instruct 是阿里云发布的最新大语言模型系列之一。该 7B 模型在编码和数学等领域具有显著改进的能力。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
      displayName: 'Qwen2.5 7B Instruct (Pro)',
      functionCall: true,
      id: 'Pro/Qwen/Qwen2.5-7B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0.35,
        output: 0.35,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2.5-14B-Instruct 是阿里云发布的最新大语言模型系列之一。该 14B 模型在编码和数学等领域具有显著改进的能力。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
      displayName: 'Qwen2.5 14B Instruct',
      functionCall: true,
      id: 'Qwen/Qwen2.5-14B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0.7,
        output: 0.7,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2.5-32B-Instruct 是阿里云发布的最新大语言模型系列之一。该 32B 模型在编码和数学等领域具有显著改进的能力。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
      displayName: 'Qwen2.5 32B Instruct',
      functionCall: true,
      id: 'Qwen/Qwen2.5-32B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 1.26,
        output: 1.26,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2.5-72B-Instruct 是阿里云发布的最新大语言模型系列之一。该 72B 模型在编码和数学等领域具有显著改进的能力。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
      displayName: 'Qwen2.5 72B Instruct',
      functionCall: true,
      id: 'Qwen/Qwen2.5-72B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 4.13,
        output: 4.13,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2.5-72B-Instruct 是阿里云发布的最新大语言模型系列之一。该 72B 模型在编码和数学等领域具有显著改进的能力。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
      displayName: 'Qwen2.5 72B Instruct (LoRA)',
      id: 'LoRA/Qwen/Qwen2.5-72B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 6.2,
        output: 6.2,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2.5-72B-Instruct 是阿里云发布的最新大语言模型系列之一。该 72B 模型在编码和数学等领域具有显著改进的能力。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
      displayName: 'Qwen2.5 72B Instruct (Vendor-A)',
      functionCall: true,
      id: 'Vendor-A/Qwen/Qwen2.5-72B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 1,
        output: 1,
      },
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen2.5-72B-Instruct 是阿里云发布的最新大语言模型系列之一。该 72B 模型在编码和数学等领域具有显著改进的能力。它支持长达 128K tokens 的输入，可以生成超过 8K tokens 的长文本。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
      displayName: 'Qwen2.5 72B Instruct 128K',
      enabled: true,
      functionCall: true,
      id: 'Qwen/Qwen2.5-72B-Instruct-128K',
      pricing: {
        currency: 'CNY',
        input: 4.13,
        output: 4.13,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2.5-Coder-7B-Instruct 是阿里云发布的代码特定大语言模型系列的最新版本。该模型在 Qwen2.5 的基础上，通过 5.5 万亿个 tokens 的训练，显著提升了代码生成、推理和修复能力。它不仅增强了编码能力，还保持了数学和通用能力的优势。模型为代码智能体等实际应用提供了更全面的基础',
      displayName: 'Qwen2.5 Coder 7B Instruct (Free)',
      id: 'Qwen/Qwen2.5-Coder-7B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2.5-Coder-7B-Instruct 是阿里云发布的代码特定大语言模型系列的最新版本。该模型在 Qwen2.5 的基础上，通过 5.5 万亿个 tokens 的训练，显著提升了代码生成、推理和修复能力。它不仅增强了编码能力，还保持了数学和通用能力的优势。模型为代码智能体等实际应用提供了更全面的基础',
      displayName: 'Qwen2.5 Coder 7B Instruct (Pro)',
      id: 'Pro/Qwen/Qwen2.5-Coder-7B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0.35,
        output: 0.35,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2.5-Coder-32B-Instruct 是基于 Qwen2.5 开发的代码特定大语言模型。该模型通过 5.5 万亿 tokens 的训练，在代码生成、代码推理和代码修复方面都取得了显著提升。它是当前最先进的开源代码语言模型，编码能力可与 GPT-4 相媲美。模型不仅增强了编码能力，还保持了在数学和通用能力方面的优势，并支持长文本处理',
      displayName: 'Qwen2.5 Coder 32B Instruct',
      id: 'Qwen/Qwen2.5-Coder-32B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 1.26,
        output: 1.26,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2-1.5B-Instruct 是 Qwen2 系列中的指令微调大语言模型，参数规模为 1.5B。该模型基于 Transformer 架构，采用了 SwiGLU 激活函数、注意力 QKV 偏置和组查询注意力等技术。它在语言理解、生成、多语言能力、编码、数学和推理等多个基准测试中表现出色，超越了大多数开源模型。与 Qwen1.5-1.8B-Chat 相比，Qwen2-1.5B-Instruct 在 MMLU、HumanEval、GSM8K、C-Eval 和 IFEval 等测试中均显示出显著的性能提升，尽管参数量略少',
      displayName: 'Qwen2 1.5B Instruct (Free)',
      id: 'Qwen/Qwen2-1.5B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2-1.5B-Instruct 是 Qwen2 系列中的指令微调大语言模型，参数规模为 1.5B。该模型基于 Transformer 架构，采用了 SwiGLU 激活函数、注意力 QKV 偏置和组查询注意力等技术。它在语言理解、生成、多语言能力、编码、数学和推理等多个基准测试中表现出色，超越了大多数开源模型。与 Qwen1.5-1.8B-Chat 相比，Qwen2-1.5B-Instruct 在 MMLU、HumanEval、GSM8K、C-Eval 和 IFEval 等测试中均显示出显著的性能提升，尽管参数量略少',
      displayName: 'Qwen2 1.5B Instruct (Pro)',
      id: 'Pro/Qwen/Qwen2-1.5B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0.14,
        output: 0.14,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2-7B-Instruct 是 Qwen2 系列中的指令微调大语言模型，参数规模为 7B。该模型基于 Transformer 架构，采用了 SwiGLU 激活函数、注意力 QKV 偏置和组查询注意力等技术。它能够处理大规模输入。该模型在语言理解、生成、多语言能力、编码、数学和推理等多个基准测试中表现出色，超越了大多数开源模型，并在某些任务上展现出与专有模型相当的竞争力。Qwen2-7B-Instruct 在多项评测中均优于 Qwen1.5-7B-Chat，显示出显著的性能提升',
      displayName: 'Qwen2 7B Instruct (Free)',
      id: 'Qwen/Qwen2-7B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2-7B-Instruct 是 Qwen2 系列中的指令微调大语言模型，参数规模为 7B。该模型基于 Transformer 架构，采用了 SwiGLU 激活函数、注意力 QKV 偏置和组查询注意力等技术。它能够处理大规模输入。该模型在语言理解、生成、多语言能力、编码、数学和推理等多个基准测试中表现出色，超越了大多数开源模型，并在某些任务上展现出与专有模型相当的竞争力。Qwen2-7B-Instruct 在多项评测中均优于 Qwen1.5-7B-Chat，显示出显著的性能提升',
      displayName: 'Qwen2 7B Instruct (Pro)',
      id: 'Pro/Qwen/Qwen2-7B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0.35,
        output: 0.35,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2-72B-Instruct 是 Qwen2 系列中的指令微调大语言模型，参数规模为 72B。该模型基于 Transformer 架构，采用了 SwiGLU 激活函数、注意力 QKV 偏置和组查询注意力等技术。它能够处理大规模输入。该模型在语言理解、生成、多语言能力、编码、数学和推理等多个基准测试中表现出色，超越了大多数开源模型，并在某些任务上展现出与专有模型相当的竞争力',
      displayName: 'Qwen2 72B Instruct',
      id: 'Qwen/Qwen2-7B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 4.13,
        output: 4.13,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2-VL-7B-Instruct 是 Qwen-VL 模型的最新迭代版本，在视觉理解基准测试中达到了最先进的性能，包括 MathVista、DocVQA、RealWorldQA 和 MTVQA 等。Qwen2-VL 能够用于高质量的基于视频的问答、对话和内容创作，还具备复杂推理和决策能力，可以与移动设备、机器人等集成，基于视觉环境和文本指令进行自动操作。除了英语和中文，Qwen2-VL 现在还支持理解图像中不同语言的文本，包括大多数欧洲语言、日语、韩语、阿拉伯语和越南语等',
      displayName: 'Qwen2 VL 7B Instruct (Pro)',
      enabled: true,
      id: 'Pro/Qwen/Qwen2-VL-7B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0.35,
        output: 0.35,
      },
      vision: true,
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2-VL 是 Qwen-VL 模型的最新迭代版本，在视觉理解基准测试中达到了最先进的性能，包括 MathVista、DocVQA、RealWorldQA 和 MTVQA 等。Qwen2-VL 能够理解超过 20 分钟的视频，用于高质量的基于视频的问答、对话和内容创作。它还具备复杂推理和决策能力，可以与移动设备、机器人等集成，基于视觉环境和文本指令进行自动操作。除了英语和中文，Qwen2-VL 现在还支持理解图像中不同语言的文本，包括大多数欧洲语言、日语、韩语、阿拉伯语和越南语等',
      displayName: 'Qwen2 VL 72B Instruct',
      enabled: true,
      id: 'Qwen/Qwen2-VL-72B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 4.13,
        output: 4.13,
      },
      vision: true,
    },
    {
      contextWindowTokens: 32_768,
      description:
        'InternLM2.5-7B-Chat 是一个开源的对话模型，基于 InternLM2 架构开发。该 7B 参数规模的模型专注于对话生成任务，支持中英双语交互。模型采用了最新的训练技术，旨在提供流畅、智能的对话体验。InternLM2.5-7B-Chat 适用于各种对话应用场景，包括但不限于智能客服、个人助手等领域',
      displayName: 'InternLM2.5 7B Chat (Free)',
      functionCall: true,
      id: 'internlm/internlm2_5-7b-chat',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'InternLM2.5-20B-Chat 是一个开源的大规模对话模型，基于 InternLM2 架构开发。该模型拥有 200 亿参数，在数学推理方面表现出色，超越了同量级的 Llama3 和 Gemma2-27B 模型。InternLM2.5-20B-Chat 在工具调用能力方面有显著提升，支持从上百个网页收集信息进行分析推理，并具备更强的指令理解、工具选择和结果反思能力。它适用于构建复杂智能体，可进行多轮工具调用以完成复杂任务',
      displayName: 'InternLM2.5 20B Chat',
      functionCall: true,
      id: 'internlm/internlm2_5-20b-chat',
      pricing: {
        currency: 'CNY',
        input: 1,
        output: 1,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'InternVL2-8B 是 InternVL 2.0 系列多模态大语言模型中的一员。该模型由 InternViT-300M-448px 视觉模型、MLP 投影层和 internlm2_5-7b-chat 语言模型组成。它在各种视觉语言任务上展现出了卓越的性能，包括文档和图表理解、场景文本理解、OCR、科学和数学问题解决等。InternVL2-8B 使用 8K 上下文窗口训练，能够处理长文本、多图像和视频输入，显著提升了模型在这些任务上的处理能力',
      displayName: 'InternVL2 8B (Pro)',
      id: 'Pro/OpenGVLab/InternVL2-8B',
      pricing: {
        currency: 'CNY',
        input: 0.35,
        output: 0.35,
      },
      vision: true,
    },
    {
      contextWindowTokens: 32_768,
      description:
        'InternVL2-26B 是 InternVL 2.0 系列多模态大语言模型中的一员。该模型由 InternViT-6B-448px-V1-5 视觉模型、MLP 投影层和 internlm2-chat-20b 语言模型组成。它在各种视觉语言任务上展现出了卓越的性能，包括文档和图表理解、场景文本理解、OCR、科学和数学问题解决等。InternVL2-26B 使用 8K 上下文窗口训练，能够处理长文本、多图像和视频输入，显著提升了模型在这些任务上的处理能力',
      displayName: 'InternVL2 26B',
      id: 'OpenGVLab/InternVL2-26B',
      pricing: {
        currency: 'CNY',
        input: 1,
        output: 1,
      },
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'GLM-4-9B-Chat 是智谱 AI 推出的 GLM-4 系列预训练模型中的开源版本。该模型在语义、数学、推理、代码和知识等多个方面表现出色。除了支持多轮对话外，GLM-4-9B-Chat 还具备网页浏览、代码执行、自定义工具调用（Function Call）和长文本推理等高级功能。模型支持 26 种语言，包括中文、英文、日语、韩语和德语等。在多项基准测试中，GLM-4-9B-Chat 展现了优秀的性能，如 AlignBench-v2、MT-Bench、MMLU 和 C-Eval 等。该模型支持最大 128K 的上下文长度，适用于学术研究和商业应用',
      displayName: 'GLM-4 9B Chat (Free)',
      functionCall: true,
      id: 'THUDM/glm-4-9b-chat',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
    },
    {
      contextWindowTokens: 131_072,
      description:
        'GLM-4-9B-Chat 是智谱 AI 推出的 GLM-4 系列预训练模型中的开源版本。该模型在语义、数学、推理、代码和知识等多个方面表现出色。除了支持多轮对话外，GLM-4-9B-Chat 还具备网页浏览、代码执行、自定义工具调用（Function Call）和长文本推理等高级功能。模型支持 26 种语言，包括中文、英文、日语、韩语和德语等。在多项基准测试中，GLM-4-9B-Chat 展现了优秀的性能，如 AlignBench-v2、MT-Bench、MMLU 和 C-Eval 等。该模型支持最大 128K 的上下文长度，适用于学术研究和商业应用',
      displayName: 'GLM-4 9B Chat (Pro)',
      functionCall: true,
      id: 'Pro/THUDM/glm-4-9b-chat',
      pricing: {
        currency: 'CNY',
        input: 0.6,
        output: 0.6,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'ChatGLM3-6B 是 ChatGLM 系列的开源模型，由智谱 AI 开发。该模型保留了前代模型的优秀特性，如对话流畅和部署门槛低，同时引入了新的特性。它采用了更多样的训练数据、更充分的训练步数和更合理的训练策略，在 10B 以下的预训练模型中表现出色。ChatGLM3-6B 支持多轮对话、工具调用、代码执行和 Agent 任务等复杂场景。除对话模型外，还开源了基础模型 ChatGLM-6B-Base 和长文本对话模型 ChatGLM3-6B-32K。该模型对学术研究完全开放，在登记后也允许免费商业使用',
      displayName: 'ChatGLM3 6B (Free)',
      id: 'THUDM/chatglm3-6b',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
    },
    {
      contextWindowTokens: 4096,
      description:
        'Yi-1.5-6B-Chat 是 Yi-1.5 系列的一个变体，属于开源聊天模型。Yi-1.5 是 Yi 的升级版本，在 500B 个高质量语料上进行了持续预训练，并在 3M 多样化的微调样本上进行了微调。相比于 Yi，Yi-1.5 在编码、数学、推理和指令遵循能力方面表现更强，同时保持了出色的语言理解、常识推理和阅读理解能力。该模型具有 4K、16K 和 32K 的上下文长度版本，预训练总量达到 3.6T 个 token',
      displayName: 'Yi-1.5 6B Chat (Free)',
      id: '01-ai/Yi-1.5-6B-Chat',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
    },
    {
      contextWindowTokens: 16_384,
      description:
        'Yi-1.5-9B-Chat-16K 是 Yi-1.5 系列的一个变体，属于开源聊天模型。Yi-1.5 是 Yi 的升级版本，在 500B 个高质量语料上进行了持续预训练，并在 3M 多样化的微调样本上进行了微调。相比于 Yi，Yi-1.5 在编码、数学、推理和指令遵循能力方面表现更强，同时保持了出色的语言理解、常识推理和阅读理解能力。该模型在同等规模的开源模型中表现最佳',
      displayName: 'Yi-1.5 9B Chat 16K (Free)',
      id: '01-ai/Yi-1.5-9B-Chat-16K',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
    },
    {
      contextWindowTokens: 16_384,
      description:
        'Yi-1.5-34B-Chat-16K 是 Yi-1.5 系列的一个变体，属于开源聊天模型。Yi-1.5 是 Yi 的升级版本，在 500B 个高质量语料上进行了持续预训练，并在 3M 多样化的微调样本上进行了微调。相比于 Yi，Yi-1.5 在编码、数学、推理和指令遵循能力方面表现更强，同时保持了出色的语言理解、常识推理和阅读理解能力。该模型在大多数基准测试中与更大的模型相当或表现更佳，具有 16K 的上下文长度',
      displayName: 'Yi-1.5 34B Chat 16K',
      id: '01-ai/Yi-1.5-34B-Chat-16K',
      pricing: {
        currency: 'CNY',
        input: 1.26,
        output: 1.26,
      },
    },
    {
      contextWindowTokens: 8192,
      description:
        'Gemma 是 Google 开发的轻量级、最先进的开放模型系列之一。它是一个仅解码器的大型语言模型，支持英语，提供开放权重、预训练变体和指令微调变体。Gemma 模型适用于各种文本生成任务，包括问答、摘要和推理。该 9B 模型是通过 8 万亿个 tokens 训练而成。其相对较小的规模使其可以在资源有限的环境中部署，如笔记本电脑、台式机或您自己的云基础设施，从而使更多人能够访问最先进的 AI 模型并促进创新',
      displayName: 'Gemma 2 9B (Free)',
      enabled: true,
      id: 'google/gemma-2-9b-it',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
    },
    {
      contextWindowTokens: 8192,
      description:
        'Gemma 是 Google 开发的轻量级、最先进的开放模型系列之一。它是一个仅解码器的大型语言模型，支持英语，提供开放权重、预训练变体和指令微调变体。Gemma 模型适用于各种文本生成任务，包括问答、摘要和推理。该 9B 模型是通过 8 万亿个 tokens 训练而成。其相对较小的规模使其可以在资源有限的环境中部署，如笔记本电脑、台式机或您自己的云基础设施，从而使更多人能够访问最先进的 AI 模型并促进创新',
      displayName: 'Gemma 2 9B (Pro)',
      id: 'Pro/google/gemma-2-9b-it',
      pricing: {
        currency: 'CNY',
        input: 0.6,
        output: 0.6,
      },
    },
    {
      contextWindowTokens: 8192,
      description:
        'Gemma 是由 Google 开发的轻量级、最先进的开放模型系列，采用与 Gemini 模型相同的研究和技术构建。这些模型是仅解码器的大型语言模型，支持英语，提供预训练和指令微调两种变体的开放权重。Gemma 模型适用于各种文本生成任务，包括问答、摘要和推理。其相对较小的规模使其能够部署在资源有限的环境中，如笔记本电脑、台式机或个人云基础设施，从而让所有人都能获得最先进的 AI 模型，促进创新',
      displayName: 'Gemma 2 27B',
      enabled: true,
      id: 'google/gemma-2-27b-it',
      pricing: {
        currency: 'CNY',
        input: 1.26,
        output: 1.26,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Meta Llama 3.1 是由 Meta 开发的多语言大型语言模型家族，包括 8B、70B 和 405B 三种参数规模的预训练和指令微调变体。该 8B 指令微调模型针对多语言对话场景进行了优化，在多项行业基准测试中表现优异。模型训练使用了超过 15 万亿个 tokens 的公开数据，并采用了监督微调和人类反馈强化学习等技术来提升模型的有用性和安全性。Llama 3.1 支持文本生成和代码生成，知识截止日期为 2023 年 12 月',
      displayName: 'Llama 3.1 8B Instruct (Free)',
      enabled: true,
      functionCall: true,
      id: 'meta-llama/Meta-Llama-3.1-8B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Meta Llama 3.1 是由 Meta 开发的多语言大型语言模型家族，包括 8B、70B 和 405B 三种参数规模的预训练和指令微调变体。该 8B 指令微调模型针对多语言对话场景进行了优化，在多项行业基准测试中表现优异。模型训练使用了超过 15 万亿个 tokens 的公开数据，并采用了监督微调和人类反馈强化学习等技术来提升模型的有用性和安全性。Llama 3.1 支持文本生成和代码生成，知识截止日期为 2023 年 12 月',
      displayName: 'Llama 3.1 8B Instruct (Pro)',
      id: 'Pro/meta-llama/Meta-Llama-3.1-8B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 0.42,
        output: 0.42,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Meta Llama 3.1 是由 Meta 开发的多语言大型语言模型家族，包括 8B、70B 和 405B 三种参数规模的预训练和指令微调变体。该 70B 指令微调模型针对多语言对话场景进行了优化，在多项行业基准测试中表现优异。模型训练使用了超过 15 万亿个 tokens 的公开数据，并采用了监督微调和人类反馈强化学习等技术来提升模型的有用性和安全性。Llama 3.1 支持文本生成和代码生成，知识截止日期为 2023 年 12 月',
      displayName: 'Llama 3.1 70B Instruct',
      enabled: true,
      functionCall: true,
      id: 'meta-llama/Meta-Llama-3.1-70B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 4.13,
        output: 4.13,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Meta Llama 3.1 是由 Meta 开发的多语言大型语言模型家族，包括 8B、70B 和 405B 三种参数规模的预训练和指令微调变体。该 405B 指令微调模型针对多语言对话场景进行了优化，在多项行业基准测试中表现优异。模型训练使用了超过 15 万亿个 tokens 的公开数据，并采用了监督微调和人类反馈强化学习等技术来提升模型的有用性和安全性。Llama 3.1 支持文本生成和代码生成，知识截止日期为 2023 年 12 月',
      displayName: 'Llama 3.1 405B Instruct',
      enabled: true,
      id: 'meta-llama/Meta-Llama-3.1-405B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 21,
        output: 21,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Llama 3.3 是 Llama 系列最先进的多语言开源大型语言模型，以极低成本体验媲美 405B 模型的性能。基于 Transformer 结构，并通过监督微调（SFT）和人类反馈强化学习（RLHF）提升有用性和安全性。其指令调优版本专为多语言对话优化，在多项行业基准上表现优于众多开源和封闭聊天模型。知识截止日期为 2023 年 12 月',
      displayName: 'Llama 3.3 70B Instruct',
      enabled: true,
      functionCall: true,
      id: 'meta-llama/Llama-3.3-70B-Instruct',
      pricing: {
        currency: 'CNY',
        input: 4.13,
        output: 4.13,
      },
    },
    {
      contextWindowTokens: 8192,
      description:
        'TeleChat2大模型是由中国电信从0到1自主研发的生成式语义大模型，支持百科问答、代码生成、长文生成等功能，为用户提供对话咨询服务，能够与用户进行对话互动，回答问题，协助创作，高效便捷地帮助用户获取信息、知识和灵感。模型在幻觉问题、长文生成、逻辑理解等方面均有较出色表现。',
      displayName: 'TeleChat2',
      id: 'TeleAI/TeleChat2',
      pricing: {
        currency: 'CNY',
        input: 1.33,
        output: 1.33,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'TeleMM多模态大模型是由中国电信自主研发的多模态理解大模型，能够处理文本、图像等多种模态输入，支持图像理解、图表分析等功能，为用户提供跨模态的理解服务。模型能够与用户进行多模态交互，准确理解输入内容，回答问题、协助创作，并高效提供多模态信息和灵感支持。在细粒度感知，逻辑推理等多模态任务上有出色表现',
      displayName: 'TeleMM',
      id: 'TeleAI/TeleMM',
      pricing: {
        currency: 'CNY',
        input: 1.33,
        output: 1.33,
      },
      vision: true,
    },
    // together ai
    {
      contextWindowTokens: 131_072,
      description:
        'LLaMA 3.2 旨在处理结合视觉和文本数据的任务。它在图像描述和视觉问答等任务中表现出色，跨越了语言生成和视觉推理之间的鸿沟。',
      displayName: 'Llama 3.2 3B Instruct Turbo',
      enabled: true,
      id: 'meta-llama/Llama-3.2-3B-Instruct-Turbo',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'LLaMA 3.2 旨在处理结合视觉和文本数据的任务。它在图像描述和视觉问答等任务中表现出色，跨越了语言生成和视觉推理之间的鸿沟。',
      displayName: 'Llama 3.2 11B Vision Instruct Turbo (Free)',
      enabled: true,
      id: 'meta-llama/Llama-Vision-Free',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'LLaMA 3.2 旨在处理结合视觉和文本数据的任务。它在图像描述和视觉问答等任务中表现出色，跨越了语言生成和视觉推理之间的鸿沟。',
      displayName: 'Llama 3.2 11B Vision Instruct Turbo',
      id: 'meta-llama/Llama-3.2-11B-Vision-Instruct-Turbo',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'LLaMA 3.2 旨在处理结合视觉和文本数据的任务。它在图像描述和视觉问答等任务中表现出色，跨越了语言生成和视觉推理之间的鸿沟。',
      displayName: 'Llama 3.2 90B Vision Instruct Turbo',
      enabled: true,
      id: 'meta-llama/Llama-3.2-90B-Vision-Instruct-Turbo',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Llama 3.1 8B 模型采用FP8量化，支持高达131,072个上下文标记，是开源模型中的佼佼者，适合复杂任务，表现优异于许多行业基准。',
      displayName: 'Llama 3.1 8B Instruct Turbo',
      enabled: true,
      functionCall: true,
      id: 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Llama 3.1 70B 模型经过精细调整，适用于高负载应用，量化至FP8提供更高效的计算能力和准确性，确保在复杂场景中的卓越表现。',
      displayName: 'Llama 3.1 70B Instruct Turbo',
      enabled: true,
      functionCall: true,
      id: 'meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo',
    },
    {
      contextWindowTokens: 130_815,
      description:
        '405B 的 Llama 3.1 Turbo 模型，为大数据处理提供超大容量的上下文支持，在超大规模的人工智能应用中表现突出。',
      displayName: 'Llama 3.1 405B Instruct Turbo',
      enabled: true,
      functionCall: true,
      id: 'meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo',
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Llama 3.1 Nemotron 70B 是由 NVIDIA 定制的大型语言模型，旨在提高 LLM 生成的响应对用户查询的帮助程度。该模型在 Arena Hard、AlpacaEval 2 LC 和 GPT-4-Turbo MT-Bench 等基准测试中表现出色，截至 2024 年 10 月 1 日，在所有三个自动对齐基准测试中排名第一。该模型使用 RLHF（特别是 REINFORCE）、Llama-3.1-Nemotron-70B-Reward 和 HelpSteer2-Preference 提示在 Llama-3.1-70B-Instruct 模型基础上进行训练',
      displayName: 'Llama 3.1 Nemotron 70B',
      enabled: true,
      id: 'nvidia/Llama-3.1-Nemotron-70B-Instruct-HF',
    },
    {
      contextWindowTokens: 8192,
      description: 'Llama 3 8B Instruct Turbo 是一款高效能的大语言模型，支持广泛的应用场景。',
      displayName: 'Llama 3 8B Instruct Turbo',
      id: 'meta-llama/Meta-Llama-3-8B-Instruct-Turbo',
    },
    {
      contextWindowTokens: 8192,
      description:
        'Llama 3 70B Instruct Turbo 提供卓越的语言理解和生成能力，适合最苛刻的计算任务。',
      displayName: 'Llama 3 70B Instruct Turbo',
      id: 'meta-llama/Meta-Llama-3-70B-Instruct-Turbo',
    },
    {
      contextWindowTokens: 8192,
      description: 'Llama 3 8B Instruct Lite 适合资源受限的环境，提供出色的平衡性能。',
      displayName: 'Llama 3 8B Instruct Lite',
      id: 'meta-llama/Meta-Llama-3-8B-Instruct-Lite',
    },
    {
      contextWindowTokens: 8192,
      description: 'Llama 3 70B Instruct Lite 适合需要高效能和低延迟的环境。',
      displayName: 'Llama 3 70B Instruct Lite',
      id: 'meta-llama/Meta-Llama-3-70B-Instruct-Lite',
    },
    {
      contextWindowTokens: 8192,
      description: 'Llama 3 8B Instruct Reference 提供多语言支持，涵盖丰富的领域知识。',
      displayName: 'Llama 3 8B Instruct Reference',
      id: 'meta-llama/Llama-3-8b-chat-hf',
    },
    {
      contextWindowTokens: 8192,
      description: 'Llama 3 70B Instruct Reference 是功能强大的聊天模型，支持复杂的对话需求。',
      displayName: 'Llama 3 70B Instruct Reference',
      id: 'meta-llama/Llama-3-70b-chat-hf',
    },
    {
      contextWindowTokens: 4096,
      description: 'LLaMA-2 Chat (13B) 提供优秀的语言处理能力和出色的交互体验。',
      displayName: 'LLaMA-2 Chat (13B)',
      id: 'meta-llama/Llama-2-13b-chat-hf',
    },
    {
      contextWindowTokens: 4096,
      description: 'LLaMA-2 提供优秀的语言处理能力和出色的交互体验。',
      displayName: 'LLaMA-2 (70B)',
      id: 'meta-llama/Llama-2-70b-hf',
    },
    {
      contextWindowTokens: 16_384,
      description:
        'Code Llama 是一款专注于代码生成和讨论的 LLM，结合广泛的编程语言支持，适用于开发者环境。',
      displayName: 'CodeLlama 34B Instruct',
      id: 'codellama/CodeLlama-34b-Instruct-hf',
    },
    {
      contextWindowTokens: 8192,
      description: 'Gemma 2 9B 由Google开发，提供高效的指令响应和综合能力。',
      displayName: 'Gemma 2 9B',
      enabled: true,
      id: 'google/gemma-2-9b-it',
    },
    {
      contextWindowTokens: 8192,
      description: 'Gemma 2 27B 是一款通用大语言模型，具有优异的性能和广泛的应用场景。',
      displayName: 'Gemma 2 27B',
      enabled: true,
      id: 'google/gemma-2-27b-it',
    },
    {
      contextWindowTokens: 8192,
      description: 'Gemma Instruct (2B) 提供基本的指令处理能力，适合轻量级应用。',
      displayName: 'Gemma Instruct (2B)',
      id: 'google/gemma-2b-it',
    },
    {
      contextWindowTokens: 32_768,
      description: 'Mistral (7B) Instruct v0.3 提供高效的计算能力和自然语言理解，适合广泛的应用。',
      displayName: 'Mistral (7B) Instruct v0.3',
      enabled: true,
      id: 'mistralai/Mistral-7B-Instruct-v0.3',
    },
    {
      contextWindowTokens: 32_768,
      description: 'Mistral (7B) Instruct v0.2 提供改进的指令处理能力和更精确的结果。',
      displayName: 'Mistral (7B) Instruct v0.2',
      id: 'mistralai/Mistral-7B-Instruct-v0.2',
    },
    {
      contextWindowTokens: 8192,
      description: 'Mistral (7B) Instruct 以高性能著称，适用于多种语言任务。',
      displayName: 'Mistral (7B) Instruct',
      functionCall: true,
      id: 'mistralai/Mistral-7B-Instruct-v0.1',
    },
    {
      contextWindowTokens: 8192,
      description:
        'Mistral 7B是一款紧凑但高性能的模型，擅长批量处理和简单任务，如分类和文本生成，具有良好的推理能力。',
      displayName: 'Mistral (7B)',
      id: 'mistralai/Mistral-7B-v0.1',
    },
    {
      contextWindowTokens: 32_768,
      description: 'Mixtral-8x7B Instruct (46.7B) 提供高容量的计算框架，适合大规模数据处理。',
      displayName: 'Mixtral-8x7B Instruct (46.7B)',
      enabled: true,
      functionCall: true,
      id: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Mixtral 8x7B是一个稀疏专家模型，利用多个参数提高推理速度，适合处理多语言和代码生成任务。',
      displayName: 'Mixtral-8x7B (46.7B)',
      id: 'mistralai/Mixtral-8x7B-v0.1',
    },
    {
      contextWindowTokens: 65_536,
      description: 'Mixtral-8x22B Instruct (141B) 是一款超级大语言模型，支持极高的处理需求。',
      displayName: 'Mixtral-8x22B Instruct (141B)',
      enabled: true,
      id: 'mistralai/Mixtral-8x22B-Instruct-v0.1',
    },
    {
      contextWindowTokens: 65_536,
      description:
        'WizardLM 2 是微软AI提供的语言模型，在复杂对话、多语言、推理和智能助手领域表现尤为出色。',
      displayName: 'WizardLM-2 8x22B',
      id: 'microsoft/WizardLM-2-8x22B',
    },
    {
      contextWindowTokens: 4096,
      description: 'DeepSeek LLM Chat (67B) 是创新的 AI 模型 提供深度语言理解和互动能力。',
      displayName: 'DeepSeek LLM Chat (67B)',
      enabled: true,
      id: 'deepseek-ai/deepseek-llm-67b-chat',
    },
    {
      contextWindowTokens: 32_768,
      description: 'QwQ模型是由 Qwen 团队开发的实验性研究模型，专注于增强 AI 推理能力。',
      displayName: 'QwQ 32B Preview',
      enabled: true,
      id: 'Qwen/QwQ-32B-Preview',
    },
    {
      contextWindowTokens: 32_768,
      description: 'Qwen2.5 是全新的大型语言模型系列，旨在优化指令式任务的处理。',
      displayName: 'Qwen 2.5 7B Instruct Turbo',
      enabled: true,
      id: 'Qwen/Qwen2.5-7B-Instruct-Turbo',
    },
    {
      contextWindowTokens: 32_768,
      description: 'Qwen2.5 是全新的大型语言模型系列，旨在优化指令式任务的处理。',
      displayName: 'Qwen 2.5 72B Instruct Turbo',
      enabled: true,
      id: 'Qwen/Qwen2.5-72B-Instruct-Turbo',
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Qwen2.5 Coder 32B Instruct 是阿里云发布的代码特定大语言模型系列的最新版本。该模型在 Qwen2.5 的基础上，通过 5.5 万亿个 tokens 的训练，显著提升了代码生成、推理和修复能力。它不仅增强了编码能力，还保持了数学和通用能力的优势。模型为代码智能体等实际应用提供了更全面的基础',
      displayName: 'Qwen 2.5 Coder 32B Instruct',
      id: 'Qwen/Qwen2.5-Coder-32B-Instruct',
    },
    {
      contextWindowTokens: 32_768,
      description: 'Qwen 2 Instruct (72B) 为企业级应用提供精准的指令理解和响应。',
      displayName: 'Qwen 2 Instruct (72B)',
      id: 'Qwen/Qwen2-72B-Instruct',
    },
    {
      contextWindowTokens: 32_768,
      description: 'DBRX Instruct 提供高可靠性的指令处理能力，支持多行业应用。',
      displayName: 'DBRX Instruct',
      id: 'databricks/dbrx-instruct',
    },
    {
      contextWindowTokens: 4096,
      description: 'Upstage SOLAR Instruct v1 (11B) 适用于精细化指令任务，提供出色的语言处理能力。',
      displayName: 'Upstage SOLAR Instruct v1 (11B)',
      id: 'upstage/SOLAR-10.7B-Instruct-v1.0',
    },
    {
      contextWindowTokens: 32_768,
      description: 'Nous Hermes 2 - Mixtral 8x7B-DPO (46.7B) 是高精度的指令模型，适用于复杂计算。',
      displayName: 'Nous Hermes 2 - Mixtral 8x7B-DPO (46.7B)',
      id: 'NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO',
    },
    {
      contextWindowTokens: 4096,
      description: 'MythoMax-L2 (13B) 是一种创新模型，适合多领域应用和复杂任务。',
      displayName: 'MythoMax-L2 (13B)',
      id: 'Gryphe/MythoMax-L2-13b',
    },
    {
      contextWindowTokens: 32_768,
      description: 'StripedHyena Nous (7B) 通过高效的策略和模型架构，提供增强的计算能力。',
      displayName: 'StripedHyena Nous (7B)',
      id: 'togethercomputer/StripedHyena-Nous-7B',
    },
    // grok
    {
      contextWindowTokens: 131_072,
      description: '拥有与 Grok 2 相当的性能，但具有更高的效率、速度和功能。',
      displayName: 'Grok Beta',
      enabled: true,
      functionCall: true,
      id: 'grok-beta',
      pricing: {
        input: 5,
        output: 15,
      },
    },
    {
      contextWindowTokens: 8192,
      description: '最新的图像理解模型，可以处理各种各样的视觉信息，包括文档、图表、截图和照片等。',
      displayName: 'Grok Vision Beta',
      enabled: true,
      functionCall: true,
      id: 'grok-vision-beta',
      pricing: {
        input: 5,
        output: 15,
      },
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description: '该模型在准确性、指令遵循和多语言能力方面有所改进。',
      displayName: 'Grok 2 1212',
      enabled: true,
      functionCall: true,
      id: 'grok-2-1212',
      pricing: {
        input: 2,
        output: 10,
      },
      releasedAt: '2024-12-12',
    },
    {
      contextWindowTokens: 32_768,
      description: '该模型在准确性、指令遵循和多语言能力方面有所改进。',
      displayName: 'Grok 2 Vision 1212',
      enabled: true,
      functionCall: true,
      id: 'grok-2-vision-1212',
      pricing: {
        input: 2,
        output: 10,
      },
      releasedAt: '2024-12-12',
      vision: true,
    },
    // nvidia
    {
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
    },
    {
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
    },
  ],
  checkModel: 'gpt-4o-mini',
  description:
    'OpenAI 是全球领先的人工智能研究机构，其开发的模型如GPT系列推动了自然语言处理的前沿。OpenAI 致力于通过创新和高效的AI解决方案改变多个行业。他们的产品具有显著的性能和经济性，广泛用于研究、商业和创新应用。',
  enabled: true,
  id: 'openai',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://platform.openai.com/docs/models',
  name: 'OpenAI',
  settings: {
    showModelFetcher: true,
    smoothing: {
      text: true,
    },
  },
  url: 'https://openai.com',
};

export default OpenAI;
