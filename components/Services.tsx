"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface ServiceItem {
  name: string;
  price: string;
  desc?: string;
  image?: string;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export function Services() {
  const { t, locale } = useLocale();
  const [activeTab, setActiveTab] = useState<number>(0);

  const categoriesUk: ServiceCategory[] = [
    {
      title: "Імплантація та All-on-4",
      items: [
        { name: "Консультація хірурга-імплантолога + план лікування", price: "800 UAH", desc: "Детальний огляд, аналіз КТ та складання точного кошторису.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" },
        { name: "Дентальний імплант Megagen (Південна Корея)", price: "14 500 UAH", desc: "Преміальна система з високою первинною стабільністю.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" },
        { name: "Дентальний імплант Straumann (Швейцарія)", price: "28 000 UAH", desc: "Світовий лідер з приживленням до 99.8%.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" },
        { name: "Відновлення зубів All-on-4 (під ключ на одну щелепу)", price: "от 120 000 UAH", desc: "4 імпланти + незнімний адаптаційний протез за 24 години.", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80" },
        { name: "Відновлення зубів All-on-6 (під ключ)", price: "от 155 000 UAH", desc: "Посилена фіксація на 6 імплантах для максимальної надійності.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" },
        { name: "Кісткова пластика (остеопластика)", price: "від 6 500 UAH", desc: "Нарощування об'єму кісткової тканини.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" },
        { name: "Синус-ліфтинг (відкритий / закритий)", price: "від 9 000 UAH", desc: "Підняття дна гайморової пазухи для встановлення імплантів у боковому відділі.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    {
      title: "Естетична стоматологія",
      items: [
        { name: "Керамічний вінір / ультранір (E-Max)", price: "від 9 500 UAH", desc: "Тончайша кераміка для голлівудської посмішки без обточування або з мінімальним препаруванням.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80" },
        { name: "Керамічна коронка E-Max", price: "від 10 000 UAH", desc: "Повністю керамічна коронка з імітацією природної прозорості.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" },
        { name: "Цирконієва коронка", price: "від 9 000 UAH", desc: "Надміцна конструкція для жувальних та передніх зубів.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" },
        { name: "Художня реставрація зуба", price: "від 2 500 UAH", desc: "Відновлення форми та кольору фотополімерними матеріалами.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" },
        { name: "Професійне відбілювання зубів (Beyond / Zoom)", price: "від 4 500 UAH", desc: "Безпечне освітлення емалі на кілька відтінків за 1 візит.", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    {
      title: "Лікування під седацією",
      items: [
        { name: "Медикаментозний сон (седація) — 1 година", price: "2 800 UAH", desc: "Комфортний стан дрімоти під контролем лікаря-анестезіолога з повним кардіомоніторингом.", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" },
        { name: "Лікування зубів під седацією (пакет 2 години)", price: "5 200 UAH", desc: "Санація кількох зубів або складне видалення без стресу та болю.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" },
        { name: "Консультація анестезіолога перед седацією", price: "Включено", desc: "Збір анамнезу, розшифровка ЕКГ та підбір дозування препаратів.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    {
      title: "Діагностика та терапія",
      items: [
        { name: "3D Комп'ютерна томографія (КТ) щелеп", price: "800 UAH", desc: "Знімок високої точності на сучасному томографі з мінімальним опроміненням.", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" },
        { name: "Інтраоральне 3D сканування", price: "500 UAH", desc: "Цифровий зліпок без дискомфорту та силіконових мас.", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80" },
        { name: "Ендодонтичне лікування каналів під мікроскопом Zeiss", price: "від 2 200 UAH", desc: "Лікування пульпіту та періодонтиту зі збільшенням у 30 разів.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" },
        { name: "Професійна гігієна (ultrasonic + AirFlow + полірування)", price: "1 500 UAH", desc: "Видалення твердого зубного каменю та пігментованого нальоту.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" },
        { name: "Сплінт-терапія при дисфункції СНЩС (1 щелепа)", price: "від 6 500 UAH", desc: "Виготовлення індивідуальної шини для розслаблення жувальних м'язів.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" }
      ]
    }
  ];

  const categoriesEn: ServiceCategory[] = [
    {
      title: "Implantology & All-on-4",
      items: [
        { name: "Implant Surgeon Consultation + Treatment Plan", price: "800 UAH", desc: "Detailed examination, CT analysis, and precise cost estimation.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" },
        { name: "Megagen Dental Implant (South Korea)", price: "14 500 UAH", desc: "Premium system with high primary stability.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" },
        { name: "Straumann Dental Implant (Switzerland)", price: "28 000 UAH", desc: "Global leader with up to 99.8% osseointegration success.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" },
        { name: "All-on-4 Restoration (Turnkey per jaw)", price: "from 120 000 UAH", desc: "4 implants + fixed provisional prosthesis in 24 hours.", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80" },
        { name: "All-on-6 Restoration (Turnkey)", price: "from 155 000 UAH", desc: "Enhanced support on 6 implants for ultimate durability.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" },
        { name: "Bone Grafting (Osteoplasty)", price: "from 6 500 UAH", desc: "Restoration of bone tissue volume prior to implantation.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" },
        { name: "Sinus Lift (Open / Closed)", price: "from 9 000 UAH", desc: "Maxillary sinus floor elevation for molar implants.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    {
      title: "Aesthetic Dentistry",
      items: [
        { name: "Ceramic Veneer / Ultraneer (E-Max)", price: "from 9 500 UAH", desc: "Ultra-thin ceramics for a Hollywood smile with minimal or no grinding.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80" },
        { name: "E-Max Ceramic Crown", price: "from 10 000 UAH", desc: "All-ceramic crown mimicking natural translucency.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" },
        { name: "Zirconia Crown", price: "from 9 000 UAH", desc: "High-strength restoration for posterior and anterior teeth.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" },
        { name: "Artistic Tooth Restoration", price: "from 2 500 UAH", desc: "Restoration of shape and shade with composite photopolymers.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" },
        { name: "Professional Teeth Whitening (Beyond / Zoom)", price: "from 4 500 UAH", desc: "Safe enamel brightening by several shades in 1 visit.", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    {
      title: "Sedation Sleep Dentistry",
      items: [
        { name: "Medical Sleep (Sedation) — 1 hour", price: "2 800 UAH", desc: "Comfortable doze state under anesthesiologist supervision with full cardiopulmonary monitoring.", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" },
        { name: "Dental Treatment under Sedation (2-hour package)", price: "5 200 UAH", desc: "Multi-tooth treatment or complex surgery without stress and pain.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" },
        { name: "Pre-sedation Anesthesiologist Consultation", price: "Included", desc: "Anamnesis, ECG interpretation, and medication dosage selection.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    {
      title: "Diagnostics & Therapy",
      items: [
        { name: "3D CT Computed Tomography", price: "800 UAH", desc: "High-precision scan on advanced tomograph with minimal radiation.", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" },
        { name: "Intraoral 3D Scanning", price: "500 UAH", desc: "Digital impressions without discomfort or silicone putties.", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80" },
        { name: "Microscopic Root Canal Treatment (Zeiss)", price: "from 2 200 UAH", desc: "Pulpitis and periodontitis treatment under 30x magnification.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" },
        { name: "Professional Hygiene (Ultrasonic + AirFlow + Polish)", price: "1 500 UAH", desc: "Removal of hard dental calculus and pigmented plaque.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" },
        { name: "TMJ Splint Therapy for Dysfunction (1 jaw)", price: "from 6 500 UAH", desc: "Custom bite guard fabrication for jaw muscle relaxation.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" }
      ]
    }
  ];

  const categories = locale === "en" ? categoriesEn : categoriesUk;

  return (
    <section id="services" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold tracking-widest text-xs uppercase mb-3 block">
            {t("servicesSection.kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            {t("servicesSection.title")}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {t("servicesSection.subtitle")}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
                activeTab === idx
                  ? "bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories[activeTab].items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 backdrop-blur rounded-2xl overflow-hidden border border-slate-700/60 hover:border-amber-500/50 transition-all duration-300 flex flex-col shadow-xl group"
            >
              {item.image && (
                <div className="w-full aspect-[4/3] overflow-hidden bg-slate-900 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>
                  {item.desc && (
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    {locale === "en" ? "Price from" : "Вартість"}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-amber-400">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-slate-400 text-xs sm:text-sm">
          {t("servicesSection.footnote")}
        </div>
      </div>
    </section>
  );
}
