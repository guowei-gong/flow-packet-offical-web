import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const codeFirstPains = [
  "Write boilerplate socket code for every test",
  "Manually manage connection lifecycle and timeouts",
  "No visual overview of complex test sequences",
  "Hard to share and collaborate on test scenarios",
];

const visualFirstBenefits = [
  "Drag-and-drop test flow design on canvas",
  "Built-in protocol handling and connection management",
  "Visual overview of entire test orchestration",
  "Share flows as exportable project files",
];

export function Comparison() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            What is{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Visual-First
            </span>{" "}
            packet testing tool?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Stop writing repetitive test scripts. FlowPacket lets you visually
            design, orchestrate, and execute transport-layer tests.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Code-First Column */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-sm text-red-400">
              <X className="h-3.5 w-3.5" />
              Code-First Approach
            </div>
            <h3 className="text-xl font-semibold text-neutral-300">
              Traditional Script Testing
            </h3>
            <ul className="mt-6 space-y-4">
              {codeFirstPains.map((pain) => (
                <li key={pain} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                    <X className="h-3 w-3 text-red-400" />
                  </div>
                  <span className="text-sm text-neutral-400">{pain}</span>
                </li>
              ))}
            </ul>

            {/* Code example */}
            <div className="mt-8 rounded-lg border border-white/5 bg-black/40 p-4 font-mono text-xs text-neutral-500">
              <div>
                <span className="text-cyan-400">const</span> socket ={" "}
                <span className="text-emerald-400">net</span>.
                <span className="text-blue-400">connect</span>(8080);
              </div>
              <div>
                socket.<span className="text-blue-400">write</span>(
                <span className="text-green-400">&apos;test_packet&apos;</span>);
              </div>
              <div>
                socket.<span className="text-blue-400">on</span>(
                <span className="text-green-400">&apos;data&apos;</span>,{" "}
                <span className="text-cyan-400">
                  (d) =&gt; {"{ ... }"}
                </span>
                );
              </div>
              <div className="text-neutral-600">
                {"// repeat for every test..."}
              </div>
            </div>
          </div>

          {/* Visual-First Column */}
          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/[0.03] p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-sm text-teal-400">
              <Check className="h-3.5 w-3.5" />
              Visual-First Approach
            </div>
            <h3 className="text-xl font-semibold text-white">
              FlowPacket Canvas Testing
            </h3>
            <ul className="mt-6 space-y-4">
              {visualFirstBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20">
                    <Check className="h-3 w-3 text-teal-400" />
                  </div>
                  <span className="text-sm text-neutral-300">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Visual example */}
            <div className="mt-8 rounded-lg border border-teal-500/10 bg-black/30 p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-24 rounded border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center text-[10px] text-cyan-400">
                  TCP Connect
                </div>
                <ArrowRight className="h-4 w-4 text-teal-500/50" />
                <div className="h-10 w-24 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-[10px] text-emerald-400">
                  Send Data
                </div>
                <ArrowRight className="h-4 w-4 text-teal-500/50" />
                <div className="h-10 w-24 rounded border border-green-500/30 bg-green-500/10 flex items-center justify-center text-[10px] text-green-400">
                  Assert
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">
            Create First Test Flow
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
