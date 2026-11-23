import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shoyim Obloqulov // Senior Full-Stack Engineer',
    short_name: 'shoyim.uz',
    description:
      'Shoyim Obloqulov — Senior Full-Stack Software Engineer & Solutions Architect. High-load platforms, Laravel, Python, Next.js, and Open Source.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
