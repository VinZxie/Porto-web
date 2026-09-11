import React from 'react';
import { JOURNEY_STEPS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { Compass } from 'lucide-react';

export const Journey: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].journey;

  return (
    <section id="journey" className="py-20 border-b border-[var(--border-main)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-[var(--border-main)]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              {t.title}
            </h2>
            <p className="text-[var(--text-muted)] text-sm max-w-2xl font-normal">
              {t.subtitle}
            </p>
          </div>

          <div className="text-xs font-mono text-[var(--text-dim)]">
            <span>5 PHASES &bull; RECORDED</span>
          </div>
        </div>

        {/* Vertical Timeline Nodes */}
        <div className="pt-12 relative">
          
          {/* Central spine line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-px bg-[var(--border-card)] -translate-x-1/2" />

          <div className="space-y-10">
            {JOURNEY_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.phase}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-1/2">
                    <div className="p-6 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] hover:border-orange-500/40 transition-all space-y-3 shadow-xs">
                      
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-mono font-bold">
                          {t.phasePrefix} {step.phase}
                        </span>
                        <span className="text-xs font-mono text-[var(--text-muted)] font-semibold">{step.focus[lang]}</span>
                      </div>

                      <h3 className="text-lg font-bold text-[var(--text-main)] tracking-tight">{step.title[lang]}</h3>
                      <p className="text-xs text-[var(--text-body)] leading-relaxed">{step.narrative[lang]}</p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
                        {step.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-muted)] text-[10px] font-mono border border-[var(--border-subtle)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--bg-surface)] border-2 border-orange-500 items-center justify-center font-mono text-xs text-orange-500 font-bold z-10 shadow-xs">
                    {step.phase}
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
