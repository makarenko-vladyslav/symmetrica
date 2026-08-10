"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function BookingForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "3D КТ Комп'ютерна томографія (800 UAH)",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 bg-[var(--color-primary)] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Background Decorative Type Layer */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none text-[18vw] font-display font-bold text-white/[0.02] uppercase tracking-widest whitespace-nowrap"
      >
        RESERVATION
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="max-w-3xl mx-auto bg-white text-[var(--color-text-main)] rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-2xl space-y-8">
          
          {/* Layer 1-3: Kicker, Invitation Heading, Lede */}
          <Reveal className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
              {String(t("bookingForm.kicker"))}
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-[var(--color-text-main)]">
              {String(t("bookingForm.title"))}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl mx-auto">
              {String(t("bookingForm.subtitle"))}
            </p>
          </Reveal>

          {/* Layer 4: Structured Hours & Location Reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[var(--color-bg-light)] border border-gray-200 text-xs">
            <div>
              <p className="font-bold text-[var(--color-primary)] uppercase tracking-wider">{String(t("bookingForm.workScheduleLabel"))}</p>
              <p className="text-gray-600 mt-0.5 tabular-nums">Пн-Пт: 09:00 - 20:00 · Сб: 09:00 - 16:00</p>
            </div>
            <div>
              <p className="font-bold text-[var(--color-primary)] uppercase tracking-wider">{String(t("bookingForm.clinicAddressLabel"))}</p>
              <p className="text-gray-600 mt-0.5">{String(t("bookingForm.clinicAddressText"))}</p>
            </div>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-display font-bold text-emerald-900">
                Заявку успішно прийнято!
              </h3>
              <p className="text-sm text-emerald-700">
                Сервіс-менеджер Symmetrica зателефонує вам найближчим часом для підтвердження часу.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                    Ваше ім'я *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={String(t("bookingForm.namePlaceholder"))}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                    Номер телефону *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={String(t("bookingForm.phonePlaceholder"))}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none text-sm tabular-nums"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                    Оберіть послугу
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none text-sm bg-white"
                  >
                    <option>{String(t("bookingForm.opt1"))}</option>
                    <option>{String(t("bookingForm.opt2"))}</option>
                    <option>{String(t("bookingForm.opt3"))}</option>
                    <option>{String(t("bookingForm.opt4"))}</option>
                    <option>{String(t("bookingForm.opt5"))}</option>
                    <option>{String(t("bookingForm.opt6"))}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
                    Бажана дата візиту
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none text-sm bg-white"
                  />
                </div>
              </div>

              {/* Layer 5: Primary CTA + Tel Text-Link */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg"
                >
                  {String(t("bookingForm.submitCta"))}
                </button>
                <div className="text-center text-xs text-gray-500">
                  Або зателефонуйте прямо зараз:{" "}
                  <a href="tel:+380674589247" className="font-bold text-[var(--color-primary)] hover:underline tabular-nums">
                    +380 67 458 92 47
                  </a>
                </div>
              </div>

              {/* Layer 6: Trust Micro-Line */}
              <p className="text-center text-[11px] text-gray-400">
                {String(t("bookingForm.guarantee"))}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}