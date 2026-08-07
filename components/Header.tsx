"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#philosophy", label: t("nav.philosophy") as string },
    { href: "#services", label: t("nav.services") as string },
    { href: "#calculator", label: t("nav.calculator") as string },
    { href: "#technology", label: t("nav.technology") as string },
    { href: "#team", label: t("nav.team") as string },
    { href: "#reviews", label: t("nav.reviews") as string },
    { href: "#faq", label: t("nav.faq") as string },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-dark/95 backdrop-blur-md py-2.5 shadow-xl border-b border-border-dark text-white"
            : "bg-gradient-to-b from-bg-dark/90 via-bg-dark/50 to-transparent py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Typographic Logo Wordmark with Minimal Geometry */}
          <a href="#" className="flex items-center gap-3 group focus-visible:outline-accent">
            <div className="w-9 h-9 rounded bg-accent flex items-center justify-center font-display font-bold text-lg text-white shadow-md group-hover:bg-accent-hover transition-colors">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-widest text-white leading-none">
                SYMMETRICA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-accent font-mono font-medium mt-1">
                Dental Reconstruction
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-wider font-mono">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-accent transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Lang switcher */}
            <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/15 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setLocale("uk")}
                className={`px-2.5 py-0.5 rounded-full font-bold transition-all ${
                  locale === "uk" ? "bg-accent text-white" : "text-white/70 hover:text-white"
                }`}
              >
                UA
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-2.5 py-0.5 rounded-full font-bold transition-all ${
                  locale === "en" ? "bg-accent text-white" : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Direct Phone Link */}
            <a
              href="tel:+380674589258"
              className="text-xs font-mono font-bold tracking-wider text-white hover:text-accent transition-colors hidden md:block"
            >
              +38 (067) 458-92-58
            </a>

            {/* Primary CTA */}
            <a
              href="#contacts"
              className="px-4 py-2 rounded bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-wider font-mono font-bold transition-all shadow-md hover:shadow-lg"
            >
              {t("nav.bookCta") as string}
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="font-mono text-xs uppercase tracking-widest">
              {mobileMenuOpen ? "CLOSE" : "MENU"}
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-dark/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 text-white xl:hidden border-b border-border-dark">
          <div className="space-y-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">
              НАВІГАЦІЯ КЛІНІКИ
            </p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl text-white/90 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-border-dark/60">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white/60">Language:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => { setLocale("uk"); setMobileMenuOpen(false); }}
                  className={`px-3 py-1 rounded text-xs font-bold ${locale === "uk" ? "bg-accent text-white" : "bg-white/10 text-white/80"}`}
                >
                  УКРАЇНСЬКА
                </button>
                <button
                  type="button"
                  onClick={() => { setLocale("en"); setMobileMenuOpen(false); }}
                  className={`px-3 py-1 rounded text-xs font-bold ${locale === "en" ? "bg-accent text-white" : "bg-white/10 text-white/80"}`}
                >
                  ENGLISH
                </button>
              </div>
            </div>

            <a
              href="tel:+380674589258"
              className="block text-center py-3 rounded bg-white/10 font-mono font-bold text-accent text-xs tracking-widest uppercase hover:bg-white/15 transition-colors"
            >
              +38 (067) 458-92-58
            </a>

            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-3.5 rounded bg-accent text-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
            >
              {t("nav.bookCta") as string}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
