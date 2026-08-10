"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function Services() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Усі напрямки' },
    { id: 'implantation', label: 'Імплантація & All-on-4' },
    { id: 'orthopedics', label: 'Вініри & Протезування' },
    { id: 'gnathology', label: 'Гнатологія & СНЩС' },
    { id: 'sedation', label: 'Седація' }
  ];

  const priceItems = [
    {
      id: "all-on-4",
      category: "implantation",
      name: "All-on-4 / All-on-6 тотальне відновлення (1 щелепа)",
      price: "від 88 000 UAH",
      description: "Повний зубний ряд за 24 години на 4 або 6 імплантатах Straumann / Megagen з фіксацією незнімного протеза.",
      tag: "Хіт відновлення",
      featured: true
    },
    {
      id: "implant-single",
      category: "implantation",
      name: "Дентальна імплантація Megagen AnyOne",
      price: "від 14 500 UAH",
      description: "Преміальний корейський імплант з навігаційним шаблоном та пожиттєвою гарантією виробника.",
      tag: "Пожиттєва гарантія"
    },
    {
      id: "implant-straumann",
      category: "implantation",
      name: "Дентальна імплантація Straumann BLX (Швейцарія)",
      price: "від 22 000 UAH",
      description: "Швейцарська імплантаційна система для негайного навантаження у складних кісткових умовах.",
      tag: "Швейцарія"
    },
    {
      id: "veneers",
      category: "orthopedics",
      name: "Керамічний вінір E.max Symmetrica Tech",
      price: "від 11 500 UAH",
      description: "Високохудожня керамічна накладка з власної цифрової лабораторії без 'ефекту унітазної білизни'.",
      tag: "За 48 годин"
    },
    {
      id: "sedation-service",
      category: "sedation",
      name: "Лікування під седацією (медикаментозний сон)",
      price: "від 3 500 UAH/год",
      description: "Повний комфорт та відсутність стресу під керуванням власної штатної анестезіологічної служби.",
      tag: "Ліцензія МОЗ"
    },
    {
      id: "diag-service",
      category: "gnathology",
      name: "Первинна 3D КТ діагностика та огляд лікаря",
      price: "від 800 UAH",
      description: "Комплексне 3D-сканування щелеп та складання писемного плану реабілітації."
    },
    {
      id: "gnathology-splint",
      category: "gnathology",
      name: "Сплінт-терапія та репрограмування СНЩС",
      price: "від 4 500 UAH",
      description: "Усунення болю та клацання в суглобі за допомогою індивідуальних шин та мікрострумової розрядки."
    },
    {
      id: "aligners",
      category: "orthopedics",
      name: "Ортодонтична капа / елайнер (Invisalign)",
      price: "від 45 000 UAH",
      description: "Прозорі капи для виправлення прикусу без брекетів із цифровим сетапом."
    },
    {
      id: "endo-microscope",
      category: "orthopedics",
      name: "Мікроскопна ендодонтія (лікування каналів)",
      price: "від 3 200 UAH",
      description: "Прецизійна обробка та пломбування каналів під оптичним операційним мікроскопним збільшенням."
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? priceItems
    : priceItems.filter(item => item.category === activeCategory);

  const featuredItem = priceItems.find(i => i.featured);

  return (
    <section id="services" className="py-20 bg-bg-card text-text-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <Reveal className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-accent font-bold font-mono">
            РЕЄСТР ПОСЛУГ ТА ВАРТОСТІ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-primary">
            Повний прейскурант та напрямки відновлення
          </h2>
          <p className="text-slate-600 font-body text-base">
            Фіксовані розцінки на первинні маніпуляції та тотальні реабілітаційні комплекси у Центрі Symmetrica.
          </p>
        </Reveal>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 min-h-[44px] flex items-center ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Structured Price List (ROWS) */}
          <div className="lg:col-span-8 bg-bg-light border border-border-light rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="group border-b border-border-light/60 pb-4 last:border-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold font-display text-primary text-base group-hover:text-accent transition-colors">
                        {item.name}
                      </span>
                      {item.tag && (
                        <span className="text-[10px] font-mono uppercase bg-accent/15 text-accent px-2 py-0.5 rounded">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 hidden sm:block border-b border-dotted border-slate-300 mx-3" />
                    <span className="font-display font-bold text-primary text-sm sm:text-base whitespace-nowrap text-accent">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-body leading-relaxed mt-1.5 max-w-2xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Footnote Line */}
            <div className="pt-6 border-t border-border-light text-[11px] text-slate-500 font-body flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>{t('services.note') as string}</div>
              <a href="#calculator" className="text-accent font-bold hover:underline min-h-[44px] flex items-center">
                Розрахувати в калькуляторі →
              </a>
            </div>
          </div>

          {/* Featured Signature Card */}
          {featuredItem && (
            <div className="lg:col-span-4 bg-primary text-white rounded-2xl overflow-hidden border border-white/10 shadow-xl flex flex-col justify-between">
              <div className="relative h-48 bg-slate-800">
                <img
                  src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b77a267afb1b0ddb1d9b69_trust-image-1-p-800.webp"
                  alt="All-on-4 у Symmetrica"
                  className="w-full h-full object-cover filter brightness-90"
                />
                <div className="absolute top-3 left-3 bg-accent text-white text-[10px] font-mono uppercase px-2.5 py-1 rounded shadow">
                  ФЛАГМАНСЬКИЙ ПРОТОКОЛ
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-[10px] text-accent font-mono uppercase tracking-widest">
                    ТОТАЛЬНЕ ВІДНОВЛЕННЯ
                  </span>
                  <h3 className="text-xl font-bold font-display text-white mt-1">
                    All-on-4 / All-on-6 уві сні
                  </h3>
                  <p className="text-xs text-slate-300 font-body leading-relaxed mt-2">
                    Повне відновлення жувальної функції та естетики посмішки за один день під наглядом власного анестезіолога.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-xs flex justify-between items-center">
                  <span className="text-slate-300">{t('services.package') as string}</span>
                  <span className="font-bold text-accent font-display text-sm">{t('services.pkgPrice') as string}</span>
                </div>

                <a
                  href="#booking"
                  className="block text-center w-full py-3 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all min-h-[44px] flex items-center justify-center"
                >
                  Забронювати консультацію →
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
