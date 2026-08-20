
"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

export default function Services() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<string>('all');

  const items = t('services.items') as Array<{
    id: string;
    cat: string;
    title: string;
    desc: string;
    price: string;
    tag: string;
    isSignature: boolean;
    img: string;
  }>;

  const filteredItems = activeTab === 'all' 
    ? items 
    : items.filter(i => i.cat === activeTab);

  return (
    <section id="services" className="py-24 bg-bg-light text-text-main scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3 font-mono">
              {t('services.kicker') as string}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight mb-4 text-primary">
              {t('services.title') as string}
            </h2>
            <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
              {t('services.subtitle') as string}
            </p>
          </Reveal>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-primary/10">
          {[
            { key: 'all', label: t('services.tabs.all') as string },
            { key: 'surgery', label: t('services.tabs.surgery') as string },
            { key: 'aesthetics', label: t('services.tabs.aesthetics') as string },
            { key: 'gnathology', label: t('services.tabs.gnathology') as string },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeTab === tab.key
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-primary/5 text-text-muted hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dense Price/Offer List with Dotted Leaders */}
        <Stagger className="space-y-4 mb-12">
          {filteredItems.map((item) => (
            <StaggerItem key={item.id}>
              <div 
                className={`p-6 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                  item.isSignature 
                    ? 'bg-primary text-white border-accent shadow-xl' 
                    : 'bg-bg-card border-primary/10 hover:border-accent/40 shadow-sm'
                }`}
              >
                {/* Left Info */}
                <div className="flex-1 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full ${
                      item.isSignature ? 'bg-accent text-white' : 'bg-primary/5 text-accent border border-accent/20'
                    }`}>
                      {item.tag}
                    </span>
                    {item.isSignature && (
                      <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-accent-gold text-primary font-bold">
                        Флагманський протокол
                      </span>
                    )}
                  </div>

                  <h3 className={`text-xl font-display font-semibold ${item.isSignature ? 'text-white' : 'text-primary'}`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs sm:text-sm font-light mt-2 leading-relaxed ${
                    item.isSignature ? 'text-white/80' : 'text-text-muted'
                  }`}>
                    {item.desc}
                  </p>
                </div>

                {/* Right Price & CTA */}
                <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end justify-between gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-primary/10">
                  <div className="text-right">
                    <span className={`text-xs uppercase font-mono tracking-wider block ${item.isSignature ? 'text-accent' : 'text-text-muted'}`}>
                      Фіксована вартість
                    </span>
                    <span className={`text-2xl font-display font-bold font-mono tracking-tight ${
                      item.isSignature ? 'text-accent font-bold' : 'text-primary'
                    }`}>
                      {item.price}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all text-center ${
                      item.isSignature
                        ? 'bg-accent text-white hover:bg-accent/90 shadow-md'
                        : 'bg-primary/5 hover:bg-primary text-primary hover:text-white border border-primary/10'
                    }`}
                  >
                    Записатись →
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Footnote & Secondary CTA */}
        <div className="pt-6 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p className="font-light italic max-w-xl">
            {t('services.footnote') as string}
          </p>
          <a
            href="#contact"
            className="font-mono font-semibold text-accent hover:underline uppercase tracking-wider shrink-0"
          >
            {t('services.pdfCta') as string} →
          </a>
        </div>

      </div>
    </section>
  );
}
