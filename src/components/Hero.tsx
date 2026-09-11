import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { 
  ExternalLink, 
  MapPin,
  Code2,
  Server,
  Database,
  Network
} from 'lucide-react';
import { VLogo } from './VLogo';

interface HeroProps {
  activeSlide?: 'projects' | 'subnet';
  onSelectSlide?: (slide: 'projects' | 'subnet') => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].hero;

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[var(--border-main)] overflow-hidden"
    >
      {/* Architectural subtle ambient background grid & radial glow */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Signature Greeting & Typographic Hallmark */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Elegant Minimalist V Logo Emblem & Status Eyebrow */}
            <div className="flex items-center gap-3">
              <div
                id="hero-v-logo-mark"
                className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[var(--bg-surface)] border border-orange-500/30 hover:border-orange-500/60 shadow-xs transition-all duration-300 hover:scale-105 select-none shrink-0 cursor-default"
                title="VinnZxie // Monogram"
              >
                <span className="absolute -inset-0.5 rounded-xl bg-orange-500/15 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 pointer-events-none" />
                <VLogo className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-orange-500 group-hover:text-orange-400 transition-colors" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-md border border-orange-500/25 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[var(--text-muted)]">{t.greetingPrefix}</span>
                <span className="text-[var(--text-dim)]">&bull;</span>
                <span className="text-orange-500 font-semibold font-mono">@vinzxie</span>
              </div>
            </div>

            {/* Creative Spotlighted Editorial Serif Name Display */}
            <div className="space-y-3">
              <h1 className="font-signature text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[var(--text-main)] leading-[1.08] select-none">
                {/* Spotlighted "Alvin" with soft ambient aura and artisanal signature flourish */}
                <span className="relative inline-block mr-2.5 sm:mr-3.5 group cursor-default">
                  {/* Soft ambient spotlight aura */}
                  <span className="absolute -inset-x-2.5 -inset-y-1.5 bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-xl pointer-events-none -z-10 group-hover:bg-orange-500/25 transition-all duration-300" />
                  
                  {/* Distinctive italic signature focus */}
                  <span className="relative z-10 italic text-orange-600 dark:text-orange-400 group-hover:text-orange-500 transition-colors">
                    Alvin
                  </span>

                  {/* Artisanal monoline signature flourish */}
                  <svg
                    className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-3 text-orange-500/80 pointer-events-none transition-transform duration-300 group-hover:scale-x-105"
                    viewBox="0 0 100 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9 C 28 2, 72 2, 98 9"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                {/* Grounding surname */}
                <span className="text-[var(--text-main)]">
                  Nuril Iqbal
                </span>
                <span className="text-orange-500 inline-block font-sans font-bold ml-1 text-3xl sm:text-4xl lg:text-5xl">.</span>
              </h1>
              
              {/* Refined Academic & Engineering Credential */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-mono text-[var(--text-muted)]">
                <span className="px-2.5 py-0.5 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400 font-semibold border border-orange-500/20 text-xs tracking-wide">
                  TRK Poliwangi
                </span>
                <span className="text-[var(--text-dim)]">&bull;</span>
                <span className="text-[var(--text-body)] font-medium">
                  {t.greetingRole}
                </span>
              </div>
            </div>

            {/* Clear Bio Narrative */}
            <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed max-w-2xl">
              {t.introParagraph}
            </p>

            {/* Core Metrics Matrix (Clean 3-Box Layout, Clean Transparent Glass with Orange Accent) */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="p-3.5 rounded-xl bg-orange-500/[0.03] backdrop-blur-md border border-orange-500/20 hover:border-orange-500/45 transition-colors select-none"
              >
                <div className="text-2xl font-bold font-mono text-[var(--text-main)]">11</div>
                <div className="text-xs font-semibold text-[var(--text-main)] mt-0.5">{t.stats.projects}</div>
                <div className="text-[10px] text-[var(--text-dim)] font-mono">{t.stats.projectsSub}</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="p-3.5 rounded-xl bg-orange-500/[0.03] backdrop-blur-md border border-orange-500/20 hover:border-orange-500/45 transition-colors select-none"
              >
                <div className="text-2xl font-bold font-mono text-orange-500">Dual</div>
                <div className="text-xs font-semibold text-[var(--text-main)] mt-0.5">{t.stats.dualPath}</div>
                <div className="text-[10px] text-[var(--text-dim)] font-mono">{t.stats.dualPathSub}</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="p-3.5 rounded-xl bg-orange-500/[0.03] backdrop-blur-md border border-orange-500/20 hover:border-orange-500/45 transition-colors select-none"
              >
                <div className="text-2xl font-bold font-mono text-[var(--text-main)]">25+</div>
                <div className="text-xs font-semibold text-[var(--text-main)] mt-0.5">{t.stats.techStack}</div>
                <div className="text-[10px] text-[var(--text-dim)] font-mono">{t.stats.techStackSub}</div>
              </motion.div>
            </div>

            {/* Verification & Location Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-dim)] border-t border-[var(--border-subtle)]">
              <span className="flex items-center gap-1.5 text-[var(--text-body)]">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>{t.location}</span>
              </span>
              <span>&bull;</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--text-body)] hover:text-orange-500 transition-colors inline-flex items-center gap-1"
              >
                <span>github.com/vinzxie</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: Structured Profile Blueprint Card with Clean Transparent Glass */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-orange-500/[0.02] dark:bg-white/[0.03] backdrop-blur-md border border-orange-500/20 p-6 sm:p-7 space-y-6 relative">
              
              {/* Header with Profile Photo */}
              <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10 gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="relative shrink-0">
                    <img
                      src="/pp.jpg"
                      alt="Alvin Nuril Iqbal"
                      referrerPolicy="no-referrer"
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl object-cover border-2 border-orange-500/40 shadow-md ring-2 ring-orange-500/15"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[var(--bg-surface)] shadow-xs" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-mono text-orange-500 uppercase font-semibold">
                      {t.profileCardTitle}
                    </div>
                    <div className="text-sm font-bold text-[var(--text-main)] font-mono">
                      Alvin Nuril Iqbal
                    </div>
                    <div className="text-[11px] font-mono text-[var(--text-dim)]">
                      @vinzxie &bull; TRK Poliwangi
                    </div>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-semibold border border-emerald-500/20 shrink-0">
                  {t.statusActive}
                </span>
              </div>

              {/* Core Competency Stack Rows in Liquid Glass */}
              <div className="space-y-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/5 dark:bg-white/[0.02] backdrop-blur-md border border-white/15 dark:border-white/5 hover:border-orange-500/40 space-y-1 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[var(--text-main)] font-semibold">
                      <Code2 className="w-4 h-4 text-blue-500" />
                      <span>{t.frontendTitle}</span>
                    </span>
                    <span className="text-[10px] text-[var(--text-dim)]">React &bull; Next &bull; TS</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] font-sans pt-0.5">
                    {t.frontendDesc}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 dark:bg-white/[0.02] backdrop-blur-md border border-white/15 dark:border-white/5 hover:border-orange-500/40 space-y-1 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[var(--text-main)] font-semibold">
                      <Server className="w-4 h-4 text-orange-500" />
                      <span>{t.backendTitle}</span>
                    </span>
                    <span className="text-[10px] text-[var(--text-dim)]">Node &bull; PHP &bull; Python</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] font-sans pt-0.5">
                    {t.backendDesc}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 dark:bg-white/[0.02] backdrop-blur-md border border-white/15 dark:border-white/5 hover:border-orange-500/40 space-y-1 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[var(--text-main)] font-semibold">
                      <Database className="w-4 h-4 text-emerald-500" />
                      <span>{t.dataTitle}</span>
                    </span>
                    <span className="text-[10px] text-[var(--text-dim)]">Postgres &bull; MySQL</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] font-sans pt-0.5">
                    {t.dataDesc}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 dark:bg-white/[0.02] backdrop-blur-md border border-white/15 dark:border-white/5 hover:border-orange-500/40 space-y-1 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-[var(--text-main)] font-semibold">
                      <Network className="w-4 h-4 text-purple-500" />
                      <span>{t.networkTitle}</span>
                    </span>
                    <span className="text-[10px] text-[var(--text-dim)]">MikroTik &bull; Cisco &bull; Linux</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] font-sans pt-0.5">
                    {t.networkDesc}
                  </p>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-2 border-t border-white/15 dark:border-white/10 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[var(--text-dim)]">{t.statusLabel}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{t.statusValue}</span>
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

