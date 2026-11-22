import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PortfolioCard } from '@/components/ui/KepCard';
import { PortfolioButton } from '@/components/ui/KepButton';
import { Badge } from '@/components/ui/Badge';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Briefcase, Calendar, CheckCircle2, GraduationCap, MapPin, Terminal, Award, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tajriba & Muhandislik // Shoyim Obloqulov // shoyim.uz',
  description: 'Shoyim Obloqulovning to‘liq kasbiy yo‘li, SamDU IT Markazidagi faoliyati, tizimlar arxitekturasi va algoritmik yutuqlari.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--portfolio-bg-default)] flex flex-col selection:bg-[var(--portfolio-primary-dim)]">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Tajriba & Muhandislik' }]} />

          {/* Page Title Header */}
          <div className="mb-12">
            <div className="font-mono text-xs text-[var(--portfolio-primary)] tracking-wider uppercase mb-2">
              {'// MEN HAQIMDA & KASBIY TARIX'}
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-mono text-[var(--portfolio-text-primary)] uppercase tracking-tight">
              Shoyim Obloqulov {'//'} Kasbiy Tarix
            </h1>
            <p className="mt-3 text-[var(--portfolio-text-secondary)] font-mono text-sm max-w-3xl leading-relaxed">
              O‘zbekistonlik Senior Full-Stack dasturchi, yuqori yuklamali veb platformalar va Telegram bot ekotizimlari arxitektori. Algoritmik musobaqalar ishtirokchisi hamda ochiq kodli paketlar muallifi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Left: Detailed Career Milestones */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-xl font-bold font-mono text-[var(--portfolio-text-primary)] uppercase flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[var(--portfolio-primary)]" />
                Ish Tajribasi va Loyihalar
              </h2>

              {PORTFOLIO_DATA.experience.map((item, idx) => (
                <PortfolioCard key={idx} hasCorners accent={idx === 0 ? 'cyan' : 'default'} className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="font-mono font-bold text-lg text-[var(--portfolio-text-primary)]">
                      {item.role}
                    </div>
                    <Badge variant="cyan">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {item.period}
                    </Badge>
                  </div>

                  <div className="font-mono text-xs text-[var(--portfolio-accent-gold)] mb-4 flex items-center gap-2">
                    <span className="font-bold">{item.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[var(--portfolio-text-secondary)]">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--portfolio-text-secondary)] font-mono mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs font-mono text-[var(--portfolio-text-primary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--portfolio-accent-green)] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[var(--portfolio-border)] flex flex-wrap gap-2">
                    {item.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border)] font-mono text-xs text-[var(--portfolio-primary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </PortfolioCard>
              ))}

              {/* Education section */}
              <div className="pt-4">
                <h2 className="text-xl font-bold font-mono text-[var(--portfolio-text-primary)] uppercase flex items-center gap-2 mb-6">
                  <GraduationCap className="w-5 h-5 text-[var(--portfolio-accent-gold)]" />
                  Taʼlim va Akademik Poydevor
                </h2>

                <PortfolioCard hasCorners accent="gold" className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="font-mono font-bold text-base text-[var(--portfolio-text-primary)]">
                      Sharof Rashidov nomidagi Samarqand Davlat Universiteti (SamDU)
                    </div>
                    <Badge variant="gold">Bakalavr</Badge>
                  </div>
                  <div className="text-xs font-mono text-[var(--portfolio-text-secondary)] mb-3">
                    Amaliy matematika va axborot texnologiyalari fakulteti
                  </div>
                  <p className="text-xs font-mono text-[var(--portfolio-text-secondary)] leading-relaxed">
                    Algoritmlar nazariyasi, maʼlumotlar tuzilmalari, diskret matematika va ehtimollar nazariyasi bo‘yicha fundamental bilimlar. Universitetning dasturiy taʼminot markazida yetakchi amaliy loyihalar yaratish.
                  </p>
                </PortfolioCard>
              </div>
            </div>

            {/* Right: Technical Specs & Philosophy */}
            <div className="lg:col-span-4 space-y-6">
              {/* Terminal Quick Specs */}
              <PortfolioCard hasCorners accent="cyan" className="p-6">
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[var(--portfolio-border)] font-mono text-xs text-[var(--portfolio-primary)]">
                  <Terminal className="w-4 h-4" />
                  <span>TEXNIK KO‘RSATKICHLAR</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-[var(--portfolio-text-secondary)]">
                  <div className="flex justify-between py-1 border-b border-[var(--portfolio-border)]">
                    <span>Primary Stack:</span>
                    <span className="text-[var(--portfolio-text-primary)] font-bold">PHP, Python, TS</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[var(--portfolio-border)]">
                    <span>Frameworks:</span>
                    <span className="text-[var(--portfolio-text-primary)] font-bold">Laravel, Django, Next</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[var(--portfolio-border)]">
                    <span>Databases:</span>
                    <span className="text-[var(--portfolio-text-primary)] font-bold">PostgreSQL, Redis</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[var(--portfolio-border)]">
                    <span>DevOps:</span>
                    <span className="text-[var(--portfolio-text-primary)] font-bold">Docker, Nginx, Linux</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[var(--portfolio-border)]">
                    <span>Location:</span>
                    <span className="text-[var(--portfolio-text-primary)] font-bold">Samarkand (UTC+5)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[var(--portfolio-border)]">
                    <span>English:</span>
                    <span className="text-[var(--portfolio-text-primary)] font-bold">Technical / Fluent</span>
                  </div>
                </div>
              </PortfolioCard>

              {/* Competitive Programming Badges */}
              <PortfolioCard hasCorners accent="gold" className="p-6">
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[var(--portfolio-border)] font-mono text-xs text-[var(--portfolio-accent-gold)]">
                  <Award className="w-4 h-4" />
                  <span>ALGORITHMIC PROFILES</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] flex items-center justify-between">
                    <div>
                      <div className="text-[var(--portfolio-text-primary)] font-bold">RoboContest.uz</div>
                      <div className="text-[11px] text-[var(--portfolio-text-secondary)]">Olimpiada dasturlash reytingi</div>
                    </div>
                    <Badge variant="green">Active</Badge>
                  </div>

                  <div className="p-3 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] flex items-center justify-between">
                    <div>
                      <div className="text-[var(--portfolio-text-primary)] font-bold">Online Judge & Contests</div>
                      <div className="text-[11px] text-[var(--portfolio-text-secondary)]">Algoritmik musobaqalar</div>
                    </div>
                    <Badge variant="cyan">Ranked</Badge>
                  </div>

                  <div className="p-3 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] flex items-center justify-between">
                    <div>
                      <div className="text-[var(--portfolio-text-primary)] font-bold">GitHub Open Source</div>
                      <div className="text-[11px] text-[var(--portfolio-text-secondary)]">github.com/shoyim</div>
                    </div>
                    <Badge variant="purple">Maintainer</Badge>
                  </div>
                </div>
              </PortfolioCard>

              {/* Telegram Channel Callout */}
              <PortfolioCard hasCorners={false} className="p-6 border border-[var(--portfolio-border-bright)] bg-[var(--portfolio-bg-paper)]">
                <div className="font-mono text-xs text-[var(--portfolio-primary)] font-bold mb-2">
                  TELEGRAM PORTFOLIO FEED
                </div>
                <p className="font-mono text-xs text-[var(--portfolio-text-secondary)] leading-relaxed mb-4">
                  Barcha amaliy keyslar, yangi loyihalar skrinshotlari va video demolar muntazam ravishda kanalga yuklab boriladi.
                </p>
                <PortfolioButton
                  asAnchor
                  href={PORTFOLIO_DATA.profile.telegramChannel}
                  target="_blank"
                  size="sm"
                  variant="primary"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  @shoyim_portfolio ga ulanish
                </PortfolioButton>
              </PortfolioCard>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
