"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Globe } from "lucide-react";
import { useTranslation, type Locale } from "@/i18n/context";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, t, setLocale } = useTranslation();

  const toggleLocale = () => {
    setLocale(locale === "zh" ? "en" : ("zh" as Locale));
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold text-white">FlowPacket</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            {t.nav.features}
          </Link>
          <Link
            href="#resources"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            {t.nav.resources}
          </Link>
          <Link
            href="#editor"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            {t.nav.editor}
          </Link>
        </nav>

        {/* Desktop CTA + Language Switcher */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:border-white/20 hover:text-white"
          >
            <Globe className="h-3.5 w-3.5" />
            {locale === "zh" ? "EN" : "中文"}
          </button>
          <Button size="sm">{t.nav.launchApp}</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <Link
              href="#features"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.features}
            </Link>
            <Link
              href="#resources"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.resources}
            </Link>
            <Link
              href="#editor"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.editor}
            </Link>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLocale}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:border-white/20 hover:text-white"
              >
                <Globe className="h-3.5 w-3.5" />
                {locale === "zh" ? "EN" : "中文"}
              </button>
              <Button size="sm" className="flex-1">
                {t.nav.launchApp}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
