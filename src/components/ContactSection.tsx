import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onCopyEmail?: () => void;
  copied?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail, copied }) => {
  const [localCopied, setLocalCopied] = useState(false);

  const handleCopy = () => {
    if (onCopyEmail) {
      onCopyEmail();
    } else {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setLocalCopied(true);
      setTimeout(() => setLocalCopied(false), 2200);
    }
  };

  const isCopied = copied || localCopied;

  return (
    <footer id="contact" className="scroll-mt-24 pt-20 sm:pt-28 pb-10 sm:pb-14 bg-[#090D16] relative border-t border-white/[0.08] overflow-hidden">
      {/* Ambient glow mesh */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sky-500/[0.04] rounded-full blur-[160px] -z-10" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-10 sm:space-y-12">
        
        {/* Monospace Eyebrow */}
        <div className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase">
          LET'S MAKE SOMETHING
        </div>

        {/* Big Editorial Quote */}
        <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
          "The best designs are{' '}
          <em className="font-serif italic font-normal text-[#38BDF8]">decisions</em>
          <br className="hidden sm:inline" /> worth defending — and the rest is just{' '}
          <em className="font-serif italic font-normal text-[#38BDF8]">decoration.</em>"
        </blockquote>

        {/* Giant Connect Button with Hover Aura */}
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleCopy}
            className="group relative inline-flex items-center gap-3 px-7 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-lg font-medium text-white bg-white/[0.06] hover:bg-sky-500 hover:text-white border border-white/[0.14] hover:border-sky-400 transition-all duration-300 shadow-2xl hover:shadow-[0_0_50px_rgba(56,189,248,0.35)] cursor-pointer"
          >
            <span>{isCopied ? 'Email Copied to Clipboard!' : "Let's connect"}</span>
            {isCopied ? (
              <Check className="h-5 w-5 text-emerald-300" />
            ) : (
              <ArrowRight className="h-5 w-5 text-sky-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
            )}
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Mail className="h-3.5 w-3.5 text-sky-400" />
            <span>{PERSONAL_INFO.email}</span>
            <span className="text-slate-600">·</span>
            <span className="text-sky-400">Replies in &lt; 24h</span>
          </div>

          {/* Direct Social & WhatsApp Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2 text-xs font-mono">
            <a
              href="https://wa.me/917013534396"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-emerald-400 hover:text-emerald-300 transition-all flex items-center gap-1.5"
            >
              <span>WhatsApp: +91 7013534396</span>
            </a>
            <a
              href="https://www.linkedin.com/in/varun-peela-41297b249"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-sky-500/15 border border-white/10 hover:border-sky-500/30 text-slate-300 hover:text-sky-400 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/_varun_peela_?stkn=ZzBlbms3Ynduc2Ju&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-pink-500/15 border border-white/10 hover:border-pink-500/30 text-slate-300 hover:text-pink-400 transition-all"
            >
              Instagram
            </a>
          </div>
        </div>



        {/* Footer Meta Row */}
        <div className="pt-12 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_6px_#38BDF8]" />
            <span>© VARUN PEELA · DESIGNED &amp; BUILT IN 2026</span>
          </div>
          <span>v4.2 · LAST UPDATED SEP 2026</span>
        </div>

      </div>
    </footer>
  );
};
