'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { PortfolioCard } from './ui/KepCard';
import { PortfolioButton } from './ui/KepButton';
import { Badge } from './ui/Badge';
import { Mail, Send, MapPin, Check, Copy, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 border-b border-[var(--portfolio-border)] bg-[var(--portfolio-bg-default)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="font-mono text-xs text-[var(--portfolio-primary)] tracking-wider uppercase mb-2">
            // 05. BOG‘LANISH VA HAMKORLIK
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[var(--portfolio-text-primary)] uppercase tracking-tight">
            Aloqa & Loyihalar Uchun
          </h2>
          <p className="mt-2 text-[var(--portfolio-text-secondary)] font-mono text-sm max-w-xl">
            Yangi loyiha, arxitektura maslahati yoki texnik hamkorlik yuzasidan bevosita bog‘laning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <PortfolioCard hasCorners accent="cyan" className="p-6">
              <div className="font-mono text-xs text-[var(--portfolio-primary)] uppercase mb-4">
                // TELEGRAM BEVOSITA ALOQA
              </div>
              <div className="space-y-4">
                <a
                  href={PORTFOLIO_DATA.profile.telegramUser}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] hover:border-[var(--portfolio-primary)] flex items-center justify-between gap-3 font-mono transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Send className="w-5 h-5 text-[var(--portfolio-primary)]" />
                    <div>
                      <div className="text-xs text-[var(--portfolio-text-primary)] font-bold group-hover:text-[var(--portfolio-primary)]">
                        Shaxsiy Telegram: @shoyim
                      </div>
                      <div className="text-[11px] text-[var(--portfolio-text-secondary)]">
                        Tezkor javob olish uchun eng qulay yo‘l
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--portfolio-text-secondary)] group-hover:text-[var(--portfolio-primary)]" />
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] hover:border-[var(--portfolio-accent-gold)] flex items-center justify-between gap-3 font-mono transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Send className="w-5 h-5 text-[var(--portfolio-accent-gold)]" />
                    <div>
                      <div className="text-xs text-[var(--portfolio-text-primary)] font-bold group-hover:text-[var(--portfolio-accent-gold)]">
                        Portfolio Kanali: @shoyim_portfolio
                      </div>
                      <div className="text-[11px] text-[var(--portfolio-text-secondary)]">
                        Barcha yangi ishlar va case study-lar
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--portfolio-text-secondary)] group-hover:text-[var(--portfolio-accent-gold)]" />
                </a>
              </div>
            </PortfolioCard>

            <PortfolioCard hasCorners accent="gold" className="p-6">
              <div className="font-mono text-xs text-[var(--portfolio-accent-gold)] uppercase mb-2">
                // ELEKTRON POCHTA
              </div>
              <div className="flex items-center justify-between p-3 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] font-mono text-xs">
                <div className="flex items-center gap-2 text-[var(--portfolio-text-primary)]">
                  <Mail className="w-4 h-4 text-[var(--portfolio-accent-gold)]" />
                  <span>{PORTFOLIO_DATA.profile.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-[11px] border border-[var(--portfolio-border)] text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-text-primary)] flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-[var(--portfolio-accent-green)]" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'NUSXA OLINDI' : 'NUSXA OLISH'}</span>
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-[var(--portfolio-border)] flex items-center gap-2 font-mono text-xs text-[var(--portfolio-text-secondary)]">
                <MapPin className="w-3.5 h-3.5 text-[var(--portfolio-primary)]" />
                <span>Samarqand, O‘zbekiston (UTC+5)</span>
              </div>
            </PortfolioCard>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <PortfolioCard hasCorners accent="cyan" className="p-8">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--portfolio-border)] font-mono text-xs">
                <span className="text-[var(--portfolio-primary)] font-bold">// XABAR YUBORISH</span>
                <Badge variant="cyan">ALOQA</Badge>
              </div>

              {formSent ? (
                <div className="p-8 text-center font-mono space-y-3 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-accent-green)]/40">
                  <div className="w-10 h-10 mx-auto bg-[var(--portfolio-accent-green)]/20 border border-[var(--portfolio-accent-green)] flex items-center justify-center text-[var(--portfolio-accent-green)]">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="text-base font-bold text-[var(--portfolio-text-primary)]">XABAR QABUL QILINDI!</div>
                  <p className="text-xs text-[var(--portfolio-text-secondary)]">
                    Xabaringiz uchun rahmat. Tez orada siz ko‘rsatgan aloqa orqali javob qaytaraman.
                  </p>
                  <PortfolioButton size="sm" variant="outline" onClick={() => setFormSent(false)}>
                    Yangi xabar yozish
                  </PortfolioButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  <div>
                    <label className="block text-[var(--portfolio-text-secondary)] uppercase mb-1.5">
                      Ismingiz yoki Kompaniya nomi:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masalan: Azizbek / Tech Company"
                      className="w-full px-4 py-3 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border)] text-[var(--portfolio-text-primary)] focus:outline-none focus:border-[var(--portfolio-primary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[var(--portfolio-text-secondary)] uppercase mb-1.5">
                      Aloqa vositasi (Telegram username yoki Telefon / Email):
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="@username yoki +998 90 ..."
                      className="w-full px-4 py-3 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border)] text-[var(--portfolio-text-primary)] focus:outline-none focus:border-[var(--portfolio-primary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[var(--portfolio-text-secondary)] uppercase mb-1.5">
                      Loyiha yoki Xabar mazmuni:
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Loyiha talablari, vazifasi va muddatlari haqida qisqacha yozing..."
                      className="w-full px-4 py-3 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border)] text-[var(--portfolio-text-primary)] focus:outline-none focus:border-[var(--portfolio-primary)] transition-colors resize-none"
                    />
                  </div>

                  <PortfolioButton type="submit" size="md" variant="primary" icon={<Send className="w-4 h-4" />}>
                    Xabarni Yuborish
                  </PortfolioButton>
                </form>
              )}
            </PortfolioCard>
          </div>
        </div>
      </div>
    </section>
  );
};
