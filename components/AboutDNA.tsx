
"use client";

import { useLocale } from "@/lib/i18n";

export default function AboutDNA() {
  const { t } = useLocale();
  const pillars = (t("about.pillars") as Array<{ title: string; desc: string }>) || [];

  return (
    <section id="about" className="relative py-20 sm:py-24 bg-[hsl(195_25%_98%)] text-[hsl(210_35%_15%)] overflow-hidden">
      {/* Background Watermark Layer */}
      <div
        aria-hidden="true"
        className="absolute top-12 left-1/2 -translate-x-1/2 text-[14vw] font-display font-black text-black/[0.02] pointer-events-none select-none uppercase whitespace-nowrap z-0"
      >
        CONCEPT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layer 1 & 2: Kicker + Display Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(185_85%_36%)] block mb-3">
              {String(t("about.kicker"))}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              {String(t("about.title"))}
            </h2>

            {/* Layer 3: Body */}
            <p className="text-sm sm:text-base text-[hsl(210_15%_45%)] font-body leading-relaxed mb-6">
              {String(t("about.description"))}
            </p>

            {/* Layer 4: Pull-Quote */}
            <div className="p-5 rounded-2xl bg-white border-l-4 border-[hsl(185_85%_36%)] shadow-sm mb-6">
              <p className="text-base font-display italic font-semibold text-[hsl(210_50%_12%)] leading-snug">
                {String(t("about.quote"))}
              </p>
              <span className="text-xs text-[hsl(210_15%_45%)] mt-2 block font-body">
                — Андрій Іванців, засновник та провідний ортопед Symmetrica
              </span>
            </div>

            {/* Secondary CTA Link */}
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-xs font-bold text-[hsl(185_85%_36%)] uppercase tracking-wider hover:underline"
            >
              Ознайомитися з напрямками лікування →
            </a>
          </div>

          {/* Layer 7: 2-Photo Overlapped Cluster */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Photo */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-black/10">
                <img
                  src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/66a8ce4cf2f9e76340956062_1440_how-works-bg.webp"
                  alt="Symmetrica Center"
                  className="w-full h-[320px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Overlapped Secondary Photo */}
              <div className="absolute -bottom-8 -left-6 w-48 sm:w-56 rounded-xl overflow-hidden shadow-2xl border-2 border-white transform -rotate-3 hidden sm:block">
                <img
                  src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b82231067a84cf47b2be41_lines-consult.png"
                  alt="3D Diagnostics"
                  className="w-full h-32 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Layer 8: Photo Caption with Rule */}
            <div className="mt-12 pt-3 border-t border-gray-200 text-xs text-[hsl(210_15%_45%)] font-body">
              — Діагностичний корпус та власна CAD/CAM лабораторія у Львові
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="text-xs font-mono font-bold text-[hsl(185_85%_36%)] mb-3">
                ПРИНЦИП 0{idx + 1}
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-[hsl(210_50%_12%)]">{item.title}</h3>
              <p className="text-xs text-[hsl(210_15%_45%)] font-body leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
