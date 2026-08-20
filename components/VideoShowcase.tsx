"use client";

import { useLocale } from "@/lib/i18n";

export default function VideoShowcase() {
  const { t } = useLocale();
  const meta = t("meta") as Record<string, string>;

  return (
    <section className="py-20 bg-[hsl(205_45%_10%)] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[hsl(188_85%_48%)]">
              Відеоекскурсія клінікою
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
              Подивіться, як проходить прийом у Symmetrica
            </h2>
            <p className="text-base font-body text-white/70 leading-relaxed">
              Комфортні стерильні кабінети, приязний персонал та технології цифрового моделювання усмішки на вул. Стрийській, 45 у Львові.
            </p>
            <div className="pt-2">
              <a
                href="#contacts"
                className="inline-block bg-[hsl(188_85%_38%)] hover:bg-[hsl(188_90%_30%)] text-white text-xs font-sans font-bold uppercase tracking-wider px-6 py-3.5 rounded-md transition-colors shadow-md"
              >
                Забронювати час візиту
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video relative bg-black">
            <video
              controls
              playsInline
              poster="https://images.pexels.com/videos/6998091/pexels-photo-6998091.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
              className="w-full h-full object-cover"
            >
              <source
                src="https://videos.pexels.com/video-files/6998091/6998091-hd_1920_1080_25fps.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}