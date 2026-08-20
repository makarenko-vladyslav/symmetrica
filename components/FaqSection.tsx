"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FaqSection() {
  const { t } = useLocale();
  const items = (t("faq.items") as Array<{ q: string; a: string }>) || [];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-bg-light scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest font-bold text-accent mb-2">
            {t("faq.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
            {t("faq.title") as string}
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-primary text-base sm:text-lg focus:outline-none"
                >
                  <span>{item.q}</span>
                  <span className="text-accent text-xl font-bold shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-text-muted leading-relaxed border-t border-gray-50 pt-3">
                    {item.a}
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
