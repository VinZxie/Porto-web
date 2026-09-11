import React, { useState } from 'react';
import { ACHIEVEMENTS_DATA, COMPETITIVE_GAMES_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { Trophy, Swords, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].achievements;
  const achievement = ACHIEVEMENTS_DATA[0];

  const [selectedGameId, setSelectedGameId] = useState<string>('all');

  return (
    <section id="achievements" className="py-20 border-b border-[var(--border-main)] bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-[var(--border-main)]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              {t.title}
            </h2>
            <p className="text-[var(--text-muted)] text-sm max-w-2xl font-normal">
              {t.subtitle}
            </p>
          </div>

          {/* 4x Apex Badge */}
          <div className="text-xs font-mono text-amber-600 dark:text-amber-400 bg-[var(--bg-surface)] px-4 py-2 rounded-xl border border-amber-500/30 shadow-xs flex items-center gap-2">
            <Swords className="w-4 h-4 text-amber-500" />
            <span className="font-semibold">{achievement.badge}</span>
          </div>
        </div>

        {/* 4 Games Apex Matrix Grid */}
        <div className="pt-12 space-y-8">
          
          {/* Game Roster Quick Filter Bar */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-wider">
              {lang === 'id' ? 'DAFTAR GAME & GELAR TERTINGGI:' : 'COMPETITIVE GAME TITLES & APEX RANKS:'}
            </div>

            <div className="flex items-center gap-1.5 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-card)] text-xs font-mono">
              <button
                type="button"
                onClick={() => setSelectedGameId('all')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  selectedGameId === 'all'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                {lang === 'id' ? 'Semua (4 Game)' : 'All 4 Titles'}
              </button>
              {COMPETITIVE_GAMES_DATA.map((game) => (
                <button
                  key={game.id}
                  type="button"
                  onClick={() => setSelectedGameId(game.id)}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    selectedGameId === game.id
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`}
                >
                  {game.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Game Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {COMPETITIVE_GAMES_DATA.filter(
              (g) => selectedGameId === 'all' || selectedGameId === g.id
            ).map((game) => {
              const isSelected = selectedGameId === game.id;
              return (
                <div
                  key={game.id}
                  className={`rounded-2xl bg-[var(--bg-surface)] border p-6 flex flex-col justify-between space-y-5 transition-all shadow-md group ${
                    isSelected
                      ? 'border-amber-500 ring-2 ring-amber-500/20'
                      : 'border-[var(--border-card)] hover:border-amber-500/40'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header: Official Game Launcher Icon + Verified Tag */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="relative p-1 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] shadow-xs transition-transform duration-300 group-hover:scale-105">
                        <img
                          src={game.iconUrl}
                          alt={`${game.gameName} Launcher Icon`}
                          className="w-14 h-14 rounded-xl object-cover shadow-xs"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        VERIFIED
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-[var(--text-main)] tracking-tight">
                        {game.gameName}
                      </h3>
                      <div className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 mt-0.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        <span>{game.rankTitle}</span>
                      </div>
                      <div className="text-[11px] font-mono text-[var(--text-dim)] mt-0.5">
                        {game.tierTag}
                      </div>
                    </div>

                    <p className="text-xs text-[var(--text-body)] leading-relaxed font-sans">
                      {game.description[lang]}
                    </p>
                  </div>

                  {/* Strategic Focus Highlight */}
                  <div className="p-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] space-y-1 text-xs font-mono">
                    <div className="text-[10px] text-[var(--text-dim)] uppercase">
                      {lang === 'id' ? 'FOKUS STRATEGI' : 'STRATEGIC FOCUS'}
                    </div>
                    <div className="text-[11px] font-semibold text-[var(--text-main)] leading-snug">
                      {game.strategicFocus[lang]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};


