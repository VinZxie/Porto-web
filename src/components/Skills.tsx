import React, { useState } from 'react';
import { SKILLS_DATA, TECH_STACK_GROUPS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { Code2, Server, Database, Layout, Network, Cpu, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Skills: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].skills;

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code2 className="w-4 h-4" />,
    backend: <Server className="w-4 h-4" />,
    database: <Database className="w-4 h-4" />,
    uiux: <Layout className="w-4 h-4" />,
    networking: <Network className="w-4 h-4" />,
  };

  const selectedCategoryData = activeCategory ? SKILLS_DATA.find((c) => c.id === activeCategory) : null;

  const handleToggleCategory = (id: string) => {
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  return (
    <section id="skills" className="py-20 border-b border-[var(--border-main)] bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[var(--border-main)]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              {t.title}
            </h2>
            <p className="text-[var(--text-muted)] text-sm max-w-2xl font-normal">
              {t.subtitle}
            </p>
          </div>

          <div className="text-xs font-mono text-[var(--text-dim)] shrink-0">
            <span>DOMAINS: 5 &bull; TECHNOLOGIES: 25+</span>
          </div>
        </div>

        {/* Domain Selector ("Pilih Bidang Keahlian") */}
        <div className="pt-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>{t.selectDomain}</span>
            </div>
            <span className="text-[11px] font-mono text-[var(--text-dim)]">
              {activeCategory
                ? (lang === 'id' ? 'Klik lagi untuk menutup' : 'Click again to collapse')
                : (lang === 'id' ? 'Pilih salah satu untuk melihat rincian ↓' : 'Select one to view details ↓')}
            </span>
          </div>

          {/* 5 Domain Buttons with Sliding Pill Indicator */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {SKILLS_DATA.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleToggleCategory(cat.id)}
                  id={`skill-domain-${cat.id}`}
                  className={`relative p-3.5 sm:p-4 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer select-none group ${
                    isActive
                      ? 'bg-[var(--bg-elevated)] border-orange-500/60 text-[var(--text-main)] shadow-md shadow-orange-950/10'
                      : 'bg-[var(--bg-surface)] border-[var(--border-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-elevated)] hover:border-orange-500/30'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-skill-domain-pill"
                      className="absolute inset-0 rounded-xl bg-orange-500/[0.08] border border-orange-500/50 -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}

                  <div className="flex items-center justify-between w-full mb-3">
                    <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-orange-500/20 text-orange-500' : 'bg-[var(--bg-subtle)] text-[var(--text-dim)] group-hover:text-orange-500'}`}>
                      {categoryIcons[cat.id]}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180 text-orange-500' : 'text-[var(--text-dim)] group-hover:text-[var(--text-muted)]'}`} />
                  </div>

                  <div>
                    <div className={`text-xs sm:text-sm font-bold tracking-tight leading-snug line-clamp-2 ${isActive ? 'text-[var(--text-main)]' : 'text-[var(--text-body)]'}`}>
                      {cat.title[lang]}
                    </div>
                    <div className="text-[11px] font-mono text-[var(--text-dim)] mt-1">
                      {cat.skills.length} {t.proficienciesCount}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Smooth Dropdown / Slide-Down Explanation Panel */}
          <AnimatePresence mode="wait">
            {selectedCategoryData && (
              <motion.div
                key={selectedCategoryData.id}
                initial={{ opacity: 0, y: -24, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden pt-2"
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-orange-500/35 space-y-6 shadow-xl shadow-orange-950/5 relative">
                  
                  {/* Explanation Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
                    <div className="flex items-start sm:items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-orange-500/15 text-orange-500 border border-orange-500/25 shrink-0">
                        {categoryIcons[selectedCategoryData.id]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-[var(--text-main)] tracking-tight">
                            {selectedCategoryData.title[lang]}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-md bg-[var(--bg-elevated)] text-orange-500 text-xs font-mono border border-[var(--border-subtle)] font-semibold">
                            {selectedCategoryData.skills.length} Tools
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 max-w-3xl leading-relaxed">
                          {selectedCategoryData.description[lang]}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveCategory(null)}
                      className="self-end sm:self-auto px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] hover:bg-orange-500/15 border border-[var(--border-subtle)] hover:border-orange-500/30 text-xs font-mono text-[var(--text-muted)] hover:text-orange-500 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                      title={lang === 'id' ? 'Tutup Penjelasan' : 'Close Details'}
                    >
                      <span>{lang === 'id' ? 'Tutup' : 'Close'}</span>
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {selectedCategoryData.skills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: idx * 0.035 }}
                        className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-orange-500/35 transition-all space-y-1.5 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-[var(--text-main)] font-mono group-hover:text-orange-500 transition-colors">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-xs shadow-emerald-500/50" />
                        </div>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed font-sans">
                          {skill.focus[lang]}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Global Tech Stack Taxonomy */}
        <div className="mt-16 pt-12 border-t border-[var(--border-main)] space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[var(--text-main)] tracking-tight flex items-center gap-2">
              <span className="text-orange-500 font-mono">//</span>
              <span>{t.taxonomyTitle}</span>
            </h3>
            <span className="text-xs font-mono text-[var(--text-dim)]">6 Stack Groups</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_STACK_GROUPS.map((group, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] space-y-3 shadow-xs"
              >
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-main)] font-mono">{group.category[lang]}</h4>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{group.description[lang]}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] text-[11px] font-mono text-[var(--text-body)] border border-[var(--border-subtle)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
