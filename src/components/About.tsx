import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { User, MapPin, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].about;

  return (
    <section id="about" className="py-20 border-b border-[var(--border-main)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-[var(--border-main)]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-wider">
              <User className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              {t.title}
            </h2>
            <p className="text-[var(--text-muted)] text-sm max-w-2xl font-normal">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-surface)] px-3.5 py-2 rounded-xl border border-[var(--border-card)] shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Story Grid */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] space-y-5 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-3">
                  <img
                    src="/pp.jpg"
                    alt="Alvin Nuril Iqbal"
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-xl object-cover border border-orange-500/30 shadow-xs"
                  />
                  <div>
                    <span className="text-xs font-mono text-orange-500 uppercase font-semibold block">{t.narrativeTag}</span>
                    <span className="text-xs font-mono text-[var(--text-main)] font-semibold">Alvin Nuril Iqbal &bull; @vinzxie</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[var(--text-dim)] hidden sm:inline">TRK // Poliwangi</span>
              </div>

              <div className="space-y-4 text-[var(--text-body)] text-sm leading-relaxed">
                {t.story.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                  <span className="text-[var(--text-dim)] block text-[10px]">{t.currentUni}</span>
                  <span className="text-[var(--text-main)] font-semibold">{PERSONAL_INFO.status}</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                  <span className="text-[var(--text-dim)] block text-[10px]">{t.majorDept}</span>
                  <span className="text-orange-500 font-semibold">{PERSONAL_INFO.program}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Engineering Axioms */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-main)] font-semibold uppercase">
                <Compass className="w-4 h-4 text-orange-500" />
                <span>{t.axiomsTitle}</span>
              </div>

              <div className="space-y-3 text-xs text-[var(--text-muted)]">
                <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                  <div className="font-bold text-[var(--text-main)] font-mono">{t.axiom1Title}</div>
                  <p>{t.axiom1Desc}</p>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                  <div className="font-bold text-[var(--text-main)] font-mono">{t.axiom2Title}</div>
                  <p>{t.axiom2Desc}</p>
                </div>

                <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                  <div className="font-bold text-[var(--text-main)] font-mono">{t.axiom3Title}</div>
                  <p>{t.axiom3Desc}</p>
                </div>
              </div>
            </div>

            {/* Quick Status Tag */}
            <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-card)] flex items-center justify-between text-xs font-mono shadow-xs">
              <span className="text-[var(--text-dim)]">STATUS:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.statusOpen}</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
