import type { Metadata } from 'next';
import { ProjectsPageClient } from '@/components/ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Loyihalar & Open Source // Shoyim Obloqulov // shoyim.uz',
  description:
    'Shoyim Obloqulov tomonidan ishlab chiqilgan 25+ real loyihalar: Laravel paketlari, Telegram botlari, AI/RAG tizimlari va korporativ ERP platformalar.',
  alternates: {
    canonical: 'https://shoyim.uz/projects',
  },
  openGraph: {
    title: 'Loyihalar & Open Source // Shoyim Obloqulov',
    description:
      '25+ tijoriy, ta\'limiy va ochiq kodli loyihalar arxitekturasi.',
    url: 'https://shoyim.uz/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loyihalar & Open Source // Shoyim Obloqulov',
    description: '25+ real loyihalar va ochiq kodli paketlar.',
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
