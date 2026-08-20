"use client";

import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  const tickerItems = (t("ticker") as string[]) || [];

  return (
    <div className="bg-primary text-white py-4 border-y border-white/10 overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap">
        {tickerItems.concat(tickerItems).map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-6 px-6 text-xs sm:text-sm font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
