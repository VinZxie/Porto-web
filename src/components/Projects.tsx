import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { 
  Layers, 
  Search, 
  ArrowUpRight,
  ExternalLink,
  Github,
  Activity,
  Server,
  Zap
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].projects;

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectProject, setInspectProject] = useState<ProjectItem | null>(null);
  const [activeSimulationTab, setActiveSimulationTab] = useState<Record<string, 'preview' | 'code'>>({
    'aura-dashboard': 'preview',
    'quiz-coding': 'preview',
    'agritrack': 'preview',
    'calculator-subnetmask': 'preview',
    'network-monitoring-system': 'preview'
  });

  const categories = [
    { key: 'All', label: t.filterAll },
    { key: 'Networking', label: t.filterNetworking },
    { key: 'Dashboard', label: t.filterDashboard },
    { key: 'Education', label: t.filterEducation },
    { key: 'Web', label: t.filterWeb },
    { key: 'Tools', label: t.filterTools },
    { key: 'Frontend', label: 'Frontend' },
    { key: 'AI', label: t.filterAI },
  ];

  // 5 Featured projects with AURA Dashboard at the helm
  const featuredProjectIds = ['aura-dashboard', 'quiz-coding', 'agritrack', 'calculator-subnetmask', 'network-monitoring-system'];
  const featuredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => featuredProjectIds.includes(p.id));
  }, []);

  // Filtered all projects
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const desc = p.shortDescription[lang].toLowerCase();
      const title = p.title.toLowerCase();
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        title.includes(query) ||
        desc.includes(query) ||
        p.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        p.technologies.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, lang]);

  return (
    <section id="projects" className="py-20 border-b border-[var(--border-main)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-[var(--border-main)]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              {t.title}
            </h2>
            <p className="text-[var(--text-muted)] text-sm max-w-2xl font-normal">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-surface)] px-4 py-2 rounded-xl border border-[var(--border-card)] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>11 PROJECTS &bull; VERIFIED</span>
          </div>
        </div>

        {/* Featured Case Studies */}
        <div className="py-12 space-y-12">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[var(--text-main)] tracking-tight flex items-center gap-2">
              <span className="text-orange-500 font-mono">01.</span>
              <span>{lang === 'id' ? 'Studi Kasus Rekayasa Utama' : 'Featured Architectural Deep-Dives'}</span>
            </h3>
            <span className="text-xs font-mono text-[var(--text-dim)]">{featuredProjects.length} Flagship Systems</span>
          </div>

          <div className="space-y-10">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                id={`featured-${project.id}`}
                className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] overflow-hidden hover:border-orange-500/40 transition-all shadow-md"
              >
                {/* Top Bar */}
                <div className="bg-[var(--bg-elevated)] px-5 py-3 border-b border-[var(--border-card)] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-orange-500">
                      CASE_0{index + 1}
                    </span>
                    <span className="text-[var(--text-dim)]">/</span>
                    <span className="text-xs font-mono text-[var(--text-main)] font-semibold">{project.title}</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--bg-subtle)] text-[10px] font-mono text-[var(--text-muted)]">
                      {project.categoryLabel[lang]}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/35 hover:border-orange-500/60 text-orange-600 dark:text-orange-400 text-xs font-mono font-semibold transition-all backdrop-blur-md shadow-xs"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] hover:bg-orange-500/10 border border-orange-500/20 hover:border-orange-500/45 text-[var(--text-main)] hover:text-orange-500 text-xs font-mono font-semibold transition-all backdrop-blur-md"
                      >
                        <Github className="w-3 h-3 text-orange-500" />
                        <span>Source</span>
                      </a>
                    )}
                    <button
                      onClick={() => setInspectProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/25 hover:border-orange-500/50 text-orange-600 dark:text-orange-400 text-xs font-mono font-semibold transition-all backdrop-blur-md cursor-pointer"
                    >
                      <span>{lang === 'id' ? 'Detail Spesifikasi' : 'Inspect Specs'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-card)]">
                  
                  {/* Left Column: Problem, Solution & Stack Matrix */}
                  <div className="lg:col-span-7 p-6 sm:p-7 space-y-5">
                    <div>
                      <h4 className="text-xl font-bold text-[var(--text-main)] tracking-tight">{project.title}</h4>
                      <p className="text-[var(--text-body)] text-sm mt-1.5 leading-relaxed">{project.shortDescription[lang]}</p>
                    </div>

                    {/* Quick Metadata: Type, Purpose, Role */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px]">
                      <div className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                        <span className="text-[9px] text-[var(--text-dim)] uppercase block font-semibold">
                          {lang === 'id' ? 'Tipe' : 'Type'}
                        </span>
                        <span className="text-[var(--text-main)] font-semibold truncate block">
                          {project.projectType ? project.projectType[lang] : project.categoryLabel[lang]}
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                        <span className="text-[9px] text-[var(--text-dim)] uppercase block font-semibold">
                          {lang === 'id' ? 'Tujuan' : 'Purpose'}
                        </span>
                        <span className="text-[var(--text-main)] font-semibold truncate block">
                          {project.purpose ? project.purpose[lang] : (lang === 'id' ? 'Monitoring & Rekayasa' : 'Monitoring & Engineering')}
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                        <span className="text-[9px] text-[var(--text-dim)] uppercase block font-semibold">
                          {lang === 'id' ? 'Peran' : 'Role'}
                        </span>
                        <span className="text-orange-500 font-semibold truncate block">
                          {project.role ? project.role[lang] : 'Full Stack Development'}
                        </span>
                      </div>
                    </div>

                    {/* Challenge vs Solution */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.problemStatement && (
                        <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                          <div className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-wider">
                            {t.theChallenge}
                          </div>
                          <p className="text-xs text-[var(--text-body)] leading-relaxed">{project.problemStatement[lang]}</p>
                        </div>
                      )}

                      {project.solutionNarrative && (
                        <div className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1">
                          <div className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-wider">
                            {t.engineeringApproach}
                          </div>
                          <p className="text-xs text-[var(--text-body)] leading-relaxed">{project.solutionNarrative[lang]}</p>
                        </div>
                      )}
                    </div>

                    {/* Feature to Stack Table */}
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-[var(--text-muted)] font-semibold uppercase tracking-wider">
                        {t.featureMapping}
                      </div>
                      <div className="rounded-xl border border-[var(--border-card)] overflow-hidden bg-[var(--bg-surface)]">
                        <table className="w-full text-left text-xs">
                          <tbody className="divide-y divide-[var(--border-subtle)]">
                            {project.techStackDetailed.map((mapping, idx) => (
                              <tr key={idx} className="hover:bg-[var(--bg-elevated)] transition-colors">
                                <td className="py-2 px-3 font-medium text-[var(--text-main)] text-xs w-1/3">
                                  {mapping.feature[lang]}
                                </td>
                                <td className="py-2 px-3 text-orange-500 font-mono font-semibold text-[11px] w-1/4">
                                  {mapping.tech}
                                </td>
                                <td className="py-2 px-3 text-[var(--text-muted)] text-[11px]">
                                  {mapping.detail[lang]}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Tags & Action Buttons */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md bg-[var(--bg-elevated)] text-[var(--text-muted)] text-xs font-mono border border-[var(--border-subtle)]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        {project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/35 hover:border-orange-500/60 text-orange-600 dark:text-orange-400 text-xs font-mono font-semibold transition-all backdrop-blur-md shadow-xs"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] hover:bg-orange-500/10 border border-orange-500/20 hover:border-orange-500/45 text-[var(--text-main)] hover:text-orange-500 text-xs font-mono font-semibold transition-all backdrop-blur-md"
                          >
                            <Github className="w-3.5 h-3.5 text-orange-500" />
                            <span>Source Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Live Simulation / Code Schema */}
                  <div className="lg:col-span-5 p-6 sm:p-7 bg-[var(--bg-elevated)] flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-[var(--border-card)] pb-2">
                        <span className="text-xs font-mono text-[var(--text-muted)] uppercase">{t.interactiveSim}</span>
                        <div className="flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.04] p-1 rounded-lg border border-orange-500/25 backdrop-blur-md relative">
                          <button
                            type="button"
                            onClick={() => setActiveSimulationTab((prev) => ({ ...prev, [project.id]: 'preview' }))}
                            className={`relative px-3 py-1 rounded-md text-[10px] font-mono transition-colors select-none z-10 cursor-pointer ${
                              (activeSimulationTab[project.id] || 'preview') === 'preview'
                                ? 'text-orange-600 dark:text-orange-400 font-bold'
                                : 'text-[var(--text-muted)] hover:text-orange-500'
                            }`}
                          >
                            {(activeSimulationTab[project.id] || 'preview') === 'preview' && (
                              <motion.div
                                layoutId={`sim-tab-pill-${project.id}`}
                                className="absolute inset-0 rounded-md bg-orange-500/20 border border-orange-500/40 backdrop-blur-md shadow-xs -z-10"
                                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                              />
                            )}
                            UI View
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveSimulationTab((prev) => ({ ...prev, [project.id]: 'code' }))}
                            className={`relative px-3 py-1 rounded-md text-[10px] font-mono transition-colors select-none z-10 cursor-pointer ${
                              activeSimulationTab[project.id] === 'code'
                                ? 'text-orange-600 dark:text-orange-400 font-bold'
                                : 'text-[var(--text-muted)] hover:text-orange-500'
                            }`}
                          >
                            {activeSimulationTab[project.id] === 'code' && (
                              <motion.div
                                layoutId={`sim-tab-pill-${project.id}`}
                                className="absolute inset-0 rounded-md bg-orange-500/20 border border-orange-500/40 backdrop-blur-md shadow-xs -z-10"
                                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                              />
                            )}
                            Architecture
                          </button>
                        </div>
                      </div>

                      {/* Interactive preview box */}
                      <AnimatePresence mode="wait">
                        {(activeSimulationTab[project.id] || 'preview') === 'preview' ? (
                          <motion.div
                            key="preview"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.18 }}
                            className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-card)] space-y-3"
                          >
                          {/* AURA Dashboard Interactive Preview */}
                          {project.id === 'aura-dashboard' && (
                            <div className="space-y-3 text-xs">
                              {/* Top Bar */}
                              <div className="flex items-center justify-between text-[11px] font-mono border-b border-[var(--border-subtle)] pb-2">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                  <span className="font-bold text-[var(--text-main)]">AURA CENTRAL OPS</span>
                                </div>
                                <span className="text-orange-500 font-semibold">{lang === 'id' ? 'Uptime: 99.98%' : 'Uptime: 99.98%'}</span>
                              </div>

                              {/* Central Metrics Grid */}
                              <div className="grid grid-cols-3 gap-2 font-mono">
                                <div className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                                  <div className="text-[9px] text-[var(--text-dim)] uppercase tracking-wider">{lang === 'id' ? 'Throughput' : 'Throughput'}</div>
                                  <div className="text-xs sm:text-sm font-bold text-[var(--text-main)] mt-0.5">142.8K</div>
                                  <div className="text-[9px] text-emerald-500 font-semibold">+12.4%</div>
                                </div>
                                <div className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                                  <div className="text-[9px] text-[var(--text-dim)] uppercase tracking-wider">{lang === 'id' ? 'Latency' : 'Latency'}</div>
                                  <div className="text-xs sm:text-sm font-bold text-orange-500 mt-0.5">16ms</div>
                                  <div className="text-[9px] text-[var(--text-muted)]">Real-time</div>
                                </div>
                                <div className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-center">
                                  <div className="text-[9px] text-[var(--text-dim)] uppercase tracking-wider">{lang === 'id' ? 'Aktif' : 'Active Nodes'}</div>
                                  <div className="text-xs sm:text-sm font-bold text-emerald-500 mt-0.5">8 Nodes</div>
                                  <div className="text-[9px] text-[var(--text-muted)]">Cluster OK</div>
                                </div>
                              </div>

                              {/* Real-time Activity Logs Stream */}
                              <div className="space-y-1.5">
                                <div className="text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-wider font-semibold">
                                  {lang === 'id' ? 'Log Aktivitas Terpusat' : 'Central Activity Stream'}
                                </div>
                                <div className="space-y-1 font-mono text-[10px]">
                                  <div className="p-1.5 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
                                    <span className="text-[var(--text-main)] truncate">[02m] Metrics synced: Cluster Alpha (CPU: 28%)</span>
                                    <span className="text-emerald-500 font-semibold shrink-0 ml-2">SYNCED</span>
                                  </div>
                                  <div className="p-1.5 rounded bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
                                    <span className="text-[var(--text-main)] truncate">[07m] Security: Session token renewed</span>
                                    <span className="text-blue-500 font-semibold shrink-0 ml-2">AUTH</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.id === 'quiz-coding' && (
                            <div className="space-y-3 text-xs">
                              <div className="flex items-center justify-between text-[var(--text-muted)] font-mono text-[11px]">
                                <span>{lang === 'id' ? 'SESI: Dasar TypeScript' : 'SESSION: TypeScript Basics'}</span>
                                <span className="text-orange-500 font-semibold">{lang === 'id' ? 'Waktu: 00:24' : 'Timer: 00:24'}</span>
                              </div>
                              <div className="p-3 bg-[var(--bg-elevated)] rounded-lg border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-main)]">
                                <span className="text-blue-500 font-semibold">type</span> Subnet = &#123; mask: <span className="text-emerald-500 font-semibold">string</span>; hosts: <span className="text-orange-500 font-semibold">number</span> &#125;;
                              </div>
                              <div className="space-y-1.5">
                                <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-300 font-mono text-xs flex justify-between">
                                  <span>[A] {lang === 'id' ? 'Static typing untuk pipeline data terprediksi' : 'Static typing for predictable data pipelines'}</span>
                                  <span className="text-emerald-500 font-bold">&#10003; {lang === 'id' ? 'Benar' : 'Correct'}</span>
                                </div>
                                <div className="p-2 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-muted)] font-mono text-xs">
                                  <span>[B] {lang === 'id' ? 'Evaluasi runtime saja' : 'Runtime only evaluation'}</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.id === 'agritrack' && (
                            <div className="space-y-3 text-xs">
                              <div className="flex items-center justify-between text-[var(--text-muted)] font-mono text-[11px]">
                                <span>{lang === 'id' ? 'LAHAN: Sektor Utara Padi #4' : 'PLOT: North Sector Paddy #4'}</span>
                                <span className="text-emerald-500 font-semibold">{lang === 'id' ? 'Telemetri: Normal' : 'Telemetry: Normal'}</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 font-mono">
                                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                                  <div className="text-[10px] text-[var(--text-dim)]">{lang === 'id' ? 'KELEMBAPAN TANAH' : 'SOIL MOISTURE'}</div>
                                  <div className="text-base font-bold text-[var(--text-main)]">68.4 %</div>
                                </div>
                                <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                                  <div className="text-[10px] text-[var(--text-dim)]">{lang === 'id' ? 'ESTIMASI PANEN' : 'EST. YIELD'}</div>
                                  <div className="text-base font-bold text-orange-500">4.2 Ton</div>
                                </div>
                              </div>
                              <div className="p-2 bg-[var(--bg-elevated)] rounded-lg border border-[var(--border-subtle)] font-mono text-[10px] text-[var(--text-body)] flex justify-between">
                                <span>{lang === 'id' ? 'SIKLUS TANAM: Fase 3' : 'HARVEST CYCLE: Stage 3'}</span>
                                <span className="text-emerald-500 font-semibold">{lang === 'id' ? 'Tepat Waktu' : 'On Schedule'}</span>
                              </div>
                            </div>
                          )}

                          {project.id === 'calculator-subnetmask' && (
                            <div className="space-y-2.5 text-xs font-mono">
                              <div className="flex justify-between text-[11px] text-[var(--text-muted)]">
                                <span>TARGET: 10.20.0.0/22</span>
                                <span className="text-orange-500 font-semibold">Class A CIDR</span>
                              </div>
                              <div className="p-2.5 bg-[var(--bg-elevated)] rounded-lg border border-[var(--border-subtle)] space-y-1 text-[11px]">
                                <div className="flex justify-between">
                                  <span className="text-[var(--text-dim)]">Subnet Mask:</span>
                                  <span className="text-[var(--text-main)] font-semibold">255.255.252.0</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-[var(--text-dim)]">{lang === 'id' ? 'Host Usable:' : 'Usable Hosts:'}</span>
                                  <span className="text-emerald-500 font-bold">1,022 Hosts</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-[var(--text-dim)]">Broadcast:</span>
                                  <span className="text-orange-500 font-semibold">10.20.3.255</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.id === 'network-monitoring-system' && (
                            <div className="space-y-2.5 text-xs font-mono">
                              <div className="flex justify-between text-[11px] text-[var(--text-muted)]">
                                <span>ROUTER: MikroTik RB4011</span>
                                <span className="text-emerald-500 font-bold">SNMP: 200 OK</span>
                              </div>
                              <div className="space-y-1.5">
                                <div className="p-2 bg-[var(--bg-elevated)] rounded-lg border border-[var(--border-subtle)] flex items-center justify-between text-[11px]">
                                  <span className="text-[var(--text-main)]">ether1 (WAN Gateway)</span>
                                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">LINK UP</span>
                                </div>
                                <div className="p-2 bg-[var(--bg-elevated)] rounded-lg border border-[var(--border-subtle)] flex items-center justify-between text-[11px]">
                                  <span className="text-[var(--text-main)]">ether2 (VLAN 10 Core)</span>
                                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">LINK UP</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="code"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.18 }}
                          className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-card)] font-mono text-[11px] text-[var(--text-body)] space-y-1.5"
                        >
                          <div className="text-orange-500 font-semibold">// Architecture &amp; Data Pipeline</div>
                          <div className="text-[var(--text-body)]">{project.architectureSummary ? project.architectureSummary[lang] : ''}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                    <div className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-card)] flex items-center justify-between">
                      <span className="text-xs text-[var(--text-muted)] font-mono">Status: {project.status[lang]}</span>
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-xs text-orange-500 hover:text-orange-600 font-mono font-semibold flex items-center gap-1"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Repository Index */}
        <div className="pt-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[var(--text-main)] tracking-tight flex items-center gap-2">
                <span className="text-orange-500 font-mono">02.</span>
                <span>{t.allProjectsHeader}</span>
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                {lang === 'id' ? '11 Proyek lengkap lintas Web, Jaringan, Dasbor, AI, dan Perkakas.' : '11 Projects across Web, Networking, Dashboards, AI, and Tools.'}
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[var(--text-dim)] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-[var(--bg-surface)] border border-[var(--border-card)] rounded-xl pl-9 pr-3.5 py-2 text-xs text-[var(--text-main)] focus:outline-none focus:border-orange-500/50 font-mono"
              />
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => {
              const count =
                cat.key === 'All'
                  ? PROJECTS_DATA.length
                  : PROJECTS_DATA.filter((p) => p.category === cat.key).length;
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-orange-500/15 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-semibold border border-orange-500/40 backdrop-blur-md shadow-xs'
                      : 'bg-black/[0.03] dark:bg-white/[0.04] text-[var(--text-muted)] hover:text-orange-500 border border-black/10 dark:border-white/10 hover:border-orange-500/30'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-orange-500/25 text-orange-600 dark:text-orange-400 font-bold' : 'bg-black/10 dark:bg-white/10 text-[var(--text-dim)]'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Projects Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                id={`project-card-${proj.id}`}
                onClick={() => setInspectProject(proj)}
                className="cursor-pointer group p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] hover:border-orange-500/40 hover:bg-[var(--bg-elevated)] transition-all flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div className="space-y-3">
                  {/* Card Header & Status */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[11px] font-mono text-orange-500 font-semibold">
                      {proj.categoryLabel[lang]}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-dim)] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{proj.status[lang]}</span>
                    </span>
                  </div>

                  {/* Visual Preview / Mockup Widget */}
                  {proj.id === 'aura-dashboard' ? (
                    <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2 font-mono">
                      <div className="flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[var(--text-main)] font-bold">AURA VIEWPORT</span>
                        </div>
                        <span className="text-[10px] text-orange-500 font-semibold">Live 99.98%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                        <div className="p-1.5 rounded bg-[var(--bg-surface)] border border-[var(--border-card)]">
                          <span className="text-[var(--text-dim)] block text-[9px]">OPS / SEC</span>
                          <span className="text-emerald-500 font-bold">142.8K</span>
                        </div>
                        <div className="p-1.5 rounded bg-[var(--bg-surface)] border border-[var(--border-card)]">
                          <span className="text-[var(--text-dim)] block text-[9px]">LATENCY</span>
                          <span className="text-orange-500 font-bold">16ms</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-between font-mono text-[10px] text-[var(--text-dim)]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-orange-500" />
                        <span className="text-[var(--text-muted)] font-semibold">{proj.projectType ? proj.projectType[lang] : proj.categoryLabel[lang]}</span>
                      </span>
                      <span className="text-orange-500">{proj.role ? proj.role[lang] : 'Full Stack'}</span>
                    </div>
                  )}

                  <div>
                    <h4 className="text-base font-bold text-[var(--text-main)] group-hover:text-orange-500 transition-colors flex items-center justify-between">
                      <span>{proj.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-[var(--text-dim)] group-hover:text-orange-500 transition-colors shrink-0 ml-1" />
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-1.5 line-clamp-2 leading-relaxed">
                      {proj.shortDescription[lang]}
                    </p>
                  </div>

                  {/* Metadata Type & Role Pill if AURA */}
                  {proj.id === 'aura-dashboard' && (
                    <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 font-semibold">
                        Type: Web Dashboard
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                        Role: Frontend &amp; Full Stack
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] space-y-2.5">
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1">
                    {proj.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[10px] font-mono text-[var(--text-muted)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] text-[10px] font-mono text-[var(--text-dim)]">
                        +{proj.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons: Live Demo, Source Code, and Specs */}
                  <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                    <div className="flex items-center gap-1.5">
                      {proj.liveDemoUrl && (
                        <a
                          href={proj.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-[10px] font-semibold transition-all backdrop-blur-md shadow-xs"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] hover:bg-[var(--bg-subtle)] border border-[var(--border-card)] text-[var(--text-main)] text-[10px] font-semibold transition-colors"
                        >
                          <Github className="w-2.5 h-2.5 text-orange-500" />
                          <span>Source</span>
                        </a>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-[var(--text-dim)] group-hover:text-orange-500 transition-colors">
                      <span className="text-[10px]">{lang === 'id' ? 'Detail Proyek' : 'Details'}</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="p-12 text-center rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] space-y-2">
              <p className="text-[var(--text-muted)] text-sm font-mono">
                {lang === 'id'
                  ? `Tidak ada proyek yang sesuai dengan "${searchQuery}".`
                  : `No projects found matching "${searchQuery}".`}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/35 hover:border-orange-500/60 text-orange-600 dark:text-orange-400 text-xs font-mono font-semibold transition-all backdrop-blur-md shadow-xs cursor-pointer"
              >
                {lang === 'id' ? 'Reset Pencarian' : 'Reset Filters'}
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Project Deep Architecture Modal */}
      <AnimatePresence>
        {inspectProject && (
          <ProjectModal
            project={inspectProject}
            onClose={() => setInspectProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
