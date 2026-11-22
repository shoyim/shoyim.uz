import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="flex items-center gap-2 font-mono text-xs text-[var(--portfolio-text-secondary)] mb-8 overflow-x-auto py-2">
      <Link
        href="/"
        className="flex items-center gap-1.5 text-[var(--portfolio-primary)] hover:opacity-80 transition-opacity shrink-0"
      >
        <Home className="w-3.5 h-3.5" />
        <span>~/root</span>
      </Link>

      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3 h-3 text-[var(--portfolio-text-muted)] shrink-0" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-text-primary)] uppercase tracking-wider shrink-0 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--portfolio-text-primary)] font-bold uppercase tracking-wider shrink-0">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
