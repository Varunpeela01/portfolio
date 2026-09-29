import React, { useState } from 'react';
import { Cpu, Wifi, Battery, Layers, CheckCircle2, Sliders, Zap } from 'lucide-react';

export const DeskPetShowcase: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'idle' | 'focus' | 'commit' | 'lowpower'>('focus');

  const modes = [
    {
      id: 'focus' as const,
      label: 'Focus Lock Mode',
      desc: 'Suppresses desktop notification interrupts while developer deep work timer runs.',
      displayRender: '[ • _ • ]',
      mcuPower: '42 mA · 240 MHz',
    },
    {
      id: 'commit' as const,
      label: 'Git Commit Milestone',
      desc: 'Haptic celebration burst triggered via Web Bluetooth hook upon successful remote push.',
      displayRender: '★( ‿ )★',
      mcuPower: '68 mA · Pulse Active',
    },
    {
      id: 'idle' as const,
      label: 'Ambient Presence',
      desc: 'Subtle micro-glances tracking ambient desk light and proximity.',
      displayRender: '( ^ ‿ ^ )',
      mcuPower: '28 mA · Nominal',
    },
    {
      id: 'lowpower' as const,
      label: 'Deep Sleep Standby',
      desc: 'Ultra-low quiescent drain with wake-on-capacitive-touch.',
      displayRender: '( - _ - )',
      mcuPower: '1.2 mA · Standby',
    },
  ];

  const currentMode = modes.find((m) => m.id === activeMode) || modes[0];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0C0E14] overflow-hidden shadow-2xl text-zinc-200">
      
      {/* Top Application Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-[#0A0C11]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-zinc-700" />
            <div className="h-3 w-3 rounded-full bg-zinc-700" />
            <div className="h-3 w-3 rounded-full bg-zinc-700" />
          </div>
          <span className="text-zinc-600">|</span>
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-300">
            <span className="font-semibold text-white">Desk Pet R&D</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">Physical-Digital IoT Specification</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
          <span className="text-emerald-400">ESP32-S3 Dual-Core</span>
          <span>·</span>
          <span>Bambu Lab P1S Fabricated</span>
        </div>
      </div>

      <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Industrial Hardware Rendering & Micro-OLED View */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#181A22] to-[#0D0E13] p-6 border-2 border-white/10 shadow-2xl relative select-none">
            
            {/* Bambu Lab precision hex hardware indicators */}
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mb-4 pb-2 border-b border-white/[0.06]">
              <span>PETG MATTE CHARCOAL</span>
              <span>TOLERANCE ±0.08mm</span>
            </div>

            {/* Embedded 128x64 Micro-OLED Display */}
            <div className="rounded-2xl bg-[#03060C] border-2 border-zinc-800 p-5 shadow-inner flex flex-col justify-between h-44 relative overflow-hidden">
              
              <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400/80 border-b border-cyan-950/60 pb-1">
                <span>SSD1306 · 60 FPS</span>
                <span className="text-emerald-400 font-bold">LIVE TELEMETRY</span>
              </div>

              {/* Animated Pixel Expression */}
              <div className="my-auto text-center">
                <div className="font-mono text-4xl text-cyan-300 font-bold tracking-widest">
                  {currentMode.displayRender}
                </div>
                <div className="text-[11px] font-mono text-cyan-500 mt-2 uppercase tracking-wider">
                  {currentMode.label}
                </div>
              </div>

              <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 border-t border-cyan-950/60 pt-1">
                <span>DRAIN: {currentMode.mcuPower}</span>
                <span>BLE: CONNECTED</span>
              </div>
            </div>

            {/* Capacitive Touch Plate Surface */}
            <div className="mt-4 p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-zinc-400">Capacitive Tap Sensor</span>
              <span className="font-mono text-emerald-400 text-[11px]">&lt; 40ms Haptic Response</span>
            </div>

            <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span>Magnetic Snap Assembly</span>
              <span>USB-C PD 5V/1A</span>
            </div>

          </div>
        </div>

        {/* Right Column: Physical Computing Engineering Details */}
        <div className="lg:col-span-6 space-y-4">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            Physical Computing & IoT Craft
          </div>
          <h3 className="font-display text-2xl font-bold text-white tracking-tight">
            Bridging Physical Ergonomics with Embedded C++ Firmware
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Most digital product designers only work in Figma. By designing custom CAD enclosures in Fusion 360, 3D printing on a Bambu Lab P1S, and writing custom C++ display drivers for ESP32 microcontrollers, Varun bridges the physical and digital domains with rare agility.
          </p>

          {/* Interactive State Selector */}
          <div className="space-y-2 pt-2">
            <div className="text-xs text-zinc-400 font-medium">Select Firmware State:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {modes.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMode(m.id)}
                  className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                    activeMode === m.id
                      ? 'bg-zinc-800 border-white/20 text-white font-semibold shadow-sm'
                      : 'bg-zinc-900/40 border-white/[0.05] text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/80'
                  }`}
                >
                  <div className="font-medium text-white">{m.label}</div>
                  <div className="text-[10px] text-zinc-500 truncate">{m.mcuPower}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06] text-xs text-zinc-400 leading-relaxed">
            <strong className="text-zinc-200 block mb-0.5">The Philosophy:</strong>
            "Physical desktop hardware provides a calm, tactile presence that push notifications can never achieve. When software has physical form, user empathy skyrockets."
          </div>

        </div>

      </div>

    </div>
  );
};
