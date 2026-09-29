import React, { useState, useRef } from 'react';
import { ArrowLeftRight, CheckCircle2, AlertTriangle, Clock, MousePointerClick, Zap } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const HireDeskBeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0-100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handlePointerDown = () => {
    isDragging.current = true;
    soundFx.playClick();
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPos(percent);
  };

  const setPreset = (val: number) => {
    soundFx.playClick();
    setSliderPos(val);
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#090B10] p-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <Zap className="h-3.5 w-3.5" />
            <span>INTERACTIVE WORKFLOW AUDIT</span>
          </div>
          <h3 className="font-display text-xl font-bold text-white">
            HireDesk: Legacy 18-Column ERP vs. Varun’s Cockpit
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Drag the slider or click buttons below to inspect how redesigning spatial hierarchy slashed booking steps by 50%.
          </p>
        </div>

        {/* Quick presets (Segmented controls, functional buttons) */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-lg shrink-0">
          <button
            onClick={() => setPreset(10)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              sliderPos < 25 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Show Legacy (2018)
          </button>
          <button
            onClick={() => setPreset(50)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              sliderPos >= 25 && sliderPos <= 75 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Split 50/50
          </button>
          <button
            onClick={() => setPreset(90)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              sliderPos > 75 ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Show Redesign (2024)
          </button>
        </div>
      </div>

      {/* Interactive Drag Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerUp}
        className="relative h-[380px] sm:h-[420px] w-full select-none overflow-hidden rounded-xl border border-zinc-700/80 cursor-ew-resize bg-zinc-950"
      >
        {/* RIGHT LAYER: Varun's 2024 Redesign Cockpit */}
        <div className="absolute inset-0 p-5 bg-gradient-to-br from-zinc-900 to-[#0A101D] text-zinc-100 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-semibold text-sm text-cyan-300">HireDesk Cockpit (2024 Redesign)</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <span className="flex items-center gap-1 text-emerald-400 font-mono">
                <CheckCircle2 className="h-3.5 w-3.5" /> 4.2 min dispatch
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-cyan-400">4 steps total</span>
            </div>
          </div>

          {/* Redesign preview cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-auto">
            <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-3">
              <div className="text-[11px] font-mono text-cyan-400">ZONE A: SPATIAL TELEMATICS</div>
              <div className="text-sm font-bold text-white mt-1">Live Fleet GPS</div>
              <div className="mt-2 text-xs text-zinc-300 flex items-center justify-between">
                <span>CAT 320D Excavator</span>
                <span className="font-mono text-emerald-400">Ready (2.4km)</span>
              </div>
              <div className="mt-1 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 w-4/5" />
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
              <div className="text-[11px] font-mono text-zinc-400">ZONE B: ONE-TAP DISPATCH</div>
              <div className="text-sm font-bold text-white mt-1">Smart Haulage Match</div>
              <div className="mt-2 text-xs text-zinc-300">
                Auto-assigned to Driver #44 (Certified Class-1). Lowbed ready at depot.
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
              <div className="text-[11px] font-mono text-zinc-400">ZONE C: HEALTH TELEMETRY</div>
              <div className="text-sm font-bold text-white mt-1">Predictive Diagnostics</div>
              <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1 font-mono">
                <span>Hydraulics: 98% nominal</span>
              </div>
              <div className="text-[11px] text-zinc-400 mt-1">Next inspection in 180 hrs</div>
            </div>
          </div>

          <div className="rounded-lg bg-zinc-900/90 p-3 border border-zinc-800 flex items-center justify-between text-xs">
            <span className="text-zinc-300 font-medium">Auto-generated Digital Manifest #HD-89241</span>
            <span className="font-mono text-cyan-400">Escrow Approved · One-Click Signoff</span>
          </div>
        </div>

        {/* LEFT LAYER: Legacy 2018 Cluttered Table (Clipped by slider position) */}
        <div
          className="absolute inset-y-0 left-0 bg-[#161618] border-r border-amber-500/50 p-5 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="w-[800px] flex flex-col justify-between h-full">
            <div className="flex items-center justify-between border-b border-zinc-700/80 pb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                <span className="font-mono text-xs font-semibold text-amber-300">
                  Legacy ERP Table (2018) — High Friction
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <span className="text-amber-400 font-mono flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> 9.8 min dispatch
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-red-400">18 redundant columns</span>
              </div>
            </div>

            {/* Cluttered simulated legacy data table */}
            <div className="my-auto border border-zinc-700 bg-zinc-900/90 rounded text-[11px] font-mono overflow-hidden">
              <div className="grid grid-cols-6 gap-1 bg-zinc-800 p-2 text-zinc-400 border-b border-zinc-700">
                <span>ASSET_ID</span>
                <span>SERIAL_NO</span>
                <span>STATUS_FLAG</span>
                <span>LAST_GEO_X</span>
                <span>LAST_GEO_Y</span>
                <span>ACTIONS</span>
              </div>
              <div className="grid grid-cols-6 gap-1 p-2 border-b border-zinc-800 text-zinc-300 bg-red-950/20">
                <span>EQ-992-B</span>
                <span>SN4492019-X</span>
                <span className="text-red-400">PENDING_CONF</span>
                <span>12.9716° N</span>
                <span>77.5946° E</span>
                <span className="text-zinc-400">[Click to open modal]</span>
              </div>
              <div className="grid grid-cols-6 gap-1 p-2 border-b border-zinc-800 text-zinc-300">
                <span>EQ-104-A</span>
                <span>SN8820491-Z</span>
                <span className="text-amber-400">MAINT_HOLD</span>
                <span>12.9352° N</span>
                <span>77.6245° E</span>
                <span className="text-zinc-400">[Edit Row (Disabled)]</span>
              </div>
              <div className="grid grid-cols-6 gap-1 p-2 text-zinc-400">
                <span>EQ-552-C</span>
                <span>SN1102934-Q</span>
                <span className="text-zinc-500">UNKNOWN</span>
                <span>12.9121° N</span>
                <span>77.6441° E</span>
                <span className="text-zinc-400">[Verify in Tab 4]</span>
              </div>
            </div>

            <div className="rounded bg-amber-950/30 p-2.5 border border-amber-800/40 text-xs text-amber-200">
              Pain Point: Operators had to memorize equipment IDs, switch between 4 browser tabs, and manually compute GPS distances.
            </div>
          </div>
        </div>

        {/* DRAGGABLE SLIDER HANDLE */}
        <div
          className="absolute inset-y-0 flex items-center justify-center pointer-events-none"
          style={{ left: `calc(${sliderPos}% - 16px)` }}
        >
          <div className="h-full w-[2px] bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
          <div className="absolute h-9 w-9 rounded-full bg-cyan-500 text-zinc-950 flex items-center justify-center shadow-lg border-2 border-white pointer-events-auto cursor-ew-resize">
            <ArrowLeftRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Quantitative Proof metrics below */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center border-t border-zinc-800/80 pt-4">
        <div>
          <div className="text-lg font-mono font-bold text-cyan-400 tabular-nums">-57%</div>
          <div className="text-[11px] text-zinc-400">Dispatch Time (min)</div>
        </div>
        <div>
          <div className="text-lg font-mono font-bold text-emerald-400 tabular-nums">50%</div>
          <div className="text-[11px] text-zinc-400">Fewer User Clicks</div>
        </div>
        <div>
          <div className="text-lg font-mono font-bold text-sky-400 tabular-nums">0</div>
          <div className="text-[11px] text-zinc-400">External Tabs Required</div>
        </div>
        <div>
          <div className="text-lg font-mono font-bold text-indigo-400 tabular-nums">-72%</div>
          <div className="text-[11px] text-zinc-400">Operator Data Errors</div>
        </div>
      </div>
    </div>
  );
};
