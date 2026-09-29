import React, { useState } from 'react';
import { Camera, Activity, Box, Network, Dumbbell } from 'lucide-react';

export const OutsideWorkspaceSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="scroll-mt-24 py-20 sm:py-28 bg-[#090D16] relative border-t border-white/[0.08]" id="hobbies">
      <div className="mx-auto max-w-[1100px] px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase mb-2.5 flex items-center gap-2">
              <span>BEYOND THE SCREEN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.1]">
              When the laptop's{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">closed.</em>
            </h2>
          </div>
          <p className="text-slate-400 font-light max-w-sm text-sm sm:text-base leading-relaxed">
            A glimpse into my life off-canvas. Building physical businesses, staying active on the court, and capturing the world through a lens.
          </p>
        </div>

        {/* 2-Row, 3-Column Alternating Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[260px] sm:auto-rows-[275px]">
          
          {/* 1. Photography (Wide - Spans 2 columns) */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0A0E17] group hover:border-sky-500/40 hover:shadow-[0_0_40px_rgba(56,189,248,0.1)] transition-all duration-700 md:col-span-2">
            {/* Video Background */}
            <div className="absolute inset-0 bg-black">
              <video
                src="/Waterfalls.mov"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-85 group-hover:opacity-30"
              />
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              <span className="font-mono text-[10px] text-sky-400 tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">CREATIVE</span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight group-hover:-translate-y-4 group-hover:opacity-0 transition-all duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Photography & Travel
              </h3>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none bg-gradient-to-t from-[#090D16] via-[#090D16]/80 to-transparent">
              <h3 className="text-2xl font-medium text-white tracking-tight mb-3">Photography & Travel</h3>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
                Capturing the world through a lens. Whether exploring nature or architecture, photography helps me find balance and inspiration away from the screen.
              </p>
            </div>
          </div>

          {/* 2. 3D Printing & Fabrication (Square - 1 Column) */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0A0E17] group hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] transition-all duration-700">
            {/* Image Background */}
            <div className="absolute inset-0 bg-black">
              <img
                src="/3d-printing.jpg"
                alt="3D Printing"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-85 group-hover:opacity-30"
              />
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              <span className="font-mono text-[10px] text-amber-400 tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">MAKER</span>
              <h3 className="text-2xl font-medium text-white tracking-tight group-hover:-translate-y-4 group-hover:opacity-0 transition-all duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                3D Printing Business
              </h3>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none bg-gradient-to-t from-[#090D16] via-[#090D16]/90 to-transparent">
              <h3 className="text-xl font-medium text-white tracking-tight mb-3">3D Printing Business</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Running a small 3D printing operation. I love turning digital CAD models into physical, functional objects using Bambu Lab ecosystems.
              </p>
            </div>
          </div>

          {/* 3. Gym / Strength (Square - 1 Column) */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0A0E17] group hover:border-rose-500/40 hover:shadow-[0_0_40px_rgba(244,63,94,0.1)] transition-all duration-700">
            {/* Image Background */}
            <div className="absolute inset-0 bg-black">
              <img
                src="/Gym.jpg"
                alt="Strength & Conditioning"
                className="absolute inset-0 w-full h-full object-cover object-[center_70%] transition-transform duration-1000 group-hover:scale-105 opacity-85 group-hover:opacity-30"
              />
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              <span className="font-mono text-[10px] text-rose-400 tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">HEALTH</span>
              <h3 className="text-2xl font-medium text-white tracking-tight group-hover:-translate-y-4 group-hover:opacity-0 transition-all duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Gym & Fitness
              </h3>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none bg-gradient-to-t from-[#090D16] via-[#090D16]/90 to-transparent">
              <h3 className="text-xl font-medium text-white tracking-tight mb-3">Gym & Fitness</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Staying active and building discipline. Consistent training keeps me physically resilient and mentally sharp for my daily work.
              </p>
            </div>
          </div>

          {/* 4. Court Sports & Snooker (Wide - Spans 2 columns) */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0A0E17] group hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-700 md:col-span-2">
            {/* Video Background */}
            <div className="absolute inset-0 bg-black">
              <video
                src="/IMG_8696.mov"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-[center_60%] transition-transform duration-1000 group-hover:scale-105 opacity-85 group-hover:opacity-30"
              />
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              <span className="font-mono text-[10px] text-emerald-400 tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">AGILITY</span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight group-hover:-translate-y-4 group-hover:opacity-0 transition-all duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Snooker & Court Sports
              </h3>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none bg-gradient-to-t from-[#090D16] via-[#090D16]/90 to-transparent">
              <h3 className="text-2xl font-medium text-white tracking-tight mb-3">Snooker & Court Sports</h3>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
                Fast-paced court games like volleyball, and the calculated geometry of snooker keep my reflexes sharp. My favorite ways to disconnect from the screen.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
