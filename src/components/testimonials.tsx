"use client";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useTranslation } from "@/i18n/context";

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <div className="relative flex h-5 w-5 items-center justify-center">
              <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" />
              <div className="relative h-3.5 w-3.5 rounded-full bg-black" />
            </div>
            <AnimatedGradientText className="text-sm font-medium">
              {t.testimonials.badge}
            </AnimatedGradientText>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            {t.testimonials.title}{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {t.testimonials.titleHighlight}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <Card
              key={item.name}
              className="transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="mb-4 flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm leading-relaxed text-neutral-300">
                  &ldquo;{item.review}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-gradient-to-br from-teal-600 to-emerald-600 text-xs">
                      {item.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-neutral-500">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
