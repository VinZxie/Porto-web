import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Activity } from 'lucide-react';

export const SystemHUD: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(currentScroll);
      setScrollProgress(
        totalHeight > 0 ? Math.min(Math.round((currentScroll / totalHeight) * 100), 100) : 0
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (scrollY < 180) return null;

  return (
    <div
      id="system-telemetry-hud"
      className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-3 bg-[#101217]/90 backdrop-blur-md border border-white/[0.08] px-3.5 py-2 rounded-xl shadow-2xl text-[11px] font-mono"
    >
      <div className="flex items-center gap-2 pr-2 border-r border-white/[0.08]">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
        <span className="text-zinc-400">{PERSONAL_INFO.brand}</span>
      </div>

      <div className="flex items-center gap-1.5 text-zinc-400">
        <span>READ:</span>
        <span className="text-zinc-200 font-bold">{scrollProgress}%</span>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="p-1 rounded-md bg-[#181b24] hover:bg-orange-600 text-zinc-400 hover:text-white transition-colors"
        title="Scroll to Top"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
