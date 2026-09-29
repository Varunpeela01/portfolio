import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Layers, HardHat, Truck, HeartPulse, Cpu, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

interface SelectedWorksProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWorksSection: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'saas' | 'mobile' | 'hardware' | 'founder'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === activeFilter);

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'founder':
        return <HardHat className="h-5 w-5 text-amber-400" />;
      case 'saas':
        return <Truck className="h-5 w-5 text-sky-400" />;
      case 'hardware':
        return <Cpu className="h-5 w-5 text-emerald-400" />;
      default:
        return <Layers className="h-5 w-5 text-indigo-400" />;
    }
  };

  return (
    <section id="works" className="py-24 border-b border-zinc-800/80 bg-[#07080B] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>SELECTED COMMERCIAL WORKS & EXPERIMENTS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Case Studies
            </h2>
            <p className="text-base text-zinc-400 max-w-2xl mt-2 leading-relaxed">
              Real business systems, founder initiatives, and physical devices designed for high cognitive load environments. Click any card to read the complete architectural breakdown.
            </p>
          </div>

          {/* Interactive Filter Controls (Segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl shrink-0">
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveFilter('all');
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-white text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All ({PROJECTS.length})
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveFilter('founder');
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'founder'
                  ? 'bg-amber-400 text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Founder & Field
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveFilter('saas');
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'saas'
                  ? 'bg-sky-400 text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              SaaS & Systems
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveFilter('hardware');
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'hardware'
                  ? 'bg-emerald-400 text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Hardware & IoT
            </button>
          </div>
        </div>

        {/* BENTO GRID DISPLAY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            // First project gets larger bento presence
            const isWide = index === 0;

            return (
              <div
                key={project.id}
                onClick={() => {
                  soundFx.playClick();
                  onSelectProject(project);
                }}
                className={`group relative flex flex-col justify-between rounded-3xl border border-zinc-800 bg-[#0C0E14] p-7 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#10131B] cursor-pointer shadow-lg hover:shadow-cyan-500/5 ${
                  isWide ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Top Row: Unboxed Metadata & Category */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      {getProjectIcon(project.category)}
                      <span className="font-mono text-zinc-300 font-medium uppercase tracking-wider text-[11px]">
                        {project.client}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-zinc-500 text-[11px]">
                      <span>{project.timeline}</span>
                      <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-5 space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-300 font-medium">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed pt-1">
                      {project.overview}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Hero Impact Metric & Action Indicator */}
                <div className="mt-8 pt-5 border-t border-zinc-800/80 flex items-end justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                      Audited Metric
                    </div>
                    <div className="text-base sm:text-lg font-mono font-bold text-cyan-400 tabular-nums">
                      {project.heroMetric}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                    <span>View Case Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
