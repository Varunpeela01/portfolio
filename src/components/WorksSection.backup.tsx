import React, { useState } from 'react';
import { ArrowUpRight, Play, Sparkles, Layers, Sliders, CheckCircle2, Code2, Cpu, Zap, Palette, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { HireDeskShowcase } from './showcases/HireDeskShowcase';
import { ByodhShowcase } from './showcases/ByodhShowcase';
import { RefillShowcase } from './showcases/RefillShowcase';
import { DeskPetShowcase } from './showcases/DeskPetShowcase';

interface WorksSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'product-design' | 'design-systems'>('product-design');
  const [viewMode, setViewMode] = useState<'cards' | 'sandbox'>('cards');
  const [activeInteractiveTab, setActiveInteractiveTab] = useState<'hiredesk' | 'byodh' | 'refill' | 'deskpet'>('hiredesk');

  const hiredeskProject = PROJECTS.find((p) => p.id === 'hiredesk') || PROJECTS[1];
  const byodhProject = PROJECTS.find((p) => p.id === 'byodh') || PROJECTS[0];
  const refillProject = PROJECTS.find((p) => p.id === 'refill-health') || PROJECTS[2];
  const deskpetProject = PROJECTS.find((p) => p.id === 'desk-pet') || PROJECTS[3];
  const saralDsProject = PROJECTS.find((p) => p.id === 'saral-ds') || PROJECTS[0];

  const handleCardClick = (project: Project) => {
    onSelectProject(project);
  };

  return (
    <section
      id="work"
      className="scroll-mt-20 py-32 sm:py-44 border-t border-b border-white/[0.07] bg-[#090D16] relative transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous macro whitespace */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38BDF8]" />
              <span className="tracking-[0.24em] uppercase text-[11px]">01 / Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium text-white tracking-tight">
              Crafted Products &amp; <span className="text-gradient-blue font-semibold">Living Systems</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mt-3 leading-[1.75]">
              Designed for full-scale SaaS platforms, zero-to-one ventures, and systematic multi-brand token engines.
            </p>
          </div>

          {/* Segmented Controls: Product Design vs Design Systems Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {/* Primary Category Switcher */}
            <div className="p-1.5 bg-[#0B0F19]/90 border border-white/[0.08] backdrop-blur-xl rounded-2xl flex items-center gap-1.5 shadow-xl">
              <button
                onClick={() => {
                  setActiveTab('product-design');
                  setViewMode('cards');
                }}
                className={`flex items-center gap-2 px-4 py-2 text-xs rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === 'product-design' && viewMode === 'cards'
                    ? 'bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white font-semibold shadow-[0_0_20px_rgba(56,189,248,0.4)] border border-cyan-400/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                <Layers className="h-3.5 w-3.5 text-cyan-300" />
                <span>Product Design</span>
                {activeTab === 'product-design' && viewMode === 'cards' && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_#fff]" />
                )}
              </button>

              <button
                onClick={() => {
                  setActiveTab('design-systems');
                  setViewMode('cards');
                }}
                className={`flex items-center gap-2 px-4 py-2 text-xs rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === 'design-systems' && viewMode === 'cards'
                    ? 'bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white font-semibold shadow-[0_0_20px_rgba(56,189,248,0.4)] border border-cyan-400/40'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                <Sliders className="h-3.5 w-3.5 text-cyan-300" />
                <span>Design Systems</span>
                {activeTab === 'design-systems' && viewMode === 'cards' && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_#fff]" />
                )}
              </button>
            </div>

            {/* Sandbox Cockpit Sub-Toggle */}
            <button
              onClick={() => setViewMode(viewMode === 'sandbox' ? 'cards' : 'sandbox')}
              className={`btn-tactile-ghost flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono rounded-2xl cursor-pointer ${
                viewMode === 'sandbox'
                  ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50 shadow-[0_0_20px_rgba(56,189,248,0.35)]'
                  : ''
              }`}
            >
              <Play className="h-3 w-3 fill-current text-cyan-400" />
              <span>{viewMode === 'sandbox' ? 'Exit Sandbox' : 'Interactive Sandbox'}</span>
            </button>
          </div>
        </div>

        {/* ================= VIEW 1: PRODUCT DESIGN TAB ================= */}
        {viewMode === 'cards' && activeTab === 'product-design' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch transition-all duration-300 ease-out animate-fadeIn">
            
            {/* CARD 01: HIREDESK */}
            <div
              onClick={() => handleCardClick(hiredeskProject)}
              className="card-premium p-8 sm:p-10 rounded-3xl flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-semibold tracking-[0.22em] uppercase text-[11px]">01 — Enterprise SaaS</span>
                  <span className="text-slate-500">2023 — 2024</span>
                </div>

                {/* Key Result Badges / UI Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  {hiredeskProject.resultPills?.map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.035] border border-white/[0.08] text-cyan-300 font-mono text-[10.5px] font-medium tracking-wide shadow-sm hover:border-cyan-400/40 transition-colors"
                    >
                      <Sparkles className="h-2.5 w-2.5 text-cyan-400" />
                      <span>{pill}</span>
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>HireDesk Heavy Fleet</span>
                    <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-300/80 mt-2">
                    "4 clicks instead of 40."
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.75] pt-1">
                  Replaced a cluttered 18-column legacy ERP table with an intuitive spatial dispatch cockpit, predictive maintenance tracking, and one-click fleet allocation.
                </p>

                {/* Metrics chips */}
                <div className="flex flex-wrap items-center gap-2 pt-3 mt-auto">
                  <span className="px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-[11px]">
                    50% fewer steps
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono text-[11px]">
                    Live Telemetry
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono text-[11px]">
                    Fleet Dispatch
                  </span>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 mt-8 border-t border-white/[0.07] flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  <span>View Case Study →</span>
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewMode('sandbox');
                    setActiveInteractiveTab('hiredesk');
                  }}
                  className="btn-tactile-ghost px-3.5 py-1.5 rounded-lg text-xs font-mono cursor-pointer"
                >
                  Test Cockpit →
                </button>
              </div>
            </div>

            {/* CARD 02: BYODH */}
            <div
              onClick={() => handleCardClick(byodhProject)}
              className="card-premium p-8 sm:p-10 rounded-3xl flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-semibold tracking-[0.22em] uppercase text-[11px]">02 — Mobile Zero-to-One</span>
                  <span className="text-slate-500">2024 — Present</span>
                </div>

                {/* Key Result Badges / UI Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  {byodhProject.resultPills?.map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.035] border border-white/[0.08] text-amber-300 font-mono text-[10.5px] font-medium tracking-wide shadow-sm hover:border-amber-400/40 transition-colors"
                    >
                      <Sparkles className="h-2.5 w-2.5 text-amber-400" />
                      <span>{pill}</span>
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>BYODH Construction OS</span>
                    <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-300/80 mt-2">
                    "From blueprints to concrete, live on glass."
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.75] pt-1">
                  An offline-first mobile operating system replacing lost paper blueprints with photo-verified milestone escrow across 24 active villa construction sites.
                </p>

                {/* Metrics chips */}
                <div className="flex flex-wrap items-center gap-2 pt-3 mt-auto">
                  <span className="px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-[11px]">
                    65% faster resolution
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono text-[11px]">
                    24 Active Sites
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono text-[11px]">
                    Offline SQLite
                  </span>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 mt-8 border-t border-white/[0.07] flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  <span>View Case Study →</span>
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewMode('sandbox');
                    setActiveInteractiveTab('byodh');
                  }}
                  className="btn-tactile-ghost px-3.5 py-1.5 rounded-lg text-xs font-mono cursor-pointer"
                >
                  Test Prototype →
                </button>
              </div>
            </div>

            {/* CARD 03: REFILL HEALTH */}
            <div
              onClick={() => handleCardClick(refillProject)}
              className="card-premium p-8 sm:p-10 rounded-3xl flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-semibold tracking-[0.22em] uppercase text-[11px]">03 — Healthcare &amp; UX</span>
                  <span className="text-slate-500">2023 — 2024</span>
                </div>

                {/* Key Result Badges / UI Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  {refillProject.resultPills?.map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.035] border border-white/[0.08] text-purple-300 font-mono text-[10.5px] font-medium tracking-wide shadow-sm hover:border-purple-400/40 transition-colors"
                    >
                      <Sparkles className="h-2.5 w-2.5 text-purple-400" />
                      <span>{pill}</span>
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>Refill Health</span>
                    <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-300/80 mt-2">
                    "Care is a continuous loop, not a funnel."
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.75] pt-1">
                  Replaced linear patient intake with continuous micro-checkins and clinician telemetry sparklines. 90-day patient retention surged by +41%.
                </p>

                {/* Metrics chips */}
                <div className="flex flex-wrap items-center gap-2 pt-3 mt-auto">
                  <span className="px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-[11px]">
                    +41% 90-day retention
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono text-[11px]">
                    Adaptive Pathways
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono text-[11px]">
                    Biometric Sparklines
                  </span>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 mt-8 border-t border-white/[0.07] flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  <span>View Case Study →</span>
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewMode('sandbox');
                    setActiveInteractiveTab('refill');
                  }}
                  className="btn-tactile-ghost px-3.5 py-1.5 rounded-lg text-xs font-mono cursor-pointer"
                >
                  Test Pathway →
                </button>
              </div>
            </div>

            {/* CARD 04: DESK PET */}
            <div
              onClick={() => handleCardClick(deskpetProject)}
              className="card-premium p-8 sm:p-10 rounded-3xl flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-semibold tracking-[0.22em] uppercase text-[11px]">04 — Hardware &amp; Micro-Software</span>
                  <span className="text-slate-500">Physical Craft</span>
                </div>

                {/* Key Result Badges / UI Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  {deskpetProject.resultPills?.map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.035] border border-white/[0.08] text-emerald-300 font-mono text-[10.5px] font-medium tracking-wide shadow-sm hover:border-emerald-400/40 transition-colors"
                    >
                      <Sparkles className="h-2.5 w-2.5 text-emerald-400" />
                      <span>{pill}</span>
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>Desk Pet IoT Companion</span>
                    <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-300/80 mt-2">
                    "Tactile desktop hardware with digital soul."
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.75] pt-1">
                  Parametric CAD designed in Fusion 360, fabricated on Bambu Lab P1S in matte PETG, powered by custom ESP32 firmware and an expressive micro-OLED display.
                </p>

                {/* Metrics chips */}
                <div className="flex flex-wrap items-center gap-2 pt-3 mt-auto">
                  <span className="px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-[11px]">
                    ESP32 &amp; Web Bluetooth
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono text-[11px]">
                    Bambu Lab P1S
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono text-[11px]">
                    Sold D2C
                  </span>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 mt-8 border-t border-white/[0.07] flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  <span>Inspect Hardware Specs →</span>
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewMode('sandbox');
                    setActiveInteractiveTab('deskpet');
                  }}
                  className="btn-tactile-ghost px-3.5 py-1.5 rounded-lg text-xs font-mono cursor-pointer"
                >
                  Run Simulator →
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ================= VIEW 2: DESIGN SYSTEMS TAB ================= */}
        {viewMode === 'cards' && activeTab === 'design-systems' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch transition-all duration-300 ease-out animate-fadeIn">
            
            {/* LEFT: FLAGSHIP DESIGN SYSTEM CASE STUDY CARD (7 cols) */}
            <div
              onClick={() => handleCardClick(saralDsProject)}
              className="lg:col-span-7 card-premium p-8 sm:p-10 rounded-3xl flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-semibold tracking-[0.22em] uppercase text-[11px]">05 — Multi-Brand Architecture</span>
                  <span className="text-slate-500">2023 — Present</span>
                </div>

                {/* Key Result Badges / UI Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  {saralDsProject.resultPills?.map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.035] border border-white/[0.08] text-cyan-300 font-mono text-[10.5px] font-medium tracking-wide shadow-sm hover:border-cyan-400/40 transition-colors"
                    >
                      <Sparkles className="h-2.5 w-2.5 text-cyan-400" />
                      <span>{pill}</span>
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>SaralTech Enterprise Design Token Engine</span>
                    <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-300/80 mt-2">
                    "Unified design tokens across 4 SaaS products and 25+ frontend developers."
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.75] pt-1">
                  Engineered a headless multi-brand design token system connecting Figma Tokens Studio directly to Tailwind config, React component libraries, and automated CI/CD pipelines. Cut engineering styling time by 40% with 100% WCAG AAA accessibility compliance.
                </p>

                {/* Architecture Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.07]">
                    <div className="text-2xl font-bold font-mono text-cyan-300">+40%</div>
                    <div className="text-xs text-slate-400 mt-1">Sprint Velocity</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.07]">
                    <div className="text-2xl font-bold font-mono text-sky-400">40+</div>
                    <div className="text-xs text-slate-400 mt-1">Tested Components</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.07]">
                    <div className="text-2xl font-bold font-mono text-emerald-400">100%</div>
                    <div className="text-xs text-slate-400 mt-1">WCAG AAA Certified</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-3 mt-auto">
                  <span className="px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-[11px]">
                    Tokens Studio Sync
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono text-[11px]">
                    GitHub Actions CI/CD
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono text-[11px]">
                    Tailwind v4 Theme
                  </span>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 mt-8 border-t border-white/[0.07] flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  <span>Explore Full Design System Case Study →</span>
                </span>
                <span className="text-xs font-mono text-cyan-300 bg-white/[0.04] px-3.5 py-1.5 rounded-lg border border-white/[0.08]">
                  Read Case Study
                </span>
              </div>
            </div>

            {/* RIGHT: INTERACTIVE TOKEN MATRIX & COMPONENT PLAYGROUND (5 cols) */}
            <div className="lg:col-span-5 card-premium p-8 rounded-3xl flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-semibold tracking-[0.22em] uppercase text-[11px]">Live Token Specimen</span>
                  <span className="text-emerald-400 flex items-center gap-1.5 font-mono text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>In-Sync</span>
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-white tracking-tight">
                    Living Component &amp; Token Architecture
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Interactive preview of strict 3-tier token hierarchy exported to code.
                  </p>
                </div>

                {/* 3-Tier Hierarchy Chips */}
                <div className="space-y-2.5 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-slate-400">1. Global Primitives</span>
                    <span className="text-cyan-300 font-semibold">color-blue-500 (#0284C7)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-slate-400">2. Semantic Token</span>
                    <span className="text-sky-300 font-semibold">interactive.accent.default</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <span className="text-slate-400">3. Component Token</span>
                    <span className="text-indigo-300 font-semibold">btn.primary.bg.default</span>
                  </div>
                </div>

                {/* Interactive Component States Preview */}
                <div className="pt-2 space-y-3">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-[0.2em]">
                    Interactive Component States
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button className="btn-tactile-accent px-4 py-1.5 rounded-lg text-xs font-semibold">
                      Primary
                    </button>
                    <button className="btn-tactile-ghost px-4 py-1.5 rounded-lg text-xs font-medium">
                      Secondary
                    </button>
                    <button className="px-3.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                      ✓ Verified
                    </button>
                    <button className="px-3.5 py-1.5 rounded-lg bg-red-950/40 border border-red-500/25 text-red-300 text-xs font-mono">
                      Alert State
                    </button>
                  </div>
                </div>

                {/* Token Export Pipeline Info */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs space-y-2">
                  <div className="font-mono text-cyan-300 font-semibold flex items-center gap-1.5">
                    <Code2 className="h-3.5 w-3.5" />
                    <span>Figma to Production Pipeline</span>
                  </div>
                  <p className="text-[11.5px] text-slate-400 leading-[1.6]">
                    Tokens are committed from Figma Tokens Studio into GitHub via automated webhooks, compiling TypeScript token definitions and Tailwind themes automatically.
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-white/[0.07]">
                <button
                  onClick={() => handleCardClick(saralDsProject)}
                  className="btn-tactile-ghost w-full py-3 rounded-xl text-white text-xs font-mono flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Open Design Systems Case Study</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ================= VIEW 3: INTERACTIVE COCKPIT SANDBOX ================= */}
        {viewMode === 'sandbox' && (
          <div className="space-y-6 transition-all duration-300 ease-out animate-fadeIn">
            <div className="card-premium p-6 rounded-2xl flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Active Live Prototype:</span>
                <span className="text-white font-bold uppercase">{activeInteractiveTab}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setActiveInteractiveTab('hiredesk')}
                  className={`px-3.5 py-1.5 text-xs rounded-lg font-mono transition-all cursor-pointer ${
                    activeInteractiveTab === 'hiredesk'
                      ? 'btn-tactile-accent'
                      : 'btn-tactile-ghost'
                  }`}
                >
                  01. HireDesk Cockpit
                </button>
                <button
                  onClick={() => setActiveInteractiveTab('byodh')}
                  className={`px-3.5 py-1.5 text-xs rounded-lg font-mono transition-all cursor-pointer ${
                    activeInteractiveTab === 'byodh'
                      ? 'btn-tactile-accent'
                      : 'btn-tactile-ghost'
                  }`}
                >
                  02. BYODH Mobile OS
                </button>
                <button
                  onClick={() => setActiveInteractiveTab('refill')}
                  className={`px-3.5 py-1.5 text-xs rounded-lg font-mono transition-all cursor-pointer ${
                    activeInteractiveTab === 'refill'
                      ? 'btn-tactile-accent'
                      : 'btn-tactile-ghost'
                  }`}
                >
                  03. Refill Health
                </button>
                <button
                  onClick={() => setActiveInteractiveTab('deskpet')}
                  className={`px-3.5 py-1.5 text-xs rounded-lg font-mono transition-all cursor-pointer ${
                    activeInteractiveTab === 'deskpet'
                      ? 'btn-tactile-accent'
                      : 'btn-tactile-ghost'
                  }`}
                >
                  04. Desk Pet Hardware
                </button>
              </div>
            </div>

            {/* Embedded Live Showcase Frame */}
            <div className="transition-all duration-300">
              {activeInteractiveTab === 'hiredesk' && <HireDeskShowcase />}
              {activeInteractiveTab === 'byodh' && <ByodhShowcase />}
              {activeInteractiveTab === 'refill' && <RefillShowcase />}
              {activeInteractiveTab === 'deskpet' && <DeskPetShowcase />}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
