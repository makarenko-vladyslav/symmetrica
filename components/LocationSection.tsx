"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function LocationSection() {
  const { t } = useLocale();

  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Location details */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                ЛОКАЦІЯ КЛІНІКИ
              </span>
              <h2 className="text-3xl font-display font-bold text-[var(--color-text-main)] mt-2">
                Завітайте до Symmetrica у Львові
              </h2>
            </Reveal>

            <div className="space-y-4 text-xs sm:text-sm text-[var(--color-text-muted)]">
              <div className="p-4 rounded-xl bg-[var(--color-bg-light)] border border-gray-200 space-y-1">
                <p className="font-bold text-[var(--color-primary)] uppercase tracking-wider text-xs">{String(t("locationSection.addressLabel"))}</p>
                <p className="text-[var(--color-text-main)] font-medium">{String(t("locationSection.addressText"))}</p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--color-bg-light)] border border-gray-200 space-y-1">
                <p className="font-bold text-[var(--color-primary)] uppercase tracking-wider text-xs">{String(t("locationSection.phoneLabel"))}</p>
                <a href="tel:+380674589247" className="text-[var(--color-primary)] font-bold hover:underline tabular-nums">
                  +380 67 458 92 47
                </a>
              </div>

              <div className="p-4 rounded-xl bg-[var(--color-bg-light)] border border-gray-200 space-y-1">
                <p className="font-bold text-[var(--color-primary)] uppercase tracking-wider text-xs">{String(t("locationSection.emailLabel"))}</p>
                <p className="text-[var(--color-text-main)]">{String(t("locationSection.email"))}</p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--color-bg-light)] border border-gray-200 space-y-1">
                <p className="font-bold text-[var(--color-primary)] uppercase tracking-wider text-xs">{String(t("locationSection.hoursLabel"))}</p>
                <p className="text-[var(--color-text-main)] tabular-nums">{String(t("locationSection.hoursText"))}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <p className="font-bold uppercase tracking-wider text-[var(--color-primary)]">
                Для пацієнтів з інших міст та за кордону:
              </p>
              <p className="mt-1 leading-relaxed">
                Персональний сервіс-менеджер Горинь Соломія зустріне вас, допоможе з бронюванням готелю та трансфером.
              </p>
            </div>
          </div>

          {/* Interactive Google Map iframe embed */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[420px]">
              <iframe
                src="https://www.google.com/maps?q=Львів,+вул.+Стрийська,+45&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Карта розташування Symmetrica у Львові"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}