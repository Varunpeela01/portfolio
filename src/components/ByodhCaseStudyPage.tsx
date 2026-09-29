import React, { useEffect } from 'react';
import { ByodhShowcase } from './showcases/ByodhShowcase';
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Briefcase,
  Layers,
  Check,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Zap,
  Sliders,
  Cpu,
  Home,
  Package,
  Lock,
  ChevronRight
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ByodhCaseStudyPageProps {
  onBack: () => void;
  onSelectProject?: (project: Project) => void;
}

export const ByodhCaseStudyPage: React.FC<ByodhCaseStudyPageProps> = ({ onBack, onSelectProject }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextProject = PROJECTS.find((p) => p.id === 'mental-health-platform') || PROJECTS[2];

  return (
    <div className="min-h-screen bg-[#090D16] text-[#94A3B8] font-sans antialiased selection:bg-[#2563EB] selection:text-white">

      {/* ── Main Content Container ── */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-10 sm:pb-12 space-y-12 sm:space-y-14">

        {/* ── 1. HERO SECTION ── */}
        <section className="relative">
          {/* Subtle Ambient Backdrop Glow matching HireDesk */}
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
                  Construction Super App
                </span>
              </div>

              {/* Large Headline with Elegant Serif Italic Accent */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.15]">
                Orchestrating the{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  construction ecosystem.
                </em>
              </h1>

              {/* Subhead Context */}
              <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.6]">
                Consolidating fragmented construction verticals—real estate discovery, wholesale materials, verified professionals, and escrow—into a unified mobile super app.
              </p>

              {/* Details of Project (Metadata Block) */}
              <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-[#0E1422]/70 backdrop-blur-md space-y-3.5 shadow-xl">
                <div className="grid grid-cols-2 gap-3 border-b border-white/[0.06] pb-3">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">ROLE</div>
                    <div className="text-xs sm:text-sm font-medium text-white">Co-Founder &amp; Lead Designer</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">TIMELINE</div>
                    <div className="text-xs sm:text-sm font-medium text-white">Jan 2026 – Present</div>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">SCOPE &amp; PLATFORM</div>
                  <div className="text-xs sm:text-sm font-medium text-white leading-snug">
                    Mobile Super App, B2B Partner Dashboard &amp; Escrow CRM
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Mockup Image */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/[0.08] bg-[#090D16] overflow-hidden shadow-2xl relative aspect-[16/11] sm:aspect-[16/10] flex items-center justify-center group">
                <div className="absolute inset-0 w-full h-full">
                  <ByodhShowcase />
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── 2. THE CHALLENGE (Two-Column Text Block) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          <div className="space-y-3">
            <div className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase flex items-center gap-2">
              <span>PROJECT CONTEXT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.1]">
              The{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">
                Challenge
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 text-sm sm:text-base leading-[1.5] text-slate-300 font-light">
            {/* Column 1: The Problem */}
            <div className="space-y-3 p-6 sm:p-7 rounded-2xl border border-white/[0.06] bg-[#0E1422]/40 backdrop-blur-sm">
              <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider font-semibold">
                THE PROBLEM
              </div>
              <p className="text-slate-300 leading-[1.5]">
                The construction and real estate sectors are notoriously fragmented. Consumers juggle disjointed platforms to browse properties, source materials, and hire verified labor, while service providers struggle with scattered lead management.
              </p>
            </div>

            {/* Column 2: Project Context */}
            <div className="space-y-3 p-6 sm:p-7 rounded-2xl border border-white/[0.06] bg-[#0E1422]/40 backdrop-blur-sm">
              <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider font-semibold">
                PROJECT CONTEXT
              </div>
              <p className="text-slate-300 leading-[1.5]">
                The objective was to consolidate these distinct verticals—Real Estate, Materials, and Professionals—into a single, cohesive "Super App" ecosystem without overwhelming the user or breaking conventional mental models.
              </p>
            </div>
          </div>
        </section>


        {/* ── 3. TARGET AUDIENCE SNAPSHOT ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left side: Text block */}
            <div className="lg:col-span-6 space-y-4">
              <div className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase flex items-center gap-2">
                <span>TARGET AUDIENCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.1]">
                Designing for a{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  Dual Ecosystem
                </em>
              </h2>
              <p className="text-sm sm:text-base leading-[1.5] text-slate-300 font-light pt-1">
                A construction marketplace must serve two distinct masters. The platform must balance the needs of First-Time Homebuilders—who require transparent pricing, trust-building milestones, and guided discovery—with Industry Professionals &amp; Suppliers, who demand high-density dashboards, rapid RFQ processing, and secure escrow payouts. The core UX challenge was unifying these divergent mental models into a single, frictionless architecture.
              </p>
            </div>

            {/* Right side: Two minimalist, dark-themed cards representing the two user archetypes */}
            <div className="lg:col-span-6 space-y-4">
              {/* Card 1 (Consumer) */}
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0E1422]/70 hover:border-sky-500/30 transition-all duration-300 space-y-3 group shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                      <Home className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-sky-400 tracking-[0.2em] uppercase">CONSUMER ARCHETYPE</span>
                      <h4 className="text-base font-medium text-white tracking-tight">The Builder</h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.08]">B2C</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.5]">
                  Seeks transparency, trust, and ease of discovery.
                </p>
                <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2 text-[10px] font-mono text-slate-400">
                  <span className="text-sky-400">Key Needs:</span>
                  <span>RERA Badges · Milestone Escrow · 3D Tours</span>
                </div>
              </div>

              {/* Card 2 (Professional) */}
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0E1422]/70 hover:border-blue-500/30 transition-all duration-300 space-y-3 group shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-blue-400 tracking-[0.2em] uppercase">PROFESSIONAL ARCHETYPE</span>
                      <h4 className="text-base font-medium text-white tracking-tight">The Provider</h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.08]">B2B</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.5]">
                  Seeks high-density data, rapid procurement, and guaranteed payments.
                </p>
                <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2 text-[10px] font-mono text-slate-400">
                  <span className="text-blue-400">Key Needs:</span>
                  <span>Bulk RFQ Management · GPS Check-in · Tranche Release</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── 4. UNDERSTANDING THE ECOSYSTEM (Three-Card Row) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          <div className="space-y-3">
            <div className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase flex items-center gap-2">
              <span>PLATFORM MECHANICS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.1]">
              Core Platform{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">
                Mechanics
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Consumer Discovery */}
            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#0E1422]/60 hover:border-sky-500/30 transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="font-mono text-[10px] text-sky-400 tracking-[0.2em] uppercase">MECHANIC 01</div>
                <h3 className="text-lg font-medium text-white tracking-tight">Consumer Discovery</h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.5]">
                  Utilizing modular horizontal navigation to let users instantly pivot between Real Estate, Materials, and Professional Services seamlessly.
                </p>
              </div>
            </div>

            {/* Card 2: The Business Engine */}
            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#0E1422]/60 hover:border-sky-500/30 transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="font-mono text-[10px] text-sky-400 tracking-[0.2em] uppercase">MECHANIC 02</div>
                <h3 className="text-lg font-medium text-white tracking-tight">The Business Engine</h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.5]">
                  A dedicated partner dashboard surfacing active wallet balances, live listings, and a "Needs Attention" module for unread inquiries.
                </p>
              </div>
            </div>

            {/* Card 3: Role Switching */}
            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#0E1422]/60 hover:border-sky-500/30 transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="font-mono text-[10px] text-sky-400 tracking-[0.2em] uppercase">MECHANIC 03</div>
                <h3 className="text-lg font-medium text-white tracking-tight">Role Switching</h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-[1.5]">
                  Frictionless workspace toggles allowing partners to manage distinct business profiles (e.g., real estate vs. home services) without losing their unified data.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ── 5. UX ARCHITECTURE (The Flowchart) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          {/* Full-width section with a subtle, dark cyan radial gradient to break up solid backgrounds */}
          <div
            className="rounded-3xl border border-cyan-500/20 bg-[#0A121E] p-6 sm:p-10 lg:p-12 space-y-10 shadow-2xl relative overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(6, 182, 212, 0.12) 0%, rgba(10, 18, 30, 0.95) 70%, #070D17 100%)',
            }}
          >
            {/* Header & Copywriting */}
            <div className="max-w-4xl space-y-4">
              <div className="font-mono text-xs text-cyan-400 tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>USER JOURNEY ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.1]">
                Mapping the{' '}
                <em className="font-serif italic font-normal text-cyan-400">
                  Multi-Sided Marketplace
                </em>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.5]">
                To prevent cognitive overload, I mapped the ecosystem into four parallel verticals: Real Estate Discovery, Materials Procurement, Verified Services, and Escrow Governance. This modular architecture allows users to enter the flow at any stage—whether purchasing a turnkey villa or simply ordering 50 bags of cement—without being forced through a rigid, linear funnel.
              </p>
            </div>

            {/* Horizontal UX User Journey Flowchart */}
            <div className="rounded-2xl border border-cyan-500/20 bg-[#070D17]/90 p-5 sm:p-8 backdrop-blur-md overflow-x-auto shadow-inner">
              <div className="min-w-[800px] space-y-6">
                
                {/* Flowchart Track Headers / Legend */}
                <div className="flex items-center justify-between pb-3 border-b border-cyan-500/15 text-[11px] font-mono text-cyan-300">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-500/30 font-semibold uppercase tracking-wider text-[10px]">
                      Horizontal Journey Map
                    </span>
                    <span className="text-slate-400">4 Parallel Modular Funnels</span>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400" /> User Input</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-sky-400" /> Core Engine</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Settlement</span>
                  </div>
                </div>

                {/* Vertical 1: Real Estate Discovery */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Vertical 01 · Real Estate Discovery
                  </div>
                  <div className="grid grid-cols-4 gap-3 items-center">
                    <div className="p-3.5 rounded-xl border border-cyan-500/20 bg-[#0E1726] text-center space-y-1 hover:border-cyan-400/40 transition-colors">
                      <div className="text-[10px] font-mono text-cyan-400 font-semibold">01 · INPUT</div>
                      <div className="text-xs font-medium text-white">Browse Listings</div>
                      <div className="text-[10px] text-slate-400 font-mono">RERA Verified Villas</div>
                    </div>
                    <div className="relative p-3.5 rounded-xl border border-cyan-500/20 bg-[#0E1726] text-center space-y-1 hover:border-cyan-400/40 transition-colors before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-[2px] before:bg-cyan-500/40">
                      <div className="text-[10px] font-mono text-cyan-400 font-semibold">02 · FILTER</div>
                      <div className="text-xs font-medium text-white">Budget &amp; Zone</div>
                      <div className="text-[10px] text-slate-400 font-mono">Interactive Map Search</div>
                    </div>
                    <div className="relative p-3.5 rounded-xl border border-cyan-500/20 bg-[#0E1726] text-center space-y-1 hover:border-cyan-400/40 transition-colors before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-[2px] before:bg-cyan-500/40">
                      <div className="text-[10px] font-mono text-cyan-400 font-semibold">03 · ACTION</div>
                      <div className="text-xs font-medium text-white">Schedule Tour</div>
                      <div className="text-[10px] text-slate-400 font-mono">Direct Slot Confirmation</div>
                    </div>
                    <div className="relative p-3.5 rounded-xl border border-cyan-400/50 bg-cyan-950/30 text-center space-y-1 shadow-md shadow-cyan-950/50 before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-[2px] before:bg-cyan-400">
                      <div className="text-[10px] font-mono text-cyan-300 font-semibold">04 · OUTPUT</div>
                      <div className="text-xs font-semibold text-white">Direct Lead Handoff</div>
                      <div className="text-[10px] text-cyan-400 font-mono">Partner CRM Synced</div>
                    </div>
                  </div>
                </div>

                {/* Vertical 2: Materials Procurement */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Vertical 02 · Materials Procurement
                  </div>
                  <div className="grid grid-cols-4 gap-3 items-center">
                    <div className="p-3.5 rounded-xl border border-cyan-500/20 bg-[#0E1726] text-center space-y-1 hover:border-cyan-400/40 transition-colors">
                      <div className="text-[10px] font-mono text-cyan-400 font-semibold">01 · CATALOG</div>
                      <div className="text-xs font-medium text-white">Cement &amp; Steel Index</div>
                      <div className="text-[10px] text-slate-400 font-mono">Wholesale Inventory</div>
                    </div>
                    <div className="relative p-3.5 rounded-xl border border-cyan-500/20 bg-[#0E1726] text-center space-y-1 hover:border-cyan-400/40 transition-colors before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-[2px] before:bg-cyan-500/40">
                      <div className="text-[10px] font-mono text-cyan-400 font-semibold">02 · ESTIMATE</div>
                      <div className="text-xs font-medium text-white">Tiered Bulk Pricing</div>
                      <div className="text-[10px] text-slate-400 font-mono">Live Price Benchmark</div>
                    </div>
                    <div className="relative p-3.5 rounded-xl border border-cyan-500/20 bg-[#0E1726] text-center space-y-1 hover:border-cyan-400/40 transition-colors before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-[2px] before:bg-cyan-500/40">
                      <div className="text-[10px] font-mono text-cyan-400 font-semibold">03 · ACTION</div>
                      <div className="text-xs font-medium text-white">Submit Bulk RFQ</div>
                      <div className="text-[10px] text-slate-400 font-mono">One-Tap Order Matrix</div>
                    </div>
                    <div className="relative p-3.5 rounded-xl border border-cyan-400/50 bg-cyan-950/30 text-center space-y-1 shadow-md shadow-cyan-950/50 before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-[2px] before:bg-cyan-400">
                      <div className="text-[10px] font-mono text-cyan-300 font-semibold">04 · LOGISTICS</div>
                      <div className="text-xs font-semibold text-white">Supplier Dispatch</div>
                      <div className="text-[10px] text-cyan-400 font-mono">Live Site Delivery ETA</div>
                    </div>
                  </div>
                </div>

                {/* Vertical 3: Verified Services */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Vertical 03 · Verified Services
                  </div>
                  <div className="grid grid-cols-4 gap-3 items-center">
                    <div className="p-3.5 rounded-xl border border-cyan-500/20 bg-[#0E1726] text-center space-y-1 hover:border-cyan-400/40 transition-colors">
                      <div className="text-[10px] font-mono text-cyan-400 font-semibold">01 · DIRECTORY</div>
                      <div className="text-xs font-medium text-white">Architects &amp; Labor</div>
                      <div className="text-[10px] text-slate-400 font-mono">Skill &amp; Trade Taxonomy</div>
                    </div>
                    <div className="relative p-3.5 rounded-xl border border-cyan-500/20 bg-[#0E1726] text-center space-y-1 hover:border-cyan-400/40 transition-colors before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-[2px] before:bg-cyan-500/40">
                      <div className="text-[10px] font-mono text-cyan-400 font-semibold">02 · AUDIT</div>
                      <div className="text-xs font-medium text-white">Verified Badges</div>
                      <div className="text-[10px] text-slate-400 font-mono">Licensed Portfolio Review</div>
                    </div>
                    <div className="relative p-3.5 rounded-xl border border-cyan-500/20 bg-[#0E1726] text-center space-y-1 hover:border-cyan-400/40 transition-colors before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-[2px] before:bg-cyan-500/40">
                      <div className="text-[10px] font-mono text-cyan-400 font-semibold">03 · ACTION</div>
                      <div className="text-xs font-medium text-white">Book Consultation</div>
                      <div className="text-[10px] text-slate-400 font-mono">Scope &amp; Proposal Align</div>
                    </div>
                    <div className="relative p-3.5 rounded-xl border border-cyan-400/50 bg-cyan-950/30 text-center space-y-1 shadow-md shadow-cyan-950/50 before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-[2px] before:bg-cyan-400">
                      <div className="text-[10px] font-mono text-cyan-300 font-semibold">04 · AGREEMENT</div>
                      <div className="text-xs font-semibold text-white">Contract Locked</div>
                      <div className="text-[10px] text-cyan-400 font-mono">Milestone Scheduled</div>
                    </div>
                  </div>
                </div>

                {/* Vertical 4: Escrow Governance */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Vertical 04 · Escrow Governance
                  </div>
                  <div className="grid grid-cols-4 gap-3 items-center">
                    <div className="p-3.5 rounded-xl border border-cyan-500/20 bg-[#0E1726] text-center space-y-1 hover:border-cyan-400/40 transition-colors">
                      <div className="text-[10px] font-mono text-cyan-400 font-semibold">01 · DEPOSIT</div>
                      <div className="text-xs font-medium text-white">Tranche Setup</div>
                      <div className="text-[10px] text-slate-400 font-mono">Funds Held in Secure Vault</div>
                    </div>
                    <div className="relative p-3.5 rounded-xl border border-cyan-500/20 bg-[#0E1726] text-center space-y-1 hover:border-cyan-400/40 transition-colors before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-[2px] before:bg-cyan-500/40">
                      <div className="text-[10px] font-mono text-cyan-400 font-semibold">02 · PROGRESS</div>
                      <div className="text-xs font-medium text-white">Stage Completion</div>
                      <div className="text-[10px] text-slate-400 font-mono">Photo &amp; Spec Upload</div>
                    </div>
                    <div className="relative p-3.5 rounded-xl border border-cyan-500/20 bg-[#0E1726] text-center space-y-1 hover:border-cyan-400/40 transition-colors before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-[2px] before:bg-cyan-500/40">
                      <div className="text-[10px] font-mono text-cyan-400 font-semibold">03 · AUDIT</div>
                      <div className="text-xs font-medium text-white">GPS Verification</div>
                      <div className="text-[10px] text-slate-400 font-mono">Homeowner Sign-Off</div>
                    </div>
                    <div className="relative p-3.5 rounded-xl border border-emerald-400/50 bg-emerald-950/30 text-center space-y-1 shadow-md shadow-emerald-950/50 before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-[2px] before:bg-emerald-400">
                      <div className="text-[10px] font-mono text-emerald-300 font-semibold">04 · PAYOUT</div>
                      <div className="text-xs font-semibold text-white">Automatic Release</div>
                      <div className="text-[10px] text-emerald-400 font-mono">Dispute-Free Settlement</div>
                    </div>
                  </div>
                </div>

                {/* Central Platform Convergence Footnote */}
                <div className="pt-4 border-t border-cyan-500/15 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-3">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Modular Convergence:</span>
                    <span className="text-slate-300">Single Sign-On · Real-Time Wallet · Context-Preserving Role Switcher</span>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Non-Linear Entry Architecture
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ── 6. UX ARCHITECTURE & WIREFRAMING ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-10">
          {/* Stacked Layout Header (Centered max-w-[800px]) */}
          <div className="max-w-[800px] mx-auto text-center space-y-4">
            <div className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase flex items-center justify-center gap-2">
              <span>UX ARCHITECTURE &amp; WIREFRAMING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.1]">
              Structure Before Surface:{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">
                The Wireframing Process
              </em>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 font-light leading-[1.6] text-left sm:text-center pt-2">
              <p>
                Before committing to the final dark-theme aesthetic, I stripped the interface down to its raw structural components. Moving from abstract user flows to mid-fidelity skeleton screens allowed me to strictly evaluate content hierarchy, interaction density, and navigational logic without the distraction of color or typography.
              </p>
              <p>
                For a multi-sided ecosystem like BYODH, information architecture is critical. By utilizing gray-box wireframing, I validated the complex 2-column grid for the Materials Catalog to ensure rapid bulk ordering, and mapped out the high-density information requirements for the Professional Directory profiles to build trust through credential visibility.
              </p>
            </div>
          </div>

          {/* Edge-to-Edge Raw Figma Wireframe Workspace Image (image_9f84df.png) */}
          <div className="w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#121826]">
            <img
              src="/projects/image_9f84df.png"
              alt="Structure Before Surface: The Wireframing Process - Discovery, Catalog, and Profile Screens"
              className="w-full h-auto object-contain block"
              loading="lazy"
            />
          </div>
        </section>


        {/* ── 7. VISUAL SHOWCASE (Full-Width Gallery Prepped for Figma Exports) ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-10">
          {/* Header & Editorial Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <div className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase mb-2">
                VISUAL CATALOG
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.1]">
                Standardizing complex{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  catalogs.
                </em>
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.5]">
                Whether browsing high-value villas or purchasing raw cement, the navigation and filtering mechanics remain identical to drastically reduce cognitive load. Trust is surfaced immediately via verified tags and clear professional ratings directly on the primary cards.
              </p>
            </div>
          </div>

          {/* 4-Screen Edge-to-Edge Image Array Prepped for High-Fidelity Figma Exports */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0E1422] p-5 sm:p-8 space-y-4 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              
              {/* Screen 1: Real Estate Discovery */}
              <div className="space-y-2.5">
                <div className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.2em] text-center">
                  01 · Real Estate
                </div>
                <div className="group relative rounded-xl overflow-hidden border border-white/[0.08] bg-[#090D16] aspect-[9/18.5] flex items-center justify-center transition-all hover:border-sky-400/40 shadow-lg">
                  <img
                    src="/projects/byodh-real-estate.jpg"
                    alt="Real Estate Discovery UI"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Screen 2: Materials Procurement */}
              <div className="space-y-2.5">
                <div className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.2em] text-center">
                  02 · Materials Catalog
                </div>
                <div className="group relative rounded-xl overflow-hidden border border-white/[0.08] bg-[#090D16] aspect-[9/18.5] flex items-center justify-center transition-all hover:border-sky-400/40 shadow-lg">
                  <img
                    src="/projects/byodh-materials.png"
                    alt="Materials Procurement UI"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Screen 3: Verified Professionals */}
              <div className="space-y-2.5">
                <div className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.2em] text-center">
                  03 · Professionals
                </div>
                <div className="group relative rounded-xl overflow-hidden border border-white/[0.08] bg-[#090D16] aspect-[9/18.5] flex items-center justify-center transition-all hover:border-sky-400/40 shadow-lg">
                  <img
                    src="/projects/byodh-professionals.jpg"
                    alt="Verified Professionals UI"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Screen 4: Milestone Escrow */}
              <div className="space-y-2.5">
                <div className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.2em] text-center">
                  04 · Milestone Escrow
                </div>
                <div className="group relative rounded-xl overflow-hidden border border-white/[0.08] bg-[#090D16] aspect-[9/18.5] flex items-center justify-center transition-all hover:border-sky-400/40 shadow-lg">
                  <img
                    src="/projects/byodh-milestones.jpg"
                    alt="Milestone Escrow UI"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ── 8. SCALABLE VISUAL SYSTEM & ARCHITECTURE ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-10">
          {/* Header & Introductory Paragraph */}
          <div className="space-y-4 max-w-4xl">
            <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>SCALABLE VISUAL SYSTEM &amp; ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.1]">
              Scalable Visual System{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">
                &amp; Architecture
              </em>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.6] pt-1">
              A scalable mobile visual system was established to balance high-density construction data with accessible consumer interfaces. The foundation relies on a trustworthy navy-and-blue palette, highly legible Outfit typography, and a strict 4-point spatial grid. By defining reusable patterns and consistent elevation rules, the interface ensures a frictionless, unified ecosystem across all marketplace verticals.
            </p>
          </div>

          {/* 3-Column Grid Below */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0E1422] p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Column 1: Color Foundation */}
              <div className="lg:col-span-4 space-y-4">
                <div className="font-mono text-xs text-sky-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Color Foundation
                </div>

                <div className="space-y-3">
                  {/* Primary / Brand */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Primary / Brand</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2.5 p-2 rounded-lg bg-black/40 border border-white/10">
                        <div className="w-6 h-6 rounded-md bg-[#0E1B33] border border-white/20 shrink-0 shadow-sm" />
                        <div className="min-w-0">
                          <div className="text-[11px] font-medium text-white truncate">Deep Navy</div>
                          <div className="text-[10px] font-mono text-slate-400">#0E1B33</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 p-2 rounded-lg bg-black/40 border border-white/10">
                        <div className="w-6 h-6 rounded-md bg-[#0B1C30] border border-white/20 shrink-0 shadow-sm" />
                        <div className="min-w-0">
                          <div className="text-[11px] font-medium text-white truncate">Brand Dark</div>
                          <div className="text-[10px] font-mono text-slate-400">#0B1C30</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Action &amp; Interactive</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2.5 p-2 rounded-lg bg-black/40 border border-white/10">
                        <div className="w-6 h-6 rounded-md bg-[#326EE9] shrink-0 shadow-sm" />
                        <div className="min-w-0">
                          <div className="text-[11px] font-medium text-white truncate">Action Blue</div>
                          <div className="text-[10px] font-mono text-sky-400">#326EE9</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 p-2 rounded-lg bg-black/40 border border-white/10">
                        <div className="w-6 h-6 rounded-md bg-[#0054CD] shrink-0 shadow-sm" />
                        <div className="min-w-0">
                          <div className="text-[11px] font-medium text-white truncate">Action Dark</div>
                          <div className="text-[10px] font-mono text-blue-400">#0054CD</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Surfaces */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Surfaces</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-black/40 border border-white/10 text-center">
                        <div className="w-6 h-6 rounded-md bg-[#FFFFFF] border border-black/20 shadow-sm" />
                        <div className="text-[10px] font-medium text-white">Base</div>
                        <div className="text-[9px] font-mono text-slate-400">#FFFFFF</div>
                      </div>
                      <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-black/40 border border-white/10 text-center">
                        <div className="w-6 h-6 rounded-md bg-[#F8F9FF] border border-black/20 shadow-sm" />
                        <div className="text-[10px] font-medium text-white">Light</div>
                        <div className="text-[9px] font-mono text-slate-400">#F8F9FF</div>
                      </div>
                      <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-black/40 border border-white/10 text-center">
                        <div className="w-6 h-6 rounded-md bg-[#EFF4FF] border border-black/20 shadow-sm" />
                        <div className="text-[10px] font-medium text-white">Soft</div>
                        <div className="text-[9px] font-mono text-slate-400">#EFF4FF</div>
                      </div>
                    </div>
                  </div>

                  {/* Typography & Borders */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Typography &amp; Borders</div>
                    <div className="grid grid-cols-3 gap-1.5 text-center">
                      <div className="p-1.5 rounded-lg bg-black/40 border border-white/10 flex flex-col items-center">
                        <div className="w-5 h-5 rounded bg-[#45474D] border border-white/10 mb-1" />
                        <span className="text-[9px] font-mono text-slate-300">#45474D</span>
                        <span className="text-[8px] text-slate-500">Primary</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-black/40 border border-white/10 flex flex-col items-center">
                        <div className="w-5 h-5 rounded bg-[#75777E] border border-white/10 mb-1" />
                        <span className="text-[9px] font-mono text-slate-300">#75777E</span>
                        <span className="text-[8px] text-slate-500">Secondary</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-black/40 border border-white/10 flex flex-col items-center">
                        <div className="w-5 h-5 rounded bg-[#8894AB] border border-white/10 mb-1" />
                        <span className="text-[9px] font-mono text-slate-300">#8894AB</span>
                        <span className="text-[8px] text-slate-500">Muted</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/[0.06]">
                      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-black/40 border border-white/10">
                        <div className="w-4 h-4 rounded bg-[#C5C6CE] shrink-0" />
                        <span className="text-[10px] font-mono text-slate-300">#C5C6CE Border</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-black/40 border border-white/10">
                        <div className="w-4 h-4 rounded bg-[#D3E4FE] shrink-0" />
                        <span className="text-[10px] font-mono text-slate-300">#D3E4FE Accent</span>
                      </div>
                    </div>
                  </div>

                  {/* Semantics */}
                  <div className="p-3 rounded-xl bg-[#090D16] border border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-[#10B981] shadow-sm" />
                      <span className="text-[11px] font-medium text-white">#10B981 Success</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-[#F59E0B] shadow-sm" />
                      <span className="text-[11px] font-medium text-white">#F59E0B Warning</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Column 2: Typography (Outfit) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="font-mono text-xs text-sky-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Typography (Outfit)
                </div>

                <div className="space-y-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {/* Font Specimen Header */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold text-white tracking-tight">Outfit</div>
                      <div className="text-[11px] text-slate-400 font-mono">Google Font · Sans-Serif</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
                      Primary UI Face
                    </span>
                  </div>

                  {/* Weights and Usage Roles */}
                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-[#090D16] border border-white/[0.06] flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white">Bold (700)</div>
                        <div className="text-[11px] text-slate-400 font-sans">Page titles &amp; primary headers</div>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">Title Display</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#090D16] border border-white/[0.06] flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-white">SemiBold (600)</div>
                        <div className="text-[11px] text-slate-400 font-sans">Section headings &amp; primary actions</div>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">Headers &amp; CTA</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#090D16] border border-white/[0.06] flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-slate-200">Medium (500)</div>
                        <div className="text-[11px] text-slate-400 font-sans">UI labels &amp; navigation</div>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">Controls</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#090D16] border border-white/[0.06] flex items-center justify-between">
                      <div>
                        <div className="text-sm font-normal text-slate-300">Regular (400)</div>
                        <div className="text-[11px] text-slate-400 font-sans">Body (16/24) &amp; supporting copy (14/20)</div>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">16/24 · 14/20</span>
                    </div>
                  </div>

                  {/* Typography Scale */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Type Scale Ladder</div>
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                      {['28px', '24px', '20px', '16px', '14px', '12px', '11px'].map((step, idx) => (
                        <span
                          key={step}
                          className={`px-2 py-1 rounded border ${
                            idx === 0
                              ? 'bg-sky-500/15 border-sky-500/30 text-sky-300 font-bold'
                              : 'bg-white/[0.04] border-white/10 text-slate-300'
                          }`}
                        >
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Spatial & Component Rules */}
              <div className="lg:col-span-4 space-y-4">
                <div className="font-mono text-xs text-sky-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Spatial &amp; Component Rules
                </div>

                <div className="space-y-3">
                  {/* Viewport */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-1">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Viewport Base</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-white">Mobile-first Canvas</div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        390px base
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-light">
                      Fluid standard scaling across contemporary iPhone &amp; Android aspect ratios.
                    </div>
                  </div>

                  {/* Grid */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Grid Foundation</div>
                    <div className="text-sm font-medium text-white">4pt Spacing Foundation</div>
                    <div className="flex flex-wrap gap-1.5">
                      {['8px', '12px', '16px', '24px', '32px'].map((step) => (
                        <div
                          key={step}
                          className="px-2 py-1 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300 flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-[11px] text-slate-400 font-light">
                      Standard step cadence for consistent gutters, margins, and content rhythm.
                    </div>
                  </div>

                  {/* Geometry */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Geometry &amp; Radii</div>
                    <div className="text-sm font-medium text-white">Corner Radius Tokens</div>
                    <div className="grid grid-cols-2 gap-2 text-center text-[11px] font-mono">
                      <div className="p-2 bg-white/[0.04] border border-white/10 rounded-lg text-slate-300">
                        8px / 12px <span className="text-[9px] text-slate-500 block">Inputs &amp; Cards</span>
                      </div>
                      <div className="p-2 bg-white/[0.04] border border-white/10 rounded-2xl text-slate-300">
                        16px / 24px <span className="text-[9px] text-slate-500 block">Containers &amp; Sheets</span>
                      </div>
                    </div>
                    <div className="p-2 bg-white/[0.04] border border-white/10 rounded-full text-center text-[11px] font-mono text-sky-300">
                      Fully Rounded Pills <span className="text-[9px] text-slate-400">(9999px) · Tags &amp; Buttons</span>
                    </div>
                  </div>

                  {/* Depth */}
                  <div className="p-3.5 rounded-xl bg-[#090D16] border border-white/[0.06] space-y-1.5">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Depth &amp; Elevation</div>
                    <div className="text-sm font-medium text-white">Modal &amp; Bottom-Sheet Elevation</div>
                    <p className="text-[11px] text-slate-300 font-light leading-[1.5]">
                      Soft diffuse shadows and background blurs establish high-contrast hierarchy for sticky conversion trays and drawer overlays.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ── 09. OUTCOMES & RETROSPECTIVE ── */}
        <section className="pt-12 sm:pt-14 border-t border-white/[0.08] space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="font-mono text-xs text-sky-400 tracking-[0.2em] uppercase flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>RETROSPECTIVE &amp; LEARNINGS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.1]">
              Takeaways:{' '}
              <em className="font-serif italic font-normal text-[#38BDF8]">
                Designing for Complexity
              </em>
            </h2>

            <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.08] bg-[#0E1422]/60 backdrop-blur-md shadow-2xl text-left space-y-5 relative overflow-hidden">
              <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-sky-500/[0.05] rounded-full blur-[80px]" />

              <p className="text-sm sm:text-base text-slate-300 font-light leading-[1.6]">
                Building BYODH reinforced that in complex enterprise design, structure dictates success. Balancing high-density data (like structural engineering credentials) with consumer-friendly interfaces (like property discovery) required rigorous mid-fidelity testing to get the hierarchy right.
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
                Refill Health:{' '}
                <em className="font-serif italic font-normal text-[#38BDF8]">
                  Orchestrating Clinical Wellbeing
                </em>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl leading-[1.5]">
                Replacing fragmented intake questionnaires with gentle 15-second emotional check-in loops and clinician telemetry.
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
