"use client";

import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { label: t('nav.services') as string, href: '#services' },
    { label: t('nav.lab') as string, href: '#lab' },
    { label: t('nav.sedation') as string, href: '#sedation' },
    { label: t('nav.calculator') as string, href: '#calculator' },
    { label: t('nav.team') as string, href: '#team' },
    { label: t('nav.cases') as string, href: '#cases' },
    { label: t('nav.faq') as string, href: '#faq' },
    { label: t('nav.contact') as string, href: '#contact' },
  ];

  const logoUrl = "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/664f346033a636ff1febebae_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.svg";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="relative z-10 flex items-center shrink-0 py-2">
            <img
              src={logoUrl}
              alt="Symmetrica"
              className="h-9 sm:h-10 w-auto object-contain brightness-0 invert"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 text-xs font-semibold uppercase tracking-wider text-slate-200">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-accent transition-colors duration-200 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:+380674589247"
              className="text-xs lg:text-sm font-bold text-white hover:text-accent transition-colors tracking-tight py-2 min-h-[44px] flex items-center"
            >
              +380 (67) 458-92-47
            </a>

            <div className="flex bg-white/10 backdrop-blur-sm rounded-md p-0.5 border border-white/15">
              <button
                onClick={() => setLocale('uk')}
                className={`px-2 py-1.5 text-[10px] font-bold rounded transition-all min-h-[44px] flex items-center ${
                  locale === 'uk' ? 'bg-accent text-white shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale('en')}
                className={`px-2 py-1.5 text-[10px] font-bold rounded transition-all min-h-[44px] flex items-center ${
                  locale === 'en' ? 'bg-accent text-white shadow' : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#booking"
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent-hover text-white rounded-lg shadow-md transition-all duration-200 min-h-[44px] flex items-center justify-center"
            >
              {t('nav.bookBtn') as string}
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden px-4 py-2.5 border border-white/20 rounded-md text-xs uppercase tracking-widest font-bold text-white hover:text-accent min-h-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? 'ЗАКРИТИ' : 'МЕНЮ'}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 pt-28 text-white xl:hidden">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-accent font-bold">
              Symmetrica — Львів
            </p>
            <nav className="flex flex-col space-y-3 text-lg font-display font-medium">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-accent transition-colors border-b border-white/10 py-2 min-h-[44px] flex items-center"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/10">
            <a
              href="tel:+380674589247"
              className="block text-base font-bold text-accent py-2 min-h-[44px] flex items-center"
            >
              +380 (67) 458-92-47
            </a>
            <p className="text-xs text-slate-400">{t('header.address') as string}</p>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex bg-white/10 rounded-md p-1">
                <button
                  onClick={() => { setLocale('uk'); setMobileMenuOpen(false); }}
                  className={`px-3 py-2 text-xs font-bold rounded min-h-[44px] flex items-center ${locale === 'uk' ? 'bg-accent text-white' : 'text-slate-300'}`}
                >
                  UA
                </button>
                <button
                  onClick={() => { setLocale('en'); setMobileMenuOpen(false); }}
                  className={`px-3 py-2 text-xs font-bold rounded min-h-[44px] flex items-center ${locale === 'en' ? 'bg-accent text-white' : 'text-slate-300'}`}
                >
                  EN
                </button>
              </div>

              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-3 text-xs font-bold uppercase tracking-wider bg-accent text-white rounded-lg shadow-md min-h-[44px] flex items-center justify-center"
              >
                {t('nav.bookBtn') as string}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
