import React from 'react';

interface AboutSectionProps {
  onOpenResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28 bg-[#090D16] relative border-t border-white/[0.08]">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/[0.04] rounded-full blur-[160px] -z-10" />

      <div className="mx-auto max-w-[1100px] px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 border-b border-white/[0.08]">
          <div className="lg:col-span-7">
            <div className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
              <span>ABOUT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.1]">
              Turning complex friction into{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">seamless intuition.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              A designer with a founder’s bias for action — obsessed with micro-interactions that users love and macro metrics that drive real scale.
            </p>
          </div>
        </div>

        {/* 2-Column About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] border border-white/[0.08] bg-[#0C101A]/60 p-4 sm:p-5 backdrop-blur-xl shadow-2xl overflow-hidden group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#121826] to-[#080B12] relative border border-white/[0.06] flex items-center justify-center">
                {/* Photo or stylized avatar */}
                <img
                  src="/hero-character-upper.png"
                  alt="Varun Peela"
                  className="w-full h-full object-cover object-top filter brightness-[0.95] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Subtle dark gradient overlay at bottom for smooth contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/90 via-transparent to-transparent" />

                {/* Floating badge inside photo */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-white/90">Available for Design Roles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative + Handwritten Signature */}
          <div className="lg:col-span-7 space-y-6 lg:pt-3">
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              I operate at the intersection of product strategy, systems architecture, and relentless visual craft. Whether architecting 0-to-1 platforms or streamlining dense enterprise telemetry, I obsess over cutting cognitive clutter and transforming ambiguous problem spaces into fluid, intuitive software.
            </p>

            <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
              With a founder’s mindset, I don’t just hand off static frames — I bridge the gap between design vision and production-ready reality. Working hand-in-hand with engineers and product leaders, I help ship high-velocity products that feel simple on the surface and powerful underneath.
            </p>

            {/* Divider Line */}
            <div className="pt-4 border-t border-white/[0.08]" />

            {/* Handwritten Signature Block */}
            <div className="py-2">
              <div className="font-serif italic text-4xl sm:text-5xl text-[#38BDF8] tracking-wide select-none">
                Varun Peela
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
