"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function TeamSection() {
  const { t } = useLocale();
  const team = (t("teamSection.doctors") as Array<{ name: string; role: string; photo: string | null }>) || [];

  return (
    <section id="team" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            {String(t("teamSection.kicker"))}
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-main)]">
            {String(t("teamSection.title"))}
          </h2>
          <p className="text-base text-[var(--color-text-muted)]">
            {String(t("teamSection.subtitle"))}
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {team.map((member, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-[var(--color-bg-light)] rounded-2xl p-4 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 group flex flex-col items-center h-full">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-slate-200 mb-4 border-2 border-[var(--color-accent)]/30 shrink-0">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-[var(--color-primary)] text-white flex items-center justify-center font-display font-bold text-lg">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  )}
                </div>
                <h3 className="text-sm font-display font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[11px] text-[var(--color-text-muted)] mt-1 leading-tight font-light">
                  {member.role}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
