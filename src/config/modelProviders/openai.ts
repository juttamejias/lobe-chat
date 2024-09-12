import { ModelProviderCard } from '@/types/llm';

// ref: https://platform.openai.com/docs/deprecations
const OpenAI: ModelProviderCard = {
  chatModels: [
    {
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
      tokens: 128_000,
      vision: true,
    },
    {
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'GPT-4o',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o',
      pricing: {
        input: 5,
        output: 15,
      },
      tokens: 128_000,
      vision: true,
    },
    {
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'GPT-4o (240806)',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o-2024-08-06',
      pricing: {
        input: 2.5,
        output: 10,
      },
      tokens: 128_000,
      vision: true,
    },
    {
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'GPT-4o (240513)',
      functionCall: true,
      id: 'gpt-4o-2024-05-13',
      pricing: {
        input: 5,
        output: 15,
      },
      tokens: 128_000,
      vision: true,
    },
    {
      description:
        'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
      displayName: 'ChatGPT-4o',
      enabled: true,
      id: 'chatgpt-4o-latest',
      pricing: {
        input: 5,
        output: 15,
      },
      tokens: 128_000,
      vision: true,
    },
    {
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo',
      functionCall: true,
      id: 'gpt-4-turbo',
      pricing: {
        input: 10,
        output: 30,
      },
      tokens: 128_000,
      vision: true,
    },
    {
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo Vision (240409)',
      functionCall: true,
      id: 'gpt-4-turbo-2024-04-09',
      pricing: {
        input: 10,
        output: 30,
      },
      tokens: 128_000,
      vision: true,
    },
    {
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo Preview',
      functionCall: true,
      id: 'gpt-4-turbo-preview',
      pricing: {
        input: 10,
        output: 30,
      },
      tokens: 128_000,
    },
    {
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo Preview (0125)',
      functionCall: true,
      id: 'gpt-4-0125-preview',
      pricing: {
        input: 10,
        output: 30,
      },
      tokens: 128_000,
    },
    {
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。', // Will be discontinued on December 6, 2024
      displayName: 'GPT-4 Turbo Vision Preview',
      id: 'gpt-4-vision-preview',
      pricing: {
        input: 10,
        output: 30,
      },
      tokens: 128_000,
      vision: true,
    },
    {
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。', // Will be discontinued on December 6, 2024
      id: 'gpt-4-1106-vision-preview',
      pricing: {
        input: 10,
        output: 30,
      },
      tokens: 128_000,
      vision: true,
    },
    {
      description:
        '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
      displayName: 'GPT-4 Turbo Preview (1106)',
      functionCall: true,
      id: 'gpt-4-1106-preview',
      pricing: {
        input: 10,
        output: 30,
      },
      tokens: 128_000,
    },
    {
      description:
        'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
      displayName: 'GPT-4',
      functionCall: true,
      id: 'gpt-4',
      pricing: {
        input: 30,
        output: 60,
      },
      tokens: 8192,
    },
    {
      description:
        'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
      displayName: 'GPT-4 (0613)',
      functionCall: true,
      id: 'gpt-4-0613',
      pricing: {
        input: 30,
        output: 60,
      },
      tokens: 8192,
    },
    {
      description:
        'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。', // Will be discontinued on June 6, 2025
      displayName: 'GPT-4 32K',
      functionCall: true,
      id: 'gpt-4-32k',
      pricing: {
        input: 60,
        output: 120,
      },
      tokens: 32_768,
    },
    {
      // Will be discontinued on June 6, 2025
      description:
        'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
      displayName: 'GPT-4 32K (0613)',
      functionCall: true,
      id: 'gpt-4-32k-0613',
      pricing: {
        input: 60,
        output: 120,
      },
      tokens: 32_768,
    },
    {
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo',
      functionCall: true,
      id: 'gpt-3.5-turbo',
      pricing: {
        input: 0.5,
        output: 1.5,
      },
      tokens: 16_385,
    },
    {
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo (0125)',
      functionCall: true,
      id: 'gpt-3.5-turbo-0125',
      pricing: {
        input: 0.5,
        output: 1.5,
      },
      tokens: 16_385,
    },
    {
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo (1106)',
      functionCall: true,
      id: 'gpt-3.5-turbo-1106',
      pricing: {
        input: 1,
        output: 2,
      },
      tokens: 16_385,
    },
    {
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo Instruct',
      id: 'gpt-3.5-turbo-instruct',
      pricing: {
        input: 1.5,
        output: 2,
      },
      tokens: 4096,
    },
    {
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125', // Will be discontinued on September 13, 2024

      displayName: 'GPT-3.5 Turbo 16K',
      id: 'gpt-3.5-turbo-16k',
      legacy: true,
      pricing: {
        input: 3,
        output: 4,
      },
      tokens: 16_385,
    },
    {
      description:
        'GPT-3.5 Turbo 是 OpenAI 的一款基础模型，结合了高效性和经济性，广泛用于文本生成、理解和分析，专为指导性提示进行调整，去除了与聊天相关的优化。',
      displayName: 'GPT-3.5 Turbo (0613)',
      // Will be discontinued on September 13, 2024
      id: 'gpt-3.5-turbo-0613',
      legacy: true,
      pricing: {
        input: 1.5,
        output: 2,
      },
      tokens: 4096,
    },
    {
      description:
        'GPT-3.5 Turbo 是 OpenAI 的一款基础模型，结合了高效性和经济性，广泛用于文本生成、理解和分析，专为指导性提示进行调整，去除了与聊天相关的优化。', // Will be discontinued on September 13, 2024
      id: 'gpt-3.5-turbo-16k-0613',
      legacy: true,
      pricing: {
        input: 3,
        output: 4,
      },
      tokens: 16_385,
    },
    {
      description: 'Currently points to gpt-4o-mini-2024-07-18',
      displayName: 'GPT-4o mini 2024-07-18',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o-mini-2024-07-18',
      maxOutput: 16_385,
      tokens: 128_000,
      vision: true,
    },
    {
      description: 'Currently points to gpt-4o-2024-05-13',
      displayName: 'GPT-4o 2024-05-13',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o-2024-05-13',
      tokens: 128_000,
      vision: true,
    },
    {
      description: '擅长通用对话任务',
      displayName: 'DeepSeek-V2',
      enabled: true,
      functionCall: true,
      id: 'deepseek-chat',
      tokens: 128_000,
    },
    {
      description: '擅长处理编程和数学任务',
      displayName: 'DeepSeek-Coder-V2',
      enabled: true,
      functionCall: true,
      id: 'deepseek-coder',
      tokens: 128_000,
    },
    {
      description:
        'Claude 3.5 Sonnet raises the industry bar for intelligence, outperforming competitor models and Claude 3 Opus on a wide range of evaluations, with the speed and cost of our mid-tier model, Claude 3 Sonnet.',
      displayName: 'Claude 3.5 Sonnet',
      enabled: true,
      functionCall: true,
      id: 'claude-3-5-sonnet-20240620',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Claude 3.5 Sonnet raises the industry bar for intelligence, outperforming competitor models and Claude 3 Opus on a wide range of evaluations, with the speed and cost of our mid-tier model, Claude 3 Sonnet.',
      displayName: 'Claude 3.5 Sonnet',
      enabled: true,
      functionCall: true,
      id: 'claude-3_5-sonnet',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Ideal balance of intelligence and speed for enterprise workloads. Maximum utility at a lower price, dependable, balanced for scaled deployments',
      displayName: 'Claude 3 Sonnet 20240229',
      enabled: true,
      functionCall: true,
      id: 'claude-3-sonnet-20240229',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Most powerful model for highly complex tasks. Top-level performance, intelligence, fluency, and understanding',
      displayName: 'Claude 3 Opus 20240229',
      enabled: true,
      functionCall: true,
      id: 'claude-3-opus-20240229',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Fastest and most compact model for near-instant responsiveness. Quick and accurate targeted performance',
      displayName: 'Claude 3 Haiku 20240307',
      enabled: true,
      functionCall: true,
      id: 'claude-3-haiku-20240307',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Ideal balance of intelligence and speed for enterprise workloads. Maximum utility at a lower price, dependable, balanced for scaled deployments',
      displayName: 'Claude 3 Sonnet',
      enabled: true,
      functionCall: true,
      id: 'claude-3-sonnet',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Most powerful model for highly complex tasks. Top-level performance, intelligence, fluency, and understanding',
      displayName: 'Claude 3 Opus',
      enabled: true,
      functionCall: true,
      id: 'claude-3-opus',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Fastest and most compact model for near-instant responsiveness. Quick and accurate targeted performance',
      displayName: 'Claude 3 Haiku',
      enabled: true,
      functionCall: true,
      id: 'claude-3-haiku',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      displayName: 'Claude 2.1',
      enabled: false,
      id: 'claude-2.1',
      maxOutput: 4096,
      tokens: 200_000,
    },
    {
      displayName: 'Claude 2.0',
      enabled: false,
      id: 'claude-2.0',
      maxOutput: 4096,
      tokens: 100_000,
    },
    {
      displayName: 'Claude Instant 1.2',
      enabled: false,
      id: 'claude-instant-1.2',
      maxOutput: 4096,
      tokens: 100_000,
    },
    {
      description: 'A legacy text-only model optimized for chat conversations',
      displayName: 'PaLM 2 Chat (Legacy)',
      id: 'chat-bison-001',
      legacy: true,
      maxOutput: 1024,
      // tokens: 4096 + 1024, // none tokens test
    },
    {
      description: 'A legacy model that understands text and generates text as an output',
      displayName: 'PaLM 2 (Legacy)',
      id: 'text-bison-001',
      legacy: true,
      maxOutput: 1024,
      tokens: 8196 + 1024,
    },
    {
      description: 'The best model for scaling across a wide range of tasks',
      displayName: 'Gemini 1.0 Pro',
      functionCall: true,
      id: 'gemini-pro',
      maxOutput: 2048,
      tokens: 30_720 + 2048,
    },
    {
      description: 'The best image understanding model to handle a broad range of applications',
      displayName: 'Gemini 1.0 Pro Vision',
      id: 'gemini-1.0-pro-vision-latest',
      maxOutput: 4096,
      tokens: 12_288 + 4096,
      vision: true,
    },
    {
      description: 'The best image understanding model to handle a broad range of applications',
      displayName: 'Gemini 1.0 Pro Vision',
      id: 'gemini-pro-vision',
      maxOutput: 4096,
      tokens: 12_288 + 4096,
      vision: true,
    },
    {
      description:
        'The best model for scaling across a wide range of tasks. This is a stable model that supports tuning.',
      displayName: 'Gemini 1.0 Pro 001 (Tuning)',
      functionCall: true,
      id: 'gemini-1.0-pro-001',
      maxOutput: 2048,
      tokens: 30_720 + 2048,
    },
    {
      description:
        'The best model for scaling across a wide range of tasks. Released April 9, 2024.',
      displayName: 'Gemini 1.0 Pro 002 (Tuning)',
      id: 'gemini-1.0-pro-002',
      maxOutput: 2048,
      tokens: 30_720 + 2048,
    },
    {
      description:
        'The best model for scaling across a wide range of tasks. This is the latest model.',
      displayName: 'Gemini 1.0 Pro Latest',
      id: 'gemini-1.0-pro-latest',
      maxOutput: 2048,
      tokens: 30_720 + 2048,
    },
    {
      description: 'Fast and versatile multimodal model for scaling across diverse tasks',
      displayName: 'Gemini 1.5 Flash',
      enabled: true,
      functionCall: true,
      id: 'gemini-1.5-flash-latest',
      maxOutput: 8192,
      tokens: 1_048_576 + 8192,
      vision: true,
    },
    {
      description: 'Mid-size multimodal model that supports up to 1 million tokens',
      displayName: 'Gemini 1.5 Pro',
      enabled: true,
      functionCall: true,
      id: 'gemini-1.5-pro-latest',
      maxOutput: 8192,
      tokens: 1_048_576 + 8192,
      vision: true,
    },
    {
      description: 'The most capable model for highly complex tasks',
      displayName: 'Gemini 1.0 Ultra',
      id: 'gemini-ultra',
      maxOutput: 2048,
      tokens: 32_768,
    },
    {
      description: '通义千问超大规模语言模型，支持中文、英文等不同语言输入。',
      displayName: 'Qwen Turbo',
      enabled: true,
      id: 'qwen-turbo',
      tokens: 8192,
    },
    {
      description: '通义千问超大规模语言模型增强版，支持中文、英文等不同语言输入。',
      displayName: 'Qwen Plus',
      enabled: true,
      id: 'qwen-plus',
      tokens: 30_720,
    },
    {
      description:
        '通义千问千亿级别超大规模语言模型，支持中文、英文等不同语言输入，当前通义千问2.5产品版本背后的API模型。',
      displayName: 'Qwen Max',
      enabled: true,
      id: 'qwen-max',
      tokens: 8192,
    },
    {
      description:
        'An instruction-following conversational model that performs language tasks at a higher quality, more reliably, and with a longer context than previous models. Best suited for complex RAG workflows and multi-step tool use.',
      displayName: 'Command R+',
      enabled: true,
      functionCall: true,
      id: 'command-r-plus',
      maxOutput: 4096,
      tokens: 128_000,
      vision: false,
    },
    {
      description:
        'An instruction-following conversational model that performs language tasks at a higher quality, more reliably, and with a longer context than previous models. It can be used for complex workflows like code generation, retrieval augmented generation (RAG), tool use, and agents.',
      displayName: 'Command R',
      enabled: true,
      functionCall: true,
      id: 'command-r',
      maxOutput: 4096,
      tokens: 128_000,
      vision: false,
    },
    {
      description:
        'An instruction-following conversational model that performs language tasks at a higher quality, more reliably, and with a longer context than previous models. Best suited for complex RAG workflows and multi-step tool use.',
      displayName: 'Command R+ 08-2024',
      enabled: true,
      functionCall: true,
      id: 'command-r-plus-08-2024',
      maxOutput: 4096,
      tokens: 128_000,
      vision: false,
    },
    {
      description:
        'An instruction-following conversational model that performs language tasks at a higher quality, more reliably, and with a longer context than previous models. It can be used for complex workflows like code generation, retrieval augmented generation (RAG), tool use, and agents.',
      displayName: 'Command R 08-2024',
      enabled: true,
      functionCall: true,
      id: 'command-r-08-2024',
      maxOutput: 4096,
      tokens: 128_000,
      vision: false,
    },
    {
      displayName: 'deepseek-coder-6.7b-base-awq',
      enabled: true,
      id: '@hf/thebloke/deepseek-coder-6.7b-base-awq',
      tokens: 16_384,
    },
    {
      displayName: 'deepseek-math-7b-instruct',
      enabled: true,
      id: '@hf/thebloke/deepseek-math-7b-instruct',
      tokens: 4096,
    },
    {
      displayName: 'gemma-7b-it',
      enabled: true,
      id: '@hf/google/gemma-7b-it',
      tokens: 2048,
    },
    {
      displayName: 'llama-3-8b-instruct-awq',
      id: '@cf/meta/llama-3-8b-instruct-awq',
      tokens: 8192,
    },
    {
      displayName: 'llama-3.1-8b-instruct',
      id: '@cf/meta/llama-3.1-8b-instruct',
      tokens: 128_000,
    },
    {
      displayName: 'mistral-7b-instruct-v0.2',
      id: '@hf/mistral/mistral-7b-instruct-v0.2',
      tokens: 4096,
    },
    {
      displayName: 'qwen1.5-14b-chat-awq',
      enabled: true,
      id: '@cf/qwen/qwen1.5-14b-chat-awq',
      tokens: 32_768,
    },
    {
      displayName: 'qwen1.5-7b-chat-awq',
      enabled: true,
      id: '@cf/qwen/qwen1.5-7b-chat-awq',
      tokens: 32_768,
    }
  ],
  checkModel: 'gpt-4o-mini',
  description:
    'OpenAI 是全球领先的人工智能研究机构，其开发的模型如GPT系列推动了自然语言处理的前沿。OpenAI 致力于通过创新和高效的AI解决方案改变多个行业。他们的产品具有显著的性能和经济性，广泛用于研究、商业和创新应用。',
  enabled: true,
  id: 'openai',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://platform.openai.com/docs/models',
  name: 'OpenAI',
  url: 'https://openai.com',
};

export default OpenAI;
