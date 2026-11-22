'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PortfolioCard } from '@/components/ui/KepCard';
import { Badge } from '@/components/ui/Badge';
import { BLOG_POSTS } from '@/data/blog';
import { Calendar, Clock, Eye, Search, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'algorithms', label: 'Algoritmlar' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend & UI' },
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-[var(--portfolio-bg-default)] flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 portfolio-bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Texnik Blog' }]} />

          {/* Page Header */}
          <div className="mb-12">
            <div className="font-mono text-xs text-[var(--portfolio-primary)] tracking-wider uppercase mb-2">
              // MAQOLALAR & TAHLILLAR
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-mono text-[var(--portfolio-text-primary)] uppercase tracking-tight">
              Texnik Maqolalar & Arxitektura
            </h1>
            <p className="mt-3 text-[var(--portfolio-text-secondary)] font-mono text-sm max-w-2xl leading-relaxed">
              Laravel, Python, Redis, yuqori yuklamali tizimlar, algoritmik tahlillar va zamonaviy dizayn tizimlari bo‘yicha chuqurlashtirilgan muhandislik tajribalari.
            </p>
          </div>

          {/* Featured Article Card */}
          {featuredPost && (
            <PortfolioCard hasCorners accent="cyan" className="p-8 mb-12">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="gold">TAVSIYA ETILGAN // FEATURED</Badge>
                  <Badge variant="cyan">{featuredPost.categoryLabel}</Badge>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-[var(--portfolio-text-secondary)]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.publishedAt}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>

              <Link href={`/blog/${featuredPost.slug}`}>
                <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[var(--portfolio-text-primary)] mb-3 hover:text-[var(--portfolio-primary)] transition-colors cursor-pointer leading-snug">
                  {featuredPost.title}
                </h2>
              </Link>

              <p className="font-mono text-sm text-[var(--portfolio-text-secondary)] leading-relaxed mb-6 max-w-4xl">
                {featuredPost.summary}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--portfolio-border)]">
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border)] font-mono text-xs text-[var(--portfolio-primary)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[var(--portfolio-primary)] hover:opacity-80 transition-colors"
                >
                  <span>Maqolani o‘qish</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </PortfolioCard>
          )}

          {/* Search & Categories Bar */}
          <div className="p-4 border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)] mb-10 flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-[var(--portfolio-text-secondary)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Maqola sarlavhasi, kalit so‘z yoki teglar bo‘yicha qidirish (AST, Redis, Next.js, Laravel)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border)] text-xs font-mono text-[var(--portfolio-text-primary)] focus:outline-none focus:border-[var(--portfolio-primary)] transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2 font-mono text-xs border rounded-none cursor-pointer transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[var(--portfolio-primary)] text-[#0a0d14] dark:text-[#0a0d14] font-bold border-[var(--portfolio-primary)]'
                      : 'bg-[var(--portfolio-bg-elevation-1)] text-[var(--portfolio-text-secondary)] border-[var(--portfolio-border)] hover:border-[var(--portfolio-border-bright)] hover:text-[var(--portfolio-text-primary)]'
                  }`}
                >
                  [ {cat.label} ]
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <PortfolioCard
                key={post.slug}
                hasCorners
                accent="cyan"
                className="flex flex-col justify-between p-6 h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="cyan">{post.categoryLabel}</Badge>
                    <span className="flex items-center gap-1 font-mono text-[11px] text-[var(--portfolio-text-secondary)]">
                      <Eye className="w-3 h-3 text-[var(--portfolio-accent-gold)]" />
                      {post.views}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold font-mono text-[var(--portfolio-text-primary)] mb-3 leading-snug hover:text-[var(--portfolio-primary)] transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-[var(--portfolio-text-secondary)] font-mono leading-relaxed mb-4">
                    {post.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-[var(--portfolio-bg-elevation-1)] border border-[var(--portfolio-border)] font-mono text-[10px] text-[var(--portfolio-primary)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--portfolio-border)] flex items-center justify-between text-xs font-mono text-[var(--portfolio-text-secondary)] mt-auto">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[var(--portfolio-primary)] hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>O‘qish</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </PortfolioCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
