"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Carousel } from '@/components/motion';

export default function Testimonials() {
  const { t } = useLocale();

  const reviews = [
    {
      quote: "Звернулась у Symmetrica через болі в щелепі. Пройшла сплінт-терапію та репрограмування м'язів — результат перевершив усі очікування. Біль минув, суглоб функціонує вільно.",
      author: "Ольга М.",
      treatment: "Гнатологія та СНЩС",
      rating: "4.9/5"
    },
    {
      quote: "Враження від стоматології лише чудове! Професійні лікарі, уважний персонал. Пояснюють всі кроки в процесі лікування. Є можливість провести все необхідне обстеження в клініці.",
      author: "Надія К.",
      treatment: "Комплексна реабілітація",
      rating: "5.0/5"
    },
    {
      quote: "Проходив відновлення зубів за допомогою імплантації. Хвилювався через можливий біль, але лікування під медикаментозним сном пройшло абсолютно непомітно. Дякую за результат!",
      author: "Ірина В.",
      treatment: "Тотальна реабілітація уві сні",
      rating: "5.0/5"
    },
    {
      quote: "Висока точність та естетика. Протезування коронками та вінірами виконано бездоганно, природний колір і зручний прикус з першого дня.",
      author: "Рафал С.",
      treatment: "Протезування коронками",
      rating: "4.9/5"
    }
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PROOF Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-accent font-bold font-mono">
            СЛОВО ПАЦІЄНТІВ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Історії відновлення та відгуки
          </h2>
          <p className="text-slate-300 font-body text-xs sm:text-sm">
            Понад 63,000 пролікованих пацієнтів довіряють нам свої посмішки з 2013 року.
          </p>
        </Reveal>

        {/* Featured Big Quote Statement */}
        <Reveal delay={0.1} className="max-w-4xl mx-auto mb-12 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md text-center space-y-4">
          <div className="text-5xl font-serif text-accent leading-none">“</div>
          <blockquote className="text-lg sm:text-2xl font-display italic text-slate-100 leading-relaxed">
            «Звернулась у Symmetrica через болі в щелепі. Пройшла сплінт-терапію та репрограмування м'язів — результат перевершив усі очікування.»
          </blockquote>
          <div className="pt-2 text-xs font-mono text-slate-300">
            — Ольга М., постійна гостя клініки з 2021 року · <span className="text-accent">{t('testimonials.badge') as string}</span>
          </div>
        </Reveal>

        {/* Testimonials Carousel */}
        <Carousel>
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 backdrop-blur-md flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-accent-gold">{rev.rating}</span>
                  <span className="text-[10px] font-mono bg-accent/20 text-accent px-2 py-0.5 rounded">
                    {rev.treatment}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-body leading-relaxed italic">
                  «{rev.quote}»
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold font-display text-white text-sm">{rev.author}</div>
                  <div className="text-[11px] text-slate-400">{t('testimonials.patient') as string}</div>
                </div>
                <div className="text-xs font-mono text-accent">{t('testimonials.google') as string}</div>
              </div>
            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
}
