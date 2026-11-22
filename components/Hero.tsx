'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { PortfolioButton } from './ui/KepButton';
import { PortfolioCard } from './ui/KepCard';
import { Badge } from './ui/Badge';
import { ArrowDown, ArrowUpRight, Code2, GitBranch, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-32 portfolio-bg-dots border-b border-[var(--portfolio-border)] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--portfolio-primary-dim)] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Terminal Header Prompt */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] font-mono text-xs text-[var(--portfolio-text-secondary)] mb-6">
          <Terminal className="w-3.5 h-3.5 text-[var(--portfolio-primary)]" />
          <span>shoyim@core:~$ whoami</span>
          <span className="w-2 h-4 bg-[var(--portfolio-primary)] animate-cursor inline-block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Big Intro */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="cyan">Full-Stack Engineer</Badge>
              <Badge variant="gold">System Architect</Badge>
              <Badge variant="green">Open Source Maintainer</Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--portfolio-text-primary)] uppercase font-mono mb-4 leading-tight">
              Shoyim <span className="text-[var(--portfolio-primary)]">Obloqulov</span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--portfolio-text-secondary)] font-mono mb-6 leading-relaxed max-w-2xl">
              Yuqori yuklamali veb platformalar, keng ko‘lamli API servislar, Telegram ekotizimlari va ochiq kodli paketlar arxitektori.
            </p>

            <div className="p-4 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] mb-8 font-mono text-xs text-[var(--portfolio-text-secondary)] border-l-2 border-l-[var(--portfolio-primary)]">
              <div className="text-[var(--portfolio-text-primary)] flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[var(--portfolio-primary)]" />
                <span className="font-bold">Core Stack:</span>
                <span>PHP/Laravel • Python/Django • Next.js • PostgreSQL • Docker</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <PortfolioButton
                asAnchor
                href="#projects"
                size="lg"
                variant="primary"
                icon={<ArrowDown className="w-4 h-4" />}
              >
                Loyihalarni Ko‘rish
              </PortfolioButton>

              <PortfolioButton
                asAnchor
                href={PORTFOLIO_DATA.profile.telegramChannel}
                target="_blank"
                size="lg"
                variant="secondary"
                icon={<ArrowUpRight className="w-4 h-4 text-[var(--portfolio-primary)]" />}
              >
                Telegram Portfolio (@shoyim_portfolio)
              </PortfolioButton>

              <PortfolioButton
                asAnchor
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                size="lg"
                variant="outline"
                icon={<GitBranch className="w-4 h-4" />}
              >
                GitHub Profile
              </PortfolioButton>
            </div>
          </div>

          {/* Right Column: Developer Profile & HUD Terminal */}
          <div className="lg:col-span-5">
            <PortfolioCard hasCorners accent="cyan" className="p-0 overflow-hidden">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 border border-[var(--portfolio-border-bright)] bg-transparent inline-block" />
                  <span className="w-2.5 h-2.5 bg-[var(--portfolio-text-muted)] inline-block" />
                  <span className="w-2.5 h-2.5 bg-[var(--portfolio-text-primary)] inline-block" />
                  <span className="text-[var(--portfolio-text-secondary)] ml-2">dev_identity.sys</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--portfolio-text-primary)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--portfolio-primary)] animate-pulse inline-block" />
                  <span>ONLINE // VERIFIED</span>
                </div>
              </div>

              {/* Photo & Profile Identity Header */}
              <div className="p-5 bg-[var(--portfolio-bg-paper)] border-b border-[var(--portfolio-border)]">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  {/* Portrait with HUD Framing */}
                  <div className="relative group shrink-0">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 relative overflow-hidden border border-[var(--portfolio-border-bright)] bg-[var(--portfolio-bg-elevation-1)] shadow-lg">
                      <Image
                        src="/images/profile.jpg"
                        alt="Shoyim Obloqulov"
                        width={280}
                        height={280}
                        priority
                        className="w-full h-full object-cover object-top contrast-[1.05] brightness-[1.02] transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* HUD Corner Brackets on Photo */}
                    <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[var(--portfolio-primary)] pointer-events-none" />
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[var(--portfolio-primary)] pointer-events-none" />
                    <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[var(--portfolio-primary)] pointer-events-none" />
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[var(--portfolio-primary)] pointer-events-none" />
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 text-center sm:text-left font-mono">
                    <div className="text-[11px] text-[var(--portfolio-text-muted)] uppercase tracking-wider mb-1">
                      {'// LEAD ARCHITECT'}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--portfolio-text-primary)] tracking-tight">
                      Shoyim Obloqulov
                    </h3>
                    <div className="text-xs text-[var(--portfolio-text-secondary)] mt-1">
                      Samarqand, O‘zbekiston (UTC+5)
                    </div>

                    <div className="mt-3 pt-3 border-t border-[var(--portfolio-border)] flex flex-wrap gap-1.5 justify-center sm:justify-start">
                      <Badge variant="cyan">Full-Stack</Badge>
                      <Badge variant="gold">System Arch</Badge>
                      <Badge variant="green">Open Source</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal Specs Body */}
              <div className="p-5 font-mono text-xs space-y-2.5 bg-[var(--portfolio-bg-default)] text-[var(--portfolio-text-secondary)]">
                <div className="flex items-center justify-between pb-1.5 border-b border-[var(--portfolio-border)]">
                  <span className="text-[var(--portfolio-text-muted)]">CORE_DOMAIN:</span>
                  <span className="text-[var(--portfolio-text-primary)] font-bold">https://shoyim.uz</span>
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-[var(--portfolio-border)]">
                  <span className="text-[var(--portfolio-text-muted)]">OPEN_SOURCE:</span>
                  <a
                    href="https://github.com/shoyim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--portfolio-text-primary)] hover:underline"
                  >
                    github.com/shoyim
                  </a>
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-[var(--portfolio-border)]">
                  <span className="text-[var(--portfolio-text-muted)]">TELEGRAM_FEED:</span>
                  <a
                    href="https://t.me/shoyim_portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--portfolio-text-primary)] hover:underline"
                  >
                    t.me/shoyim_portfolio
                  </a>
                </div>
                <div className="pt-1 text-[11px] leading-relaxed">
                  <span className="text-[var(--portfolio-text-primary)] font-bold">FOCUS:</span> [Enterprise Platforms, High-Load APIs & Distributed Systems]
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="grid grid-cols-2 border-t border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] text-center font-mono text-[11px] py-2.5">
                <div className="border-r border-[var(--portfolio-border)] text-[var(--portfolio-text-secondary)]">
                  ROLE: <span className="text-[var(--portfolio-text-primary)] font-bold">FULL-STACK</span>
                </div>
                <div className="text-[var(--portfolio-text-secondary)]">
                  EXPERIENCE: <span className="text-[var(--portfolio-text-primary)] font-bold">5+ YIL</span>
                </div>
              </div>
            </PortfolioCard>
          </div>
        </div>

        {/* 4 Key Metrics Cards with Corner Brackets */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {PORTFOLIO_DATA.profile.stats.map((stat, idx) => (
            <PortfolioCard key={idx} hasCorners accent={idx === 0 ? 'cyan' : idx === 1 ? 'gold' : 'cyan'}>
              <div className="font-mono text-xs text-[var(--portfolio-text-secondary)] uppercase mb-1">
                {'// ' + stat.label}
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[var(--portfolio-text-primary)] tracking-tight mb-1">
                <span className="text-[var(--portfolio-primary)]">{stat.value}</span>{' '}
                <span className="text-xs font-normal text-[var(--portfolio-text-secondary)]">{stat.unit}</span>
              </div>
              <div className="font-mono text-[11px] text-[var(--portfolio-text-muted)]">
                {stat.detail}
              </div>
            </PortfolioCard>
          ))}
        </div>
      </div>
    </section>
  );
};
