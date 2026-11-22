'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { KepCard } from '@/components/ui/KepCard';
import { KepButton } from '@/components/ui/KepButton';
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
    <div className="min-h-screen bg-[#0a0d14] flex flex-col selection:bg-[#93d7e2]/20 selection:text-white">
      <Navbar />
      <main className="flex-1 py-12 kep-bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Barcha Loyihalar' }]} />

          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="font-mono text-xs text-[#93d7e2] tracking-wider uppercase mb-2">
                // SYSTEM ARCHIVE & REPOSITORIES
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold font-mono text-[#edf1f4] uppercase tracking-tight">
                Loyihalar Katalogi
              </h1>
              <p className="mt-3 text-[#9caeb8] font-mono text-sm max-w-2xl leading-relaxed">
                Open-source paketlar, korporativ platformalar, sunʼiy intellekt servislar va Telegram ekotizimlari.
              </p>
            </div>

            {/* Telegram Channel Live Sync Badge */}
            <KepCard hasCorners={false} className="py-3 px-4 border border-[#93d7e2]/30 bg-[#131821] flex items-center gap-3 shrink-0">
              <Send className="w-5 h-5 text-[#93d7e2] shrink-0" />
              <div className="font-mono text-xs">
                <div className="text-[#edf1f4] font-bold">@shoyim_portfolio</div>
                <div className="text-[11px] text-[#9caeb8]">Har bir yangi keys kanalda eʼlon qilinadi</div>
              </div>
              <a
                href={PORTFOLIO_DATA.profile.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs font-mono text-[#93d7e2] hover:underline shrink-0"
              >
                Kanalga o‘tish ↗
              </a>
            </KepCard>
          </div>

          {/* Search Bar & Filter Controls */}
          <div className="p-4 border border-white/10 bg-[#0e121a] mb-10 flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-[#9caeb8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Loyiha nomi, kalit so‘z yoki texnologiya bo‘yicha qidiring (masalan: Laravel, AST, Redis)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#131821] border border-white/10 text-xs font-mono text-[#edf1f4] focus:outline-none focus:border-[#93d7e2] transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2 font-mono text-xs border rounded-none cursor-pointer transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#93d7e2] text-[#0a0d14] font-bold border-[#93d7e2]'
                      : 'bg-[#131821] text-[#9caeb8] border-white/10 hover:border-white/30 hover:text-[#edf1f4]'
                  }`}
                >
                  [ {cat.label} ]
                </button>
              ))}
            </div>
          </div>

          {/* Projects Count Indicator */}
          <div className="font-mono text-xs text-[#596a75] mb-6 flex items-center justify-between">
            <span>FILTERED: {filteredProjects.length} TA LOYIHA TOPILDI</span>
            <span>ENGINE: SEARCH_ACTIVE</span>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="p-16 border border-white/10 bg-[#0e121a] text-center font-mono space-y-3">
              <div className="text-[#93d7e2] text-sm font-bold">[ NO MATCHING LOGS ]</div>
              <p className="text-xs text-[#9caeb8]">
                &quot;{searchQuery}&quot; so‘rovi bo‘yicha hech qanday loyiha topilmadi. Qidiruv so‘zini o‘zgartirib ko‘ring.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs text-[#93d7e2] underline cursor-pointer"
              >
                Filtrlarni tozalash
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <KepCard
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
                        <span className="flex items-center gap-1 font-mono text-[11px] text-[#d8c697]">
                          <Star className="w-3 h-3 fill-current" />
                          {project.stars}
                        </span>
                      )}
                    </div>

                    {/* Title with link */}
                    <Link href={`/projects/${project.id}`}>
                      <h3 className="text-lg font-bold font-mono text-[#edf1f4] mb-2 leading-snug hover:text-[#93d7e2] transition-colors cursor-pointer">
                        {project.title}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-xs text-[#9caeb8] font-mono leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-[#131821] border border-white/[0.08] font-mono text-[10px] text-[#93d7e2]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2 mt-auto">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-xs font-mono text-[#93d7e2] hover:underline"
                    >
                      Batafsil keys ↗
                    </Link>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 border border-white/10 bg-[#131821] text-[#9caeb8] hover:text-[#edf1f4] hover:border-[#93d7e2]/40"
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
                          className="p-1.5 border border-white/10 bg-[#131821] text-[#9caeb8] hover:text-[#93d7e2] hover:border-[#93d7e2]"
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
                          className="p-1.5 border border-white/10 bg-[#131821] text-[#9caeb8] hover:text-[#93d7e2] hover:border-[#93d7e2]"
                          title="Telegram Post"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </KepCard>
              ))}
            </div>
          )}

          {/* GitHub CTA */}
          <div className="mt-16 p-8 border border-white/10 bg-[#0e121a] flex flex-col sm:flex-row items-center justify-between gap-6 font-mono">
            <div className="flex items-center gap-4">
              <FolderGit2 className="w-8 h-8 text-[#93d7e2] shrink-0" />
              <div>
                <div className="text-base font-bold text-[#edf1f4]">Barcha ochiq kodli repozitoriylar</div>
                <div className="text-xs text-[#9caeb8]">github.com/shoyim profilingizda yangi paketlar va utilitalar mavjud</div>
              </div>
            </div>
            <KepButton
              asAnchor
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              variant="primary"
              size="md"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              GitHub Profiliga o‘tish
            </KepButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
