import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Truck,
  Briefcase,
  Layers,
  Clock,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Zap,
  Sliders,
  Cpu,
  Smartphone,
  Gauge,
  Calendar,
  AlertCircle,
  FileCheck,
  Laptop,
  Check,
  Database,
  Lock,
  ChevronRight,
  Activity,
  Users
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface HireDeskCaseStudyPageProps {
  onBack: () => void;
  onSelectProject?: (project: Project) => void;
}

export const HireDeskCaseStudyPage: React.FC<HireDeskCaseStudyPageProps> = ({ onBack, onSelectProject }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextProject = PROJECTS.find((p) => p.id === 'construction-materials') || PROJECTS[1];

  return (
    <div className="min-h-screen bg-[#090D16] text-[#94A3B8] font-sans antialiased selection:bg-[#2563EB] selection:text-white">

      {/* ── Main Content Container ── */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-10 sm:pb-12 space-y-14 sm:space-y-16">

        {/* ── SECTION 1: HERO & PROJECT OVERVIEW (Side-by-Side Split matching BYODH) ── */}
        <section className="relative">
          {/* Subtle Ambient Backdrop Glow */}
          <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/[0.04] rounded-full blur-[140px] -z-10" />

          {/* Side-by-Side Hero Split: Content Left, Mockup Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Project Name, Eyebrow & Project Details (Metadata) */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Back Link on Top of the Heading */}
              <div>
                <button
                  onClick={onBack}
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors group cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5 text-sky-400 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Works</span>
                </button>
              </div>

              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase">
                  CASE STUDY
                </span>
                <span className="h-3 w-[1px] bg-white/20" />
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-sky-500/10 border border-sky-500/20 text-sky-400 font-medium">
                  Enterprise B2B SaaS
                </span>
              </div>

              {/* Large Headline with Elegant Serif Italic Accent */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                HireDesk:{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  The Enterprise Command Center
                </em>
              </h1>

              {/* Subhead Context */}
              <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.6]">
                Bridging global fleet governance with ground-level task execution across high-density web cockpits and offline field mobile clients.
              </p>

              {/* Details of Project (Metadata Block) */}
              <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-[#0E1422]/70 backdrop-blur-md space-y-3.5 shadow-xl">
                <div className="grid grid-cols-2 gap-3 border-b border-white/[0.06] pb-3">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">ROLE</div>
                    <div className="text-xs sm:text-sm font-medium text-white">Lead UI/UX Designer</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">PLATFORM</div>
                    <div className="text-xs sm:text-sm font-medium text-white">Web &amp; iOS/Android</div>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">SCOPE</div>
                  <div className="text-xs sm:text-sm font-medium text-white leading-snug">
                    Fleet 360, Multi-Depot RBAC, PM Gating &amp; Live Invoicing
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Mockup Image */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0E1422] p-3 sm:p-5 shadow-2xl relative overflow-hidden group">
                <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-xl overflow-hidden bg-[#070A12] border border-white/[0.06] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/15 via-blue-600/10 to-transparent blur-[70px] pointer-events-none" />
                  <div
                    className="absolute inset-0 opacity-[0.14] pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="relative w-[92%] h-[92%] flex items-center justify-center z-10 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                    <img
                      src="/projects/hiredesk-device-cutout.png"
                      alt="HireDesk Composition: High-density enterprise web console on laptop offset by mobile app screen on phone"
                      className="w-full h-full object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)]"
                    />
                  </div>
                  <div className="absolute bottom-3 right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0E18]/90 border border-white/10 backdrop-blur-md text-[10px] font-mono text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    <span>Web Command + Mobile Sync</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── SECTION 2: THE ENTERPRISE CHALLENGE ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left side: Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase flex items-center gap-2">
                <span>THE ENTERPRISE CHALLENGE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.1]">
                The Dual Ecosystem{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  Divide
                </em>
              </h2>
              <p className="text-sm sm:text-base leading-[1.6] text-slate-300 font-light pt-1">
                Managing a global fleet requires solving two fundamentally opposed UX problems. The Tenant Admin needs a high-density, macro-level web console to monitor compliance, approve maintenance, and control access across multiple depots. Conversely, Field Technicians operating in harsh environments require a micro-level, distraction-free mobile interface strictly focused on linear task execution. The challenge was architecting a unified system that seamlessly translates complex desktop governance into straightforward mobile actions.
              </p>
            </div>

            {/* Right side: Two distinct user archetype cards */}
            <div className="lg:col-span-6 space-y-4">
              {/* Card 1: The Dispatcher */}
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0E1422]/70 hover:border-sky-500/30 transition-all duration-300 space-y-3 group shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                      <Laptop className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-sky-400 tracking-[0.2em] uppercase">OFFICE ARCHETYPE</span>
                      <h4 className="text-base font-medium text-white tracking-tight">The Dispatcher</h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    Web Environment
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.5]">
                  Requires data density, bulk operations, and strict audit workflows.
                </p>
                <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2 text-[10px] font-mono text-slate-400">
                  <span className="text-sky-400 font-medium">Core Needs:</span>
                  <span>Bulk CSV Imports · Multi-Depot Scoping · Compliance Audits</span>
                </div>
              </div>

              {/* Card 2: The Technician */}
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0E1422]/70 hover:border-blue-500/30 transition-all duration-300 space-y-3 group shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-blue-400 tracking-[0.2em] uppercase">FIELD ARCHETYPE</span>
                      <h4 className="text-base font-medium text-white tracking-tight">The Technician</h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Mobile Environment
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.5]">
                  Requires high-contrast visibility, large touch targets, and offline-ready task linearity.
                </p>
                <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2 text-[10px] font-mono text-slate-400">
                  <span className="text-blue-400 font-medium">Core Needs:</span>
                  <span>Sunlight Light Theme · Meter Photo Scan · Gated Step Progression</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── SECTION 3: OPERATIONAL ARCHETYPES (USER RESEARCH) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          <div className="space-y-4 max-w-4xl">
            <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>OPERATIONAL ARCHETYPES (USER RESEARCH)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.1]">
              Defining the{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">
                Operational Archetypes
              </em>
            </h2>
            <p className="text-sm sm:text-base leading-[1.6] text-slate-300 font-light pt-1">
              User research for HireDesk required analyzing two contrasting physical environments. The success of the platform hinged on bridging the gap between a high-stress office command center and harsh, unpredictable field conditions.
            </p>
          </div>

          {/* 2-Column Grid of Distinct Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: The Fleet Dispatcher */}
            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-sky-500/30 transition-all duration-300 space-y-5 shadow-xl relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-sky-400 tracking-[0.2em] uppercase">OFFICE COMMAND</span>
                    <h3 className="text-lg font-medium text-white tracking-tight">The Fleet Dispatcher</h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  Macro Visibility
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm pt-2 border-t border-white/[0.06]">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-medium">ENVIRONMENT</div>
                  <p className="text-slate-200 font-light leading-relaxed">
                    Office desk, multiple large monitors, high cognitive load.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-medium">PRIMARY GOAL</div>
                  <p className="text-slate-200 font-light leading-relaxed">
                    Monitor fleet health, process bulk asset imports, and approve maintenance requests rapidly.
                  </p>
                </div>

                <div className="space-y-1 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-medium">UX CONSTRAINT</div>
                  <p className="text-slate-300 font-light leading-relaxed">
                    Requires extreme data density and macro-level visibility without eye fatigue.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: The Field Technician */}
            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-blue-500/30 transition-all duration-300 space-y-5 shadow-xl relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-blue-400 tracking-[0.2em] uppercase">FIELD EXECUTION</span>
                    <h3 className="text-lg font-medium text-white tracking-tight">The Field Technician</h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Micro Execution
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm pt-2 border-t border-white/[0.06]">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-medium">ENVIRONMENT</div>
                  <p className="text-slate-200 font-light leading-relaxed">
                    Outdoors, harsh lighting, physically demanding, wearing protective gear.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-medium">PRIMARY GOAL</div>
                  <p className="text-slate-200 font-light leading-relaxed">
                    Receive dispatch tickets, locate assets, and execute preventive maintenance protocols.
                  </p>
                </div>

                <div className="space-y-1 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-medium">UX CONSTRAINT</div>
                  <p className="text-slate-300 font-light leading-relaxed">
                    Requires a highly linear, distraction-free interface with oversized touch targets and mandatory compliance gates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── SECTION 4: CORE PLATFORM WORKFLOWS ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          <div className="space-y-4 max-w-4xl">
            <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>CORE PLATFORM WORKFLOWS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.1]">
              Core Platform{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">
                Workflows
              </em>
            </h2>
            <p className="text-sm sm:text-base leading-[1.6] text-slate-300 font-light pt-1">
              Architecting seamless operational governance across the physical-digital divide required structuring three foundational workflows that bridge high-level fleet administration with frontline execution.
            </p>
          </div>

          {/* 3-Column Grid of Minimalist Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Asset 360 & Onboarding */}
            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-sky-500/30 transition-all duration-300 space-y-4 group shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                <Database className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white tracking-tight">
                  Asset 360 &amp; Onboarding
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.6]">
                  End-to-end lifecycle management, from bulk CSV imports and location mapping to tracking historical maintenance and meter readings.
                </p>
              </div>
            </div>

            {/* Card 2: Preventive & Corrective Maintenance */}
            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-sky-500/30 transition-all duration-300 space-y-4 group shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white tracking-tight">
                  Preventive &amp; Corrective Maintenance
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.6]">
                  Evidence-driven loops requiring technicians to upload diagnostic photos and readings before admins can approve and close tickets.
                </p>
              </div>
            </div>

            {/* Card 3: Access & Team Governance */}
            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-sky-500/30 transition-all duration-300 space-y-4 group shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white tracking-tight">
                  Access &amp; Team Governance
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.6]">
                  Strict Role-Based Access Control (RBAC) and depot-level scoping to ensure enterprise security across distributed workforces.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ── SECTION 5: ARCHITECTURE & WIREFRAMING (Cross-Platform Wireframe Showcase) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Narrative & Tags */}
            <div className="lg:col-span-5 space-y-5">
              <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>ARCHITECTURE &amp; WIREFRAMING</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                Mapping the Logic:{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  Structural Wireframing
                </em>
              </h2>

              <p className="text-sm sm:text-base leading-[1.6] text-slate-300 font-light">
                Before establishing the visual system, I utilized gray-box wireframing to validate the core dispatch workflows and activity masters. By stripping away typography and color, I could strictly pressure-test the information architecture and determine how complex data tables on the desktop logically collapse into actionable, step-by-step tasks on the mobile operator interface.
              </p>

              {/* Tags / Pills */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="inline-flex items-center text-[11px] font-mono text-slate-300 bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full">
                  Cross-Platform Architecture
                </span>
                <span className="inline-flex items-center text-[11px] font-mono text-slate-300 bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full">
                  Desktop Web Console &amp; Mobile Field Flows
                </span>
                <span className="inline-flex items-center text-[11px] font-mono text-[#0085FF] bg-[#0085FF]/10 border border-[#0085FF]/20 px-3.5 py-1.5 rounded-full font-medium">
                  Low-Fidelity Architecture Validation
                </span>
              </div>
            </div>

            {/* Right Column: Desktop Dashboard Mockup Screen with 2 Clean Mobile Mockups Layered Above */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0A0E18] p-3 sm:p-5 shadow-2xl overflow-hidden group">
                {/* Subtle Ambient Glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 bg-sky-500/[0.06] rounded-full blur-[90px]" />
                
                {/* Desktop Browser Window Frame */}
                <div className="rounded-xl border border-white/10 bg-[#0E1524] overflow-hidden shadow-2xl relative">
                  {/* Browser Bar */}
                  <div className="px-3.5 py-2.5 bg-[#0B101C] border-b border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                      </div>
                      <span className="ml-2 text-slate-400 text-[10px] hidden sm:inline">
                        console.hiredesk.io/fleet/telemetry-matrix
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 hidden sm:inline">1440 × 900 Desktop Viewport</span>
                  </div>

                  {/* Wireframe Canvas with Desktop Mockup & Floating Mobile Mockups */}
                  <div className="relative overflow-hidden">
                    {/* Desktop Wireframe Image */}
                    <img
                      src="/projects/hiredesk-wireframe-desktop.jpg"
                      alt="HireDesk Desktop Wireframe"
                      className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity"
                    />

                    {/* Subtle gradient vignette to elevate the foreground mobile devices */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                    {/* 2 Floating Mobile Device Mockups - First mockup offset down by half, second mockup full-height */}
                    <div className="absolute right-3 sm:right-6 -bottom-1 sm:-bottom-2 flex items-end gap-2 sm:gap-4 z-10 w-[50%] sm:w-[46%] max-w-[280px]">
                      <img
                        src="/projects/hiredesk-wireframe-mobile-auth.png"
                        alt="HireDesk Mobile Wireframe Auth"
                        className="w-1/2 h-auto object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.7)] translate-y-[45%] hover:translate-y-[40%] transition-transform duration-300 select-none"
                      />
                      <img
                        src="/projects/hiredesk-wireframe-mobile-detail.png"
                        alt="HireDesk Mobile Wireframe Task Detail"
                        className="w-1/2 h-auto object-contain filter drop-shadow-[0_20px_38px_rgba(0,0,0,0.75)] hover:-translate-y-1 transition-transform duration-300 select-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── SECTION 6: THE CONTROL CENTER (WEB ADMINISTRATION) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Web View Mockup Screen */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0A0E18] p-3 sm:p-5 shadow-2xl overflow-hidden group">
                {/* Subtle Ambient Glow */}
                <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 bg-sky-500/[0.06] rounded-full blur-[90px]" />

                {/* Desktop Browser Window Frame */}
                <div className="rounded-xl border border-white/10 bg-[#0E1524] overflow-hidden shadow-2xl relative">
                  {/* Browser Window Bar */}
                  <div className="px-3.5 py-2.5 bg-[#0B101C] border-b border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                      </div>
                      <span className="ml-2 text-slate-400 text-[10px] hidden sm:inline">
                        console.hiredesk.io/assets/HDC-001/details-360
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 hidden sm:inline">1440 × 900 Enterprise Console</span>
                  </div>

                  {/* Real Web Console Image */}
                  <div className="relative overflow-hidden bg-white">
                    <img
                      src="/projects/hiredesk-web-asset-details.jpg"
                      alt="HireDesk Asset 360 Web Console"
                      className="w-full h-auto object-cover select-none group-hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Narrative & Feature Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>THE CONTROL CENTER (WEB ADMINISTRATION)</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                  Desktop:{' '}
                  <em className="font-serif italic font-normal text-[#38BDF8]">
                    High-Density Data Governance
                  </em>
                </h2>

                <p className="text-sm sm:text-base leading-[1.6] text-slate-300 font-light">
                  To support Tenant Admins, I designed a comprehensive enterprise web console prioritizing scannability, rapid information retrieval, and strict approval loops. High-contrast typography and utilitarian data grids ensure effortless navigation during high-volume shifts, while modular data tables handle massive inputs—from bulk CSV asset onboarding to multi-depot compliance tracking.
                </p>
              </div>

              {/* Feature Highlights Stack */}
              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-sky-500/30 transition-all duration-300 space-y-1.5 group shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                      <Gauge className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-sm font-medium text-white tracking-tight">
                      Asset 360 &amp; Lifecycles
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed pl-9">
                    Centralized telemetry hubs tracking real-time status, meter history, and expiring compliance documents across fleet inventories.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-sky-500/30 transition-all duration-300 space-y-1.5 group shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                      <FileCheck className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-sm font-medium text-white tracking-tight">
                      Evidence-Driven Approvals
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed pl-9">
                    Strict sign-off loops requiring admins to verify technician diagnostic photos and meter logs before closing maintenance tickets.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-sky-500/30 transition-all duration-300 space-y-1.5 group shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                      <Lock className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-sm font-medium text-white tracking-tight">
                      Role-Based Access (RBAC)
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed pl-9">
                    Granular permission configuration and depot-specific scoping, isolating corporate assets and sensitive records securely.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── SECTION 7: FIELD EXECUTION (MOBILE OPERATIONS) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Narrative & Detailed Features */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>FIELD EXECUTION (MOBILE OPERATIONS)</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                  Field:{' '}
                  <em className="font-serif italic font-normal text-[#38BDF8]">
                    Utilitarian Ergonomics
                  </em>
                </h2>

                <p className="text-sm sm:text-base leading-[1.6] text-slate-300 font-light">
                  In the field, administrative noise is a liability. The mobile application was engineered strictly for execution. Using high-contrast typography and utilitarian ergonomics optimized for outdoor visibility, the UI guides technicians through mandatory compliance gates—ensuring no task is marked complete without precise meter readings and photographic evidence.
                </p>
              </div>

              {/* 3 Detailed Bullets */}
              <div className="space-y-3.5 pt-1">
                <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-sky-500/30 transition-all duration-300 space-y-1.5 group shadow-lg">
                  <div className="text-xs font-semibold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Workspace &amp; Depot Gating</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed pl-3.5">
                    Secure tenant onboarding to authenticate local depot zones and protect enterprise fleet data across distributed workforces.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-sky-500/30 transition-all duration-300 space-y-1.5 group shadow-lg">
                  <div className="text-xs font-semibold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Linear Task Progression</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed pl-3.5">
                    Isolated asset lists and direct meter logging prevent deviation during preventive maintenance (PM) routines.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-sky-500/30 transition-all duration-300 space-y-1.5 group shadow-lg">
                  <div className="text-xs font-semibold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Environmental Accessibility</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed pl-3.5">
                    Oversized touch targets and clear semantic status tags (Updated vs. Action Required) designed for gloved operation in harsh outdoor glare.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: 2 Real High-Fidelity Mobile Device Mockups */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0A0E18] p-5 sm:p-8 shadow-2xl overflow-hidden group">
                {/* Subtle Ambient Glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 bg-sky-500/[0.06] rounded-full blur-[90px]" />
                
                {/* Header tag */}
                <div className="text-[10px] font-mono text-sky-400 uppercase tracking-widest mb-5 flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Field Execution Flows · Mobile App</span>
                  </span>
                  <span className="text-slate-500 hidden sm:inline">Offline-First Architecture</span>
                </div>

                {/* 2 Mobile Mockups Side-by-Side with Subtle Stagger */}
                <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-7 w-full max-w-[520px] mx-auto py-2">
                  {/* Screen 1: Sign In Flow */}
                  <div className="w-1/2 max-w-[230px] rounded-[24px] sm:rounded-[32px] overflow-hidden border-[4px] sm:border-[5px] border-slate-800 shadow-[0_20px_45px_rgba(0,0,0,0.85)] ring-1 ring-white/10 hover:scale-[1.03] transition-transform duration-300 bg-white">
                    <img
                      src="/projects/hiredesk-mobile-signin.jpg"
                      alt="HireDesk Mobile Sign In"
                      className="w-full h-auto object-cover select-none"
                    />
                  </div>

                  {/* Screen 2: Operator Asset List Flow (Elevated Stagger) */}
                  <div className="w-1/2 max-w-[230px] rounded-[24px] sm:rounded-[32px] overflow-hidden border-[4px] sm:border-[5px] border-slate-800 shadow-[0_25px_50px_rgba(0,0,0,0.9)] ring-1 ring-white/10 hover:scale-[1.03] -translate-y-2 sm:-translate-y-4 transition-transform duration-300 bg-white">
                    <img
                      src="/projects/hiredesk-mobile-assets.jpg"
                      alt="HireDesk Mobile Assets View"
                      className="w-full h-auto object-cover select-none"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── SECTION 8: SCALABLE VISUAL ARCHITECTURE ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-10">
          {/* Header & Introductory Paragraph */}
          <div className="space-y-4 max-w-4xl">
            <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>SCALABLE VISUAL ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.1]">
              Cross-Platform{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">
                Cohesion
              </em>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.6] pt-1">
              A shared DNA connects the dense web tables to the mobile components. By establishing a strict 4-point spatial grid and a unified semantic color palette, the system scales predictably from a 1440px desktop viewport down to a 390px mobile screen.
            </p>
          </div>

          {/* 3-Column Grid Mapping Design Tokens */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0E1422] p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Column 1: Palette (HireDesk Enterprise Palette) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="font-mono text-xs text-sky-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0085FF]" />
                  Column 1 · Palette
                </div>

                <div className="space-y-3">
                  {/* Brand Primary */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Brand Primary</div>
                    <div className="flex items-center gap-2.5 p-2 rounded-lg bg-black/40 border border-white/10">
                      <div className="w-6 h-6 rounded-md bg-[#0085FF] shrink-0 shadow-sm" />
                      <div className="min-w-0">
                        <div className="text-[11px] font-medium text-white truncate">Vibrant Tech Blue</div>
                        <div className="text-[10px] font-mono text-[#0085FF]">#0085FF</div>
                      </div>
                    </div>
                  </div>

                  {/* Admin & Canvas Surfaces */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Platform Surfaces</div>
                    
                    {/* Left Nav Dark Slate */}
                    <div className="flex items-center gap-2.5 p-2 rounded-lg bg-black/40 border border-white/10">
                      <div className="w-5 h-5 rounded-md bg-[#111827] border border-white/20 shrink-0 shadow-sm" />
                      <div className="min-w-0 flex-1 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-white truncate">Web Admin Surface (Left Nav)</span>
                        <span className="text-[10px] font-mono text-slate-400">#111827</span>
                      </div>
                    </div>

                    {/* Canvas & Mobile White */}
                    <div className="flex items-center gap-2.5 p-2 rounded-lg bg-black/40 border border-white/10">
                      <div className="w-5 h-5 rounded-md bg-[#FFFFFF] border border-white/40 shrink-0 shadow-sm" />
                      <div className="min-w-0 flex-1 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-white truncate">Web Canvas &amp; Mobile BG</span>
                        <span className="text-[10px] font-mono text-slate-300">#FFFFFF</span>
                      </div>
                    </div>

                    {/* Web Canvas Background Light Gray */}
                    <div className="flex items-center gap-2.5 p-2 rounded-lg bg-black/40 border border-white/10">
                      <div className="w-5 h-5 rounded-md bg-[#F7F9FB] border border-white/30 shrink-0 shadow-sm" />
                      <div className="min-w-0 flex-1 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-white truncate">Web Canvas Background</span>
                        <span className="text-[10px] font-mono text-slate-400">#F7F9FB</span>
                      </div>
                    </div>
                  </div>

                  {/* Semantic States */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Semantic States</div>
                    <div className="grid grid-cols-1 gap-1.5">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-3.5 h-3.5 rounded bg-[#10B981] shadow-sm" />
                          <span className="text-[10px] font-medium text-white">Success Green</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400">#10B981</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-3.5 h-3.5 rounded bg-[#F59E0B] shadow-sm" />
                          <span className="text-[10px] font-medium text-white">Warning Amber</span>
                        </div>
                        <span className="text-[10px] font-mono text-amber-400">#F59E0B</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-3.5 h-3.5 rounded bg-[#E92C2C] shadow-sm" />
                          <span className="text-[10px] font-medium text-white">Critical Red</span>
                        </div>
                        <span className="text-[10px] font-mono text-red-400">#E92C2C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Typography (Poppins) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="font-mono text-xs text-sky-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0085FF]" />
                  Column 2 · Typography (Poppins)
                </div>

                <div className="space-y-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {/* Font Specimen Header */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold text-white tracking-tight">Poppins</div>
                      <div className="text-[11px] text-slate-400 font-mono">Google Font · Sans-Serif</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0085FF]/10 text-[#0085FF] border border-[#0085FF]/20 font-semibold">
                      Enterprise Standard
                    </span>
                  </div>

                  {/* Core Sizing Rules Note */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-1">
                    <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                      Note that the system utilizes distinct sizing rules: compact, data-dense weights for desktop tables, and larger, highly legible action weights (16px+) for mobile field operators.
                    </p>
                  </div>

                  {/* Desktop Sizing Rule */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Desktop Scale</span>
                      <span className="text-[10px] font-mono text-sky-400">Compact Data Weights</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                      Calibrated for high-density administrative tables and multi-column telemetry cockpit scannability without vertical bloat.
                    </p>
                  </div>

                  {/* Mobile Sizing Rule */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Mobile Scale</span>
                      <span className="text-[10px] font-mono text-[#0085FF]">16px+ Action Weights</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                      Larger, highly legible action weights ensuring immediate glanceable legibility and confident touch response during high-vibration field tasks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 3: Components & Architecture */}
              <div className="lg:col-span-4 space-y-4">
                <div className="font-mono text-xs text-sky-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0085FF]" />
                  Column 3 · Components
                </div>

                <div className="space-y-3">
                  {/* Utilitarian Scale & Radii */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Utilitarian Scale</div>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      Utilitarian scale: standard 12px corner radii for desktop widgets and dashboard cards, contrasted with oversized touch targets and sticky bottom sheets for mobile.
                    </p>
                  </div>

                  {/* 12px Corner Radii vs Oversized Touch Targets */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Spatial Geometry</div>
                    <div className="grid grid-cols-2 gap-2 text-center text-[11px] font-mono">
                      <div className="p-2.5 bg-white/[0.04] border border-white/10 rounded-[12px] text-slate-200">
                        <span className="text-white font-bold block text-sm">12px</span>
                        <span className="text-[9px] text-slate-400 block pt-0.5">Desktop Radii</span>
                      </div>
                      <div className="p-2.5 bg-[#0085FF]/15 border border-[#0085FF]/30 rounded-[16px] text-[#0085FF]">
                        <span className="font-bold block text-sm">48px+</span>
                        <span className="text-[9px] text-slate-300 block pt-0.5">Touch Targets</span>
                      </div>
                    </div>
                  </div>

                  {/* Sticky Bottom Sheet Elevation */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-1.5">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Mobile Interaction</div>
                    <div className="text-xs font-medium text-white">Sticky Bottom Sheets</div>
                    <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                      High-priority linear actions dock as sticky bottom sheets with 16px corner radii to isolate critical compliance steps from background noise.
                    </p>
                  </div>

                  {/* Component Specimen Comparison */}
                  <div className="p-3 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-2">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Component Specimen: Desktop vs Mobile
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/10 text-[10px] font-mono">
                      <span className="px-2 py-0.5 rounded-[12px] bg-slate-800 border border-white/10 text-slate-300">
                        12px Card Widget
                      </span>
                      <span className="px-3 py-1.5 rounded-[12px] bg-[#0085FF] text-white font-bold shadow-md">
                        48px Mobile CTA
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ── SECTION 9: OUTCOMES & LEARNINGS ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>OUTCOMES &amp; LEARNINGS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.1]">
              Takeaways:{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">
                Designing for Accountability
              </em>
            </h2>

            <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#0E1422]/70 backdrop-blur-md shadow-2xl text-left space-y-5 relative overflow-hidden">
              <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-sky-500/[0.05] rounded-full blur-[80px]" />

              <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.7]">
                HireDesk proved that enterprise UI is not just about organizing data; it is about enforcing operational behavior. By creating an architecture where field operators cannot bypass safety checks, and admins have immediate visibility into depot performance, the design actively reduces liability. Balancing these two opposing user needs within a single, cohesive framework was the ultimate success of the platform.
              </p>
            </div>
          </div>
        </section>


        {/* ── NEXT CASE STUDY FOOTER TEASER ── */}
        <section className="pt-6 border-t border-white/[0.08]">
          <div
            onClick={() => onSelectProject ? onSelectProject(nextProject) : onBack()}
            className="group rounded-2xl border border-white/[0.08] bg-[#0E1422] p-6 sm:p-10 hover:border-sky-500/30 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl"
          >
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] text-sky-400 tracking-[0.2em] uppercase">NEXT CASE STUDY →</span>
              <h3 className="text-xl sm:text-2xl font-normal text-white tracking-[-0.03em] group-hover:text-sky-300 transition-colors">
                BYODH:{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  Construction Super App
                </em>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl leading-[1.5]">
                Consolidating real estate, wholesale materials, verified labor, and milestone escrow into a single unified mobile super app.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="px-4 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase bg-white/[0.06] border border-white/10 text-white group-hover:bg-sky-500 group-hover:text-slate-950 font-semibold transition-all">
                View Project
              </span>
              <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:bg-sky-500 group-hover:text-slate-950 group-hover:translate-x-1 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
};
