"use client";

import { useLocale } from "@/lib/i18n";

export default function TechAndAnesthesia() {
  const { t } = useLocale();

  return (
    <section id="technology" className="py-20 sm:py-24 bg-bg-light text-text-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-bold block">
            {t("tech.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary leading-tight">
            {t("tech.title") as string}
          </h2>
        </div>

        {/* 3 Tech Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-white border border-border-light shadow-md space-y-4">
            <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold block">
              [ 01 · CAD/CAM LAB ]
            </span>
            <h3 className="text-xl font-display font-bold text-primary">
              {t("tech.labTitle") as string}
            </h3>
            <p className="text-xs sm:text-sm font-body text-text-muted leading-relaxed">
              {t("tech.labDesc") as string}
            </p>
            <p className="text-[11px] font-mono font-bold text-accent uppercase pt-2 border-t border-border-light">
              Термін виготовлення: 1–3 дні
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white border border-border-light shadow-md space-y-4">
            <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold block">
              [ 02 · ANESTHESIA ]
            </span>
            <h3 className="text-xl font-display font-bold text-primary">
              {t("tech.anesthesiaTitle") as string}
            </h3>
            <p className="text-xs sm:text-sm font-body text-text-muted leading-relaxed">
              {t("tech.anesthesiaDesc") as string}
            </p>
            <p className="text-[11px] font-mono font-bold text-accent uppercase pt-2 border-t border-border-light">
              Кардіомоніторинг Mindray
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white border border-border-light shadow-md space-y-4">
            <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold block">
              [ 03 · SWISS GBT ]
            </span>
            <h3 className="text-xl font-display font-bold text-primary">
              {t("tech.gbtTitle") as string}
            </h3>
            <p className="text-xs sm:text-sm font-body text-text-muted leading-relaxed">
              {t("tech.gbtDesc") as string}
            </p>
            <p className="text-[11px] font-mono font-bold text-accent uppercase pt-2 border-t border-border-light">
              Оригінальний AirFlow Prophylaxis Master
            </p>
          </div>
        </div>

        {/* Real Client Photo Showcase Panel */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border-light">
          <img
            src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b432fc699b062b9f6c568a_feedback-bg.webp"
            alt="Центр Symmetrica Tech та хірургія"
            className="w-full h-[360px] sm:h-[460px] object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement?.classList.add("img-fallback");
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent p-8 sm:p-12 flex items-center">
            <div className="max-w-xl text-white space-y-4">
              <span className="px-3 py-1 rounded bg-accent/20 text-accent text-[11px] font-mono uppercase font-bold tracking-widest">
                SYMMETRICA STERILIZATION STANDARD
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight">
                3-рівнева система стерилізації та інфекційної безпеки
              </h3>
              <p className="text-xs sm:text-sm font-body text-white/80 leading-relaxed">
                Передстерилізаційне ультразвукове очищення в розчині Корзолекс (Німеччина), автоклавування класу B та одноразові герметичні крафт-пакети гарантують 100% інфекційний захист.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
