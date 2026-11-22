import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'gold' | 'green' | 'purple' | 'muted';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'cyan', className = '' }) => {
  const variantStyles = {
    cyan: 'border-[#93d7e2]/40 bg-[#93d7e2]/10 text-[#93d7e2]',
    gold: 'border-[#d8c697]/40 bg-[#d8c697]/10 text-[#d8c697]',
    green: 'border-[#28a66a]/40 bg-[#28a66a]/10 text-[#28a66a]',
    purple: 'border-[#bd93f9]/40 bg-[#bd93f9]/10 text-[#bd93f9]',
    muted: 'border-white/10 bg-white/[0.03] text-[#9caeb8]',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-wider border rounded-none uppercase select-none ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
