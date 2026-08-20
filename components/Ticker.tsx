"use client";

import { useLocale } from '@/lib/i18n';
import { Marquee } from '@/components/motion';

export default function Ticker() {
  const { t } = useLocale();
  const tickerItems = (t('ticker') as string[]) || [];

  return (
    <section className="bg-[hsl(162_48%_18%)] text-white py-4 border-y border-[hsl(162_35%_26%/0.5)] overflow-hidden relative select-none">
      <Marquee className="py-1">
        {tickerItems.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-6 px-6">
            <span className="text-sm font-medium tracking-wider uppercase text-white/95">
              {item}
            </span>
            <span className="text-[hsl(42_65%_52%)] text-xs">◆</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
