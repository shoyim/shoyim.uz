import { ImageResponse } from 'next/og';

export const alt = 'Shoyim Obloqulov // Senior Full-Stack Engineer & System Architect';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 60,
          backgroundColor: '#000000',
          color: '#ffffff',
          fontFamily: 'monospace',
          border: '12px solid #1a1a1a',
          position: 'relative',
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
            paddingBottom: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                backgroundColor: '#ffffff',
              }}
            />
            <span>SHOYIM.UZ // CORE_SYSTEMS</span>
          </div>
          <div
            style={{
              fontSize: 16,
              color: '#a3a3a3',
              letterSpacing: 1,
            }}
          >
            [ STATUS: ACTIVE // 2026 ]
          </div>
        </div>

        {/* Center Identity */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: '#a3a3a3',
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            {'// SENIOR FULL-STACK ENGINEER & SYSTEM ARCHITECT'}
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              letterSpacing: -2,
              lineHeight: 1.1,
            }}
          >
            Shoyim Obloqulov
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#d4d4d4',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            High-Load Distributed Platforms, Laravel, Python, Next.js, Docker & Open-Source Ecosystems.
          </div>
        </div>

        {/* Bottom Metrics & Stack */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '2px solid rgba(255, 255, 255, 0.2)',
            paddingTop: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 16,
            }}
          >
            {['Laravel', 'Python', 'Next.js 16', 'Docker', 'PostgreSQL', 'Microservices'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            https://shoyim.uz
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
