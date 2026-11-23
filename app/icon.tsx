import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
          border: '1px solid #ffffff',
          color: '#ffffff',
          fontFamily: 'monospace',
          fontSize: 16,
          fontWeight: 900,
          letterSpacing: -1,
        }}
      >
        SH
      </div>
    ),
    {
      ...size,
    }
  );
}
