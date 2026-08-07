"use client";

import { useLocale } from "@/lib/i18n";

export default function Team() {
  const { t } = useLocale();

  const members = t("team.members") as Array<{
    name: string;
    role: string;
    exp: string;
  }>;

  return (
    <section id="team" className="py-20 sm:py-24 bg-bg-light text-text-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-bold block">
            {t("team.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary">
            {t("team.title") as string}
          </h2>
          <p className="text-base text-text-muted font-body">
            {t("team.subtitle") as string}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(members) &&
            members.map((doc, idx) => {
              const initials = doc.name
                .split(" ")
                .map((n) => n[0])
                .join("");

              return (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-white border border-border-light shadow-sm hover:shadow-md transition-all space-y-4 group"
                >
                  <div className="w-16 h-16 rounded bg-primary text-accent font-display font-bold text-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    {initials}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-bold text-primary">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
                      {doc.role}
                    </p>
                  </div>

                  <p className="text-xs font-mono text-text-muted pt-3 border-t border-border-light">
                    {doc.exp}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
