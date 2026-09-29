import React, { useState } from 'react';
import { Terminal, Cpu, Smartphone, ArrowRight, Sparkles } from 'lucide-react';
import { HireDeskBeforeAfter } from './HireDeskBeforeAfter';
import { DeskPetSimulator } from './DeskPetSimulator';
import { ByodhMobilePreview } from './ByodhMobilePreview';
import { soundFx } from '../utils/sound';

export const InteractiveLabsSection: React.FC = () => {
  const [activeLab, setActiveLab] = useState<'hiredesk' | 'deskpet' | 'byodh'>('hiredesk');

  return (
    <section id="interactive-labs" className="py-24 border-b border-zinc-800/80 bg-[#06070A] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>HANDS-ON PROTOTYPING SUITE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Interactive Design Labs
            </h2>
            <p className="text-base text-zinc-400 max-w-2xl mt-2 leading-relaxed">
              Don’t take my word for it. Test the actual prototypes, hardware simulations, and workflow optimizations I designed.
            </p>
          </div>

          {/* Interactive Lab Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-2xl shrink-0">
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveLab('hiredesk');
              }}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeLab === 'hiredesk'
                  ? 'bg-cyan-500 text-zinc-950 shadow-md shadow-cyan-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Terminal className="h-4 w-4" />
              <span>HireDesk Before/After</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                setActiveLab('deskpet');
              }}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeLab === 'deskpet'
                  ? 'bg-emerald-400 text-zinc-950 shadow-md shadow-emerald-400/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Cpu className="h-4 w-4" />
              <span>Desk Pet Hardware</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                setActiveLab('byodh');
              }}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeLab === 'byodh'
                  ? 'bg-amber-400 text-zinc-950 shadow-md shadow-amber-400/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Smartphone className="h-4 w-4" />
              <span>BYODH Mobile Site OS</span>
            </button>
          </div>
        </div>

        {/* LAB VIEW CONTAINER */}
        <div className="w-full">
          {activeLab === 'hiredesk' && <HireDeskBeforeAfter />}
          {activeLab === 'deskpet' && <DeskPetSimulator />}
          {activeLab === 'byodh' && <ByodhMobilePreview />}
        </div>

      </div>
    </section>
  );
};
