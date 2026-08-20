
"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

export default function TechShowcase() {
  const { t } = useLocale();
  const techItems = t('tech.items') as Array<{ name: string; desc: string; img: string }>;

  return (
    <section id="tech" className="py-24 bg-primary text-white scroll-mt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3 font-mono">
              {t('tech.kicker') as string}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight mb-4">
              {t('tech.title') as string}
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-light">
              {t('tech.subtitle') as string}
            </p>
          </Reveal>
        </div>

        {/* Grid of Diagnostic Technology */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techItems.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 flex flex-col h-full">
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-display font-medium text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
