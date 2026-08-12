"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function DiagnosticsTech() {
  const { t } = useLocale();

  const techItems = [
    {
      title: "Комп'ютерна томографія (3D КТ)",
      description: "Візуалізуємо приховані анатомічні особливості, щільність кістки та розташування нервів у трьох проекціях із мінімальним променевим навантаженням.",
      image: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b76cba7d575c31abae62e8_research-image-1.webp",
      tag: "3D CT SCAN",
      detail: "0.08 мЗв доза",
    },
    {
      title: "Інтраоральне сканування",
      description: "3D цифрове зображення зубів та прикусу замість неприємних традиційних відбитків. Забезпечує миттєве комп'ютерне моделювання реставрації.",
      image: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b76cba519fa489ce0cb3e9_research-image-2.webp",
      tag: "DIGITAL IMPRESSION",
      detail: "Точність 10 мікрон",
    },
    {
      title: "Електроміографія м'язів",
      description: "Аналізуємо роботу жувальних та мімічних м'язів для виявлення гіпертонусу, бруксизму та дисфункцій скронево-нижньощелепного суглоба.",
      image: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b76cc2a1a2d766f74db929_research-image-3.webp",
      tag: "EMG ANALYSIS",
      detail: "Аналіз тонких м'язів",
    },
    {
      title: "Dentograf та аналіз прикусу",
      description: "Візуалізуємо в динаміці роботу всього зубощелепного комплексу. Об'єднуємо цифровий масив даних для розробки сплінт-терапії.",
      image: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b76cba145d5b167f9c596c_research-image-4.webp",
      tag: "DENTOGRAF SYSTEM",
      detail: "Динамічний прикус",
    },
  ];

  return (
    <section id="diagnostics" className="py-20 bg-[var(--color-bg-light)] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Layer 1-3: Kicker, Heading, Lede */}
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            {String(t("techSection.kicker"))}
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-main)]">
            {String(t("techSection.title"))}
          </h2>
          <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
            {String(t("techSection.subtitle"))}
          </p>
        </Reveal>

        {/* Layer 4: Oversized Pull-Quote Statement */}
        <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm text-center max-w-4xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
            ПРИНЦИП КЛІНІЧНОЇ ГНАТОЛОГІЇ SYMMETRICA
          </p>
          <blockquote className="text-lg sm:text-xl font-display italic text-[var(--color-text-main)] leading-relaxed">
            «Перед кожним хірургічним або естетичним втручанням ми проводимо повноцінне дослідження суглоба СНЩС. Це гарантує, що нові коронки чи імпланти працюватимуть у гармонії з м'язами обличчя протягом десятиліть.»
          </blockquote>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Д-р Мар'ян Шляхта — Медичний директор
          </p>
        </div>

        {/* Layer 5: Bento Grid of Equipment */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techItems.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 text-[var(--color-accent)] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base font-display font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[var(--color-primary)]">
                    <span className="text-gray-500">{item.detail}</span>
                    <span className="text-[var(--color-accent)] font-bold">{String(t("techSection.includedInCt"))}</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Layer 6-7: Caption with rule and link */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p className="font-light">
            Усі дослідження проводяться на сертифікованій апаратурі у кабінеті 3D-діагностики за адресою м. Львів, вул. Стрийська, 45.
          </p>
          <a
            href="#booking"
            className="text-[var(--color-primary)] font-bold uppercase tracking-wider hover:text-[var(--color-accent)] transition-colors shrink-0"
          >
            Записатись на діагностику →
          </a>
        </div>

      </div>
    </section>
  );
}