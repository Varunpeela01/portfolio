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
      className="relative min-h-screen flex flex-col justify-end pt-24 sm:pt-28 pb-0 px-4 sm:px-6 lg:px-8 bg-[#090D16] bg-grid-pattern overflow-hidden select-none"
    >
      {/* Ambient background accents matching other sections */}
      <div className="pointer-events-none absolute inset-0 ambient-mesh-hero opacity-60" />

      {/* Hero Content anchored toward bottom */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-auto">
        
        {/* 1. Pill Badge with generous bottom space */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 sm:mb-8 rounded-full bg-white/[0.04] border border-white/[0.09] hover:border-cyan-400/40 backdrop-blur-md shadow-sm transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-slate-200 uppercase font-medium">
            Product Designer &nbsp;|&nbsp; UI/UX Designer
          </span>
        </div>

        {/* 2. Catchy Intro Line in Science Gothic */}
        <h2 className="text-base sm:text-lg md:text-2xl font-black tracking-[0.28em] text-white uppercase text-center font-science mb-2 sm:mb-3">
          HI PEOPLE, THIS IS
        </h2>

        {/* 3. Centerpiece Stage: VARUN [3D Avatar] PEELA anchored to bottom */}
        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center my-0 select-none px-2 sm:px-4">
          
          {/* Left Column: VARUN + Email */}
          <div className="flex-1 flex flex-col items-end -mr-6 sm:-mr-10 md:-mr-14 lg:-mr-16 z-0 select-none">
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[88px] font-black tracking-[0.05em] text-[#24374E] uppercase font-science leading-none pointer-events-none">
              VARUN
            </span>
            <div className="w-full flex justify-start pl-2 sm:pl-4 mt-6 sm:mt-10 md:mt-14">
              <a
                href="mailto:varunpeela01@gmail.com"
                className="text-[11px] sm:text-xs md:text-sm font-mono text-slate-300 hover:text-cyan-300 transition-colors pointer-events-auto"
              >
                varunpeela01@gmail.com
              </a>
            </div>
          </div>

          {/* Center: High-Res 3D Character Avatar anchored to the bottom with fade */}
          <div className="relative z-10 shrink-0 w-[250px] sm:w-[290px] md:w-[330px] lg:w-[360px] flex justify-center pointer-events-none">
            <div className="relative w-full flex justify-center">
              <img
                src="/hero-character-upper.png"
                alt="Varun Peela - Product Designer & UI/UX Designer"
                className="w-full h-auto object-contain max-h-[320px] sm:max-h-[360px] lg:max-h-[400px] drop-shadow-[0_24px_48px_rgba(0,0,0,0.85)]"
              />
              {/* Bottom seamless gradient fade into page background */}
              <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#090D16] via-[#090D16]/85 to-transparent" />
            </div>
          </div>

          {/* Right Column: PEELA + Phone */}
          <div className="flex-1 flex flex-col items-start -ml-6 sm:-ml-10 md:-ml-14 lg:-ml-16 z-0 select-none">
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[88px] font-black tracking-[0.05em] text-[#24374E] uppercase font-science leading-none pointer-events-none">
              PEELA
            </span>
            <div className="w-full flex justify-end pr-2 sm:pr-4 mt-6 sm:mt-10 md:mt-14">
              <a
                href="tel:+917013534396"
                className="text-[11px] sm:text-xs md:text-sm font-mono text-slate-300 hover:text-cyan-300 transition-colors pointer-events-auto"
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
