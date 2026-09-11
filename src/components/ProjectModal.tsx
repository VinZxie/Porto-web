import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { X, Layers, CheckCircle, ExternalLink, Github, Target, Wrench, AlertTriangle, Lightbulb } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].projects;

  // Lock background scroll while modal is open & listen for ESC key
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const shortDesc = project.shortDescription ? project.shortDescription[lang] : '';
  const overviewText = project.overview ? project.overview[lang] : shortDesc;
  const projectGoals = project.projectGoals ? project.projectGoals[lang] : undefined;
  const devChallenges = project.developmentChallenges ? project.developmentChallenges[lang] : (project.problemStatement ? project.problemStatement[lang] : undefined);
  const devSolutions = project.developmentSolutions ? project.developmentSolutions[lang] : (project.solutionNarrative ? project.solutionNarrative[lang] : undefined);
  const features = project.keyFeatures ? (project.keyFeatures[lang] || []) : [];
  const architecture = project.architectureSummary ? project.architectureSummary[lang] : undefined;
  const categoryStr = project.categoryLabel ? project.categoryLabel[lang] : project.category;
  const statusStr = project.status ? project.status[lang] : (lang === 'id' ? 'Selesai' : 'Completed');
  const projectType = project.projectType ? project.projectType[lang] : (project.category === 'Dashboard' ? 'Web Dashboard' : 'Software System');
  const projectPurpose = project.purpose ? project.purpose[lang] : (lang === 'id' ? 'Pemantauan & Rekayasa Perangkat Lunak' : 'Monitoring & Software Engineering');
  const projectRole = project.role ? project.role[lang] : (lang === 'id' ? 'Frontend & Full Stack Development' : 'Frontend & Full Stack Development');

  const modalContent = (
    <div
      id="project-detail-modal-portal"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
        onClick={onClose}
      />

      {/* Modal Dialog Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 28, stiffness: 350 }}
        className="relative w-full max-w-3xl bg-[var(--bg-surface)] border border-orange-500/35 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header (Fixed/Sticky) */}
        <div className="bg-[var(--bg-elevated)] px-5 sm:px-6 py-3.5 border-b border-[var(--border-card)] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-mono font-semibold">
              {categoryStr}
            </span>
            <span className="text-[var(--text-dim)] text-xs font-mono hidden sm:inline">ID: {project.id}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-[var(--text-muted)] font-mono">{statusStr}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] hover:bg-orange-500/20 hover:text-orange-500 text-[var(--text-muted)] transition-colors cursor-pointer border border-transparent hover:border-orange-500/30"
            aria-label={t.closeModal}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1">
          {/* Title & External Links */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] tracking-tight">
                {project.title}
              </h2>
              {/* Quick external links */}
              <div className="flex items-center gap-2">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/35 hover:border-orange-500/60 text-orange-600 dark:text-orange-400 text-xs font-semibold font-mono transition-all backdrop-blur-md shadow-xs"
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] hover:bg-orange-500/10 border border-orange-500/20 hover:border-orange-500/45 text-[var(--text-main)] hover:text-orange-500 text-xs font-semibold font-mono transition-all backdrop-blur-md"
                  >
                    <Github className="w-3.5 h-3.5 text-orange-500" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Quick Metadata Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <span className="text-[10px] text-[var(--text-dim)] uppercase block font-semibold">
                  {lang === 'id' ? 'Tipe Proyek' : 'Project Type'}
                </span>
                <span className="text-[var(--text-main)] font-semibold mt-0.5 block">{projectType}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <span className="text-[10px] text-[var(--text-dim)] uppercase block font-semibold">
                  {lang === 'id' ? 'Tujuan (Purpose)' : 'Core Purpose'}
                </span>
                <span className="text-[var(--text-main)] font-semibold mt-0.5 block truncate">{projectPurpose}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                <span className="text-[10px] text-[var(--text-dim)] uppercase block font-semibold">
                  {lang === 'id' ? 'Peran Saya' : 'My Role'}
                </span>
                <span className="text-orange-500 font-semibold mt-0.5 block">{projectRole}</span>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
            <div className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Overview Proyek' : 'Project Overview'}</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">{overviewText}</p>
          </div>

          {/* Tujuan Proyek (Project Goals) */}
          {projectGoals && (
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
              <div className="text-xs font-mono text-blue-500 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Tujuan Proyek' : 'Project Goals'}</span>
              </div>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">{projectGoals}</p>
            </div>
          )}

          {/* Tantangan vs Solusi Saat Development */}
          {(devChallenges || devSolutions) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {devChallenges && (
                <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                  <div className="text-xs font-mono text-amber-500 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? 'Tantangan Development' : 'Development Challenges'}</span>
                  </div>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed">{devChallenges}</p>
                </div>
              )}
              {devSolutions && (
                <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                  <div className="text-xs font-mono text-emerald-500 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? 'Solusi yang Dibuat' : 'Solutions Engineered'}</span>
                  </div>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed">{devSolutions}</p>
                </div>
              )}
            </div>
          )}

          {/* Fitur Utama */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
              <span>{lang === 'id' ? 'Fitur Utama' : t.keyCapabilities}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-body)] flex items-start gap-2.5"
                >
                  <span className="text-orange-500 font-mono font-bold mt-0.5">0{idx + 1}.</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature to Tech Stack Detailed Mapping Table */}
          {project.techStackDetailed && project.techStackDetailed.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-orange-500" />
                <span>{lang === 'id' ? 'Teknologi & Implementasi' : t.featureMapping}</span>
              </h3>
              <div className="rounded-xl border border-[var(--border-card)] overflow-hidden bg-[var(--bg-surface)]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[var(--bg-elevated)] text-[var(--text-muted)] font-mono text-[11px] border-b border-[var(--border-card)]">
                    <tr>
                      <th className="py-2.5 px-3 font-semibold">{t.tableSubsystem}</th>
                      <th className="py-2.5 px-3 font-semibold">{t.tableTech}</th>
                      <th className="py-2.5 px-3 font-semibold">{t.tableDetail}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-body)] font-sans">
                    {project.techStackDetailed.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[var(--bg-elevated)] transition-colors">
                        <td className="py-2.5 px-3 font-medium text-[var(--text-main)]">{item.feature[lang]}</td>
                        <td className="py-2.5 px-3 font-mono text-orange-500 font-semibold text-[11px]">{item.tech}</td>
                        <td className="py-2.5 px-3 text-[var(--text-muted)] text-xs">{item.detail[lang]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Architecture Summary */}
          {architecture && (
            <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1.5">
              <div className="text-[11px] font-mono text-[var(--text-muted)] font-semibold uppercase">
                {t.archDiagram}
              </div>
              <p className="text-xs text-[var(--text-body)] font-mono">{architecture}</p>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] text-[var(--text-muted)] text-[11px] font-mono border border-[var(--border-subtle)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Bottom Footer (Fixed/Sticky) */}
        <div className="bg-[var(--bg-elevated)] px-5 sm:px-6 py-3 border-t border-[var(--border-card)] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/35 hover:border-orange-500/60 text-orange-600 dark:text-orange-400 text-xs font-semibold font-mono transition-all backdrop-blur-md shadow-xs"
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] hover:bg-orange-500/10 border border-orange-500/20 hover:border-orange-500/45 text-[var(--text-main)] hover:text-orange-500 text-xs font-semibold font-mono transition-all backdrop-blur-md"
              >
                <Github className="w-3.5 h-3.5 text-orange-500" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/35 text-orange-600 dark:text-orange-400 text-xs font-mono font-semibold transition-all cursor-pointer"
          >
            {t.modalDoneBtn}
          </button>
        </div>
      </motion.div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
