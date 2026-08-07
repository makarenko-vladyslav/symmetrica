"use client";

import { useLocale } from "@/lib/i18n";

export default function Gallery() {
  const { locale } = useLocale();

  const galleryImages = [
    {
      url: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/66a8ce4cf2f9e76340956062_1440_how-works-bg.webp",
      alt: "Кабінет цифрової діагностики Vatech 3D",
    },
    {
      url: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b432fc699b062b9f6c568a_feedback-bg.webp",
      alt: "Цифрова лабораторія Symmetrica Tech",
    },
    {
      url: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b771ee887ca5129d7d8f50_action-bg.webp",
      alt: "Операційна анестезіологічної служби",
    },
    {
      url: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b77a267afb1b0ddb1d9b69_trust-image-1-p-800.webp",
      alt: "Консультація та розрахунок лікування",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-bg-light text-text-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-bold block">
            ПРОСТІР КЛІНІКИ
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary">
            {locale === "uk" ? "Клінічне середовище Symmetrica" : "Symmetrica Clinical Environment"}
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden shadow-md border border-border-light h-[280px]"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("img-fallback");
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                <p className="text-xs font-mono font-semibold text-white">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
