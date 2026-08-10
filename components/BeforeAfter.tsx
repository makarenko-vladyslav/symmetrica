"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function BeforeAfter() {
  const { t } = useLocale();

  const caseStudies = [
    {
      title: "Тотальне відновлення All-on-4 уві сні",
      description: "Пацієнт 52 роки: відсутність зубного ряду верхньої щелепи. Встановлено 4 імпланти Straumann під седацією. Незнімний протез за 24 години.",
      image: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b76cba519fa489ce0cb3e9_research-image-2.webp",
      time: "1 день",
      doctor: "Андрій Гриневич & Олександр Біган"
    },
    {
      title: "Естетична трансформація 10 керамічними вінірами",
      description: "Пацієнтка 34 роки: естетичний дефект та дисколорит емалі. Встановлено 10 вінірів Symmetrica Tech без глибокого обпилювання.",
      image: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b76cba145d5b167f9c596c_research-image-4.webp",
      time: "48 годин",
      doctor: "Вікторія Cтадницька"
    }
  ];

  return (
    <section id="cases" className="py-20 bg-bg-card text-text-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-accent font-bold font-mono">
            КЛІНІЧНИЙ ДОСВІД
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-primary">
            Результати реабілітацій та відновлення посмішок
          </h2>
          <p className="text-slate-600 font-body text-sm sm:text-base">
            Реальні історії пацієнтів Центру Symmetrica, які повернули здоров'я зубощелепної системи.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <div className="bg-bg-light border border-border-light rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-mono font-bold px-3 py-1 rounded shadow">
                    Термін: {item.time}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl font-bold font-display text-primary">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center font-medium">
                    <span>{t('cases.doctors') as string} <strong className="text-primary">{item.doctor}</strong></span>
                    <a href="#booking" className="text-accent hover:underline font-bold min-h-[44px] flex items-center">{t('cases.more') as string}</a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
