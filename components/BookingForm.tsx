"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BookingForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const servicesList = (t("booking.servicesList") as string[]) || [];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: servicesList[0] || "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-primary text-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest font-bold text-accent mb-2">
            {t("booking.kicker") as string}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {t("booking.title") as string}
          </h2>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            {t("booking.subtitle") as string}
          </p>
        </div>

        <div className="bg-bg-dark/80 p-8 sm:p-12 rounded-2xl border border-white/10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {t("booking.form.successTitle") as string}
              </h3>
              <p className="text-white/80 text-sm max-w-md mx-auto">
                {t("booking.form.successText") as string}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-white/90 uppercase tracking-wider mb-2">
                    {t("booking.form.name") as string} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t("booking.form.namePlaceholder") as string}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/90 uppercase tracking-wider mb-2">
                    {t("booking.form.phone") as string} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t("booking.form.phonePlaceholder") as string}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-white/90 uppercase tracking-wider mb-2">
                    {t("booking.form.service") as string}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/20 text-white focus:outline-none focus:border-accent"
                  >
                    {servicesList.map((srv, idx) => (
                      <option key={idx} value={srv} className="bg-gray-900 text-white">
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/90 uppercase tracking-wider mb-2">
                    {t("booking.form.date") as string}
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/90 uppercase tracking-wider mb-2">
                  {t("booking.form.message") as string}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-accent hover:bg-accent/90 text-primary font-bold text-xs uppercase tracking-wider rounded-md transition-colors shadow-lg"
              >
                {loading ? (t("booking.form.submitting") as string) : (t("booking.form.submit") as string)}
              </button>

              <p className="text-[11px] text-white/50 text-center">
                {t("booking.form.privacy") as string}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}