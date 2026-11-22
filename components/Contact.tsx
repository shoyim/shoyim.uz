'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { KepCard } from './ui/KepCard';
import { KepButton } from './ui/KepButton';
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
    // Simulate sending message
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 border-b border-white/[0.08] bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="font-mono text-xs text-[#93d7e2] tracking-wider uppercase mb-2">
            // 05. BOG‘LANISH VA HAMKORLIK
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#edf1f4] uppercase tracking-tight">
            Aloqa & Loyihalar Uchun
          </h2>
          <p className="mt-2 text-[#9caeb8] font-mono text-sm max-w-xl">
            Yangi loyiha, arxitektura maslahati yoki texnik hamkorlik yuzasidan bevosita bog‘laning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <KepCard hasCorners accent="cyan" className="p-6">
              <div className="font-mono text-xs text-[#93d7e2] uppercase mb-4">
                // TELEGRAM BEVOSITA ALOQA
              </div>
              <div className="space-y-4">
                <a
                  href={PORTFOLIO_DATA.profile.telegramUser}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/10 bg-[#131821] hover:border-[#93d7e2]/50 flex items-center justify-between gap-3 font-mono transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Send className="w-5 h-5 text-[#93d7e2]" />
                    <div>
                      <div className="text-xs text-[#edf1f4] font-bold group-hover:text-[#93d7e2]">
                        Shaxsiy Telegram: @shoyim
                      </div>
                      <div className="text-[11px] text-[#9caeb8]">
                        Tezkor javob olish uchun eng qulay yo‘l
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#9caeb8] group-hover:text-[#93d7e2]" />
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/10 bg-[#131821] hover:border-[#d8c697]/50 flex items-center justify-between gap-3 font-mono transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Send className="w-5 h-5 text-[#d8c697]" />
                    <div>
                      <div className="text-xs text-[#edf1f4] font-bold group-hover:text-[#d8c697]">
                        Portfolio Kanali: @shoyim_portfolio
                      </div>
                      <div className="text-[11px] text-[#9caeb8]">
                        Barcha yangi ishlar va case study-lar
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#9caeb8] group-hover:text-[#d8c697]" />
                </a>
              </div>
            </KepCard>

            <KepCard hasCorners accent="gold" className="p-6">
              <div className="font-mono text-xs text-[#d8c697] uppercase mb-2">
                // ELEKTRON POCHTA
              </div>
              <div className="flex items-center justify-between p-3 border border-white/10 bg-[#131821] font-mono text-xs">
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

              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-2 font-mono text-xs text-[#9caeb8]">
                <MapPin className="w-3.5 h-3.5 text-[#93d7e2]" />
                <span>Samarqand, O‘zbekiston (UTC+5)</span>
              </div>
            </KepCard>
          </div>

          {/* Right Column: Fast Contact Form */}
          <div className="lg:col-span-7">
            <KepCard hasCorners accent="cyan" className="p-8">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.08] font-mono text-xs">
                <span className="text-[#93d7e2]">// XABAR YUBORISH (MESSAGE_DISPATCH)</span>
                <Badge variant="cyan">STATUS: READY</Badge>
              </div>

              {formSent ? (
                <div className="p-8 text-center font-mono space-y-3 bg-[#131821] border border-[#28a66a]/40">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#28a66a]/20 border border-[#28a66a] flex items-center justify-center text-[#28a66a]">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="text-base font-bold text-[#edf1f4]">XABAR QABUL QILINDI!</div>
                  <p className="text-xs text-[#9caeb8]">
                    Xabaringiz uchun rahmat. Tez orada siz ko‘rsatgan aloqa orqali javob qaytaraman.
                  </p>
                  <KepButton size="sm" variant="outline" onClick={() => setFormSent(false)}>
                    Yangi xabar yozish
                  </KepButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  <div>
                    <label className="block text-[#9caeb8] uppercase mb-1.5">
                      Ismingiz yoki Kompaniya nomi:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masalan: Azizbek / Tech Company"
                      className="w-full px-4 py-3 bg-[#131821] border border-white/10 text-[#edf1f4] focus:outline-none focus:border-[#93d7e2] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#9caeb8] uppercase mb-1.5">
                      Aloqa vositasi (Telegram username yoki Telefon / Email):
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="@username yoki +998 90 ..."
                      className="w-full px-4 py-3 bg-[#131821] border border-white/10 text-[#edf1f4] focus:outline-none focus:border-[#93d7e2] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#9caeb8] uppercase mb-1.5">
                      Loyiha yoki Xabar mazmuni:
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Loyiha talablari, vazifasi va muddatlari haqida qisqacha yozing..."
                      className="w-full px-4 py-3 bg-[#131821] border border-white/10 text-[#edf1f4] focus:outline-none focus:border-[#93d7e2] transition-colors resize-none"
                    />
                  </div>

                  <KepButton type="submit" size="md" variant="primary" icon={<Send className="w-4 h-4" />}>
                    Xabarni Yuborish
                  </KepButton>
                </form>
              )}
            </KepCard>
          </div>
        </div>
      </div>
    </section>
  );
};
