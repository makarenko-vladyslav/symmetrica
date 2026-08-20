"use client";

import { useLocale } from "@/lib/i18n";

export default function GallerySection() {
  const { t } = useLocale();
  const galleryData = t("gallery") as {
    kicker: string;
    title: string;
    description: string;
    images: string[];
    imageAltTemplate: string;
  };

  return (
    <section id="gallery" className="py-24 bg-[hsl(210_20%_98%)] border-t border-[hsl(210_15%_90%)] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[hsl(188_85%_38%)] mb-3">
            {galleryData.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[hsl(210_30%_14%)] mb-4">
            {galleryData.title}
          </h2>
          <p className="text-base sm:text-lg font-body text-[hsl(210_15%_45%)]">
            {galleryData.description}
          </p>
        </div>

        {/* Real Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.images.map((url, idx) => {
            const altText = galleryData.imageAltTemplate
              ? galleryData.imageAltTemplate.replace("${idx + 1}", String(idx + 1))
              : `Symmetrica Clinic Gallery ${idx + 1}`;
            return (
              <div
                key={idx}
                className="h-64 sm:h-72 rounded-xl overflow-hidden border border-[hsl(210_15%_88%)] shadow-sm bg-slate-100 group"
              >
                <img
                  src={url}
                  alt={altText}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
