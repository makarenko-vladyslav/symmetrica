"use client";

import { useLocale } from "@/lib/i18n";

interface DiagItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function DiagnosticsTech() {
  const { t } = useLocale();
  const diag = t("diagnostics") as {
    kicker: string;
    title: string;
    lede: string;
    quote: string;
    quoteAuthor: string;
    quoteRole: string;
    stat1Num: string;
    stat1Label: string;
    stat2Num: string;
    stat2Label: string;
    stat3Num: string;
    stat3Label: string;
    techLabLabel: string;
    items: DiagItem[];
  };

  return (
    <section id="diagnostics" className="py-24 bg-[hsl(210_20%_98%)] scroll-mt-16 relative overflow-hidden">
      {/* Background Watermark Word */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-0 text-[12vw] font-serif font-black uppercase text-[hsl(210_15%_92%)] pointer-events-none select-none whitespace-nowrap z-0"
      >
        DIAGNOSTICS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layer 1: Kicker */}
        <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[hsl(188_85%_38%)] mb-3">
          {diag.kicker}
        </p>

        {/* Layer 2: Display Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[hsl(210_30%_14%)] leading-tight mb-6 max-w-3xl">
          {diag.title}
        </h2>

        {/* Layer 3: 1-2 Line Lede */}
        <p className="text-base sm:text-lg font-body text-[hsl(210_15%_45%)] leading-relaxed max-w-3xl mb-12">
          {diag.lede}
        </p>

        {/* Layer 4: Pull-Quote in Display Type + Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 p-8 bg-white rounded-2xl border border-[hsl(210_15%_88%)] shadow-sm">
          <div className="lg:col-span-7 space-y-4 border-b lg:border-b-0 lg:border-r border-[hsl(210_15%_90%)] lg:pr-8 pb-6 lg:pb-0">
            <p className="text-xl sm:text-2xl font-serif italic text-[hsl(205_45%_12%)] leading-relaxed">
              {diag.quote}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <div className="w-10 h-[2px] bg-[hsl(188_85%_38%)]" />
              <div>
                <p className="text-sm font-serif font-bold text-[hsl(210_30%_14%)]">{diag.quoteAuthor}</p>
                <p className="text-xs font-sans text-[hsl(210_15%_45%)]">{diag.quoteRole}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-3 gap-4 text-center items-center">
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[hsl(188_85%_38%)] font-tabular">{diag.stat1Num}</p>
              <p className="text-[11px] font-body text-[hsl(210_15%_45%)] mt-1">{diag.stat1Label}</p>
            </div>
            <div className="border-x border-[hsl(210_15%_90%)] px-2">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[hsl(188_85%_38%)] font-tabular">{diag.stat2Num}</p>
              <p className="text-[11px] font-body text-[hsl(210_15%_45%)] mt-1">{diag.stat2Label}</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[hsl(188_85%_38%)] font-tabular">{diag.stat3Num}</p>
              <p className="text-[11px] font-body text-[hsl(210_15%_45%)] mt-1">{diag.stat3Label}</p>
            </div>
          </div>
        </div>

        {/* Layer 5: 2x2 Diagnostics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {diag.items.map((item, index) => (
            <div
              key={item.id || index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md border border-[hsl(210_15%_88%)] overflow-hidden flex flex-col group transition-all duration-300"
            >
              <div className="relative h-56 sm:h-64 w-full bg-slate-100 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[hsl(205_45%_12%)] text-white text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded">
                  0{index + 1} PROTOCOL
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[hsl(210_30%_14%)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base font-body text-[hsl(210_15%_45%)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[hsl(210_15%_92%)] flex items-center justify-between text-xs font-sans font-bold uppercase tracking-wider text-[hsl(188_85%_38%)]">
                  <span>{diag.techLabLabel}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
