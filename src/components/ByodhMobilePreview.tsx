import React, { useState } from 'react';
import { Smartphone, Check, Layers, AlertCircle, HardHat, Camera, ShieldCheck, MapPin } from 'lucide-react';
import { soundFx } from '../utils/sound';

type ByodhTab = 'blueprint' | 'checkin' | 'supplies';

export const ByodhMobilePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ByodhTab>('blueprint');
  const [selectedPin, setSelectedPin] = useState<number | null>(1);
  const [escrowReleased, setEscrowReleased] = useState<boolean>(false);
  const [cementBags, setCementBags] = useState<number>(140);
  const [steelTons, setSteelTons] = useState<number>(3.8);

  const pins = [
    {
      id: 1,
      x: 32,
      y: 45,
      title: 'Pillar C4 Rebar Tie-off',
      status: 'VERIFIED',
      inspector: 'Foreman Ramesh S.',
      photoProof: true,
      notes: '16mm TMT high-tensile steel cross-binding verified before casting.',
    },
    {
      id: 2,
      x: 68,
      y: 28,
      title: 'MEP Electrical Conduit Chase',
      status: 'INSPECTION PENDING',
      inspector: 'Lead Architect Rao',
      photoProof: false,
      notes: 'Ensure PVC conduits maintain 50mm clearance from wet riser pipe.',
    },
    {
      id: 3,
      x: 52,
      y: 72,
      title: 'Master Bathroom Drain Slope',
      status: 'PASSED',
      inspector: 'Plumbing Lead Imran',
      photoProof: true,
      notes: '1:50 gravity fall verified with digital level test.',
    },
  ];

  const handleEscrowRelease = () => {
    soundFx.playSuccess();
    setEscrowReleased(true);
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#090B10] p-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
            <HardHat className="h-3.5 w-3.5" />
            <span>FOUNDER VENTURE & ZERO-TO-ONE FIELD UX</span>
          </div>
          <h3 className="font-display text-xl font-bold text-white">
            BYODH: Rugged Mobile Field Companion
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Designed for high-glare 40°C outdoor sunlight, gloved hands, and offline SQLite synchronization.
          </p>
        </div>

        {/* Tab Controls for the mobile preview */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-lg shrink-0">
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('blueprint');
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'blueprint' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Blueprint Snagging
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('checkin');
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'checkin' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Escrow Signoff
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('supplies');
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'supplies' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Material Tally
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* INTERACTIVE PHONE FRAME */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-[300px] sm:w-[320px] h-[580px] rounded-[44px] bg-[#12141A] p-3.5 border-4 border-zinc-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col relative select-none">
            
            {/* Dynamic Island */}
            <div className="mx-auto h-5 w-24 rounded-full bg-zinc-950 flex items-center justify-center mb-2">
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-900 border border-zinc-800" />
            </div>

            {/* Inner Phone Screen */}
            <div className="flex-1 rounded-[32px] bg-[#0A0C11] border border-zinc-800 overflow-hidden flex flex-col justify-between p-4">
              
              {/* Phone Header */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                <div>
                  <div className="text-[10px] font-mono text-amber-400">VILLA #24 — PHASE 2</div>
                  <div className="text-xs font-bold text-white">Structural Slab Cast</div>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded">
                  GPS: ON-SITE
                </div>
              </div>

              {/* TAB 1: BLUEPRINT SNAGGING */}
              {activeTab === 'blueprint' && (
                <div className="flex-1 my-3 flex flex-col justify-between">
                  <div className="text-[11px] text-zinc-400 flex items-center justify-between">
                    <span>Floor 1: Structural Grid</span>
                    <span className="font-mono text-zinc-500">Tap pin to inspect</span>
                  </div>

                  {/* Blueprint Vector Canvas Simulation */}
                  <div className="relative h-44 rounded-xl border border-cyan-500/30 bg-[#06101E] p-2 overflow-hidden my-2">
                    {/* Architectural grid blueprint lines */}
                    <svg className="w-full h-full stroke-cyan-500/20" viewBox="0 0 100 100">
                      <rect x="10" y="10" width="80" height="80" fill="none" strokeWidth="1" />
                      <line x1="10" y1="50" x2="90" y2="50" strokeWidth="0.8" strokeDasharray="2,2" />
                      <line x1="50" y1="10" x2="50" y2="90" strokeWidth="0.8" strokeDasharray="2,2" />
                      <rect x="25" y="25" width="25" height="25" fill="none" strokeWidth="0.8" />
                      <rect x="60" y="25" width="20" height="50" fill="none" strokeWidth="0.8" />
                    </svg>

                    {/* Interactive Clickable Inspection Pins */}
                    {pins.map((pin) => (
                      <button
                        key={pin.id}
                        onClick={() => {
                          soundFx.playClick();
                          setSelectedPin(pin.id);
                        }}
                        style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full flex items-center justify-center transition-all ${
                          selectedPin === pin.id
                            ? 'bg-amber-400 text-zinc-950 scale-125 shadow-lg shadow-amber-400/50 ring-2 ring-white'
                            : 'bg-zinc-800 text-zinc-300 border border-zinc-600 hover:bg-zinc-700'
                        }`}
                        title={pin.title}
                      >
                        <span className="text-[10px] font-bold font-mono">{pin.id}</span>
                      </button>
                    ))}
                  </div>

                  {/* Selected Pin Details Box */}
                  {selectedPin && (
                    <div className="rounded-lg bg-zinc-900/90 border border-zinc-700 p-2.5 text-xs space-y-1 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-zinc-200">
                          {pins.find((p) => p.id === selectedPin)?.title}
                        </span>
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                            pins.find((p) => p.id === selectedPin)?.status === 'VERIFIED'
                              ? 'bg-emerald-950 text-emerald-400'
                              : pins.find((p) => p.id === selectedPin)?.status === 'PASSED'
                              ? 'bg-cyan-950 text-cyan-400'
                              : 'bg-amber-950 text-amber-400'
                          }`}
                        >
                          {pins.find((p) => p.id === selectedPin)?.status}
                        </span>
                      </div>
                      <p className="text-[10px] text-zinc-400">
                        {pins.find((p) => p.id === selectedPin)?.notes}
                      </p>
                      <div className="text-[9px] text-zinc-500 font-mono">
                        Audited by: {pins.find((p) => p.id === selectedPin)?.inspector}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: ESCROW SIGNOFF */}
              {activeTab === 'checkin' && (
                <div className="flex-1 my-3 flex flex-col justify-between space-y-3">
                  <div className="rounded-lg bg-zinc-900 p-3 border border-zinc-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">Milestone Tranche #3</span>
                      <span className="font-mono font-bold text-white">₹4,20,000</span>
                    </div>
                    <div className="text-[11px] text-zinc-300">
                      Requirement: Structural slab curing period complete (14 days) + surveyor photogrammetry.
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-mono pt-1">
                      <Camera className="h-3.5 w-3.5" />
                      <span>4 Geo-tagged Photos Verified</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-zinc-950 p-3 border border-zinc-800 text-xs">
                    <div className="text-zinc-400 mb-1">Contractor Escrow Status:</div>
                    {escrowReleased ? (
                      <div className="flex items-center gap-1.5 text-emerald-400 font-semibold font-mono">
                        <ShieldCheck className="h-4 w-4" />
                        <span>FUNDS RELEASED VIA ESCROW</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-amber-400 font-medium">
                        <AlertCircle className="h-4 w-4" />
                        <span>Awaiting Supervisor Release</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleEscrowRelease}
                    disabled={escrowReleased}
                    className={`w-full py-3 rounded-xl font-bold text-xs transition-all ${
                      escrowReleased
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                        : 'bg-amber-500 text-zinc-950 hover:bg-amber-400 shadow-md shadow-amber-500/20 active:scale-95'
                    }`}
                  >
                    {escrowReleased ? 'Signoff Verified ✓' : 'Approve & Release Tranche'}
                  </button>
                </div>
              )}

              {/* TAB 3: MATERIAL TALLY */}
              {activeTab === 'supplies' && (
                <div className="flex-1 my-3 flex flex-col justify-between space-y-3">
                  <div className="text-[11px] text-zinc-400">
                    High-contrast single-tap tally for dusty on-site receiving:
                  </div>

                  <div className="space-y-2.5">
                    {/* Item 1 */}
                    <div className="rounded-lg bg-zinc-900 p-2.5 border border-zinc-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">UltraTech Cement</div>
                        <div className="text-[10px] text-zinc-400">50kg bags on site</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            soundFx.playClick();
                            setCementBags((b) => Math.max(0, b - 5));
                          }}
                          className="h-8 w-8 rounded-lg bg-zinc-800 text-zinc-200 font-bold hover:bg-zinc-700"
                        >
                          -
                        </button>
                        <span className="font-mono text-sm font-bold text-amber-400 w-10 text-center">
                          {cementBags}
                        </span>
                        <button
                          onClick={() => {
                            soundFx.playClick();
                            setCementBags((b) => b + 5);
                          }}
                          className="h-8 w-8 rounded-lg bg-zinc-800 text-zinc-200 font-bold hover:bg-zinc-700"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="rounded-lg bg-zinc-900 p-2.5 border border-zinc-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">Tata Tiscon Rebar</div>
                        <div className="text-[10px] text-zinc-400">Metric tons batch</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            soundFx.playClick();
                            setSteelTons((t) => Number(Math.max(0, t - 0.5).toFixed(1)));
                          }}
                          className="h-8 w-8 rounded-lg bg-zinc-800 text-zinc-200 font-bold hover:bg-zinc-700"
                        >
                          -
                        </button>
                        <span className="font-mono text-sm font-bold text-cyan-400 w-10 text-center">
                          {steelTons}t
                        </span>
                        <button
                          onClick={() => {
                            soundFx.playClick();
                            setSteelTons((t) => Number((t + 0.5).toFixed(1)));
                          }}
                          className="h-8 w-8 rounded-lg bg-zinc-800 text-zinc-200 font-bold hover:bg-zinc-700"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-emerald-400 text-center">
                    Offline queue: 0 pending · Local DB in sync
                  </div>
                </div>
              )}

              {/* Bottom Nav Bar */}
              <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-around text-[10px] text-zinc-400">
                <span className="text-amber-400 font-medium">Blueprint</span>
                <span>Audit</span>
                <span>Team</span>
                <span>Settings</span>
              </div>

            </div>
          </div>
        </div>

        {/* FIELD UX DISCIPLINE CALLOUTS */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-2">
                <Layers className="h-4 w-4 text-amber-400" />
                <span>Zero-Friction Physical Snagging</span>
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Rather than forcing supervisors to read 40-page architectural drawing sets on A0 paper in windy, dusty environments, Varun vectorized CAD layers into an interactive SVG coordinate system. Site engineers drop pins directly over problem areas, attach camera evidence, and auto-notify sub-contractors.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Eliminating Trust Deficits in Billing</span>
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Construction disputes occur when contractors invoice for unverified milestones. BYODH couples mobile escrow release with required multi-angle photo proof and surveyor geo-coordinates, reducing dispute rates by 88%.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>Offline-First SQLite Architecture</span>
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Concrete basement pours block cellular data. The entire interaction loop writes mutations to a local SQLite database with optimistic UI rendering, batching sync requests once the supervisor walks within range of site Wi-Fi.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
