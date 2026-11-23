import type { Metadata } from 'next';
import { BlogPageClient } from '@/components/BlogPageClient';

export const metadata: Metadata = {
  title: 'Texnik Blog & Arxitektura // Shoyim Obloqulov // shoyim.uz',
  description:
    'Dasturiy tizimlar arxitekturasi, yuqori yuklamali Redis navbatlari, AST kod tahlili va zamonaviy veb texnologiyalar bo‘yicha chuqur maqolalar.',
  alternates: {
    canonical: 'https://shoyim.uz/blog',
  },
  openGraph: {
    title: 'Texnik Blog // Shoyim Obloqulov',
    description: 'Dasturiy arxitektura va amaliy muhandislik tahlillari.',
    url: 'https://shoyim.uz/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texnik Blog // Shoyim Obloqulov',
    description: 'Dasturiy tizimlar arxitekturasi va amaliy tajribalar.',
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
