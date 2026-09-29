import React, { useState } from 'react';
import { Cpu, Battery, Wifi, Heart, Sparkles, Moon, Zap, RefreshCw } from 'lucide-react';
import { soundFx } from '../utils/sound';

type PetMood = 'happy' | 'focus' | 'excited' | 'sleep' | 'curious';

export const DeskPetSimulator: React.FC = () => {
  const [mood, setMood] = useState<PetMood>('happy');
  const [hearts, setHearts] = useState<number>(14);
  const [commits, setCommits] = useState<number>(3);
  const [touchFeedback, setTouchFeedback] = useState<string>('');

  const triggerMood = (newMood: PetMood, feedbackText: string) => {
    soundFx.playClick();
    setMood(newMood);
    setTouchFeedback(feedbackText);
    setTimeout(() => setTouchFeedback(''), 1500);
  };

  const handlePet = () => {
    soundFx.playSuccess();
    setHearts((h) => h + 1);
    triggerMood('excited', 'Capacitive touch detected! Heart rate nominal.');
  };

  const handleCommit = () => {
    soundFx.playSuccess();
    setCommits((c) => c + 1);
    triggerMood('excited', 'Commit received! Building AST tokens.');
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#090B10] p-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
            <Cpu className="h-3.5 w-3.5" />
            <span>PHYSICAL COMPUTING & IOT PROTOTYPE</span>
          </div>
          <h3 className="font-display text-xl font-bold text-white">
            Desk Pet: Interactive Hardware & Firmware Sandbox
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Simulated ESP32-S3 microcontroller running 60 FPS micro-pixel animations with capacitive touch feedback.
          </p>
        </div>

        {/* Live Device Telemetry */}
        <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono bg-zinc-950 p-2 rounded-lg border border-zinc-800 shrink-0">
          <span className="flex items-center gap-1 text-emerald-400">
            <Wifi className="h-3.5 w-3.5" /> Web BLE
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-cyan-400">
            <Battery className="h-3.5 w-3.5" /> 84% (38h)
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-zinc-500">28ms latency</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* PHYSICAL 3D-PRINTED ENCLOSURE SIMULATION */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#18191E] via-[#101115] to-[#0A0B0E] p-6 border-2 border-zinc-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            
            {/* Bambu Lab Matte Texture details & Corner Screws */}
            <div className="absolute top-3 left-3 h-2 w-2 rounded-full bg-zinc-700/60 shadow-inner flex items-center justify-center">
              <div className="h-0.5 w-1.5 bg-zinc-900 rotate-45" />
            </div>
            <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-zinc-700/60 shadow-inner flex items-center justify-center">
              <div className="h-0.5 w-1.5 bg-zinc-900 rotate-45" />
            </div>
            <div className="absolute bottom-3 left-3 h-2 w-2 rounded-full bg-zinc-700/60 shadow-inner flex items-center justify-center">
              <div className="h-0.5 w-1.5 bg-zinc-900 rotate-45" />
            </div>
            <div className="absolute bottom-3 right-3 h-2 w-2 rounded-full bg-zinc-700/60 shadow-inner flex items-center justify-center">
              <div className="h-0.5 w-1.5 bg-zinc-900 rotate-45" />
            </div>

            {/* Capacitive Head Pet Area */}
            <button
              onClick={handlePet}
              className="w-full mb-4 py-2 px-4 rounded-xl border border-zinc-700/60 bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-emerald-500/50 text-xs font-mono text-zinc-400 hover:text-emerald-300 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Heart className="h-3.5 w-3.5 text-rose-400 group-hover:scale-125 transition-transform" />
              <span>Tap Top Plate (Capacitive Touch Sensor)</span>
            </button>

            {/* OLED SCREEN FRAME */}
            <div className="oled-screen rounded-2xl p-5 relative overflow-hidden flex flex-col items-center justify-center h-48 sm:h-52">
              
              {/* Scanline CRT texture */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-40" />

              {/* Status Header inside OLED */}
              <div className="w-full flex items-center justify-between text-[10px] font-mono text-cyan-400/80 mb-3 border-b border-cyan-950/60 pb-1">
                <span>ESP32-S3 // 240MHz</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  FLOW_OK
                </span>
                <span>BLE: CONNECTED</span>
              </div>

              {/* ANIMATED PIXEL EXPRESSIONS */}
              <div className="my-auto text-center">
                {mood === 'happy' && (
                  <div className="space-y-2">
                    <div className="font-mono text-3xl sm:text-4xl text-cyan-300 font-bold tracking-widest animate-bounce">
                      ( ^ ‿ ^ )
                    </div>
                    <div className="text-[11px] font-mono text-cyan-500 tracking-wider">STATUS: JOYFUL / VIBING</div>
                  </div>
                )}

                {mood === 'focus' && (
                  <div className="space-y-2">
                    <div className="font-mono text-3xl sm:text-4xl text-emerald-300 font-bold tracking-widest">
                      [ • _ • ]
                    </div>
                    <div className="text-[11px] font-mono text-emerald-500 tracking-wider">DEEP FOCUS // NO INTERRUPTS</div>
                  </div>
                )}

                {mood === 'excited' && (
                  <div className="space-y-2">
                    <div className="font-mono text-3xl sm:text-4xl text-amber-300 font-bold tracking-widest animate-pulse">
                      ★( ★ ‿ ★ )★
                    </div>
                    <div className="text-[11px] font-mono text-amber-500 tracking-wider">XP BOOST // SHIP IT!</div>
                  </div>
                )}

                {mood === 'sleep' && (
                  <div className="space-y-2">
                    <div className="font-mono text-3xl sm:text-4xl text-indigo-300 font-bold tracking-widest">
                      ( - _ - ) z Z
                    </div>
                    <div className="text-[11px] font-mono text-indigo-500 tracking-wider">LOW-POWER SLEEP // 1.2mA</div>
                  </div>
                )}

                {mood === 'curious' && (
                  <div className="space-y-2">
                    <div className="font-mono text-3xl sm:text-4xl text-purple-300 font-bold tracking-widest">
                      ( o _ O ) ?
                    </div>
                    <div className="text-[11px] font-mono text-purple-500 tracking-wider">ANALYZING CODE AST...</div>
                  </div>
                )}
              </div>

              {/* OLED Footer status */}
              <div className="w-full flex items-center justify-between text-[9px] font-mono text-cyan-600 border-t border-cyan-950/60 pt-1 mt-2">
                <span>HEARTS: {hearts}</span>
                <span>SHIPPED COMMITS: {commits}</span>
                <span>SSD1306 128x64</span>
              </div>
            </div>

            {/* Device Bottom Bar with Hardware Branding */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-500 px-1">
              <span>Bambu Lab PETG Enclosure</span>
              <span className="flex items-center gap-1 text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                USB-C PD Active
              </span>
            </div>

            {/* Dynamic touch feedback banner */}
            {touchFeedback && (
              <div className="mt-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 p-2 text-center text-xs font-mono text-emerald-300 animate-fadeIn">
                {touchFeedback}
              </div>
            )}
          </div>
        </div>

        {/* INTERACTION CONTROLS & HARDWARE SPECS */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
            <div className="text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
              Firmware State Controls
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => triggerMood('happy', 'Emotive State: Happy mode restored.')}
                className="flex items-center gap-2 p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-xs font-medium text-zinc-200 transition-colors text-left"
              >
                <Sparkles className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Happy (Ambient)</span>
              </button>

              <button
                onClick={() => triggerMood('focus', 'Deep focus cycle engaged. 25 min timer.')}
                className="flex items-center gap-2 p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-xs font-medium text-zinc-200 transition-colors text-left"
              >
                <Zap className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Focus Mode</span>
              </button>

              <button
                onClick={handleCommit}
                className="flex items-center gap-2 p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-xs font-medium text-zinc-200 transition-colors text-left"
              >
                <RefreshCw className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Push Git Commit</span>
              </button>

              <button
                onClick={() => triggerMood('sleep', 'Entering deep sleep power savings.')}
                className="flex items-center gap-2 p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-xs font-medium text-zinc-200 transition-colors text-left"
              >
                <Moon className="h-4 w-4 text-indigo-400 shrink-0" />
                <span>Sleep Mode</span>
              </button>
            </div>
          </div>

          {/* Rapid Prototyping Hardware Specs */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 space-y-2 text-xs">
            <div className="font-mono text-zinc-400 text-[11px] uppercase tracking-wider mb-2">
              Engineering Specs
            </div>
            <div className="flex justify-between text-zinc-300 py-1 border-b border-zinc-900">
              <span className="text-zinc-500">Fabrication</span>
              <span className="font-mono">Bambu Lab P1S · 0.12mm PETG Layer</span>
            </div>
            <div className="flex justify-between text-zinc-300 py-1 border-b border-zinc-900">
              <span className="text-zinc-500">Microcontroller</span>
              <span className="font-mono">ESP32-S3 Dual-Core Xtensa LX7</span>
            </div>
            <div className="flex justify-between text-zinc-300 py-1 border-b border-zinc-900">
              <span className="text-zinc-500">Display Panel</span>
              <span className="font-mono">0.96" Monochrome I2C OLED (SSD1306)</span>
            </div>
            <div className="flex justify-between text-zinc-300 py-1">
              <span className="text-zinc-500">Firmware Engine</span>
              <span className="font-mono">Custom C++ Bitmap Sprites @ 60 FPS</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
