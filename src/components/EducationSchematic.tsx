import React, { useState } from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { GraduationCap, Network, Cpu, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const EducationSchematic: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].education;

  const [activeLayer, setActiveLayer] = useState<'network' | 'application'>('application');

  const poliwangi = EDUCATION_DATA.find((e) => e.id === 'poliwangi')!;
  const smk = EDUCATION_DATA.find((e) => e.id === 'smkn1bwi')!;

  return (
    <section id="education" className="py-20 border-b border-[var(--border-main)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-[var(--border-main)]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              {t.title}
            </h2>
            <p className="text-[var(--text-muted)] text-sm max-w-2xl font-normal">
              {t.subtitle}
            </p>
          </div>

          <div className="relative flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-card)] text-xs font-mono shadow-xs">
            <button
              type="button"
              onClick={() => setActiveLayer('network')}
              id="education-tab-smk"
              className={`relative px-3.5 py-1.5 rounded-lg transition-colors z-10 font-semibold cursor-pointer select-none ${
                activeLayer === 'network'
                  ? 'text-white'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              {activeLayer === 'network' && (
                <motion.span
                  layoutId="education-track-pill"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 border border-purple-400/30 -z-10 shadow-sm shadow-purple-900/30"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              {t.vocationalBtn}
            </button>
            <button
              type="button"
              onClick={() => setActiveLayer('application')}
              id="education-tab-poliwangi"
              className={`relative px-3.5 py-1.5 rounded-lg transition-colors z-10 font-semibold cursor-pointer select-none ${
                activeLayer === 'application'
                  ? 'text-white'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              {activeLayer === 'application' && (
                <motion.span
                  layoutId="education-track-pill"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 border border-orange-400/30 -z-10 shadow-sm shadow-orange-900/30"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              {t.higherEdBtn}
            </button>
          </div>
        </div>

        {/* Dual-Track Architectural View */}
        <div className="pt-12">
          <AnimatePresence mode="wait">
            {activeLayer === 'network' && (
              <motion.div
                key="network"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {/* TRACK 1: SMK NEGERI 1 BANYUWANGI (TJKT) */}
                <div className="rounded-2xl bg-[var(--bg-surface)] border border-purple-500/30 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 shadow-lg shadow-purple-950/5">
                  
                  <div className="space-y-4">
                    {/* Header Tag */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono font-semibold">
                        PHASE 01 // {t.vocationalTag.toUpperCase()}
                      </span>
                      <span className="text-xs font-mono text-[var(--text-dim)]">{smk.status[lang]}</span>
                    </div>

                    {/* Title & School */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] tracking-tight">{smk.institution}</h3>
                      <div className="text-purple-600 dark:text-purple-400 font-mono text-sm font-semibold mt-1">
                        {smk.program[lang]}
                      </div>
                      <div className="text-[var(--text-dim)] text-xs font-mono mt-0.5">{smk.department ? smk.department[lang] : ''}</div>
                    </div>

                    <p className="text-[var(--text-body)] text-sm sm:text-base leading-relaxed max-w-4xl">{smk.description[lang]}</p>

                    {/* Core Competencies Matrix */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono text-[var(--text-muted)] font-semibold uppercase tracking-wider flex items-center gap-2">
                        <Network className="w-3.5 h-3.5 text-purple-500" />
                        <span>{t.focusHeading}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        {smk.focusAreas[lang].map((area, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-body)] flex items-center gap-2.5"
                          >
                            <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                    <div className="text-[11px] font-mono text-[var(--text-muted)] font-semibold uppercase">
                      {t.highlightsHeading}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[var(--text-body)]">
                      {smk.highlights[lang].map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {activeLayer === 'application' && (
              <motion.div
                key="application"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {/* TRACK 2: POLITEKNIK NEGERI BANYUWANGI (TRK) */}
                <div className="rounded-2xl bg-[var(--bg-surface)] border border-orange-500/30 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 shadow-lg shadow-orange-950/5">
                  
                  <div className="space-y-4">
                    {/* Header Tag */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-mono font-semibold">
                        PHASE 02 // {t.higherEdTag.toUpperCase()}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{poliwangi.status[lang]}</span>
                      </span>
                    </div>

                    {/* Title & School */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] tracking-tight">{poliwangi.institution}</h3>
                      <div className="text-orange-500 font-mono text-sm font-semibold mt-1">
                        {poliwangi.program[lang]}
                      </div>
                      <div className="text-[var(--text-dim)] text-xs font-mono mt-0.5">{lang === 'id' ? 'Jurusan' : 'Department of'} {poliwangi.department ? poliwangi.department[lang] : ''}</div>
                    </div>

                    <p className="text-[var(--text-body)] text-sm sm:text-base leading-relaxed max-w-4xl">{poliwangi.description[lang]}</p>

                    {/* Core Competencies Matrix */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono text-[var(--text-muted)] font-semibold uppercase tracking-wider flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-orange-500" />
                        <span>{t.focusHeading}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        {poliwangi.focusAreas[lang].map((area, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-body)] flex items-center gap-2.5"
                          >
                            <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                    <div className="text-[11px] font-mono text-[var(--text-muted)] font-semibold uppercase">
                      {t.highlightsHeading}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[var(--text-body)]">
                      {poliwangi.highlights[lang].map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Synthesis Banner: Why the Dual Background Matters */}
        <div className="mt-10 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xs">
          <div className="space-y-1">
            <div className="text-xs font-mono text-orange-500 font-semibold uppercase">{t.synthesis1Title}</div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {t.synthesis1Desc}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono text-orange-500 font-semibold uppercase">{t.synthesis2Title}</div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {t.synthesis2Desc}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono text-orange-500 font-semibold uppercase">{t.synthesis3Title}</div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              {t.synthesis3Desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
