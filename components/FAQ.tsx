
"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useLocale();

  const faqList = [
    {
      q: "Які покази для проведення художньої реставрації?",
      a: "Покази: естетичні дефекти (сколи, тріщини, нерівні краї), дефекти емалі, невеликі каріозні порожнини в передній зоні, зміни формы зуба, реставрація після лікування каналів у фронтальній зоні, заміна старих вкладок або пломб.",
    },
    {
      q: "Як потрапити до вас на лікування, якщо я живу за кордоном?",
      a: "Ми надаємо комплексну підтримку: онлайн-консультація за результатами КТ, координація логістики у Львові, прискорений курс реабілітації All-on-4 / All-on-6 за 1–3 дні та післяопераційний онлайн-супровід.",
    },
    {
      q: "Навіщо в Центрі власна анестезіологічна служба?",
      a: "Symmetrica володіє офіційною ліцензією МОЗ на дитячу та дорослу анестезіологію. Штатні лікарі-анестезіологи забезпечують лікування уві сні із постійним кардіомоніторингом та сертифікованими препаратами.",
    },
    {
      q: "Для чого створена власна зуботехнічна лабораторія Symmetrica Tech?",
      a: "Пряма комунікація між лікарем та зуботехніком дозволяє скоротити термін виготовлення реставрацій до 1–3 днів, підібрати колір емалі та контролювати якість на кожному мікроортопедичному етапі.",
    },
    {
      q: "Що таке трирівнева система стерилізації інструментів?",
      a: "Включає передстерилізаційне ультразвукове очищення у розчині, пакування в одноразові крафт-пакети та автоклавування з індикаторним контролем стерильності.",
    },
    {
      q: "Чи справді можна відновити всі зуби за 1 день?",
      a: "Так. Завдяки технологіям All-on-4 або All-on-6 та комп'ютерним хірургічним шаблонам у щелепу встановлюються імплантати, на які в той самий день фіксується незнімний протез.",
    },
    {
      q: "Чи є у вас дитяча стоматологія?",
      a: "Так, дитячий напрямок працює в рамках центру Symmetrica Medical Group з можливістю лікування уві сні для наймолодших пацієнтів.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[hsl(195_25%_98%)] text-[hsl(210_35%_15%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[hsl(185_85%_36%)] block mb-3">
            {String(t("faq.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {String(t("faq.title"))}
          </h2>
          <p className="text-sm sm:text-base text-[hsl(210_15%_45%)] font-body">
            {String(t("faq.subtitle"))}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqList.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-gray-200/80 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-5 text-left font-display font-bold text-base flex items-center justify-between gap-4 text-[hsl(210_50%_12%)]"
              >
                <span>{item.q}</span>
                <span className="text-lg text-[hsl(185_85%_36%)] font-mono">
                  {openIdx === idx ? "−" : "+"}
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-[hsl(210_15%_45%)] font-body leading-relaxed border-t border-gray-100 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
