"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const meta = t("meta") as Record<string, string>;
  const nav = t("nav") as Record<string, string>;
  const headerStrings = t("header") as Record<string, string>;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#diagnostics", label: nav.diagnostics },
    { href: "#services", label: nav.services },
    { href: "#calculator", label: nav.calculator },
    { href: "#sedation", label: nav.sedation },
    { href: "#team", label: nav.team },
    { href: "#gallery", label: nav.gallery },
    { href: "#faq", label: nav.faq },
    { href: "#contacts", label: nav.contacts },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(205_45%_12%/0.95)] backdrop-blur-md shadow-lg py-3 border-b border-[hsl(188_85%_38%/0.2)]"
          : "bg-gradient-to-b from-[hsl(205_45%_10%/0.8)] to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Real Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/symmetrica/media/1557f414372216b6.svg"
            alt={meta.brand || "Symmetrica"}
            className="h-8 sm:h-10 w-auto object-contain brightness-0 invert"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm text-white/90">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[hsl(188_85%_48%)] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Phone + Language + CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={`tel:${meta.phone}`}
            className="text-white font-medium text-sm hover:text-[hsl(188_85%_48%)] transition-colors whitespace-nowrap"
          >
            {meta.phoneFormatted}
          </a>

          <div className="flex items-center border border-white/20 rounded-full px-2 py-0.5 text-xs text-white">
            <button
              onClick={() => setLocale("uk")}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                locale === "uk" ? "bg-[hsl(188_85%_38%)] font-bold" : "opacity-70 hover:opacity-100"
              }`}
            >
              UA
            </button>
            <span className="opacity-30">|</span>
            <button
              onClick={() => setLocale("en")}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                locale === "en" ? "bg-[hsl(188_85%_38%)] font-bold" : "opacity-70 hover:opacity-100"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contacts"
            className="bg-[hsl(188_85%_38%)] hover:bg-[hsl(188_90%_30%)] text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-md transition-colors shadow-md"
          >
            {nav.cta}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-3 lg:hidden">
          <div className="flex items-center border border-white/20 rounded-full px-2 py-0.5 text-xs text-white">
            <button
              onClick={() => setLocale("uk")}
              className={`px-1.5 py-0.5 rounded ${
                locale === "uk" ? "bg-[hsl(188_85%_38%)] font-bold" : "opacity-70"
              }`}
            >
              UA
            </button>
            <span className="opacity-30">|</span>
            <button
              onClick={() => setLocale("en")}
              className={`px-1.5 py-0.5 rounded ${
                locale === "en" ? "bg-[hsl(188_85%_38%)] font-bold" : "opacity-70"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label={headerStrings.toggleMobileMenu}
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.293 5.293a1 1 0 011.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 011.414-1.414L12 10.586l6.293-6.293z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[hsl(205_45%_10%)] text-white z-40 p-6 flex flex-col justify-between lg:hidden overflow-y-auto">
          <nav className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-white/90 hover:text-[hsl(188_85%_48%)] py-2 border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 pb-8 border-t border-white/10 flex flex-col space-y-4">
            <a
              href={`tel:${meta.phone}`}
              className="text-xl font-bold text-[hsl(188_85%_48%)] text-center"
            >
              {meta.phoneFormatted}
            </a>
            <p className="text-xs text-white/60 text-center">{meta.address}</p>
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[hsl(188_85%_38%)] text-white text-center font-bold py-3.5 rounded-md uppercase tracking-wider text-sm"
            >
              {nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
