import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
          border: '4px solid #ffffff',
          color: '#ffffff',
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: -3,
            lineHeight: 1,
            marginBottom: 8,
          }}
        >
          SH
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 2,
            opacity: 0.8,
          }}
        >
          SHOYIM.UZ
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
