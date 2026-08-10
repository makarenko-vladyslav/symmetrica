"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

export default function TechShowcase() {
  const { t } = useLocale();

  const techList = [
    {
      id: "ct-scan",
      title: "Комп’ютерна томографія (3D КТ)",
      description: "Візуалізуємо приховані проблеми та будову щелепно-лицьової області у трьох проекціях з мінімальним променевим навантаженням.",
      image: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b76cba7d575c31abae62e8_research-image-1.webp",
      code: "3D CT SCAN"
    },
    {
      id: "intraoral",
      title: "Інтраоральне 3D-сканування",
      description: "Створення високоточної 3D-моделі зубів та прикусу для віртуального моделювання майбутньої реставрації без неприємних зліпків.",
      image: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b76cba519fa489ce0cb3e9_research-image-2.webp",
      code: "CAD INTRAORAL"
    },
    {
      id: "electromyography",
      title: "Електроміографія жувальних м'язів",
      description: "Аналізуємо стан жувальних м'язів та виявляємо патологічні зміни в зубощелепній системі перед проведенням протезування.",
      image: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b76cc2a1a2d766f74db929_research-image-3.webp",
      code: "EMG ANALYSIS"
    },
    {
      id: "dentograf",
      title: "Dentograf та репрограмування",
      description: "Візуалізуємо в динаміці роботу зубощелепного комплексу та об'єднуємо весь масив даних пацієнта для нормалізації СНЩС.",
      image: "https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/65b76cba145d5b167f9c596c_research-image-4.webp",
      code: "TMJ DENTOGRAF"
    }
  ];

  return (
    <section id="tech" className="py-20 bg-bg-light text-text-main relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[12vw] font-display font-bold text-primary/[0.03] pointer-events-none select-none whitespace-nowrap z-0 uppercase tracking-widest">
        DIAGNOSTICS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-accent font-bold font-mono">
            ЦИФРОВА ДІАГНОСТИКА ТА СНЩС
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-primary">
            3D Комп’ютерна томографія та гнатологічні дослідження
          </h2>
          <p className="text-slate-600 font-body text-base">
            Всебічне дослідження прикусу, суглобів (СНЩС) та будови щелепи перед проведенням складних хірургічних та естетичних реставрацій.
          </p>
        </Reveal>

        {/* Grid of Diagnostics */}
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techList.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-bg-card rounded-2xl overflow-hidden border border-border-light shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                <div className="relative h-48 bg-slate-100 overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-primary/90 text-white text-[10px] font-mono px-2.5 py-1 rounded">
                    {item.code}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div>
                    <h3 className="text-base font-bold font-display text-primary group-hover:text-accent transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-body leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                  <a
                    href="#booking"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-hover pt-2 min-h-[44px]"
                  >
                    <span>{t('tech.book') as string}</span>
                    <span className="ml-1 font-mono">→</span>
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Diagnostic Callout Banner */}
        <Reveal delay={0.2} className="mt-12 bg-primary text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-accent-gold font-mono text-xs uppercase tracking-wider">
              ПЕРВИННИЙ ОГЛЯД ТА 3D КТ
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Розпочніть лікування з вичерпного діагностичного плану
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-body max-w-xl">
              Повна комп'ютерна томографія та первинний огляд головного лікаря. Ціна: від 800 UAH.
            </p>
          </div>

          <a
            href="#booking"
            className="shrink-0 px-6 py-3.5 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md min-h-[44px] flex items-center justify-center"
          >
            Записатись на 3D-КТ
          </a>
        </Reveal>

      </div>
    </section>
  );
}
