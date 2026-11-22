'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { KepCard } from '@/components/ui/KepCard';
import { KepButton } from '@/components/ui/KepButton';
import { Badge } from '@/components/ui/Badge';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Send, Terminal } from 'lucide-react';

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
    <div className="min-h-screen bg-[#0a0d14] flex flex-col selection:bg-[#93d7e2]/20 selection:text-white">
      <Navbar />
      <main className="flex-1 py-12 kep-bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Aloqa & Loyiha So‘rovi' }]} />

          {/* Page Header */}
          <div className="mb-12">
            <div className="font-mono text-xs text-[#93d7e2] tracking-wider uppercase mb-2">
              // CONTRACT INQUIRY & DIRECT CHANNELS
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-mono text-[#edf1f4] uppercase tracking-tight">
              Bog‘lanish & Loyiha Muhokamasi
            </h1>
            <p className="mt-3 text-[#9caeb8] font-mono text-sm max-w-2xl leading-relaxed">
              Yangi veb-ilova, Telegram bot ekotizimi, yuqori yuklamali backend yoki mavjud tizimlar arxitekturasi auditi bo‘yicha bevosita bog‘laning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Left: Contact Channels & Fast Dispatch */}
            <div className="lg:col-span-5 space-y-6">
              <KepCard hasCorners accent="cyan" className="p-6">
                <div className="font-mono text-xs text-[#93d7e2] uppercase mb-4">
                  // TELEGRAM ORQALI TEZKOR ALOQA
                </div>
                <div className="space-y-4">
                  <a
                    href={PORTFOLIO_DATA.profile.telegramUser}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-white/10 bg-[#131821] hover:border-[#93d7e2]/60 flex items-center justify-between gap-3 font-mono transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Send className="w-5 h-5 text-[#93d7e2]" />
                      <div>
                        <div className="text-sm text-[#edf1f4] font-bold group-hover:text-[#93d7e2]">
                          Shaxsiy Telegram: @shoyim
                        </div>
                        <div className="text-[11px] text-[#9caeb8]">
                          Bevosita shaxsiy chat (eng tez javob)
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#9caeb8] group-hover:text-[#93d7e2]" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.profile.telegramChannel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-white/10 bg-[#131821] hover:border-[#d8c697]/60 flex items-center justify-between gap-3 font-mono transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Send className="w-5 h-5 text-[#d8c697]" />
                      <div>
                        <div className="text-sm text-[#edf1f4] font-bold group-hover:text-[#d8c697]">
                          Telegram Kanal: @shoyim_portfolio
                        </div>
                        <div className="text-[11px] text-[#9caeb8]">
                          Barcha loyihalar, keyslar va video sharhlar
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#9caeb8] group-hover:text-[#d8c697]" />
                  </a>
                </div>
              </KepCard>

              {/* Email & Location */}
              <KepCard hasCorners accent="gold" className="p-6">
                <div className="font-mono text-xs text-[#d8c697] uppercase mb-3">
                  // ELEKTRON POCHTA VA MANZIL
                </div>

                <div className="flex items-center justify-between p-3.5 border border-white/10 bg-[#131821] font-mono text-xs mb-4">
                  <div className="flex items-center gap-2 text-[#edf1f4]">
                    <Mail className="w-4 h-4 text-[#d8c697]" />
                    <span>{PORTFOLIO_DATA.profile.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 text-[11px] border border-white/10 text-[#9caeb8] hover:text-[#edf1f4] flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-[#28a66a]" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'NUSXA OLINDI' : 'NUSXA OLISH'}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-[#9caeb8] pt-3 border-t border-white/[0.06]">
                  <MapPin className="w-3.5 h-3.5 text-[#93d7e2]" />
                  <span>Samarqand, O‘zbekiston (UTC+5 // Onlayn va Ofis)</span>
                </div>
              </KepCard>

              {/* Direct Telegram Dispatch Button */}
              <div className="p-6 border border-[#93d7e2]/30 bg-[#131821] font-mono text-xs space-y-3">
                <div className="text-[#93d7e2] font-bold">
                  // BIR KLIKDA TELEGRAMGA YOZISH
                </div>
                <p className="text-[#9caeb8] leading-relaxed">
                  Loyiha parametrlarini tanlab, to‘g‘ridan-to‘g‘ri shaxsiy Telegram orqali xabar yuborishingiz mumkin:
                </p>
                <KepButton
                  asAnchor
                  href={`https://t.me/shoyim?text=${telegramPrefillText}`}
                  target="_blank"
                  size="md"
                  variant="primary"
                  icon={<Send className="w-4 h-4" />}
                  className="w-full"
                >
                  Telegramda Loyiha Boshlash ↗
                </KepButton>
              </div>
            </div>

            {/* Right: Comprehensive Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <KepCard hasCorners accent="cyan" className="p-8">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.08] font-mono text-xs">
                  <span className="text-[#93d7e2]">// LOYIHA PARAMETRLARI & SO‘ROV FORMASI</span>
                  <Badge variant="cyan">STATUS: READY</Badge>
                </div>

                {submitted ? (
                  <div className="p-10 text-center font-mono space-y-4 bg-[#131821] border border-[#28a66a]/40">
                    <div className="w-12 h-12 mx-auto bg-[#28a66a]/20 border border-[#28a66a] flex items-center justify-center text-[#28a66a]">
                      <Check className="w-6 h-6" />
                    </div>
                    <div className="text-lg font-bold text-[#edf1f4]">SO‘ROV MUVAFFAQIYATLI YUBORILDI!</div>
                    <p className="text-xs text-[#9caeb8] max-w-md mx-auto leading-relaxed">
                      Loyiha talablari qabul qilindi. 24 soat ichida siz bilan bog‘lanaman yoki to‘g‘ridan-to‘g‘ri Telegram (@shoyim) orqali tezkor yozishingiz mumkin.
                    </p>
                    <KepButton size="sm" variant="outline" onClick={() => setSubmitted(false)}>
                      Yangi so‘rov kiritish
                    </KepButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                    {/* Project Category selector */}
                    <div>
                      <label className="block text-[#9caeb8] uppercase mb-2">
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
                                ? 'border-[#93d7e2] bg-[#93d7e2]/15 text-[#93d7e2] font-bold'
                                : 'border-white/10 bg-[#131821] text-[#9caeb8] hover:border-white/30'
                            }`}
                          >
                            [ {cat} ]
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget selector */}
                    <div>
                      <label className="block text-[#9caeb8] uppercase mb-2">
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
                                ? 'border-[#d8c697] bg-[#d8c697]/15 text-[#d8c697] font-bold'
                                : 'border-white/10 bg-[#131821] text-[#9caeb8] hover:border-white/30'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Timeline selector */}
                    <div>
                      <label className="block text-[#9caeb8] uppercase mb-2">
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
                                ? 'border-[#28a66a] bg-[#28a66a]/15 text-[#28a66a] font-bold'
                                : 'border-white/10 bg-[#131821] text-[#9caeb8] hover:border-white/30'
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
                        <label className="block text-[#9caeb8] uppercase mb-1.5">
                          Ismingiz / Tashkilot:
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Azizbek / Tech LLC"
                          className="w-full px-3.5 py-2.5 bg-[#131821] border border-white/10 text-[#edf1f4] focus:outline-none focus:border-[#93d7e2] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[#9caeb8] uppercase mb-1.5">
                          Telegram yoki Telefon:
                        </label>
                        <input
                          type="text"
                          required
                          value={contactInfo}
                          onChange={(e) => setContactInfo(e.target.value)}
                          placeholder="@username yoki +998..."
                          className="w-full px-3.5 py-2.5 bg-[#131821] border border-white/10 text-[#edf1f4] focus:outline-none focus:border-[#93d7e2] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#9caeb8] uppercase mb-1.5">
                        Loyiha Vazifasi va Talablar:
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Loyihaning asosiy maqsadi, foydalanuvchilar soni va kerakli integratsiyalar haqida yozing..."
                        className="w-full px-3.5 py-2.5 bg-[#131821] border border-white/10 text-[#edf1f4] focus:outline-none focus:border-[#93d7e2] transition-colors resize-none"
                      />
                    </div>

                    <KepButton
                      type="submit"
                      size="lg"
                      variant="primary"
                      icon={<Send className="w-4 h-4" />}
                    >
                      So‘rovni Yuborish // Dispatch
                    </KepButton>
                  </form>
                )}
              </KepCard>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
