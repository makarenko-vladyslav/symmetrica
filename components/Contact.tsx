"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Contact() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="py-20 px-4 sm:px-6 bg-[hsl(150_15%_97%)] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-lg">
            <div className="flex flex-col gap-2 mb-8">
              <div className="text-xs uppercase tracking-[0.25em] font-bold text-[hsl(155_75%_38%)]">
                {String(t('contact.kicker'))}
              </div>
              <h2 className="font-display text-3xl font-normal text-[hsl(162_40%_12%)]">
                {String(t('contact.title'))}
              </h2>
              <p className="text-xs sm:text-sm text-[hsl(162_15%_42%)] font-light">
                {String(t('contact.subtitle'))}
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[hsl(150_20%_93%)] border border-[hsl(155_75%_38%)] text-center flex flex-col gap-3">
                <div className="font-display text-2xl font-bold text-[hsl(162_40%_12%)]">
                  {String(t('contact.form.successTitle'))}
                </div>
                <p className="text-xs text-[hsl(162_15%_42%)]">
                  {String(t('contact.form.successMessage'))}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase text-[hsl(162_40%_12%)]">
                    {String(t('contact.form.nameLabel'))} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={String(t('contact.form.namePlaceholder'))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[hsl(155_75%_38%)] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase text-[hsl(162_40%_12%)]">
                    {String(t('contact.form.phoneLabel'))} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={String(t('contact.form.phonePlaceholder'))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[hsl(155_75%_38%)] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase text-[hsl(162_40%_12%)]">
                    {String(t('contact.form.commentLabel'))}
                  </label>
                  <textarea
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={String(t('contact.form.commentPlaceholder'))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[hsl(155_75%_38%)] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[hsl(155_75%_38%)] hover:bg-[hsl(155_75%_32%)] text-white font-semibold text-sm transition-all shadow-md mt-2"
                >
                  {String(t('contact.form.submit'))}
                </button>
              </form>
            )}
          </div>

          {/* Info & Map Embed */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[hsl(162_55%_8%)] text-white p-8 rounded-3xl flex flex-col gap-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-[hsl(155_75%_55%)] font-bold mb-1">
                  {String(t('contact.info.addressTitle'))}
                </div>
                <div className="text-sm text-white/90 font-light">
                  {String(t('contact.info.addressVal'))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="text-xs uppercase tracking-wider text-[hsl(42_65%_52%)] font-bold mb-1">
                  {String(t('contact.info.hoursTitle'))}
                </div>
                <div className="text-sm text-white/90 font-light">
                  {String(t('contact.info.hoursVal'))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="text-xs uppercase tracking-wider text-white/60 font-bold mb-1">
                  {String(t('contact.info.phoneTitle'))}
                </div>
                <a href="tel:+380674589247" className="text-lg font-mono font-bold text-[hsl(155_75%_55%)]">
                  {String(t('contact.info.phoneVal'))}
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-64 rounded-3xl overflow-hidden border border-gray-200 shadow-md">
              <iframe
                title={String(t('contact.info.googleMapsLocation') || 'Symmetrica Location')}
                src="https://www.google.com/maps?q=Stryiska+St+45+Lviv&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}