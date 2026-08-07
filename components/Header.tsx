
"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: String(t("nav.about")) },
    { href: "#services", label: String(t("nav.services")) },
    { href: "#prices", label: String(t("nav.prices")) },
    { href: "#anesthesia", label: String(t("nav.anesthesia")) },
    { href: "#team", label: String(t("nav.team")) },
    { href: "#faq", label: String(t("nav.faq")) },
    { href: "#contacts", label: String(t("nav.contacts")) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(212_48%_9%/0.95)] backdrop-blur-md py-3 shadow-lg border-b border-white/10 text-white"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Typographic Wordmark Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[hsl(185_85%_36%)] flex items-center justify-center text-white font-bold text-base shadow-md group-hover:scale-105 transition-transform">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-bold tracking-wider uppercase leading-none">
              SYMMETRICA
            </span>
            <span className="text-[0.6rem] tracking-widest text-[hsl(185_85%_45%)] uppercase font-semibold mt-0.5">
              Львів · вул. Стрийська, 45
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[hsl(185_85%_45%)] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/15 text-xs">
            <button
              onClick={() => setLocale("uk")}
              className={`px-2.5 py-1 rounded-full font-semibold transition-all ${
                locale === "uk"
                  ? "bg-[hsl(185_85%_36%)] text-white shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
            >
              UA
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 rounded-full font-semibold transition-all ${
                locale === "en"
                  ? "bg-[hsl(185_85%_36%)] text-white shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* Direct Phone */}
          <a
            href={`tel:${String(t("nav.phone")).replace(/[^0-9+]/g, "")}`}
            className="text-xs font-bold text-white hover:text-[hsl(185_85%_45%)] transition-colors whitespace-nowrap tabular-nums"
          >
            {String(t("nav.phone"))}
          </a>

          {/* Book CTA */}
          <a
            href="#booking"
            className="px-4 py-2.5 rounded-lg bg-[hsl(185_85%_36%)] hover:bg-[hsl(185_85%_30%)] text-white text-[0.7rem] font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
          >
            {String(t("nav.bookCta"))}
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-white transition-transform ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Fullscreen Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[hsl(212_48%_9%)] z-50 flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn">
          <div className="flex flex-col gap-4 text-base font-medium pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/90 hover:text-[hsl(185_85%_45%)] py-2 border-b border-white/10 font-display text-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 flex flex-col gap-4 border-t border-white/15">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Мова сайту:</span>
              <div className="flex items-center rounded-full bg-white/10 p-1 border border-white/15 text-xs">
                <button
                  onClick={() => setLocale("uk")}
                  className={`px-3 py-1 rounded-full font-semibold ${
                    locale === "uk" ? "bg-[hsl(185_85%_36%)] text-white" : "text-white/70"
                  }`}
                >
                  UA
                </button>
                <button
                  onClick={() => setLocale("en")}
                  className={`px-3 py-1 rounded-full font-semibold ${
                    locale === "en" ? "bg-[hsl(185_85%_36%)] text-white" : "text-white/70"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <a
              href={`tel:${String(t("nav.phone")).replace(/[^0-9+]/g, "")}`}
              className="text-center py-3 rounded-xl bg-white/10 text-white font-bold text-sm tracking-wider tabular-nums"
            >
              {String(t("nav.phone"))}
            </a>

            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="text-center py-3.5 rounded-xl bg-[hsl(185_85%_36%)] text-white font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              {String(t("nav.bookCta"))}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
