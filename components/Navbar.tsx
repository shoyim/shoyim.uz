'use client';

import React, { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { PortfolioButton } from './ui/KepButton';
import { Terminal, Send, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { GithubIcon } from './ui/Icons';

const subscribeTheme = (callback: () => void) => {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
};

const getThemeSnapshot = (): 'dark' | 'light' => {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem('portfolio-theme');
  return saved === 'light' ? 'light' : 'dark';
};

const getThemeServerSnapshot = (): 'dark' | 'light' => 'dark';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const pathname = usePathname();

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.dispatchEvent(new Event('storage'));
  };

  const navLinks = [
    { href: '/', num: '01', label: 'Asosiy' },
    { href: '/about', num: '02', label: 'Tajriba' },
    { href: '/projects', num: '03', label: 'Loyihalar' },
    { href: '/blog', num: '04', label: 'Blog' },
    { href: '/contact', num: '05', label: 'Aloqa' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--portfolio-border)] bg-[var(--portfolio-bg-default)]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm sm:text-base font-mono font-bold tracking-wider text-[var(--portfolio-text-primary)] hover:text-[var(--portfolio-primary)] transition-colors"
          >
            <span className="inline-flex items-center justify-center w-7 h-7 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border-bright)] text-[var(--portfolio-primary)]">
              <Terminal className="w-4 h-4" />
            </span>
            <span>SHOYIM.UZ</span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 border transition-all duration-150 ${
                  isActive
                    ? 'border-[var(--portfolio-border-bright)] bg-[var(--portfolio-primary-dim)] text-[var(--portfolio-primary)] font-bold'
                    : 'text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-text-primary)] hover:bg-[var(--portfolio-bg-elevation-1)] border-transparent hover:border-[var(--portfolio-border)]'
                }`}
              >
                <span className="text-[var(--portfolio-primary)] opacity-70 mr-1.5">{item.num}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons & Theme Switcher */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-primary)] hover:border-[var(--portfolio-primary)] transition-colors cursor-pointer"
            title={theme === 'dark' ? "Yorug' rejimga o'tish (Light Mode)" : "Qorong'i rejimga o'tish (Dark Mode)"}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#d8c697]" /> : <Moon className="w-4 h-4 text-[#0969da]" />}
          </button>

          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-text-primary)] hover:border-[var(--portfolio-border-bright)] transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <PortfolioButton
            asAnchor
            href={PORTFOLIO_DATA.profile.telegramChannel}
            target="_blank"
            size="sm"
            variant="outline"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            {'Telegram // Portfolio'}
          </PortfolioButton>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] text-[var(--portfolio-text-secondary)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#d8c697]" /> : <Moon className="w-4 h-4 text-[#0969da]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] text-[var(--portfolio-text-primary)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] px-4 pt-3 pb-6 flex flex-col gap-3 font-mono text-sm">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-text-primary)] hover:bg-[var(--portfolio-bg-elevation-1)] border-l-2 border-transparent hover:border-[var(--portfolio-primary)]"
            >
              <span className="text-[var(--portfolio-primary)] mr-2">{item.num} {'//'}</span>
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-[var(--portfolio-border)] flex flex-col gap-2">
            <PortfolioButton
              asAnchor
              href={PORTFOLIO_DATA.profile.telegramChannel}
              target="_blank"
              size="sm"
              variant="primary"
              icon={<Send className="w-3.5 h-3.5" />}
            >
              Telegram Kanal (@shoyim_portfolio)
            </PortfolioButton>
          </div>
        </div>
      )}
    </header>
  );
};
