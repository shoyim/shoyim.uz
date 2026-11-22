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
    <div className="flex items-center gap-2 font-mono text-xs text-[#9caeb8] mb-8 overflow-x-auto py-2">
      <Link
        href="/"
        className="flex items-center gap-1.5 text-[#93d7e2] hover:text-[#b0e8f0] transition-colors shrink-0"
      >
        <Home className="w-3.5 h-3.5" />
        <span>~/root</span>
      </Link>

      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3 h-3 text-[#596a75] shrink-0" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-[#9caeb8] hover:text-[#edf1f4] uppercase tracking-wider shrink-0 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#edf1f4] font-bold uppercase tracking-wider shrink-0">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
