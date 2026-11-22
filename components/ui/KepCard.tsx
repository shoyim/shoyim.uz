import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hasCorners?: boolean;
  accent?: 'cyan' | 'gold' | 'default';
  hoverGlow?: boolean;
}

export const PortfolioCard: React.FC<CardProps> = ({
  children,
  className = '',
  hasCorners = true,
  accent = 'cyan',
  hoverGlow = true,
}) => {
  const cornerClass = hasCorners
    ? accent === 'gold'
      ? 'portfolio-hud-corner-gold'
      : 'portfolio-hud-corner'
    : 'border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-paper)]';

  const glowClass = hoverGlow
    ? 'hover:border-[var(--portfolio-border-bright)] hover:shadow-[0_0_24px_var(--portfolio-primary-dim)] transition-all duration-300'
    : '';

  return (
    <div
      className={`p-6 relative rounded-none text-[var(--portfolio-text-primary)] ${cornerClass} ${glowClass} ${className}`}
    >
      {children}
    </div>
  );
};

// Backwards-compatible alias
export const KepCard = PortfolioCard;
