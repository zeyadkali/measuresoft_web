import React from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  ShieldCheck,
  Award,
  AlertTriangle,
  CheckCircle2,
  FileCheck,
  Leaf,
  HeartPulse,
  HardHat,
  Download,
  Building
} from 'lucide-react';

export const QhsePage: React.FC = () => {
  const { language, navigateTo } = useApp();
  const isArabic = language === 'ar';

  const certificates = [
    {
      title: 'ISO 9001:2015',
      desc: isArabic ? 'نظام إدارة الجودة المعتمد لمعامل المعايرة وتوريد الأجهزة البترولية' : 'Quality Management System for Instrumentation & Calibration Labs',
      issuer: 'TÜV Rheinland / EGAC Accredited',
      badge: 'Certified'
    },
    {
      title: 'ISO 14001:2015',
      desc: isArabic ? 'نظام الإدارة البيئية والحد من المخاطر البيئية في منصات الحفر' : 'Environmental Management System for Offshore Rig Operations',
      issuer: 'Bureau Veritas',
      badge: 'Certified'
    },
    {
      title: 'ISO 45001:2018',
      desc: isArabic ? 'نظام إدارة الصحة والسلامة المهنية وحماية الكوادر الفنية' : 'Occupational Health and Safety Management System',
      issuer: 'DNV GL',
      badge: 'Certified'
    },
    {
      title: 'EGPC Vendor Registration',
      desc: isArabic ? 'اعتماد الهيئة المصرية العامة للبترول لكافة حقول الاستكشاف والإنتاج' : 'Official Egyptian General Petroleum Corporation Vendor Code 77291',
      issuer: 'Egyptian General Petroleum Corporation (EGPC)',
      badge: 'Approved'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumbs
        items={[
          {
            label: isArabic ? 'الجودة والسلامة (QHSE)' : 'QHSE & Compliance',
            labelAr: 'سياسة الجودة والسلامة والبيئة'
          }
        ]}
      />

      <div className="bg-slate-950 text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>{isArabic ? 'سياسة الجودة والسلامة والبيئة' : 'QHSE Standards & Certified Rig Compliance'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              {isArabic ? 'معايير الجودة والسلامة والبيئة (QHSE)' : 'Measuresoft QHSE Policy & Certifications'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {isArabic
                ? 'تلتزم شركة Measuresoft بأعلى المعايير العالمية في حماية الأرواح والمنشآت البترولية في مصر. نطبق سياسة صارمة لضمان موثوقية كل حساس وكاشف غاز يتم تركيبه في منصات الحفر أو وحدات المعالجة.'
                : 'Measuresoft operates under a rigorous Zero-Incident QHSE framework. Every piece of equipment, gas sensor, and mud logging instrument is tested, calibrated, and certified before mobilization to the rig site.'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-amber-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {cert.badge}
                  </span>
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
                {cert.issuer}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-black text-slate-950">
            {isArabic ? 'ركائز الجودة والسلامة في حقول البترول المصرية' : 'Core QHSE Operational Pillars'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {isArabic ? 'سلامة الكوادر ومهندسي الحفر' : 'Rig Crew Safety & Protection'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isArabic
                  ? 'تدريب مستمر للمهندسين على أحدث بروتوكولات التعامل مع تسربات غاز كبريتيد الهيدروجين H2S وكيفية إجراء الفحص الدوري (Bump Testing).'
                  : 'Continuous training on ATEX Zone 0 safety regulations, explosive atmosphere monitoring, and emergency H2S response procedures.'}
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {isArabic ? 'الحماية البيئية والتحكم بالانبعاثات' : 'Environmental Stewardship'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isArabic
                  ? 'رصد مستمر لانبعاثات المركبات الهيدروكربونية المتطايرة (VOC) ومنع أي تسربات تضر بالبيئة البحرية في خليج السويس أو البرية.'
                  : 'Detection of fugitive hydrocarbon leaks to mitigate offshore marine pollution and align with Egypt Vision 2030 sustainability goals.'}
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                {isArabic ? 'دقة المعايرة والتوافق مع NIST' : 'Calibration Precision & Traceability'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isArabic
                  ? 'تتبع كامل لأسطوانات الغاز القياسية وخضوع أجهزة المعمل للفحص السنوي وفق أعلى معايير القياس الدولية.'
                  : 'All calibration span gases and digital metrology reference sensors are certified traceable to NIST international standards.'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-500 rounded-3xl p-8 sm:p-10 text-slate-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-black">
              {isArabic ? 'هل تحتاج لنسخة رسمية من شهادات الاعتماد لمناقصة؟' : 'Require Certified Vendor Documentation for Tender?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-900 max-w-xl font-medium">
              {isArabic
                ? 'فريقنا التجاري جاهز لتزويدكم بالملف التعريفي الكامل وشهادات التسجيل الرسمية في الهيئة المصرية للبترول EGPC.'
                : 'Our commercial contracts desk can dispatch our complete pre-qualification folder, ISO audit documents, and vendor certificates.'}
            </p>
          </div>

          <button
            onClick={() => navigateTo('/contact')}
            className="py-3 px-6 bg-slate-950 hover:bg-slate-900 text-white font-bold rounded-xl text-xs transition-colors shrink-0 shadow-md"
          >
            {isArabic ? 'طلب ملف الاعتمادات الرسمي' : 'Request Vendor Pre-Qualification Dossier'}
          </button>
        </div>
      </div>
    </div>
  );
};
