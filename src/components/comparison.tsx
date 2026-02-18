"use client";

import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/context";

export function Comparison() {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            {t.comparison.title}{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {t.comparison.titleHighlight}
            </span>{" "}
            {t.comparison.titleEnd}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            {t.comparison.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Code-First Column */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-sm text-red-400">
              <X className="h-3.5 w-3.5" />
              {t.comparison.codeFirst}
            </div>
            <h3 className="text-xl font-semibold text-neutral-300">
              {t.comparison.codeFirstTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {t.comparison.codeFirstPains.map((pain) => (
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
                <span className="text-green-400">
                  &apos;test_packet&apos;
                </span>
                );
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
              {t.comparison.visualFirst}
            </div>
            <h3 className="text-xl font-semibold text-white">
              {t.comparison.visualFirstTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {t.comparison.visualFirstBenefits.map((benefit) => (
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
            {t.comparison.cta}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
