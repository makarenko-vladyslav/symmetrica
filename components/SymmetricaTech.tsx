"use client";

import { useLocale } from "@/lib/i18n";

export default function SymmetricaTech() {
  const { t } = useLocale();
  const cards = (t("symmetricaTech.cards") as Array<{ title: string; desc: string }>) || [];

  return (
    <section id="lab" className="py-20 sm:py-28 bg-primary text-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-bold text-accent mb-2">
            {String(t("symmetricaTech.kicker"))}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {String(t("symmetricaTech.title"))}
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            {String(t("symmetricaTech.description"))}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors"
            >
              <div className="text-2xl font-display font-bold text-accent mb-3">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-white">
                {card.title}
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Equipment photo showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white/10">
            <img
              src="/symmetrica/media/7c9c5fd8d30c7c4b.webp"
              alt="3D CT Scan"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white/10">
            <img
              src="/symmetrica/media/fa8ddb7a5c67681b.webp"
              alt={cards[0]?.title || "Intraoral scan"}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white/10">
            <img
              src="/symmetrica/media/72a9f05bc7dcf0db.webp"
              alt="Electromyography"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white/10">
            <img
              src="/symmetrica/media/a0dedeaf1853b0df.webp"
              alt="Dentograf"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
