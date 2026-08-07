"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Services() {
  const { t } = useLocale();

  const [activeCategory, setActiveCategory] = useState<string>("ВСІ");

  const services = t("services.items") as Array<{
    id: string;
    category: string;
    title: string;
    price: string;
    time: string;
    description: string;
    tag: string;
    signature?: boolean;
  }>;

  const categories = ["ВСІ", "Імплантація & Хірургія", "Естетика & Ортопедія", "Анестезіологія", "Діагностика & Ортодонтія"];

  const filteredServices = Array.isArray(services)
    ? activeCategory === "ВСІ"
      ? services
      : services.filter((s) => s.category === activeCategory)
    : [];

  return (
    <section id="services" className="py-20 sm:py-24 bg-primary text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-bold block">
            {t("services.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white leading-tight">
            {t("services.title") as string}
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-body">
            {t("services.subtitle") as string}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-accent text-white font-bold"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Offer Rows with Dotted Leaders */}
        <div className="space-y-3">
          {filteredServices.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-xl transition-all border ${
                item.signature
                  ? "bg-primary-light border-accent shadow-xl"
                  : "bg-primary-light/40 hover:bg-primary-light/70 border-white/10"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                    [{item.tag}]
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Dotted Leader Line (hidden on tiny screens) */}
                <div className="hidden md:block flex-grow border-b border-dotted border-white/20 mx-4" />

                <div className="flex items-baseline gap-4 shrink-0">
                  <span className="text-xs font-mono text-white/50">
                    {item.time}
                  </span>
                  <span className="text-xl font-display font-bold text-accent tabular-nums">
                    {item.price}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-body text-white/70 mt-2 max-w-4xl leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote & Secondary CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
          <p className="max-w-2xl">{t("services.footnote") as string}</p>
          <a
            href="#contacts"
            className="px-6 py-3 rounded bg-accent hover:bg-accent-hover text-white font-bold uppercase tracking-wider transition-all shrink-0"
          >
            Замовити кошторис —
          </a>
        </div>
      </div>
    </section>
  );
}
