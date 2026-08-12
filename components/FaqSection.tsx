"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function FaqSection() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      q: "Які покази для проведення художньої реставрації?",
      a: "Покази: естетичні дефекти (сколи, тріщини, нерівні краї), дефекти емалі, невеликі каріозні порожнини в передній зоні, зміни форми зуба, заміна старих неестетичних пломб. Також — корекція діастеми (щілини між зубами).",
    },
    {
      q: "Як потрапити до вас на лікування, якщо я живу за кордоном?",
      a: "Якщо ви перебуваєте за кордоном, ми запропонуємо комплексну підтримку: від попередньої онлайн-консультації за знімком КТ та організації візиту до комфортного лікування під седацією у стислі терміни.",
    },
    {
      q: "Навіщо в Центрі власна анестезіологічна служба?",
      a: "Symmetrica володіє офіційною ліцензією МОЗ на анестезіологію. Власна служба з штатним лікарем-анестезіологом та кардіомоніторингом гарантує 100% безпечне проведення медикаментозного сну без залучення сторонніх бригад.",
    },
    {
      q: "Для чого створена власна зуботехнічна лабораторія Symmetrica Tech?",
      a: "Пряме спілкування між стоматологом і зуботехніком дозволяє пришвидшити виготовлення реставрацій до 24-48 годин, точно підібрати індивідуальну прозорість кераміки та контролювати якість на всіх етапах.",
    },
    {
      q: "Що таке трирівнева система стерилізації інструментів?",
      a: "Це передстерилізаційне очищення у розчині Korzolex (Німеччина) з ультразвуком, герметичне пакування у одноразові крафт-пакети та автоклавування під тиском для гарантії інфекційної безпеки.",
    },
    {
      q: "Чи справді можна відновити всі зуби в дуже короткі терміни?",
      a: "Так, за допомогою методик All-on-4 або All-on-6 встановлюються 4 або 6 імплантів, на які фіксується незнімний тимчасовий протез за 24 години.",
    },
    {
      q: "Які переваги дає репрограмування м'язів обличчя?",
      a: "Мікрострумова терапія розслабляє напружені м'язи при суглобових розладах, знижує біль, нормалізує тонус та пришвидшує ортодонтичне лікування.",
    },
    {
      q: "Для чого при імплантації використовують навігаційні шаблони?",
      a: "Навігаційний шаблон виготовляється з точністю до міліметра та спрямовує імплант у заздалегідь розраховану позицію. Це мінімізує травматичність тканини та виключає ризик зачепити нерв.",
    },
    {
      q: "Чи є у вас дитяча стоматологія?",
      a: "Стоматологічне лікування дітей віком 0–18 років проходить у дитячому стоматологічному центрі «Акварель», що є невід'ємною частиною Symmetrica Medical Group.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            ВІДПОВІДІ НА ЗАПИТАННЯ
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-main)]">
            Часті запитання пацієнтів
          </h2>
          <p className="text-base text-[var(--color-text-muted)]">
            Дізнайтеся більше про безпеку, терміни та технології відновлення зубів.
          </p>
        </Reveal>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 bg-white hover:bg-[var(--color-bg-light)] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 transition-colors gap-1 sm:gap-4"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-[var(--color-text-main)]">
                    {item.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 font-bold text-gray-600">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-6 pt-0 bg-white text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-gray-100">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
