import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PortfolioCard } from '@/components/ui/KepCard';
import { PortfolioButton } from '@/components/ui/KepButton';
import { Badge } from '@/components/ui/Badge';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers, Send, Star, Terminal } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === resolvedParams.id);
  if (!project) return { title: 'Loyiha topilmadi // shoyim.uz' };

  return {
    title: `${project.title} // Case Study // shoyim.uz`,
    description: project.description,
  };
}

export default async function SingleProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const relatedProjects = PORTFOLIO_DATA.projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[var(--portfolio-bg-default)] flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 portfolio-bg-dots">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Loyihalar', href: '/projects' },
              { label: project.title },
            ]}
          />

          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-primary)] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Katalogga qaytish</span>
          </Link>

          {/* Project Header Box */}
          <PortfolioCard hasCorners accent="cyan" className="p-8 mb-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Badge variant={project.category === 'opensource' ? 'gold' : 'cyan'}>
                  {project.categoryLabel}
                </Badge>
                {project.stars && (
                  <span className="flex items-center gap-1 font-mono text-xs text-[var(--portfolio-accent-gold)]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {project.stars}
                  </span>
                )}
              </div>

              <div className="font-mono text-xs text-[var(--portfolio-text-muted)]">
                ID: <span className="text-[var(--portfolio-primary)]">{project.id}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold font-mono text-[var(--portfolio-text-primary)] uppercase tracking-tight mb-4">
              {project.title}
            </h1>

            <p className="text-base font-mono text-[var(--portfolio-text-secondary)] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[var(--portfolio-border)]">
              {project.githubUrl && (
                <PortfolioButton
                  asAnchor
                  href={project.githubUrl}
                  target="_blank"
                  variant="primary"
                  size="md"
                  icon={<GithubIcon className="w-4 h-4" />}
                >
                  GitHub da ko‘rish
                </PortfolioButton>
              )}

              {project.liveUrl && (
                <PortfolioButton
                  asAnchor
                  href={project.liveUrl}
                  target="_blank"
                  variant="secondary"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4 text-[var(--portfolio-primary)]" />}
                >
                  Jonli Demo (Live)
                </PortfolioButton>
              )}

              {project.telegramPostUrl && (
                <PortfolioButton
                  asAnchor
                  href={project.telegramPostUrl}
                  target="_blank"
                  variant="outline"
                  size="md"
                  icon={<Send className="w-4 h-4" />}
                >
                  Telegram Post (@shoyim_portfolio)
                </PortfolioButton>
              )}
            </div>
          </PortfolioCard>

          {/* Details Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14">
            {/* Left: Deep architectural description */}
            <div className="md:col-span-8 space-y-8">
              <PortfolioCard hasCorners={false} className="p-8 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)]">
                <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[var(--portfolio-primary)] uppercase font-bold">
                  <Terminal className="w-4 h-4" />
                  <span>TEXNIK TAHLIL VA ARXITEKTURA</span>
                </div>

                <div className="prose prose-invert max-w-none font-mono text-sm text-[var(--portfolio-text-secondary)] leading-relaxed space-y-4">
                  <p>{project.fullDetails}</p>
                  <p>
                    Ushbu yechim tizimning masshtablanuvchanligi (scalability), modulligi va xavfsizligini taʼminlash uchun toza arxitektura tamoyillari asosida yaratilgan. Har bir modul mustaqil ravishda testlangan va CI/CD orqali avtomatlashtirilgan.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--portfolio-border)] space-y-3 font-mono text-xs">
                  <div className="text-[var(--portfolio-text-primary)] font-bold uppercase">{'// ASOSIY YUTUQLAR:'}</div>
                  <div className="flex items-start gap-2 text-[var(--portfolio-text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--portfolio-accent-green)] shrink-0 mt-0.5" />
                    <span>Xatoliklarni kamaytirish va maʼlumotlar izolyatsiyasini to‘liq taʼminlash</span>
                  </div>
                  <div className="flex items-start gap-2 text-[var(--portfolio-text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--portfolio-accent-green)] shrink-0 mt-0.5" />
                    <span>Yuqori yuklamalarda so‘rovlar kechikishini minimal darajaga tushirish</span>
                  </div>
                  <div className="flex items-start gap-2 text-[var(--portfolio-text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--portfolio-accent-green)] shrink-0 mt-0.5" />
                    <span>Ochiq kodli yoki korporativ integratsiya uchun qulay API/paket strukturasi</span>
                  </div>
                </div>
              </PortfolioCard>
            </div>

            {/* Right: Tech Stack breakdown */}
            <div className="md:col-span-4 space-y-6">
              <PortfolioCard hasCorners accent="gold" className="p-6">
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[var(--portfolio-border)] font-mono text-xs text-[var(--portfolio-accent-gold)]">
                  <Layers className="w-4 h-4" />
                  <span>TEXNOLOGIYALAR</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((t, idx) => (
                    <Badge key={idx} variant="cyan">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="p-3 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] font-mono text-xs text-[var(--portfolio-text-secondary)] space-y-2">
                  <div className="flex justify-between">
                    <span>Toifa:</span>
                    <span className="text-[var(--portfolio-text-primary)]">{project.categoryLabel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kafolat:</span>
                    <span className="text-[var(--portfolio-accent-green)]">Production-Ready</span>
                  </div>
                </div>
              </PortfolioCard>

              {/* Telegram Sync Card */}
              <PortfolioCard hasCorners={false} className="p-6 border border-[var(--portfolio-border-bright)] bg-[var(--portfolio-bg-paper)]">
                <div className="font-mono text-xs text-[var(--portfolio-primary)] font-bold mb-2">
                  TELEGRAM KANALDAGI POST
                </div>
                <p className="font-mono text-xs text-[var(--portfolio-text-secondary)] leading-relaxed mb-4">
                  Ushbu loyihaning video sharhi va qo‘shimcha skrinshotlari rasmiy Telegram kanalida eʼlon qilingan.
                </p>
                <PortfolioButton
                  asAnchor
                  href={project.telegramPostUrl || PORTFOLIO_DATA.profile.telegramChannel}
                  target="_blank"
                  size="sm"
                  variant="outline"
                  icon={<Send className="w-3.5 h-3.5" />}
                >
                  Kanalda o‘qish
                </PortfolioButton>
              </PortfolioCard>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="pt-8 border-t border-[var(--portfolio-border)]">
              <div className="font-mono text-xs text-[var(--portfolio-primary)] uppercase mb-4">
                {'// O‘XSHASH TOIFADAGI LOYIHALAR:'}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((rel) => (
                  <PortfolioCard key={rel.id} hasCorners accent="default" className="p-6">
                    <h4 className="font-mono font-bold text-base text-[var(--portfolio-text-primary)] mb-2">
                      {rel.title}
                    </h4>
                    <p className="font-mono text-xs text-[var(--portfolio-text-secondary)] mb-4">
                      {rel.description}
                    </p>
                    <Link
                      href={`/projects/${rel.id}`}
                      className="text-xs font-mono text-[var(--portfolio-primary)] hover:underline"
                    >
                      Batafsil ko‘rish ↗
                    </Link>
                  </PortfolioCard>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
