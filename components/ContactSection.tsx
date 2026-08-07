"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/lib/i18n";

export default function ContactSection() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contacts" className="py-20 sm:py-24 bg-bg-light text-text-main relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-bold block">
            {t("contacts.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary">
            {t("contacts.title") as string}
          </h2>
          <p className="text-base font-body text-text-muted">
            {t("contacts.invitation") as string}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-xl bg-white border border-border-light shadow-md space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold block">
                  {t("contacts.addressTitle") as string}
                </span>
                <p className="text-base font-display font-bold text-primary">
                  {t("contacts.address") as string}
                </p>
                <p className="text-xs font-mono text-text-muted">м. Львів, Франківський район</p>
              </div>

              <div className="space-y-1 border-t border-border-light pt-4">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold block">
                  {t("contacts.phoneTitle") as string}
                </span>
                <a
                  href="tel:+380674589258"
                  className="text-lg font-mono font-bold text-primary hover:text-accent transition-colors block"
                >
                  +38 (067) 458-92-58
                </a>
              </div>

              <div className="space-y-1 border-t border-border-light pt-4">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold block">
                  {t("contacts.emailTitle") as string}
                </span>
                <p className="text-sm font-mono text-primary">
                  symmetricalviv@gmail.com
                </p>
              </div>

              {/* Structured Hours Mini-Table */}
              <div className="space-y-2 border-t border-border-light pt-4">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold block">
                  {t("contacts.hoursTitle") as string}
                </span>
                <div className="text-xs font-mono space-y-1 text-primary">
                  <div className="flex justify-between">
                    <span>Пн — Пт:</span>
                    <span className="font-bold">09:00 — 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Субота:</span>
                    <span className="font-bold">09:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>Неділя:</span>
                    <span>За попереднім записом</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-xl overflow-hidden shadow-md border border-border-light h-[240px]">
              <iframe
                src="https://www.google.com/maps?q=вулиця+Стрийська+45+Львів&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Symmetrica Dental Location"
              />
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-xl bg-white border border-border-light shadow-xl space-y-6">
              <h3 className="text-2xl font-display font-bold text-primary">
                {t("contacts.formTitle") as string}
              </h3>

              {submitted ? (
                <div className="p-6 rounded bg-accent/10 border border-accent text-accent font-mono text-xs font-semibold text-center space-y-2">
                  <p>{t("contacts.successMessage") as string}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-primary mb-1 uppercase tracking-wider">
                      Ваше ім&apos;я:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t("contacts.namePlaceholder") as string}
                      className="w-full px-4 py-3 rounded border border-border-light focus:border-accent outline-none text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-primary mb-1 uppercase tracking-wider">
                      Номер телефону:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t("contacts.phonePlaceholder") as string}
                      className="w-full px-4 py-3 rounded border border-border-light focus:border-accent outline-none text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-primary mb-1 uppercase tracking-wider">
                      {t("contacts.serviceSelect") as string}:
                    </label>
                    <select className="w-full px-4 py-3 rounded border border-border-light focus:border-accent outline-none text-xs font-mono bg-white">
                      <option>3D-діагностика Vatech & консультація (1 500 UAH)</option>
                      <option>Імплантація All-on-4 / All-on-6</option>
                      <option>Поштучна цифрова імплантація</option>
                      <option>Керамічні вініри E-max</option>
                      <option>Лікування під седацією (уві сні)</option>
                      <option>Елайнери / Ортодонтія</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-primary mb-1 uppercase tracking-wider">
                      {t("contacts.dateLabel") as string}:
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded border border-border-light focus:border-accent outline-none text-xs font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded bg-accent hover:bg-accent-hover text-white font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-lg"
                  >
                    {loading ? "Відправка..." : (t("contacts.submit") as string)}
                  </button>

                  <p className="text-[10px] font-mono text-text-muted text-center leading-relaxed">
                    Натискаючи кнопку, ви погоджуєтеся з обробкою персональних даних згідно з чинним законодавством України.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
