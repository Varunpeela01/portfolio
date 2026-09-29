import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Quote, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-hidden">
      
      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/[0.08] bg-[#0E1422]/95 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.06)] text-slate-100 animate-fadeIn">
        
        {/* Top Bar with Close Button */}
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
            <span className="text-cyan-400 font-semibold uppercase">{project.category} CASE STUDY</span>
            <span aria-hidden="true">·</span>
            <span>{project.timeline}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Header Block */}
        <div className="py-6 border-b border-white/[0.06] space-y-2">
          <h2 className="text-2xl sm:text-4xl font-normal text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-cyan-200/90 font-medium">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-zinc-500 font-mono">
            {project.tags.map((t, idx) => (
              <span key={t} className="flex items-center gap-2">
                <span>{t}</span>
                {idx < project.tags.length - 1 && <span aria-hidden="true">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Quantifiable Results Spotlight */}
        <div className="py-6 border-b border-white/[0.06]">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
            Audited Business &amp; UX Impact
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {caseStudy.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-2xl bg-[#0D111A] border border-cyan-500/15">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-sky-400 tabular-nums">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-zinc-200 mt-1">{m.label}</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">{m.context}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge vs Solution Narrative */}
        <div className="py-6 space-y-8 border-b border-white/[0.06]">
          
          {/* The Challenge */}
          <div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              01. The Problem Space &amp; Friction
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* The Core Behavioral Insight */}
          <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/25">
            <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Core Architectural Insight</span>
            </div>
            <p className="text-sm sm:text-base text-zinc-100 font-medium italic leading-relaxed">
              "{caseStudy.coreInsight}"
            </p>
          </div>

          {/* The Solution */}
          <div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              02. The Design Solution
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{caseStudy.solution.title}</h3>
            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              {caseStudy.solution.description}
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              {caseStudy.solution.keyPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Attributable Testimonial */}
          {caseStudy.testimonial && (
            <div className="p-6 rounded-2xl bg-[#0C1018] border border-white/[0.06] relative">
              <Quote className="h-8 w-8 text-zinc-800 absolute top-4 right-4" />
              <p className="text-sm sm:text-base italic text-zinc-200 leading-relaxed mb-4">
                "{caseStudy.testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-bold flex items-center justify-center text-xs shrink-0">
                  {caseStudy.testimonial.author[0]}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{caseStudy.testimonial.author}</div>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    {caseStudy.testimonial.role} · {caseStudy.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step-by-Step Execution Workflow */}
          <div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
              03. Execution Sequence &amp; Sprint Velocity
            </div>
            <div className="space-y-2">
              {caseStudy.workflow.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/[0.05] text-xs text-zinc-300">
                  <span className="font-mono text-cyan-400 font-bold shrink-0">{String(idx + 1).padStart(2, '0')}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              04. Instruments &amp; Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Color Palette Specimen */}
          {caseStudy.colorPalette && caseStudy.colorPalette.length > 0 && (
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>05. Project Color Palette &amp; Token Variables</span>
                <span className="text-[10px] text-zinc-500">Hex Tokens</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {caseStudy.colorPalette.map((col) => (
                  <div key={col.hex} className="p-3 rounded-2xl bg-black/40 border border-white/[0.07] flex flex-col justify-between space-y-2">
                    <div
                      className="h-10 w-full rounded-xl border border-white/10 shadow-sm"
                      style={{ backgroundColor: col.hex }}
                    />
                    <div>
                      <div className="text-xs font-mono font-bold text-white flex items-center justify-between">
                        <span>{col.hex}</span>
                      </div>
                      <div className="text-[11px] font-semibold text-zinc-300 mt-0.5">{col.name}</div>
                      <div className="text-[10px] text-zinc-500 leading-tight mt-0.5">{col.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Typography Specimen */}
          {caseStudy.typography && caseStudy.typography.length > 0 && (
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                06. Typography Hierarchy &amp; Font Specimen
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.typography.map((t) => (
                  <div key={t.fontName} className="p-4 rounded-2xl bg-black/40 border border-white/[0.07] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-white">{t.fontName}</span>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">Specimen</span>
                    </div>
                    <div className="text-[11px] text-zinc-400">{t.usage}</div>
                    <div className="text-xl font-medium text-white tracking-wide border-t border-white/[0.05] pt-2">
                      {t.sample}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Call to Action */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400">
            Want to build a high-velocity system for your product?
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="btn-tactile-accent inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 cursor-pointer"
            >
              <span>Discuss Project with Varun</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
