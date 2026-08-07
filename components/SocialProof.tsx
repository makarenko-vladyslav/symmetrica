
"use client";

export default function SocialProof() {
  const items = [
    "Офіційний договір із фіксованими гарантіями",
    "Власна анестезіологічна служба",
    "Лабораторія Symmetrica Tech",
    "3D-томографія Vatech",
    "Swiss GBT гігієна",
    "All-on-4 & All-on-6 за 24 години",
    "Digital Smile Design",
    "Понад 63 000 успішних пацієнтів",
  ];

  return (
    <div className="bg-[hsl(210_50%_12%)] py-3.5 overflow-hidden border-y border-white/10 text-white">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-[0.7rem] font-bold tracking-widest uppercase text-white/80">
        {[...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-8">
            <span>{text}</span>
            <span className="text-[hsl(185_85%_45%)] font-mono">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
