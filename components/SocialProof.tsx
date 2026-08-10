"use client";

import { useLocale } from '@/lib/i18n';
import { Marquee, Reveal } from '@/components/motion';

export default function SocialProof() {
  const { t } = useLocale();

  const proofItems = [
    "ВЛАСНА АНЕСТЕЗІОЛОГІЧНА СЛУЖБА",
    "3D КТ ДІАГНОСТИКА",
    "ВСІ ЗУБИ ЗА 24 ГОДИНИ (ALL-ON-4)",
    "ВЛАСНА ЛАБОРАТОРІЯ SYMMETRICA TECH",
    "ІМПЛАНТИ STRAUMANN & MEGAGEN",
    "3-РІВНЕВА СТЕРИЛІЗАЦІЯ ІНСТРУМЕНТІВ",
    "ПОНАД 63 000 ПАЦІЄНТІВ З 2013 РОКУ",
    "СНЩС ГНАТОЛОГІЧНА РЕАБІЛІТАЦІЯ"
  ];

  const teamGroupImg = "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/681b333aa514f88b9ab5382d_%D1%84%D0%BE%D1%82%D0%BE.webp";

  return (
    <section className="bg-primary text-white py-12 border-t border-b border-white/10 overflow-hidden">
      
      {/* Ticker marquee */}
      <div className="mb-10">
        <Marquee items={proofItems} speed={30} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid md:grid-cols-3 gap-8 items-center bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-md">
            
            {/* Stat 1 */}
            <div className="text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <div className="text-3xl lg:text-4xl font-bold font-display text-accent tracking-tight">
                63,000+
              </div>
              <div className="text-xs text-slate-300 font-body leading-relaxed">
                Пролікованих пацієнтів з 2013 року у Центрі Symmetrica у Львові
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <div className="text-3xl lg:text-4xl font-bold font-display text-accent tracking-tight">
                24–48 год
              </div>
              <div className="text-xs text-slate-300 font-body leading-relaxed">
                Виготовлення високоточних керамічних реставрацій у власній цифровій лабораторії
              </div>
            </div>

            {/* Trust Certificate Thumbnail */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-full aspect-[4/3] mb-4 rounded-xl overflow-hidden bg-slate-800">
                <img
                  src={teamGroupImg}
                  alt="Команда Symmetrica"
                  className="w-full h-full object-cover shadow-md"
                />
              </div>
              <div className="text-xs space-y-1 w-full">
                <div className="font-bold text-white uppercase tracking-wider font-display">{t('social.licenseTitle') as string}</div>
                <div className="text-slate-300">{t('social.licenseDesc') as string}</div>
                <a href="#sedation" className="text-accent hover:underline font-semibold block pt-1 min-h-[44px] flex items-center justify-center md:justify-start">{t('social.certsLink') as string}</a>
              </div>
            </div>

          </div>
        </Reveal>
      </div>

    </section>
  );
}
