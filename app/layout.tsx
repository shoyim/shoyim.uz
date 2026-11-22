import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shoyim Obloqulov // Senior Full-Stack Engineer // shoyim.uz',
  description:
    'Shoyim Obloqulov — Senior Full-Stack Software Engineer & Solutions Architect. Laravel, Python, Next.js, High-load systems, Distributed Architectures & Open Source.',
  keywords: [
    'Shoyim Obloqulov',
    'shoyim',
    'shoyim.uz',
    'Laravel Uzbekistan',
    'Full Stack Developer',
    'Next.js Portfolio',
    'KEP.uz',
    'Competitive Programming',
    'Python Django',
  ],
  authors: [{ name: 'Shoyim Obloqulov', url: 'https://shoyim.uz' }],
  creator: 'Shoyim Obloqulov',
  metadataBase: new URL('https://shoyim.uz'),
  openGraph: {
    title: 'Shoyim Obloqulov // Portfolio // shoyim.uz',
    description:
      'Senior Full-Stack Engineer & System Architect. Laravel, Python, Next.js, Vue, High-load systems and Open Source.',
    url: 'https://shoyim.uz',
    siteName: 'SHOYIM.UZ',
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shoyim Obloqulov // Portfolio',
    description: 'Senior Full-Stack Software Engineer & System Architect',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uz"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} dark`}
      data-theme="dark"
    >
      <body className="min-h-screen bg-[#0a0d14] text-[#edf1f4] flex flex-col font-sans antialiased selection:bg-[#93d7e2]/20 selection:text-[#ffffff]">
        <div className="kep-top-line fixed top-0 left-0 right-0 z-50 pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
