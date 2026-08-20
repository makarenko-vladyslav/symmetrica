"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function Team() {
  const { t } = useLocale();

  const doctors = t('team.members') as Array<{ name: string; role: string; img: string | null }>;

  return (
    <section id="team" className="py-24 bg-bg-light text-text-main scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3 font-mono">
              {t('team.kicker') as string}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight mb-4 text-primary">
              {t('team.title') as string}
            </h2>
            <p className="text-base sm:text-lg text-text-muted font-light">
              {t('team.subtitle') as string}
            </p>
          </Reveal>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctors.map((doc, idx) => (
            <Reveal key={idx} delay={(idx % 4) * 0.08}>
              <div className="bg-bg-card rounded-2xl overflow-hidden border border-primary/10 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
                <div className="aspect-[3/4] bg-primary/5 overflow-hidden relative">
                  {doc.img ? (
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-display text-2xl font-bold font-mono">
                      {doc.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-display font-semibold text-primary group-hover:text-accent transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-text-muted font-light mt-1">
                      {doc.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
