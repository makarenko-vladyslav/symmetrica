"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function ContactMap() {
  const { t } = useLocale();

  const mapEmbedUrl = "https://www.google.com/maps?q=вул.+Стрийська,+45,+Львів&output=embed";

  return (
    <section id="contact" className="py-20 bg-bg-light text-text-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-accent font-bold font-mono">
            ЛОКАЦІЯ ТА КОНТАКТИ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-primary">
            Як нас знайти у Львові
          </h2>
          <p className="text-slate-600 font-body text-xs sm:text-sm">
            Завітайте до Центру Symmetrica за адресою вул. Стрийська, 45. Наявна зручна парковка для пацієнтів.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-primary text-white rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-xl">
            <div className="space-y-6">
              
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest text-accent font-mono">{t('contact.addrTitle') as string}</div>
                <div className="text-lg font-bold font-display">{t('contact.addrLine') as string}</div>
                <div className="text-xs text-slate-300">{t('contact.city') as string}</div>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="text-xs uppercase tracking-widest text-accent font-mono">{t('contact.phoneTitle') as string}</div>
                <a href="tel:+380674589247" className="text-xl font-bold text-white hover:text-accent transition-colors block font-mono min-h-[44px] flex items-center">
                  +380 (67) 458-92-47
                </a>
                <div className="text-xs text-slate-300">Пн–Пт: 09:00 – 20:00 | Сб: 09:00 – 16:00</div>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="text-xs uppercase tracking-widest text-accent font-mono">{t('contact.emailTitle') as string}</div>
                <a href="mailto:symmetricalviv@gmail.com" className="text-sm font-medium text-slate-200 hover:text-accent transition-colors block min-h-[44px] flex items-center">
                  symmetricalviv@gmail.com
                </a>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="text-xs uppercase tracking-widest text-accent font-mono">{t('contact.socialTitle') as string}</div>
                <div className="flex gap-4 text-xs font-semibold pt-1">
                  <a href="https://www.instagram.com/symmetrica_dent/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline min-h-[44px] flex items-center">
                    Instagram →
                  </a>
                  <a href="https://www.facebook.com/SymmetricaDent/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline min-h-[44px] flex items-center">
                    Facebook →
                  </a>
                </div>
              </div>

            </div>

            <a
              href="https://maps.google.com/?q=вул.+Стрийська,+45,+Львів"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 px-6 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow min-h-[44px] flex items-center justify-center"
            >
              Відкрити у Google Maps →
            </a>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-7 bg-slate-200 rounded-3xl overflow-hidden shadow-lg border border-border-light min-h-[350px]">
            <iframe
              title="Symmetrica Location Map"
              src={mapEmbedUrl}
              className="w-full h-full border-0 min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
