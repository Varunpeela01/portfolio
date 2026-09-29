import React from 'react';

interface ExperienceEntry {
  period: string;
  role: string;
  industry: string;
  company: string;
  isCurrent?: boolean;
  narrative: string;
}

const EXPERIENCES_DATA: ExperienceEntry[] = [
  {
    period: '01/2026 – NOW',
    company: 'BYODH',
    role: 'Co-Founder & Lead Designer',
    industry: 'Construction Tech',
    isCurrent: true,
    narrative:
      'Spearheading product strategy and mobile design for a zero-to-one construction tech startup, building a multi-sided marketplace connecting consumers, materials, and professionals.',
  },
  {
    period: '12/2025 – NOW',
    company: 'Independent',
    role: 'Freelance Product Designer',
    industry: 'Startups & Ventures',
    isCurrent: true,
    narrative:
      'HireDesk (Dec 2025 – Present): Architected a high-density, real-time B2B dashboard for enterprise fleet and asset management.\n\nRefill Health (Dec 2025 – Jun 2026): Designed a premium, multi-platform healthcare SaaS ecosystem bridging employee mobile onboarding with clinical administration.',
  },
  {
    period: '06/2024 – 11/2025',
    company: 'SaralTech',
    role: 'Product Designer & Project Manager',
    industry: 'Logistics & Fleet SaaS',
    isCurrent: false,
    narrative:
      'Led end-to-end UX architecture and design systems across enterprise logistics and heavy equipment platforms, significantly improving operational workflows.',
  },
  {
    period: '01/2024 – 05/2024',
    company: 'SaralTech',
    role: 'UI/UX Design Intern',
    industry: 'Enterprise Software',
    isCurrent: false,
    narrative:
      'Collaborated on rapid prototyping and user research, helping translate complex business requirements into high-fidelity web applications.',
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-28 sm:py-36 bg-[#090D16] relative border-t border-white/[0.08]">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/[0.04] rounded-full blur-[160px] -z-10" />

      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-12">
        {/* Section Header — Matching Reference Pixel-by-Pixel */}
        <div className="mb-16 sm:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 border-b border-white/[0.08]">
          <div className="lg:col-span-7">
            <div className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
              <span>◦ 03 ◦</span>
              <span>EXPERIENCE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.05]">
              A short list of{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">long days.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
              Shifting contexts, evolving roles, different teams and fresh problem statements, all driving toward one unwavering result: complex getting simplified.
            </p>
          </div>
        </div>

        {/* Timeline Layout matching ref_ritik_04_experience.png */}
        <div className="relative">
          {/* Continuous vertical timeline line */}
          <div className="hidden sm:block absolute left-[158px] top-6 bottom-6 w-[1px] bg-white/[0.12]" />

          <div className="space-y-10 sm:space-y-12">
            {EXPERIENCES_DATA.map((exp, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 group">
                {/* Date column (left) */}
                <div className="sm:w-36 text-left sm:text-right shrink-0 sm:pt-6">
                  <span className="font-mono text-xs sm:text-[13px] tracking-wider text-white/50 group-hover:text-sky-300 transition-colors whitespace-nowrap block">
                    {exp.period}
                  </span>
                </div>

                {/* Node column (center) */}
                <div className="hidden sm:flex items-center justify-center shrink-0 sm:pt-6 relative z-10">
                  <div className="w-5 h-5 rounded-full border border-sky-400/60 bg-[#090D16] flex items-center justify-center group-hover:border-sky-300 transition-all">
                    <div className="w-2 h-2 rounded-full bg-sky-400 group-hover:scale-125 shadow-[0_0_8px_#38BDF8] transition-all" />
                  </div>
                </div>

                {/* Card Container (right) */}
                <div className="flex-1 min-w-0 rounded-[28px] border border-white/[0.08] bg-[#0C101A]/60 hover:bg-[#0C101A]/90 backdrop-blur-xl p-7 sm:p-9 space-y-4 hover:border-sky-500/30 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_35px_rgba(56,189,248,0.05)]">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl sm:text-[26px] font-semibold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="font-mono text-xs text-white/50 tracking-wider mt-1">
                        {exp.role} · <span className="text-white/40">{exp.industry}</span>
                      </p>
                    </div>

                    {exp.isCurrent && (
                      <span className="shrink-0 px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest font-semibold bg-sky-500 text-slate-950 uppercase shadow-[0_0_12px_rgba(56,189,248,0.35)]">
                        CURRENT
                      </span>
                    )}
                  </div>

                  {/* Clean Editorial Narrative Paragraph */}
                  <p className="text-sm sm:text-[15px] text-slate-300/80 font-light leading-[1.7] pt-1 whitespace-pre-line">
                    {exp.narrative}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
