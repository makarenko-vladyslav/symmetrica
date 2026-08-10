"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function DigitalLab() {
  const { t } = useLocale();

  const labBg = "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/66a8ce4cf2f9e76340956062_1440_how-works-bg.webp";
  const doctorWithTablet = "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b7d691b76e5f6f01875d44_awward-news-1.webp";

  return (
    <section id="lab" className="py-20 bg-bg-light text-text-main relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-primary text-white rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src={labBg}
              alt="Symmetrica Tech лабораторія"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-semibold uppercase tracking-widest font-mono">
                  SYMMETRICA TECH LABORATORY
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight">
                  Цифрова зуботехнічна лабораторія 3D CAD/CAM
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-slate-300 font-body text-sm sm:text-base leading-relaxed">
                  Пряме співробітництво лікаря-ортопеда та зуботехніка безпосередньо у клініці. Ми моделюємо та фрезеруємо керамічні корони, вініри та незнімні протези All-on-4 за технологією CAD/CAM у термін від 24 до 48 годин.
                </p>
              </Reveal>

              {/* Pull quote statement */}
              <Reveal delay={0.25} className="bg-white/5 border-l-2 border-accent p-4 rounded-r-xl">
                <blockquote className="text-sm font-display italic text-slate-200">
                  «Точність прилягання реставрацій до 10 мікрон виключає запалення ясен та забезпечує природний вигляд посмішки.»
                </blockquote>
                <div className="text-[11px] text-accent font-semibold pt-2">
                  — Андрій Іванців, засновник та провідний ортопед
                </div>
              </Reveal>

              {/* Stat row */}
              <Reveal delay={0.3}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold font-display text-accent">{t('lab.time') as string}</div>
                    <div className="text-[11px] text-slate-400">{t('lab.timeDesc') as string}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-display text-accent">{t('lab.acc') as string}</div>
                    <div className="text-[11px] text-slate-400">{t('lab.accDesc') as string}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-display text-accent">100%</div>
                    <div className="text-[11px] text-slate-400">{t('lab.ctrl') as string}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-display text-accent">{t('lab.gar') as string}</div>
                    <div className="text-[11px] text-slate-400">{t('lab.garDesc') as string}</div>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* 2-Photo Framed Cluster */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                  <img
                    src={doctorWithTablet}
                    alt="Лікар показує 3D модель пацієнту"
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-primary/90 text-[11px] text-slate-300 font-mono border-t border-white/10">
                    — Фрезерний центр CAD/CAM Symmetrica Tech, м. Львів
                  </div>
                </div>
              </Reveal>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
