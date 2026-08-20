"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function ContactForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const serviceOptions = t('contact.options') as string[];

  return (
    <section id="contact" className="py-24 bg-primary text-white scroll-mt-16 relative overflow-hidden border-t border-white/10">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Invitation Copy & Structured Hours Table */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3 font-mono">
                {t('contact.kicker') as string}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight mb-4">
                {t('contact.invitationTitle') as string}
              </h2>
              <p className="text-base text-white/70 font-light leading-relaxed">
                {t('contact.subtitle') as string}
              </p>
            </Reveal>

            {/* Direct Contacts & Structured Hours Mini-Table */}
            <Reveal delay={0.2}>
              <div className="space-y-6 pt-6 border-t border-white/15 text-xs font-light">
                
                {/* Structured Hours Mini-Table */}
                <div>
                  <div className="text-accent font-mono uppercase tracking-widest font-semibold mb-3">
                    {t('contact.hoursTitle') as string}
                  </div>
                  <div className="space-y-1.5 font-mono text-white/80">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1 border-b border-white/10">
                      <span>{t('contact.weekdayLabel') as string}</span>
                      <span className="text-accent font-bold">{t('contact.weekdayTime') as string}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1 border-b border-white/10">
                      <span>{t('contact.saturdayLabel') as string}</span>
                      <span className="text-accent font-bold">{t('contact.saturdayTime') as string}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1">
                      <span>{t('contact.sundayLabel') as string}</span>
                      <span className="text-white/40">{t('contact.sundayTime') as string}</span>
                    </div>
                  </div>
                </div>

                {/* Address + Map Line */}
                <div className="pt-2">
                  <div className="text-accent font-mono uppercase tracking-widest font-semibold mb-1">
                    {t('contact.locationLabel') as string}
                  </div>
                  <div className="text-white text-sm font-display">
                    {t('contact.locationText') as string}
                  </div>
                </div>

                {/* Direct Phone & Trust Line */}
                <div className="pt-2 space-y-1">
                  <div className="text-accent font-mono uppercase tracking-widest font-semibold">
                    {t('contact.directLineLabel') as string}
                  </div>
                  <a href="tel:+380674589247" className="text-white text-lg font-mono font-bold hover:text-accent transition-colors block py-1">
                    +38 (067) 458-92-47
                  </a>
                  <p className="text-[11px] text-white/50 italic pt-1">
                    {t('contact.trustMicro') as string}
                  </p>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <Reveal delay={0.3}>
              <div className="bg-bg-card rounded-3xl p-8 sm:p-10 text-text-main shadow-2xl border border-primary/10">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/40 text-accent font-bold text-2xl flex items-center justify-center mx-auto font-mono">
                      OK
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-primary">
                      {t('contact.successTitle') as string}
                    </h3>
                    <p className="text-sm text-text-muted max-w-md mx-auto">
                      {t('contact.successMessage') as string}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2 font-mono">
                          {t('contact.formName') as string} *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder={t('contact.namePlaceholder') as string}
                          className="w-full px-4 py-3 rounded-xl bg-bg-light border border-primary/15 text-sm focus:border-accent focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2 font-mono">
                          {t('contact.formPhone') as string} *
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+380 67 000 00 00"
                          className="w-full px-4 py-3 rounded-xl bg-bg-light border border-primary/15 text-sm focus:border-accent focus:outline-none font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2 font-mono">
                          {t('contact.formService') as string}
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl bg-bg-light border border-primary/15 text-sm focus:border-accent focus:outline-none">
                          {serviceOptions.map((opt, idx) => (
                            <option key={idx}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2 font-mono">
                          {t('contact.formDate') as string}
                        </label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 rounded-xl bg-bg-light border border-primary/15 text-sm focus:border-accent focus:outline-none font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-bg-light border border-primary/10">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded text-accent accent-accent"
                        />
                        <span className="text-xs text-text-main font-medium">
                          {t('contact.formSedationOption') as string}
                        </span>
                      </label>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2 font-mono">
                        {t('contact.formNote') as string}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={t('contact.textareaPlaceholder') as string}
                        className="w-full px-4 py-3 rounded-xl bg-bg-light border border-primary/15 text-sm focus:border-accent focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-full bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider text-xs transition-all shadow-xl shadow-accent/30"
                    >
                      {loading ? '...' : (t('contact.submit') as string)}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
