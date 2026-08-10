"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function SterilizationProtocol() {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-[var(--color-primary-light)] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                {String(t("sterilizationSection.kicker"))}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
                {String(t("sterilizationSection.title"))}
              </h2>
            </Reveal>

            <p className="text-base text-white/80 leading-relaxed font-light">
              {String(t("sterilizationSection.description"))}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-[var(--color-accent)] text-black font-bold flex items-center justify-center shrink-0 text-sm font-mono">
                  І
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">{String(t("sterilizationSection.step1Title"))}</h4>
                  <p className="text-xs text-white/60 mt-1">
                    {String(t("sterilizationSection.step1Desc"))}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-[var(--color-accent)] text-black font-bold flex items-center justify-center shrink-0 text-sm font-mono">
                  ІІ
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">{String(t("sterilizationSection.step2Title"))}</h4>
                  <p className="text-xs text-white/60 mt-1">
                    {String(t("sterilizationSection.step2Desc"))}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 sm:col-span-2">
                <span className="w-10 h-10 rounded-xl bg-[var(--color-accent)] text-black font-bold flex items-center justify-center shrink-0 text-sm font-mono">
                  ІІІ
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">{String(t("sterilizationSection.step3Title"))}</h4>
                  <p className="text-xs text-white/60 mt-1">
                    {String(t("sterilizationSection.step3Desc"))}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b7d0e5f2aebf317147a328_awward-image-1.webp"
                  alt="Сертифікати відповідності та стерильності Symmetrica"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
