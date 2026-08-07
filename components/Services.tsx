
"use client";

import { useLocale } from "@/lib/i18n";

export default function Services() {
  const { t } = useLocale();

  const servicesList = [
    {
      title: "Дентальна імплантація All-on-4 / All-on-6",
      desc: "Повне відновлення зубів однієї чи двох щелеп за 24 години із фіксацією незнімного протеза.",
      tag: "Хірургія 1 дня",
      img: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e%2F69ccddd651f817894d3f03fd_IMG_6295_poster.0000000.jpg",
    },
    {
      title: "Естетичні вініри E-max & Digital Smile",
      desc: "Ультратонкі керамічні реставрації для створення гармонійної привабливої усмішки у Symmetrica Tech.",
      tag: "Естетика",
      img: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b771ee887ca5129d7d8f50_action-bg.webp",
    },
    {
      title: "Лікування та хірургія уві сні (Седація)",
      desc: "Штатні анестезіологи забезпечують повний спокій, відсутність тривоги та болю під час складних операцій.",
      tag: "Без болю",
      img: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/681b1e8bf899772803dd4c7b_8e1180665795c3da9ae4e62d22e4b3065cdf1840-p-800.webp",
    },
    {
      title: "Комп'ютерна 3D-томографія та аксіографія",
      desc: "Високоточна об'ємна діагностика щелеп, скронево-нижньощелепних суглобів та дихальних шляхів.",
      tag: "Діагностика",
      img: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b82231067a84cf47b2be41_lines-consult.png",
    },
    {
      title: "Ортодонтія: Елайнери Invisalign & Брекети",
      desc: "Виправлення прикусу з репрограмуванням м'язів обличчя та мікрострумовою терапією Ortho-Tricks.",
      tag: "Ортодонтія",
      img: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b4130011d71e7133725038_bg-team.webp",
    },
    {
      title: "Swiss GBT Професійна гігієна та відбілювання",
      desc: "Атраматичне видалення нальоту швейцарським протоколом GBT з ніжним доглядом за яснами.",
      tag: "Профілактика",
      img: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b77a267afb1b0ddb1d9b69_trust-image-1-p-800.webp",
    },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-24 bg-[hsl(212_48%_9%)] text-white overflow-hidden">
      {/* Background Watermark Type */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-0 text-[16vw] font-display font-black text-white/[0.02] pointer-events-none select-none uppercase whitespace-nowrap z-0"
      >
        SERVICES
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[hsl(185_85%_45%)] block mb-3">
            {String(t("services.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {String(t("services.title"))}
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-body">
            {String(t("services.subtitle"))}
          </p>
        </div>

        {/* Action Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex flex-col justify-end min-h-[380px] shadow-xl hover:border-[hsl(185_85%_36%)] transition-all duration-300"
            >
              {/* Image background with dark scrim overlay */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-55"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(212_48%_9%)] via-[hsl(212_48%_9%/0.7)] to-transparent" />

              {/* Card Content */}
              <div className="relative z-10 p-6 flex flex-col items-start">
                <span className="px-3 py-1 rounded-full bg-[hsl(185_85%_36%)] text-white text-[0.65rem] font-bold uppercase tracking-wider mb-3">
                  {item.tag}
                </span>
                <h3 className="text-lg font-display font-bold text-white mb-2 leading-tight group-hover:text-[hsl(185_85%_45%)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 font-body leading-relaxed mb-4">
                  {item.desc}
                </p>
                <a
                  href="#booking"
                  className="text-xs font-bold text-[hsl(185_85%_45%)] hover:underline inline-flex items-center gap-1 uppercase tracking-wider"
                >
                  Записатись на прийом →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
