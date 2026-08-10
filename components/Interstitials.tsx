"use client";

export function LabeledHairline({ label }: { label: string }) {
  return (
    <div className="bg-primary text-white py-4 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-400 uppercase">
        <div className="h-px bg-white/15 flex-1 mr-4" />
        <span>{label}</span>
        <div className="h-px bg-white/15 flex-1 ml-4" />
      </div>
    </div>
  );
}

export function StatementBand({ text }: { text: string }) {
  return (
    <div className="bg-bg-light border-y border-border-light py-8 text-center px-4">
      <div className="max-w-4xl mx-auto text-lg sm:text-xl font-display italic text-primary">
        {text}
      </div>
    </div>
  );
}

export function WatermarkStrip({ text }: { text: string }) {
  return (
    <div className="bg-primary py-6 overflow-hidden select-none border-y border-white/10">
      <div className="text-center font-display font-bold text-white/10 text-xl sm:text-3xl tracking-widest uppercase whitespace-nowrap">
        {text}
      </div>
    </div>
  );
}

export function TrustHairline({ text }: { text: string }) {
  return (
    <div className="bg-bg-card py-5 border-y border-border-light text-center text-xs font-mono text-slate-500 uppercase tracking-widest">
      {text}
    </div>
  );
}
