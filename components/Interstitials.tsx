
"use client";

export function InterstitialStatement() {
  return (
    <div className="bg-[hsl(185_85%_36%/0.12)] border-y border-[hsl(185_85%_36%/0.25)] py-8 text-[hsl(210_50%_12%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-[hsl(185_85%_36%)] uppercase block mb-2">
          SYMMETRICA CLINICAL PROTOCOL
        </span>
        <p className="text-lg sm:text-2xl font-display font-semibold italic max-w-4xl mx-auto leading-snug">
          «Власна CAD/CAM лабораторія Symmetrica Tech гарантує виготовлення мікроортопедичних реставрацій за 1–3 дні з анатомічним контролем якості»
        </p>
      </div>
    </div>
  );
}

export function InterstitialHairline() {
  return (
    <div className="bg-[hsl(195_25%_98%)] py-6 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[0.65rem] font-semibold tracking-widest text-[hsl(210_15%_45%)] uppercase font-mono">
        <span>VATECH 3D CT SCANNING</span>
        <span className="hidden sm:inline">·</span>
        <span className="hidden sm:inline">SWISS GBT PROTOCOL</span>
        <span>·</span>
        <span>MOH UKRAINE LICENSE №582914</span>
      </div>
    </div>
  );
}

export function InterstitialWatermark() {
  return (
    <div className="bg-[hsl(210_50%_12%)] py-10 overflow-hidden text-white/5 relative select-none pointer-events-none">
      <div className="text-[12vw] font-display font-black uppercase text-center leading-none tracking-tighter whitespace-nowrap">
        REHABILITATION
      </div>
    </div>
  );
}
