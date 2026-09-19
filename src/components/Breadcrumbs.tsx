import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useApp } from '../context/AppContext';

export interface BreadcrumbItem {
  label: string;
  labelAr?: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { language, navigateTo } = useApp();
  const isArabic = language === 'ar';

  return (
    <nav aria-label="Breadcrumb" className="py-2.5 px-4 bg-slate-100/80 border-b border-slate-200 text-xs">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 text-slate-600">
        <button
          onClick={() => navigateTo('/')}
          className="flex items-center gap-1 hover:text-amber-600 transition-colors font-medium"
        >
          <Home className="w-3.5 h-3.5" />
          <span>{isArabic ? 'الرئيسية' : 'Home'}</span>
        </button>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const displayLabel = isArabic && item.labelAr ? item.labelAr : item.label;

          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-slate-400 rtl:rotate-180" />
              {isLast || !item.path ? (
                <span className="font-semibold text-slate-900 truncate max-w-xs md:max-w-md">
                  {displayLabel}
                </span>
              ) : (
                <button
                  onClick={() => item.path && navigateTo(item.path)}
                  className="hover:text-amber-600 transition-colors font-medium truncate max-w-[180px]"
                >
                  {displayLabel}
                </button>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
