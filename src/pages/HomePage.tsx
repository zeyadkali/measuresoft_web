import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldAlert,
  Activity,
  Flame,
  Gauge,
  ArrowRight,
  CheckCircle2,
  Phone,
  FileText,
  Award,
  Clock,
  Search,
  ExternalLink,
  ChevronRight,
  Wrench,
  Layers,
  Send
} from 'lucide-react';
import { CLIENT_LOGOS } from '../data/initialData';
import { ProductCard } from '../components/ProductCard';

export const HomePage: React.FC = () => {
  const {
    language,
    navigateTo,
    categories,
    products,
    blogPosts,
    setSelectedCategory,
    submitQuoteRequest
  } = useApp();

  const isArabic = language === 'ar';
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);

  const [heroSearch, setHeroSearch] = useState('');
  const [fastName, setFastName] = useState('');
  const [fastCompany, setFastCompany] = useState('');
  const [fastEmail, setFastEmail] = useState('');
  const [fastPhone, setFastPhone] = useState('');
  const [fastNote, setFastNote] = useState('');
  const [fastSuccess, setFastSuccess] = useState(false);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      navigateTo(`/catalog?q=${encodeURIComponent(heroSearch.trim())}`);
    }
  };

  const handleFastQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fastName || !fastCompany || !fastEmail || !fastPhone) return;

    await submitQuoteRequest({
      clientName: fastName,
      companyName: fastCompany,
      email: fastEmail,
      phone: fastPhone,
      country: 'Egypt',
      rigOrProjectLocation: 'General Egyptian Upstream Campaign',
      urgency: 'immediate',
      additionalNotes: fastNote,
      customItems: [
        {
          product: featuredProducts[0] || products[0],
          quantity: 1,
          projectNote: fastNote
        }
      ]
    });
    setFastSuccess(true);
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-amber-500" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-500" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-amber-500" />;
      default:
        return <ShieldAlert className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <div className="space-y-16">
      <section className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-24 border-b-4 border-amber-500">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
          <img
            src="https://images.unsplash.com/photo-1516197155649-ca2ff10415a6?auto=format&fit=crop&w=1920&q=80"
            alt="Oilfield Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide uppercase">
                <Award className="w-4 h-4" />
                <span>{isArabic ? 'المورد المعتمد لحقول البترول المصرية منذ 2000' : 'Approved Egyptian Oil & Gas Equipment Partner'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {isArabic ? (
                  <>
                    هندسة متقدمة لمعدات <span className="text-amber-400">تسجيل سائل الحفر</span> ورصد الغازات البترولية
                  </>
                ) : (
                  <>
                    Engineered <span className="text-amber-400">Mud Logging</span> Systems & ATEX Gas Detection for Egyptian Oilfields
                  </>
                )}
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
                {isArabic
                  ? 'توفر Measuresoft حلولاً متكاملة لمنصات الحفر وحقول الإنتاج في خليج السويس والصحراء الغربية والبحر المتوسط. أجهزة استخلاص الغاز الهوائية، محللات الهيدروكربونات الكلية FID، كواشف غاز H2S الثابتة والمحمولة، ومعمل معايرة معتمد وفق أعلى معايير NIST.'
                  : 'Measuresoft delivers certified mud logging gas extractors, online FID hydrocarbon analyzers, ATEX Zone 0/1 fixed & portable multi-gas monitors, and NIST-traceable calibration across Egypt’s upstream energy sector.'}
              </p>

              <form onSubmit={handleHeroSearch} className="max-w-xl">
                <div className="relative flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder={isArabic ? 'ابحث بكود الموديل، نوع الغاز (H2S, CH4), أو مجسات البريمة...' : 'Search model (e.g. MS-FID-800), gas target (H2S, LEL)...'}
                      value={heroSearch}
                      onChange={e => setHeroSearch(e.target.value)}
                      className="w-full bg-slate-900/90 text-white border border-slate-700 rounded-lg py-3.5 ps-10 pe-4 text-sm focus:border-amber-500 focus:outline-hidden"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-4" />
                  </div>
                  <button
                    type="submit"
                    className="py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-amber-500/20"
                  >
                    <span>{isArabic ? 'ابحث في الكتالوج' : 'Search Catalog'}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </div>
              </form>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>EGPC Vendor No: 77291</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>ATEX / IECEx Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>ISO 9001:2015 Accredited</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
                <div className="border-b border-slate-800 pb-4 mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {isArabic ? 'طلب تسعير سريع وفوري للمنصات' : 'Direct Upstream Quotation Desk'}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {isArabic ? 'استجابة وعرض سعر رسمي خلال ساعتين' : 'Official B2B quotation dispatched in under 2 hours'}
                    </p>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                </div>

                {fastSuccess ? (
                  <div className="p-6 text-center space-y-3 bg-emerald-950/40 rounded-xl border border-emerald-800">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-base font-bold text-white">
                      {isArabic ? 'تم استلام طلب التسعير بنجاح!' : 'Quotation Dispatched!'}
                    </h4>
                    <p className="text-xs text-slate-300">
                      {isArabic
                        ? 'شكراً لتواصلك مع Measuresoft. تم توجيه طلبكم إلى قسم مبيعات المشروعات البترولية في القاهرة.'
                        : 'Your request has been logged and routed to our Cairo petroleum sales engineering desk.'}
                    </p>
                    <button
                      onClick={() => setFastSuccess(false)}
                      className="mt-2 text-xs font-bold text-amber-400 underline"
                    >
                      {isArabic ? 'إرسال طلب تسعير آخر' : 'Submit another request'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFastQuote} className="space-y-3 text-xs">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">
                        {isArabic ? 'اسم المهندس / المسؤول *' : 'Engineer / Contact Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isArabic ? 'م. كريم محمود' : 'Eng. M. Hesham'}
                        value={fastName}
                        onChange={e => setFastName(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-amber-500 focus:outline-hidden"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">
                          {isArabic ? 'الشركة البترولية *' : 'Company Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={isArabic ? 'بتروبل / إنبي / جابكو...' : 'Petrobel / ENI / SLB...'}
                          value={fastCompany}
                          onChange={e => setFastCompany(e.target.value)}
                          className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-amber-500 focus:outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">
                          {isArabic ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+20 100 000 0000"
                          value={fastPhone}
                          onChange={e => setFastPhone(e.target.value)}
                          className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-amber-500 focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">
                        {isArabic ? 'البريد الإلكتروني للعمل *' : 'Work Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="engineer@petroleum-eg.com"
                        value={fastEmail}
                        onChange={e => setFastEmail(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-amber-500 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">
                        {isArabic ? 'المعدة المطلوبة أو تفاصيل المشروع' : 'Equipment Required / Project Notes'}
                      </label>
                      <textarea
                        rows={2}
                        placeholder={isArabic ? 'اكتب كود المعدة أو الغاز المستهدف (H2S, FID Analyzer, Degasser...)' : 'Specify model or requirements (H2S monitor, Mud Degasser, Calibration gas)...'}
                        value={fastNote}
                        onChange={e => setFastNote(e.target.value)}
                        className="w-full p-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-amber-500 focus:outline-hidden"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isArabic ? 'إرسال طلب التسعير الرسمي فوراً' : 'Send Commercial Quotation Request'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 font-bold font-mono text-xl">
              25+
            </div>
            <div>
              <div className="text-lg font-black text-slate-950">
                {isArabic ? 'سنة خبرة' : 'Years Experience'}
              </div>
              <div className="text-xs text-slate-500">
                {isArabic ? 'في قطاع البترول المصري' : 'In Egyptian Oil & Gas'}
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 font-bold font-mono text-xl">
              450+
            </div>
            <div>
              <div className="text-lg font-black text-slate-950">
                {isArabic ? 'بريمة وموقع' : 'Rigs Equipped'}
              </div>
              <div className="text-xs text-slate-500">
                {isArabic ? 'بأجهزة Measuresoft' : 'Across Red Sea & Deserts'}
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 font-bold font-mono text-xl">
              100%
            </div>
            <div>
              <div className="text-lg font-black text-slate-950">
                {isArabic ? 'مطابقة للمواصفات' : 'EGPC Compliance'}
              </div>
              <div className="text-xs text-slate-500">
                {isArabic ? 'معتمدة دولياً ومحلياً' : 'Approved Upstream Standard'}
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 font-bold font-mono text-xl">
              24/7
            </div>
            <div>
              <div className="text-lg font-black text-slate-950">
                {isArabic ? 'دعم طوارئ' : 'Emergency Mobilization'}
              </div>
              <div className="text-xs text-slate-500">
                {isArabic ? 'قاعدة السويس الميدانية' : 'Direct to Field & Rigs'}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              {isArabic ? 'تصنيف المنتجات والمعدات' : 'Equipment Portfolio'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">
              {isArabic ? 'أقسام المعدات الرئيسية' : 'Primary Petroleum Equipment Categories'}
            </h2>
          </div>
          <button
            onClick={() => {
              setSelectedCategory(null);
              navigateTo('/catalog');
            }}
            className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5"
          >
            <span>{isArabic ? 'عرض كتالوج المنتجات كاملاً' : 'Browse Complete Equipment Catalog'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(cat => (
            <div
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                navigateTo('/catalog');
              }}
              className="bg-white rounded-2xl border border-slate-200 hover:border-amber-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 start-3 p-2 bg-slate-950/80 rounded-lg text-amber-400 border border-slate-800">
                  {getCategoryIcon(cat.iconName)}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-950 group-hover:text-amber-600 transition-colors mb-2">
                    {isArabic ? cat.nameAr : cat.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {isArabic ? cat.descriptionAr : cat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
                  <span>{isArabic ? 'استعراض الموديلات' : 'Explore Instruments'}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                {isArabic ? 'معدات عالية الأداء' : 'Mission-Critical Instruments'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">
                {isArabic ? 'المنتجات البترولية المميزة' : 'Featured Drilling & Safety Systems'}
              </h2>
            </div>
            <button
              onClick={() => navigateTo('/catalog')}
              className="px-4 py-2 bg-slate-950 text-white hover:bg-slate-800 rounded-lg text-xs font-bold transition-colors"
            >
              {isArabic ? 'كافة منتجات الكتالوج' : 'View All Instruments'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            {isArabic ? 'شركاء النجاح والاعتمادات' : 'Trusted by Energy Leaders'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">
            {isArabic ? 'كبرى شركات البترول والحفر العاملة في مصر' : 'Active Upstream Operators & Rig Contractors'}
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            {isArabic
              ? 'معداتنا تعمل بنجاح في حقول خليج السويس، الصحراء الغربية، ومياه البحر المتوسط العميقة.'
              : 'Our mud logging and toxic gas monitors operate across onshore and offshore drilling concessions.'}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CLIENT_LOGOS.slice(0, 5).map((client, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center hover:border-amber-400 transition-colors shadow-2xs"
            >
              <div className="w-12 h-12 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center font-bold text-sm mb-2">
                {client.logo.slice(0, 3)}
              </div>
              <div className="text-xs font-bold text-slate-900">{client.name}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{client.origin}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-950 rounded-3xl p-8 sm:p-12 text-white border-2 border-slate-800 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 px-3 py-1 rounded">
                CAIRO NIST-TRACEABLE METROLOGY FACILITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black leading-tight">
                {isArabic
                  ? 'معمل المعايرة القياسية والصيانة الميدانية المتخصص'
                  : 'NIST-Traceable Calibration Laboratory & Offshore Service Base'}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isArabic
                  ? 'توفر Measuresoft في القاهرة الجديدة والسويس معملاً معتمداً لمعايرة حساسات الغازات السامة والقابلة للاشتعال، مع إصدار شهادات معايرة رسمية مطابقة لمواصفات NIST و ISO 9001، وإمكانية إيفاد فرق طوارئ متخصصة لمنصات الحفر خلال ساعات.'
                  : 'Measuresoft operates certified metrology laboratories in Cairo and Suez for precision span calibration, bump testing, sensor recalibration, and issuing NIST-traceable certificates for petroleum drilling rigs.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => navigateTo('/contact')}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors"
                >
                  {isArabic ? 'زيارة الفروع والمعامل' : 'View Laboratory Details'}
                </button>
                <button
                  onClick={() => navigateTo('/qhse')}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold rounded-lg text-xs transition-colors"
                >
                  {isArabic ? 'شهادات الجودة والسلامة ISO' : 'Quality & ISO Standards'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
                <Gauge className="w-8 h-8 text-amber-400" />
                <h4 className="font-bold text-white text-sm">
                  {isArabic ? 'معايرة الغازات السامة' : 'Span Calibration'}
                </h4>
                <p className="text-xs text-slate-400">
                  {isArabic ? 'معايرة حساسات H2S, LEL, CO بدقة NIST' : 'Precise H2S, LEL, CO, and VOC calibration.'}
                </p>
              </div>

              <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
                <Wrench className="w-8 h-8 text-amber-400" />
                <h4 className="font-bold text-white text-sm">
                  {isArabic ? 'صيانة أجهزة البريمة' : 'Rig Sensor Overhauls'}
                </h4>
                <p className="text-xs text-slate-400">
                  {isArabic ? 'عمرة مستخلصات الغاز ومجسات الضغط' : 'Degasser & standpipe pressure sensor service.'}
                </p>
              </div>

              <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
                <Award className="w-8 h-8 text-amber-400" />
                <h4 className="font-bold text-white text-sm">
                  {isArabic ? 'شهادات معتمدة' : 'Official Certificates'}
                </h4>
                <p className="text-xs text-slate-400">
                  {isArabic ? 'إصدار شهادات فحص وتوثيق للمنصات' : 'Certified compliance documentation for audits.'}
                </p>
              </div>

              <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2">
                <Clock className="w-8 h-8 text-amber-400" />
                <h4 className="font-bold text-white text-sm">
                  {isArabic ? 'استجابة سريعة بالسويس' : 'Suez Rapid Dispatch'}
                </h4>
                <p className="text-xs text-slate-400">
                  {isArabic ? 'إمداد فوري بأسطوانات غازات المعايرة' : 'Immediate cylinder refilling and offshore boat runs.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              {isArabic ? 'المعرفة البترولية والتقنية' : 'Knowledge Base'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">
              {isArabic ? 'أحدث المقالات التقنية وأخبار الحفر' : 'Petroleum Engineering Insights'}
            </h2>
          </div>
          <button
            onClick={() => navigateTo('/blog')}
            className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5"
          >
            <span>{isArabic ? 'تصفح كافة المقالات' : 'Read All Technical Articles'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <div
              key={post.id}
              onClick={() => navigateTo(`/blog/${post.slug}`)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="h-44 bg-slate-100 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 start-3">
                  <span className="text-[10px] font-bold bg-slate-950/90 text-amber-400 px-2 py-0.5 rounded">
                    {isArabic ? post.categoryAr : post.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 font-mono mb-2">
                    {post.date} • {post.readTime}
                  </div>
                  <h3 className="font-bold text-slate-950 text-base group-hover:text-amber-600 transition-colors line-clamp-2 mb-2 leading-snug">
                    {isArabic ? post.titleAr : post.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {isArabic ? post.excerptAr : post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
                  <span>{isArabic ? 'قراءة المقال بالكامل' : 'Read Full Analysis'}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
