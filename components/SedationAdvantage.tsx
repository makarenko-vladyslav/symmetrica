
"use client";

import { useLocale } from "@/lib/i18n";

interface AdvItem {
  title: string;
  desc: string;
}

export default function SedationAdvantage() {
  const { t } = useLocale();
  const sedation = t("sedation") as {
    kicker: string;
    title: string;
    lede: string;
    expertName: string;
    expertRole: string;
    expertQuote: string;
    stat1: string;
    stat1Text: string;
    stat2: string;
    stat2Text: string;
    advantages: AdvItem[];
  };

  return (
    <section id="sedation" className="py-24 bg-[hsl(210_20%_98%)] border-t border-[hsl(210_15%_90%)] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[hsl(188_85%_38%)] mb-3">
            {sedation.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[hsl(210_30%_14%)] leading-tight mb-4">
            {sedation.title}
          </h2>
          <p className="text-base sm:text-lg font-body text-[hsl(210_15%_45%)] leading-relaxed">
            {sedation.lede}
          </p>
        </div>

        {/* Expert Quote Banner + 2 Photos Cluster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center bg-white p-8 rounded-2xl border border-[hsl(210_15%_88%)] shadow-sm">
          {/* Photo Cluster */}
          <div className="lg:col-span-5 relative h-72 sm:h-80 w-full rounded-xl overflow-hidden bg-slate-100">
            <img
              src="https://cdn.prod.website-files.com/65b82f4efc1dcbcde2d4e2c5/6922f46f4ffa72d4d7099cfb_bigan-removebg-preview.webp"
              alt={sedation.expertName}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-4 left-4 bg-[hsl(205_45%_12%)] text-white p-3 rounded text-xs font-sans">
              <p className="font-bold">{sedation.expertName}</p>
              <p className="text-white/70 text-[10px]">{sedation.expertRole}</p>
            </div>
          </div>

          {/* Quote and Stats */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl font-serif italic text-[hsl(210_30%_14%)] leading-relaxed">
              {sedation.expertQuote}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[hsl(210_15%_90%)] text-center sm:text-left">
              <div>
                <p className="text-3xl font-serif font-bold text-[hsl(188_85%_38%)] font-tabular">{sedation.stat1}</p>
                <p className="text-xs font-body text-[hsl(210_15%_45%)] mt-1">{sedation.stat1Text}</p>
              </div>
              <div className="border-l border-[hsl(210_15%_90%)] pl-4">
                <p className="text-3xl font-serif font-bold text-[hsl(188_85%_38%)] font-tabular">{sedation.stat2}</p>
                <p className="text-xs font-body text-[hsl(210_15%_45%)] mt-1">{sedation.stat2Text}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2x2 Clean Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sedation.advantages.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-[hsl(210_15%_88%)] shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-[hsl(188_85%_38%/0.1)] flex items-center justify-center text-[hsl(188_85%_38%)] font-sans font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-serif font-bold text-[hsl(210_30%_14%)]">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm font-body text-[hsl(210_15%_45%)] leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
