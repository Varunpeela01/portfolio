import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-hidden">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/[0.08] bg-[#0E1422]/95 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.06)] text-slate-100 animate-fadeIn">
        
        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-cyan-400 font-semibold uppercase">
              Curriculum Vitae
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-xs text-zinc-400">Varun Peela</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-white/10 rounded-lg hover:border-cyan-500/40 transition-colors cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* RESUME DOCUMENT BODY */}
        <div className="py-8 space-y-8 print:text-black print:bg-white">
          
          {/* Header */}
          <div className="border-b border-white/[0.06] pb-6 space-y-2">
            <h1 className="font-display text-3xl sm:text-4xl font-normal text-white">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base text-cyan-400 font-medium">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-mono">Available for Select Work</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2 max-w-3xl">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Core Competencies Summary */}
          <div>
            <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/[0.06]">
                <strong className="text-zinc-200 block mb-1">Product Design &amp; Systems:</strong>
                <span className="text-zinc-400">Zero-to-One Architecture, Design Tokens (Tokens Studio), Complex Enterprise SaaS, Rugged Field UX, Usability Telemetry.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/[0.06]">
                <strong className="text-zinc-200 block mb-1">AI-Assisted Prototyping:</strong>
                <span className="text-zinc-400">Cursor &amp; Claude Sonnet pair programming, React 19, TypeScript, Tailwind CSS, Next.js, React Native/Expo.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/[0.06]">
                <strong className="text-zinc-200 block mb-1">Physical Computing &amp; IoT:</strong>
                <span className="text-zinc-400">Bambu Lab P1S 3D Printing, Fusion 360 Parametric CAD, ESP32 Microcontrollers, OLED Bitmaps, Web Bluetooth API.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/[0.06]">
                <strong className="text-zinc-200 block mb-1">Founder Leadership:</strong>
                <span className="text-zinc-400">Ethnographic site research, multi-stakeholder roadmapping, investor deck prototyping, cross-functional engineering alignment.</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <div>
                      <span className="font-semibold text-sm text-white">{exp.role}</span>
                      <span className="text-zinc-400"> — {exp.company}</span>
                    </div>
                    <span className="font-mono text-cyan-400 shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-xs text-zinc-300 whitespace-pre-line">{exp.description}</p>
                  <ul className="space-y-1 text-xs text-zinc-400 list-disc list-inside">
                    {exp.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects & Case Studies */}
          <div>
            <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
              Selected Commercial Products &amp; Case Studies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-zinc-950 border border-white/[0.06]">
                  <div className="font-semibold text-zinc-200">{proj.title}</div>
                  <div className="text-[11px] text-cyan-400 font-mono mt-0.5">{proj.heroMetric}</div>
                  <p className="text-zinc-400 text-[11px] mt-1 line-clamp-2">{proj.overview}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400">
            Direct Contact: <span className="font-mono text-cyan-300">{PERSONAL_INFO.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-white/10 rounded-xl cursor-pointer"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 rounded-xl shadow-md shadow-blue-500/20 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
