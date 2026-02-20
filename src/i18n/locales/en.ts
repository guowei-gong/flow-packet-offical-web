export const en = {
  // Navbar
  nav: {
    features: "Features",
    resources: "Resources",
    editor: "Editor",
    launchApp: "Launch App",
  },

  // Hero
  hero: {
    badge: "Now in Public Beta",
    title: "Design, Test and Orchestrate your ",
    titleHighlight: "Game Protocols",
    titleEnd: "Visually",
    subtitle:
      "FlowPacket is a visual protocol testing tool designed for game servers. Import Proto files, drag message nodes onto a canvas, wire them together, and execute multi-step protocol test flows with one click.",
    githubRepo: "GitHub Repo",
    startFree: "Start for Free",
    trustedBy: "Trusted by",
    trustedByEnd: "Engineers",
    editorTitle: "FlowPacket Editor — test-flow.fpk",
  },


  // Process
  process: {
    badge: "Process",
    title: "Build test flows with",
    titleHighlight: "confidence",
    subtitle:
      "A streamlined three-step process to design, execute, and analyze your transport-layer protocol tests.",
    learnMore: "Learn more",
    steps: [
      {
        title: "Design",
        description:
          "Visually design your test flows on an intuitive canvas. Drag message nodes from the protocol browser, configure field parameters, and connect them into complex testing sequences.",
        features: [
          "Drag-and-drop canvas editor",
          "Protocol node library",
          "Connection mapping",
          "Flow templates",
        ],
      },
      {
        title: "Test",
        description:
          "Execute your test flows against real servers and get real-time results. Sequential execution with response waiting, timeout handling, conditional branching, and loop control.",
        features: [
          "One-click execution",
          "Real-time packet monitoring",
          "Response validation",
          "Parallel test runs",
        ],
      },
      {
        title: "Analyze",
        description:
          "Dive deep into test results with comprehensive analytics. Understand latency, throughput, packet loss, and protocol-specific metrics.",
        features: [
          "Performance metrics",
          "Latency analysis",
          "Historical comparison",
          "Export reports",
        ],
      },
    ],
  },

  // Comparison
  comparison: {
    title: "What is",
    titleHighlight: "Visual-First",
    titleEnd: "protocol testing tool?",
    subtitle:
      "Stop writing repetitive test scripts. FlowPacket lets you visually design, orchestrate, and execute multi-step protocol tests for game servers — login → enter room → ready → start battle → settle, all in one flow.",
    codeFirst: "Code-First Approach",
    codeFirstTitle: "Traditional Script Testing",
    codeFirstPains: [
      "Write boilerplate socket code for every test",
      "Manually manage connection lifecycle and timeouts",
      "No visual overview of complex test sequences",
      "Hard to share and collaborate on test scenarios",
      "Single test file grows endlessly, hard to locate code",
      "Commented-out code piles up to avoid rewriting sockets",
    ],
    visualFirst: "Visual-First Approach",
    visualFirstTitle: "FlowPacket Canvas Testing",
    visualFirstBenefits: [
      "Drag-and-drop test flow design on canvas",
      "Built-in protocol handling and connection management",
      "Visual overview of entire test orchestration",
      "Share flows as exportable project files",
    ],
    cta: "Create First Test Flow",
  },

  // Features
  features: {
    badge: "Features",
    title: "More Than",
    titleHighlight: "Protocol Testing",
    subtitle:
      "FlowPacket provides a comprehensive suite of tools for designing, testing, and analyzing game server transport-layer communications.",
    items: [
      {
        title: "Real-Time Packet Monitoring",
        description:
          "Watch packets flow through your test sequences in real time. Inspect headers, payloads, and timing with live visualizations.",
      },
      {
        title: "Protocol-Aware Testing",
        description:
          "Built-in understanding of TCP, UDP, WebSocket, and KCP protocols. Automatic handshake handling and protocol validation.",
      },
      {
        title: "Visual Flow Orchestration",
        description:
          "Design complex test scenarios with branching, looping, and conditional logic on an intuitive drag-and-drop canvas.",
      },
      {
        title: "Automated Test Sequences",
        description:
          "Create reusable test sequences that run automatically. Schedule tests or trigger them from CI/CD pipelines.",
      },
    ],
  },

  // Feature Details
  featureDetails: {
    items: [
      {
        title: "Interactive Canvas Editor",
        description:
          "Build test flows visually with our node-based canvas editor. Connect protocol blocks, set parameters, and see your entire test architecture at a glance.",
      },
      {
        title: "AI-Powered Assistant",
        description:
          "Get intelligent suggestions for test scenarios, auto-complete packet payloads, and natural language to test flow conversion.",
      },
      {
        title: "Import Proto Files",
        description:
          "Import .proto files, extract message definitions automatically, and browse protocols in a tree structure. FlowPacket converts them into draggable message nodes.",
      },
      {
        title: "Sandbox Environment",
        description:
          "Test against sandboxed protocol servers without risking production systems. Simulate network conditions and edge cases safely.",
      },
      {
        title: "Undo & Redo Changes",
        description:
          "Full version control for your test flows. Undo mistakes, redo changes, and branch your test designs with confidence.",
      },
      {
        title: "Custom Protocol Frame",
        description:
          "Support for custom protocol frame structures and binary formats. Built-in size + header + route + seq + message frame structure with flexible extensions.",
      },
    ],
  },

  // Testimonials
  testimonials: {
    badge: "Reviews",
    title: "The Innovators Are",
    titleHighlight: "Already Here",
    subtitle:
      "Join hundreds of engineers who are already building better tests with FlowPacket.",
    items: [
      {
        name: "Alex Cloudstar",
        initials: "AC",
        role: "Game Backend Engineer",
        review:
          "FlowPacket completely changed how we test our game server protocols. The visual canvas makes it so easy to design complex test sequences that used to take hours of scripting.",
      },
      {
        name: "Pranto Chakraborty",
        initials: "PC",
        role: "Network Engineer",
        review:
          "The real-time packet monitoring is incredible. Being able to watch packets flow through our test sequences in real time has cut our debugging time in half.",
      },
      {
        name: "Sarah Mitchell",
        initials: "SM",
        role: "QA Lead",
        review:
          "We integrated FlowPacket into our CI/CD pipeline and it's been a game changer. Automated test sequences run on every commit and catch protocol issues early.",
      },
      {
        name: "David Kim",
        initials: "DK",
        role: "Full Stack Developer",
        review:
          "As someone who works with WebSocket connections daily, FlowPacket's protocol-aware testing saves me so much time. The auto-handshake handling is brilliant.",
      },
      {
        name: "Elena Rodriguez",
        initials: "ER",
        role: "DevOps Engineer",
        review:
          "The sandbox environment is perfect for testing network edge cases. We can simulate packet loss, latency, and disconnections without touching production.",
      },
      {
        name: "Marcus Chen",
        initials: "MC",
        role: "Game Developer",
        review:
          "Importing from Proto files is a killer feature. We import real game protocols and convert them into repeatable test flows in seconds. Absolute time saver.",
      },
    ],
  },

  // CTA
  cta: {
    title: "The Next Era of",
    titleHighlight: "Game Testing",
    titleEnd: "Starts Now",
    subtitle:
      "Join the open-source movement. Design your test flows visually, execute with confidence, and ship better games.",
    button: "Start Now",
  },

  // Footer
  footer: {
    tagline: "Smart Game Testing Starts Here",
    copyright: "© 2026 FlowPacket. All rights reserved.",
    product: "Product",
    features: "Features",
    editor: "Editor",
    socialMedia: "Social Media",
    resources: "Resources",
    design: "Design",
    test: "Test",
    analyze: "Analyze",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
  },
};
