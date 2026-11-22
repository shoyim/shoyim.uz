'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Send, Terminal } from 'lucide-react';
import { GithubIcon } from './ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0a0d14] py-12 text-[#9caeb8] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="md:col-span-5 flex items-center gap-3">
            <span className="w-8 h-8 bg-[#131821] border border-[#93d7e2]/40 text-[#93d7e2] flex items-center justify-center font-bold">
              <Terminal className="w-4 h-4" />
            </span>
            <div>
              <div className="text-sm font-bold text-[#edf1f4] tracking-wider">
                SHOYIM.UZ // KEP_STYLE_DARK
              </div>
              <div className="text-[11px] text-[#596a75]">
                Senior Full-Stack Software Engineer & Solutions Architect
              </div>
            </div>
          </div>

          {/* System Telemetry stats */}
          <div className="md:col-span-4 flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#28a66a]" />
              <span>CORE: ACTIVE</span>
            </div>
            <span>•</span>
            <div>PING: 14ms</div>
            <span>•</span>
            <div>BUILD: v2.4.0</div>
          </div>

          {/* Socials */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/10 bg-[#0e121a] hover:border-[#93d7e2] hover:text-[#93d7e2] transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/10 bg-[#0e121a] hover:border-[#93d7e2] hover:text-[#93d7e2] transition-colors"
              title="Telegram Portfolio"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#596a75]">
          <div>
            © 2026 Shoyim Obloqulov. Barcha huquqlar himoyalangan.
          </div>
          <div>
            Designed with Inspiration from <span className="text-[#93d7e2]">KEP.uz</span> Cyberpunk Architecture
          </div>
        </div>
      </div>
    </footer>
  );
};
