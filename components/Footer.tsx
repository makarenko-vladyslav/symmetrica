"use client";

import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[hsl(162_55%_8%)] text-white pt-20 pb-10 px-4 sm:px-6 border-t border-[hsl(162_35%_26%/0.4)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Branding Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-white/10 pb-10">
          <div className="flex flex-col gap-3">
            <img 
              src="https://cdn.prod.website-files.com/65b22ee2a70bd488c02e918e/664f346033a636ff1febebae_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D1%8„.svg" 
              alt={String(t('footer.wordmark'))}
              className="h-10 w-auto object-contain"
            />
            <p className="text-xs sm:text-sm text-[hsl(155_75%_55%)] font-light">
              {String(t('footer.subline'))}
            </p>
          </div>

          <a
            href="#contacts"
            className="px-6 py-3 rounded-full bg-[hsl(155_75%_38%)] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[hsl(155_75%_32%)] transition-colors"
          >
            Записатися на прийом ↗
          </a>
        </div>

        {/* Legal & Medical License */}
        <div className="text-xs text-white/50 leading-relaxed font-light">
          {String(t('footer.license'))}
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 pt-6 border-t border-white/10 font-sans">
          <div>
            © {new Date().getFullYear()} SYMMETRICA. {String(t('footer.rights'))}
          </div>
          <div>
            {String(t('footer.developedBy'))}
          </div>
        </div>
      </div>
    </footer>
  );
}