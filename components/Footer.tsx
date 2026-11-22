'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Send, Terminal } from 'lucide-react';
import { GithubIcon } from './ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[var(--portfolio-border)] bg-[var(--portfolio-bg-default)] py-12 text-[var(--portfolio-text-secondary)] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-8 border-b border-[var(--portfolio-border)]">
          {/* Brand */}
          <div className="md:col-span-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border-bright)] text-[var(--portfolio-primary)] flex items-center justify-center font-bold">
              <Terminal className="w-4 h-4" />
            </span>
            <div>
              <div className="text-sm font-bold text-[var(--portfolio-text-primary)] tracking-wider">
                SHOYIM OBLOQULOV // SHOYIM.UZ
              </div>
              <div className="text-[11px] text-[var(--portfolio-text-muted)]">
                Senior Full-Stack Software Engineer & Solutions Architect
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="md:col-span-4 flex items-center md:justify-end gap-3">
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] hover:border-[var(--portfolio-primary)] hover:text-[var(--portfolio-primary)] transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] hover:border-[var(--portfolio-primary)] hover:text-[var(--portfolio-primary)] transition-colors"
              title="Telegram Portfolio"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[var(--portfolio-text-muted)]">
          <div>
            © 2026 Shoyim Obloqulov. Barcha huquqlar himoyalangan.
          </div>
          <div>
            Full-Stack Software Engineering & System Architecture
          </div>
        </div>
      </div>
    </footer>
  );
};
