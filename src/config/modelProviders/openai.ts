import { ModelProviderCard } from '@/types/llm';

// ref: https://platform.openai.com/docs/deprecations
const OpenAI: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 1_047_576,
      description: 'GPT-4.1 是我们用于复杂任务的旗舰模型。它非常适合跨领域解决问题。',
      displayName: 'GPT-4.1',
      enabled: true,
      functionCall: true,
      id: 'gpt-4.1',
      maxOutput: 32_768,
      pricing: {
        cachedInput: 0.5,
        input: 2,
        output: 8,
      },
      releasedAt: '2025-04-14',
      vision: true,
    },
    {
      contextWindowTokens: 1_047_576,
      description:
        'GPT-4.1 mini 提供了智能、速度和成本之间的平衡，使其成为许多用例中有吸引力的模型。',
      displayName: 'GPT-4.1 mini',
      enabled: true,
      functionCall: true,
      id: 'gpt-4.1-mini',
      maxOutput: 32_768,
      pricing: {
        cachedInput: 0.1,
        input: 0.4,
        output: 1.6,
      },
      releasedAt: '2025-04-14',
      vision: true,
    },
    {
      contextWindowTokens: 1_047_576,
      description:
        'GPT-4.1 mini 提供了智能、速度和成本之间的平衡，使其成为许多用例中有吸引力的模型。',
      displayName: 'GPT-4.1 nano',
      enabled: true,
      functionCall: true,
      id: 'gpt-4.1-nano',
      maxOutput: 32_768,
      pricing: {
        cachedInput: 0.025,
        input: 0.1,
        output: 0.4,
      },
      releasedAt: '2025-04-14',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description:
        'o3-mini 是我们最新的小型推理模型，在与 o1-mini 相同的成本和延迟目标下提供高智能。',
      displayName: 'OpenAI o3-mini',
      enabled: true,
      functionCall: true,
      id: 'o3-mini',
      maxOutput: 100_000,
      pricing: {
        cachedInput: 0.55,
        input: 1.1,
        output: 4.4,
      },
      releasedAt: '2025-01-31',
    },
    {
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
    },
    {
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
      vision: true,
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
        'GPT-4.5 的研究预览版，它是我们迄今为止最大、最强大的 GPT 模型。它拥有广泛的世界知识，并能更好地理解用户意图，使其在创造性任务和自主规划方面表现出色。GPT-4.5 可接受文本和图像输入，并生成文本输出（包括结构化输出）。支持关键的开发者功能，如函数调用、批量 API 和流式输出。在需要创造性、开放式思考和对话的任务（如写作、学习或探索新想法）中，GPT-4.5 表现尤为出色。知识截止日期为 2023 年 10 月。',
      displayName: 'GPT-4.5 Preview',
      enabled: true,
      functionCall: true,
      id: 'gpt-4.5-preview', // deprecated on 2025-07-14
      maxOutput: 16_384,
      pricing: {
        cachedInput: 37.5,
        input: 75,
        output: 150,
      },
      releasedAt: '2025-02-27',
      vision: true,
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
      description: 'ChatGPT-4o 绘图 plus渠道',
      displayName: 'ChatGPT-4o 绘图 plus渠道',
      enabled: true,
      id: 'gpt-4o-image',
      pricing: {
        input: 2.5,
        output: 10,
      },
      releasedAt: '2024-11-20',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description: 'ChatGPT-4o 绘图 pro渠道',
      displayName: 'ChatGPT-4o 绘图 pro渠道',
      enabled: true,
      id: 'gpt-4o-image-vip',
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
      pricing: {
        // 2025.2.9 之后涨价
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
    //gemini
    {
      contextWindowTokens: 1_048_576 + 65_536,
      description: 'Gemini 2.5 Flash Preview 是 Google 性价比最高的模型，提供全面的功能。',
      displayName: 'Gemini 2.5 Flash Preview 05-20',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.5-flash-preview-05-20',
      maxOutput: 65_536,
      pricing: {
        input: 0.15,
        output: 3.5, // Thinking
      },
      releasedAt: '2025-04-17',
      vision: true,
    },
    {
      contextWindowTokens: 1_048_576 + 65_536,
      description:
        'Gemini 2.5 Pro Preview 是 Google 最先进的思维模型，能够对代码、数学和STEM领域的复杂问题进行推理，以及使用长上下文分析大型数据集、代码库和文档。',
      displayName: 'Gemini 2.5 Pro Preview 05-06 (Paid)',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.5-pro-preview-05-06',
      maxOutput: 65_536,
      pricing: {
        input: 1.25, // prompts <= 200k tokens
        output: 10, // prompts <= 200k tokens
      },
      releasedAt: '2025-05-06',
      vision: true,
    },
    {
      contextWindowTokens: 1_048_576 + 65_536,
      description: 'Gemini 2.5 Flash Preview 是 Google 性价比最高的模型，提供全面的功能。',
      displayName: 'Gemini 2.5 Flash Preview 04-17',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.5-flash-preview-04-17',
      maxOutput: 65_536,
      pricing: {
        input: 0.15,
        output: 3.5, // Thinking
      },
      releasedAt: '2025-04-17',
      vision: true,
    },
    {
      contextWindowTokens: 1_048_576 + 65_536,
      description:
        'Gemini 2.5 Pro Preview 是 Google 最先进的思维模型，能够对代码、数学和STEM领域的复杂问题进行推理，以及使用长上下文分析大型数据集、代码库和文档。',
      displayName: 'Gemini 2.5 Pro Preview 03-25 (Paid)',
      enabled: true,
      functionCall: true,
      id: 'gemini-2.5-pro-preview-03-25',
      maxOutput: 65_536,
      pricing: {
        input: 1.25, // prompts <= 200k tokens
        output: 10, // prompts <= 200k tokens
      },
      releasedAt: '2025-03-25',
      vision: true,
    },
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
      description: '一个 Gemini 2.0 Flash 模型，针对成本效益和低延迟等目标进行了优化。',
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
      contextWindowTokens: 131_072,
      description:
        'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
      displayName: 'Qwen3 235B A22B',
      enabled: true,
      functionCall: true,
      id: 'Qwen/Qwen3-235B-A22B',
      pricing: {
        currency: 'CNY',
        input: 1.25,
        output: 5,
      },
      releasedAt: '2025-04-28',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
      displayName: 'Qwen3 32B',
      enabled: true,
      functionCall: true,
      id: 'Qwen/Qwen3-32B',
      pricing: {
        currency: 'CNY',
        input: 0.5,
        output: 2,
      },
      releasedAt: '2025-04-28',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
      displayName: 'Qwen3 30B A3B',
      enabled: true,
      functionCall: true,
      id: 'Qwen/Qwen3-30B-A3B',
      pricing: {
        currency: 'CNY',
        input: 0.35,
        output: 1.4,
      },
      releasedAt: '2025-04-28',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
      displayName: 'Qwen3 14B',
      enabled: true,
      functionCall: true,
      id: 'Qwen/Qwen3-14B',
      pricing: {
        currency: 'CNY',
        input: 0.25,
        output: 1,
      },
      releasedAt: '2025-04-28',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
      displayName: 'Qwen3 8B',
      enabled: true,
      functionCall: true,
      id: 'Qwen/Qwen3-8B',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
      releasedAt: '2025-04-28',
    },
    {
      contextWindowTokens: 32_768,
      description:
        'GLM-Z1-Rumination-32B-0414 是一个具有沉思能力的深度推理模型（与 OpenAI 的 Deep Research 对标）。与典型的深度思考模型不同，沉思模型采用更长时间的深度思考来解决更开放和复杂的问题。',
      displayName: 'GLM-Z1-Rumination 32B 0414',
      enabled: true,
      functionCall: true,
      id: 'THUDM/GLM-Z1-Rumination-32B-0414',
      pricing: {
        currency: 'CNY',
        input: 1,
        output: 4,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'GLM-Z1-32B-0414 是一个具有深度思考能力的推理模型。该模型基于 GLM-4-32B-0414 通过冷启动和扩展强化学习开发，并在数学、代码和逻辑任务上进行了进一步训练。与基础模型相比，GLM-Z1-32B-0414 显著提升了数学能力和解决复杂任务的能力。',
      displayName: 'GLM-Z1 32B 0414',
      enabled: true,
      functionCall: true,
      id: 'THUDM/GLM-Z1-32B-0414',
      pricing: {
        currency: 'CNY',
        input: 1,
        output: 4,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'GLM-Z1-9B-0414 是 GLM 系列的小型模型，仅有 90 亿参数，但保持了开源传统的同时展现出惊人的能力。尽管规模较小，该模型在数学推理和通用任务上仍表现出色，其总体性能在同等规模的开源模型中已处于领先水平。',
      displayName: 'GLM-Z1 9B 0414',
      enabled: true,
      functionCall: true,
      id: 'THUDM/GLM-Z1-9B-0414',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'GLM-4-32B-0414 是 GLM 系列的新一代开源模型，拥有 320 亿参数。该模型性能可与 OpenAI 的 GPT 系列和 DeepSeek 的 V3/R1 系列相媲美。',
      displayName: 'GLM-4 32B 0414',
      enabled: true,
      functionCall: true,
      id: 'THUDM/GLM-4-32B-0414',
      pricing: {
        currency: 'CNY',
        input: 1.89,
        output: 1.89,
      },
    },
    {
      contextWindowTokens: 32_768,
      description:
        'GLM-4-9B-0414 是 GLM 系列的小型模型，拥有 90 亿参数。该模型继承了 GLM-4-32B 系列的技术特点，但提供了更轻量级的部署选择。尽管规模较小，GLM-4-9B-0414 仍在代码生成、网页设计、SVG 图形生成和基于搜索的写作等任务上展现出色能力。',
      displayName: 'GLM-4 9B 0414',
      enabled: true,
      functionCall: true,
      id: 'THUDM/GLM-4-9B-0414',
      pricing: {
        currency: 'CNY',
        input: 0,
        output: 0,
      },
    },
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
      pricing: {
        // 2.9 涨价
        currency: 'CNY',
        input: 1,
        output: 2,
      },
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
    // 其他
    {
      contextWindowTokens: 131_072,
      description:
        'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
      displayName: 'Qwen3 235B A22B FP8',
      enabled: true,
      id: 'Qwen3-235B-A22B-FP8',
      pricing: {
        currency: 'CNY',
        input: 1.25,
        output: 5,
      },
      releasedAt: '2025-04-28',
    },
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
