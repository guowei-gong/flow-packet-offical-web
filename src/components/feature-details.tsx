"use client";

import {
  MousePointerClick,
  Sparkles,
  FileInput,
  Box,
  Undo2,
  Languages,
} from "lucide-react";
import { useTranslation } from "@/i18n/context";

const detailIcons = [
  MousePointerClick,
  Sparkles,
  FileInput,
  Box,
  Undo2,
  Languages,
];

export function FeatureDetails() {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.featureDetails.items.map((detail, index) => {
            const Icon = detailIcons[index];
            return (
              <div
                key={detail.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-teal-500/30 hover:bg-white/[0.04]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-teal-500/30 group-hover:bg-teal-500/10">
                  <Icon className="h-6 w-6 text-neutral-400 transition-colors group-hover:text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold">{detail.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {detail.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
