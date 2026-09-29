import React, { useState, useEffect } from 'react';
import { Briefcase, Terminal, User, Mail, Copy, Check, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FloatingDockProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ onOpenContact, onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fadeIn">
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#0D0F14]/90 border border-white/10 shadow-2xl backdrop-blur-xl text-zinc-300">
        
        <a
          href="#work"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium hover:text-white hover:bg-white/10 transition-colors"
        >
          <Briefcase className="h-3.5 w-3.5 text-zinc-400" />
          <span className="hidden sm:inline">Work</span>
        </a>

        <a
          href="#ai-method"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium hover:text-white hover:bg-white/10 transition-colors"
        >
          <Terminal className="h-3.5 w-3.5 text-zinc-400" />
          <span className="hidden sm:inline">AI Lab</span>
        </a>

        <a
          href="#experience"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium hover:text-white hover:bg-white/10 transition-colors"
        >
          <User className="h-3.5 w-3.5 text-zinc-400" />
          <span className="hidden sm:inline">About</span>
        </a>

        <span className="h-4 w-[1px] bg-white/10 mx-1" />

        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title="Click to copy email"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Copy Email</span>
            </>
          )}
        </button>

        <button
          onClick={onOpenContact}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-sm ml-1"
        >
          <Mail className="h-3.5 w-3.5" />
          <span>Contact</span>
        </button>

        <button
          onClick={scrollToTop}
          className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors ml-0.5"
          title="Scroll to top"
        >
          <ArrowUp className="h-3.5 w-3.5" />
        </button>

      </div>
    </div>
  );
};
