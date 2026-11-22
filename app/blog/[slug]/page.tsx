import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { KepCard } from '@/components/ui/KepCard';
import { KepButton } from '@/components/ui/KepButton';
import { Badge } from '@/components/ui/Badge';
import { BLOG_POSTS, BlogPost } from '@/data/blog';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowLeft, BookOpen, Calendar, Clock, Copy, Eye, Send, Terminal, User } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: 'Maqola topilmadi // shoyim.uz' };

  return {
    title: `${post.title} // Blog // shoyim.uz`,
    description: post.summary,
  };
}

export default async function SingleBlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0a0d14] flex flex-col selection:bg-[#93d7e2]/20 selection:text-white">
      <Navbar />
      <main className="flex-1 py-12 kep-bg-dots">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />

          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9caeb8] hover:text-[#93d7e2] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Barcha maqolalarga qaytish</span>
          </Link>

          {/* Article Header Card */}
          <KepCard hasCorners accent="cyan" className="p-8 mb-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <Badge variant="cyan">{post.categoryLabel}</Badge>
              <div className="flex items-center gap-4 font-mono text-xs text-[#9caeb8]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#d8c697]" />
                  {post.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#93d7e2]" />
                  {post.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-[#28a66a]" />
                  {post.views} ko‘rildi
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold font-mono text-[#edf1f4] uppercase tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author info pill */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/[0.08] font-mono text-xs text-[#9caeb8]">
              <div className="w-8 h-8 rounded-none bg-[#131821] border border-[#93d7e2]/40 text-[#93d7e2] flex items-center justify-center font-bold">
                SO
              </div>
              <div>
                <div className="text-[#edf1f4] font-bold">Muallif: Shoyim Obloqulov</div>
                <div className="text-[11px] text-[#596a75]">Senior Full-Stack Engineer & System Architect</div>
              </div>
            </div>
          </KepCard>

          {/* Article Content Container */}
          <KepCard hasCorners={false} className="p-8 sm:p-10 border border-white/10 bg-[#0e121a] mb-12">
            {/* Lead text */}
            <div className="font-mono text-base text-[#edf1f4] leading-relaxed pb-8 mb-8 border-b border-white/[0.08] border-l-2 border-l-[#93d7e2] pl-4 italic">
              {post.content.lead}
            </div>

            {/* Content Sections */}
            <div className="space-y-10 font-mono">
              {post.content.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <h2 className="text-xl font-bold text-[#edf1f4] uppercase tracking-tight text-[#93d7e2]">
                    {sec.heading}
                  </h2>

                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm text-[#9caeb8] leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Code snippet block if present */}
                  {sec.codeSnippet && (
                    <div className="my-6 border border-white/10 bg-[#0a0d14] overflow-hidden">
                      {/* Code bar */}
                      <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.08] bg-[#131821] text-xs text-[#9caeb8]">
                        <span className="flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-[#93d7e2]" />
                          <span className="text-[#edf1f4]">
                            {sec.codeSnippet.filename || `${sec.codeSnippet.language}.code`}
                          </span>
                        </span>
                        <span className="text-[10px] uppercase text-[#93d7e2]">
                          {sec.codeSnippet.language}
                        </span>
                      </div>

                      {/* Code Content */}
                      <pre className="p-4 text-xs font-mono text-[#edf1f4] overflow-x-auto leading-relaxed bg-[#0a0d14]">
                        <code>{sec.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Callout Box if present */}
                  {sec.callout && (
                    <div
                      className={`p-4 border font-mono text-xs leading-relaxed ${
                        sec.callout.type === 'tip'
                          ? 'border-[#28a66a]/40 bg-[#28a66a]/10 text-[#28a66a]'
                          : sec.callout.type === 'warning'
                          ? 'border-[#ef6f6c]/40 bg-[#ef6f6c]/10 text-[#ef6f6c]'
                          : 'border-[#93d7e2]/40 bg-[#93d7e2]/10 text-[#93d7e2]'
                      }`}
                    >
                      <div className="font-bold uppercase mb-1">
                        // {sec.callout.type.toUpperCase()}:
                      </div>
                      <div className="text-[#edf1f4]">{sec.callout.text}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tags footer */}
            <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-[#131821] border border-white/[0.08] text-[#93d7e2]"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="text-[#9caeb8]">
                Mavzu: <span className="text-[#edf1f4]">{post.categoryLabel}</span>
              </div>
            </div>
          </KepCard>

          {/* Author Bio Box */}
          <KepCard hasCorners accent="gold" className="p-6 mb-12 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-[#131821] border-2 border-[#d8c697] text-[#d8c697] flex items-center justify-center font-bold text-xl font-mono shrink-0">
              SO
            </div>
            <div className="font-mono text-xs space-y-2 text-center sm:text-left">
              <div className="text-base font-bold text-[#edf1f4]">
                Shoyim Obloqulov
              </div>
              <p className="text-[#9caeb8] leading-relaxed max-w-xl">
                Senior Full-Stack Dasturchi. Laravel, Python, Docker va yuqori unumdor arxitekturalar bo‘yicha ixtisoslashgan. Telegramdagi barcha yangi keyslar kanalga yuklanadi.
              </p>
              <div className="pt-2 flex items-center justify-center sm:justify-start gap-4">
                <a
                  href={PORTFOLIO_DATA.profile.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#93d7e2] hover:underline"
                >
                  Telegram: @shoyim_portfolio ↗
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9caeb8] hover:underline"
                >
                  GitHub: @shoyim ↗
                </a>
              </div>
            </div>
          </KepCard>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="pt-8 border-t border-white/[0.08]">
              <div className="font-mono text-xs text-[#93d7e2] uppercase mb-6">
                // BOSHQA TAVSIYA ETILADIGAN MAQOLALAR:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <KepCard key={rel.slug} hasCorners accent="cyan" className="p-6">
                    <div className="font-mono text-xs text-[#9caeb8] mb-2">
                      {rel.categoryLabel} • {rel.readTime}
                    </div>
                    <Link href={`/blog/${rel.slug}`}>
                      <h4 className="font-mono font-bold text-base text-[#edf1f4] mb-2 hover:text-[#93d7e2] transition-colors cursor-pointer">
                        {rel.title}
                      </h4>
                    </Link>
                    <p className="font-mono text-xs text-[#9caeb8] mb-4 line-clamp-2">
                      {rel.summary}
                    </p>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="text-xs font-mono text-[#93d7e2] hover:underline"
                    >
                      O‘qish ↗
                    </Link>
                  </KepCard>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
