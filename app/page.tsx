import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Shoyim Obloqulov // Senior Full-Stack Engineer & System Architect',
  description:
    'Shoyim Obloqulov — Senior Full-Stack muhandis va tizimlar arxitektori. Laravel, Python, Next.js, yuqori yuklamali tarqatilgan tizimlar va ochiq kodli ekotizimlar.',
  alternates: {
    canonical: 'https://shoyim.uz',
  },
  openGraph: {
    title: 'Shoyim Obloqulov // Senior Full-Stack Engineer & System Architect',
    description:
      'Yuqori yuklamali veb platformalar, keng ko‘lamli API servislar, Telegram ekotizimlari va ochiq kodli paketlar arxitektori.',
    url: 'https://shoyim.uz',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--portfolio-bg-default)] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
