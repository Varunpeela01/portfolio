import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Activity,
  Users,
  Calendar,
  Lock,
  MessageSquare,
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Sparkles,
  Sliders,
  Laptop,
  Layers,
  ChevronRight,
  Check,
  Zap,
  BarChart3,
  Search,
  ExternalLink,
  Smile,
  Compass,
  Wind,
  ZoomIn,
  X
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface RefillCaseStudyPageProps {
  onBack: () => void;
  onSelectProject?: (project: Project) => void;
}

export const RefillCaseStudyPage: React.FC<RefillCaseStudyPageProps> = ({ onBack, onSelectProject }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Toggle which B2B browser mockup is in front
  const [b2bFront, setB2bFront] = useState<'triage' | 'analytics'>('triage');

  const [zoomedImage, setZoomedImage] = useState<{ src: string; title: string; tag: string } | null>(null);

  const nextProject = PROJECTS.find((p) => p.id === 'fleet-platform') || PROJECTS[0];

  return (
    <div className="min-h-screen bg-[#090D16] text-[#94A3B8] font-sans antialiased selection:bg-[#0D9488] selection:text-white">

      {/* ── Main Content Container ── */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-10 sm:pb-12 space-y-14 sm:space-y-16">

        {/* ── SECTION 1: HERO & PROJECT OVERVIEW (Side-by-Side Split matching HireDesk) ── */}
        <section className="relative">
          {/* Subtle Ambient Backdrop Glow */}
          <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-500/[0.04] rounded-full blur-[140px] -z-10" />

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
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-sky-500/10 border border-sky-500/20 text-sky-300 font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-sky-400" />
                  HIPAA-Compliant Ecosystem
                </span>
              </div>

              {/* Large Headline with Elegant Serif Italic Accent */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                RefillHealth:{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  The 4-Pillar Care Ecosystem
                </em>
              </h1>

              {/* Subhead Context */}
              <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.6]">
                Architecting HIPAA-compliant care routing, clinical charting, and consumer wellbeing at enterprise scale.
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
                    <div className="text-xs sm:text-sm font-medium text-white">B2B2C Web Ecosystem</div>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">SCOPE</div>
                  <div className="text-xs sm:text-sm font-medium text-white leading-snug">
                    Operational Triage, Clinical Portals, B2B Analytics &amp; Patient Self-Care
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Mockup Image (Matching HireDesk Layout) */}
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
                  <div className="relative w-[94%] h-[94%] flex items-center justify-center z-10 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                    <img
                      src="/projects/refill-health-hero.png"
                      alt="RefillHealth Ecosystem: Web Admin Portals, Clinical Workspace, and Mobile App Mockup"
                      className="w-full h-full object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)]"
                    />
                  </div>
                  <div className="absolute bottom-3 right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0E18]/90 border border-white/10 backdrop-blur-md text-[10px] font-mono text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    <span>Web Ecosystem + Mobile Sync</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── 1.5. RESEARCH & DISCOVERY (THE FOUNDATION) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          {/* Symmetrical Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase mb-2.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>RESEARCH &amp; DISCOVERY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                Validating the{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  Ecosystem
                </em>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-400 font-light max-w-md leading-relaxed md:text-right">
              Mapping friction points across intake, triage, and clinical care loops.
            </p>
          </div>

          {/* 2-Column Split: Symmetrical Top Alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Left: Narrative & Methodology */}
            <div className="space-y-5 flex flex-col justify-between">
              <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.7]">
                &ldquo;Before laying out the UI, it was critical to map the friction points across the existing mental healthcare landscape. Stakeholder interviews and workflow mapping revealed a massive disconnect: existing enterprise tools either optimized for the clinician or the business, but left the patient navigating a fragmented experience.&rdquo;
              </p>

              <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-3">
                <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider font-semibold">Research Methodology</div>
                <div className="space-y-2.5 text-xs text-slate-300 font-light">
                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-1.5 shrink-0" />
                    <span><strong className="text-white font-medium">12 Stakeholder Interviews</strong> — Care Navigators, Therapists, HR Directors, and Patients across 3 enterprise clients</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-1.5 shrink-0" />
                    <span><strong className="text-white font-medium">Service Blueprint Mapping</strong> — End-to-end care loop from patient intake → triage → clinical session → follow-up</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-1.5 shrink-0" />
                    <span><strong className="text-white font-medium">Competitive Audit</strong> — Benchmarked 6 existing EHR/telehealth platforms for cognitive load &amp; task completion rates</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Research Artifact Visual (Service Blueprint & Journey Map) */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0A101D] p-5 sm:p-6 shadow-xl space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-sky-500/[0.06] rounded-full blur-[80px]" />

              {/* Artifact Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                  <span className="text-xs font-mono text-slate-300 font-medium">Service Blueprint &amp; Journey Map</span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300">
                  [Clinical_Divide_Friction]
                </span>
              </div>

              {/* Service Blueprint Visual with Explicit Friction Points */}
              <div className="space-y-3 relative z-10 pt-1">
                {/* Journey Phases Row */}
                <div className="grid grid-cols-4 gap-2 text-center">
                  {['Intake & Matching', 'Triage & Routing', 'Clinical Session', 'Follow-Up Loop'].map((phase, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className={`mx-auto w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                        i === 0 ? 'bg-teal-500/20 border border-teal-500/30 text-teal-300' :
                        i === 1 ? 'bg-rose-500/15 border border-rose-500/25 text-rose-300' :
                        i === 2 ? 'bg-cyan-500/15 border border-cyan-500/25 text-cyan-300' :
                        'bg-teal-500/15 border border-teal-500/25 text-teal-300'
                      }`}>
                        {i + 1}
                      </div>
                      <div className="text-[10px] font-medium text-slate-200 leading-tight">{phase}</div>
                    </div>
                  ))}
                </div>

                {/* Connecting Flow Line */}
                <div className="relative h-1 mx-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/40 via-rose-500/30 via-cyan-500/30 to-teal-500/40 rounded-full" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-400" />
                  <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-rose-400" />
                  <div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-400" />
                </div>

                {/* Swimlane Rows */}
                <div className="space-y-2">
                  {/* Patient Lane */}
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Smile className="w-3 h-3 text-teal-400" />
                        <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider font-semibold">Patient Lane</span>
                      </div>
                      <span className="text-[9px] font-mono text-rose-400">Clinical Divide Friction</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-[10px] text-slate-400">
                      <span className="px-1.5 py-1 rounded bg-white/[0.03] text-center">Fill Intake Form</span>
                      <span className="px-1.5 py-1 rounded bg-rose-500/15 text-rose-300 font-mono text-center border border-rose-500/30 font-semibold shadow-sm shadow-rose-950/50">
                        [Wait 48+ hrs]
                      </span>
                      <span className="px-1.5 py-1 rounded bg-white/[0.03] text-center">Attend Session</span>
                      <span className="px-1.5 py-1 rounded bg-rose-500/15 text-rose-300 font-mono text-center border border-rose-500/30 font-semibold shadow-sm shadow-rose-950/50">
                        [No Self-Care]
                      </span>
                    </div>
                  </div>

                  {/* Navigator Lane */}
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Sliders className="w-3 h-3 text-teal-400" />
                        <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider font-semibold">Navigator Lane</span>
                      </div>
                      <span className="text-[9px] font-mono text-rose-400">Operational Triage</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-[10px] text-slate-400">
                      <span className="px-1.5 py-1 rounded bg-white/[0.03] text-center">Review Flags</span>
                      <span className="px-1.5 py-1 rounded bg-rose-500/15 text-rose-300 font-mono text-center border border-rose-500/30 font-semibold shadow-sm shadow-rose-950/50">
                        [Manual Sort]
                      </span>
                      <span className="px-1.5 py-1 rounded bg-white/[0.03] text-center">Monitor SLA</span>
                      <span className="px-1.5 py-1 rounded bg-white/[0.03] text-center">Close Loop</span>
                    </div>
                  </div>

                  {/* Clinician Lane */}
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <FileText className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">Clinician Lane</span>
                      </div>
                      <span className="text-[9px] font-mono text-rose-400">Provider EHR</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-[10px] text-slate-400">
                      <span className="px-1.5 py-1 rounded bg-white/[0.03] text-center">—</span>
                      <span className="px-1.5 py-1 rounded bg-white/[0.03] text-center">Accept Case</span>
                      <span className="px-1.5 py-1 rounded bg-rose-500/15 text-rose-300 font-mono text-center border border-rose-500/30 font-semibold shadow-sm shadow-rose-950/50">
                        [Dense EHR]
                      </span>
                      <span className="px-1.5 py-1 rounded bg-white/[0.03] text-center">Chart SOAP</span>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-400 text-center pt-1 flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span>Friction Tags: <strong className="text-rose-300">[Wait 48+ hrs]</strong>, <strong className="text-rose-300">[No Self-Care]</strong>, <strong className="text-rose-300">[Manual Sort]</strong>, <strong className="text-rose-300">[Dense EHR]</strong></span>
                </div>
              </div>

            </div>
          </div>



          {/* 3-Column Key Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Insight 1: Operational Bottlenecks */}
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 space-y-3 relative overflow-hidden group hover:border-teal-500/30 transition-colors">
              <div className="pointer-events-none absolute -top-8 -right-8 w-24 h-24 bg-teal-500/[0.06] rounded-full blur-[40px] group-hover:bg-teal-500/[0.12] transition-all" />
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Operational Bottlenecks</h3>
                <div className="text-[10px] font-mono text-teal-400 uppercase tracking-wider mt-0.5">Care Navigator Pain Point</div>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Care Navigators were overwhelmed by manual triaging—sorting through intake flags in spreadsheets—leading to delayed patient routing and an average 48-hour first-response gap.
              </p>
              <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Avg. Triage Time</span>
                <span className="text-rose-400 font-semibold">48+ hrs (Before)</span>
              </div>
            </div>

            {/* Insight 2: Clinical Burnout */}
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 space-y-3 relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
              <div className="pointer-events-none absolute -top-8 -right-8 w-24 h-24 bg-cyan-500/[0.06] rounded-full blur-[40px] group-hover:bg-cyan-500/[0.12] transition-all" />
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Clinical Burnout</h3>
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mt-0.5">Therapist Pain Point</div>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Therapists experienced high cognitive load from dense, outdated EHRs (Electronic Health Records) that forced them to context-switch between 4+ tabs during a 50-minute session.
              </p>
              <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Context Switches / Session</span>
                <span className="text-rose-400 font-semibold">12+ (Before)</span>
              </div>
            </div>

            {/* Insight 3: Patient Drop-off */}
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 space-y-3 relative overflow-hidden group hover:border-teal-500/30 transition-colors">
              <div className="pointer-events-none absolute -top-8 -right-8 w-24 h-24 bg-teal-500/[0.06] rounded-full blur-[40px] group-hover:bg-teal-500/[0.12] transition-all" />
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Patient Drop-off</h3>
                <div className="text-[10px] font-mono text-teal-400 uppercase tracking-wider mt-0.5">Patient Pain Point</div>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Users lacked immediate, accessible self-care tools while waiting for their matched provider—resulting in a 34% drop-off rate between intake submission and first clinical session.
              </p>
              <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Intake → Session Drop-off</span>
                <span className="text-rose-400 font-semibold">34% (Before)</span>
              </div>
            </div>
          </div>
        </section>


        {/* ── 2. THE CORE CHALLENGE: CONTEXTUAL UI ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          <div className="space-y-4 max-w-4xl">
            <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span>THE CORE CHALLENGE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
              Designing for{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">
                Conflicting Cognitive Loads
              </em>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.7]">
              &ldquo;The core architectural challenge of RefillHealth was building a unified platform that served four distinct mental models. The UI had to scale from dense, macro-level analytics to warm, distraction-free consumer experiences without fragmenting the design system.&rdquo;
            </p>
          </div>

          {/* 4-Column Grid of Minimalist Archetype Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Care Navigator */}
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-teal-500/40 transition-all space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 group-hover:scale-105 transition-transform">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-teal-400 uppercase tracking-wider">Operational</div>
                  <h3 className="text-base font-semibold text-white">Care Navigator</h3>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Focuses on global risk triaging, SLA tracking, and instant algorithmic care matching across clinical networks.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Density: High</span>
                <span className="text-teal-300">Macro View</span>
              </div>
            </div>

            {/* Card 2: Therapist */}
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-cyan-500/40 transition-all space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Clinical</div>
                  <h3 className="text-base font-semibold text-white">Therapist</h3>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Focuses on Patient 360 views, distraction-free SOAP charting, and structured therapeutic intake templates.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Density: Balanced</span>
                <span className="text-cyan-300">Micro Focus</span>
              </div>
            </div>

            {/* Card 3: Organization */}
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-sky-500/40 transition-all space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-300 group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-sky-400 uppercase tracking-wider">Analytical</div>
                  <h3 className="text-base font-semibold text-white">Organization</h3>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Focuses on aggregate utilization, corporate wellness trends, stress reduction metrics, and population health ROI.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Density: High</span>
                <span className="text-sky-300">Executive ROI</span>
              </div>
            </div>

            {/* Card 4: Patient */}
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 hover:border-teal-500/40 transition-all space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 group-hover:scale-105 transition-transform">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-teal-400 uppercase tracking-wider">Consumer</div>
                  <h3 className="text-base font-semibold text-white">Patient</h3>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Focuses on guided onboarding, confidential provider matching, and interactive self-care tools like Box Breathing.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Density: Low / Relaxed</span>
                <span className="text-teal-300">Calm Canvas</span>
              </div>
            </div>
          </div>
        </section>


        {/* ── 3. OPERATIONS & ANALYTICS (THE B2B LAYER) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          {/* Side-by-Side: Content Left, Overlapping Mockups Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column: Content */}
            <div className="lg:col-span-5 space-y-5">
              <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>THE B2B LAYER</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                Macro-Visibility:{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  Operations &amp; Enterprise Analytics
                </em>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.7]">
                &ldquo;For the B2B stakeholders, the UI relies on extreme data density and strict hierarchical grids. The Care Navigator dashboards prioritize rapid triage and risk assessment matrices, while the Organization portals utilize complex charting components to track aggregate employee wellbeing and platform utilization.&rdquo;
              </p>

              {/* Key Highlights */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 shrink-0 mt-0.5">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Care Navigator Triage</div>
                    <div className="text-xs text-slate-400 font-light leading-relaxed">
                      Crisis ticket prioritization, risk flags, and one-click provider dispatch with real-time SLA tracking.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Organization Analytics</div>
                    <div className="text-xs text-slate-400 font-light leading-relaxed">
                      Anonymized population health insights, care journey funnels, and enterprise ROI reporting.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Overlapping Browser Mockups (Click to Swap) */}
            <div className="lg:col-span-7 relative" style={{ minHeight: '480px' }}>

              {/* Browser: Organization Analytics Dashboard */}
              <div
                onClick={() => setB2bFront('analytics')}
                className={`absolute rounded-xl border bg-white overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 ease-in-out ${
                  b2bFront === 'analytics'
                    ? 'top-16 sm:top-20 right-0 w-[88%] sm:w-[82%] z-20 border-white/[0.15] scale-100'
                    : 'top-0 left-0 w-[88%] sm:w-[82%] z-10 border-white/[0.10] scale-[0.97] opacity-90 hover:opacity-100'
                }`}
              >
                {/* Browser Chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f0f0f0] border-b border-gray-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-2 text-[10px] font-mono text-gray-400 truncate">refillhealth.app/org/dashboard</span>
                </div>
                {/* Mockup Image */}
                <div className="relative overflow-hidden" style={{ maxHeight: '380px' }}>
                  <img
                    src="/projects/refill-org-analytics-dashboard.jpg"
                    alt="RefillHealth Organization Analytics Dashboard"
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>

              {/* Browser: Care Navigator Triage View */}
              <div
                onClick={() => setB2bFront('triage')}
                className={`absolute rounded-xl border bg-white overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 ease-in-out ${
                  b2bFront === 'triage'
                    ? 'top-16 sm:top-20 right-0 w-[88%] sm:w-[82%] z-20 border-white/[0.15] scale-100'
                    : 'top-0 left-0 w-[88%] sm:w-[82%] z-10 border-white/[0.10] scale-[0.97] opacity-90 hover:opacity-100'
                }`}
              >
                {/* Browser Chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#f0f0f0] border-b border-gray-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-2 text-[10px] font-mono text-gray-400 truncate">refillhealth.app/navigator/triage</span>
                </div>
                {/* Mockup Image */}
                <div className="relative overflow-hidden" style={{ maxHeight: '380px' }}>
                  <img
                    src="/projects/refill-care-navigator-triage.jpg"
                    alt="RefillHealth Care Navigator Triage Dashboard"
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>

              {/* Click Hint */}
              <div className="absolute bottom-0 right-0 z-30 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                <span className="w-1 h-1 rounded-full bg-[#38BDF8] animate-pulse" />
                Click to swap views
              </div>

            </div>
          </div>
        </section>


        {/* ── 4. CLINICAL FOCUS (THE PROVIDER LAYER) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          {/* Side-by-Side: Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column: Image Composition */}
            <div className="lg:col-span-7 relative pb-8">
              {/* Main Browser Window: Patient 360 Web View */}
              <div className="rounded-2xl border border-white/[0.08] bg-white overflow-hidden shadow-2xl">
                {/* Browser Chrome */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#f0f0f0] border-b border-gray-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-3 text-[10px] font-mono text-gray-400 truncate">refillhealth.app/therapist/patient-360/sarah-johnson</span>
                </div>
                {/* Main Mockup Image */}
                <div className="relative overflow-hidden">
                  <img
                    src="/projects/refill-therapist-patient360.jpg"
                    alt="RefillHealth Therapist Portal — Patient 360 view for Sarah Johnson"
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating Overlay: Suicidality Assessment (Bottom-Right Accent) */}
              <div className="absolute -bottom-5 sm:-bottom-7 -right-2 sm:right-4 z-20 w-[190px] sm:w-[230px] rounded-2xl border border-white/[0.15] bg-white overflow-hidden shadow-2xl shadow-black/50 transition-transform duration-500 hover:scale-105">
                <img
                  src="/projects/refill-suicidality-assessment.jpg"
                  alt="Suicidality Assessment card — High risk"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  <span>THE PROVIDER LAYER</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                  Micro-Visibility:{' '}
                  <em className="font-serif italic font-normal text-[#38BDF8]">
                    The Clinical Workspace
                  </em>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.7]">
                  &ldquo;Shifting away from global analytics, the Therapist portal is designed for cognitive isolation. The Patient 360 view strips away unnecessary navigation to focus entirely on session history, secure messaging, and structured clinical intake templates.&rdquo;
                </p>
              </div>

              {/* Feature Breakdown (Stacked) */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Distraction-Free Charting</h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed mt-0.5">
                      Strips away all non-essential chrome during therapy. Clinicians compose SOAP notes and assign ICD-10 codes with zero context switches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Secure Messaging Loops</h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed mt-0.5">
                      HIPAA-compliant async chat with automatic emergency keyword detection, routing critical alerts to on-duty triage navigators.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Calendar Orchestration</h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed mt-0.5">
                      Multi-timezone scheduling with built-in 10-minute decompression buffers between high-intensity trauma sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── 5. CONSUMER WELLBEING (THE PATIENT LAYER) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          {/* Side-by-Side: Content Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column: Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  <span>THE PATIENT LAYER</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                  Consumerizing Care:{' '}
                  <em className="font-serif italic font-normal text-[#38BDF8]">
                    The Patient Experience
                  </em>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.7]">
                  &ldquo;The patient-facing interfaces completely pivot the design language. Utilizing calming imagery, spacious layouts, and interactive modules, the platform guides users through complex intake questionnaires and offers immediate, interactive self-care tools like Box Breathing and guided mindfulness.&rdquo;
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 shrink-0 mt-0.5">
                    <Smile className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Somatic Box Breathing</h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed mt-0.5">
                      A visual 4-4-4-4 breathing cycle designed for rapid autonomic regulation during acute situational distress and panic episodes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Interactive Self-Care Suite</h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed mt-0.5">
                      Immediate, self-paced therapeutic toolkit featuring binaural sleep audio, micro-learnings, and CBT-based cognitive reframing prompts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Calm &amp; Stigma-Free Canvas</h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed mt-0.5">
                      Pivots away from clinical EHR grids into an empathetic, human-centered UI that reduces intake drop-off and encourages daily engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Patient Self-Care Web View (Reduced width & standardized 380px height) */}
            <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
              <div className="w-full max-w-[540px] rounded-2xl border border-white/[0.08] bg-white overflow-hidden shadow-2xl">
                {/* Browser Chrome */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#f0f0f0] border-b border-gray-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-3 text-[10px] font-mono text-gray-400 truncate">refillhealth.app/patient/selfcare/box-breathing</span>
                </div>
                {/* Mockup Image - Standardized height matching other sections */}
                <div className="relative overflow-hidden" style={{ maxHeight: '380px' }}>
                  <img
                    src="/projects/refill-patient-selfcare-boxbreathing.jpg"
                    alt="RefillHealth Patient Experience — Interactive Box Breathing and Selfcare Tools Portal"
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── 6. SYSTEM SCALABILITY (DESIGN TOKENS) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          <div className="space-y-4 max-w-4xl">
            <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span>SYSTEM SCALABILITY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
              A Unified{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">
                Foundation
              </em>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.7]">
              &ldquo;To support these four pillars, the design system leverages a highly adaptable token architecture. Deep Healthcare Teal anchors the brand authority, while semantic spacing and typography scale dynamically—condensing for B2B clinical data tables and expanding for B2C interactive self-care exercises.&rdquo;
            </p>
          </div>

          {/* 3-Column Grid Mapping the Design Tokens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Column 1: Color Tokens & Triage Matrix */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 space-y-4 shadow-xl">
              <div className="space-y-1">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">Design System Colors</span>
                <h3 className="text-base font-semibold text-white">Semantic &amp; Clinical Palette</h3>
                <p className="text-xs text-slate-400 font-light">
                  Extracted directly from the RefillHealth web platform: Brand Authority, Triage Urgency, and Multi-Surface Neutrals.
                </p>
              </div>

              <div className="space-y-3.5">
                {/* 1. Brand & Accents */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Brand &amp; Primary Accents</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded bg-[#00665E] border border-white/20 shrink-0" />
                        <span className="text-[11px] text-white font-medium">Teal Primary</span>
                      </div>
                      <span className="text-[9px] font-mono text-teal-300">#00665E</span>
                    </div>

                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded bg-[#14B8A6] border border-white/20 shrink-0" />
                        <span className="text-[11px] text-white font-medium">Mint Accent</span>
                      </div>
                      <span className="text-[9px] font-mono text-teal-300">#14B8A6</span>
                    </div>

                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded bg-[#E6F4F1] border border-white/20 shrink-0" />
                        <span className="text-[11px] text-white font-medium">Sage Tint</span>
                      </div>
                      <span className="text-[9px] font-mono text-slate-400">#E6F4F1</span>
                    </div>

                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded bg-[#E06D38] border border-white/20 shrink-0" />
                        <span className="text-[11px] text-white font-medium">Refill Orange</span>
                      </div>
                      <span className="text-[9px] font-mono text-amber-300">#E06D38</span>
                    </div>

                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded bg-[#D92D20] border border-white/20 shrink-0" />
                        <span className="text-[11px] text-white font-medium">SOS Red</span>
                      </div>
                      <span className="text-[9px] font-mono text-rose-300">#D92D20</span>
                    </div>

                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded bg-[#0EA5E9] border border-white/20 shrink-0" />
                        <span className="text-[11px] text-white font-medium">Clinical Cyan</span>
                      </div>
                      <span className="text-[9px] font-mono text-cyan-300">#0EA5E9</span>
                    </div>
                  </div>
                </div>

                {/* 2. Semantic Triage Matrix */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Semantic Triage Status</div>
                  <div className="space-y-1.5">
                    <div className="p-2 rounded-lg bg-[#D92D20]/10 border border-[#D92D20]/25 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded bg-[#D92D20] border border-white/20 shrink-0" />
                        <span className="text-[11px] text-rose-200 font-medium">Critical Risk Red (Immediate Triage)</span>
                      </div>
                      <span className="text-[9px] font-mono text-rose-300 font-semibold">#D92D20</span>
                    </div>

                    <div className="p-2 rounded-lg bg-[#F79009]/10 border border-[#F79009]/25 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded bg-[#F79009] border border-white/20 shrink-0" />
                        <span className="text-[11px] text-amber-200 font-medium">Warning Amber (24hr SLA Flag)</span>
                      </div>
                      <span className="text-[9px] font-mono text-amber-300 font-semibold">#F79009</span>
                    </div>

                    <div className="p-2 rounded-lg bg-[#12B76A]/10 border border-[#12B76A]/25 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded bg-[#12B76A] border border-white/20 shrink-0" />
                        <span className="text-[11px] text-emerald-200 font-medium">Stable Green (Remission / Active)</span>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-300 font-semibold">#12B76A</span>
                    </div>
                  </div>
                </div>

                {/* 3. Surface & Canvas Neutrals */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Multi-Surface Neutrals</div>
                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                      <div className="w-full h-3 rounded bg-[#0F172A] border border-white/10 mb-1" />
                      <div className="text-[10px] text-white truncate font-medium">Admin Dark</div>
                      <div className="text-[8px] font-mono text-slate-400">#0F172A</div>
                    </div>

                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                      <div className="w-full h-3 rounded bg-[#FFFFFF] border border-white/20 mb-1" />
                      <div className="text-[10px] text-white truncate font-medium">Patient Light</div>
                      <div className="text-[8px] font-mono text-slate-400">#FFFFFF</div>
                    </div>

                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                      <div className="w-full h-3 rounded bg-[#E2E8F0] border border-white/10 mb-1" />
                      <div className="text-[10px] text-white truncate font-medium">Border Gray</div>
                      <div className="text-[8px] font-mono text-slate-400">#E2E8F0</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Column 2: Contextual Typography (Inter Primary) */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 space-y-4 shadow-xl">
              <div className="space-y-1">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">Typography System</span>
                <h3 className="text-base font-semibold text-white">Clinical Density Hierarchy</h3>
                <p className="text-xs text-slate-400 font-light">
                  Neutral letterforms and tabular alignment engineered for error-free clinical scanning.
                </p>
              </div>

              <div className="space-y-2">
                {/* Primary Font: Inter */}
                <div className="p-3.5 rounded-lg bg-sky-500/10 border border-sky-500/30">
                  <div className="flex justify-between text-xs font-medium text-white mb-1">
                    <span className="font-semibold text-sky-300">Inter (Primary Font Family)</span>
                    <span className="font-mono text-sky-300">Platform-Wide</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                    Universal typeface utilized across all portals. Delivers exceptional x-height clarity for high-density EHR tables, tabular patient vitals, and clean consumer readability.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex justify-between text-xs font-medium text-white mb-0.5">
                    <span className="font-mono">JetBrains / Roboto Mono</span>
                    <span className="font-mono text-slate-400">Tabular Figures</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Fixed-width figures for SLA countdowns, PHQ-9 / GAD-7 metrics, and HIPAA queue codes.</p>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex justify-between text-xs font-medium text-white mb-0.5">
                    <span>Editorial Serif Accents</span>
                    <span className="font-mono text-slate-400">Humanist</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Warm editorial reassurance headlines that foster safety and trust for patients seeking care.</p>
                </div>
              </div>
            </div>

            {/* Column 3: Spacing & Geometry Tokens */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0E1422]/80 space-y-4 shadow-xl">
              <div className="space-y-1">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">Dynamic Spacing</span>
                <h3 className="text-base font-semibold text-white">Adaptive Spatial Scales</h3>
                <p className="text-xs text-slate-400 font-light">
                  Dynamic rhythm expanding and contracting based on stakeholder cognitive load.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex justify-between text-xs font-medium text-white mb-0.5">
                    <span>B2B Condensed Grid</span>
                    <span className="font-mono text-sky-300">4px / 8px / 12px</span>
                  </div>
                  <p className="text-[11px] text-slate-400">High information density for clinical triage matrices &amp; enterprise ROI tables.</p>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex justify-between text-xs font-medium text-white mb-0.5">
                    <span>B2C Relaxed Canvas</span>
                    <span className="font-mono text-sky-300">16px / 24px / 32px</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Generous breathing room for mindful self-care and low-stimulus patient onboarding.</p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── 7. NEXT CASE STUDY FOOTER TEASER ── */}
        <section className="pt-6 border-t border-white/[0.08]">
          <div
            onClick={() => onSelectProject ? onSelectProject(nextProject) : onBack()}
            className="group rounded-2xl border border-white/[0.08] bg-[#0E1422] p-6 sm:p-10 hover:border-sky-500/30 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl"
          >
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] text-sky-400 tracking-[0.2em] uppercase">NEXT CASE STUDY →</span>
              <h3 className="text-xl sm:text-2xl font-normal text-white tracking-[-0.03em] group-hover:text-sky-300 transition-colors">
                HireDesk:{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  Cross-Platform Fleet Management
                </em>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl leading-[1.5]">
                Explore how complex data tables on the desktop logically collapse into actionable, step-by-step tasks on a utilitarian mobile operator interface.
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

      {/* ── FigJam Brainstorm Stamp Lightbox Modal ── */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0A101D] border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-teal-500/20 text-teal-300 border border-teal-500/30 font-semibold">
                  {zoomedImage.tag}
                </span>
                <span className="text-sm font-semibold text-white">{zoomedImage.title}</span>
              </div>
              <button
                onClick={() => setZoomedImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-white max-h-[75vh] flex items-center justify-center overflow-y-auto">
              <img
                src={zoomedImage.src}
                alt={zoomedImage.title}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-1">
              <span>FigJam Whiteboard Sprint · High-Res Inspection</span>
              <button
                onClick={() => setZoomedImage(null)}
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                Close (ESC)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
