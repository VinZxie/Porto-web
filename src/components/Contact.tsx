import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { Mail, Copy, Check, Send, ExternalLink, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].contact;

  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Full-Stack Web Development',
    message: '',
  });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${formData.topic}] from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', topic: 'Full-Stack Web Development', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-b border-[var(--border-main)] bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-[var(--border-main)]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              {t.title}
            </h2>
            <p className="text-[var(--text-muted)] text-sm max-w-2xl font-normal">
              {t.subtitle}
            </p>
          </div>

          {/* Live Banyuwangi Clock */}
          <div className="flex items-center gap-3 bg-[var(--bg-surface)] px-4 py-2 rounded-xl border border-[var(--border-card)] text-xs font-mono text-[var(--text-muted)] shadow-xs">
            <Clock className="w-3.5 h-3.5 text-orange-500" />
            <span>{t.localTimeLabel}</span>
            <span className="text-[var(--text-main)] font-bold">{localTime || '07:00:00'}</span>
          </div>
        </div>

        {/* Contact Layout */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Credentials & Verified Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] space-y-4 shadow-xs">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase font-semibold">
                {t.inboxLabel}
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-2">
                <div className="text-xs text-[var(--text-dim)] font-mono">DIRECT INBOX:</div>
                <div className="text-sm font-mono font-bold text-[var(--text-main)] break-all">
                  {PERSONAL_INFO.email}
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                id="contact-copy-email-btn"
                className="w-full py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-orange-950/20 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? (lang === 'id' ? 'Tersalin!' : 'Copied!') : t.copyBtn}</span>
              </button>
            </div>

            {/* Verified Social Handles */}
            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] space-y-3 shadow-xs">
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase font-semibold">
                {t.socialTitle}
              </div>

              <div className="space-y-2 text-xs font-mono">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[var(--bg-elevated)] hover:bg-orange-500/10 border border-[var(--border-subtle)] hover:border-orange-500/30 flex items-center justify-between text-[var(--text-body)] hover:text-orange-500 transition-colors"
                >
                  <span className="text-[var(--text-muted)]">GitHub:</span>
                  <span className="font-semibold text-orange-500 flex items-center gap-1">
                    <span>@vinzxie</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[var(--bg-elevated)] hover:bg-orange-500/10 border border-[var(--border-subtle)] hover:border-orange-500/30 flex items-center justify-between text-[var(--text-body)] hover:text-orange-500 transition-colors"
                >
                  <span className="text-[var(--text-muted)]">Instagram:</span>
                  <span className="font-semibold text-orange-500 flex items-center gap-1">
                    <span>{PERSONAL_INFO.instagramHandle}</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[var(--bg-elevated)] hover:bg-orange-500/10 border border-[var(--border-subtle)] hover:border-orange-500/30 flex items-center justify-between text-[var(--text-body)] hover:text-orange-500 transition-colors"
                >
                  <span className="text-[var(--text-muted)]">TikTok:</span>
                  <span className="font-semibold text-orange-500 flex items-center gap-1">
                    <span>{PERSONAL_INFO.tiktokHandle}</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[var(--bg-elevated)] hover:bg-orange-500/10 border border-[var(--border-subtle)] hover:border-orange-500/30 flex items-center justify-between text-[var(--text-body)] hover:text-orange-500 transition-colors"
                >
                  <span className="text-[var(--text-muted)]">YouTube:</span>
                  <span className="font-semibold text-orange-500 flex items-center gap-1">
                    <span>@{PERSONAL_INFO.youtubeHandle}</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Sender Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-card)] space-y-6 shadow-xs">
              
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <span className="text-xs font-mono text-[var(--text-main)] font-semibold uppercase">
                  {t.formTitle}
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>ONLINE</span>
                </span>
              </div>

              {formSent ? (
                <div className="p-8 text-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                  <Check className="w-8 h-8 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold text-[var(--text-main)]">{t.formSuccessTitle}</h4>
                  <p className="text-xs text-[var(--text-body)] font-mono">
                    {t.formSuccessDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-mono">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[var(--text-muted)]">{t.formName}</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[var(--bg-elevated)] border border-[var(--border-card)] rounded-xl px-3.5 py-2.5 text-[var(--text-main)] text-xs focus:outline-none focus:border-orange-500/50"
                        placeholder="e.g. Alex Pratama"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[var(--text-muted)]">{t.formEmail}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[var(--bg-elevated)] border border-[var(--border-card)] rounded-xl px-3.5 py-2.5 text-[var(--text-main)] text-xs focus:outline-none focus:border-orange-500/50"
                        placeholder="alex@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[var(--text-muted)]">{t.formTopic}</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-[var(--bg-elevated)] border border-[var(--border-card)] rounded-xl px-3.5 py-2.5 text-[var(--text-main)] text-xs focus:outline-none focus:border-orange-500/50 cursor-pointer"
                    >
                      <option value="Full-Stack Web Development">{lang === 'id' ? 'Pengembangan Web Full-Stack' : 'Full-Stack Web Development'}</option>
                      <option value="Network & Infrastructure Systems">{lang === 'id' ? 'Sistem Jaringan & Infrastruktur' : 'Network & Infrastructure Systems'}</option>
                      <option value="UI/UX & Interactive Tools">{lang === 'id' ? 'UI/UX & Perkakas Interaktif' : 'UI/UX & Interactive Tools'}</option>
                      <option value="Computer Engineering Collaboration">{lang === 'id' ? 'Kolaborasi Rekayasa Komputer' : 'Computer Engineering Collaboration'}</option>
                      <option value="General Conversation">{lang === 'id' ? 'Percakapan Umum / Diskusi Santai' : 'General Conversation'}</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[var(--text-muted)]">{t.formMessage}</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[var(--bg-elevated)] border border-[var(--border-card)] rounded-xl p-3.5 text-[var(--text-main)] text-xs focus:outline-none focus:border-orange-500/50 font-sans"
                      placeholder={lang === 'id' ? 'Tuliskan rincian kebutuhan, proyek, atau pesan Anda...' : 'Outline your project scope, timeline, questions, or ideas...'}
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-mono font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-orange-950/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.formSubmit}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
