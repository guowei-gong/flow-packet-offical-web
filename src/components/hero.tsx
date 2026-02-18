"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BorderBeam } from "@/components/ui/border-beam";
import { Github, Star, Play } from "lucide-react";
import { useTranslation } from "@/i18n/context";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <div className="h-[600px] w-[800px] rounded-full bg-cyan-600/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-300">
          <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          {t.hero.badge}
        </div>

        {/* Main Heading */}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {t.hero.title}{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>{" "}
          {t.hero.titleEnd}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400 md:text-xl">
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="secondary" size="lg">
            <Github className="h-5 w-5" />
            {t.hero.githubRepo}
          </Button>
          <Button size="lg">
            <Play className="h-5 w-5" />
            {t.hero.startFree}
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center -space-x-3">
            {["JD", "AK", "MT", "SR", "LW"].map((initials, i) => (
              <Avatar
                key={i}
                className="h-9 w-9 border-2 border-black ring-0"
              >
                <AvatarFallback className="text-xs bg-gradient-to-br from-teal-600 to-emerald-600">
                  {initials}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-400/50 text-yellow-400/50"}`}
                />
              ))}
              <span className="ml-1 text-sm text-neutral-400">4.5/5</span>
            </div>
            <p className="text-sm text-neutral-500">
              {t.hero.trustedBy}{" "}
              <span className="text-white font-medium">400+</span>{" "}
              {t.hero.trustedByEnd}
            </p>
          </div>
        </div>

        {/* Product Screenshot Mockup */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Glow behind */}
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-cyan-600/30 via-emerald-600/30 to-cyan-600/30 animate-image-glow" />

          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/80 shadow-2xl">
            <BorderBeam size={300} duration={10} />

            {/* Mock editor UI */}
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-neutral-500">
                {t.hero.editorTitle}
              </span>
            </div>

            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
              {/* Canvas mockup with nodes and connections */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 500"
                fill="none"
              >
                {/* Connection lines */}
                <path
                  d="M200 150 C300 150, 300 250, 400 250"
                  stroke="url(#grad1)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  opacity="0.6"
                />
                <path
                  d="M200 350 C300 350, 300 250, 400 250"
                  stroke="url(#grad1)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  opacity="0.6"
                />
                <path
                  d="M500 250 C550 250, 550 200, 620 200"
                  stroke="url(#grad1)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  opacity="0.6"
                />
                <path
                  d="M500 250 C550 250, 550 300, 620 300"
                  stroke="url(#grad1)"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient
                    id="grad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Nodes */}
              <div className="absolute left-[12%] top-[20%] w-40 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                <div className="text-xs text-cyan-400 font-medium mb-1">
                  TCP Connect
                </div>
                <div className="text-[10px] text-neutral-500">
                  Host: 192.168.1.1
                </div>
                <div className="text-[10px] text-neutral-500">Port: 8080</div>
              </div>

              <div className="absolute left-[12%] top-[55%] w-40 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                <div className="text-xs text-emerald-400 font-medium mb-1">
                  UDP Send
                </div>
                <div className="text-[10px] text-neutral-500">
                  Payload: 0xFF01
                </div>
                <div className="text-[10px] text-neutral-500">Size: 128B</div>
              </div>

              <div className="absolute left-[38%] top-[35%] w-44 rounded-lg border border-teal-500/30 bg-teal-500/10 p-3 backdrop-blur-sm">
                <div className="text-xs text-white font-medium mb-1">
                  Assert Response
                </div>
                <div className="text-[10px] text-neutral-400">
                  Status: Connected
                </div>
                <div className="text-[10px] text-neutral-400">
                  Latency: &lt; 50ms
                </div>
              </div>

              <div className="absolute right-[12%] top-[25%] w-40 rounded-lg border border-green-500/30 bg-green-500/10 p-3 backdrop-blur-sm">
                <div className="text-xs text-green-400 font-medium mb-1">
                  Log Result
                </div>
                <div className="text-[10px] text-neutral-400">
                  Output: Console
                </div>
              </div>

              <div className="absolute right-[12%] top-[50%] w-40 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-3 backdrop-blur-sm">
                <div className="text-xs text-yellow-400 font-medium mb-1">
                  Repeat x5
                </div>
                <div className="text-[10px] text-neutral-400">
                  Interval: 100ms
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
