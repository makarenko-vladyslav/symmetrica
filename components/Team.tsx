"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function Team() {
  const { t } = useLocale();
  const teamMembers = (t('teamMembersList') as Array<{ name: string; role: string; image: string | null }>) || [];

  return (
    <section id="team" className="py-20 bg-bg-light text-text-main relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display font-bold text-primary/[0.02] pointer-events-none select-none whitespace-nowrap z-0 uppercase tracking-widest">
        EXPERTS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-accent font-bold font-mono">
            ЕКСПЕРТНА КОМАНДА
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-primary">
            Усі 17 лікарів та фахівців Центру Symmetrica
          </h2>
          <p className="text-slate-600 font-body text-sm sm:text-base">
            Міждисциплінарний підхід: хірурги, ортопеди, анестезіологи та гнатологи співпрацюють разом для розробки вашого персонального плану реабілітації.
          </p>
        </Reveal>

        {/* Grid for all 17 team members */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <Reveal key={idx} delay={(idx % 4) * 0.05}>
              <div className="bg-bg-card rounded-2xl border border-border-light overflow-hidden shadow-sm p-6 text-center flex flex-col items-center h-full hover:shadow-md transition-shadow">
                
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-2 border-accent mb-4 shadow-sm"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-28 h-28 rounded-full bg-primary text-accent font-display text-xl font-bold flex items-center justify-center border-2 border-accent mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}

                <h3 className="font-bold font-display text-primary text-base">
                  {member.name}
                </h3>
                <p className="text-xs text-accent font-medium mt-1">
                  {member.role}
                </p>
                <p className="text-[11px] text-slate-500 font-body mt-2">
                  Центр Symmetrica, м. Львів
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
