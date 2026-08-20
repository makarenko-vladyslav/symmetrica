"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  price: number;
  unit: string;
  badge: string;
  description: string;
}

export default function Services() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = (t('services.categories') as Record<string, string>) || {};
  const items = (t('services.items') as ServiceItem[]) || [];
  const fromText = String(t('services.from') || 'від');
  const bookText = String(t('services.book') || 'Записатися ↗');

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const formatMoney = (n: number) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-[hsl(150_15%_97%)] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12 text-left">
          <div className="text-xs uppercase tracking-[0.25em] font-bold text-[hsl(155_75%_38%)]">
            {String(t('services.kicker'))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[hsl(162_40%_12%)] leading-tight">
            {String(t('services.title'))}
          </h2>
          <p className="text-base sm:text-lg text-[hsl(162_15%_42%)] max-w-3xl font-light">
            {String(t('services.description'))}
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 pt-6">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                  activeCategory === key
                    ? 'bg-[hsl(162_48%_18%)] text-white shadow-md'
                    : 'bg-white text-[hsl(162_40%_12%)] hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Price Rows */}
        <div className="flex flex-col gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-white rounded-2xl border border-gray-200/80 hover:border-[hsl(155_75%_38%/0.5)] transition-all shadow-sm hover:shadow-md flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-gray-100 pb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[hsl(162_40%_12%)]">
                    {item.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-[hsl(150_20%_93%)] text-[hsl(162_48%_18%)] text-xs font-semibold">
                    {item.badge}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 self-start sm:self-auto text-right">
                  <span className="text-xs text-[hsl(162_15%_42%)] uppercase font-sans">{fromText}</span>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-[hsl(155_75%_38%)]">
                    {formatMoney(item.price)}
                  </span>
                  <span className="text-xs font-semibold text-[hsl(162_15%_42%)]">
                    {item.unit}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-9 text-sm text-[hsl(162_15%_42%)] leading-relaxed font-light">
                  <p className="font-medium text-[hsl(162_40%_12%)] mb-1">{item.subtitle}</p>
                  <p>{item.description}</p>
                </div>
                <div className="md:col-span-3 flex justify-start md:justify-end pt-2 md:pt-0">
                  <a
                    href="#contacts"
                    className="inline-flex items-center justify-center w-full md:w-auto px-5 py-2.5 rounded-xl bg-[hsl(162_48%_18%)] hover:bg-[hsl(155_75%_38%)] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    {bookText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}