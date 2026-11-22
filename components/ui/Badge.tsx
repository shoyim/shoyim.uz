import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'gold' | 'green' | 'purple' | 'muted';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'cyan', className = '' }) => {
  const variantStyles = {
    cyan: 'border-[var(--portfolio-border-bright)] bg-[var(--portfolio-primary-dim)] text-[var(--portfolio-text-primary)]',
    gold: 'border-[var(--portfolio-border-bright)] bg-[var(--portfolio-bg-elevation-2)] text-[var(--portfolio-text-primary)] font-bold',
    green: 'border-[var(--portfolio-border-bright)] bg-[var(--portfolio-primary-dim)] text-[var(--portfolio-text-primary)]',
    purple: 'border-[var(--portfolio-border-bright)] bg-[var(--portfolio-bg-elevation-1)] text-[var(--portfolio-text-primary)]',
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
