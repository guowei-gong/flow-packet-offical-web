import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import {
  PenTool,
  Play,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: PenTool,
    title: "Design",
    description:
      "Visually design your test flows on an intuitive canvas. Drag and drop protocol nodes, set parameters, and connect them into complex testing sequences.",
    color: "from-cyan-500 to-teal-600",
    features: [
      "Drag-and-drop canvas editor",
      "Protocol node library",
      "Connection mapping",
      "Flow templates",
    ],
  },
  {
    icon: Play,
    title: "Test",
    description:
      "Execute your test flows against real servers and get real-time results. Watch packets flow through your designed sequence with live monitoring.",
    color: "from-teal-500 to-emerald-600",
    features: [
      "One-click execution",
      "Real-time packet monitoring",
      "Response validation",
      "Parallel test runs",
    ],
  },
  {
    icon: BarChart3,
    title: "Analyze",
    description:
      "Dive deep into test results with comprehensive analytics. Understand latency, throughput, packet loss, and protocol-specific metrics.",
    color: "from-emerald-500 to-green-600",
    features: [
      "Performance metrics",
      "Latency analysis",
      "Historical comparison",
      "Export reports",
    ],
  },
];

export function Process() {
  return (
    <section id="resources" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <div className="relative flex h-5 w-5 items-center justify-center">
              <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" />
              <div className="relative h-3.5 w-3.5 rounded-full bg-black" />
            </div>
            <AnimatedGradientText className="text-sm font-medium">
              Process
            </AnimatedGradientText>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Build test flows with{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              confidence
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            A streamlined three-step process to design, execute, and analyze
            your transport-layer tests.
          </p>
        </div>

        {/* Process cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Icon */}
              <div
                className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color}`}
              >
                <step.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {step.description}
              </p>

              {/* Feature list */}
              <ul className="mt-6 space-y-2">
                {step.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-neutral-500"
                  >
                    <div className="h-1 w-1 rounded-full bg-teal-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-teal-400 transition-colors hover:text-teal-300">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
