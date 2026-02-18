import {
  MousePointerClick,
  Sparkles,
  FileInput,
  Box,
  Undo2,
  Languages,
} from "lucide-react";

const details = [
  {
    icon: MousePointerClick,
    title: "Interactive Canvas Editor",
    description:
      "Build test flows visually with our node-based canvas editor. Connect protocol blocks, set parameters, and see your entire test architecture at a glance.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Assistant",
    description:
      "Get intelligent suggestions for test scenarios, auto-complete packet payloads, and natural language to test flow conversion.",
  },
  {
    icon: FileInput,
    title: "Import Existing Configs",
    description:
      "Import packet capture files, Wireshark exports, or existing test scripts. FlowPacket converts them into visual flows automatically.",
  },
  {
    icon: Box,
    title: "Sandbox Environment",
    description:
      "Test against sandboxed protocol servers without risking production systems. Simulate network conditions and edge cases safely.",
  },
  {
    icon: Undo2,
    title: "Undo & Redo Changes",
    description:
      "Full version control for your test flows. Undo mistakes, redo changes, and branch your test designs with confidence.",
  },
  {
    icon: Languages,
    title: "Protocol Dialect Awareness",
    description:
      "Support for protocol variants and custom binary formats. Define custom packet structures and let FlowPacket handle serialization.",
  },
];

export function FeatureDetails() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {details.map((detail) => (
            <div
              key={detail.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-teal-500/30 hover:bg-white/[0.04]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-teal-500/30 group-hover:bg-teal-500/10">
                <detail.icon className="h-6 w-6 text-neutral-400 transition-colors group-hover:text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold">{detail.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
