"use client";

import { useLocale } from "@/lib/i18n";
import { Stagger, StaggerItem } from "@/components/motion";

interface TeamMember {
  name: string;
  role: string;
  photo?: string;
}

export default function TeamSection() {
  const { t } = useLocale();
  const teamData = t("team") as {
    kicker: string;
    title: string;
    subtitle: string;
    items: TeamMember[];
  };

  return (
    <section id="team" className="py-24 bg-white border-t border-[hsl(210_15%_90%)] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[hsl(188_85%_38%)] mb-3">
            {teamData.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[hsl(210_30%_14%)] mb-4">
            {teamData.title}
          </h2>
          <p className="text-base sm:text-lg font-body text-[hsl(210_15%_45%)]">
            {teamData.subtitle}
          </p>
        </div>

        {/* Team Member Cards with 3:4 aspect ratio portraits */}
        <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamData.items.map((person, idx) => (
            <StaggerItem
              key={idx}
              className="bg-[hsl(210_20%_98%)] rounded-xl overflow-hidden border border-[hsl(210_15%_88%)] group hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-full aspect-[3/4] bg-slate-200 overflow-hidden relative">
                {person.photo ? (
                  <img
                    src={person.photo}
                    alt={person.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[hsl(205_45%_12%)] text-white text-2xl font-serif font-bold">
                    {person.name.split(" ").map((n: string) => n[0]).join("")}
                  </div>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[hsl(210_30%_14%)]">
                    {person.name}
                  </h3>
                  <p className="text-xs font-body text-[hsl(188_85%_38%)] font-semibold mt-1">
                    {person.role}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
