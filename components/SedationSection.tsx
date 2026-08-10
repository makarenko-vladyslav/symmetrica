"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function SedationSection() {
  const { t } = useLocale();

  return (
    <section id="sedation" className="py-20 bg-[var(--color-primary)] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Layer Stack */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                {String(t("sedationSection.kicker"))}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-2 leading-tight">
                {String(t("sedationSection.title"))}
              </h2>
            </Reveal>

            <p className="text-base text-white/80 leading-relaxed font-light">
              {String(t("sedationSection.description"))}
            </p>

            {/* Key benefits list */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-black font-bold flex items-center justify-center shrink-0 text-xs">
                  01
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">{String(t("sedationSection.feat1Title"))}</h4>
                  <p className="text-xs text-white/60 mt-1">
                    {String(t("sedationSection.feat1Desc"))}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-black font-bold flex items-center justify-center shrink-0 text-xs">
                  02
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">{String(t("sedationSection.feat2Title"))}</h4>
                  <p className="text-xs text-white/60 mt-1">
                    {String(t("sedationSection.feat2Desc"))}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-black font-bold flex items-center justify-center shrink-0 text-xs">
                  03
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">{String(t("sedationSection.feat3Title"))}</h4>
                  <p className="text-xs text-white/60 mt-1">
                    {String(t("sedationSection.feat3Desc"))}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#booking"
                className="inline-block px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg"
              >
                Проконсультуватися з анестезіологом →
              </a>
            </div>
          </div>

          {/* Right Column Doctor Card */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-gradient-to-t from-[var(--color-bg-dark)] via-slate-800 to-slate-900">
                <img
                  src="https://cdn.prod.website-files.com/65b82f4efc1dcbcde2d4e2c5/6922f46f4ffa72d4d7099cfb_bigan-removebg-preview.webp"
                  alt="Олександр Біган — Керівник анестезіологічної служби"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] bg-black/60 px-3 py-1 rounded-full w-fit mb-2">
                    КЕРІВНИК АНЕСТЕЗІОЛОГІЧНОЇ СЛУЖБИ
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Олександр Біган
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    Лікар-анестезіолог із понад 15-річним стажем у стоматологічній анестезіології.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}