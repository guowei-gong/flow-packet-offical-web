"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Activity, Shield, GitBranch, Repeat } from "lucide-react";
import { useTranslation } from "@/i18n/context";

const featureIcons = [Activity, Shield, GitBranch, Repeat];

export function Features() {
  const { t } = useTranslation();

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
              {t.features.badge}
            </AnimatedGradientText>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            {t.features.title}{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {t.features.titleHighlight}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            {t.features.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-teal-500/30 hover:bg-white/[0.04]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-teal-500/30 group-hover:bg-teal-500/10">
                  <Icon className="h-6 w-6 text-neutral-400 transition-colors group-hover:text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
