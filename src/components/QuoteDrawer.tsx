import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Trash2,
  Send,
  Building,
  Mail,
  Phone,
  User,
  MapPin,
  Clock,
  CheckCircle,
  FileCheck,
  Plus,
  Minus,
  AlertCircle
} from 'lucide-react';
import { QuoteRequest } from '../types';

export const QuoteDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    quoteCart,
    removeFromQuoteCart,
    updateQuoteCartQuantity,
    clearQuoteCart,
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
  const [rigOrProjectLocation, setRigOrProjectLocation] = useState('');
  const [urgency, setUrgency] = useState<'immediate' | '1-2_weeks' | '1_month' | 'planning_budget'>('immediate');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);

  if (!isCartOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !companyName || !email || !phone) return;

    setIsSubmitting(true);
    try {
      const result = await submitQuoteRequest({
        clientName,
        companyName,
        email,
        phone,
        country,
        rigOrProjectLocation,
        urgency,
        additionalNotes
      });
      setSubmittedQuote(result);
    } catch {
      alert('Error submitting quote. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsCartOpen(false);
    if (submittedQuote) {
      setSubmittedQuote(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-end duration-300">
        <div className="bg-slate-950 text-white p-5 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <h2 className="text-lg font-black tracking-tight">
                {isArabic ? 'سلة طلب عروض الأسعار (B2B RFQ)' : 'Commercial RFQ Basket'}
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {isArabic
                ? 'استجابة وتسعير رسمي لشركات البترول والغاز خلال ساعتين عمل'
                : 'Official upstream equipment quotation within 2 hours'}
            </p>
          </div>

          <button
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedQuote ? (
          <div className="p-8 text-center flex-1 flex flex-col items-center justify-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold font-mono bg-emerald-50 text-emerald-800 px-3 py-1 rounded border border-emerald-200">
                {submittedQuote.quoteNumber}
              </span>
              <h3 className="text-2xl font-black text-slate-950 mt-3">
                {isArabic ? 'تم استلام طلب التسعير بنجاح!' : 'Quotation Request Dispatched!'}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                {isArabic
                  ? `شكراً لك ${submittedQuote.clientName}. تم إرسال طلبكم لشركة ${submittedQuote.companyName} بنجاح إلى الفريق التجاري لـ Measuresoft في القاهرة، وتم توليد إشعار تلقائي لمهندس المبيعات المختص.`
                  : `Thank you, ${submittedQuote.clientName}. Your quotation request for ${submittedQuote.companyName} has been routed to the Measuresoft engineering desk in Cairo. An automated notification has been logged.`}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 w-full text-start text-xs space-y-2">
              <div className="flex justify-between border-b border-slate-200 pb-1.5 font-semibold text-slate-700">
                <span>{isArabic ? 'رقم الطلب المرجعي:' : 'RFQ Reference:'}</span>
                <span className="font-mono text-amber-600">{submittedQuote.quoteNumber}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5 text-slate-600">
                <span>{isArabic ? 'الشركة الطالبة:' : 'Company:'}</span>
                <span className="font-semibold text-slate-900">{submittedQuote.companyName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5 text-slate-600">
                <span>{isArabic ? 'موقع الحفر أو المشروع:' : 'Field / Rig:'}</span>
                <span>{submittedQuote.rigOrProjectLocation || (isArabic ? 'غير محدد' : 'Not specified')}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>{isArabic ? 'عدد البنود:' : 'Total Equipment Items:'}</span>
                <span className="font-bold text-slate-900">{submittedQuote.items.length} items</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
              <button
                onClick={handleClose}
                className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors"
              >
                {isArabic ? 'متابعة تصفح الكتالوج' : 'Continue Browsing Catalog'}
              </button>
              <button
                onClick={() => {
                  handleClose();
                  navigateTo('/contact');
                }}
                className="flex-1 py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-bold transition-colors"
              >
                {isArabic ? 'التواصل المباشر مع المهندس' : 'Call Cairo Office Desk'}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  {isArabic ? 'المعدات المختارة للتسعير' : 'Selected Equipment Items'} ({quoteCart.length})
                </h3>
                {quoteCart.length > 0 && (
                  <button
                    onClick={clearQuoteCart}
                    className="text-xs text-red-600 hover:text-red-700 font-semibold"
                  >
                    {isArabic ? 'تفريغ السلة' : 'Clear All'}
                  </button>
                )}
              </div>

              {quoteCart.length === 0 ? (
                <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center mx-auto">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">
                    {isArabic ? 'سلة طلبات التسعير فارغة' : 'Your RFQ Basket is Empty'}
                  </h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    {isArabic
                      ? 'تصفح كتالوج أجهزة ومعدات الحفر وكواشف الغاز، واضغط "إضافة للسلة" لأي منتج ترغب بتسعيره.'
                      : 'Browse our mud logging instruments and ATEX gas detectors and click "Add to RFQ" on any item.'}
                  </p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      navigateTo('/catalog');
                    }}
                    className="mt-2 py-2 px-4 bg-slate-950 text-amber-400 hover:bg-slate-800 rounded-lg text-xs font-bold transition-colors"
                  >
                    {isArabic ? 'استعراض كتالوج المنتجات' : 'Browse Equipment Catalog'}
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {quoteCart.map(item => (
                    <div
                      key={item.product.id}
                      className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg border border-slate-200 bg-white shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[11px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                            {item.product.code}
                          </span>
                          <button
                            onClick={() => removeFromQuoteCart(item.product.id)}
                            className="text-slate-400 hover:text-red-600 transition-colors p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <h4 className="text-xs font-bold text-slate-900 truncate mt-1">
                          {isArabic ? item.product.nameAr : item.product.name}
                        </h4>

                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs text-slate-500 font-medium">
                              {isArabic ? 'الكمية:' : 'Qty:'}
                            </span>
                            <div className="flex items-center border border-slate-300 rounded bg-white">
                              <button
                                type="button"
                                onClick={() => updateQuoteCartQuantity(item.product.id, item.quantity - 1)}
                                className="p-1 hover:bg-slate-100 text-slate-600"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-xs font-bold font-mono">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuoteCartQuantity(item.product.id, item.quantity + 1)}
                                className="p-1 hover:bg-slate-100 text-slate-600"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          <span className="text-[11px] text-slate-500 font-medium">
                            {item.product.atexRating}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {quoteCart.length > 0 && (
              <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  {isArabic ? 'بيانات جهة الطلب (الشركة والمشروع)' : 'Company & Rig Contact Details'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isArabic ? 'اسم المسؤول / المهندس *' : 'Contact Person *'}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder={isArabic ? 'م. أحمد حسن' : 'Eng. John Smith'}
                        value={clientName}
                        onChange={e => setClientName(e.target.value)}
                        className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-hidden"
                      />
                      <User className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isArabic ? 'اسم الشركة البترولية *' : 'Petroleum Company *'}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder={isArabic ? 'بتروبل / إنبي / خالدة / جابكو...' : 'Petrobel / ENI / SLB / BP...'}
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                        className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-hidden"
                      />
                      <Building className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isArabic ? 'البريد الإلكتروني للعمل *' : 'Work Email *'}
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="engineer@petroleum-company.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-hidden"
                      />
                      <Mail className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isArabic ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="+20 100 000 0000"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-hidden"
                      />
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isArabic ? 'موقع البريمة أو الحقل' : 'Field / Rig Location'}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder={isArabic ? 'خليج السويس / الصحراء الغربية...' : 'Gulf of Suez / Offshore Platform...'}
                        value={rigOrProjectLocation}
                        onChange={e => setRigOrProjectLocation(e.target.value)}
                        className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-hidden"
                      />
                      <MapPin className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isArabic ? 'درجة الإلحاح والتوريد' : 'Required Delivery Timeframe'}
                    </label>
                    <div className="relative">
                      <select
                        value={urgency}
                        onChange={e => setUrgency(e.target.value as any)}
                        className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-hidden"
                      >
                        <option value="immediate">{isArabic ? 'فوري طارئ (خلال 24-48 ساعة)' : 'Emergency Rig Urgent (24-48h)'}</option>
                        <option value="1-2_weeks">{isArabic ? 'خلال 1 - 2 أسبوع' : '1 - 2 Weeks'}</option>
                        <option value="1_month">{isArabic ? 'خلال شهر (تجهيز حفر جديد)' : '1 Month (Spud Preparation)'}</option>
                        <option value="planning_budget">{isArabic ? 'ميزانية ودراسة أسعار للمناقصة' : 'Tender / Budgetary Study'}</option>
                      </select>
                      <Clock className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {isArabic ? 'ملاحظات أو مواصفات خاصة (نوع الغاز، طول الكابل، شهادات المعايرة)' : 'Additional Technical Specifications / Notes'}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={isArabic ? 'أدخل أي متطلبات خاصة بالمعايرة أو شهادات SIL أو الضغوط...' : 'Enter target gases, hazardous zone requirements, calibration certificates required...'}
                    value={additionalNotes}
                    onChange={e => setAdditionalNotes(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>

                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    {isArabic
                      ? 'سيتم توليد كود عرض سعر رسمي، وإرسال نسخة تلقائية لفريق مبيعات Measuresoft، مع إمكانية طباعة بيان الأسعار.'
                      : 'An official quotation reference code will be generated immediately, and an automated dispatch will be sent to the commercial desk.'}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? (isArabic ? 'جاري إرسال الطلب...' : 'Transmitting RFQ...')
                      : (isArabic ? 'إرسال طلب عرض السعر الرسمي (RFQ)' : 'Transmit Official RFQ')}
                  </span>
                </button>
              </form>
            )}
          </div>
        )}

        <div className="bg-slate-50 p-4 border-t border-slate-200 text-center text-xs text-slate-500 shrink-0">
          {isArabic
            ? 'Measuresoft Egypt • معمل المعايرة والمبيعات: +20 2 2813 4900'
            : 'Measuresoft Egypt Upstream Services • Phone: +20 2 2813 4900'}
        </div>
      </div>
    </div>
  );
};
