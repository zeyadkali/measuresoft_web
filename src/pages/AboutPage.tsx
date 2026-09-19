import React from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Award,
  ShieldCheck,
  MapPin,
  Clock,
  Target,
  Eye,
  CheckCircle2,
  Users,
  Building2,
  ArrowRight
} from 'lucide-react';
import { CLIENT_LOGOS } from '../data/initialData';

export const AboutPage: React.FC = () => {
  const { language, navigateTo } = useApp();
  const isArabic = language === 'ar';

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumbs
        items={[
          {
            label: isArabic ? 'عن Measuresoft' : 'About Measuresoft',
            labelAr: 'عن شركة Measuresoft'
          }
        ]}
      />

      <div className="bg-slate-950 text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              <Award className="w-4 h-4" />
              <span>{isArabic ? 'شريك حقول البترول المصرية المعتمد' : 'EGPC Registered Petroleum Instrumentation Provider'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              {isArabic ? 'عن Measuresoft لأنظمة البترول والغاز' : 'About Measuresoft Petroleum Systems Egypt'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {isArabic
                ? 'تأسست شركة Measuresoft في مصر لتكون المرجع الهندسي المتخصص في تزويد منصات الحفر البحرية والبرية بأحدث أجهزة قياس سائل الحفر، وكواشف الغازات المقاومة للانفجار، مع معمل معايرة قياسي معتمد في القاهرة الجديدة.'
                : 'Founded in Egypt, Measuresoft specializes in upstream drilling instrumentation, mud logging gas analysis, and hazardous-area gas monitoring systems for operating energy concessions across Egypt.'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              {isArabic ? 'هويتنا ورسالتنا' : 'Who We Are'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              {isArabic
                ? 'تاريخ حافل بالثقة في دعم قطاع الطاقة المصري'
                : 'A Legacy of Precision & Rig Safety Across Egyptian Oilfields'}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isArabic
                ? 'منذ انطلاق الشركة في مصر، وضعت Measuresoft نصب أعينها تلبية متطلبات شركات الاستكشاف والإنتاج الكبرى مثل بتروبل، بدر الدين للبترول، جابكو، وخالدة، من خلال توفير معدات معتمدة دولياً بمعايير ATEX و IECEx.'
                : 'Since inception, Measuresoft has partnered with leading joint ventures including Petrobel, BAPETCO, GUPCO, and Khalda. We bridge the critical gap between international metrology manufacturers and frontline rig operations.'}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isArabic
                ? 'نحن لا نكتفي بتوريد الأجهزة، بل نمتلك ورش عمل ومعامل معايرة معتمدة وفق ISO 9001، وندير فرق إسناد فني جاهزة للتحرك الفوري إلى مواقع الحفر في السويس والساحل الشمالي وصحراء مصر الغربية.'
                : 'Beyond equipment sales, we operate an ISO-certified calibration facility in New Cairo, manage a marine logistics center in Suez, and maintain rapid-dispatch service engineers available 24/7.'}
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-80 sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80"
              alt="Measuresoft Laboratory"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="font-bold text-sm">{isArabic ? 'معمل المعايرة القياسية - القاهرة الجديدة' : 'Cairo Precision Calibration Center'}</div>
                <div className="text-xs text-slate-300 font-mono">Traceable to NIST & ISO/IEC 17025 Metrology Protocols</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-950">
              {isArabic ? 'رسالتنا الهندسية' : 'Our Mission'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isArabic
                ? 'تمكين منصات الحفر البترولية في مصر والشرق الأوسط من العمل بأقصى درجات الأمان من خلال توفير حلول كشف الغازات الدقيقة ومعدات تسجيل سائل الحفر المتطورة بأسعار منافسة واعتماد رسمي.'
                : 'To safeguard lives and high-value drilling assets by supplying resilient, certified gas detection and mud logging systems backed by instantaneous technical support.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-950">
              {isArabic ? 'رؤيتنا المستقبلية' : 'Our Vision'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isArabic
                ? 'أن نكون المركز الإقليمي الأول والرائد في المعايرة والتوريد المتخصص لأجهزة استشعار البترول وأنظمة المراقبة في أفريقيا والشرق الأوسط.'
                : 'To remain Egypt’s foremost engineering authority for upstream metrology, gas integrity solutions, and specialized drilling rig instrumentation.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-950">
              {isArabic ? 'قيم السلامة (QHSE)' : 'Safety & Integrity'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isArabic
                ? 'التزام مطلق بسياسة "صفر حوادث" في حقول البترول، وعدم المساومة على جودة أي جهاز أو حساس يتم توريده أو معايرته.'
                : 'Zero tolerance for equipment failure. Every sensor leaving our calibration bench carries full certification and rigorous trace verification.'}
            </p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800">
          <div className="max-w-3xl space-y-4">
            <h3 className="text-2xl font-black text-white">
              {isArabic ? 'فروعنا وشبكتنا الميدانية' : 'Strategic Operating Locations'}
            </h3>
            <p className="text-sm text-slate-300">
              {isArabic
                ? 'تدير Measuresoft مكاتبها ومعاملها المعتمدة في القاهرة والسويس، وترتبط باتفاقيات تعاون وتوريد مع شركاء دوليين في هيوستن وأبردين.'
                : 'Measuresoft operates active engineering bases in Cairo and Suez, complemented by procurement desks in Houston and Aberdeen.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 font-bold text-amber-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{isArabic ? 'المقر الإداري ومعمل المعايرة (القاهرة)' : 'Cairo Metrology Lab & HQ'}</span>
                </div>
                <p className="text-xs text-slate-400">
                  {isArabic ? 'المنطقة الصناعية، التجمع الخامس، القاهرة، مصر' : 'Plot 18, Industrial Area, New Cairo, Egypt'}
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 font-bold text-amber-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{isArabic ? 'قاعدة العمليات البحرية (السويس)' : 'Suez Offshore Marine Hub'}</span>
                </div>
                <p className="text-xs text-slate-400">
                  {isArabic ? 'المنطقة الحرة اللوجستية، ميناء بور توفيق، السويس' : 'Port Tawfik Marine Logistics Base, Suez'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 pt-4">
          <h3 className="text-xl font-bold text-slate-950">
            {isArabic ? 'هل ترغب بالتعاون الهندسي أو طلب عرض سعر رسمي؟' : 'Ready to Partner With Measuresoft?'}
          </h3>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigateTo('/quote')}
              className="py-3 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors"
            >
              {isArabic ? 'طلب عرض سعر للمشروعات' : 'Submit Project RFQ'}
            </button>
            <button
              onClick={() => navigateTo('/contact')}
              className="py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition-colors"
            >
              {isArabic ? 'تواصل مع مهندس المبيعات' : 'Contact Engineering Desk'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
