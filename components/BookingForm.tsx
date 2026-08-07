
"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BookingForm() {
  const { t } = useLocale();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Комплексна 3D-діагностика",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section id="booking" className="py-20 sm:py-24 bg-[hsl(212_48%_9%)] text-white relative overflow-hidden">
      {/* Background Watermark Type */}
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14vw] font-display font-black text-white/[0.02] pointer-events-none select-none uppercase whitespace-nowrap z-0"
      >
        BOOKING
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Invitation & Micro-table */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(185_85%_45%)] block mb-3">
              {String(t("booking.kicker"))}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              {String(t("booking.title"))}
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-body leading-relaxed mb-6">
              {String(t("booking.subtitle"))}
            </p>

            {/* Structured Hours Mini-Table */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 space-y-2 text-xs font-body">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-white/60">Понеділок — П'ятниця:</span>
                <span className="font-semibold text-white tabular-nums">09:00 – 20:00</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-white/60">Субота:</span>
                <span className="font-semibold text-white tabular-nums">09:00 – 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Неділя:</span>
                <span className="font-semibold text-[hsl(185_85%_45%)]">За попереднім записом</span>
              </div>
            </div>

            {/* Direct Phone & Address Line */}
            <div className="text-xs text-white/80 space-y-1 font-body">
              <div>Адреса: м. Львів, вул. Стрийська, 45</div>
              <div>
                Прямий зв'язок:{" "}
                <a href="tel:+380674589258" className="text-[hsl(185_85%_45%)] font-bold hover:underline tabular-nums">
                  +38 (067) 458-92-58
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Solid Opaque Form */}
          <div className="lg:col-span-7 bg-[hsl(210_50%_12%)] border border-white/15 p-8 sm:p-10 rounded-3xl shadow-2xl">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-[hsl(185_85%_36%/0.2)] border border-[hsl(185_85%_36%)] text-center">
                <h3 className="text-2xl font-display font-bold mb-2 text-white">
                  {String(t("booking.successTitle"))}
                </h3>
                <p className="text-xs text-white/80 font-body">
                  {String(t("booking.successDesc"))}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    ПІБ пацієнта
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={String(t("booking.namePlaceholder"))}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[hsl(185_85%_36%)] text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    Номер телефону
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={String(t("booking.phonePlaceholder"))}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[hsl(185_85%_36%)] text-xs tabular-nums"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      {String(t("booking.serviceSelectLabel"))}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[hsl(212_48%_9%)] border border-white/20 text-white focus:outline-none focus:border-[hsl(185_85%_36%)] text-xs"
                    >
                      <option value="Комплексна 3D-діагностика">Комплексна 3D-діагностика</option>
                      <option value="Імплантація All-on-4 / All-on-6">Імплантація All-on-4 / All-on-6</option>
                      <option value="Керамічні вініри E-max">Керамічні вініри E-max</option>
                      <option value="Лікування уві сні (Седація)">Лікування уві сні (Седація)</option>
                      <option value="Консультація ортодонта">Консультація ортодонта</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      {String(t("booking.dateLabel"))}
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[hsl(185_85%_36%)] text-xs"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[hsl(185_85%_36%)] hover:bg-[hsl(185_85%_30%)] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
                >
                  {String(t("booking.submitCta"))}
                </button>

                <p className="text-[0.65rem] text-center text-white/50">
                  {String(t("booking.privacy"))}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
