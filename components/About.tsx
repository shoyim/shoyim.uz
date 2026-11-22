import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { KepCard } from './ui/KepCard';
import { Badge } from './ui/Badge';
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-white/[0.08] bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="font-mono text-xs text-[#93d7e2] tracking-wider uppercase mb-2">
            // 02. KASBIY YO‘L VA TAJRIBA
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#edf1f4] uppercase tracking-tight">
            Tajriba va Arxitektura Yondashuvi
          </h2>
          <p className="mt-3 text-[#9caeb8] font-mono text-sm max-w-2xl">
            Ko‘p yillik amaliy tajriba, akademik IT markazlarida murakkab platformalarni qurish va xalqaro ochiq kodli hamjamiyatga hissa qo‘shish tarixi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-8 space-y-6">
            {PORTFOLIO_DATA.experience.map((item, idx) => (
              <KepCard key={idx} hasCorners accent={idx === 0 ? 'cyan' : 'default'} className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#93d7e2]" />
                    <span className="font-mono font-bold text-base text-[#edf1f4]">
                      {item.role}
                    </span>
                  </div>
                  <Badge variant="cyan">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.period}
                  </Badge>
                </div>

                <div className="font-mono text-xs text-[#d8c697] mb-3 flex items-center gap-2">
                  <span>{item.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#9caeb8]">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>

                <p className="text-sm text-[#9caeb8] font-mono mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 mb-5">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs font-mono text-[#edf1f4]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#28a66a] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {item.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#131821] border border-white/[0.08] font-mono text-[11px] text-[#9caeb8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </KepCard>
            ))}
          </div>

          {/* Philosophy / Mindset Box */}
          <div className="lg:col-span-4 space-y-6">
            <KepCard hasCorners accent="gold" className="p-6 bg-[#0e121a]">
              <div className="font-mono text-xs text-[#d8c697] uppercase mb-2">
                // MUHANDISLIK FALSAFASI
              </div>
              <h3 className="text-lg font-bold font-mono text-[#edf1f4] mb-3">
                Toza Kod, Izolyatsiya va Masshtablanuvchanlik
              </h3>
              <p className="text-xs text-[#9caeb8] font-mono leading-relaxed mb-4">
                Dasturiy tizimlarni loyihalashda har doim xavfsizlik, asinxron qayta ishlash va resurslarni optimal sarflashga eʼtibor qarataman. Har bir funksiya o‘z vazifasini bajarishi va testlar bilan himoyalangan bo‘lishi shart.
              </p>
              <div className="p-3 border border-white/10 bg-[#0a0d14] font-mono text-xs text-[#93d7e2]">
                &gt; &quot;Murakkab muammolarga eng toza va sodda arxitekturaviy yechimlar topish — mening asosiy ustuvorligimdir.&quot;
              </div>
            </KepCard>

            <KepCard hasCorners accent="cyan" className="p-6">
              <div className="font-mono text-xs text-[#93d7e2] uppercase mb-2">
                // MUSOBAQA DASTURLASH
              </div>
              <div className="text-sm font-mono text-[#edf1f4] mb-2 font-bold">
                Algoritmik Musobaqalar & Hakamlik
              </div>
              <p className="text-xs font-mono text-[#9caeb8] leading-relaxed mb-4">
                RoboContest, KEP.uz va SamCoding platformalarida muntazam qatnashish, masalalar tayyorlash va algoritmlar chuqurligini doimiy oshirib borish.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="cyan">Graph Theory</Badge>
                <Badge variant="purple">Dynamic Prog.</Badge>
                <Badge variant="gold">Data Structures</Badge>
              </div>
            </KepCard>
          </div>
        </div>
      </div>
    </section>
  );
};
