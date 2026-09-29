import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { HireDeskShowcase } from './showcases/HireDeskShowcase';
import { ByodhShowcase } from './showcases/ByodhShowcase';
import { RefillShowcase } from './showcases/RefillShowcase';
import { FitnessShowcase } from './showcases/FitnessShowcase';

interface WorksSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({ onSelectProject }) => {
  const fleetProject = PROJECTS.find((p) => p.id === 'fleet-platform') || PROJECTS[0];
  const constructionProject = PROJECTS.find((p) => p.id === 'construction-materials') || PROJECTS[1];
  const mentalHealthProject = PROJECTS.find((p) => p.id === 'mental-health-platform') || PROJECTS[2];
  const fitnessProject = PROJECTS.find((p) => p.id === 'fitness-mobile-app') || PROJECTS[3];
  const HIDE_PREVEALTH = false;

  const caseCards = [
    {
      num: '01',
      year: '2026',
      project: fleetProject,
      title: 'Consolidating 18-column legacy spreadsheets into real-time operational clarity.',
      tags: ['Product Redesign', 'Fleet Logistics', 'Operations Cockpit'],
      description:
        'Consolidated 18-column legacy ERP tables into an intuitive spatial operations cockpit, real-time IoT telematics, predictive maintenance alerts, and 1-click machine dispatches from office to field.',
      isImage: false,
      component: <HireDeskShowcase />,
      ctaText: 'View Case Study',
    },
    {
      num: '02',
      year: '2025',
      project: constructionProject,
      title: 'Built for 40°C direct glare, dusty job sites, and offline basement blueprints.',
      tags: ['Founder', 'Mobile 0→1', 'Construction Tech'],
      description:
        'An offline-first mobile operating system connecting homeowners, site supervisors, and contractors with live 3D blueprint inspections, milestone escrow payouts, and material procurement.',
      isImage: false,
      component: <ByodhShowcase />,
      ctaText: 'View More',
    },
    {
      num: '03',
      year: '2024',
      project: mentalHealthProject,
      title: 'Continuous care loops designed for resilient human recovery & clinician triage.',
      tags: ['HealthTech SaaS', 'Care Loops', 'Interaction Design'],
      description:
        'Replaced steep drop-off intake funnels with oscillating care pathways, pairing gentle 15-second emotional check-ins with clinician telemetry dashboards.',
      isImage: true,
      imageSrc: '/projects/refill-health-hero.png',
      ctaText: 'View More',
    },
    // Temporarily hidden: Prevealth project (preserved intact to re-enable anytime)
    ...(!HIDE_PREVEALTH
      ? [
          {
            num: '04',
            year: '2024',
            project: fitnessProject,
            title: 'Bridging daily consumer lifestyle tracking with clinical professional oversight.',
            tags: ['Anti-Aging & Longevity', 'Dual-Sided B2B2C', 'Clinical Web + Mobile App'],
            description:
              'A dual-sided preventative health ecosystem pairing a motivating consumer mobile app (16h fasting, modular widgets) with a high-density B2B web portal for doctors and coaches.',
            isImage: false,
            component: <FitnessShowcase />,
            ctaText: 'View Case Study',
          },
        ]
      : []),
  ];

