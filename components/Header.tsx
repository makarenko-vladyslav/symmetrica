"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    const next = !mobileMenuOpen;
    setMobileMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--color-primary)]/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/664f346033a636ff1febebae_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg"
              alt="Symmetrica Dental Logo"
              className="h-8 sm:h-10 w-auto object-contain brightness-0 invert"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold text-white/90">
            <a href="#diagnostics" className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.diagnostics"))}
            </a>
            <a href="#services" className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.services"))}
            </a>
            <a href="#calculator" className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.calculator"))}
            </a>
            <a href="#sedation" className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.sedation"))}
            </a>
            <a href="#lab" className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.lab"))}
            </a>
            <a href="#team" className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.team"))}
            </a>
            <a href="#faq" className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.faq"))}
            </a>
          </nav>

          {/* Right Action Group */}
          <div className="hidden sm:flex items-center gap-5">
            {/* Phone as clean text link */}
            <a
              href="tel:+380674589247"
              className="text-white font-semibold text-xs tracking-wider hover:text-[var(--color-accent)] transition-colors tabular-nums"
            >
              +380 67 458 92 47
            </a>

            {/* Locale Switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/20 text-[10px] text-white tracking-widest font-bold">
              <button
                onClick={() => setLocale("uk")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  locale === "uk" ? "bg-[var(--color-accent)] text-black font-bold" : "hover:text-white/80"
                }`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  locale === "en" ? "bg-[var(--color-accent)] text-black font-bold" : "hover:text-white/80"
                }`}
              >
                EN
              </button>
            </div>

            {/* Book CTA */}
            <a
              href="#booking"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-black font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-md shadow-amber-500/20"
            >
              {String(t("nav.bookCta"))}
            </a>
          </div>

          {/* Mobile Menu Button - Typography-based */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-xs uppercase font-bold tracking-widest text-white hover:text-[var(--color-accent)] px-3 py-1.5 rounded border border-white/20"
            aria-label="Переключити меню"
          >
            {mobileMenuOpen ? "ЗАКРИТИ" : "МЕНЮ"}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-primary)] text-white flex flex-col justify-between p-8 overflow-y-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-16 border-b border-white/10 pb-6 gap-1 sm:gap-4">
            <img
              src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/664f346033a636ff1febebae_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg"
              alt="Symmetrica"
              className="h-8 w-auto brightness-0 invert"
            />
            <div className="flex items-center gap-2 bg-white/10 rounded-full p-1 text-xs">
              <button
                onClick={() => setLocale("uk")}
                className={`px-3 py-1 rounded-full font-bold ${locale === "uk" ? "bg-[var(--color-accent)] text-black" : "text-white"}`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-3 py-1 rounded-full font-bold ${locale === "en" ? "bg-[var(--color-accent)] text-black" : "text-white"}`}
              >
                EN
              </button>
            </div>
          </div>

          <nav className="flex flex-col gap-6 text-2xl font-display my-auto py-8">
            <a href="#diagnostics" onClick={closeMenu} className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.diagnostics"))}
            </a>
            <a href="#services" onClick={closeMenu} className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.services"))}
            </a>
            <a href="#calculator" onClick={closeMenu} className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.calculator"))}
            </a>
            <a href="#sedation" onClick={closeMenu} className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.sedation"))}
            </a>
            <a href="#lab" onClick={closeMenu} className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.lab"))}
            </a>
            <a href="#team" onClick={closeMenu} className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.team"))}
            </a>
            <a href="#faq" onClick={closeMenu} className="hover:text-[var(--color-accent)] transition-colors">
              {String(t("nav.faq"))}
            </a>
          </nav>

          <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
            <a href="tel:+380674589247" className="text-xl font-bold text-[var(--color-accent)] tabular-nums">
              +380 67 458 92 47
            </a>
            <p className="text-xs text-white/60">{String(t("headerAddress"))}</p>
            <a
              href="#booking"
              onClick={closeMenu}
              className="bg-[var(--color-accent)] text-black font-bold text-center py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg"
            >
              {String(t("nav.bookCta"))}
            </a>
          </div>
        </div>
      )}
    </>
  );
}