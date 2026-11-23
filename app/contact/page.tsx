import type { Metadata } from 'next';
import { ContactPageClient } from '@/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Aloqa & Loyiha Smetasi // Shoyim Obloqulov // shoyim.uz',
  description:
    'Shoyim Obloqulov bilan to‘g‘ridan-to‘g‘ri bog‘lanish, yangi veb platforma, Telegram bot yoki tizimlar auditi bo‘yicha konsultatsiya va hamkorlik.',
  alternates: {
    canonical: 'https://shoyim.uz/contact',
  },
  openGraph: {
    title: 'Aloqa // Shoyim Obloqulov',
    description: 'Yangi loyiha yoki konsultatsiya uchun to‘g‘ridan-to‘g‘ri aloqa.',
    url: 'https://shoyim.uz/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamkorlik & Aloqa // Shoyim Obloqulov',
    description: 'Yangi loyiha va muhandislik konsultatsiyasi.',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
