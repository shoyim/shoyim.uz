import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://shoyim.uz'),
  title: {
    default: 'Shoyim Obloqulov // Senior Full-Stack Engineer & System Architect',
    template: '%s // Shoyim Obloqulov',
  },
  description:
    'Shoyim Obloqulov — Senior Full-Stack dasturchi va tizimlar arxitektori. Laravel, Python/Django, Next.js, yuqori yuklamali tarqatilgan tizimlar, microservices va ochiq kodli ekotizimlar mutaxassisi.',
  keywords: [
    'Shoyim Obloqulov',
    'shoyim',
    'shoyim.uz',
    'Senior Full-Stack Engineer',
    'System Architect Uzbekistan',
    'Laravel Developer Uzbekistan',
    'Python Django Architect',
    'Next.js 16 Portfolio',
    'Competitive Programming',
    'Distributed Systems',
    'High Load Backend',
    'Open Source Maintainer',
  ],
  authors: [{ name: 'Shoyim Obloqulov', url: 'https://shoyim.uz' }],
  creator: 'Shoyim Obloqulov',
  publisher: 'Shoyim Obloqulov',
  applicationName: 'Shoyim.uz Portfolio',
  category: 'technology',
  alternates: {
    canonical: 'https://shoyim.uz',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.svg'],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Shoyim Obloqulov // Senior Full-Stack Engineer & System Architect',
    description:
      'Yuqori yuklamali veb platformalar, keng ko‘lamli API servislar, Telegram ekotizimlari va ochiq kodli paketlar arxitektori.',
    url: 'https://shoyim.uz',
    siteName: 'SHOYIM.UZ',
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shoyim Obloqulov // System Architect',
    description:
      'Senior Full-Stack Software Engineer & Solutions Architect. High-load backend, Next.js, Laravel, Python.',
    creator: '@shoyim',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shoyim Obloqulov',
  alternateName: 'Shoyim',
  url: 'https://shoyim.uz',
  image: 'https://shoyim.uz/images/profile.jpg',
  jobTitle: 'Senior Full-Stack Engineer & System Architect',
  worksFor: {
    '@type': 'Organization',
    name: 'Independent Software Engineering & Open Source',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Samarkand',
    addressCountry: 'Uzbekistan',
  },
  sameAs: [
    'https://github.com/shoyim',
    'https://t.me/shoyim_portfolio',
    'https://t.me/shoyim',
  ],
  knowsAbout: [
    'PHP',
    'Laravel',
    'Python',
    'Django',
    'FastAPI',
    'Next.js',
    'TypeScript',
    'Vue.js',
    'Docker',
    'PostgreSQL',
    'Redis',
    'High-Load Distributed Systems',
    'System Architecture',
  ],
};

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Shoyim Obloqulov // Portfolio',
  url: 'https://shoyim.uz',
  inLanguage: 'uz',
  author: {
    '@type': 'Person',
    name: 'Shoyim Obloqulov',
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
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var t = localStorage.getItem('portfolio-theme') || 'dark';
              document.documentElement.setAttribute('data-theme', t);
              if (t === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--portfolio-bg-default)] text-[var(--portfolio-text-primary)] flex flex-col font-sans antialiased selection:bg-[var(--portfolio-primary-dim)]">
        <div className="portfolio-top-line fixed top-0 left-0 right-0 z-50 pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
