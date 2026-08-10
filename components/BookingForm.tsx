"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function BookingForm() {
  const { t } = useLocale();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '3D Комп’ютерна томографія (КТ)',
    preferredDate: '',
    note: ''
  });

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

  return (
    <section id="booking" className="py-20 bg-primary text-white relative overflow-hidden">
      
      {/* Decorative Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16vw] font-display font-bold text-white/[0.02] pointer-events-none select-none whitespace-nowrap z-0 uppercase tracking-widest">
        BOOKING
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal className="bg-bg-card text-text-main rounded-3xl p-8 sm:p-12 shadow-2xl border border-border-light">
          
          <div className="text-center space-y-3 mb-8">
            <span className="text-xs uppercase tracking-widest text-accent font-bold font-mono">
              ПРИЙОМ ЗА ЗАПИСОМ
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-primary">
              Забронюйте час первинного огляду та 3D-діагностики
            </h2>
            <p className="text-slate-600 font-body text-xs sm:text-sm max-w-lg mx-auto">
              Отримайте персональний план реабілітації з розрахунком кошторису за один візит.
            </p>
          </div>

          {submitted ? (
            <div className="bg-accent/10 border border-accent rounded-2xl p-8 text-center space-y-4">
              <h3 className="text-xl font-bold font-display text-primary">
                Вашу заявку успішно прийнято!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-body max-w-md mx-auto">
                Сервіс-менеджер Symmetrica зателефонує вам найближчим часом для підтвердження візиту.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-accent underline pt-2 min-h-[44px]"
              >
                Надіслати ще одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Ваше ім'я *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Олександр"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-light border border-border-light rounded-xl text-sm focus:outline-none focus:border-accent text-primary font-body"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Номер телефону *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+380 (67) 000-00-00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-light border border-border-light rounded-xl text-sm focus:outline-none focus:border-accent text-primary font-body"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Послуга або напрямок
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-light border border-border-light rounded-xl text-sm focus:outline-none focus:border-accent text-primary font-body"
                  >
                    <option>{t('booking.opt1') as string}</option>
                    <option>{t('booking.opt2') as string}</option>
                    <option>{t('booking.opt3') as string}</option>
                    <option>{t('booking.opt4') as string}</option>
                    <option>{t('booking.opt5') as string}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Бажана дата візиту
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-light border border-border-light rounded-xl text-sm focus:outline-none focus:border-accent text-primary font-body"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  Короткий коментар
                </label>
                <textarea
                  rows={3}
                  placeholder="Опишіть ваші скарги або побажання..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-light border border-border-light rounded-xl text-sm focus:outline-none focus:border-accent text-primary font-body"
                />
              </div>

              {/* Structured Info Row */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-1">
                <div className="flex justify-between flex-wrap gap-2">
                  <span>{t('booking.schedule') as string} <strong>Пн–Пт 09:00–20:00 · Сб 09:00–16:00</strong></span>
                  <span>{t('booking.loc') as string} <strong>{t('booking.addr') as string}</strong></span>
                </div>
                <div className="text-[11px] text-slate-500 pt-1">
                  Офіційний договір · Гарантія на роботи · Ліцензія МОЗ України №582910
                </div>
              </div>

              <div className="pt-2 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 min-h-[44px] flex items-center justify-center"
                >
                  {loading ? 'Надсилання заявки...' : 'Записатися на консультацію →'}
                </button>

                <a href="tel:+380674589247" className="text-xs font-bold text-primary hover:text-accent font-mono min-h-[44px] flex items-center">
                  або зателефонуйте: +380 (67) 458-92-47
                </a>
              </div>

            </form>
          )}

        </Reveal>

      </div>
    </section>
  );
}
