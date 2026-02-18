import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import {
  Activity,
  Shield,
  GitBranch,
  Repeat,
  Clock,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Packet Monitoring",
    description:
      "Watch packets flow through your test sequences in real time. Inspect headers, payloads, and timing with live visualizations.",
  },
  {
    icon: Shield,
    title: "Protocol-Aware Testing",
    description:
      "Built-in understanding of TCP, UDP, WebSocket, and KCP protocols. Automatic handshake handling and protocol validation.",
  },
  {
    icon: GitBranch,
    title: "Visual Flow Orchestration",
    description:
      "Design complex test scenarios with branching, looping, and conditional logic on an intuitive drag-and-drop canvas.",
  },
  {
    icon: Repeat,
    title: "Automated Test Sequences",
    description:
      "Create reusable test sequences that run automatically. Schedule tests or trigger them from CI/CD pipelines.",
  },
  {
    icon: Clock,
    title: "Full Test History",
    description:
      "Every test execution is recorded with full context. Compare results across runs and track performance over time.",
  },
  {
    icon: Layers,
    title: "Multi-Protocol Support",
    description:
      "Mix and match protocols in a single test flow. Test complex scenarios that span TCP, UDP, and WebSocket connections.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <div className="relative flex h-5 w-5 items-center justify-center">
              <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" />
              <div className="relative h-3.5 w-3.5 rounded-full bg-black" />
            </div>
            <AnimatedGradientText className="text-sm font-medium">
              Features
            </AnimatedGradientText>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            More Than{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Packet Testing
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            FlowPacket provides a comprehensive suite of tools for designing,
            testing, and analyzing transport-layer communications.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-teal-500/30 hover:bg-white/[0.04]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-teal-500/30 group-hover:bg-teal-500/10">
                <feature.icon className="h-6 w-6 text-neutral-400 transition-colors group-hover:text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
