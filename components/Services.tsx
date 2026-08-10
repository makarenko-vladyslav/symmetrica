"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface ServiceItem {
  name: string;
  price: string;
  note?: string;
  image?: string;
}

interface ServiceCategory {
  title: string;
  description?: string;
  items: ServiceItem[];
}

export default function Services() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState(0);

  const categories: ServiceCategory[] = [
    {
      title: t("services.cat1.title") || "Імплантація та All-on-4",
      description: t("services.cat1.desc") || "Сучасні протоколи відновлення зубного ряду швейцарськими та корейськими системами",
      items: [
        { name: "Консультація та 3D-комп'ютерна томографія (КТ)", price: "800 UAH", note: "Первинний огляд + знімок", image: "https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Дентальна імплантація (Megagen / Osstem)", price: "від 14 500 UAH", image: "https://images.pexels.com/photos/3845753/pexels-photo-3845753.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Дентальна імплантація преміум (Straumann / Nobel)", price: "від 26 000 UAH", image: "https://images.pexels.com/photos/6502047/pexels-photo-6502047.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Відновлення зубів за технологією All-on-4 (1 щелепа)", price: "від 115 000 UAH", note: "З імплантами та адаптаційним протезом", image: "https://images.pexels.com/photos/3845553/pexels-photo-3845553.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Відновлення зубів All-on-6", price: "від 145 000 UAH", note: "Посилена фіксація на 6 імплантатах", image: "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Синус-ліфтинг (відкритий / закритий)", price: "від 12 000 UAH", image: "https://images.pexels.com/photos/4269692/pexels-photo-4269692.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ]
    },
    {
      title: t("services.cat2.title") || "Естетична ортопедія",
      description: t("services.cat2.desc") || "Керамічні вініри, коронки та накладки, виготовлені у власній лабораторії Symmetrica Tech",
      items: [
        { name: "Керамічні вініри / ультраніри (E-max)", price: "від 11 000 UAH", note: "За 1 одиницю", image: "https://images.pexels.com/photos/3845619/pexels-photo-3845619.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Безметалева керамічна коронка (E-max)", price: "від 10 500 UAH", image: "https://images.pexels.com/photos/3845758/pexels-photo-3845758.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Коронка з діоксиду цирконію", price: "від 9 500 UAH", image: "https://images.pexels.com/photos/3845764/pexels-photo-3845764.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Керамічна вкладка Onlay / Inlay", price: "від 8 500 UAH", image: "https://images.pexels.com/photos/6502048/pexels-photo-6502048.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ]
    },
    {
      title: t("services.cat3.title") || "Лікування під седацією",
      description: t("services.cat3.desc") || "Медикаментозний сон під цілодобовим контролем кваліфікованого анестезіолога",
      items: [
        { name: "Медикаментозний сон (седація) — перша година", price: "2 800 UAH", note: "З повним кардіомоніторингом", image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Медикаментозний сон — кожна наступна година", price: "1 800 UAH", image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Загальна анестезія (наркоз) для складних операцій", price: "від 4 500 UAH", image: "https://images.pexels.com/photos/3845554/pexels-photo-3845554.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ]
    },
    {
      title: t("services.cat4.title") || "Терапія та ендодонтія",
      description: t("services.cat4.desc") || "Лікування під мікроскопом Zeiss з гарантією герметичності",
      items: [
        { name: "Художня реставрація зуба композитним матеріалом", price: "від 2 800 UAH", image: "https://images.pexels.com/photos/3845762/pexels-photo-3845762.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Ендодонтичне лікування каналів під мікроскопом (1 канал)", price: "від 2 200 UAH", image: "https://images.pexels.com/photos/3845755/pexels-photo-3845755.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Перелікування кореневих каналів під мікроскопом", price: "від 3 500 UAH", image: "https://images.pexels.com/photos/6502049/pexels-photo-6502049.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Професійна гігієна (AirFlow + ультразвук)", price: "від 1 400 UAH", image: "https://images.pexels.com/photos/3845620/pexels-photo-3845620.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ]
    },
    {
      title: t("services.cat5.title") || "Ортодонтія та СНЩС",
      description: t("services.cat5.desc") || "Виправлення прикусу, елайнери Invisalign та гнатологічна підтримка",
      items: [
        { name: "Діагностика скронево-нижньощелепного суглоба (СНЩС)", price: "2 500 UAH", image: "https://images.pexels.com/photos/4269700/pexels-photo-4269700.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Сплінт-терапія (суглобова шина на 1 щелепу)", price: "від 6 500 UAH", image: "https://images.pexels.com/photos/4269695/pexels-photo-4269695.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Ортодонтичне лікування елайнерами Invisalign", price: "від 65 000 UAH", image: "https://images.pexels.com/photos/3845552/pexels-photo-3845552.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { name: "Брекет-система (металева / сапфірова)", price: "від 18 000 UAH", image: "https://images.pexels.com/photos/3845763/pexels-photo-3845763.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-surface text-text-main relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold mb-3 block">
            {t("servicesSection.kicker") || "НАПРЯМКИ ЛІКУВАННЯ ТА КЛІНІЧНИЙ ПРАЙС"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            {t("servicesSection.title") || "Повний спектр високоестетичної та хірургічної стоматології"}
          </h2>
          <p className="text-text-muted text-base sm:text-lg">
            {t("servicesSection.subtitle") || "Прозорий кошторис без прихованих платежів, європейські протоколи та бездоганний сервісний супровід."}
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer ${
                activeTab === idx
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-bg-light text-text-muted hover:text-primary hover:bg-bg-light/80 border border-primary/10"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        {categories[activeTab].description && (
          <div className="text-center mb-10 max-w-2xl mx-auto p-4 rounded-xl bg-bg-light border border-primary/5">
            <p className="text-text-muted text-sm sm:text-base italic">
              {categories[activeTab].description}
            </p>
          </div>
        )}

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories[activeTab].items.map((item, idx) => (
            <div
              key={idx}
              className="bg-bg-light rounded-2xl overflow-hidden border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {item.image && (
                <div className="w-full aspect-[4/3] overflow-hidden bg-primary/5 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-60" />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-primary mb-3 leading-snug">
                    {item.name}
                  </h3>
                  {item.note && (
                    <p className="text-xs text-text-muted mb-4 bg-primary/5 px-2.5 py-1 rounded-md inline-block">
                      {item.note}
                    </p>
                  )}
                </div>
                <div className="pt-4 mt-4 border-t border-primary/10 flex items-center justify-between">
                  <span className="text-xs text-text-muted uppercase tracking-wider font-medium">
                    {t("services.priceLabel") || "Вартість:"}
                  </span>
                  <span className="font-display font-bold text-accent text-lg sm:text-xl">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs text-text-muted italic max-w-xl mx-auto">
            {t("servicesSection.footnote") || "* Точна вартість формується за результатами комп'ютерної томографії та консультації головного лікаря."}
          </p>
        </div>
      </div>
    </section>
  );
}
