import React from 'react';

interface KepButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
}

export const KepButton: React.FC<KepButtonProps> = ({
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
      'bg-[#93d7e2] text-[#0a0d14] font-semibold border border-[#93d7e2] hover:bg-[#b0e8f0] hover:shadow-[0_0_20px_rgba(147,215,226,0.35)] transition-all duration-200 active:scale-[0.98]',
    secondary:
      'bg-[#131821] text-[#edf1f4] border border-[rgba(255,255,255,0.12)] hover:border-[#93d7e2]/50 hover:bg-[#1c2331] hover:text-[#93d7e2] transition-all duration-200 active:scale-[0.98]',
    outline:
      'bg-transparent text-[#93d7e2] border border-[#93d7e2]/60 hover:bg-[#93d7e2]/10 hover:border-[#93d7e2] transition-all duration-200 active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#9caeb8] hover:text-[#edf1f4] hover:bg-white/[0.04] transition-all duration-200',
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
