"use client";

import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const navLinks = [
    { href: '#services', label: String(t('nav.services')) },
    { href: '#allOn4', label: String(t('nav.allOn4')) },
    { href: '#lab', label: String(t('nav.lab')) },
    { href: '#calculator', label: String(t('nav.calculator')) },
    { href: '#team', label: String(t('nav.team')) },
    { href: '#cases', label: String(t('nav.cases')) },
    { href: '#faq', label: String(t('nav.faq')) },
    { href: '#contacts', label: String(t('nav.contacts')) },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[hsl(162_55%_8%/0.95)] backdrop-blur-md py-3 shadow-lg border-b border-[hsl(162_35%_26%/0.4)] text-white'
            : 'bg-gradient-to-b from-[hsl(162_55%_8%/0.8)] to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#" className="group flex items-center gap-3">
            <img 
              src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/664f346033a636ff1febebae_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D1%8}}-copy.svg" 
              alt="SYMMETRICA" 
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/80 hover:text-white transition-colors py-1 relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[hsl(155_75%_38%)] after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Locale Switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLocale('uk')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  locale === 'uk'
                    ? 'bg-[hsl(155_75%_38%)] text-white shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                UA
              </button>
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  locale === 'en'
                    ? 'bg-[hsl(155_75%_38%)] text-white shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Phone */}
            <a
              href="tel:+380674589247"
              className="hidden sm:inline-flex items-center gap-2 text-xs lg:text-sm font-semibold tracking-wide text-[hsl(42_65%_52%)] hover:text-white transition-colors border border-[hsl(42_65%_52%/0.4)] hover:border-white px-3 py-1.5 rounded-full"
            >
              +380 67 458-92-47
            </a>

            {/* Primary CTA */}
            <a
              href="#contacts"
              onClick={(e) => handleNavClick(e, '#contacts')}
              className="hidden md:inline-flex items-center justify-center bg-[hsl(155_75%_38%)] hover:bg-[hsl(155_75%_32%)] text-white font-semibold text-xs lg:text-sm px-4 py-2 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              {String(t('nav.bookCta'))}
            </a>

            {/* Mobile Burger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white hover:text-[hsl(155_75%_38%)] focus:outline-none"
              aria-label={String(t('nav.toggleMenu'))}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[hsl(162_55%_8%)] text-white flex flex-col justify-between p-6 sm:p-10 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <img 
              src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/664f346033a636ff1febebae_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D1%8„.svg" 
              alt="SYMMETRICA" 
              className="h-8 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white p-2 font-mono text-2xl"
              aria-label={String(t('nav.closeMenu'))}
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-4 my-auto text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-display text-2xl sm:text-3xl text-white/90 hover:text-[hsl(155_75%_38%)] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pt-4 border-t border-white/10 text-center">
            <a
              href="tel:+380674589247"
              className="font-mono text-lg text-[hsl(42_65%_52%)] font-bold"
            >
              +380 67 458-92-47
            </a>
            <a
              href="#contacts"
              onClick={(e) => handleNavClick(e, '#contacts')}
              className="w-full py-3 bg-[hsl(155_75%_38%)] text-white font-semibold rounded-xl text-center"
            >
              {String(t('nav.bookCta'))}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
