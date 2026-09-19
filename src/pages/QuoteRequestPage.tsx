import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Send,
  Building,
  Mail,
  Phone,
  User,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Printer,
  Plus,
  Trash2,
  ShieldCheck
} from 'lucide-react';
import { QuoteRequest } from '../types';
import { sanitizeText, isValidEmail } from '../lib/sanitize';

export const QuoteRequestPage: React.FC = () => {
  const {
    products,
    quoteCart,
    addToQuoteCart,
    removeFromQuoteCart,
    updateQuoteCartQuantity,
    submitQuoteRequest,
    language,
    navigateTo
  } = useApp();

  const isArabic = language === 'ar';

  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Egypt');
  const [rigLocation, setRigLocation] = useState('');
  const [urgency, setUrgency] = useState<'immediate' | '1-2_weeks' | '1_month' | 'planning_budget'>('immediate');
  const [notes, setNotes] = useState('');
  const [selectedProductId, setSelectedProductId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);
  const [formError, setFormError] = useState('');

  const handleAddEquipment = () => {
    if (!selectedProductId) return;
    const prod = products.find(p => p.id === selectedProductId);
    if (prod) {
      addToQuoteCart(prod);
      setSelectedProductId('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = sanitizeText(clientName, 100);
    const cleanCompany = sanitizeText(companyName, 120);
    const cleanEmail = sanitizeText(email, 120);
    const cleanPhone = sanitizeText(phone, 30);

    if (!cleanName || !cleanCompany || !cleanEmail || !cleanPhone) {
      setFormError(isArabic ? 'يرجى استكمال جميع بيانات الاتصال المطلوبة' : 'Please complete all required contact fields');
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      setFormError(isArabic ? 'يرجى إدخال بريد إلكتروني صالح' : 'Please provide a valid business email');
      return;
    }

    if (quoteCart.length === 0) {
      setFormError(isArabic ? 'يرجى اختيار معدة واحدة على الأقل لطلب تسعيرها' : 'Please select at least one equipment item to quote.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);
    try {
      const quote = await submitQuoteRequest({
        clientName: cleanName,
        companyName: cleanCompany,
        email: cleanEmail,
        phone: cleanPhone,
        country: sanitizeText(country, 60),
        rigOrProjectLocation: sanitizeText(rigLocation, 150),
        urgency,
        additionalNotes: sanitizeText(notes, 1500)
      });
      setSubmittedQuote(quote);
    } catch {
      setFormError(isArabic ? 'حدث خطأ أثناء معالجة الطلب' : 'Error processing quote request');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumbs
        items={[
          {
            label: isArabic ? 'طلب تسعير رسمي (RFQ)' : 'Request for Quotation (RFQ)',
            labelAr: 'طلب عرض سعر رسمي'
          }
        ]}
      />

      <div className="bg-slate-950 text-white py-12 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              <FileText className="w-4 h-4" />
              <span>{isArabic ? 'منظومة التسعير التجاري B2B' : 'Official Upstream Equipment Tender & RFQ Desk'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              {isArabic ? 'طلب عرض سعر رسمي لشركات البترول والغاز' : 'Submit Commercial RFQ for Petroleum Instrumentation'}
            </h1>
            <p className="text-sm text-slate-300">
              {isArabic
                ? 'استجابة سريعة لطلبات التوريد وعروض الأسعار الفنية والمالية لشركات الإنتاج والحفر خلال ساعتين عمل.'
                : 'Direct engineering pricing for joint ventures, rig operators, and procurement desks across Egypt.'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {submittedQuote ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="font-mono text-sm font-bold bg-emerald-50 text-emerald-800 px-3 py-1 rounded border border-emerald-200">
                {submittedQuote.quoteNumber}
              </span>
              <h2 className="text-2xl font-black text-slate-950 mt-3">
                {isArabic ? 'تم توثيق وإرسال طلب التسعير بنجاح' : 'Official Quotation Request Transmitted!'}
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto mt-2">
                {isArabic
                  ? `شكراً مهندس ${submittedQuote.clientName}. تم تسجيل طلبكم لصالح شركة ${submittedQuote.companyName}، وسيتم إعداد كراسة العرض المالي والفني والتواصل معكم هاتفياً.`
                  : `Thank you, ${submittedQuote.clientName}. Your quotation for ${submittedQuote.companyName} has been logged and assigned to our Cairo Upstream Commercial Desk.`}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-start text-xs space-y-2 max-w-xl mx-auto font-mono">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-sans font-semibold">{isArabic ? 'رقم طلب التسعير المرجعي:' : 'RFQ Number:'}</span>
                <span className="font-bold text-amber-600">{submittedQuote.quoteNumber}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-sans font-semibold">{isArabic ? 'الجهة الطالبة:' : 'Petroleum Company:'}</span>
                <span className="text-slate-900 font-bold">{submittedQuote.companyName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-sans font-semibold">{isArabic ? 'موقع الحفر أو البريمة:' : 'Target Field / Rig:'}</span>
                <span className="text-slate-700">{submittedQuote.rigOrProjectLocation || 'Egypt'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-sans font-semibold">{isArabic ? 'عدد البنود:' : 'Items Included:'}</span>
                <span className="text-slate-900 font-bold">{submittedQuote.items.length} units</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => window.print()}
                className="py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>{isArabic ? 'طباعة بيان الطلب' : 'Print RFQ Summary'}</span>
              </button>

              <button
                onClick={() => {
                  setSubmittedQuote(null);
                  navigateTo('/catalog');
                }}
                className="py-3 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors"
              >
                {isArabic ? 'تصفح الكتالوج' : 'Return to Catalog'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 md:p-10 space-y-8">
            <div>
              <h2 className="text-xl font-black text-slate-950 mb-1">
                {isArabic ? '1. قائمة المعدات والأجهزة المطلوب تسعيرها' : '1. Selected Instruments for Quotation'}
              </h2>
              <p className="text-xs text-slate-500 mb-4">
                {isArabic ? 'حدد المعدات والكميات المطلوبة للمشروع أو البريمة:' : 'Review your selected products and adjust quantities:'}
              </p>

              {quoteCart.length === 0 ? (
                <div className="p-6 bg-amber-50 border border-dashed border-amber-300 rounded-xl text-center space-y-3">
                  <p className="text-xs font-semibold text-amber-900">
                    {isArabic ? 'لم تقم بإضافة أي معدات بعد. اختر من القائمة أدناه أو تصفح الكتالوج:' : 'No equipment in RFQ basket yet. Select an item below or browse catalog:'}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
                    <select
                      value={selectedProductId}
                      onChange={e => setSelectedProductId(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                    >
                      <option value="">{isArabic ? '-- اختر معدة لإضافتها --' : '-- Choose instrument to add --'}</option>
                      {products.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.code} - {p.name}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={handleAddEquipment}
                      className="py-2.5 px-4 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs shrink-0"
                    >
                      {isArabic ? 'إضافة' : 'Add Item'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    {quoteCart.map(item => (
                      <div key={item.product.id} className="p-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-12 h-12 object-cover rounded-lg border border-slate-200 bg-white shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="font-mono text-xs font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                              {item.product.code}
                            </span>
                            <h4 className="text-xs font-bold text-slate-900 truncate mt-1">
                              {isArabic ? item.product.nameAr : item.product.name}
                            </h4>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 shrink-0">
                          <div className="flex items-center border border-slate-300 rounded bg-white">
                            <button
                              type="button"
                              onClick={() => updateQuoteCartQuantity(item.product.id, item.quantity - 1)}
                              className="px-2 py-1 hover:bg-slate-100 text-xs"
                            >
                              -
                            </button>
                            <span className="px-3 text-xs font-bold font-mono">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuoteCartQuantity(item.product.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-slate-100 text-xs"
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromQuoteCart(item.product.id)}
                            className="text-slate-400 hover:text-red-600 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <select
                      value={selectedProductId}
                      onChange={e => setSelectedProductId(e.target.value)}
                      className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                    >
                      <option value="">{isArabic ? '+ إضافة معدة أخرى للقائمة...' : '+ Add another instrument...'}</option>
                      {products.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.code} - {p.name}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={handleAddEquipment}
                      className="py-2 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs shrink-0"
                    >
                      {isArabic ? 'إضافة' : 'Add to List'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 pt-6 space-y-4">
              <h2 className="text-xl font-black text-slate-950 mb-1">
                {isArabic ? '2. بيانات الشركة والاتصال' : '2. Company & Commercial Contact'}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isArabic ? 'اسم المهندس / ممثل الشركة *' : 'Contact Person *'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder={isArabic ? 'م. محمود طارق' : 'Eng. M. Tarek'}
                      value={clientName}
                      onChange={e => setClientName(e.target.value)}
                      className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                    />
                    <User className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isArabic ? 'الشركة البترولية / جهة التعاقد *' : 'Petroleum Joint Venture / Operating Company *'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder={isArabic ? 'بتروبل / إنبي / بدر الدين / خالدة...' : 'Petrobel / ENI / SLB / BP...'}
                      value={companyName}
                      onChange={e => setCompanyName(e.target.value)}
                      className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                    />
                    <Building className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isArabic ? 'البريد الإلكتروني للعمل *' : 'Official Work Email *'}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="engineer@company-oil.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                    />
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isArabic ? 'رقم الهاتف المباشر / واتساب *' : 'Direct Phone / WhatsApp *'}
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="+20 100 000 0000"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                    />
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isArabic ? 'موقع البريمة أو منطقة الامتياز' : 'Rig Name / Field Concession'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={isArabic ? 'خليج السويس / الصحراء الغربية' : 'Gulf of Suez / Offshore Rig 14'}
                      value={rigLocation}
                      onChange={e => setRigLocation(e.target.value)}
                      className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                    />
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isArabic ? 'الإطار الزمني للتوريد المطلوب' : 'Required Delivery Timeframe'}
                  </label>
                  <div className="relative">
                    <select
                      value={urgency}
                      onChange={e => setUrgency(e.target.value as any)}
                      className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 bg-white focus:border-amber-500 focus:outline-hidden"
                    >
                      <option value="immediate">{isArabic ? 'طوارئ فورية خلال 24-48 ساعة' : 'Emergency Rig Spud (24-48h)'}</option>
                      <option value="1-2_weeks">{isArabic ? 'خلال أسبوع إلى أسبوعين' : '1 to 2 Weeks'}</option>
                      <option value="1_month">{isArabic ? 'خلال شهر' : 'Within 1 Month'}</option>
                      <option value="planning_budget">{isArabic ? 'دراسة ميزانية ومناقصات' : 'Budgetary / Tender Review'}</option>
                    </select>
                    <Clock className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isArabic ? 'المواصفات الفنية الملحقة والملاحظات' : 'Technical Specifications & Rig Requirements'}
                </label>
                <textarea
                  rows={3}
                  placeholder={isArabic ? 'أدخل أي متطلبات خاصة: نوع الغاز المستهدف، طول الكابل، شهادة المعايرة، شهادات SIL...' : 'Enter target gas thresholds, ATEX zone requirements, sensor cable lengths, calibration certificate requests...'}
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="p-4 bg-slate-900 text-slate-200 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>
                  {isArabic
                    ? 'عروض الأسعار الصادرة معتمدة رسمياً ومطابقة لمعايير الهيئة المصرية للبترول EGPC.'
                    : 'All commercial proposals are issued under Measuresoft Egypt EGPC Vendor Code 77291.'}
                </span>
              </div>
            </div>

            {formError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-medium rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>
                {isSubmitting
                  ? (isArabic ? 'جاري تجهيز وإرسال الطلب...' : 'Transmitting Official RFQ...')
                  : (isArabic ? 'إرسال طلب عرض السعر الرسمي (RFQ)' : 'Transmit Official RFQ Request')}
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
