import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Award
} from 'lucide-react';
import { BRANCHES } from '../data/initialData';

export const ContactPage: React.FC = () => {
  const { language, navigateTo } = useApp();
  const isArabic = language === 'ar';

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('sales');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumbs
        items={[
          {
            label: isArabic ? 'تواصل معنا والفروع' : 'Contact & Branches',
            labelAr: 'تواصل معنا وفروعنا'
          }
        ]}
      />

      <div className="bg-slate-950 text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              <Phone className="w-4 h-4" />
              <span>{isArabic ? 'خدمة قطاع البترول 24/7' : '24/7 Upstream Petroleum Service Desk'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              {isArabic ? 'تواصل مع Measuresoft وفروع المعايرة' : 'Contact Measuresoft Egypt & Service Centers'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {isArabic
                ? 'فريق المهندسين الفنيين والمبيعات متواجدون لخدمتكم من المقر الرئيسي ومعمل المعايرة في القاهرة الجديدة، وقاعدة العمليات البحرية في السويس.'
                : 'Our field engineers, metrology specialists, and commercial quotation desks are available around the clock to support drilling operations.'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
            <h2 className="text-xl font-black text-slate-950 mb-2">
              {isArabic ? 'إرسال استفسار أو طلب دعم فني مباشر' : 'Submit Engineering Inquiry or Field Dispatch Request'}
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              {isArabic
                ? 'يتم تحويل الطلبات الفنية الطارئة لمنصات الحفر مباشرة لمهندس العمليات المناوب.'
                : 'Emergency rig mobilization requests are routed immediately to our on-duty offshore field team.'}
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-slate-950">
                  {isArabic ? 'تم إرسال رسالتك بنجاح' : 'Message Transmitted Successfully!'}
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  {isArabic
                    ? 'شكراً لتواصلك مع Measuresoft. سيقوم مهندس المبيعات بالتواصل معك خلال ساعتي عمل.'
                    : 'Thank you for contacting Measuresoft. A representative will contact you shortly.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-bold text-amber-600 underline"
                >
                  {isArabic ? 'إرسال رسالة أخرى' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      {isArabic ? 'الاسم بالكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isArabic ? 'م. أحمد كمال' : 'Eng. Ahmed Kamal'}
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      {isArabic ? 'الشركة البترولية / الجهة *' : 'Petroleum Company *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isArabic ? 'بتروبل / إنبي / جابكو...' : 'Petrobel / ENI / SLB...'}
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      {isArabic ? 'البريد الإلكتروني للعمل *' : 'Work Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="engineer@company.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      {isArabic ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+20 100 000 0000"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    {isArabic ? 'نوع الاستفسار *' : 'Inquiry Category *'}
                  </label>
                  <select
                    value={inquiryType}
                    onChange={e => setInquiryType(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 bg-white focus:border-amber-500 focus:outline-hidden"
                  >
                    <option value="sales">{isArabic ? 'طلب عرض سعر تجاري لمعدات (Commercial RFQ)' : 'Equipment Sales & Commercial RFQ'}</option>
                    <option value="urgent">{isArabic ? 'طوارئ بريمة - إيفاد فوري أو قطع غيار (Urgent Rig Support)' : 'Emergency Rig Support & Urgent Dispatch'}</option>
                    <option value="lab">{isArabic ? 'معايرة في المعمل وشهادات NIST (Laboratory Calibration)' : 'Laboratory Metrology & NIST Calibration'}</option>
                    <option value="tender">{isArabic ? 'مناقصات وممارسات بترولية (Tenders & Pre-qualification)' : 'Tenders & Prequalification Docs'}</option>
                    <option value="other">{isArabic ? 'استفسارات أخرى (General)' : 'Other Inquiries'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    {isArabic ? 'تفاصيل الرسالة أو متطلبات المعدات *' : 'Message / Technical Requirements *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={isArabic ? 'اكتب تفاصيل المعدات المطلوبة، كود الموديل، موقع الحفر، أو أي متطلبات خاصة...' : 'Please specify equipment models, target gas types, delivery location, or service requirements...'}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="py-3 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'إرسال الرسالة إلى Measuresoft' : 'Transmit Message'}</span>
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950 text-white rounded-2xl p-6 border-2 border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold">
                <AlertTriangle className="w-4 h-4" />
                <span>{isArabic ? 'خط الاستجابة الطارئ للمنصات 24/7' : '24/7 EMERGENCY RIG HOTLINE'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isArabic
                  ? 'متاح على مدار الساعة لمديري أجهزة الحفر ومهندسي السلامة لاستدعاء فنيين أو طلب أسطوانات معايرة سريعة.'
                  : 'Direct line for drilling superintendents and HSE managers requiring immediate technical mobilization.'}
              </p>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">{isArabic ? 'الهاتف المباشر:' : 'Direct Phone:'}</span>
                <a href="tel:+201005549821" className="font-mono text-base font-bold text-amber-400 hover:underline">
                  +20 100 554 9821
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-950 text-sm uppercase tracking-wider border-b border-slate-100 pb-2">
                {isArabic ? 'بيانات التواصل الرسمية' : 'Headquarters Contact'}
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">{isArabic ? 'المقر الإداري ومعمل المعايرة:' : 'Cairo Metrology Lab & HQ:'}</strong>
                    <span>{isArabic ? 'قطعة 18، المنطقة الصناعية الأولى، التجمع الخامس، القاهرة، مصر' : 'Plot 18, Industrial Area, New Cairo, Egypt'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">{isArabic ? 'هاتف المكتب:' : 'Cairo Switchboard:'}</strong>
                    <span className="font-mono text-slate-900">+20 2 2813 4900</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">{isArabic ? 'البريد الرسمي:' : 'Official Inquiries:'}</strong>
                    <a href="mailto:info@measuresofteg.com" className="text-amber-600 hover:underline">
                      info@measuresofteg.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">{isArabic ? 'ساعات العمل الرسمية:' : 'Working Hours:'}</strong>
                    <span>{isArabic ? 'الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً (قسم الطوارئ 24 ساعة)' : 'Sunday - Thursday: 8:00 AM - 5:00 PM (Emergency 24/7)'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-slate-950 mb-6">
            {isArabic ? 'فروع وقواعد Measuresoft الميدانية' : 'Measuresoft Operating Centers'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRANCHES.map(branch => (
              <div
                key={branch.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {isArabic ? branch.cityAr : branch.city}
                    </span>
                    <Globe className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="font-bold text-slate-950 text-base">
                    {isArabic ? branch.titleAr : branch.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    {isArabic ? `${branch.cityAr}، ${branch.countryAr}` : `${branch.city}, ${branch.country}`}
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {isArabic ? branch.addressAr : branch.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1 text-xs font-mono text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 font-sans truncate">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[11px] truncate">{branch.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
