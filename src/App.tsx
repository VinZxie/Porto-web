import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Calculator } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { SubnetWorkbench } from './components/SubnetWorkbench';
import { About } from './components/About';
import { EducationSchematic } from './components/EducationSchematic';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function PortfolioApp() {
  const { lang } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [activeSlide, setActiveSlide] = useState<'projects' | 'subnet'>('projects');

  // Lock scroll events during programmatic navigation to prevent intermediate jumps
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNavigate = (sectionId: string, href: string, slide?: 'projects' | 'subnet') => {
    // 1. Immediately set active section & slide so active pill glides cleanly to target
    setActiveSection(sectionId);
    if (slide) {
      setActiveSlide(slide);
    }

    // 2. Lock scroll listener from emitting passing sections
    isProgrammaticScrollRef.current = true;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // 3. Smooth scroll with proper navbar offset
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      const navOffset = 72;
      const elementPos = targetEl.getBoundingClientRect().top;
      const offsetPos = elementPos + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPos),
        behavior: 'smooth',
      });
    } else if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Release programmatic lock once the smooth scroll has settled
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 850);
  };

  // Keep activeSection aligned if activeSlide is changed in-page
  useEffect(() => {
    if (activeSection === 'projects' || activeSection === 'lab') {
      setActiveSection(activeSlide === 'subnet' ? 'lab' : 'projects');
    }
  }, [activeSlide, activeSection]);

  useEffect(() => {
    const sectionConfig = [
      { id: 'contact', navId: 'contact' },
      { id: 'journey', navId: 'achievements' },
      { id: 'achievements', navId: 'achievements' },
      { id: 'skills', navId: 'skills' },
      { id: 'education', navId: 'education' },
      { id: 'about', navId: 'about' },
      { id: 'showcase-slides', navId: 'showcase-slides' },
      { id: 'home', navId: 'home' },
    ];

    const handleScroll = () => {
      // Don't override activeSection while smooth scrolling programmatically
      if (isProgrammaticScrollRef.current) return;

      // Bottom of page: always highlight contact
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70;
      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 200;

      for (const section of sectionConfig) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          if (section.navId === 'showcase-slides') {
            setActiveSection(activeSlide === 'subnet' ? 'lab' : 'projects');
          } else {
            setActiveSection(section.navId);
          }
          break;
        }
      }
    };

    // If user interacts manually with wheel or touch during smooth scroll, cancel the lock
    const cancelProgrammaticLock = () => {
      isProgrammaticScrollRef.current = false;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', cancelProgrammaticLock, { passive: true });
    window.addEventListener('touchmove', cancelProgrammaticLock, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', cancelProgrammaticLock);
      window.removeEventListener('touchmove', cancelProgrammaticLock);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeSlide]);

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-body)] transition-colors duration-200 relative selection:bg-orange-500/30 selection:text-orange-600 dark:selection:text-orange-200 overflow-x-hidden">
      {/* Ambient background light orbs for deep liquid glass refraction */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
        <div className="absolute -top-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent blur-3xl" />
        <div className="absolute top-[30%] -right-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl" />
        <div className="absolute top-[60%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-600/10 via-pink-500/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-[5%] right-[20%] w-[550px] h-[550px] rounded-full bg-gradient-to-t from-emerald-500/10 via-orange-500/5 to-transparent blur-3xl" />
      </div>

      {/* Fixed Navigation Masthead with Language & Theme Toggles */}
      <Navbar
        activeSection={activeSection}
        activeSlide={activeSlide}
        onSelectSlide={setActiveSlide}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          activeSlide={activeSlide}
          onSelectSlide={setActiveSlide}
        />

        {/* Dynamic Showcase Slide View (Slide 1: Projects vs Slide 2: Subnet Calculator) */}
        <div id="showcase-slides" className="scroll-mt-20">
          {/* Unified Slide Switcher Bar with Subtle Orange Translucency */}
          <div className="bg-orange-500/[0.02] dark:bg-orange-500/[0.03] backdrop-blur-xl border-y border-orange-500/20 py-3 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
              
              {/* Left Viewport Status Indicator */}
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] min-w-0">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shrink-0" />
                <span className="font-semibold text-[var(--text-main)] uppercase tracking-wider shrink-0">
                  SHOWCASE VIEWPORT:
                </span>
                <span className="text-orange-600 dark:text-orange-400 font-medium truncate">
                  {activeSlide === 'projects'
                    ? (lang === 'id' ? 'SLIDE 1 // KARYA & PROYEK (11)' : 'SLIDE 1 // FEATURED PROJECTS (11)')
                    : (lang === 'id' ? 'SLIDE 2 // KALKULATOR SUBNET IPV4' : 'SLIDE 2 // IPV4 SUBNET WORKBENCH')}
                </span>
              </div>

              {/* Symmetrical Slide Switcher Control with Brand-New Cyber Translucent Orange Glass */}
              <div className="w-full md:w-auto grid grid-cols-2 md:flex items-center gap-2 p-1.5 rounded-2xl border border-orange-500/25 backdrop-blur-xl bg-orange-500/[0.03] dark:bg-white/[0.03] text-xs font-mono shrink-0 relative shadow-xs">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  id="slide-switcher-projects"
                  onClick={() => setActiveSlide('projects')}
                  className={`relative w-full md:w-56 px-3.5 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between gap-2.5 text-left select-none z-10 ${
                    activeSlide === 'projects'
                      ? 'text-orange-600 dark:text-orange-400 font-bold'
                      : 'text-[var(--text-muted)] hover:text-orange-500 hover:bg-orange-500/10'
                  }`}
                >
                  {activeSlide === 'projects' && (
                    <motion.div
                      layoutId="slide-active-pill"
                      className="absolute inset-0 rounded-xl bg-orange-500/15 dark:bg-orange-500/20 border border-orange-500/40 backdrop-blur-md shadow-xs -z-10"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                  <div className="flex items-center gap-2 min-w-0">
                    <Layers className={`w-4 h-4 shrink-0 transition-colors ${activeSlide === 'projects' ? 'text-orange-500' : 'text-[var(--text-dim)]'}`} />
                    <span className="truncate text-xs font-semibold">{lang === 'id' ? 'Karya & Proyek' : 'Projects (11)'}</span>
                  </div>
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded-md font-bold shrink-0 border transition-all ${
                    activeSlide === 'projects'
                      ? 'bg-orange-500/25 text-orange-600 dark:text-orange-400 border-orange-500/35 shadow-xs'
                      : 'bg-black/5 dark:bg-white/10 text-[var(--text-dim)] border-black/5 dark:border-white/10'
                  }`}>
                    SLIDE 01
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  id="slide-switcher-subnet"
                  onClick={() => setActiveSlide('subnet')}
                  className={`relative w-full md:w-56 px-3.5 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between gap-2.5 text-left select-none z-10 ${
                    activeSlide === 'subnet'
                      ? 'text-orange-600 dark:text-orange-400 font-bold'
                      : 'text-[var(--text-muted)] hover:text-orange-500 hover:bg-orange-500/10'
                  }`}
                >
                  {activeSlide === 'subnet' && (
                    <motion.div
                      layoutId="slide-active-pill"
                      className="absolute inset-0 rounded-xl bg-orange-500/15 dark:bg-orange-500/20 border border-orange-500/40 backdrop-blur-md shadow-xs -z-10"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                  <div className="flex items-center gap-2 min-w-0">
                    <Calculator className={`w-4 h-4 shrink-0 transition-colors ${activeSlide === 'subnet' ? 'text-orange-500' : 'text-[var(--text-dim)]'}`} />
                    <span className="truncate text-xs font-semibold">{lang === 'id' ? 'Kalkulator Subnet' : 'Subnet Calculator'}</span>
                  </div>
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded-md font-bold shrink-0 border transition-all ${
                    activeSlide === 'subnet'
                      ? 'bg-orange-500/25 text-orange-600 dark:text-orange-400 border-orange-500/35 shadow-xs'
                      : 'bg-black/5 dark:bg-white/10 text-[var(--text-dim)] border-black/5 dark:border-white/10'
                  }`}>
                    SLIDE 02
                  </span>
                </motion.button>
              </div>

            </div>
          </div>

          {/* Animated Slide Switching */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeSlide === 'projects' ? (
                <Projects />
              ) : (
                <SubnetWorkbench />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <About />
        <EducationSchematic />
        <Skills />
        <Achievements />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
