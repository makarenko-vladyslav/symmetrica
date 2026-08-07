"use client";

interface InterstitialTickerProps {
  items: string[];
}

export function InterstitialTicker({ items }: InterstitialTickerProps) {
  return (
    <div className="w-full py-3 bg-bg-dark text-white border-y border-border-dark overflow-hidden relative">
      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap text-xs font-mono uppercase tracking-[0.2em] text-accent font-semibold">
        {items.concat(items).map((item, idx) => (
          <span key={idx} className="flex items-center gap-10">
            <span>{item}</span>
            <span className="text-white/20">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}

interface InterstitialStatementProps {
  quote: string;
  source: string;
}

export function InterstitialStatement({ quote, source }: InterstitialStatementProps) {
  return (
    <div className="py-12 bg-primary-light/30 border-y border-border-dark text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <p className="font-display text-xl sm:text-2xl italic text-white/90 max-w-3xl mx-auto leading-snug">
          «{quote}»
        </p>
        <p className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          — {source}
        </p>
      </div>
    </div>
  );
}

interface InterstitialHairlineProps {
  label: string;
}

export function InterstitialHairline({ label }: InterstitialHairlineProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.25em] text-text-muted">
        <div className="h-[1px] flex-grow bg-border-light" />
        <span>{label}</span>
        <div className="h-[1px] flex-grow bg-border-light" />
      </div>
    </div>
  );
}
