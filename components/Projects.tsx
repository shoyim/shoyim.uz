'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA, Project } from '@/data/portfolio';
import { PortfolioCard } from './ui/KepCard';
import { PortfolioButton } from './ui/KepButton';
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
    <section id="projects" className="py-20 border-b border-[var(--portfolio-border)] bg-[var(--portfolio-bg-default)] relative portfolio-bg-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="font-mono text-xs text-[var(--portfolio-primary)] tracking-wider uppercase mb-2">
              {'// 03. PORTFOLIO & REPOZITORIYLAR'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[var(--portfolio-text-primary)] uppercase tracking-tight">
              Amalga Oshirilgan Loyihalar
            </h2>
            <p className="mt-2 text-[var(--portfolio-text-secondary)] font-mono text-sm max-w-xl">
              Telegram kanaldagi (<a href={PORTFOLIO_DATA.profile.telegramChannel} target="_blank" rel="noopener noreferrer" className="text-[var(--portfolio-primary)] underline hover:opacity-80">@shoyim_portfolio</a>) real ishlardan saralangan loyihalar va ochiq kodli paketlar.
            </p>
          </div>

          {/* Telegram Channel Live Banner */}
          <PortfolioCard hasCorners={false} className="py-3 px-4 border border-[var(--portfolio-border-bright)] bg-[var(--portfolio-bg-elevation-1)] flex items-center gap-3">
            <Send className="w-5 h-5 text-[var(--portfolio-primary)] shrink-0" />
            <div className="font-mono text-xs">
              <div className="text-[var(--portfolio-text-primary)] font-bold">@shoyim_portfolio</div>
              <div className="text-[11px] text-[var(--portfolio-text-secondary)]">Har bir yangi loyiha kanalda eʼlon qilib boriladi</div>
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-[var(--portfolio-border)] pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 font-mono text-xs tracking-wider border rounded-none cursor-pointer transition-all duration-150 ${activeCategory === cat.id
                ? 'bg-[var(--portfolio-primary)] text-[var(--portfolio-primary-text)] font-bold border-[var(--portfolio-primary)]'
                : 'bg-[var(--portfolio-bg-paper)] text-[var(--portfolio-text-secondary)] border-[var(--portfolio-border)] hover:border-[var(--portfolio-border-bright)] hover:text-[var(--portfolio-text-primary)]'
                }`}
            >
              [ {cat.label} ]
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <PortfolioCard
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
                    <span className="flex items-center gap-1 font-mono text-[11px] text-[var(--portfolio-accent-gold)]">
                      <Star className="w-3 h-3 fill-current" />
                      {project.stars}
                    </span>
                  )}
                </div>

                {/* Project Screenshot if available */}
                {project.image && (
                  <div className="mb-4 overflow-hidden border border-[var(--portfolio-border)] aspect-video relative bg-[var(--portfolio-bg-elevation-1)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={338}
                      className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold font-mono text-[var(--portfolio-text-primary)] mb-2 leading-snug">
                  {project.title}
                </h3>

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

              {/* Action Links */}
              <div className="pt-4 border-t border-[var(--portfolio-border)] flex items-center justify-between gap-2 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-[var(--portfolio-primary)] hover:underline cursor-pointer"
                >
                  [ To‘liq tavsif // + ]
                </button>

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

        {/* Bottom GitHub Profile Callout */}
        <div className="mt-14 p-6 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-6 h-6 text-[var(--portfolio-primary)] shrink-0" />
            <div>
              <div className="text-sm font-bold text-[var(--portfolio-text-primary)]">Barcha ochiq kodli loyihalar GitHub da</div>
              <div className="text-xs text-[var(--portfolio-text-secondary)]">github.com/shoyim repozitoriysida yangi scriptlar va paketlar muntazam yuklab boriladi</div>
            </div>
          </div>
          <PortfolioButton
            asAnchor
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            variant="outline"
            size="sm"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            GitHub ga o‘tish
          </PortfolioButton>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <PortfolioCard hasCorners accent="cyan" className="max-w-2xl w-full p-6 bg-[var(--portfolio-bg-paper)] border-[var(--portfolio-border)]">
            <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[var(--portfolio-border)]">
              <div className="font-mono text-xs text-[var(--portfolio-primary)] font-bold">
                {'// LOYIHA :: ' + selectedProject.title}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="font-mono text-xs text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-text-primary)] px-2 py-1 border border-[var(--portfolio-border)] cursor-pointer"
              >
                [YOPISH ✕]
              </button>
            </div>

            <h3 className="text-xl font-bold font-mono text-[var(--portfolio-text-primary)] mb-2">
              {selectedProject.title}
            </h3>

            {selectedProject.image && (
              <div className="mb-4 overflow-hidden border border-[var(--portfolio-border-bright)] aspect-video relative bg-[var(--portfolio-bg-elevation-1)]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover grayscale contrast-110"
                />
              </div>
            )}

            <p className="font-mono text-sm text-[var(--portfolio-text-secondary)] leading-relaxed mb-4">
              {selectedProject.fullDetails}
            </p>

            <div className="mb-6">
              <div className="font-mono text-xs text-[var(--portfolio-accent-gold)] uppercase mb-2">
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

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[var(--portfolio-border)]">
              {selectedProject.githubUrl && (
                <PortfolioButton
                  asAnchor
                  href={selectedProject.githubUrl}
                  target="_blank"
                  size="sm"
                  variant="outline"
                  icon={<GithubIcon className="w-3.5 h-3.5" />}
                >
                  GitHub Repo
                </PortfolioButton>
              )}
              {selectedProject.telegramPostUrl && (
                <PortfolioButton
                  asAnchor
                  href={selectedProject.telegramPostUrl}
                  target="_blank"
                  size="sm"
                  variant="primary"
                  icon={<Send className="w-3.5 h-3.5" />}
                >
                  Telegram Post
                </PortfolioButton>
              )}
            </div>
          </PortfolioCard>
        </div>
      )}
    </section>
  );
};
