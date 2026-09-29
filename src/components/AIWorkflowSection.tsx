import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, Play, Code2, Layers, Cpu, ArrowRight } from 'lucide-react';

export const AIWorkflowSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(2); // 0: Design Tokens, 1: AI Prompt, 2: Live Prototype
  const [copiedCode, setCopiedCode] = useState(false);
  
  // Interactive prototype state inside sandbox
  const [buttonVariant, setButtonVariant] = useState<'primary' | 'outline' | 'subtle'>('primary');
  const [radiusValue, setRadiusValue] = useState<number>(12);
  const [interactiveCount, setInteractiveCount] = useState<number>(18);
  const [feedbackMsg, setFeedbackMsg] = useState<string>('');

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const sampleComponentCode = `// Implementation-ready component generated in Cursor from Varun's Figma Tokens
import React, { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const TelematicsBookingAction = ({ assetName = "CAT 320D Excavator" }) => {
  const [dispatched, setDispatched] = useState(false);

  return (
    <div className="rounded-[${radiusValue}px] border border-white/10 bg-[#0E1015] p-5">
      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span className="font-mono text-[11px]">TELEMETRY_STREAM</span>
        <span className="text-emerald-400 font-mono text-[11px]">STATUS: NOMINAL</span>
      </div>
      <div className="text-sm font-semibold text-white mt-1.5">{assetName}</div>
      <button 
        onClick={() => setDispatched(true)}
        className="mt-4 w-full py-2.5 px-4 rounded-[${Math.max(4, radiusValue - 4)}px] bg-white font-medium text-xs text-zinc-950 hover:bg-zinc-200 transition-all"
      >
        {dispatched ? "Confirmed in 4.2 min ✓" : "Instant 1-Click Dispatch"}
      </button>
    </div>
  );
};`;

  return (
    <section id="ai-method" className="py-24 border-b border-white/[0.06] bg-[#07080B] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
              <Terminal className="h-3.5 w-3.5 text-zinc-300" />
              <span>THE TECHNICAL DESIGNER EDGE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Design at the <span className="font-serif-italic">speed of code.</span>
            </h2>
            <p className="text-base text-zinc-400 max-w-2xl mt-2 leading-relaxed">
              Most designers hand off static Figma frames and hope engineers interpret them correctly. By writing structured token architectures and pairing with Cursor and Claude, I synthesize production-ready React prototypes in days.
            </p>
          </div>

          {/* Clean Segmented Controls for Stages */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0E1015] border border-white/10 rounded-2xl shrink-0">
            <button
              onClick={() => setActiveStage(0)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                activeStage === 0 ? 'bg-white text-zinc-950 font-semibold shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              1. Token Architecture
            </button>
            <button
              onClick={() => setActiveStage(1)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                activeStage === 1 ? 'bg-white text-zinc-950 font-semibold shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              2. Cursor AI Rules
            </button>
            <button
              onClick={() => setActiveStage(2)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                activeStage === 2 ? 'bg-white text-zinc-950 font-semibold shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              3. Executable Component
            </button>
          </div>
        </div>

        {/* WORKFLOW STAGES CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stage Explanation & Specs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {activeStage === 0 && (
              <div className="rounded-2xl border border-white/10 bg-[#0E1015] p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Layers className="h-4 w-4" />
                  <span>STAGE 01: MATHEMATICAL TOKEN HIERARCHY</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Atomic Design Tokens in Figma
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Before writing prompts, design systems must be mathematically rigorous. I establish strict token tiers:
                </p>
                <ul className="space-y-3 text-xs text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 mt-1.5 shrink-0" />
                    <span><strong>Primitive Tokens:</strong> Base colors, 4px grid spacing, and strict fluid type scales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 mt-1.5 shrink-0" />
                    <span><strong>Semantic Tokens:</strong> <code className="text-zinc-200 font-mono text-[11px]">surface.primary</code>, <code className="text-zinc-200 font-mono text-[11px]">action.accent</code> with WCAG AAA contrast guarantees.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 mt-1.5 shrink-0" />
                    <span><strong>Nested Radius Math:</strong> <code className="text-zinc-200 font-mono text-[11px]">r_inner = r_outer - padding</code> ensuring visual harmony.</span>
                  </li>
                </ul>

                <button
                  onClick={() => setActiveStage(1)}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-white hover:underline"
                >
                  <span>Proceed to Stage 2: Cursor AI Rules</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            {activeStage === 1 && (
              <div className="rounded-2xl border border-white/10 bg-[#0E1015] p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Terminal className="h-4 w-4" />
                  <span>STAGE 02: CURSOR & CLAUDE PROMPT RIGOR</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Zero-Hallucination Architecture
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  I prime Cursor using domain-specific <code className="text-zinc-200 font-mono text-[11px]">.cursorrules</code> files that enforce design system boundaries. No generic AI templates; only strict TypeScript and Tailwind classes that map 1:1 to my Figma components.
                </p>
                <div className="rounded-xl bg-black/60 p-3.5 border border-white/[0.06] text-[11px] font-mono text-zinc-400 space-y-1.5">
                  <div className="text-zinc-300">// .cursorrules guidelines:</div>
                  <div>• Strict single-line affordances with truncate</div>
                  <div>• Button padding: horizontal = 2x vertical</div>
                  <div>• Compositor-only animations (transform & opacity)</div>
                  <div>• WCAG AA contrast ratio compliance verified</div>
                </div>

                <button
                  onClick={() => setActiveStage(2)}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-white hover:underline"
                >
                  <span>Proceed to Stage 3: Live Executed Sandbox</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            {activeStage === 2 && (
              <div className="rounded-2xl border border-white/10 bg-[#0E1015] p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Cpu className="h-4 w-4" />
                  <span>STAGE 03: SHIPPABLE REACT COMPONENT</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Interactive Usability Sandbox
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Interact with the live component on the right. Tweak the border radius slider or switch variants to see the production code and UI update in real time.
                </p>
                <div className="p-3.5 bg-black/40 rounded-xl border border-white/[0.05] text-xs text-zinc-400 space-y-2">
                  <div className="font-medium text-zinc-200">The Outcome for Engineering Teams:</div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-zinc-300 font-bold">01.</span>
                    <span>No backlog lag to test basic user flows.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-zinc-300 font-bold">02.</span>
                    <span>Developers inherit clean, typed React code rather than static redline images.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-xl bg-[#0D0F14] border border-white/[0.06] text-xs">
              <div>
                <div className="font-mono font-bold text-white tabular-nums">4 Days</div>
                <div className="text-[10px] text-zinc-500">MVP Prototype</div>
              </div>
              <div>
                <div className="font-mono font-bold text-white tabular-nums">100%</div>
                <div className="text-[10px] text-zinc-500">Token Match</div>
              </div>
              <div>
                <div className="font-mono font-bold text-white tabular-nums">0%</div>
                <div className="text-[10px] text-zinc-500">Design Drift</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & Live Component Output */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* INTERACTIVE COMPONENT PLAYGROUND */}
            <div className="rounded-2xl border border-white/10 bg-[#0C0E14] p-6 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4 text-zinc-300" />
                  <span className="text-xs font-mono text-zinc-300 font-semibold uppercase">
                    Compiled Component Sandbox
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE PREVIEW
                </span>
              </div>

              {/* Dynamic Controls Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-3 bg-black/40 rounded-xl border border-white/[0.05] text-xs">
                
                {/* Variant Switcher */}
                <div>
                  <label className="text-zinc-400 text-[11px] block mb-1 font-mono">
                    Token: Button Style
                  </label>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setButtonVariant('primary')}
                      className={`px-2.5 py-1 rounded text-xs transition-colors ${
                        buttonVariant === 'primary' ? 'bg-white text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Solid White
                    </button>
                    <button
                      onClick={() => setButtonVariant('outline')}
                      className={`px-2.5 py-1 rounded text-xs transition-colors ${
                        buttonVariant === 'outline' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Hairline Border
                    </button>
                    <button
                      onClick={() => setButtonVariant('subtle')}
                      className={`px-2.5 py-1 rounded text-xs transition-colors ${
                        buttonVariant === 'subtle' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Subtle Slate
                    </button>
                  </div>
                </div>

                {/* Radius Math Slider */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-zinc-400 mb-1">
                    <span>Token: Border Radius</span>
                    <span className="text-white font-bold">{radiusValue}px</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="24"
                    step="2"
                    value={radiusValue}
                    onChange={(e) => setRadiusValue(Number(e.target.value))}
                    className="w-full accent-white h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* RENDERED COMPONENT TARGET */}
              <div className="p-6 rounded-xl bg-gradient-to-b from-[#10121A] to-[#0A0B10] border border-white/[0.06] flex flex-col items-center justify-center min-h-[190px]">
                <div
                  style={{ borderRadius: `${radiusValue}px` }}
                  className="w-full max-w-sm border border-white/10 bg-[#0E1016] p-5 shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-white/[0.06]">
                    <span className="font-mono text-zinc-300">FLEET_DISPATCH_COCKPIT</span>
                    <span className="text-emerald-400 font-mono text-[10px]">● READY</span>
                  </div>

                  <div className="mt-3">
                    <div className="text-xs text-zinc-400">Assigned Earthmover</div>
                    <div className="text-base font-bold text-white">Komatsu PC210LC Heavy Crawler</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      Depot: Sector 4 Logistics Yard (3.1 km)
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-zinc-300">
                    <span>Telematics Sync</span>
                    <span className="font-mono text-white font-bold">{interactiveCount} units active</span>
                  </div>

                  {/* Dynamic Action Button */}
                  <button
                    onClick={() => {
                      setInteractiveCount((c) => c + 1);
                      setFeedbackMsg('Dispatch order confirmed in 4.2 mins!');
                      setTimeout(() => setFeedbackMsg(''), 2200);
                    }}
                    style={{ borderRadius: `${Math.max(4, radiusValue - 4)}px` }}
                    className={`mt-4 w-full py-2.5 px-4 font-semibold text-xs transition-all active:scale-95 cursor-pointer ${
                      buttonVariant === 'primary'
                        ? 'bg-white hover:bg-zinc-200 text-zinc-950 shadow-md'
                        : buttonVariant === 'outline'
                        ? 'border border-white/20 bg-transparent text-white hover:bg-white/10'
                        : 'border border-transparent bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                    }`}
                  >
                    Confirm One-Click Dispatch →
                  </button>

                  {feedbackMsg && (
                    <div className="mt-2 text-[11px] text-emerald-400 font-mono text-center">
                      {feedbackMsg}
                    </div>
                  )}
                </div>
              </div>

              {/* LIVE CODE VIEWER */}
              <div className="mt-4 rounded-xl bg-black/60 border border-white/[0.06] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06] text-xs">
                  <div className="flex items-center gap-2 text-zinc-400 font-mono text-[11px]">
                    <Code2 className="h-3.5 w-3.5 text-zinc-300" />
                    <span>TelematicsBookingAction.tsx</span>
                  </div>
                  <button
                    onClick={() => copyCode(sampleComponentCode)}
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-[11px]"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 text-[11px] font-mono text-zinc-300 overflow-x-auto max-h-40 leading-relaxed">
                  <code>{sampleComponentCode}</code>
                </pre>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
