"use client";

import { useLocale } from "@/lib/i18n";

export default function Philosophy() {
  const { t } = useLocale();

  return (
    <section id="philosophy" className="py-20 sm:py-24 bg-bg-light text-text-main relative overflow-hidden">
      {/* Background Watermark */}
      <div
        aria-hidden="true"
        className="absolute -top-12 left-0 pointer-events-none select-none z-0 opacity-[0.03] overflow-hidden"
      >
        <span className="font-display font-black text-[16vw] uppercase tracking-widest text-primary whitespace-nowrap">
          BIOMECHANICS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header Block */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-bold block">
            {t("philosophy.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold leading-tight text-primary">
            {t("philosophy.title") as string}
          </h2>
        </div>

        {/* 2-Column Content + Photo Cluster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 2-Photo Overlapped Cluster */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-border-light group">
              <img
                src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/66a8ce4cf2f9e76340956062_1440_how-works-bg.webp"
                alt="Діагностика Symmetrica у Львові"
                className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("img-fallback");
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded bg-primary/80 backdrop-blur-md border border-white/10">
                <p className="font-display font-bold text-sm text-white">Діагностичний кабінет Symmetrica</p>
                <p className="text-[11px] font-mono text-white/70">вул. Стрийська, 45, м. Львів · Vatech 3D Scanner</p>
              </div>
            </div>

            {/* Overlapped Secondary Photo Frame */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 z-20 w-48 sm:w-56 rounded-lg overflow-hidden border-2 border-white shadow-2xl hidden sm:block">
              <img
                src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b432fc699b062b9f6c568a_feedback-bg.webp"
                alt="CAD/CAM лабораторія"
                className="w-full h-36 object-cover"
                loading="lazy"
              />
              <div className="bg-primary text-white p-2 text-[10px] font-mono border-t border-white/10">
                Symmetrica Tech CAD/CAM
              </div>
            </div>
          </div>

          {/* Right Column: Copy, Pull Quote, Doctor Caption & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base text-text-muted leading-relaxed font-body">
              <p>{t("philosophy.paragraph1") as string}</p>
              <p>{t("philosophy.paragraph2") as string}</p>
            </div>

            {/* Oversized Statement / Pull Quote */}
            <div className="p-6 rounded-r-xl border-l-2 border-accent bg-accent/5 space-y-2">
              <p className="font-display italic text-lg sm:text-xl text-primary leading-snug">
                {t("philosophy.statement") as string}
              </p>
              <p className="text-xs font-mono text-accent font-semibold uppercase tracking-wider">
                — Андрій Іванців, засновник та головний ортопед Symmetrica
              </p>
            </div>

            {/* 3-Stat Numerals Row */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-border-light text-center sm:text-left">
              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-primary block tabular-nums">
                  13 років
                </span>
                <span className="text-[11px] font-mono text-text-muted uppercase">Клінічної практики</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-primary block tabular-nums">
                  63 400+
                </span>
                <span className="text-[11px] font-mono text-text-muted uppercase">Пацієнтів</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-primary block tabular-nums">
                  0.05 мм
                </span>
                <span className="text-[11px] font-mono text-text-muted uppercase">Точність шаблонів</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 text-xs font-mono">
              <span className="text-text-muted">Персональний супровід сервіс-менеджера</span>
              <a href="#services" className="font-bold text-accent hover:underline">
                Прейскурант послуг —
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
