import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { ArrowUp, Github, Instagram, Youtube, Mail } from 'lucide-react';
import { VLogo } from './VLogo';

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: lang === 'id' ? 'Proyek' : 'Projects', href: '#projects' },
    { label: lang === 'id' ? 'Kalkulator' : 'Subnet Lab', href: '#lab' },
    { label: lang === 'id' ? 'Tentang' : 'About', href: '#about' },
    { label: lang === 'id' ? 'Pendidikan' : 'Education', href: '#education' },
    { label: lang === 'id' ? 'Keahlian' : 'Skills', href: '#skills' },
    { label: lang === 'id' ? 'Kontak' : 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: PERSONAL_INFO.github, icon: Github },
    { label: 'Instagram', href: PERSONAL_INFO.instagram, icon: Instagram },
    { label: 'YouTube', href: PERSONAL_INFO.youtube, icon: Youtube },
    { label: 'Email', href: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
  ];

  return (
    <footer id="main-footer" className="border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)]/30 text-[var(--text-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Main Minimalist Row: Identity, Quick Links, & Social */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[var(--border-subtle)]">
          
          {/* Identity */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-orange-500 font-bold uppercase tracking-wider select-none">
              <VLogo className="w-3 h-3 text-orange-500" />
              <span>VINZXIE</span>
            </div>
            <a 
              href="#" 
              className="text-sm font-semibold text-[var(--text-main)] hover:text-orange-500 transition-colors tracking-tight block"
            >
              {PERSONAL_INFO.fullName}
            </a>
            <p className="text-[11px] font-mono text-[var(--text-dim)]">
              {lang === 'id' ? 'Teknologi Rekayasa Komputer' : 'Computer Engineering'} &bull; Banyuwangi, Indonesia
            </p>
          </div>

          {/* Minimalist Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[var(--text-muted)] hover:text-orange-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Clean Social Icons */}
          <div className="flex items-center gap-2 shrink-0">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-card)] hover:border-orange-500/40 hover:text-orange-500 text-[var(--text-muted)] flex items-center justify-center transition-colors"
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>

        </div>

        {/* Bottom Minimalist Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[var(--text-dim)]">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="flex items-center gap-1.5 text-[var(--text-dim)] hover:text-orange-500 transition-colors cursor-pointer group"
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
