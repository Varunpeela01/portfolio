import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Activity,
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
  Calendar,
  AlertCircle,
  FileCheck,
  Stethoscope,
  Heart,
  Compass,
  Play,
  Apple,
  Flame,
  Users,
  Layers,
  ChevronRight,
  Timer,
  Target
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface PrevealthCaseStudyPageProps {
  onBack: () => void;
  onSelectProject?: (project: Project) => void;
}

export const PrevealthCaseStudyPage: React.FC<PrevealthCaseStudyPageProps> = ({ onBack, onSelectProject }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextProject = PROJECTS.find((p) => p.id === 'fleet-platform') || PROJECTS[0];

  return (
    <div className="min-h-screen bg-[#090D16] text-[#94A3B8] font-sans antialiased selection:bg-[#2563EB] selection:text-white">

      {/* ── Main Content Container ── */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-14 sm:pb-16 space-y-16 sm:space-y-20">

        {/* ── HERO SECTION: THE HOOK ── */}
        <section className="relative">
          {/* Subtle Ambient Studio Glow */}
          <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/[0.06] rounded-full blur-[150px] -z-10" />

          {/* Top Back Link */}
          <div className="mb-6">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#38BDF8] transition-colors group cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-[#38BDF8] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Works</span>
            </button>
          </div>

          {/* Side-by-Side Hero Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Project Name, Eyebrow & Metadata */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase">
                  CASE STUDY
                </span>
                <span className="h-3 w-[1px] bg-white/20" />
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#38BDF8]/10 border border-[#38BDF8]/25 text-[#38BDF8] font-medium">
                  Anti-Aging &amp; Wellness Ecosystem
                </span>
              </div>

              {/* Large Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                Prevealth:{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  A Dual-Sided Anti-Aging &amp; Wellness Ecosystem
                </em>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.6]">
                Bridging daily consumer lifestyle tracking with clinical professional oversight.
              </p>

              {/* Project Metadata Card */}
              <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-[#0E1422]/70 backdrop-blur-md space-y-3.5 shadow-xl">
                <div className="grid grid-cols-2 gap-3 border-b border-white/[0.06] pb-3">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">ROLE</div>
                    <div className="text-xs sm:text-sm font-medium text-white">Lead UI/UX Designer</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">TIMELINE</div>
                    <div className="text-xs sm:text-sm font-medium text-white">Aug 2024 – Feb 2025</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 border-b border-white/[0.06] pb-3">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">PLATFORM</div>
                    <div className="text-xs sm:text-sm font-medium text-white">B2B Web Portal + iOS/Android</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">KEY AUDIENCE</div>
                    <div className="text-xs sm:text-sm font-medium text-white">Patients, Doctors, Nutritionists</div>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">SCOPE</div>
                  <div className="text-xs sm:text-sm font-medium text-white leading-snug">
                    16h Fasting Engine, Modular Widget Architecture, High-Density Clinical Triage &amp; Design Token System
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Composition */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0F172A] p-4 sm:p-6 shadow-2xl relative overflow-hidden group">
                {/* Dark Studio Background with Soft Ambient Mesh */}
                <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1120] to-[#080D1A] border border-white/[0.06] flex items-center justify-center p-3 sm:p-5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/15 via-blue-600/10 to-transparent blur-[60px] pointer-events-none" />
                  
                  {/* Studio Hero Composition: Mockup Preview */}
                  <div className="relative w-full h-full flex items-center justify-center z-10 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                    <img
                      src="/projects/prevealth-device-cutout.png"
                      alt="Prevealth Ecosystem: Provider Dashboard & Consumer Mobile App on Dark #0F172A Studio"
                      className="w-full h-full object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)]"
                    />
                  </div>

                  <div className="absolute bottom-3 right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0E18]/90 border border-white/10 backdrop-blur-md text-[10px] font-mono text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    <span>Provider Web Portal + Consumer Mobile App</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── THE CONTEXT & CORE CHALLENGE ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          {/* Section Header with balanced alignment */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="font-mono text-xs text-[#38BDF8] tracking-[0.2em] uppercase mb-2.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>THE CONTEXT &amp; CORE CHALLENGE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                The Disconnect in{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  Preventative Health
                </em>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-400 font-light max-w-md leading-relaxed md:text-right">
              Why episodic clinical care fails preventative longevity — and why a continuous dual-sided loop is essential.
            </p>
          </div>

          {/* 2-Column Content Grid: Both columns starting at the same top baseline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
            {/* Left Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-5 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              <div className="space-y-4">
                <p>
                  True anti-aging and preventative care require continuous data, not just episodic clinical visits. The primary challenge was that clinical professionals (doctors, nutritionists) lacked visibility into a patient's daily habits, while patients lacked actionable, medically backed guidance in their day-to-day lives.
                </p>
                <p>
                  Prevealth required a dual-sided architecture: a sticky, engaging mobile experience to motivate daily user logging, and a robust B2B web portal to allow cross-functional care teams to interpret that data and intervene in real-time.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-400 flex items-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <span>Core Objective: Convert episodic clinical blind spots into proactive daily care loops.</span>
              </div>
            </div>

            {/* Right: Structural Disconnect vs Closed Loop Infographic */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl border border-rose-500/20 bg-rose-950/15 p-5 sm:p-6 space-y-2.5">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>The Status Quo: Episodic Disconnect</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Patients visit clinicians once every 3 to 6 months. Daily fasting breaches, metabolic dips, and nutrition lapses happen invisibly, resulting in reactive treatment rather than preventative longevity.
                </p>
              </div>

              <div className="rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 p-5 sm:p-6 space-y-2.5">
                <div className="flex items-center gap-2 text-[#38BDF8] font-mono text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>The Prevealth Model: Synchronous Closed Loop</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Continuous mobile inputs (16h fasting timers, meals, biometric logs) pipe directly to the Provider Web Dashboard. Doctors adjust regimens proactively before negative biometric shifts become irreversible.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ── MAPPING THE COMPLEXITY (UX ARCHITECTURE) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="font-mono text-xs text-[#38BDF8] tracking-[0.2em] uppercase mb-2.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>MAPPING THE COMPLEXITY (UX ARCHITECTURE)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                Structuring the{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  Ecosystem
                </em>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-400 font-light max-w-md leading-relaxed md:text-right">
              Defining distinct cognitive models: reduced consumer friction vs. clinical data density.
            </p>
          </div>

          <div className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
            <p>
              Before laying out a single grid, we had to define the distinct cognitive models of our two user bases. The consumer needs motivation, reduced cognitive load, and frictionless habit tracking. The clinical professional needs high data density, rapid context switching, and role-based access controls.
            </p>
          </div>

          {/* FigJam Flowchart - Clean Full-Width Integration */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group">
            <img
              src="/projects/prevealth-figjam-ecosystem.jpg"
              alt="Prevealth Closed-Loop Data Architecture Flowchart"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </section>


        {/* ── THE "MESSY MIDDLE" (IDEATION & WIREFRAMES) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="font-mono text-xs text-[#38BDF8] tracking-[0.2em] uppercase mb-2.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>THE "MESSY MIDDLE" (IDEATION &amp; WIREFRAMES)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                Solving for{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  Data Density
                </em>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-400 font-light max-w-md leading-relaxed md:text-right">
              Designing auto-layout tables for multi-tenant Admins, Coaches, Nutritionists, and Doctors.
            </p>
          </div>

          <div className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
            <p>
              The most significant UX friction point was designing the multi-tenant web dashboard. It had to accommodate distinct workflows for Admins, Coaches, Nutritionists, and Doctors within a single unified platform. Early wireframing focused heavily on auto-layout table structures, ensuring that sorting patient records, updating training regimens, and adding recipes could be done without opening excessive modal windows.
            </p>
          </div>

          {/* Split-Screen Graphic: Wireframe vs Polished UI */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0E1422] p-5 sm:p-7 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono">
              <span className="text-slate-400 uppercase tracking-wider">Evolution: Mid-Fi Auto-Layout Tables → Production Multi-Tenant UI</span>
              <span className="text-[#38BDF8]">Zero-Modal Workflow</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Left: Mid-Fidelity Wireframe Screenshot */}
              <div className="rounded-xl border border-dashed border-white/20 bg-[#0B0F19] p-3 sm:p-4 space-y-3 flex flex-col justify-between group h-full">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2.5 h-6">
                    <span className="bg-white/10 px-2 py-0.5 rounded text-white">Wireframe: Auto-Layout Table</span>
                    <span>Early Architecture</span>
                  </div>

                  <div className="rounded-lg overflow-hidden border border-white/10 bg-[#FFFFFF] p-1 shadow-md aspect-[1024/665] flex items-center justify-center">
                    <img
                      src="/projects/prevealth-wireframe-table.jpg"
                      alt="Prevealth Mid-Fidelity Wireframe: Auto-Layout Admin & Doctor Data Table"
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 font-light leading-relaxed min-h-[34px]">
                  Iterated auto-layout structures to eliminate modal windows, keeping patient records, fasting streaks, and clinical actions accessible inline.
                </p>
              </div>

              {/* Right: High-Fidelity Production UI Screenshot */}
              <div className="rounded-xl border border-[#38BDF8]/30 bg-[#121826] p-3 sm:p-4 space-y-3 flex flex-col justify-between group shadow-lg h-full">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono mb-2.5 h-6">
                    <span className="bg-[#38BDF8]/20 text-[#38BDF8] px-2 py-0.5 rounded font-medium">Final High-Fidelity UI</span>
                    <span className="text-emerald-400 flex items-center gap-1">● Production Spec</span>
                  </div>

                  <div className="rounded-lg overflow-hidden border border-white/10 bg-[#FFFFFF] p-1 shadow-md aspect-[1024/665] flex items-center justify-center">
                    <img
                      src="/projects/prevealth-hifi-table.jpg"
                      alt="Prevealth High-Fidelity Production UI: Doctors Multi-Tenant Data Table"
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                </div>

                <p className="text-[11px] text-slate-300 font-light leading-relaxed min-h-[34px]">
                  High-density production interface featuring role-based access, appointment scheduling, and inline status badges with zero modal sprawl.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ── THE CARE TEAM PORTAL: GRANULAR CONTROL ── */}
        <section className="pt-12 sm:pt-16 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
            {/* Left: macOS Browser Frame with Floating Modal Overlay */}
            <div className="lg:col-span-7 relative pb-8 pr-4 sm:pb-10 sm:pr-8">
              {/* macOS Browser Container */}
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-white shadow-2xl shadow-black/60 relative">
                {/* macOS Header Chrome */}
                <div className="bg-[#F1F3F5] px-4 py-3 border-b border-[#E2E5E9] flex items-center justify-between">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 inline-block shadow-xs" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 inline-block shadow-xs" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 inline-block shadow-xs" />
                  </div>

                  <div className="bg-white px-3 sm:px-4 py-1 rounded-md text-[11px] font-mono text-slate-500 border border-slate-200/90 shadow-2xs max-w-xs sm:max-w-sm w-full mx-2 sm:mx-4 text-center truncate">
                    prevealth.app/provider/patient/jack-sparrow/habits
                  </div>

                  <div className="w-12 hidden sm:block shrink-0" />
                </div>

                {/* Habits Dashboard Screenshot */}
                <div className="relative bg-white">
                  <img
                    src="/projects/prevealth-habits-dashboard.jpg"
                    alt="Prevealth Habits Dashboard - Jack Sparrow Patient View"
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </div>

              {/* Floating Add Habit Modal Overlay */}
              <div className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-2 md:-right-4 w-[60%] sm:w-[54%] z-20 group">
                <div className="rounded-xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-slate-200/90 bg-white transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7)]">
                  <img
                    src="/projects/prevealth-add-habit-modal.png"
                    alt="Prevealth Add Habit Creation Modal"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
            </div>

            {/* Right: Section Copywriting & Feature Callouts */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-7">
              <div className="space-y-3">
                <div className="font-mono text-xs text-[#38BDF8] tracking-[0.2em] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  <span>THE CARE TEAM PORTAL</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                  Granular Control:{' '}
                  <em className="font-serif italic font-normal text-[#38BDF8]">
                    Patient Habits
                  </em>
                </h2>
              </div>

              <p className="text-sm sm:text-[15px] text-slate-300 font-light leading-relaxed italic border-l-2 border-[#38BDF8]/40 pl-4 py-1">
                “The web portal gives coaches and doctors deep visibility into a patient's daily adherence. By centralizing habit tracking and intervention tools, the care team can monitor progress and seamlessly adjust protocols without losing sight of the patient's holistic profile.”
              </p>

              {/* 3 Feature Items */}
              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5 shadow-xs">
                    <Activity className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-white">Real-Time Habit Tracking</h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mt-1">
                      Monitor daily streaks for critical lifestyle metrics like hydration and sleep hours to ensure patients stay on target.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 shadow-xs">
                    <Target className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-white">Custom Goal Assignment</h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mt-1">
                      Instantly deploy new routines using intuitive modals to set specific units, target dates, and daily or weekly frequencies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-sky-400 shrink-0 mt-0.5 shadow-xs">
                    <Layers className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium text-white">Seamless Context Switching</h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mt-1">
                      A unified tabular interface allows professionals to toggle effortlessly between nutrition, training, and habits without reloading the page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── MICRO-VISIBILITY: THE B2C MOBILE APP ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="font-mono text-xs text-[#38BDF8] tracking-[0.2em] uppercase mb-2.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>MICRO-VISIBILITY: THE B2C MOBILE APP</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                Consumerizing{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  Clinical Health
                </em>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-400 font-light max-w-md leading-relaxed md:text-right">
              Modular widget architecture for frictionless 16h fasting and habit logging.
            </p>
          </div>

          <div className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
            <p>
              For the mobile app, the design language pivoted entirely to focus on consumer engagement. We utilized a modular, widget-based home screen architecture. Users can seamlessly start a 16-hour fasting timer, log their daily habits, track their weight metrics, and access premium video content like "Anti-Age Masterclass Programs" and full-body workouts without navigating deep into sub-menus.
            </p>
          </div>

          {/* 4-Column Mobile Showcase with Real High-Res Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            
            {/* Screen 1: Home Dashboard */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0C101A] p-4 sm:p-5 space-y-4 shadow-xl hover:border-sky-500/40 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                  <span className="text-xs font-semibold text-white">Home Dashboard</span>
                  <span className="text-[10px] font-mono text-[#38BDF8] uppercase">Widgets</span>
                </div>

                {/* Mobile Device Frame */}
                <div className="relative aspect-[9/19] rounded-[24px] overflow-hidden border border-white/10 bg-[#070A12] shadow-2xl p-1 group/img">
                  <img
                    src="/projects/prevealth-mobile-home.jpg"
                    alt="Prevealth Consumer Mobile App Home Dashboard"
                    className="w-full h-full object-cover object-top rounded-[20px] group-hover/img:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="text-xs text-slate-300 font-light leading-relaxed pt-2">
                Modular widget architecture allowing patients to access reports, nutrition, and expert consultations in one tap.
              </div>
            </div>

            {/* Screen 2: Habit & Metric Tracker */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0C101A] p-4 sm:p-5 space-y-4 shadow-xl hover:border-sky-500/40 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                  <span className="text-xs font-semibold text-white">Habit &amp; Metric Tracker</span>
                  <span className="text-[10px] font-mono text-[#38BDF8] uppercase">Check-ins</span>
                </div>

                {/* Mobile Device Frame */}
                <div className="relative aspect-[9/19] rounded-[24px] overflow-hidden border border-white/10 bg-[#070A12] shadow-2xl p-1 group/img">
                  <img
                    src="/projects/prevealth-mobile-track.png"
                    alt="Prevealth Health & Habits Tracker Screen"
                    className="w-full h-full object-cover object-top rounded-[20px] group-hover/img:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="text-xs text-slate-300 font-light leading-relaxed pt-2">
                Daily check-in forms, habit streak completion meters, and biometric BMI tracking mapped to clinical targets.
              </div>
            </div>

            {/* Screen 3: Nutrition & Recipe View */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0C101A] p-4 sm:p-5 space-y-4 shadow-xl hover:border-sky-500/40 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                  <span className="text-xs font-semibold text-white">Nutrition &amp; Recipes</span>
                  <span className="text-[10px] font-mono text-[#38BDF8] uppercase">Diet</span>
                </div>

                {/* Mobile Device Frame */}
                <div className="relative aspect-[9/19] rounded-[24px] overflow-hidden border border-white/10 bg-[#070A12] shadow-2xl p-1 group/img">
                  <img
                    src="/projects/prevealth-mobile-nutrition.png"
                    alt="Prevealth Curated Anti-Aging Nutrition & Recipes"
                    className="w-full h-full object-cover object-top rounded-[20px] group-hover/img:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="text-xs text-slate-300 font-light leading-relaxed pt-2">
                Highlights biological benefits for specific ingredients ("Probiotics for gut health"), connecting food to longevity.
              </div>
            </div>

            {/* Screen 4: Workout & Video Player */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0C101A] p-4 sm:p-5 space-y-4 shadow-xl hover:border-sky-500/40 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                  <span className="text-xs font-semibold text-white">Workout &amp; Video</span>
                  <span className="text-[10px] font-mono text-[#38BDF8] uppercase">Training</span>
                </div>

                {/* Mobile Device Frame */}
                <div className="relative aspect-[9/19] rounded-[24px] overflow-hidden border border-white/10 bg-[#070A12] shadow-2xl p-1 group/img">
                  <img
                    src="/projects/prevealth-mobile-workout.png"
                    alt="Prevealth Full Body Workout & Masterclass Video Player"
                    className="w-full h-full object-cover object-top rounded-[20px] group-hover/img:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="text-xs text-slate-300 font-light leading-relaxed pt-2">
                Guided video training programs with exercise breakdowns, set &amp; rep counters, and interval rest pacing.
              </div>
            </div>

          </div>
        </section>


        {/* ── SCALABLE VISUAL SYSTEM (UI EXECUTION) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="font-mono text-xs text-[#38BDF8] tracking-[0.2em] uppercase mb-2.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>SCALABLE VISUAL SYSTEM (UI EXECUTION)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                Clinical Trust Meets{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  Approachability
                </em>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-400 font-light max-w-md leading-relaxed md:text-right">
              Balancing medical authority with consumer lifestyle warmth.
            </p>
          </div>

          <div className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
            <p>
              The Prevealth design system was architected around a disciplined monochrome foundation of Onyx Black, Clean White, and functional grayscale tones, paired with geometric Poppins typography for maximum clarity.
            </p>
          </div>

          {/* 3-Column Design Token Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Column 1: Color Palette */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0C101A] p-6 space-y-5 shadow-xl">
              <div className="border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">COLOR PALETTE</span>
                <h4 className="text-base font-medium text-white mt-1">Onyx Black &amp; Grayscale</h4>
              </div>

              <p className="text-xs text-slate-400 font-light leading-relaxed">
                We anchored the interface in a disciplined palette of Onyx Black (#000000), Clean White (#FFFFFF), and balanced grayscale neutrals (#64748B, #F1F5F9) to convey clinical authority, minimal distraction, and razor-sharp contrast.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#000000] border border-white/20 shrink-0 shadow-sm" />
                  <div>
                    <div className="text-xs font-medium text-white">#000000 Onyx Black</div>
                    <div className="text-[10px] font-mono text-slate-400">Primary Brand, Key CTAs &amp; Active States</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] border border-slate-200 shrink-0 shadow-sm" />
                  <div>
                    <div className="text-xs font-medium text-white">#FFFFFF Clean White</div>
                    <div className="text-[10px] font-mono text-slate-400">Clinical Canvas, Card Surfaces &amp; Contrast</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#64748B] shrink-0 shadow-sm" />
                  <div>
                    <div className="text-xs font-medium text-white">#64748B Slate Grey</div>
                    <div className="text-[10px] font-mono text-slate-400">Secondary Typography, Icons &amp; Metadata</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] border border-slate-300 shrink-0" />
                  <div>
                    <div className="text-xs font-medium text-white">#F1F5F9 Light Grey</div>
                    <div className="text-[10px] font-mono text-slate-400">Input Backplates, Table Dividers &amp; Strokes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Typography */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0C101A] p-6 space-y-5 shadow-xl">
              <div className="border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">TYPOGRAPHY SCALE</span>
                <h4 className="text-base font-medium text-white mt-1">Poppins Across Scales</h4>
              </div>

              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Poppins is the foundational geometric typeface across web and mobile. Its balanced curves and open counters deliver friendly consumer warmth on mobile while preserving razor-sharp scanning in clinical tables.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Display Headings</span>
                  <div className="text-xl font-bold text-white tracking-tight mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Prevealth Health
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Poppins · Bold / SemiBold (700 / 600)</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Tabular Numerics (Biomarkers)</span>
                  <div className="text-lg font-mono text-emerald-400 font-medium tracking-tight mt-1">
                    16h 00m · 94.2%
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Poppins · Medium (500) + Monospace</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Clinical &amp; Habit Body Text</span>
                  <p className="text-xs text-slate-300 font-normal mt-1 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Designed for high readability during prolonged provider table inspection and daily habit logs.
                  </p>
                  <span className="text-[10px] font-mono text-slate-400 mt-1 block">Poppins · Regular (400)</span>
                </div>
              </div>
            </div>

            {/* Column 3: Interactive Components */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0C101A] p-6 space-y-5 shadow-xl">
              <div className="border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">COMPONENT TOKENS</span>
                <h4 className="text-base font-medium text-white mt-1">Tactile &amp; Micro-Interactions</h4>
              </div>

              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Modular design token architecture with auto-layout primitives allowing seamless extension across new healthcare verticals.
              </p>

              <div className="space-y-3 pt-2">
                {/* Primary Button */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400">Primary Key Action (Onyx Black)</span>
                  <button
                    className="w-full py-2.5 px-4 rounded-xl bg-black border border-white/20 text-white text-xs font-medium shadow-md flex items-center justify-center gap-2 hover:bg-neutral-900 transition-colors cursor-pointer"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>Create Habit / Add Doctor+</span>
                  </button>
                </div>

                {/* Secondary Pill */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400">Secondary Status Pill</span>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <span className="text-slate-300">Drink Water · 5 Liters/Day</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      5 Days Streak
                    </span>
                  </div>
                </div>

                {/* Table Row State */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400">Web Table Row / Active State</span>
                  <div className="p-2 rounded-xl bg-black border border-white/15 text-xs flex items-center justify-between" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-white font-medium">Dr. Sarah Jenkins</span>
                    </div>
                    <span className="text-[10px] font-mono text-white/90 bg-white/10 px-2 py-0.5 rounded border border-white/15">
                      Appointment Fixed
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── FOOTER NAVIGATION ── */}
        <section className="pt-12 sm:pt-16 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono tracking-wider uppercase text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#38BDF8]" />
            <span>Back to All Works</span>
          </button>

          {onSelectProject && nextProject && (
            <button
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono tracking-wider uppercase text-slate-950 font-medium bg-[#38BDF8] hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20 cursor-pointer"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </section>

      </main>
    </div>
  );
};
