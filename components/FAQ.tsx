"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function FAQ() {
  const { t } = useLocale();

  const faqData = [
    {
      q: "Які покази для проведення художньої реставрації?",
      a: "Покази: сколи, тріщини, нерівні краї, дефекти емалі, невеликі каріозні порожнини в передній зоні, зміни форми зуба, заміна старих неестетичних пломб та корекція діастеми."
    },
    {
      q: "Як потрапити до вас на лікування, якщо я живу за кордоном?",
      a: "Ми надаємо комплексну підтримку: попередній розрахунок за результатами вашої 3D КТ, узгодження графіку візиту у Львів та проведення лікування за 1-2 дні."
    },
    {
      q: "Навіщо в Центрі власна анестезіологічна служба?",
      a: "Symmetrica має офіційну ліцензію МОЗ України №582910. Наш анестезіолог має спеціалізацію саме в стоматології, а клініка оснащена кардіомоніторами та кисневою станцією."
    },
    {
      q: "Для чого створена власна зуботехнічна лабораторія Symmetrica Tech?",
      a: "Лабораторія забезпечує пряме спілкування між ортопедом і зуботехніком, пришвидшує виготовлення вінірів та протезів (до 24-48 годин) і контролює точність до 10 мікрон."
    },
    {
      q: "Що таке трирівнева система стерилізації інструментів?",
      a: "Перший рівень — ультразвукова обробка в розчині. Другий — пакування в одноразові крафт-пакети. Третій — автоклавування під високим тиском з електронним контролем."
    },
    {
      q: "Чи справді можна відновити всі зуби за один день?",
      a: "Так, за протоколами All-on-4 або All-on-6 встановлюються імпланти та фіксується незнімний протез протягом 24 годин."
    },
    {
      q: "Які переваги дає репрограмування м'язів обличчя?",
      a: "Мікрострумова терапія та сплінт-терапія знімають спазм жувальних м'язів, нормалізують положення нижньої щелепи та готують суглоб (СНЩС) до протезування."
    },
    {
      q: "Для чого при імплантації використовують навігаційні шаблони?",
      a: "Навігаційний шаблон виготовляється за 3D-моделлю з точністю до міліметра. Він мінімізує травматизм м'яких тканин та скорочує тривалість операції."
    },
    {
      q: "Чи є у вас дитяча стоматологія?",
      a: "Так, лікування дітей проходить у спеціалізованій дитячій клініці, яка є частиною Symmetrica Medical Group."
    },
    {
      q: "Як фіксується вартість лікування?",
      a: "Повний кошторис розраховується після первинного огляду та 3D КТ діагностики й фіксується у писемному договору без подальших прихованих націнок."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-bg-light text-text-main">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-accent font-bold font-mono">
            ВІДПОВІДІ НА ПИТАННЯ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-primary">
            Часті запитання пацієнтів
          </h2>
          <p className="text-slate-600 font-body text-xs sm:text-sm">
            Дізнайтесь детальніше про технології, безпеку анестезії та гарантійні зобов'язання Symmetrica.
          </p>
        </Reveal>

        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="bg-bg-card border border-border-light rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold font-display text-primary hover:text-accent transition-colors"
                >
                  <span className="text-sm sm:text-base">{item.q}</span>
                  <span className={`text-sm font-mono transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180 text-accent' : ''}`}>
                    ↓
                  </span>
                </button>

                {openIndex === idx && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 font-body leading-relaxed border-t border-slate-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
