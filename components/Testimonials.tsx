"use client";

import { Reveal, Carousel } from "@/components/motion";

export default function Testimonials() {
  const reviews = [
    {
      quote: "Враження від стоматології чудове! Професійні лікарі, уважний персонал. Пояснюють всі кроки в процесі лікування. Дають відповіді на всі запитання і рекомендації для подальшого догляду. Є можливість провести все необхідне обстеження в клініці.",
      author: "Марія К.",
      desc: "постійна гостя з 2019 року",
      type: "Комплексне лікування",
      rating: "4.9/5",
    },
    {
      quote: "Звернулася зі складним болем у скроневому суглобі. Пройшла діагностику та сплінт-терапію. Вирішення проблем з суглобами пройшло успішно!",
      author: "Ольга П.",
      desc: "пацієнтка гнатолога",
      type: "Сплінт-терапія СНЩС",
      rating: "5.0/5",
    },
    {
      quote: "Тотальна реабілітація All-on-4 пройшла під медикаментозним сном абсолютно безболісно. На наступний день я вже була з новими красиво відновленими зубами. Дякую пану Андрію та команді!",
      author: "Ірина В.",
      desc: "відновлення All-on-4",
      type: "All-on-4 під седацією",
      rating: "5.0/5",
    },
    {
      quote: "Протезування коронками виготовленими за 2 дні в їхній власій лабораторії Symmetrica Tech. Вигляд природний, підгонка точна.",
      author: "Рафал С.",
      desc: "пацієнт ортопеда",
      type: "Протезування коронками",
      rating: "4.9/5",
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-bg-light)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Layer 1-2: Kicker & Heading */}
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            СЛОВО ГОСТЕЙ
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-main)]">
            Відгуки пацієнтів про центр Symmetrica
          </h2>
          <p className="text-base text-[var(--color-text-muted)]">
            Оцінка 4.9 / 5.0 на основі 340+ відгуків у Google Maps.
          </p>
        </Reveal>

        {/* Layer 3: Featured Quote in Display Type with Giant Quotation Mark */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden max-w-4xl mx-auto">
          <div aria-hidden="true" className="absolute -top-6 -left-2 text-9xl font-display font-bold text-[var(--color-accent)]/15 select-none pointer-events-none">
            “
          </div>
          <div className="relative z-10 space-y-4">
            <blockquote className="text-lg sm:text-2xl font-display italic text-[var(--color-text-main)] leading-relaxed">
              «Враження від стоматології чудове! Професійні лікарі, уважний персонал. Пояснюють всі кроки в процесі лікування та надають рекомендації для подальшого догляду.»
            </blockquote>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-100 text-xs gap-1 sm:gap-4">
              <div>
                <p className="font-bold text-[var(--color-text-main)]">{reviews[0].author}</p>
                <p className="text-gray-500">{reviews[0].desc}</p>
              </div>
              <p className="font-bold text-[var(--color-primary)] uppercase tracking-wider">
                {reviews[0].rating} · GOOGLE REVIEWS
              </p>
            </div>
          </div>
        </div>

        {/* Layer 4: Carousel with Dot Indicators (No Prev/Next Arrow Buttons) */}
        <Carousel>
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between h-full space-y-6"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                  <span className="text-[10px] font-bold bg-[var(--color-accent)]/20 text-[var(--color-primary)] px-3 py-1 rounded-full uppercase tracking-wider">
                    {rev.type}
                  </span>
                  <span className="text-amber-600 font-bold text-xs tabular-nums">
                    {rev.rating}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--color-text-main)] font-body leading-relaxed italic">
                  «{rev.quote}»
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                <div>
                  <h4 className="text-xs font-bold text-[var(--color-text-main)]">{rev.author}</h4>
                  <p className="text-[11px] text-gray-400">{rev.desc}</p>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  GOOGLE
                </span>
              </div>
            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
}
