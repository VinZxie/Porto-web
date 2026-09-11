import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { TRANSLATIONS } from '../data/translations';
import {
  Copy,
  Check,
  ArrowUpRight,
  Sun,
  Moon,
  Layers,
  Network,
  User,
  GraduationCap,
  Code2,
  Trophy,
  Mail,
  ChevronRight,
  Activity,
  Terminal,
  Github,
  Instagram,
  Youtube,
  X,
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  activeSlide?: 'projects' | 'subnet';
  onSelectSlide?: (slide: 'projects' | 'subnet') => void;
  onNavigate?: (sectionId: string, href: string, slide?: 'projects' | 'subnet') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSelectSlide, onNavigate }) => {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = TRANSLATIONS[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile command deck is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    {
      label: t.work,
      sublabel: lang === 'id' ? '11 Proyek Web & Jaringan' : '11 Web & Network Repositories',
      href: '#showcase-slides',
      id: 'projects',
      slide: 'projects' as const,
      icon: Layers,
      code: '01',
    },
    {
      label: t.lab,
      sublabel: lang === 'id' ? 'Kalkulator CIDR & VLSM' : 'Interactive CIDR & VLSM Workbench',
      href: '#showcase-slides',
      id: 'lab',
      slide: 'subnet' as const,
      icon: Network,
      code: '02',
    },
    {
      label: t.about,
      sublabel: lang === 'id' ? 'Profil & Filosofi Rekayasa' : 'Profile & Engineering Persona',
      href: '#about',
      id: 'about',
      icon: User,
      code: '03',
    },
    {
      label: t.education,
      sublabel: lang === 'id' ? 'TRK Poliwangi & TJKT SMK' : 'TRK Poliwangi & TJKT Vocational',
      href: '#education',
      id: 'education',
      icon: GraduationCap,
      code: '04',
    },
    {
      label: t.skills,
      sublabel: lang === 'id' ? 'Fullstack, Protokol & Linux' : 'Fullstack, Protocols & Linux',
      href: '#skills',
      id: 'skills',
      icon: Code2,
      code: '05',
    },
    {
      label: t.milestones,
      sublabel: lang === 'id' ? 'LKS Jaringan, Akademik & Rekor' : 'LKS Network, Awards & Records',
      href: '#achievements',
      id: 'achievements',
      icon: Trophy,
      code: '06',
    },
    {
      label: t.contact,
      sublabel: lang === 'id' ? 'Saluran Kontak & Diskusi' : 'Direct Transmission & Inquiry',
      href: '#contact',
      id: 'contact',
      icon: Mail,
      code: '07',
    },
  ];

  const handleNavLinkClick = (e: React.MouseEvent, link: typeof navLinks[number]) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(link.id, link.href, link.slide);
    } else {
      if (link.slide && onSelectSlide) {
        onSelectSlide(link.slide);
      }
      const targetEl = document.getElementById(link.href.replace('#', ''));
      if (targetEl) {
        const navHeight = 72;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
      }
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // Find currently active link for mobile HUD pill
  const activeLink = navLinks.find((l) => l.id === activeSection) || navLinks[0];

  return (
    <>
      <header
        id="main-nav-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--bg-page)]/85 backdrop-blur-xl border-b border-orange-500/20 py-2.5 shadow-xs'
            : 'bg-[var(--bg-page)]/50 backdrop-blur-md border-b border-orange-500/10 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand identity */}
          <a
            href="#home"
            id="nav-brand-link"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) {
                onNavigate('home', '#home');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group flex items-center gap-2 sm:gap-3 text-left focus:outline-none min-w-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-orange-500/5 dark:bg-orange-500/10 backdrop-blur-md border border-orange-500/25 group-hover:border-orange-500/60 flex items-center justify-center font-mono font-bold text-xs text-orange-500 transition-all shadow-xs shrink-0 relative group-hover:scale-105">
              <img
                src="/pp.jpg"
                alt="Alvin"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 leading-tight">
                <span className="font-bold text-xs sm:text-sm tracking-tight text-[var(--text-main)] group-hover:text-orange-500 transition-colors truncate max-w-[120px] xs:max-w-[170px] sm:max-w-none">
                  Alvin Nuril Iqbal
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-orange-500/15 text-orange-600 dark:text-orange-400 font-semibold border border-orange-500/30 shrink-0">
                  TRK
                </span>
              </div>
              <div className="text-[10px] font-mono text-[var(--text-dim)] hidden sm:flex items-center gap-1.5">
                <span>Poliwangi</span>
                <span className="text-[var(--text-muted)]">&bull;</span>
                <span>Banyuwangi, ID</span>
              </div>
            </div>
          </a>

          {/* Center Desktop Navigation Menu with Transparent Orange Glass Highlight */}
          <nav
            id="desktop-nav-menu"
            className="hidden lg:flex items-center gap-0.5 bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-md border border-orange-500/25 p-1 rounded-full relative"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-item-${link.id}`}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className={`relative min-w-[72px] xl:min-w-[78px] px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 select-none z-10 text-center flex items-center justify-center ${
                    isActive
                      ? 'text-orange-600 dark:text-orange-400 font-semibold'
                      : 'text-[var(--text-muted)] hover:text-orange-500 hover:bg-orange-500/10'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full bg-orange-500/15 dark:bg-orange-500/20 border border-orange-500/40 backdrop-blur-md -z-10 shadow-xs pointer-events-none"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                        mass: 0.8,
                      }}
                    />
                  )}
                  <span className="whitespace-nowrap">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Section: Theme Toggle, Language Toggle, Quick Email & Inquire Action */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">

          {/* Light / Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            id="theme-toggle-btn"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] hover:bg-orange-500/10 backdrop-blur-md border border-orange-500/20 hover:border-orange-500/45 text-[var(--text-muted)] hover:text-orange-500 flex items-center justify-center transition-transform active:scale-90 hover:scale-105 focus:outline-none cursor-pointer"
            title={theme === 'dark' ? t.themeLight : t.themeDark}
            aria-label={t.themeToggle}
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" />
            )}
          </button>

          {/* Language Switcher Segmented Control */}
          <div
            id="lang-toggle-container"
            className="h-7 sm:h-8 flex items-center bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-md border border-orange-500/20 rounded-lg p-0.5 text-[11px] sm:text-xs font-mono relative"
          >
            <button
              type="button"
              onClick={() => setLang('id')}
              id="lang-btn-id"
              className={`relative h-full w-6 sm:w-8 rounded-md transition-colors font-semibold flex items-center justify-center z-10 ${
                lang === 'id'
                  ? 'text-orange-600 dark:text-orange-400 font-bold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
              title="Bahasa Indonesia"
            >
              {lang === 'id' && (
                <motion.span
                  layoutId="lang-active-pill"
                  className="absolute inset-0 rounded-md bg-orange-500/20 dark:bg-orange-500/25 border border-orange-500/40 -z-10 shadow-xs"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              id="lang-btn-en"
              className={`relative h-full w-6 sm:w-8 rounded-md transition-colors font-semibold flex items-center justify-center z-10 ${
                lang === 'en'
                  ? 'text-orange-600 dark:text-orange-400 font-bold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
              title="English"
            >
              {lang === 'en' && (
                <motion.span
                  layoutId="lang-active-pill"
                  className="absolute inset-0 rounded-md bg-orange-500/20 dark:bg-orange-500/25 border border-orange-500/40 -z-10 shadow-xs"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              EN
            </button>
          </div>

          {/* Compact Quick Copy Email Button (Desktop only) */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyEmail}
            id="nav-quick-copy-email"
            className="h-8 hidden xl:flex items-center justify-center gap-1.5 w-[114px] px-2 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] hover:bg-orange-500/10 backdrop-blur-md border border-orange-500/20 hover:border-orange-500/45 text-[var(--text-muted)] hover:text-orange-500 text-xs font-mono transition-colors"
            title={PERSONAL_INFO.email}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="text-emerald-500 font-semibold">{t.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[var(--text-dim)] shrink-0" />
                <span>{t.copyEmail}</span>
              </>
            )}
          </motion.button>

          {/* Desktop Contact Inquire CTA */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            id="nav-cta-contact"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) {
                onNavigate('contact', '#contact');
              } else {
                const el = document.getElementById('contact');
                if (el) {
                  window.scrollTo({
                    top: Math.max(0, el.offsetTop - 72),
                    behavior: 'smooth',
                  });
                }
              }
            }}
            className="h-8 hidden sm:flex items-center justify-center gap-1.5 w-[104px] rounded-lg bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/35 hover:border-orange-500/60 text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-tight transition-all backdrop-blur-md shadow-xs"
          >
            <span>{t.inquire}</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </motion.a>

          {/* Mobile Cyber Command Trigger (Engineered Micro-Bars) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-nav-toggle"
            className={`h-7 sm:h-8 px-2 lg:hidden rounded-lg border transition-all flex items-center gap-1.5 font-mono text-xs ${
              mobileMenuOpen
                ? 'bg-orange-500 text-white border-orange-400 shadow-md shadow-orange-500/25'
                : 'bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/30 text-orange-600 dark:text-orange-400'
            }`}
            aria-label="Toggle Command Deck"
          >
            <div className="w-3.5 h-3 flex flex-col justify-between items-center py-0.5">
              <span
                className={`h-0.5 w-full rounded-full transition-transform duration-200 ${
                  mobileMenuOpen
                    ? 'bg-white rotate-45 translate-y-[3px]'
                    : 'bg-orange-500 dark:bg-orange-400'
                }`}
              />
              <span
                className={`h-0.5 rounded-full transition-all duration-200 ${
                  mobileMenuOpen
                    ? 'opacity-0 w-0'
                    : 'w-2 bg-orange-500 dark:bg-orange-400'
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full transition-transform duration-200 ${
                  mobileMenuOpen
                    ? 'bg-white -rotate-45 -translate-y-[3px]'
                    : 'bg-orange-500 dark:bg-orange-400'
                }`}
              />
            </div>
            <span className="text-[10px] font-bold tracking-wider shrink-0">
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </span>
          </button>
        </div>

      </div>
    </header>

    {/* Bespoke Mobile Command Deck (Full-screen Portal into document.body - escaped from header backdrop blur) */}
    {typeof document !== 'undefined' &&
      createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[99999] lg:hidden bg-black/80 dark:bg-black/95 backdrop-blur-2xl overflow-y-auto overscroll-contain flex flex-col"
            >
            {/* Ambient orange light beam */}
            <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-orange-500/15 blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none -z-10" />

            {/* Container for the Deck */}
            <div className="w-full max-w-lg mx-auto p-4 sm:p-6 flex flex-col min-h-full justify-between gap-4">
              
              {/* Top Bar inside Drawer: Telemetry & Close Trigger */}
              <div className="flex items-center justify-between pb-3 border-b border-orange-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-[10px] text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-orange-500" />
                    TRK // COMMAND DECK v2.5
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2.5 py-1 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-mono font-semibold flex items-center gap-1 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'TUTUP' : 'CLOSE'}</span>
                </button>
              </div>

              {/* Operator Profile Telemetry Card */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="p-3.5 rounded-2xl bg-[var(--bg-elevated)]/80 backdrop-blur-md border border-orange-500/25 flex items-center justify-between gap-3 shadow-lg"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative shrink-0">
                    <div className="w-11 h-11 rounded-xl overflow-hidden border border-orange-500/40 p-0.5 bg-orange-500/10">
                      <img
                        src="/pp.jpg"
                        alt="Alvin"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[var(--bg-page)]" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-sm text-[var(--text-main)] truncate">
                        Alvin Nuril Iqbal
                      </h4>
                      <span className="text-[9px] font-mono px-1 rounded bg-orange-500/15 text-orange-600 dark:text-orange-400 font-bold">
                        VinnZxie
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-[var(--text-dim)] truncate">
                      TRK Poliwangi &bull; Banyuwangi, ID
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col items-end text-right font-mono text-[10px]">
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    <Activity className="w-3 h-3 animate-pulse" />
                    ONLINE
                  </span>
                  <span className="text-[var(--text-muted)] text-[9px]">
                    10.0.0.1/24
                  </span>
                </div>
              </motion.div>

              {/* Quick Tactile Settings Matrix (Lang, Theme, Copy) */}
              <div className="grid grid-cols-3 gap-2">
                {/* Language Switch */}
                <div className="p-2 rounded-xl bg-[var(--bg-elevated)]/60 border border-[var(--border-card)] flex flex-col gap-1 items-center justify-center">
                  <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase">
                    {lang === 'id' ? 'BAHASA' : 'LANGUAGE'}
                  </span>
                  <div className="flex items-center gap-1 w-full">
                    <button
                      onClick={() => setLang('id')}
                      className={`flex-1 py-1 rounded-md text-[10px] font-mono font-bold transition-all ${
                        lang === 'id'
                          ? 'bg-orange-500 text-white shadow-xs'
                          : 'text-[var(--text-dim)] hover:text-[var(--text-main)]'
                      }`}
                    >
                      ID
                    </button>
                    <button
                      onClick={() => setLang('en')}
                      className={`flex-1 py-1 rounded-md text-[10px] font-mono font-bold transition-all ${
                        lang === 'en'
                          ? 'bg-orange-500 text-white shadow-xs'
                          : 'text-[var(--text-dim)] hover:text-[var(--text-main)]'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>

                {/* Theme Switch */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="p-2 rounded-xl bg-[var(--bg-elevated)]/60 border border-[var(--border-card)] hover:border-orange-500/30 flex flex-col gap-1 items-center justify-center transition-colors overflow-hidden cursor-pointer"
                >
                  <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase">
                    {lang === 'id' ? 'TEMA' : 'THEME'}
                  </span>
                  <div className="h-4 flex items-center justify-center">
                    <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-[var(--text-main)]">
                      {theme === 'dark' ? (
                        <>
                          <Sun className="w-3.5 h-3.5 text-amber-400" />
                          <span>DARK</span>
                        </>
                      ) : (
                        <>
                          <Moon className="w-3.5 h-3.5 text-slate-600" />
                          <span>LIGHT</span>
                        </>
                      )}
                    </div>
                  </div>
                </button>

                {/* Copy Email */}
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[var(--bg-elevated)]/60 border border-[var(--border-card)] hover:border-orange-500/30 flex flex-col gap-1 items-center justify-center transition-colors"
                >
                  <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase">
                    EMAIL
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-orange-600 dark:text-orange-400">
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 text-[10px]">OK!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </div>
                </button>
              </div>

              {/* Tactical Navigation Modules List (Bespoke Engineering Rows) */}
              <div className="space-y-1.5 flex-1 my-1">
                <div className="flex items-center justify-between px-1 text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  <span>DIRECTORY // SEKSI PORTOFOLIO</span>
                  <span>{navLinks.length} NODES</span>
                </div>

                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.id;
                  const Icon = link.icon;

                  return (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.035 }}
                      onClick={(e) => handleNavLinkClick(e, link)}
                      className={`group relative p-2.5 rounded-xl transition-all flex items-center justify-between gap-3 border ${
                        isActive
                          ? 'bg-orange-500/15 border-orange-500/50 shadow-md shadow-orange-500/10'
                          : 'bg-[var(--bg-elevated)]/50 hover:bg-[var(--bg-elevated)] border-[var(--border-subtle)] hover:border-orange-500/30'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Icon Badge with Orange Halo on Active */}
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                            isActive
                              ? 'bg-orange-500 text-white border-orange-400 shadow-sm shadow-orange-500/30'
                              : 'bg-black/[0.04] dark:bg-white/[0.04] text-[var(--text-muted)] border-orange-500/20 group-hover:text-orange-500'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>

                        {/* Title & Subtitle */}
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-orange-500 font-bold">
                              //{link.code}
                            </span>
                            <span
                              className={`text-xs font-semibold tracking-tight truncate ${
                                isActive
                                  ? 'text-orange-600 dark:text-orange-400 font-bold'
                                  : 'text-[var(--text-main)] group-hover:text-orange-500'
                              }`}
                            >
                              {link.label}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[var(--text-dim)] truncate">
                            {link.sublabel}
                          </span>
                        </div>
                      </div>

                      {/* Right Indicator */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        {isActive ? (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/40">
                            ACTIVE
                          </span>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all" />
                        )}
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Bottom Action Deck: Direct CTA & Social Links */}
              <div className="pt-3 border-t border-orange-500/20 space-y-2.5">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    if (onNavigate) {
                      onNavigate('contact', '#contact');
                    } else {
                      const el = document.getElementById('contact');
                      if (el) {
                        window.scrollTo({
                          top: Math.max(0, el.offsetTop - 72),
                          behavior: 'smooth',
                        });
                      }
                    }
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-center text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t.inquire} (Hubungi Alvin)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* Social Quick Links */}
                <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-[var(--text-dim)]">
                  <div className="flex items-center gap-2">
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-card)] hover:text-orange-500 transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={PERSONAL_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-card)] hover:text-orange-500 transition-colors"
                      title="Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={PERSONAL_INFO.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-card)] hover:text-orange-500 transition-colors"
                      title="YouTube"
                    >
                      <Youtube className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <span className="text-[9px] text-[var(--text-muted)]">
                    POLIWANGI &bull; TRK 2026
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
};
