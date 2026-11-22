'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PortfolioCard } from '@/components/ui/KepCard';
import { PortfolioButton } from '@/components/ui/KepButton';
import { Badge } from '@/components/ui/Badge';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [projectType, setProjectType] = useState('Web Platform / SaaS');
  const [budget, setBudget] = useState('$1,000 - $2,500');
  const [timeline, setTimeline] = useState('1 - 2 oy');
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const telegramPrefillText = encodeURIComponent(
    `Assalomu alaykum Shoyim! Saytingiz (shoyim.uz) orqali yozmoqdaman.\nLoyiha turi: ${projectType}\nByudjet: ${budget}\nMuddat: ${timeline}`
  );

  return (
    <div className="min-h-screen bg-[var(--portfolio-bg-default)] flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 portfolio-bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Aloqa & Loyiha So‘rovi' }]} />

          {/* Page Header */}
          <div className="mb-12">
            <div className="font-mono text-xs text-[var(--portfolio-primary)] tracking-wider uppercase mb-2">
              {'// ALOQA VA HAMKORLIK'}
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-mono text-[var(--portfolio-text-primary)] uppercase tracking-tight">
              Bog‘lanish & Loyiha Muhokamasi
            </h1>
            <p className="mt-3 text-[var(--portfolio-text-secondary)] font-mono text-sm max-w-2xl leading-relaxed">
              Yangi veb-ilova, Telegram bot ekotizimi, yuqori yuklamali backend yoki mavjud tizimlar arxitekturasi auditi bo‘yicha bevosita bog‘laning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Left: Contact Channels */}
            <div className="lg:col-span-5 space-y-6">
              <PortfolioCard hasCorners accent="cyan" className="p-6">
                <div className="font-mono text-xs text-[var(--portfolio-primary)] uppercase mb-4 font-bold">
                  {'// TELEGRAM ORQALI TEZKOR ALOQA'}
                </div>
                <div className="space-y-4">
                  <a
                    href={PORTFOLIO_DATA.profile.telegramUser}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] hover:border-[var(--portfolio-primary)] flex items-center justify-between gap-3 font-mono transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Send className="w-5 h-5 text-[var(--portfolio-primary)]" />
                      <div>
                        <div className="text-sm text-[var(--portfolio-text-primary)] font-bold group-hover:text-[var(--portfolio-primary)]">
                          Shaxsiy Telegram: @shoyim
                        </div>
                        <div className="text-[11px] text-[var(--portfolio-text-secondary)]">
                          Bevosita shaxsiy chat (eng tez javob)
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--portfolio-text-secondary)] group-hover:text-[var(--portfolio-primary)]" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.profile.telegramChannel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] hover:border-[var(--portfolio-accent-gold)] flex items-center justify-between gap-3 font-mono transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Send className="w-5 h-5 text-[var(--portfolio-accent-gold)]" />
                      <div>
                        <div className="text-sm text-[var(--portfolio-text-primary)] font-bold group-hover:text-[var(--portfolio-accent-gold)]">
                          Telegram Kanal: @shoyim_portfolio
                        </div>
                        <div className="text-[11px] text-[var(--portfolio-text-secondary)]">
                          Barcha loyihalar, keyslar va video sharhlar
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--portfolio-text-secondary)] group-hover:text-[var(--portfolio-accent-gold)]" />
                  </a>
                </div>
              </PortfolioCard>

              {/* Email & Location */}
              <PortfolioCard hasCorners accent="gold" className="p-6">
                <div className="font-mono text-xs text-[var(--portfolio-accent-gold)] uppercase mb-3 font-bold">
                  {'// ELEKTRON POCHTA VA MANZIL'}
                </div>

                <div className="flex items-center justify-between p-3.5 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] font-mono text-xs mb-4">
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

                <div className="flex items-center gap-2 font-mono text-xs text-[var(--portfolio-text-secondary)] pt-3 border-t border-[var(--portfolio-border)]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--portfolio-primary)]" />
                  <span>Samarqand, O‘zbekiston (UTC+5)</span>
                </div>
              </PortfolioCard>

              {/* Direct Telegram Dispatch Button */}
              <div className="p-6 border border-[var(--portfolio-border-bright)] bg-[var(--portfolio-bg-paper)] font-mono text-xs space-y-3">
                <div className="text-[var(--portfolio-primary)] font-bold">
                  {'// BIR KLIKDA TELEGRAMGA YOZISH'}
                </div>
                <p className="text-[var(--portfolio-text-secondary)] leading-relaxed">
                  Loyiha parametrlarini tanlab, to‘g‘ridan-to‘g‘ri shaxsiy Telegram orqali xabar yuborishingiz mumkin:
                </p>
                <PortfolioButton
                  asAnchor
                  href={`https://t.me/shoyim?text=${telegramPrefillText}`}
                  target="_blank"
                  size="md"
                  variant="primary"
                  icon={<Send className="w-4 h-4" />}
                  className="w-full"
                >
                  Telegramda Loyiha Boshlash ↗
                </PortfolioButton>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <PortfolioCard hasCorners accent="cyan" className="p-8">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--portfolio-border)] font-mono text-xs">
                  <span className="text-[var(--portfolio-primary)] font-bold">{'// LOYIHA PARAMETRLARI'}</span>
                  <Badge variant="cyan">SO‘ROV</Badge>
                </div>

                {submitted ? (
                  <div className="p-10 text-center font-mono space-y-4 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-accent-green)]/40">
                    <div className="w-12 h-12 mx-auto bg-[var(--portfolio-accent-green)]/20 border border-[var(--portfolio-accent-green)] flex items-center justify-center text-[var(--portfolio-accent-green)]">
                      <Check className="w-6 h-6" />
                    </div>
                    <div className="text-lg font-bold text-[var(--portfolio-text-primary)]">SO‘ROV MUVAFFAQIYATLI YUBORILDI!</div>
                    <p className="text-xs text-[var(--portfolio-text-secondary)] max-w-md mx-auto leading-relaxed">
                      Loyiha talablari qabul qilindi. 24 soat ichida siz bilan bog‘lanaman yoki to‘g‘ridan-to‘g‘ri Telegram (@shoyim) orqali yozishingiz mumkin.
                    </p>
                    <PortfolioButton size="sm" variant="outline" onClick={() => setSubmitted(false)}>
                      Yangi so‘rov kiritish
                    </PortfolioButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                    {/* Project Category selector */}
                    <div>
                      <label className="block text-[var(--portfolio-text-secondary)] uppercase mb-2">
                        1. Loyiha Yo‘nalishi:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          'Web Platform / SaaS',
                          'Telegram Ekotizimi / Bot',
                          'Backend API & High-Load',
                          'Arxitektura & Audit',
                        ].map((cat) => (
                          <button
                            type="button"
                            key={cat}
                            onClick={() => setProjectType(cat)}
                            className={`p-3 border text-left cursor-pointer transition-all ${
                              projectType === cat
                                ? 'border-[var(--portfolio-primary)] bg-[var(--portfolio-primary-dim)] text-[var(--portfolio-primary)] font-bold'
                                : 'border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] text-[var(--portfolio-text-secondary)] hover:border-[var(--portfolio-border-bright)]'
                            }`}
                          >
                            [ {cat} ]
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget selector */}
                    <div>
                      <label className="block text-[var(--portfolio-text-secondary)] uppercase mb-2">
                        2. Mo‘ljallangan Byudjet:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['$500 - $1,000', '$1,000 - $2,500', '$2,500+'].map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setBudget(b)}
                            className={`p-2.5 border text-center cursor-pointer transition-all ${
                              budget === b
                                ? 'border-[var(--portfolio-accent-gold)] bg-[var(--portfolio-accent-gold)]/15 text-[var(--portfolio-accent-gold)] font-bold'
                                : 'border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] text-[var(--portfolio-text-secondary)] hover:border-[var(--portfolio-border-bright)]'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Timeline selector */}
                    <div>
                      <label className="block text-[var(--portfolio-text-secondary)] uppercase mb-2">
                        3. Kutilayotgan Muddat:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['< 1 oy', '1 - 2 oy', '2+ oy'].map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setTimeline(t)}
                            className={`p-2.5 border text-center cursor-pointer transition-all ${
                              timeline === t
                                ? 'border-[var(--portfolio-accent-green)] bg-[var(--portfolio-accent-green)]/15 text-[var(--portfolio-accent-green)] font-bold'
                                : 'border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] text-[var(--portfolio-text-secondary)] hover:border-[var(--portfolio-border-bright)]'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[var(--portfolio-text-secondary)] uppercase mb-1.5">
                          Ismingiz / Tashkilot:
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Azizbek / Tech LLC"
                          className="w-full px-3.5 py-2.5 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border)] text-[var(--portfolio-text-primary)] focus:outline-none focus:border-[var(--portfolio-primary)] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[var(--portfolio-text-secondary)] uppercase mb-1.5">
                          Telegram yoki Telefon:
                        </label>
                        <input
                          type="text"
                          required
                          value={contactInfo}
                          onChange={(e) => setContactInfo(e.target.value)}
                          placeholder="@username yoki +998..."
                          className="w-full px-3.5 py-2.5 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border)] text-[var(--portfolio-text-primary)] focus:outline-none focus:border-[var(--portfolio-primary)] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[var(--portfolio-text-secondary)] uppercase mb-1.5">
                        Loyiha Vazifasi va Talablar:
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Loyihaning asosiy maqsadi, foydalanuvchilar soni va kerakli integratsiyalar haqida yozing..."
                        className="w-full px-3.5 py-2.5 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border)] text-[var(--portfolio-text-primary)] focus:outline-none focus:border-[var(--portfolio-primary)] transition-colors resize-none"
                      />
                    </div>

                    <PortfolioButton
                      type="submit"
                      size="lg"
                      variant="primary"
                      icon={<Send className="w-4 h-4" />}
                    >
                      So‘rovni Yuborish // Dispatch
                    </PortfolioButton>
                  </form>
                )}
              </PortfolioCard>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
