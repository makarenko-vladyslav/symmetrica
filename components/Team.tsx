
"use client";

import { useLocale } from "@/lib/i18n";

export default function Team() {
  const { t } = useLocale();

  const realTeam = [
    { name: "Андрій Іванців", role: "Засновник, ортодонт, ортопед" },
    { name: "Мар'ян Шляхта", role: "Медичний директор, стоматолог-ортодонт" },
    { name: "Андрій Гриневич", role: "Хірург-імплантолог, ортопед" },
    { name: "Олександр Біган", role: "Керівник анестезіологічної служби" },
    { name: "Олексій Мотрук", role: "Стоматолог-хірург" },
    { name: "Андрій Комащенко", role: "Лікар-анестезіолог" },
    { name: "Вікторія Стадницька", role: "Стоматолог-ортопед" },
    { name: "Поліна Сухенко", role: "Стоматолог-пародонтолог" },
  ];

  return (
    <section id="team" className="py-20 sm:py-24 bg-white text-[hsl(210_35%_15%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[hsl(185_85%_36%)] block mb-3">
            {String(t("team.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            {String(t("team.title"))}
          </h2>
          <p className="text-sm sm:text-base text-[hsl(210_15%_45%)] font-body">
            {String(t("team.subtitle"))}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {realTeam.map((m, idx) => {
            const initials = m.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[hsl(195_25%_98%)] border border-gray-200/80 text-center flex flex-col items-center hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-[hsl(210_50%_12%)] text-[hsl(185_85%_45%)] font-display font-bold text-xl flex items-center justify-center mb-4 shadow-md">
                  {initials}
                </div>
                <h3 className="text-base font-display font-bold text-[hsl(210_50%_12%)] mb-1">
                  {m.name}
                </h3>
                <p className="text-xs text-[hsl(210_15%_45%)] font-body font-medium">
                  {m.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
