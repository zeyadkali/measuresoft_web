import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FileText,
  Download,
  X,
  Printer,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react';

export const BrochureModal: React.FC = () => {
  const { activeBrochureFile, setActiveBrochureFile, language, setActiveQuoteProduct } = useApp();
  const [activePage, setActivePage] = useState(1);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!activeBrochureFile) return null;

  const { product, file } = activeBrochureFile;
  const isArabic = language === 'ar';
  const totalPages = file.pageCount || 4;

  const handleDownload = () => {
    setDownloadSuccess(true);
    const element = document.createElement('a');
    const fileContent = `MEASURESOFT SYSTEMS EGYPT - OFFICIAL TECHNICAL SPECIFICATION SHEET
Document: ${file.title}
Equipment Code: ${product.code}
Model: ${product.name}
ATEX Rating: ${product.atexRating}
Approved Vendor: Egyptian General Petroleum Corporation (EGPC No. 77291)
Quality Standards: ISO 9001:2015, ISO 14001:2015, ISO 45001:2018
--------------------------------------------------------------------------------
TECHNICAL SPECIFICATIONS:
${product.specs.map(s => `${s.label}: ${s.value}`).join('\n')}

APPLICATIONS:
${product.applications.map(a => `- ${a}`).join('\n')}

KEY FEATURES:
${product.keyFeatures.map(k => `- ${k}`).join('\n')}

INCLUDED IN SCOPE:
${product.includes.map(i => `- ${i}`).join('\n')}

HEADQUARTERS & CALIBRATION LABORATORY:
Measuresoft Egypt, Plot 18 Industrial Area, New Cairo, Egypt
24/7 Rig Support: +20 100 554 9821 | info@measuresofteg.com`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(blob);
    element.download = `${product.code}-${file.type}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-700 my-auto flex flex-col max-h-[92vh]">
        <div className="bg-slate-950 text-white p-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-amber-400 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  {product.code}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  {file.type}
                </span>
              </div>
              <h3 className="text-base font-bold text-white truncate max-w-md md:max-w-xl">
                {isArabic ? file.titleAr : file.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Print Specification"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">{isArabic ? 'تحميل الملف' : 'Download Document'}</span>
            </button>
            <button
              onClick={() => setActiveBrochureFile(null)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {downloadSuccess && (
          <div className="bg-emerald-500 text-slate-950 font-bold px-4 py-2 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>
                {isArabic
                  ? 'تم تجهيز وتحميل المستند الفني بنجاح على جهازك!'
                  : 'Technical specification document generated and downloaded successfully!'}
              </span>
            </div>
            <button
              onClick={() => {
                setActiveBrochureFile(null);
                setActiveQuoteProduct(product);
              }}
              className="underline text-slate-950 font-extrabold hover:opacity-80"
            >
              {isArabic ? 'اطلب عرض سعر لهذه المعدة الآن' : 'Request Quotation for this equipment'} →
            </button>
          </div>
        )}

        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-100">
          <div className="bg-white rounded-xl shadow-md border border-slate-300 max-w-3xl mx-auto p-6 md:p-10 font-sans print:shadow-none print:border-none">
            <div className="border-b-2 border-slate-900 pb-5 mb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center border-2 border-amber-500">
                  <span className="font-mono text-xl font-black text-amber-400">MS</span>
                </div>
                <div>
                  <h1 className="text-xl font-black tracking-tight text-slate-950">MEASURESOFT</h1>
                  <p className="text-xs font-semibold text-slate-500">Petroleum Systems & Upstream Rig Instrumentation</p>
                  <p className="text-[11px] text-amber-600 font-bold">EGPC Approved Vendor Code: 77291</p>
                </div>
              </div>

              <div className="text-end text-xs text-slate-500 font-mono space-y-0.5">
                <div>DOC NO: <strong className="text-slate-900">TDS-{product.code}-2026</strong></div>
                <div>CLASSIFICATION: <strong className="text-slate-900">OFFICIAL TECHNICAL SHEET</strong></div>
                <div>REVISION: <strong className="text-slate-900">Rev 4.2 / Cairo Metrology</strong></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded">
                    {product.code}
                  </span>
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                    {product.atexRating}
                  </span>
                </div>

                <h2 className="text-xl font-extrabold text-slate-950 leading-tight">
                  {isArabic ? product.nameAr : product.name}
                </h2>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {isArabic ? product.descriptionAr : product.description}
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 flex flex-col items-center justify-center">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-44 object-cover rounded-md border border-slate-200 mb-2"
                />
                <span className="text-[10px] text-slate-500 text-center font-mono">
                  Fig 1: {product.code} Industrial Assembly
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-2 mb-3">
                {isArabic ? 'جدول المواصفات الفنية المعتمدة' : 'Certified Technical Specifications'}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-start border-collapse border border-slate-200">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="p-2.5 font-semibold text-slate-800 border border-slate-200 w-1/3">
                          {isArabic ? spec.labelAr : spec.label}
                        </td>
                        <td className="p-2.5 font-mono text-slate-700 border border-slate-200">
                          {isArabic ? spec.valueAr : spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-xs">
              <div>
                <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-1.5 mb-2 uppercase tracking-wide">
                  {isArabic ? 'التطبيقات الميدانية' : 'Target Field Applications'}
                </h4>
                <ul className="space-y-1.5 text-slate-700 list-disc list-inside">
                  {(isArabic ? product.applicationsAr : product.applications).map((app, idx) => (
                    <li key={idx} className="leading-snug">{app}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-1.5 mb-2 uppercase tracking-wide">
                  {isArabic ? 'المحتويات المشمولة' : 'Package Includes'}
                </h4>
                <ul className="space-y-1.5 text-slate-700 list-disc list-inside">
                  {(isArabic ? product.includesAr : product.includes).map((inc, idx) => (
                    <li key={idx} className="leading-snug">{inc}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  {isArabic
                    ? 'معتمد وفق المواصفات القياسية ISO 9001:2015 والهيئة المصرية للبترول'
                    : 'Certified compliant with ISO 9001:2015 & EGPC Rig Safety Regulations'}
                </span>
              </div>
              <div className="text-end font-mono text-[11px]">
                Page {activePage} of {totalPages}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>{isArabic ? 'التنقل بين الصفحات:' : 'Document Pages:'}</span>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePage(i + 1)}
                  className={`w-7 h-7 rounded text-xs font-semibold ${
                    activePage === i + 1 ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setActiveBrochureFile(null);
                setActiveQuoteProduct(product);
              }}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors"
            >
              {isArabic ? 'اطلب تسعير هذه المعدة' : 'Request Pricing for this Product'}
            </button>
            <button
              onClick={() => setActiveBrochureFile(null)}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg text-xs transition-colors"
            >
              {isArabic ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
