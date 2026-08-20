"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Carousel } from '@/components/motion';

export default function Testimonials() {
  const { t } = useLocale();

  const reviews = t('testimonials.items') as Array<{
    author: string;
    descriptor: string;
    text: string;
    tag: string;
  }>;

  return (
    <section id="cases" className="py-24 bg-primary text-white scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3 font-mono">
              {t('testimonials.kicker') as string}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight mb-4">
              {t('testimonials.title') as string}
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-light">
              {t('testimonials.subtitle') as string}
            </p>
          </Reveal>
        </div>

        {/* Featured Pull-Quote Section with Rating Source */}
        <Reveal delay={0.2}>
          <div className="mb-12 p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden">
            <span className="font-serif text-8xl text-accent/20 absolute -top-4 -left-2 select-none pointer-events-none">
              «
            </span>
            <p className="text-xl sm:text-2xl font-serif italic text-white/90 leading-relaxed mb-6 relative z-10">
              {t('testimonials.featuredQuote') as string}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-white/70">
              <div className="font-semibold text-accent font-mono uppercase tracking-wider">
                {t('testimonials.featuredAuthor') as string}
              </div>
              <div className="font-mono text-accent">
                {t('testimonials.ratingSource') as string}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Reviews Slider */}
        <Carousel>
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between h-full min-h-[260px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-semibold text-accent uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                    {rev.tag}
                  </span>
                  <span className="text-accent font-mono text-xs">5.0 / 5.0</span>
                </div>
                <p className="text-sm sm:text-base text-white/90 font-serif italic leading-relaxed mb-6">
                  «{rev.text}»
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-display font-bold text-accent text-xs">
                  {rev.author[0]}
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-wider uppercase font-mono">
                    {rev.author}
                  </div>
                  <div className="text-[10px] text-white/50">{rev.descriptor}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
}
