"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function SedationUnit() {
  const { t } = useLocale();

  const sedationPhoto = "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/6672951cee92d9a2f93e9211_%D0%A4%D0%BE%D1%82%D0%BE%203.webp";
  const doctorAnesthesiologist = "https://cdn.prod.website-files.com/65b82f4efc1dcbcde2d4e2c5/6922f46f4ffa72d4d7099cfb_bigan-removebg-preview.webp";

  return (
    <section id="sedation" className="py-20 bg-primary text-white relative overflow-hidden">
      
      {/* Background Decorative Watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[14vw] font-display font-bold text-white/[0.02] pointer-events-none select-none whitespace-nowrap z-0 uppercase tracking-widest">
        SEDATION
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs uppercase tracking-widest font-semibold font-mono">
                КЛЮЧОВА ПЕРЕВАГА SYMMETRICA
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight">
                Лікування уві сні з власною анестезіологічною службою
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-slate-300 font-body text-base leading-relaxed">
                Центр Symmetrica має офіційну ліцензію МОЗ України №582910 на проведення загальної анестезії та седації для дітей і дорослих. Ми не залучаємо сторонніх підрядників — лікування супроводжує наша штатна команда анестезіологів.
              </p>
            </Reveal>

            {/* List of Safety Guarantees */}
            <Reveal delay={0.3}>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-accent font-bold text-sm mb-1 font-display">{t('sedation.licTitle') as string}</div>
                  <div className="text-xs text-slate-300">{t('sedation.licDesc') as string}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-accent font-bold text-sm mb-1 font-display">{t('sedation.monTitle') as string}</div>
                  <div className="text-xs text-slate-300">{t('sedation.monDesc') as string}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-accent font-bold text-sm mb-1 font-display">{t('sedation.docTitle') as string}</div>
                  <div className="text-xs text-slate-300">{t('sedation.docDesc') as string}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-accent-gold font-bold text-sm mb-1 font-display">{t('sedation.wakeTitle') as string}</div>
                  <div className="text-xs text-slate-300">{t('sedation.wakeDesc') as string}</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4} className="pt-2">
              <a
                href="#booking"
                className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all min-h-[44px] flex items-center justify-center w-fit"
              >
                Консультація анестезіолога →
              </a>
            </Reveal>
          </div>

          {/* Right Image / Card Column */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/5 p-4">
                <img
                  src={sedationPhoto}
                  alt="Лікування під седацією у Symmetrica"
                  className="w-full h-80 object-cover rounded-2xl filter brightness-90"
                  loading="lazy"
                />

                {/* Overlaid Doctor Card */}
                <div className="mt-4 bg-primary-light border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                  <img
                    src={doctorAnesthesiologist}
                    alt="Олександр Біган"
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent shrink-0"
                  />
                  <div className="text-xs space-y-1">
                    <div className="font-bold text-white font-display text-sm">{t('sedation.name') as string}</div>
                    <div className="text-accent font-medium">{t('sedation.role') as string}</div>
                    <div className="text-slate-400 font-body">{t('sedation.spec') as string}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
