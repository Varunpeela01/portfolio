import React from 'react';

interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: ProjectTestimonial[] = [
    {
      quote:
        'Replacing our 18-column legacy ERP table with Varun’s spatial dispatch cockpit cut our unit booking time from 10 minutes to under 4. Our field dispatchers picked it up immediately without training.',
      author: 'Rajesh K.',
      role: 'Operations & Dispatch Lead',
      initials: 'RK',
    },
    {
      quote:
        'Varun designed for 40°C direct glare and dusty basement sites where connectivity drops. The offline blueprint viewer and milestone escrow tracking gave contractors instant trust.',
      author: 'Vikram Mehta',
      role: 'Managing Director & Co-Founder',
      initials: 'VM',
    },
    {
      quote:
        'Mental health platforms often feel cold and clinical. Varun designed compassionate 15-second check-in loops that patients actually looked forward to, increasing intake completion by 42%.',
      author: 'Dr. Aris Thorne',
      role: 'Clinical Advisor & Psychiatrist',
      initials: 'AT',
    },
    {
      quote:
        'Demystifying blood biomarker panels into glanceable gym-floor targets was a huge UX hurdle. Varun created an interface with zero cognitive load that users trust at peak heart rate.',
      author: 'Marcus Vance',
      role: 'Head of Athletic Performance',
      initials: 'MV',
    },
    {
      quote:
        'Varun doesn’t just hand off Figma frames. His design token architecture, variant states, and edge-case handling translated 1:1 into our React codebase, cutting frontend rework in half.',
      author: 'David Chen',
      role: 'Staff Frontend Architect',
      initials: 'DC',
    },
    {
      quote:
        'From napkin sketches to on-site testing with real supervisors, Varun’s founder mindset ensured every screen solved an actual operational bottleneck rather than adding visual bloat.',
      author: 'Siddharth Rao',
      role: 'Principal Product Architect',
      initials: 'SR',
    },
  ];

  return (
    <section id="testimonials" className="scroll-mt-24 py-20 sm:py-28 bg-[#090D16] relative border-t border-white/[0.08] overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sky-500/[0.03] rounded-full blur-[160px] -z-10" />

      <div className="mx-auto max-w-[1100px] px-6 sm:px-8 lg:px-10 mb-12 sm:mb-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase mb-2.5 flex items-center gap-2">
              <span>ECHOES FROM THE WORKPLACE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.1]">
              What the people I've{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">shipped with</em> say.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 font-light max-w-md leading-relaxed md:text-right">
            Feedback from engineering leads, founders, and domain advisors on the platforms we delivered together.
          </p>
        </div>
      </div>

      {/* Infinite Single Horizontal Loop Scrolling */}
      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] group">
        <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] w-max py-2">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <article
              key={idx}
              className="w-[340px] sm:w-[400px] shrink-0 rounded-2xl border border-white/[0.08] bg-[#0C101A]/80 hover:bg-[#0E1422]/95 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-sky-500/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6),0_0_24px_rgba(56,189,248,0.08)] transition-all duration-300"
            >
              <div className="space-y-3">
                <span className="font-serif text-3xl text-sky-400/50 leading-none">“</span>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* Author & Role Block (only Name and Role, no 3rd line) */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400/20 via-blue-600/30 to-indigo-900/40 border border-sky-400/30 flex items-center justify-center font-mono text-xs font-semibold text-sky-300 shrink-0">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-white truncate">{t.author}</div>
                  <div className="text-xs font-mono text-slate-400 truncate">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
