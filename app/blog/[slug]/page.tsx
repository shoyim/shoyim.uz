import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PortfolioCard } from '@/components/ui/KepCard';
import { Badge } from '@/components/ui/Badge';
import { BLOG_POSTS } from '@/data/blog';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowLeft, Calendar, Clock, Eye, Terminal } from 'lucide-react';

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

  const url = `https://shoyim.uz/blog/${post.slug}`;

  return {
    title: `${post.title} // Blog // shoyim.uz`,
    description: post.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Shoyim Obloqulov'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function SingleBlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.summary,
    author: {
      '@type': 'Person',
      name: 'Shoyim Obloqulov',
      url: 'https://shoyim.uz',
    },
    datePublished: post.publishedAt,
    publisher: {
      '@type': 'Person',
      name: 'Shoyim Obloqulov',
      url: 'https://shoyim.uz',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://shoyim.uz/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[var(--portfolio-bg-default)] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <main className="flex-1 py-12 portfolio-bg-dots">
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
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-primary)] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Barcha maqolalarga qaytish</span>
          </Link>

          {/* Article Header Card */}
          <PortfolioCard hasCorners accent="cyan" className="p-8 mb-10">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <Badge variant="cyan">{post.categoryLabel}</Badge>
              <div className="flex items-center gap-4 font-mono text-xs text-[var(--portfolio-text-secondary)]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[var(--portfolio-accent-gold)]" />
                  {post.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[var(--portfolio-primary)]" />
                  {post.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-[var(--portfolio-accent-green)]" />
                  {post.views} ko‘rildi
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold font-mono text-[var(--portfolio-text-primary)] uppercase tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author info pill */}
            <div className="flex items-center gap-3 pt-6 border-t border-[var(--portfolio-border)] font-mono text-xs text-[var(--portfolio-text-secondary)]">
              <div className="w-8 h-8 rounded-none bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border-bright)] text-[var(--portfolio-primary)] flex items-center justify-center font-bold">
                SO
              </div>
              <div>
                <div className="text-[var(--portfolio-text-primary)] font-bold">Muallif: Shoyim Obloqulov</div>
                <div className="text-[11px] text-[var(--portfolio-text-muted)]">Senior Full-Stack Engineer & System Architect</div>
              </div>
            </div>
          </PortfolioCard>

          {/* Article Content Container */}
          <PortfolioCard hasCorners={false} className="p-8 sm:p-10 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] mb-12">
            {/* Lead text */}
            <div className="font-mono text-base text-[var(--portfolio-text-primary)] leading-relaxed pb-8 mb-8 border-b border-[var(--portfolio-border)] border-l-2 border-l-[var(--portfolio-primary)] pl-4 italic">
              {post.content.lead}
            </div>

            {/* Content Sections */}
            <div className="space-y-10 font-mono">
              {post.content.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <h2 className="text-xl font-bold text-[var(--portfolio-text-primary)] uppercase tracking-tight text-[var(--portfolio-primary)]">
                    {sec.heading}
                  </h2>

                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm text-[var(--portfolio-text-secondary)] leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Code snippet block if present */}
                  {sec.codeSnippet && (
                    <div className="my-6 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] overflow-hidden">
                      {/* Code bar */}
                      <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-2)] text-xs text-[var(--portfolio-text-secondary)]">
                        <span className="flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-[var(--portfolio-primary)]" />
                          <span className="text-[var(--portfolio-text-primary)] font-bold">
                            {sec.codeSnippet.filename || `${sec.codeSnippet.language}.code`}
                          </span>
                        </span>
                        <span className="text-[10px] uppercase text-[var(--portfolio-primary)] font-bold">
                          {sec.codeSnippet.language}
                        </span>
                      </div>

                      {/* Code Content */}
                      <pre className="p-4 text-xs font-mono text-[var(--portfolio-text-primary)] overflow-x-auto leading-relaxed bg-[var(--portfolio-bg-elevation-1)]">
                        <code>{sec.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Callout Box if present */}
                  {sec.callout && (
                    <div
                      className={`p-4 border font-mono text-xs leading-relaxed ${
                        sec.callout.type === 'tip'
                          ? 'border-[var(--portfolio-border-bright)] bg-[var(--portfolio-primary-dim)] text-[var(--portfolio-text-primary)]'
                          : sec.callout.type === 'warning'
                          ? 'border-[var(--portfolio-border-bright)] bg-[var(--portfolio-bg-elevation-2)] text-[var(--portfolio-text-primary)]'
                          : 'border-[var(--portfolio-border-bright)] bg-[var(--portfolio-primary-dim)] text-[var(--portfolio-text-primary)]'
                      }`}
                    >
                      <div className="font-bold uppercase mb-1">
                        {'// ' + sec.callout.type.toUpperCase() + ':'}
                      </div>
                      <div className="text-[var(--portfolio-text-primary)]">{sec.callout.text}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tags footer */}
            <div className="mt-12 pt-6 border-t border-[var(--portfolio-border)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border)] text-[var(--portfolio-primary)]"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="text-[var(--portfolio-text-secondary)]">
                Mavzu: <span className="text-[var(--portfolio-text-primary)] font-bold">{post.categoryLabel}</span>
              </div>
            </div>
          </PortfolioCard>

          {/* Author Bio Box */}
          <PortfolioCard hasCorners accent="gold" className="p-6 mb-12 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-[var(--portfolio-bg-elevation-1)] border-2 border-[var(--portfolio-border-bright)] text-[var(--portfolio-text-primary)] flex items-center justify-center font-bold text-xl font-mono shrink-0">
              SO
            </div>
            <div className="font-mono text-xs space-y-2 text-center sm:text-left">
              <div className="text-base font-bold text-[var(--portfolio-text-primary)]">
                Shoyim Obloqulov
              </div>
              <p className="text-[var(--portfolio-text-secondary)] leading-relaxed max-w-xl">
                Senior Full-Stack Dasturchi. Laravel, Python, Docker va yuqori unumdor arxitekturalar bo‘yicha ixtisoslashgan. Telegramdagi barcha yangi keyslar kanalga yuklanadi.
              </p>
              <div className="pt-2 flex items-center justify-center sm:justify-start gap-4">
                <a
                  href={PORTFOLIO_DATA.profile.telegramChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--portfolio-primary)] hover:underline"
                >
                  Telegram: @shoyim_portfolio ↗
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--portfolio-text-secondary)] hover:underline"
                >
                  GitHub: @shoyim ↗
                </a>
              </div>
            </div>
          </PortfolioCard>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="pt-8 border-t border-[var(--portfolio-border)]">
              <div className="font-mono text-xs text-[var(--portfolio-primary)] uppercase mb-6">
                {'// BOSHQA TAVSIYA ETILADIGAN MAQOLALAR:'}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <PortfolioCard key={rel.slug} hasCorners accent="cyan" className="p-6">
                    <div className="font-mono text-xs text-[var(--portfolio-text-secondary)] mb-2">
                      {rel.categoryLabel} • {rel.readTime}
                    </div>
                    <Link href={`/blog/${rel.slug}`}>
                      <h4 className="font-mono font-bold text-base text-[var(--portfolio-text-primary)] mb-2 hover:text-[var(--portfolio-primary)] transition-colors cursor-pointer">
                        {rel.title}
                      </h4>
                    </Link>
                    <p className="font-mono text-xs text-[var(--portfolio-text-secondary)] mb-4 line-clamp-2">
                      {rel.summary}
                    </p>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="text-xs font-mono text-[var(--portfolio-primary)] hover:underline"
                    >
                      O‘qish ↗
                    </Link>
                  </PortfolioCard>
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
