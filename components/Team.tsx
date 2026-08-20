"use client";

import { useLocale } from '@/lib/i18n';

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  photo?: string;
}

export default function Team() {
  const { t } = useLocale();
  const members = (t('team.members') as TeamMember[]) || [];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 bg-[hsl(150_20%_93%)] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col gap-3 mb-16">
          <div className="text-xs uppercase tracking-[0.25em] font-bold text-[hsl(155_75%_38%)]">
            {String(t('team.kicker'))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[hsl(162_40%_12%)]">
            {String(t('team.title'))}
          </h2>
          <p className="text-base sm:text-lg text-[hsl(162_15%_42%)] max-w-2xl mx-auto font-light">
            {String(t('team.subtitle'))}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => {
            const initials = m.name.split(' ').map((n: string) => n[0] || '').join('');
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4"
              >
                <div className="flex flex-col gap-3">
                  {/* Visual Avatar Monogram Box or Real Portrait */}
                  {m.photo ? (
                    <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 mb-2">
                      <img 
                        src={m.photo} 
                        alt={m.name} 
                        loading="lazy" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-[hsl(162_48%_18%)] text-[hsl(42_65%_52%)] font-display text-2xl font-bold flex items-center justify-center">
                      {initials}
                    </div>
                  )}

                  <div>
                    <h3 className="font-display text-xl font-bold text-[hsl(162_40%_12%)]">
                      {m.name}
                    </h3>
                    <p className="text-xs font-semibold text-[hsl(155_75%_38%)] mt-0.5">
                      {m.role}
                    </p>
                  </div>

                  <div className="text-[0.7rem] uppercase tracking-wider font-semibold text-[hsl(162_15%_42%)] bg-gray-100 p-2 rounded-lg">
                    {m.experience}
                  </div>

                  <p className="text-xs text-[hsl(162_15%_42%)] font-light leading-relaxed">
                    {m.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