  const methodPrinciples = [
    {
      tag: '01 · MINDSET',
      title: 'AI-First Interaction Design',
      body: 'Designing for variable states, not just static screens. I build dynamic workflows where AI feels like a natural, helpful assistant rather than a clunky add-on.',
    },
    {
      tag: '02 · LENS',
      title: 'Where Logic Meets Psychology',
      body: 'My engineering roots give me a love for scalable architecture, but my focus is the user. I design to cut cognitive load and make complex tools feel effortless.',
    },
    {
      tag: '03 · ARCHITECTURE',
      title: 'Obsessed with Systems',
      body: 'I design smart, not hard. I build highly optimized, modular design systems that guarantee visual consistency and make developer handoffs a total breeze.',
    },
    {
      tag: '04 · IMPACT',
      title: 'Guided by the Numbers',
      body: 'A beautiful UI only matters if it moves the needle. I dig straight into analytics, drop-offs, and funnels to ensure my designs actually solve core business problems.',
    },
  ];

  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28 bg-[#090D16] relative border-t border-white/[0.08]">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/[0.04] rounded-full blur-[160px] -z-10" />

      <div className="mx-auto max-w-[1100px] px-6 sm:px-8 lg:px-10">
        {/* Section Header — Matching Reference Editorial Style Pixel-by-Pixel */}
        <div className="mb-14 sm:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 border-b border-white/[0.08]">
          <div className="lg:col-span-7">
            <div className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
              <span>SELECTED WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.1]">
              Dialogues in{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">action.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              See how I think, solve, and bridge the gap between human logic and digital reality.
            </p>
          </div>
        </div>

        {/* Selected Work Cards List */}
        <div className="space-y-10 sm:space-y-20 pb-10 sm:pb-20">
          {caseCards.map((item, index) => (
            <article
              key={item.num}
              onClick={() => onSelectProject(item.project)}
              className="sticky snap-start group rounded-[28px] sm:rounded-[32px] border border-white/[0.08] bg-[#0A0D14] hover:bg-[#0C101A] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-sky-500/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(56,189,248,0.06)] cursor-pointer overflow-hidden"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '36px 36px',
                top: `calc(120px + ${index * 40}px)`,
                scrollMarginTop: `calc(120px + ${index * 40}px)`,
                zIndex: index + 10,
              }}
            >
              {/* Subtle card spotlight highlight */}
              <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-sky-500/[0.04] rounded-full blur-3xl group-hover:bg-sky-500/[0.08] transition-all" />

              {/* Serial & Year Badges (Exact Ritik Style: Clean circle outline on left, Year on right, generous spacing) */}
              <div className="flex items-center justify-between mb-8 sm:mb-10">
                <div className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center font-mono text-xs font-medium text-white/90 shadow-inner">
                  {item.num}
                </div>
                <span className="font-mono text-xs tracking-[0.2em] text-white/40">{item.year}</span>
              </div>

              {/* Two-Column Grid: Preview Left, Details Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Left: Preview Block */}
                <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#090D16] relative group/img aspect-[4/3] flex items-center justify-center shadow-2xl">
                  {item.isImage ? (
                    <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover/img:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full overflow-hidden flex items-center justify-center">
                      <div className="w-full h-full transform transition-transform duration-500 group-hover/img:scale-[1.02]">
                        {item.component}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Details Block */}
                <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                  <h3 className="text-2xl sm:text-[32px] lg:text-[36px] font-semibold text-white tracking-[-0.02em] leading-[1.15] group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Tag Row */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.08em] text-white/70 bg-white/[0.03] border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm sm:text-[15px] text-white/60 font-light leading-[1.65] line-clamp-2 max-w-[500px]">
                    {item.description}
                  </p>

                  {/* Action CTA — Monospace Uppercase Pill Button matching Reference */}
                  <div className="pt-3 sm:pt-4">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[11px] font-mono tracking-[0.18em] uppercase text-white/90 bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 hover:border-white/30 transition-all group/btn"
                    >
                      <span>{item.ctaText.toUpperCase()}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-white/70 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ─── SUBSECTION: The method behind the pixels ─── */}
        <div className="mt-28 sm:mt-36 pt-16 border-t border-white/[0.08]">
          <div className="mb-12">
            <div className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase mb-2">
              ◦ THE METHOD ◦
            </div>
            <h3 className="text-2xl sm:text-4xl font-normal text-white tracking-tight">
              The Primer for{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">Pushing Pixels.</em>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodPrinciples.map((m) => (
              <article
                key={m.tag}
                className="relative rounded-2xl border border-white/[0.08] bg-[#0E1422]/50 p-6 sm:p-7 space-y-3.5 hover:border-sky-500/30 transition-all group"
              >
                <div className="h-0.5 w-8 bg-sky-400/40 group-hover:w-16 group-hover:bg-sky-400 transition-all rounded-full mb-4" />
                <span className="font-mono text-[11px] text-sky-400 tracking-wider">
                  {m.tag}
                </span>
                <h4 className="text-base sm:text-lg font-medium text-white tracking-tight">
                  {m.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                  {m.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
