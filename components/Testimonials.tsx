
"use client";

import { useLocale } from "@/lib/i18n";

interface TestimonialItem {
  quote: string;
  author: string;
  descriptor: string;
  tag: string;
}

export default function Testimonials() {
  const { t } = useLocale();
  const testData = t("testimonials") as {
    kicker: string;
    title: string;
    ratingSource: string;
    featuredQuote: string;
    featuredAuthor: string;
    featuredDescriptor: string;
    items: TestimonialItem[];
  };

  return (
    <section className="py-24 bg-white border-t border-[hsl(210_15%_90%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layer 1 & 2: Kicker + Heading */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[hsl(188_85%_38%)] mb-3">
            {testData.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[hsl(210_30%_14%)] mb-2">
            {testData.title}
          </h2>
          <p className="text-xs font-sans font-bold uppercase tracking-wider text-[hsl(188_85%_38%)]">
            ★ {testData.ratingSource}
          </p>
        </div>

        {/* Featured Pull Quote Block */}
        <div className="mb-12 p-8 sm:p-12 bg-[hsl(210_20%_98%)] rounded-2xl border border-[hsl(210_15%_88%)] relative overflow-hidden">
          <div aria-hidden="true" className="absolute top-2 left-6 text-8xl font-serif text-[hsl(188_85%_38%/0.15)] pointer-events-none select-none">
            “
          </div>
          <p className="relative z-10 text-xl sm:text-2xl font-serif italic text-[hsl(210_30%_14%)] leading-relaxed mb-6">
            {testData.featuredQuote}
          </p>
          <div className="relative z-10 flex items-center space-x-3 pt-4 border-t border-[hsl(210_15%_88%)]">
            <div className="w-10 h-10 rounded-full bg-[hsl(188_85%_38%)] text-white flex items-center justify-center font-serif font-bold">
              {testData.featuredAuthor[0]}
            </div>
            <div>
              <p className="font-serif font-bold text-base text-[hsl(210_30%_14%)]">
                {testData.featuredAuthor}
              </p>
              <p className="text-xs font-body text-[hsl(210_15%_45%)]">
                {testData.featuredDescriptor}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testData.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-[hsl(210_15%_88%)] shadow-sm space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block bg-[hsl(188_85%_38%/0.1)] text-[hsl(188_85%_38%)] text-xs font-sans font-bold px-3 py-1 rounded">
                  {item.tag}
                </span>
                <p className="text-base sm:text-lg font-body text-[hsl(210_30%_14%)] italic leading-relaxed">
                  «{item.quote}»
                </p>
              </div>

              <div className="pt-4 border-t border-[hsl(210_15%_88%)] flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-base text-[hsl(210_30%_14%)]">
                    {item.author}
                  </p>
                  <p className="text-xs font-body text-[hsl(210_15%_50%)]">
                    {item.descriptor}
                  </p>
                </div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[hsl(188_85%_38%)] bg-slate-100 px-2 py-1 rounded">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
