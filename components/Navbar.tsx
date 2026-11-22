'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { KepButton } from './ui/KepButton';
import { Terminal, Send, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './ui/Icons';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', num: '01', label: 'Bosh' },
    { href: '#about', num: '02', label: 'Tajriba' },
    { href: '#projects', num: '03', label: 'Loyihalar' },
    { href: '#skills', num: '04', label: 'Stek' },
    { href: '#contact', num: '05', label: 'Aloqa' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#0a0d14]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Monogram */}
        <div className="flex items-center gap-4">
          <Link
            href="#home"
            className="flex items-center gap-2 text-sm sm:text-base font-mono font-bold tracking-wider text-[#edf1f4] hover:text-[#93d7e2] transition-colors"
          >
            <span className="inline-flex items-center justify-center w-7 h-7 bg-[#131821] border border-[#93d7e2]/40 text-[#93d7e2]">
              <Terminal className="w-4 h-4" />
            </span>
            <span>SHOYIM.UZ</span>
          </Link>

          {/* System Status Pill */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono border border-white/[0.08] bg-[#0e121a] text-[#9caeb8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#28a66a] animate-pulse" />
            <span>ONLINE // AVAILABLE</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-[#9caeb8] hover:text-[#edf1f4] hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition-all duration-150"
            >
              <span className="text-[#93d7e2]/60 mr-1.5">{item.num}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-white/[0.08] bg-[#0e121a] text-[#9caeb8] hover:text-[#edf1f4] hover:border-[#93d7e2]/40 transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <KepButton
            asAnchor
            href={PORTFOLIO_DATA.profile.telegramChannel}
            target="_blank"
            size="sm"
            variant="outline"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Telegram // Portfolio
          </KepButton>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-white/10 bg-[#0e121a] text-[#edf1f4]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/[0.08] bg-[#0e121a] px-4 pt-3 pb-6 flex flex-col gap-3 font-mono text-sm">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-[#9caeb8] hover:text-[#edf1f4] hover:bg-white/[0.04] border-l-2 border-transparent hover:border-[#93d7e2]"
            >
              <span className="text-[#93d7e2] mr-2">{item.num} //</span>
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-2">
            <KepButton
              asAnchor
              href={PORTFOLIO_DATA.profile.telegramChannel}
              target="_blank"
              size="sm"
              variant="primary"
              icon={<Send className="w-3.5 h-3.5" />}
            >
              Telegram Kanal (@shoyim_portfolio)
            </KepButton>
          </div>
        </div>
      )}
    </header>
  );
};
