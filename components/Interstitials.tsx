"use client";

import { useLocale } from "@/lib/i18n";

export function StatementStrip() {
  const { t } = useLocale();
  const statement = (t("statementBanner") as string) || "";

  return (
    <div className="bg-[hsl(205_45%_12%)] text-white py-8 px-4 border-y border-[hsl(188_85%_38%/0.3)]">
      <div className="max-w-5xl mx-auto text-center space-y-2">
        <p className="text-[10px] font-sans uppercase tracking-[0.3em] font-bold text-[hsl(188_85%_48%)]">
          SYMMETRICA TECH PROTOCOL
        </p>
        <p className="text-base sm:text-xl font-serif italic text-white/95 leading-relaxed">
          «{statement}»
        </p>
      </div>
    </div>
  );
}

export function LabeledHairline({ labelKey, defaultLabel }: { labelKey?: string; defaultLabel: string }) {
  const { t } = useLocale();
  const label = labelKey ? (t(labelKey) as string) || defaultLabel : defaultLabel;

  return (
    <div className="relative py-6 bg-[hsl(210_20%_98%)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center px-8" aria-hidden="true">
        <div className="w-full border-t border-[hsl(210_15%_88%)]" />
      </div>
      <div className="relative bg-[hsl(210_20%_98%)] px-6 text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-[hsl(210_15%_50%)]">
        {label}
      </div>
    </div>
  );
}

export function PressRatingStrip() {
  const { t } = useLocale();
  const interstitials = t("interstitials") as Record<string, string>;

  return (
    <div className="bg-white py-6 border-b border-[hsl(210_15%_88%)] text-xs font-sans text-[hsl(210_30%_14%)]">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center space-x-3">
          <span className="font-serif font-bold text-lg text-[hsl(188_85%_38%)]">4.9 / 5.0</span>
          <span className="text-[hsl(210_15%_45%)]">{interstitials.googleRatingText}</span>
        </div>
        <div className="flex items-center space-x-6 text-[hsl(210_15%_45%)] font-semibold uppercase tracking-wider text-[11px]">
          <span>{interstitials.verifiedReviews}</span>
          <span>·</span>
          <span>{interstitials.mohLicense}</span>
          <span>·</span>
          <span>{interstitials.icuClinic}</span>
        </div>
      </div>
    </div>
  );
}
