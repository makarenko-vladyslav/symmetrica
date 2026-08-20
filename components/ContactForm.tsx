"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useLocale();
  const formData = t("form") as Record<string, string>;
  const meta = t("meta") as Record<string, string>;

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(formData.serviceOpt1);
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="py-24 bg-[hsl(205_45%_10%)] text-white scroll-mt-16 relative overflow-hidden">
      {/* Background Watermark Layer */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-serif font-black uppercase text-white/[0.02] select-none pointer-events-none whitespace-nowrap z-0"
      >
        RESERVATION
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details & Hours Table */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[hsl(188_85%_48%)] mb-3">
                {formData.kicker}
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                {formData.invitationTitle}
              </h2>
              <p className="text-base font-body text-white/70">
                {formData.subtitle}
              </p>
            </div>

            {/* Address + Phone */}
            <div className="space-y-4 pt-4 border-t border-white/15 text-sm font-body">
              <div>
                <p className="text-xs uppercase font-sans font-bold text-[hsl(188_85%_48%)]">{formData.addressLabel}</p>
                <p className="text-lg font-serif font-bold text-white mt-1">{meta.address}</p>
              </div>

              <div>
                <p className="text-xs uppercase font-sans font-bold text-[hsl(188_85%_48%)]">{formData.phoneHeaderLabel}</p>
                <a href={`tel:${meta.phone}`} className="text-xl font-serif font-bold text-[hsl(188_85%_48%)] hover:underline mt-1 block font-tabular">
                  {meta.phoneFormatted}
                </a>
              </div>
            </div>

            {/* Structured Hours Mini-Table */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
              <p className="text-xs uppercase font-sans font-bold text-[hsl(188_85%_48%)]">{formData.scheduleHeader}</p>
              <div className="divide-y divide-white/10 text-xs font-body">
                <div className="py-2 flex justify-between">
                  <span className="text-white/70">{formData.weekdayLabel}</span>
                  <span className="font-bold text-white font-tabular">{meta.hoursWeekday}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-white/70">{formData.saturdayLabel}</span>
                  <span className="font-bold text-white font-tabular">{meta.hoursSaturday}</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="text-white/70">{formData.sundayLabel}</span>
                  <span className="font-bold text-[hsl(188_85%_48%)]">{meta.hoursSunday}</span>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-xl overflow-hidden border border-white/10 h-56 w-full shadow-md">
              <iframe
                title={formData.mapTitle}
                src="https://www.google.com/maps?q= вул.+Стрийська,+45,+Львів&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: High Contrast Solid Form */}
          <div className="lg:col-span-7 bg-white text-[hsl(210_30%_14%)] p-8 sm:p-10 rounded-2xl border border-white/20 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[hsl(188_85%_38%/0.1)] text-[hsl(188_85%_38%)] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-serif font-bold text-[hsl(210_30%_14%)]">
                  {formData.successHeading}
                </h3>
                <p className="text-base font-body text-[hsl(210_15%_45%)] max-w-md mx-auto leading-relaxed">
                  {formData.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase font-sans font-bold text-[hsl(210_15%_45%)] mb-2">
                    {formData.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={formData.namePlaceholder}
                    className="w-full px-4 py-3.5 bg-[hsl(210_20%_98%)] border border-[hsl(210_15%_88%)] rounded text-[hsl(210_30%_14%)] font-body focus:outline-none focus:border-[hsl(188_85%_38%)]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-sans font-bold text-[hsl(210_15%_45%)] mb-2">
                    {formData.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={formData.phonePlaceholder}
                    className="w-full px-4 py-3.5 bg-[hsl(210_20%_98%)] border border-[hsl(210_15%_88%)] rounded text-[hsl(210_30%_14%)] font-body focus:outline-none focus:border-[hsl(188_85%_38%)]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-sans font-bold text-[hsl(210_15%_45%)] mb-2">
                      {formData.serviceLabel}
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3.5 bg-[hsl(210_20%_98%)] border border-[hsl(210_15%_88%)] rounded text-[hsl(210_30%_14%)] font-body focus:outline-none focus:border-[hsl(188_85%_38%)]"
                    >
                      <option>{formData.serviceOpt1}</option>
                      <option>{formData.serviceOpt2}</option>
                      <option>{formData.serviceOpt3}</option>
                      <option>{formData.serviceOpt4}</option>
                      <option>{formData.serviceOpt5}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-sans font-bold text-[hsl(210_15%_45%)] mb-2">
                      {formData.dateLabel}
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3.5 bg-[hsl(210_20%_98%)] border border-[hsl(210_15%_88%)] rounded text-[hsl(210_30%_14%)] font-body focus:outline-none focus:border-[hsl(188_85%_38%)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-sans font-bold text-[hsl(210_15%_45%)] mb-2">
                    {formData.commentsLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={formData.commentPlaceholder}
                    className="w-full px-4 py-3.5 bg-[hsl(210_20%_98%)] border border-[hsl(210_15%_88%)] rounded text-[hsl(210_30%_14%)] font-body focus:outline-none focus:border-[hsl(188_85%_38%)]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[hsl(188_85%_38%)] hover:bg-[hsl(188_90%_30%)] text-white font-sans font-bold text-xs uppercase tracking-wider py-4 rounded transition-colors shadow-lg"
                >
                  {formData.submitButton}
                </button>

                <p className="text-[11px] text-[hsl(210_15%_55%)] text-center font-body">
                  {formData.trustLine}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
