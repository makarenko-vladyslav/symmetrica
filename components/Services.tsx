"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function Services() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "Всі послуги" },
    { id: "implants", label: "Імплантація & All-on-4" },
    { id: "aesthetics", label: "Вініри & Естетика" },
    { id: "ortho", label: "Ортодонтія & СНЩС" },
    { id: "therapy", label: "Терапія під мікроскопом" },
  ];

  const serviceList = [
    {
      cat: "implants",
      title: "Комплексна імплантація All-on-4 / All-on-6",
      price: "від 120 000 UAH",
      desc: "Відновлення повного зубного ряду за 24 години із фіксацією незнімного тимчасового протеза в день операції або наступного ранку.",
      time: "24 години",
      tag: "ТОТАЛЬНЕ ВІДНОВЛЕННЯ",
      isFeatured: true,
      photo: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/6659cb6805d7fc2915dd42de_%D1%96%D0%BC%D0%BF%D0%BB%D0%B0%D0%BD%D1%82%D0%B0%D1%86%D1%96%D1%8F.webp",
    },
    {
      cat: "implants",
      title: "Дентальна імплантація (Megagen, Straumann)",
      price: "від 14 500 UAH",
      desc: "Установка преміальних швейцарських та корейських імплантів за навігаційним хірургічним шаблоном для точного приживання.",
      time: "30-45 хв",
      tag: "ХІРУРГІЯ 3D",
      isFeatured: false,
      photo: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/681b1e8bf899772803dd4c7b_8e1180665795c3da9ae4e62d22e4b3065cdf1840-p-800.webp",
    },
    {
      cat: "aesthetics",
      title: "Встановлення керамічних вінірів та ультранірів",
      price: "від 12 500 UAH",
      desc: "Тонкі керамічні накладки виготовлені у власній лабораторії Symmetrica Tech з урахуванням анатомії обличчя та мікротекстури.",
      time: "2 візити",
      tag: "CAD/CAM SYMMETRICA",
      isFeatured: false,
      photo: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b7d691b76e5f6f01875d44_awward-news-1.webp",
    },
    {
      cat: "ortho",
      title: "Ортодонтичне лікування елайнерами (Invisalign)",
      price: "від 75 000 UAH",
      desc: "Прозорі капи для непомітного виправлення прикусу з візуалізацією кінцевого результату ще до початку лікування.",
      time: "6-18 місяців",
      tag: "3D МОДЕЛЮВАННЯ",
      isFeatured: false,
      photo: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b76cba519fa489ce0cb3e9_research-image-2.webp",
    },
    {
      cat: "ortho",
      title: "Діагностика СНЩС та сплінт-терапія",
      price: "від 8 500 UAH",
      desc: "Лікування клацання, болю в щелепі, головного болю та бруксизму за допомогою розвантажувальних суглобових шин.",
      time: "індивідуально",
      tag: "ГНАТОЛОГІЯ",
      isFeatured: false,
      photo: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b76cc2a1a2d766f74db929_research-image-3.webp",
    },
    {
      cat: "therapy",
      title: "Ендодонтичне лікування каналів під мікроскопом",
      price: "від 4 200 UAH",
      desc: "Точна обробка та тривимірне запломбовування кореневих каналів під 25-кратним збільшенням мікроскопа Zeiss.",
      time: "1-2 години",
      tag: "МІКРОСКОП ZEISS",
      isFeatured: false,
      photo: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/66a8ce4cf2f9e76340956062_1440_how-works-bg.webp",
    },
  ];

  const filtered = activeTab === "all" ? serviceList : serviceList.filter((s) => s.cat === activeTab);

  return (
    <section id="services" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Layer 1-3: Kicker, Heading, Lede */}
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            {String(t("servicesSection.kicker"))}
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-main)]">
            {String(t("servicesSection.title"))}
          </h2>
          <p className="text-base text-[var(--color-text-muted)]">
            {String(t("servicesSection.subtitle"))}
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  activeTab === tab.id
                    ? "bg-[var(--color-primary)] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Layer 5: Editorial Row-Based Price Catalog with Dotted Leaders */}
        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
                item.isFeatured
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-accent)] shadow-xl"
                  : "bg-[var(--color-bg-light)] text-[var(--color-text-main)] border-gray-200 hover:border-[var(--color-accent)]"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:max-w-3xl">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover shrink-0 border border-gray-200/20"
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      item.isFeatured ? "bg-[var(--color-accent)] text-black" : "bg-gray-200 text-gray-800"
                    }`}>
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-semibold opacity-70">
                      Термін: {item.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${item.isFeatured ? "text-white/80" : "text-[var(--color-text-muted)]"}`}>
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end gap-3 w-full md:w-auto shrink-0 border-t md:border-t-0 pt-4 md:pt-0 border-gray-200/20">
                <span className={`text-xl font-display font-bold tabular-nums ${
                  item.isFeatured ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"
                }`}>
                  {item.price}
                </span>
                <a
                  href="#booking"
                  className={`w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center ${
                    item.isFeatured
                      ? "bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-black shadow-lg"
                      : "bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white"
                  }`}
                >
                  Записатись
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote line & secondary link */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>{String(t("servicesSection.footnote"))}</p>
          <a href="#calculator" className="text-[var(--color-primary)] font-bold uppercase tracking-wider hover:underline">
            Перейти в калькулятор кошторису →
          </a>
        </div>

      </div>
    </section>
  );
}