import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { KepCard } from '@/components/ui/KepCard';
import { KepButton } from '@/components/ui/KepButton';
import { Badge } from '@/components/ui/Badge';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Briefcase, Calendar, CheckCircle2, Cpu, GraduationCap, MapPin, Terminal, Award, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tajriba & Muhandislik // Shoyim Obloqulov // shoyim.uz',
  description: 'Shoyim Obloqulovning to‘liq kasbiy yo‘li, SamDU IT Markazidagi faoliyati, tizimlar arxitekturasi va algoritmik yutuqlari.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0d14] flex flex-col selection:bg-[#93d7e2]/20 selection:text-white">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Tajriba & Muhandislik' }]} />

          {/* Page Title Header */}
          <div className="mb-12">
            <div className="font-mono text-xs text-[#93d7e2] tracking-wider uppercase mb-2">
              // MEN HAQIMDA
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-mono text-[#edf1f4] uppercase tracking-tight">
              Shoyim Obloqulov // Kasbiy Tarix
            </h1>
            <p className="mt-3 text-[#9caeb8] font-mono text-sm max-w-3xl leading-relaxed">
              O‘zbekistonlik Senior Full-Stack dasturchi, yuqori yuklamali veb platformalar va Telegram bot ekotizimlari arxitektori. Algoritmik musobaqalar ishtirokchisi hamda ochiq kodli paketlar muallifi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Left: Detailed Career Milestones */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-xl font-bold font-mono text-[#edf1f4] uppercase flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#93d7e2]" />
                Ish Tajribasi va Loyihalar
              </h2>

              {PORTFOLIO_DATA.experience.map((item, idx) => (
                <KepCard key={idx} hasCorners accent={idx === 0 ? 'cyan' : 'default'} className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="font-mono font-bold text-lg text-[#edf1f4]">
                      {item.role}
                    </div>
                    <Badge variant="cyan">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {item.period}
                    </Badge>
                  </div>

                  <div className="font-mono text-xs text-[#d8c697] mb-4 flex items-center gap-2">
                    <span className="font-bold">{item.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#9caeb8]">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>

                  <p className="text-sm text-[#9caeb8] font-mono mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs font-mono text-[#edf1f4]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#28a66a] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                    {item.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-[#131821] border border-white/[0.08] font-mono text-xs text-[#93d7e2]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </KepCard>
              ))}

              {/* Education section */}
              <div className="pt-4">
                <h2 className="text-xl font-bold font-mono text-[#edf1f4] uppercase flex items-center gap-2 mb-6">
                  <GraduationCap className="w-5 h-5 text-[#d8c697]" />
                  Taʼlim va Akademik Poydevor
                </h2>

                <KepCard hasCorners accent="gold" className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="font-mono font-bold text-base text-[#edf1f4]">
                      Sharof Rashidov nomidagi Samarqand Davlat Universiteti (SamDU)
                    </div>
                    <Badge variant="gold">Bakalavr</Badge>
                  </div>
                  <div className="text-xs font-mono text-[#9caeb8] mb-3">
                    Amaliy matematika va axborot texnologiyalari fakulteti
                  </div>
                  <p className="text-xs font-mono text-[#9caeb8] leading-relaxed">
                    Algoritmlar nazariyasi, maʼlumotlar tuzilmalari, diskret matematika va ehtimollar nazariyasi bo‘yicha fundamental bilimlar. Universitetning dasturiy taʼminot markazida yetakchi amaliy loyihalar yaratish.
                  </p>
                </KepCard>
              </div>
            </div>

            {/* Right: Technical Specs & Philosophy */}
            <div className="lg:col-span-4 space-y-6">
              {/* Terminal Quick Specs */}
              <KepCard hasCorners accent="cyan" className="p-6">
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/[0.08] font-mono text-xs text-[#93d7e2]">
                  <Terminal className="w-4 h-4" />
                  <span>TEXNIK KO‘RSATKICHLAR</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-[#9caeb8]">
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span>Primary Stack:</span>
                    <span className="text-[#edf1f4]">PHP, Python, TS</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span>Frameworks:</span>
                    <span className="text-[#edf1f4]">Laravel, Django, Next</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span>Databases:</span>
                    <span className="text-[#edf1f4]">PostgreSQL, Redis</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span>DevOps:</span>
                    <span className="text-[#edf1f4]">Docker, Nginx, Linux</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span>Location:</span>
                    <span className="text-[#edf1f4]">Samarkand (UTC+5)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span>English:</span>
                    <span className="text-[#edf1f4]">Technical / Fluent</span>
                  </div>
                </div>
              </KepCard>

              {/* Competitive Programming Badges */}
              <KepCard hasCorners accent="gold" className="p-6">
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/[0.08] font-mono text-xs text-[#d8c697]">
                  <Award className="w-4 h-4" />
                  <span>ALGORITHMIC PROFILES</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 border border-white/10 bg-[#131821] flex items-center justify-between">
                    <div>
                      <div className="text-[#edf1f4] font-bold">RoboContest.uz</div>
                      <div className="text-[11px] text-[#9caeb8]">Olimpiada dasturlash reytingi</div>
                    </div>
                    <Badge variant="green">Active</Badge>
                  </div>

                  <div className="p-3 border border-white/10 bg-[#131821] flex items-center justify-between">
                    <div>
                      <div className="text-[#edf1f4] font-bold">Online Judge & Contests</div>
                      <div className="text-[11px] text-[#9caeb8]">Algoritmik musobaqalar</div>
                    </div>
                    <Badge variant="cyan">Ranked</Badge>
                  </div>

                  <div className="p-3 border border-white/10 bg-[#131821] flex items-center justify-between">
                    <div>
                      <div className="text-[#edf1f4] font-bold">GitHub Open Source</div>
                      <div className="text-[11px] text-[#9caeb8]">github.com/shoyim</div>
                    </div>
                    <Badge variant="purple">Maintainer</Badge>
                  </div>
                </div>
              </KepCard>

              {/* Telegram Channel Callout */}
              <KepCard hasCorners={false} className="p-6 border border-[#93d7e2]/30 bg-[#131821]">
                <div className="font-mono text-xs text-[#93d7e2] font-bold mb-2">
                  TELEGRAM PORTFOLIO FEED
                </div>
                <p className="font-mono text-xs text-[#9caeb8] leading-relaxed mb-4">
                  Barcha amaliy keyslar, yangi loyihalar skrinshotlari va video demolar muntazam ravishda kanalga yuklab boriladi.
                </p>
                <KepButton
                  asAnchor
                  href={PORTFOLIO_DATA.profile.telegramChannel}
                  target="_blank"
                  size="sm"
                  variant="primary"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  @shoyim_portfolio ga ulanish
                </KepButton>
              </KepCard>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
