import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
}

export const PortfolioButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  asAnchor = false,
  href,
  target,
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs font-mono',
    md: 'px-5 py-2.5 text-sm font-mono tracking-wide',
    lg: 'px-7 py-3.5 text-base font-mono tracking-wider',
  }[size];

  const variantStyles = {
    primary:
      'bg-[var(--portfolio-primary)] text-[var(--portfolio-primary-text)] font-semibold border border-[var(--portfolio-primary)] hover:opacity-90 hover:shadow-[0_0_20px_var(--portfolio-primary-glow)] transition-all duration-200 active:scale-[0.98]',
    secondary:
      'bg-[var(--portfolio-bg-elevation-1)] text-[var(--portfolio-text-primary)] border border-[var(--portfolio-border)] hover:border-[var(--portfolio-primary)] hover:bg-[var(--portfolio-bg-elevation-2)] hover:text-[var(--portfolio-primary)] transition-all duration-200 active:scale-[0.98]',
    outline:
      'bg-transparent text-[var(--portfolio-primary)] border border-[var(--portfolio-border-bright)] hover:bg-[var(--portfolio-primary-dim)] hover:border-[var(--portfolio-primary)] transition-all duration-200 active:scale-[0.98]',
    ghost:
      'bg-transparent text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-text-primary)] hover:bg-[var(--portfolio-bg-elevation-1)] transition-all duration-200',
  }[variant];

  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-none uppercase cursor-pointer select-none ${sizeStyles} ${variantStyles} ${className}`;

  if (asAnchor && href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={baseClasses}>
        {children}
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};

// Backwards-compatible alias
export const KepButton = PortfolioButton;
