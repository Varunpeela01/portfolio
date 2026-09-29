import React from 'react';

export const HireDeskShowcase: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[340px] sm:min-h-[380px] rounded-2xl bg-[#090D16] flex items-center justify-center relative overflow-hidden group/hd border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_36px_rgba(0,0,0,0.5)]">
      
      {/* 1. Subtle, high-end studio gradient depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-black/50 pointer-events-none" />

      {/* 2. Soft, luxurious atmospheric backlight behind devices */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[60%] rounded-full bg-gradient-to-tr from-sky-500/15 via-blue-600/10 to-transparent blur-[70px] pointer-events-none group-hover/hd:scale-105 group-hover/hd:from-sky-500/25 transition-all duration-700 ease-out" />

      {/* 3. Subtle micro-dot grid for depth */}
      <div
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          backgroundPosition: 'center center'
        }}
      />

      {/* 4. Natural ground shadow */}
      <div className="absolute bottom-5 w-[70%] h-6 bg-black/70 blur-lg rounded-full pointer-events-none" />

      {/* 5. The Devices */}
      <div className="relative w-[85%] sm:w-[90%] h-[85%] sm:h-[90%] flex items-center justify-center z-10 transition-transform duration-500 ease-out group-hover/hd:scale-[1.02] group-hover/hd:-translate-y-1">
        <img
          src="/projects/hiredesk-device-cutout.png"
          alt="HireDesk Devices"
          className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
        />
      </div>
    </div>
  );
};
