"use client";

import { useLocale } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLocale();
  const items = (t("testimonials.items") as Array<{ text: string; author: string; tag: string }>) || [];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-bold text-accent mb-2">
            {t("testimonials.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
            {t("testimonials.title") as string}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-bg-light border border-gray-100 flex flex-col justify-between"
            >
              <p className="text-base text-text-main leading-relaxed italic mb-6">
                «{item.text}»
              </p>
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <span className="font-display font-bold text-primary text-base">
                  {item.author}
                </span>
                <span className="text-xs font-semibold text-accent px-2.5 py-1 bg-accent/10 rounded">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
