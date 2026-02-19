export const zh = {
  // Navbar
  nav: {
    features: "功能特性",
    resources: "资源",
    editor: "编辑器",
    launchApp: "启动应用",
  },

  // Hero
  hero: {
    badge: "公测进行中",
    title: "轻而易举的编排",
    titleHighlight: "游戏协议",
    titleEnd: "测试用例",
    subtitle:
      "FlowPacket 是一款专为游戏服务器设计的可视化协议测试工具。导入 Proto 文件，在画布上拖拽消息节点并连线编排，一键执行多步骤协议测试流程。",
    githubRepo: "GitHub 仓库",
    startFree: "免费开始",
    trustedBy: "已获得",
    trustedByEnd: "位工程师信赖",
    editorTitle: "FlowPacket 编辑器 — test-flow.fpk",
  },

  // Supported Protocols
  protocols: {
    title: "丰富的协议支持，更多即将推出",
  },

  // Process
  process: {
    badge: "工作流程",
    title: "自信地构建",
    titleHighlight: "测试流程",
    subtitle: "简洁的三步流程，设计、执行和分析你的传输层协议测试。",
    learnMore: "了解更多",
    steps: [
      {
        title: "设计",
        description:
          "在直观的可视化画布上设计你的测试流程。从协议浏览器中拖拽消息节点，配置字段参数，将它们连线组成复杂的测试序列。",
        features: ["拖拽式画布编辑器", "协议节点库", "连线映射", "流程模板"],
      },
      {
        title: "测试",
        description:
          "对真实服务器执行测试流程并获取实时结果。支持顺序执行、响应等待、超时处理、条件分支和循环控制。",
        features: [
          "一键执行",
          "实时数据包监控",
          "响应验证",
          "并行测试运行",
        ],
      },
      {
        title: "分析",
        description:
          "深入分析测试结果。了解延迟、吞吐量、丢包率等协议级指标，全面掌握通信性能数据。",
        features: ["性能指标", "延迟分析", "历史对比", "导出报告"],
      },
    ],
  },

  // Comparison
  comparison: {
    title: "什么是",
    titleHighlight: "可视化",
    titleEnd: "协议测试工具？",
    subtitle:
      "告别重复编写测试脚本。FlowPacket 让你可视化地设计、编排和执行游戏服务器的多步骤协议测试——登录 → 进入房间 → 准备 → 开始战斗 → 结算，一气呵成。",
    codeFirst: "代码优先方式",
    codeFirstTitle: "传统脚本测试",
    codeFirstPains: [
      "每次测试都要编写样板 socket 代码",
      "手动管理连接生命周期和超时",
      "无法直观概览复杂的测试序列",
      "难以共享和协作测试场景",
    ],
    visualFirst: "可视化优先方式",
    visualFirstTitle: "FlowPacket 画布测试",
    visualFirstBenefits: [
      "在画布上拖拽设计测试流程",
      "内置协议处理和连接管理",
      "可视化概览整个测试编排",
      "以可导出的项目文件共享流程",
    ],
    cta: "创建第一个测试流程",
  },

  // Features
  features: {
    badge: "功能特性",
    title: "不止是",
    titleHighlight: "协议测试",
    subtitle:
      "FlowPacket 提供一整套工具，用于设计、测试和分析游戏服务器的传输层通信。",
    items: [
      {
        title: "实时数据包监控",
        description:
          "实时观察数据包在测试序列中的流转。检查报文头、载荷和时序，通过可视化实时呈现。",
      },
      {
        title: "协议感知测试",
        description:
          "内置 TCP、UDP、WebSocket 和 KCP 协议支持。自动处理握手和协议验证。",
      },
      {
        title: "可视化流程编排",
        description:
          "在直观的拖拽画布上设计复杂的测试场景，支持分支、循环和条件逻辑。",
      },
      {
        title: "自动化测试序列",
        description:
          "创建可复用的自动化测试序列。支持定时执行或通过 CI/CD 流水线触发。",
      },
    ],
  },

  // Feature Details
  featureDetails: {
    items: [
      {
        title: "交互式画布编辑器",
        description:
          "使用基于节点的画布编辑器可视化构建测试流程。连接协议模块，设置参数，一目了然地查看整个测试架构。",
      },
      {
        title: "AI 智能助手",
        description:
          "获取测试场景的智能建议，自动补全数据包载荷，支持自然语言转测试流程。",
      },
      {
        title: "导入 Proto 文件",
        description:
          "导入 .proto 文件，自动提取消息定义，以树形结构浏览协议。FlowPacket 将其自动转化为可拖拽的消息节点。",
      },
      {
        title: "沙箱环境",
        description:
          "在沙箱协议服务器上测试，无需担心生产系统风险。安全地模拟网络状况和边界情况。",
      },
      {
        title: "撤销与重做",
        description:
          "测试流程的完整版本控制。自信地撤销错误、重做修改和分支设计。",
      },
      {
        title: "自定义协议帧",
        description:
          "支持自定义协议帧结构和二进制格式。内置 size + header + route + seq + message 帧结构，可灵活扩展。",
      },
    ],
  },

  // Testimonials
  testimonials: {
    badge: "用户评价",
    title: "先行者",
    titleHighlight: "已在此",
    subtitle:
      "加入数百位已在使用 FlowPacket 构建更好测试的工程师行列。",
    items: [
      {
        name: "张伟",
        initials: "张",
        role: "游戏后端工程师",
        review:
          "FlowPacket 彻底改变了我们测试游戏服务器协议的方式。可视化画布让设计复杂的测试序列变得轻而易举，以前需要编写数小时脚本的工作现在几分钟就搞定了。",
      },
      {
        name: "李明",
        initials: "李",
        role: "网络工程师",
        review:
          "实时数据包监控功能令人惊叹。能够实时观察数据包在测试序列中的流转，让我们的调试时间缩短了一半。",
      },
      {
        name: "王芳",
        initials: "王",
        role: "测试主管",
        review:
          "我们把 FlowPacket 集成到了 CI/CD 流水线中，效果非常好。自动化测试序列在每次提交时运行，能及早发现协议问题。",
      },
      {
        name: "陈杰",
        initials: "陈",
        role: "全栈开发者",
        review:
          "作为每天都要使用 WebSocket 连接的开发者，FlowPacket 的协议感知测试为我节省了大量时间。自动握手处理功能非常棒。",
      },
      {
        name: "刘洋",
        initials: "刘",
        role: "运维工程师",
        review:
          "沙箱环境非常适合测试网络边界情况。我们可以模拟丢包、延迟和断连，完全不用担心影响生产环境。",
      },
      {
        name: "赵鑫",
        initials: "赵",
        role: "游戏开发者",
        review:
          "从 Proto 文件直接导入消息定义是杀手级功能。导入真实的游戏协议，几秒钟就能转化为可重复执行的测试流程。",
      },
    ],
  },

  // CTA
  cta: {
    title: "游戏协议测试的",
    titleHighlight: "新时代",
    titleEnd: "现在开始",
    subtitle:
      "加入开源社区。可视化设计你的测试流程，自信地执行，交付更好的游戏。",
    button: "立即开始",
  },

  // Footer
  footer: {
    tagline: "智能游戏测试从这里开始",
    copyright: "© 2026 FlowPacket. 保留所有权利。",
    product: "产品",
    features: "功能特性",
    editor: "编辑器",
    socialMedia: "社交媒体",
    resources: "资源",
    design: "设计",
    test: "测试",
    analyze: "分析",
    legal: "法律",
    privacyPolicy: "隐私政策",
    termsConditions: "条款与条件",
  },
};
