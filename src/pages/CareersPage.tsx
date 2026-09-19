import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Briefcase,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Award,
  ChevronRight
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const { language } = useApp();
  const isArabic = language === 'ar';

  const [appliedJob, setAppliedJob] = useState<string | null>(null);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const jobs = [
    {
      id: 'job-1',
      title: 'Senior Upstream Mud Logging Engineer',
      titleAr: 'مهندس أول تسجيل سائل حفر ومعدات غاز (Mud Logging)',
      location: 'Cairo & Offshore Suez',
      locationAr: 'القاهرة ومنصات السويس البحرية',
      type: 'Full-time / Rotational',
      experience: '5+ Years Petroleum Field Experience',
      desc: isArabic
        ? 'تشغيل وصيانة محللات FID ومستخلصات الغاز على منصات الحفر البحرية في خليج السويس ومتابعة تسجيل قراءات الغازات.'
        : 'Operation, commissioning, and preventive maintenance of online FID hydrocarbon analyzers and mud degassers on offshore rigs.'
    },
    {
      id: 'job-2',
      title: 'Calibration & Metrology Laboratory Specialist',
      titleAr: 'أخصائي معمل معايرة وحساسات غازات بترولية',
      location: 'New Cairo Technology Center',
      locationAr: 'معمل المعايرة - التجمع الخامس، القاهرة',
      type: 'Full-time',
      experience: '3+ Years ISO/IEC 17025 Metrology',
      desc: isArabic
        ? 'إجراء اختبارات المعايرة الحساسة لحساسات كبريتيد الهيدروجين H2S وكواشف الغازات القابلة للاشتعال وإصدار شهادات NIST.'
        : 'Execution of span calibrations, sensor replacements, bump testing, and certificate generation for ATEX gas detection systems.'
    },
    {
      id: 'job-3',
      title: 'Petroleum Technical Sales & B2B Tendering Engineer',
      titleAr: 'مهندس مبيعات فنية ومناقصات بترولية',
      location: 'New Cairo HQ',
      locationAr: 'المقر الإداري - القاهرة الجديدة',
      type: 'Full-time',
      experience: '4+ Years Upstream Sales / EGPC Tenders',
      desc: isArabic
        ? 'إعداد العروض الفنية والمالية لمناقصات وممارسات شركات البترول المشتركة ومتابعة طلبات تسعير عروض الأسعار (RFQ).'
        : 'Preparation of techno-commercial proposals for joint venture tenders and managing client RFQ requests.'
    }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !candidateEmail || !candidatePhone) return;
    setIsSuccess(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumbs
        items={[
          {
            label: isArabic ? 'الوظائف والفرص' : 'Careers at Measuresoft',
            labelAr: 'الوظائف والفرص المتاحة'
          }
        ]}
      />

      <div className="bg-slate-950 text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              <Briefcase className="w-4 h-4" />
              <span>{isArabic ? 'انضم لفريق خبراء القياس البترولي' : 'Join Egypt’s Upstream Metrology Specialists'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              {isArabic ? 'الوظائف الشاغرة في Measuresoft مصر' : 'Careers at Measuresoft Petroleum Systems'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {isArabic
                ? 'نبحث دائماً عن الكفاءات الهندسية المتميزة في مجالات هندسة البترول، القياسات الدقيقة، وكشف الغازات للانضمام لفرق عملنا في القاهرة والسويس.'
                : 'Build your career alongside Egypt’s leading drilling instrumentation engineers. We offer competitive remuneration, offshore hazard compensation, and world-class metrology training.'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        {isSuccess ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              {isArabic ? 'تم استلام طلب التقديم بنجاح' : 'Application Received!'}
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              {isArabic
                ? 'شكراً لاهتمامك بالانضمام لـ Measuresoft. سيقوم قسم الموارد البشرية والشؤون الهندسية بمراجعة سيرتكم والتواصل معكم.'
                : 'Thank you for your interest. Our technical recruitment desk will review your credentials and contact you.'}
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                setAppliedJob(null);
              }}
              className="py-2.5 px-5 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs"
            >
              {isArabic ? 'الرجوع لقائمة الوظائف' : 'Back to Vacancies'}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-xl font-black text-slate-950">
              {isArabic ? 'الوظائف المتاحة حالياً' : 'Open Upstream Engineering Positions'}
            </h2>

            <div className="space-y-4">
              {jobs.map(job => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-amber-400 transition-colors"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded">
                        {job.type}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        {job.experience}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950">
                      {isArabic ? job.titleAr : job.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>{isArabic ? job.locationAr : job.location}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {job.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setAppliedJob(job.id)}
                    className="py-2.5 px-5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors shrink-0"
                  >
                    {isArabic ? 'التقديم على الوظيفة' : 'Apply for Role'}
                  </button>
                </div>
              ))}
            </div>

            {appliedJob && (
              <div className="bg-white rounded-2xl border-2 border-amber-500 p-6 md:p-8 shadow-md space-y-4 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold text-amber-600 uppercase">
                    {isArabic ? 'استمارة التقديم السريع' : 'Quick Application Form'}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 mt-1">
                    {jobs.find(j => j.id === appliedJob)?.title}
                  </h3>
                </div>

                <form onSubmit={handleApply} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        {isArabic ? 'الاسم بالكامل *' : 'Candidate Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isArabic ? 'م. مصطفى خالد' : 'Eng. Mostafa Khaled'}
                        value={candidateName}
                        onChange={e => setCandidateName(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        {isArabic ? 'البريد الإلكتروني *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="engineer@email.com"
                        value={candidateEmail}
                        onChange={e => setCandidateEmail(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">
                        {isArabic ? 'رقم الهاتف / واتساب *' : 'Phone / Mobile *'}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+20 100 000 0000"
                        value={candidatePhone}
                        onChange={e => setCandidatePhone(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="py-3 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isArabic ? 'إرسال طلب التقديم' : 'Submit Application'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setAppliedJob(null)}
                      className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors"
                    >
                      {isArabic ? 'إلغاء' : 'Cancel'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
