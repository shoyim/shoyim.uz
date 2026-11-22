'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolio';
import { KepCard } from './ui/KepCard';
import { KepButton } from './ui/KepButton';
import { Badge } from './ui/Badge';
import { ArrowUpRight, FolderGit2, Send, Star } from 'lucide-react';
import { GithubIcon } from './ui/Icons';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'opensource', label: 'Open Source' },
    { id: 'web', label: 'Web & SaaS' },
    { id: 'bot', label: 'Telegram Botlar' },
    { id: 'ai', label: 'AI & Vositalar' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-b border-white/[0.08] bg-[#0a0d14] relative kep-bg-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="font-mono text-xs text-[#93d7e2] tracking-wider uppercase mb-2">
              // 03. PORTFOLIO & REPOZITORIYLAR
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#edf1f4] uppercase tracking-tight">
              Amalga Oshirilgan Loyihalar
            </h2>
            <p className="mt-2 text-[#9caeb8] font-mono text-sm max-w-xl">
              Telegram kanaldagi (<a href={PORTFOLIO_DATA.profile.telegramChannel} target="_blank" rel="noopener noreferrer" className="text-[#93d7e2] underline hover:text-[#b0e8f0]">@shoyim_portfolio</a>) real ishlardan saralangan loyihalar va ochiq kodli paketlar.
            </p>
          </div>

          {/* Telegram Channel Live Banner */}
          <KepCard hasCorners={false} className="py-3 px-4 border border-[#93d7e2]/30 bg-[#131821] flex items-center gap-3">
            <Send className="w-5 h-5 text-[#93d7e2] shrink-0" />
            <div className="font-mono text-xs">
              <div className="text-[#edf1f4] font-bold">@shoyim_portfolio</div>
              <div className="text-[11px] text-[#9caeb8]">Har bir yangi loyiha kanalda eʼlon qilib boriladi</div>
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-white/[0.08] pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 font-mono text-xs tracking-wider border rounded-none cursor-pointer transition-all duration-150 ${
                activeCategory === cat.id
                  ? 'bg-[#93d7e2] text-[#0a0d14] font-bold border-[#93d7e2]'
                  : 'bg-[#0e121a] text-[#9caeb8] border-white/10 hover:border-white/25 hover:text-[#edf1f4]'
              }`}
            >
              [ {cat.label} ]
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <KepCard
              key={project.id}
              hasCorners
              accent={project.featured ? 'cyan' : 'default'}
              className="flex flex-col justify-between p-6 h-full"
            >
              <div>
                {/* Card Top Category & Stars */}
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

                {/* Title */}
                <h3 className="text-lg font-bold font-mono text-[#edf1f4] mb-2 leading-snug group-hover:text-[#93d7e2]">
                  {project.title}
                </h3>

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

              {/* Action Links */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-[#93d7e2] hover:underline cursor-pointer"
                >
                  [ To‘liq tavsif // + ]
                </button>

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

        {/* Bottom GitHub Profile Callout */}
        <div className="mt-14 p-6 border border-white/10 bg-[#0e121a] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-6 h-6 text-[#93d7e2] shrink-0" />
            <div>
              <div className="text-sm font-bold text-[#edf1f4]">Barcha ochiq kodli loyihalar GitHub da</div>
              <div className="text-xs text-[#9caeb8]">github.com/shoyim repozitoriysida yangi scriptlar va paketlar muntazam yuklab boriladi</div>
            </div>
          </div>
          <KepButton
            asAnchor
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            variant="outline"
            size="sm"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            GitHub ga o‘tish
          </KepButton>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <KepCard hasCorners accent="cyan" className="max-w-2xl w-full p-6 bg-[#0e121a] border-white/20">
            <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/10">
              <div className="font-mono text-xs text-[#93d7e2]">
                // DETAILED_LOGS :: {selectedProject.id}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="font-mono text-xs text-[#9caeb8] hover:text-[#edf1f4] px-2 py-1 border border-white/10"
              >
                [YOPISH ✕]
              </button>
            </div>

            <h3 className="text-xl font-bold font-mono text-[#edf1f4] mb-2">
              {selectedProject.title}
            </h3>

            <p className="font-mono text-sm text-[#9caeb8] leading-relaxed mb-4">
              {selectedProject.fullDetails}
            </p>

            <div className="mb-6">
              <div className="font-mono text-xs text-[#d8c697] uppercase mb-2">
                Texnologik Stek:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t, idx) => (
                  <Badge key={idx} variant="cyan">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              {selectedProject.githubUrl && (
                <KepButton
                  asAnchor
                  href={selectedProject.githubUrl}
                  target="_blank"
                  size="sm"
                  variant="outline"
                  icon={<GithubIcon className="w-3.5 h-3.5" />}
                >
                  GitHub Repo
                </KepButton>
              )}
              {selectedProject.telegramPostUrl && (
                <KepButton
                  asAnchor
                  href={selectedProject.telegramPostUrl}
                  target="_blank"
                  size="sm"
                  variant="primary"
                  icon={<Send className="w-3.5 h-3.5" />}
                >
                  Telegram Post
                </KepButton>
              )}
            </div>
          </KepCard>
        </div>
      )}
    </section>
  );
};
