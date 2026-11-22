'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PortfolioCard } from '@/components/ui/KepCard';
import { PortfolioButton } from '@/components/ui/KepButton';
import { Badge } from '@/components/ui/Badge';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowUpRight, FolderGit2, Search, Send, Star } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'opensource', label: 'Open Source' },
    { id: 'web', label: 'Web & SaaS' },
    { id: 'bot', label: 'Telegram Botlar' },
    { id: 'ai', label: 'AI & Tools' },
  ];

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_DATA.projects.filter((p) => {
      const matchesCategory =
        selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[var(--portfolio-bg-default)] flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 portfolio-bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Barcha Loyihalar' }]} />

          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="font-mono text-xs text-[var(--portfolio-primary)] tracking-wider uppercase mb-2">
                {'// PORTFOLIO & REPOZITORIYLAR'}
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold font-mono text-[var(--portfolio-text-primary)] uppercase tracking-tight">
                Loyihalar Katalogi
              </h1>
              <p className="mt-3 text-[var(--portfolio-text-secondary)] font-mono text-sm max-w-2xl leading-relaxed">
                Open-source paketlar, korporativ platformalar, sunʼiy intellekt servislar va Telegram ekotizimlari.
              </p>
            </div>

            {/* Telegram Channel Live Sync Badge */}
            <PortfolioCard hasCorners={false} className="py-3 px-4 border border-[var(--portfolio-border-bright)] bg-[var(--portfolio-bg-elevation-1)] flex items-center gap-3 shrink-0">
              <Send className="w-5 h-5 text-[var(--portfolio-primary)] shrink-0" />
              <div className="font-mono text-xs">
                <div className="text-[var(--portfolio-text-primary)] font-bold">@shoyim_portfolio</div>
                <div className="text-[11px] text-[var(--portfolio-text-secondary)]">Har bir yangi keys kanalda eʼlon qilinadi</div>
              </div>
              <a
                href={PORTFOLIO_DATA.profile.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs font-mono text-[var(--portfolio-primary)] hover:underline shrink-0"
              >
                Kanalga o‘tish ↗
              </a>
            </PortfolioCard>
          </div>

          {/* Search Bar & Filter Controls */}
          <div className="p-4 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] mb-10 flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-[var(--portfolio-text-secondary)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Loyiha nomi, kalit so‘z yoki texnologiya bo‘yicha qidiring (masalan: Laravel, AST, Redis)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border)] text-xs font-mono text-[var(--portfolio-text-primary)] focus:outline-none focus:border-[var(--portfolio-primary)] transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2 font-mono text-xs border rounded-none cursor-pointer transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[var(--portfolio-primary)] text-[#0a0d14] dark:text-[#0a0d14] font-bold border-[var(--portfolio-primary)]'
                      : 'bg-[var(--portfolio-bg-elevation-1)] text-[var(--portfolio-text-secondary)] border-[var(--portfolio-border)] hover:border-[var(--portfolio-border-bright)] hover:text-[var(--portfolio-text-primary)]'
                  }`}
                >
                  [ {cat.label} ]
                </button>
              ))}
            </div>
          </div>

          {/* Projects Count Indicator */}
          <div className="font-mono text-xs text-[var(--portfolio-text-muted)] mb-6 flex items-center justify-between">
            <span>{filteredProjects.length} TA LOYIHA TOPILDI</span>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="p-16 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] text-center font-mono space-y-3">
              <div className="text-[var(--portfolio-primary)] text-sm font-bold">[ LOYIHA TOPILMADI ]</div>
              <p className="text-xs text-[var(--portfolio-text-secondary)]">
                &quot;{searchQuery}&quot; so‘rovi bo‘yicha hech qanday loyiha topilmadi. Qidiruv so‘zini o‘zgartirib ko‘ring.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs text-[var(--portfolio-primary)] underline cursor-pointer"
              >
                Filtrlarni tozalash
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <PortfolioCard
                  key={project.id}
                  hasCorners
                  accent={project.featured ? 'cyan' : 'default'}
                  className="flex flex-col justify-between p-6 h-full"
                >
                  <div>
                    {/* Top Row: Category & Stars */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <Badge variant={project.category === 'opensource' ? 'gold' : 'cyan'}>
                        {project.categoryLabel}
                      </Badge>
                      {project.stars && (
                        <span className="flex items-center gap-1 font-mono text-[11px] text-[var(--portfolio-accent-gold)]">
                          <Star className="w-3 h-3 fill-current" />
                          {project.stars}
                        </span>
                      )}
                    </div>

                    {/* Title with link */}
                    <Link href={`/projects/${project.id}`}>
                      <h3 className="text-lg font-bold font-mono text-[var(--portfolio-text-primary)] mb-2 leading-snug hover:text-[var(--portfolio-primary)] transition-colors cursor-pointer">
                        {project.title}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-xs text-[var(--portfolio-text-secondary)] font-mono leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border)] font-mono text-[10px] text-[var(--portfolio-primary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[var(--portfolio-border)] flex items-center justify-between gap-2 mt-auto">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-xs font-mono text-[var(--portfolio-primary)] hover:underline"
                    >
                      Batafsil keys ↗
                    </Link>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-text-primary)] hover:border-[var(--portfolio-border-bright)]"
                          title="GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-primary)] hover:border-[var(--portfolio-primary)]"
                          title="Live Preview"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.telegramPostUrl && (
                        <a
                          href={project.telegramPostUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-primary)] hover:border-[var(--portfolio-primary)]"
                          title="Telegram Post"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </PortfolioCard>
              ))}
            </div>
          )}

          {/* GitHub CTA */}
          <div className="mt-16 p-8 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] flex flex-col sm:flex-row items-center justify-between gap-6 font-mono">
            <div className="flex items-center gap-4">
              <FolderGit2 className="w-8 h-8 text-[var(--portfolio-primary)] shrink-0" />
              <div>
                <div className="text-base font-bold text-[var(--portfolio-text-primary)]">Barcha ochiq kodli repozitoriylar</div>
                <div className="text-xs text-[var(--portfolio-text-secondary)]">github.com/shoyim profilingizda yangi paketlar va utilitalar mavjud</div>
              </div>
            </div>
            <PortfolioButton
              asAnchor
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              variant="primary"
              size="md"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              GitHub Profiliga o‘tish
            </PortfolioButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
