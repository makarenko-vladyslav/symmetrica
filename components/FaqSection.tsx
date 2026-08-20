"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqSection() {
  const { t } = useLocale();
  const faqData = t("faq") as {
    kicker: string;
    title: string;
    items: FaqItem[];
  };

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[hsl(210_20%_98%)] border-t border-[hsl(210_15%_90%)] scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[hsl(188_85%_38%)] mb-3">
            {faqData.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[hsl(210_30%_14%)]">
            {faqData.title}
          </h2>
        </div>

        {/* High-Contrast Full Width Accordion */}
        <div className="space-y-4">
          {faqData.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[hsl(210_15%_88%)] overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-lg sm:text-xl text-[hsl(210_30%_14%)]">
                    {item.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[hsl(210_20%_95%)] flex items-center justify-center font-bold text-[hsl(188_85%_38%)] flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[hsl(210_15%_92%)]">
                    <p className="text-sm sm:text-base font-body text-[hsl(210_15%_45%)] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}