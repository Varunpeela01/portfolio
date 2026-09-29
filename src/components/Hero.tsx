import React from 'react';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onCopyEmail: () => void;
  copied: boolean;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end pt-24 sm:pt-28 pb-0 px-6 sm:px-10 md:px-14 lg:px-20 bg-[#090D16] bg-grid-pattern overflow-hidden select-none"
    >
      {/* Ambient background accents matching other sections */}
      <div className="pointer-events-none absolute inset-0 ambient-mesh-hero opacity-60" />

      {/* Hero Content anchored toward bottom with balanced proportions */}
      <div className="relative z-10 w-full max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center text-center mt-auto">
        
        {/* 1. Pill Badge with generous breathing room */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 sm:mb-14 rounded-full bg-white/[0.04] border border-white/[0.09] hover:border-cyan-400/40 backdrop-blur-md shadow-sm transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-slate-200 uppercase font-medium">
            Product Designer &nbsp;|&nbsp; UI/UX Designer
          </span>
        </div>

        {/* Centerpiece Stage: VARUN [3D Avatar] PEELA perfectly framed with side padding */}
        <div className="relative w-full flex items-center justify-center my-0 select-none px-4 sm:px-8 md:px-12">
          
          {/* Left Column: VARUN + Email (email flush-aligned to starting 'V') */}
          <div className="flex-1 flex justify-end z-0 select-none -translate-y-12 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-26 xl:-translate-y-30">
            <div className="inline-flex flex-col items-start">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] xl:text-[80px] font-black tracking-[0.05em] text-[#24374E] uppercase font-science leading-none pointer-events-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                VARUN
              </span>
              <a
                href="mailto:varunpeela01@gmail.com"
                className="mt-3 sm:mt-4 md:mt-5 text-[11px] sm:text-xs md:text-sm font-mono tracking-wider text-slate-300 hover:text-sky-400 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.4)] transition-all duration-200 pointer-events-auto"
              >
                varunpeela01@gmail.com
              </a>
            </div>
          </div>

          {/* Center: Scaled 3D Character Avatar matching preview */}
          <div className="relative z-10 shrink-0 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[290px] xl:w-[320px] flex justify-center pointer-events-none -mx-2 sm:-mx-4 md:-mx-6 lg:-mx-8">
            <div className="relative w-full flex justify-center">
              <img
                src="/hero-character-upper.png"
                alt="Varun Peela - Product Designer & UI/UX Designer"
                className="w-full h-auto object-contain max-h-[260px] sm:max-h-[290px] md:max-h-[320px] lg:max-h-[350px] drop-shadow-[0_24px_48px_rgba(0,0,0,0.85)]"
                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
              />
            </div>
          </div>

          {/* Right Column: PEELA + Phone (phone flush-aligned to ending 'A') */}
          <div className="flex-1 flex justify-start z-0 select-none -translate-y-12 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-26 xl:-translate-y-30">
            <div className="inline-flex flex-col items-end">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] xl:text-[80px] font-black tracking-[0.05em] text-[#24374E] uppercase font-science leading-none pointer-events-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                PEELA
              </span>
              <a
                href="tel:+917013534396"
                className="mt-3 sm:mt-4 md:mt-5 text-[11px] sm:text-xs md:text-sm font-mono tracking-wider text-slate-300 hover:text-sky-400 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.4)] transition-all duration-200 pointer-events-auto"
              >
                +91 7013534396
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
