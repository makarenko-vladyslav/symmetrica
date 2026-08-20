"use client";

import { useLocale } from "@/lib/i18n";

export default function Ticker() {
  const { t } = useLocale();
  const tickerItems = (t("ticker") as string[]) || [];

  return (
    <div className="bg-[hsl(188_85%_38%)] text-white py-3.5 overflow-hidden whitespace-nowrap shadow-md">
      <div className="flex space-x-12 animate-[marquee_25s_linear_infinite] items-center text-xs sm:text-sm font-sans uppercase tracking-widest font-semibold">
        {tickerItems.concat(tickerItems).map((item, idx) => (
          <div key={idx} className="flex items-center space-x-12 flex-shrink-0">
            <span>{item}</span>
            <span className="text-white/40">✦</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}