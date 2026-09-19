import React from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import {
  FileText,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Send,
  Plus
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const {
    language,
    navigateTo,
    addToQuoteCart,
    setActiveQuoteProduct,
    setActiveBrochureFile,
    brands
  } = useApp();

  const isArabic = language === 'ar';
  const brand = brands.find(b => b.id === product.brandId);

  const primaryBrochure = product.files.find(f => f.type === 'brochure' || f.type === 'datasheet') || product.files[0];

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl border border-slate-200 hover:border-amber-400/80 shadow-xs hover:shadow-md transition-all p-5 flex flex-col md:flex-row gap-5 items-start">
        <div className="relative w-full md:w-56 h-48 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2.5 start-2.5">
            <span className="font-mono text-xs font-bold bg-slate-950/90 text-amber-400 px-2 py-1 rounded shadow-sm border border-slate-800">
              {product.code}
            </span>
          </div>
          {product.atexRating && (
            <div className="absolute bottom-2.5 start-2.5">
              <span className="text-[11px] font-bold bg-amber-500 text-slate-950 px-2 py-0.5 rounded shadow-sm">
                {product.atexRating}
              </span>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {brand ? brand.name : 'Measuresoft'}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isArabic ? 'متاح للتوريد الفوري للمنصات' : 'Ready for Rig Dispatch'}</span>
            </div>
          </div>

          <h3
            onClick={() => navigateTo(`/products/${product.slug}`)}
            className="text-lg font-bold text-slate-950 hover:text-amber-600 transition-colors cursor-pointer mb-2"
          >
            {isArabic ? product.nameAr : product.name}
          </h3>

          <p className="text-sm text-slate-600 line-clamp-2 mb-3">
            {isArabic ? product.shortDescAr : product.shortDesc}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.gasTargets.slice(0, 4).map((gas, index) => (
              <span
                key={index}
                className="text-[11px] font-mono font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
              >
                {gas}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
            <button
              onClick={() => navigateTo(`/products/${product.slug}`)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <span>{isArabic ? 'المواصفات والتحميلات' : 'Technical Specifications'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>

            <button
              onClick={() => setActiveQuoteProduct(product)}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isArabic ? 'اطلب عرض سعر (RFQ)' : 'Request Quote'}</span>
            </button>

            <button
              onClick={() => addToQuoteCart(product)}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs flex items-center gap-1 transition-colors"
              title={isArabic ? 'إضافة لسلة عروض الأسعار' : 'Add to Quote Cart'}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{isArabic ? 'إضافة للسلة' : 'Add to RFQ'}</span>
            </button>

            {primaryBrochure && (
              <button
                onClick={() => setActiveBrochureFile({ product, file: primaryBrochure })}
                className="ms-auto text-xs text-slate-500 hover:text-amber-600 font-medium flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Datasheet</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all flex flex-col h-full group">
      <div className="relative h-52 bg-slate-100 overflow-hidden rounded-t-xl border-b border-slate-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 start-3">
          <span className="font-mono text-xs font-bold bg-slate-950/90 text-amber-400 px-2.5 py-1 rounded shadow-sm border border-slate-800">
            {product.code}
          </span>
        </div>
        {product.atexRating && (
          <div className="absolute bottom-3 start-3">
            <span className="text-[10px] font-bold bg-amber-500 text-slate-950 px-2 py-0.5 rounded shadow-sm tracking-tight">
              {product.atexRating}
            </span>
          </div>
        )}
        <div className="absolute top-3 end-3">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 px-2 py-0.5 rounded shadow-xs border border-slate-200">
            {brand ? brand.name : 'Measuresoft'}
          </span>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>{isArabic ? 'جاهز للتوريد الميداني' : 'In Stock • Cairo & Suez'}</span>
          </div>

          <h3
            onClick={() => navigateTo(`/products/${product.slug}`)}
            className="font-bold text-slate-950 text-base hover:text-amber-600 transition-colors cursor-pointer line-clamp-2 mb-2 leading-snug"
          >
            {isArabic ? product.nameAr : product.name}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
            {isArabic ? product.shortDescAr : product.shortDesc}
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {product.gasTargets.slice(0, 3).map((gas, i) => (
              <span
                key={i}
                className="text-[10px] font-mono bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200"
              >
                {gas}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => navigateTo(`/products/${product.slug}`)}
              className="w-full py-2 px-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold text-center transition-colors flex items-center justify-center gap-1"
            >
              <span>{isArabic ? 'المواصفات' : 'Details'}</span>
              <ArrowRight className="w-3 h-3 rtl:rotate-180" />
            </button>

            <button
              onClick={() => setActiveQuoteProduct(product)}
              className="w-full py-2 px-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs text-center transition-colors shadow-xs flex items-center justify-center gap-1"
            >
              <Send className="w-3 h-3" />
              <span>{isArabic ? 'طلب سعر' : 'Quote'}</span>
            </button>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
            <button
              onClick={() => addToQuoteCart(product)}
              className="hover:text-amber-600 font-medium flex items-center gap-1 text-slate-600"
            >
              <Plus className="w-3 h-3" />
              <span>{isArabic ? 'إضافة للسلة' : 'Add to RFQ List'}</span>
            </button>

            {primaryBrochure && (
              <button
                onClick={() => setActiveBrochureFile({ product, file: primaryBrochure })}
                className="hover:text-amber-600 font-medium flex items-center gap-1 text-slate-500"
              >
                <FileText className="w-3 h-3 text-red-600" />
                <span>PDF</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
