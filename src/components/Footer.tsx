import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Award,
  Clock,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { language, navigateTo, categories } = useApp();
  const isArabic = language === 'ar';

  return (
    <footer className="bg-slate-950 text-slate-300 border-t-4 border-amber-500">
      <div className="bg-slate-900/80 border-b border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                {isArabic ? 'مورد معتمد رسمي' : 'EGPC Registered Vendor'}
              </div>
              <div className="text-xs text-slate-400">
                {isArabic ? 'رقم الاعتماد: 77291 لكافة حقول مصر' : 'Vendor Reg No: 77291 (Upstream)'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                {isArabic ? 'شهادات الجودة والسلامة' : 'Triple ISO Certified'}
              </div>
              <div className="text-xs text-slate-400">
                {isArabic ? 'ISO 9001 / ISO 14001 / ISO 45001' : 'ISO 9001 / 14001 / 45001 Metrology'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                {isArabic ? 'استجابة سريعة للمنصات' : 'Emergency Field Mobilization'}
              </div>
              <div className="text-xs text-slate-400">
                {isArabic ? 'إيفاد فنيين وقطع غيار خلال ساعات للسويس' : 'Rapid dispatch to Suez & Western Desert'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                {isArabic ? 'خط طوارئ الحقول المباشر' : '24/7 Oilfield Hotline'}
              </div>
              <div className="text-xs font-mono text-amber-400 font-bold">
                +20 100 554 9821
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 border-2 border-amber-500 rounded-lg flex items-center justify-center">
                <span className="font-mono text-lg font-black text-amber-400">MS</span>
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">MEASURESOFT</span>
                <span className="block text-xs text-slate-400 font-medium">
                  {isArabic ? 'شركة مصرية متخصصة في معدات البترول وأجهزة الحفر' : 'Petroleum Instrumentation & Mud Logging Egypt'}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {isArabic
                ? 'تأسست شركة Measuresoft في مصر كشريك هندسي معتمد لكبرى شركات إنتاج البترول والغاز. نوفر أحدث كواشف الغازات المقاومة للانفجار ATEX، وأجهزة استخلاص الغاز ومحللات الهيدروكربونات الكلية FID، ومعمل معايرة قياسية معتمد في القاهرة والسويس.'
                : 'Founded in Egypt, Measuresoft is an approved engineering partner to major petroleum joint ventures and offshore operators. We deliver ATEX-certified toxic gas detection, high-rate mud logging gas extractors, FID hydrocarbon analyzers, and NIST-traceable calibration services.'}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>
                <strong className="text-slate-200">{isArabic ? 'المقر الإداري:' : 'Headquarters:'}</strong>{' '}
                {isArabic ? 'قطعة 18، المنطقة الصناعية، التجمع الخامس، القاهرة، مصر' : 'Plot 18, Industrial Sector 1, New Cairo, Egypt'}
              </div>
              <div>
                <strong className="text-slate-200">{isArabic ? 'قاعدة العمليات البحرية:' : 'Marine Base:'}</strong>{' '}
                {isArabic ? 'المنطقة الحرة اللوجستية، ميناء بور توفيق، السويس' : 'Free Zone Marine Hub, Port Tawfik, Suez'}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-s-2 border-amber-500 ps-2.5">
              {isArabic ? 'كتالوج المعدات' : 'Equipment Catalog'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      navigateTo('/catalog');
                    }}
                    className="hover:text-amber-400 transition-colors text-start"
                  >
                    {isArabic ? cat.nameAr : cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigateTo('/catalog')}
                  className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 mt-1"
                >
                  <span>{isArabic ? 'كافة المنتجات (الفلاتر)' : 'Browse Full Catalog'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-s-2 border-amber-500 ps-2.5">
              {isArabic ? 'روابط هامة' : 'Corporate & Safety'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => navigateTo('/about')} className="hover:text-amber-400 transition-colors">
                  {isArabic ? 'عن Measuresoft وتاريخنا' : 'About Measuresoft'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/qhse')} className="hover:text-amber-400 transition-colors">
                  {isArabic ? 'سياسة الجودة والسلامة QHSE' : 'QHSE Policy & ISO Approvals'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/contact')} className="hover:text-amber-400 transition-colors">
                  {isArabic ? 'فروعنا (القاهرة، السويس، هيوستن)' : 'Branches & Calibration Lab'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/blog')} className="hover:text-amber-400 transition-colors">
                  {isArabic ? 'مقالات وأخبار الصناعة' : 'Technical Insights & Blog'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/careers')} className="hover:text-amber-400 transition-colors">
                  {isArabic ? 'الوظائف الشاغرة' : 'Careers at Measuresoft'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/quote')} className="hover:text-amber-400 transition-colors text-amber-400 font-bold">
                  {isArabic ? 'طلب عرض سعر مباشر (RFQ)' : 'Submit Direct RFQ'}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-s-2 border-amber-500 ps-2.5">
              {isArabic ? 'التواصل والاستفسارات' : 'Direct Inquiries'}
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@measuresofteg.com" className="text-white hover:text-amber-400 transition-colors font-medium">
                    info@measuresofteg.com
                  </a>
                  <div className="text-xs text-slate-500">{isArabic ? 'المراسلات الرسمية وعروض الأسعار' : 'Commercial & RFQ Desks'}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+20228134900" className="text-white hover:text-amber-400 transition-colors font-mono">
                    +20 2 2813 4900
                  </a>
                  <div className="text-xs text-slate-500">{isArabic ? 'هاتف مكتب القاهرة' : 'Cairo Switchboard'}</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('/quote')}
                  className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors text-center"
                >
                  {isArabic ? 'طلب تسعير سريع B2B' : 'Request Commercial Quotation'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Measuresoft Systems Egypt. {isArabic ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}{' '}
            {isArabic ? 'الموقع الرسمي المطور لشركة Measuresoft لخدمات البترول والغاز.' : 'Official Measuresoft Egypt Oilfield Solutions Portal.'}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">{isArabic ? 'معتمد رسمياً:' : 'Official Approvals:'}</span>
            <span className="font-mono text-slate-300 font-bold">EGPC-77291</span>
            <span>•</span>
            <span className="font-mono text-slate-300 font-bold">ATEX 2014/34/EU</span>
            <span>•</span>
            <span className="font-mono text-slate-300 font-bold">ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
