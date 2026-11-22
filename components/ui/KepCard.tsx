import React from 'react';

interface KepCardProps {
  children: React.ReactNode;
  className?: string;
  hasCorners?: boolean;
  accent?: 'cyan' | 'gold' | 'default';
  hoverGlow?: boolean;
}

export const KepCard: React.FC<KepCardProps> = ({
  children,
  className = '',
  hasCorners = true,
  accent = 'cyan',
  hoverGlow = true,
}) => {
  const cornerClass = hasCorners
    ? accent === 'gold'
      ? 'kep-hud-corner-gold'
      : 'kep-hud-corner'
    : 'border border-[rgba(255,255,255,0.08)] bg-[#0e121a]';

  const glowClass = hoverGlow
    ? 'hover:border-[#93d7e2]/40 hover:shadow-[0_0_24px_rgba(147,215,226,0.08)] transition-all duration-300'
    : '';

  return (
    <div className={`p-6 relative rounded-none ${cornerClass} ${glowClass} ${className}`}>
      {children}
    </div>
  );
};
