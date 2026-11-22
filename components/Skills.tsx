import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { PortfolioCard } from './ui/KepCard';
import { Badge } from './ui/Badge';
import { Cpu, Layout, Server, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-[var(--portfolio-primary)]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[var(--portfolio-accent-gold)]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[var(--portfolio-accent-green)]" />;
      default:
        return <Cpu className="w-5 h-5 text-[var(--portfolio-primary)]" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-[var(--portfolio-border)] bg-[var(--portfolio-bg-default)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="font-mono text-xs text-[var(--portfolio-primary)] tracking-wider uppercase mb-2">
            {'// 04. TEXNOLOGIYALAR VA MATRITSA'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[var(--portfolio-text-primary)] uppercase tracking-tight">
            Texnik Stek & Ko‘nikmalar
          </h2>
          <p className="mt-2 text-[var(--portfolio-text-secondary)] font-mono text-sm max-w-xl">
            Backend xizmatlardan tortib, zamonaviy frontend interfeyslar va Linux DevOps quvurlarigacha chuqur amaliy bilimlar.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skills.map((category, idx) => (
            <PortfolioCard key={idx} hasCorners accent="cyan" className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[var(--portfolio-border)]">
                  {getIcon(category.icon)}
                  <h3 className="font-mono font-bold text-base text-[var(--portfolio-text-primary)] uppercase">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Progress List */}
                <div className="space-y-5">
                  {category.skills.map((s, sIdx) => (
                    <div key={sIdx} className="font-mono">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-[var(--portfolio-text-primary)] font-medium">{s.name}</span>
                        <span className="text-[var(--portfolio-primary)] font-bold">{s.level}%</span>
                      </div>

                      {/* Technical Progress Bar */}
                      <div className="w-full h-1.5 bg-[var(--portfolio-bg-elevation-2)] border border-[var(--portfolio-border)] overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[var(--portfolio-accent-gold)] to-[var(--portfolio-primary)]"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>

                      <div className="text-[11px] text-[var(--portfolio-text-muted)] mt-1">
                        {s.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PortfolioCard>
          ))}
        </div>

        {/* Auxiliary Tools Pills */}
        <div className="mt-12 p-6 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)]">
          <div className="font-mono text-xs text-[var(--portfolio-text-secondary)] uppercase mb-3">
            {'// QO‘SHIMCHA ASBOB VA PROTOKOLLAR:'}
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'REST API',
              'GraphQL',
              'WebSockets',
              'Microservices',
              'Composer',
              'npm/pnpm',
              'Git Flow',
              'Ubuntu Server',
              'Systemd',
              'Certbot/SSL',
              'Click & Payme API',
              'Aiogram',
              'Celery',
              'Postman',
              'Vite',
            ].map((tag, idx) => (
              <Badge key={idx} variant="muted">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
