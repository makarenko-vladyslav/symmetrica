
"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface ServiceItem {
  category: string;
  name: string;
  price: string;
  priceNum: number;
  desc: string;
  tag: string;
  isSignature: boolean;
  imageUrl: string;
}

export default function ServicesList() {
  const { t } = useLocale();
  const servicesData = t("services") as {
    kicker: string;
    title: string;
    lede: string;
    cat1: string;
    cat2: string;
    cat3: string;
    footnote: string;
    secondaryCta: string;
    items: ServiceItem[];
  };

  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredItems = activeCategory === "ALL"
    ? servicesData.items
    : servicesData.items.filter((item) => item.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-white border-t border-[hsl(210_15%_90%)] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layer 1: Kicker */}
        <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[hsl(188_85%_38%)] mb-3">
          {servicesData.kicker}
        </p>

        {/* Layer 2: Heading & Lede */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[hsl(210_30%_14%)] max-w-2xl">
            {servicesData.title}
          </h2>
          <p className="mt-4 md:mt-0 text-sm sm:text-base font-body text-[hsl(210_15%_45%)] max-w-md">
            {servicesData.lede}
          </p>
        </div>

        {/* Layer 3: Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[hsl(210_15%_90%)]">
          <button
            onClick={() => setActiveCategory("ALL")}
            className={`px-4 py-2 rounded text-xs font-sans uppercase tracking-wider font-bold transition-colors ${
              activeCategory === "ALL"
                ? "bg-[hsl(205_45%_12%)] text-white"
                : "bg-slate-100 text-[hsl(210_15%_45%)] hover:bg-slate-200"
            }`}
          >
            Всі напрямки ({servicesData.items.length})
          </button>
          <button
            onClick={() => setActiveCategory(servicesData.cat1)}
            className={`px-4 py-2 rounded text-xs font-sans uppercase tracking-wider font-bold transition-colors ${
              activeCategory === servicesData.cat1
                ? "bg-[hsl(205_45%_12%)] text-white"
                : "bg-slate-100 text-[hsl(210_15%_45%)] hover:bg-slate-200"
            }`}
          >
            {servicesData.cat1}
          </button>
          <button
            onClick={() => setActiveCategory(servicesData.cat2)}
            className={`px-4 py-2 rounded text-xs font-sans uppercase tracking-wider font-bold transition-colors ${
              activeCategory === servicesData.cat2
                ? "bg-[hsl(205_45%_12%)] text-white"
                : "bg-slate-100 text-[hsl(210_15%_45%)] hover:bg-slate-200"
            }`}
          >
            {servicesData.cat2}
          </button>
          <button
            onClick={() => setActiveCategory(servicesData.cat3)}
            className={`px-4 py-2 rounded text-xs font-sans uppercase tracking-wider font-bold transition-colors ${
              activeCategory === servicesData.cat3
                ? "bg-[hsl(205_45%_12%)] text-white"
                : "bg-slate-100 text-[hsl(210_15%_45%)] hover:bg-slate-200"
            }`}
          >
            {servicesData.cat3}
          </button>
        </div>

        {/* Layer 4: Structured Row Layout with Leader Lines & High Contrast */}
        <div className="divide-y divide-[hsl(210_15%_88%)] border-y border-[hsl(210_15%_88%)]">
          {filteredItems.map((srv, idx) => (
            <div
              key={idx}
              className={`py-6 sm:py-8 px-4 rounded-xl transition-all ${
                srv.isSignature
                  ? "bg-[hsl(188_85%_38%/0.06)] border-2 border-[hsl(188_85%_38%/0.4)] my-4 shadow-sm"
                  : "hover:bg-[hsl(210_20%_98%)]"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                {/* Image Thumbnail */}
                <div className="w-full md:w-44 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 relative">
                  <img
                    src={srv.imageUrl}
                    alt={srv.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {srv.isSignature && (
                    <span className="absolute top-2 left-2 bg-[hsl(188_85%_38%)] text-white text-[9px] font-sans font-bold uppercase px-2 py-0.5 rounded">
                      Signature
                    </span>
                  )}
                </div>

                {/* Name + Dotted Leader + Tabular Price */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-sans font-bold text-[hsl(188_85%_38%)]">0{idx + 1}</span>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-[hsl(210_30%_14%)]">
                        {srv.name}
                      </h3>
                      {srv.tag && (
                        <span className="hidden sm:inline-block text-[10px] uppercase font-sans font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-[hsl(210_15%_45%)]">
                          {srv.tag}
                        </span>
                      )}
                    </div>

                    {/* Price in Tabular Display Type */}
                    <div className="text-lg sm:text-xl font-serif font-bold text-[hsl(188_85%_38%)] whitespace-nowrap font-tabular">
                      {srv.price}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-body text-[hsl(210_15%_45%)] max-w-2xl leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                {/* Action Link */}
                <div className="flex-shrink-0 flex items-center justify-end">
                  <a
                    href="#contacts"
                    className="bg-[hsl(205_45%_12%)] hover:bg-[hsl(188_85%_38%)] text-white text-xs font-sans font-bold uppercase tracking-wider px-5 py-2.5 rounded transition-colors"
                  >
                    Записатися
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote & Secondary CTA */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-[hsl(210_15%_50%)]">
          <p>{servicesData.footnote}</p>
          <a
            href="#contacts"
            className="text-[hsl(188_85%_38%)] font-sans font-bold uppercase tracking-wider hover:underline"
          >
            {servicesData.secondaryCta} →
          </a>
        </div>
      </div>
    </section>
  );
}
