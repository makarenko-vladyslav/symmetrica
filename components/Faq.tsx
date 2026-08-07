"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Faq() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqList = [
    {
      q: "Чи справді можна відновити всі зуби за 1 день за технологією All-on-4?",
      a: "Так. За допомогою методик All-on-4 або All-on-6 ми встановлюємо 4 чи 6 титанових імплантатів у щелепу і за 24 години фіксуємо незнімний тимчасовий протез. Ви залишаєте клініку з повноцінною посмішкою.",
    },
    {
      q: "Як проходить лікування зубів та імплантація уві сні (під седацією)?",
      a: "Перед седацією пацієнт проходить лабораторну діагностику. Під час операції штатний лікар-анестезіолог контролює стан пацієнта за допомогою кардіомонітора та інфузомату. Пацієнт спить і не відчуває болю чи страху.",
    },
    {
      q: "Для чого у центрі Symmetrica власна зуботехнічна лабораторія Symmetrica Tech?",
      a: "Власна цифрова лабораторія скорочує час виготовлення коронок і вінірів до 1-3 днів, забезпечує прямий контакт між ортопедом і зубним техніком та гарантує мікрону точність до 0.02 мм.",
    },
    {
      q: "Як потрапити на лікування, якщо я проживаю за кордоном?",
      a: "Ми надаємо повну координацію медичного туризму: первинну онлайн-консультацію за знімком КТ, бронювання дати операції, трансфер та супровід персонального сервіс-менеджера.",
    },
    {
      q: "Що таке 3-рівнева система стерилізації інструментів?",
      a: "Це ультразвукова передстерилізаційна фаза у німецькому розчині Корзолекс, пакування у герметичні одноразові крафт-пакети та автоклавування класу B для 100% інфекційної безпеки.",
    },
    {
      q: "Чи надається фіксована гарантія на імплантацію та вініри?",
      a: "Так. Усі гарантійні зобов’язання та підсумкова вартість чітко зафіксовані в офіційному юридичному договорі, який підписується перед початком лікування.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 bg-bg-light text-text-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-bold block">
            {t("faq.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary">
            {t("faq.title") as string}
          </h2>
          <p className="text-base text-text-muted font-body">
            {t("faq.subtitle") as string}
          </p>
        </div>

        {/* Accordion List Spanning Full Container Width */}
        <div className="space-y-4 w-full">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-border-light shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-display font-bold text-lg sm:text-xl text-primary flex justify-between items-center gap-4 hover:text-accent transition-colors"
                >
                  <span>{item.q}</span>
                  <span className="text-accent text-xl font-mono shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base font-body text-text-muted leading-relaxed border-t border-border-light/50 pt-4">
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
