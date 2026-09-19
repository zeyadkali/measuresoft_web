import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import {
  ShieldAlert,
  FileText,
  Download,
  Send,
  Plus,
  CheckCircle2,
  Clock,
  Phone,
  Printer,
  Share2,
  Layers,
  ChevronRight,
  ExternalLink,
  Award,
  AlertTriangle
} from 'lucide-react';

interface ProductDetailPageProps {
  slug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug }) => {
  const {
    products,
    categories,
    brands,
    language,
    addToQuoteCart,
    setActiveQuoteProduct,
    setActiveBrochureFile,
    navigateTo
  } = useApp();

  const isArabic = language === 'ar';

  const product = products.find(p => p.slug === slug) || products[0];
  const category = categories.find(c => c.id === product?.categoryId);
  const brand = brands.find(b => b.id === product?.brandId);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'applications' | 'features' | 'includes' | 'downloads'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Product Not Found</h2>
        <button
          onClick={() => navigateTo('/catalog')}
          className="mt-4 px-6 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs"
        >
          Return to Catalog
        </button>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 3);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumbs
        items={[
          { label: isArabic ? 'كتالوج المعدات' : 'Catalog', labelAr: 'كتالوج المعدات', path: '/catalog' },
          {
            label: category ? (isArabic ? category.nameAr : category.name) : 'Category',
            labelAr: category?.nameAr,
            path: '/catalog'
          },
          { label: product.code, labelAr: product.code }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 start-3">
                  <span className="font-mono text-xs font-black bg-slate-950/90 text-amber-400 px-3 py-1 rounded shadow-md border border-slate-800">
                    {product.code}
                  </span>
                </div>
                {product.atexRating && (
                  <div className="absolute bottom-3 start-3">
                    <span className="text-xs font-bold bg-amber-500 text-slate-950 px-2.5 py-1 rounded shadow-md font-mono">
                      {product.atexRating}
                    </span>
                  </div>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                        activeImageIndex === idx ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    {brand ? brand.name : 'Measuresoft'} • {category ? (isArabic ? category.nameAr : category.name) : ''}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 font-semibold px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isArabic ? 'جاهز للتوريد المباشر للمنصات' : 'Ready for Rig Dispatch'}</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight mb-3">
                  {isArabic ? product.nameAr : product.name}
                </h1>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {isArabic ? product.shortDescAr : product.shortDesc}
                </p>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">{isArabic ? 'كود الموديل المعتمد:' : 'Certified Model Code:'}</span>
                    <span className="font-mono font-bold text-slate-900">{product.code}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">{isArabic ? 'الغازات المستهدفة:' : 'Target Gases:'}</span>
                    <span className="font-mono font-bold text-amber-600">{product.gasTargets.join(', ')}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">{isArabic ? 'تصنيف المناطق الخطرة:' : 'Hazardous Area Rating:'}</span>
                    <span className="font-bold text-slate-900">{product.atexRating}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">{isArabic ? 'شهادات المعايرة:' : 'Metrology Standard:'}</span>
                    <span className="font-bold text-slate-900">NIST Traceable / ISO 9001:2015</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setActiveQuoteProduct(product)}
                    className="py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isArabic ? 'اطلب عرض سعر رسمي (RFQ)' : 'Request Official Quote'}</span>
                  </button>

                  <button
                    onClick={() => addToQuoteCart(product)}
                    className="py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{isArabic ? 'إضافة لسلة عروض الأسعار' : 'Add to RFQ Basket'}</span>
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>{isArabic ? 'خط الاستجابة الميداني: +20 100 554 9821' : 'Rig Dispatch Hotline: +20 100 554 9821'}</span>
                  </div>

                  <button
                    onClick={handleShare}
                    className="hover:text-amber-600 flex items-center gap-1 font-medium"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{copiedLink ? (isArabic ? 'تم نسخ الرابط!' : 'Link Copied!') : (isArabic ? 'مشاركة' : 'Share')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden mb-8">
          <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50 text-xs font-bold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3.5 px-5 border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'overview'
                  ? 'border-amber-500 text-slate-950 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {isArabic ? 'الوصف الهندسي' : 'Description'}
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-3.5 px-5 border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'specs'
                  ? 'border-amber-500 text-slate-950 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {isArabic ? 'جدول المواصفات الفنية' : 'Technical Specifications'}
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`py-3.5 px-5 border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'applications'
                  ? 'border-amber-500 text-slate-950 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {isArabic ? 'التطبيقات الميدانية' : 'Applications'}
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`py-3.5 px-5 border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'features'
                  ? 'border-amber-500 text-slate-950 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {isArabic ? 'المميزات الرئيسية' : 'Key Features'}
            </button>
            <button
              onClick={() => setActiveTab('includes')}
              className={`py-3.5 px-5 border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'includes'
                  ? 'border-amber-500 text-slate-950 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {isArabic ? 'محتويات الشحنة' : 'Includes'}
            </button>
            <button
              onClick={() => setActiveTab('downloads')}
              className={`py-3.5 px-5 border-b-2 whitespace-nowrap transition-colors ${
                activeTab === 'downloads'
                  ? 'border-amber-500 text-slate-950 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {isArabic ? 'تحميل الكتالوجات (PDF)' : 'Brochures & Manuals'}
            </button>
          </div>

          <div className="p-6 md:p-8">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-950">
                  {isArabic ? 'نظرة عامة والوصف الهندسي للمعدة' : 'Comprehensive Engineering Overview'}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {isArabic ? product.descriptionAr : product.description}
                </p>

                <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-950">
                    <strong>{isArabic ? 'شهادة التوافق مع الهيئة المصرية للبترول (EGPC):' : 'Egyptian General Petroleum Corp Compliance:'}</strong>{' '}
                    {isArabic
                      ? 'هذه المنظومة معتمدة للاستخدام في كافة مناطق الامتياز البترولية في مصر، ومطابقة لاشتراطات السلامة والبيئة الصارمة.'
                      : 'This equipment package complies with Egyptian environmental and offshore rig safety regulations.'}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-950">
                  {isArabic ? 'المواصفات الفنية التفصيلية' : 'Full Technical Specifications Matrix'}
                </h3>
                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-xs text-start">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                        <th className="p-3 font-bold text-start w-1/3">{isArabic ? 'المعيار / الخاصية' : 'Parameter'}</th>
                        <th className="p-3 font-bold text-start">{isArabic ? 'القيمة والمواصفة الهندسية' : 'Engineering Specification'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-mono">
                      {product.specs.map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="p-3 font-semibold text-slate-800 font-sans">
                            {isArabic ? spec.labelAr : spec.label}
                          </td>
                          <td className="p-3 text-slate-700">
                            {isArabic ? spec.valueAr : spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-950">
                  {isArabic ? 'مجالات وتطبيقات الاستخدام الميداني' : 'Target Field Applications'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(isArabic ? product.applicationsAr : product.applications).map((app, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium leading-relaxed">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-950">
                  {isArabic ? 'أهم الخصائص والمزايا التشغيلية' : 'Key Engineering Features'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(isArabic ? product.keyFeaturesAr : product.keyFeatures).map((feature, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                      <span className="text-xs text-slate-700 font-medium leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'includes' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-950">
                  {isArabic ? 'المحتويات المشمولة مع الباكدج' : 'Standard Delivery Package Includes'}
                </h3>
                <ul className="space-y-2.5">
                  {(isArabic ? product.includesAr : product.includes).map((inc, idx) => (
                    <li key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'downloads' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-950">
                  {isArabic ? 'الكتالوجات والشهادات المعتمدة بصيغة PDF' : 'Download Technical Datasheets & Manuals'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.files.map((file, i) => (
                    <div
                      key={i}
                      className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900">
                            {isArabic ? file.titleAr : file.title}
                          </h4>
                          <span className="text-[11px] text-slate-500 font-mono">
                            PDF • {file.size}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveBrochureFile({ product, file })}
                        className="p-2 bg-white hover:bg-amber-500 hover:text-slate-950 text-slate-700 border border-slate-200 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'فتح وتحميل' : 'Open'}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-950">
              {isArabic ? 'معدات ذات صلة في نفس التصنيف' : 'Related Instruments & Sensor Packages'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
