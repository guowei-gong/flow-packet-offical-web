"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/context";

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[700px] rounded-full bg-cyan-600/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          {t.cta.title}{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            {t.cta.titleHighlight}
          </span>{" "}
          {t.cta.titleEnd}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
          {t.cta.subtitle}
        </p>
        <div className="mt-10">
          <Button size="lg" className="text-base px-10">
            {t.cta.button}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
