import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'gold' | 'green' | 'purple' | 'muted';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'cyan', className = '' }) => {
  const variantStyles = {
    cyan: 'border-[var(--portfolio-border-bright)] bg-[var(--portfolio-primary-dim)] text-[var(--portfolio-primary)]',
    gold: 'border-[var(--portfolio-accent-gold)]/40 bg-[var(--portfolio-accent-gold)]/10 text-[var(--portfolio-accent-gold)]',
    green: 'border-[var(--portfolio-accent-green)]/40 bg-[var(--portfolio-accent-green)]/10 text-[var(--portfolio-accent-green)]',
    purple: 'border-[var(--portfolio-accent-purple)]/40 bg-[var(--portfolio-accent-purple)]/10 text-[var(--portfolio-accent-purple)]',
    muted: 'border-[var(--portfolio-border)] bg-[var(--portfolio-bg-elevation-1)] text-[var(--portfolio-text-secondary)]',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-wider border rounded-none uppercase select-none ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
