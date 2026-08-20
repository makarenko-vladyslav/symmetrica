"use client";

import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#services', label: t('nav.services') as string },
    { href: '#calculator', label: t('nav.calculator') as string },
    { href: '#lab', label: t('nav.lab') as string },
    { href: '#tech', label: t('nav.tech') as string },
    { href: '#team', label: t('nav.team') as string },
    { href: '#cases', label: t('nav.cases') as string },
    { href: '#faq', label: t('nav.faq') as string },
    { href: '#contact', label: t('nav.contact') as string },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10 text-white'
          : 'bg-gradient-to-b from-primary/90 via-primary/60 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none py-1">
          <img
            src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/664f346033a636ff1febebae_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D1%8„.svg"
            alt="Symmetrica Dental Center"
            className="h-8 md:h-10 w-auto object-contain filter brightness-0 invert transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-wider uppercase text-white/80 hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Language Switcher */}
          <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/15 text-xs font-semibold tracking-wider">
            <button
              onClick={() => setLocale('uk')}
              className={`px-3 py-1 rounded-full transition-all ${
                locale === 'uk' ? 'bg-accent text-white shadow-sm' : 'text-white/70 hover:text-white'
              }`}
            >
              UA
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-3 py-1 rounded-full transition-all ${
                locale === 'en' ? 'bg-accent text-white shadow-sm' : 'text-white/70 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Direct Phone Link */}
          <a
            href="tel:+380674589247"
            className="text-xs font-semibold text-white/90 hover:text-accent tracking-wider transition-colors font-mono py-2"
          >
            +38 (067) 458-92-47
          </a>

          {/* Primary CTA Button */}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-accent text-white text-xs font-semibold tracking-wider uppercase hover:bg-accent/90 transition-all shadow-md hover:shadow-accent/30"
          >
            {t('nav.bookCta') as string}
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex xl:hidden items-center gap-3">
          <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/15 text-[11px] font-semibold">
            <button
              onClick={() => setLocale('uk')}
              className={`px-2 py-0.5 rounded-full ${locale === 'uk' ? 'bg-accent text-white' : 'text-white/70'}`}
            >
              UA
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-2 py-0.5 rounded-full ${locale === 'en' ? 'bg-accent text-white' : 'text-white/70'}`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-3 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider text-white hover:text-accent focus:outline-none uppercase"
            aria-label={t('nav.toggleMenu') as string}
          >
            {mobileMenuOpen ? (t('nav.closeMenu') as string) : (t('nav.toggleMenu') as string)}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-primary/98 backdrop-blur-xl flex flex-col justify-between p-6 xl:hidden overflow-y-auto">
          <nav className="flex flex-col gap-4 py-4 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display tracking-wide text-white hover:text-accent transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pt-6">
            <a
              href="tel:+380674589247"
              className="text-base font-semibold text-white/90 font-mono py-2"
            >
              +38 (067) 458-92-47
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-full bg-accent text-white font-semibold uppercase tracking-wider text-xs shadow-lg"
            >
              {t('nav.bookCta') as string}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
