import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Send,
  Building,
  Mail,
  Phone,
  User,
  MapPin,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { QuoteRequest } from '../types';

export const FastQuoteModal: React.FC = () => {
  const { activeQuoteProduct, setActiveQuoteProduct, language, submitQuoteRequest } = useApp();

  const isArabic = language === 'ar';

  const [quantity, setQuantity] = useState(1);
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [targetGasOrSpecs, setTargetGasOrSpecs] = useState('');
  const [rigLocation, setRigLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);

  if (!activeQuoteProduct) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !companyName || !email || !phone) return;

    setIsSubmitting(true);
    try {
      const quote = await submitQuoteRequest({
        clientName,
        companyName,
        email,
        phone,
        country: 'Egypt',
        rigOrProjectLocation: rigLocation,
        urgency: 'immediate',
        additionalNotes: targetGasOrSpecs,
        customItems: [
          {
            product: activeQuoteProduct,
            quantity,
            targetGas: targetGasOrSpecs
          }
        ]
      });
      setSubmittedQuote(quote);
    } catch {
      alert('Error submitting quotation request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setActiveQuoteProduct(null);
    setSubmittedQuote(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-700 my-auto">
        <div className="bg-slate-950 text-white p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono font-bold text-sm">
              RFQ
            </div>
            <div>
              <span className="font-mono text-xs text-amber-400 font-bold">
                {activeQuoteProduct.code}
              </span>
              <h3 className="text-base font-bold text-white truncate max-w-xs sm:max-w-sm">
                {isArabic ? 'طلب عرض سعر سريع للمعدة' : 'Request Rapid Commercial Quotation'}
              </h3>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedQuote ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="font-mono text-xs font-bold bg-emerald-50 text-emerald-800 px-3 py-1 rounded border border-emerald-200">
                {submittedQuote.quoteNumber}
              </span>
              <h4 className="text-xl font-bold text-slate-950 mt-2">
                {isArabic ? 'تم استلام وتوثيق طلب التسعير بنجاح' : 'Quotation Request Recorded!'}
              </h4>
              <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto">
                {isArabic
                  ? `شكراً مهندس ${submittedQuote.clientName}. تم إرسال طلب ${activeQuoteProduct.code} لشركة ${submittedQuote.companyName} وسيتصل بك مهندس المبيعات البترولية خلال ساعات.`
                  : `Thank you, ${submittedQuote.clientName}. Your quotation for ${activeQuoteProduct.code} (${submittedQuote.companyName}) has been sent to our Cairo engineering desk.`}
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-start space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">{isArabic ? 'المعدة المطلوبة:' : 'Item:'}</span>
                <span className="font-semibold text-slate-900">{activeQuoteProduct.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{isArabic ? 'الكمية المطلوبة:' : 'Quantity:'}</span>
                <span className="font-bold text-slate-900">{quantity} units</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-2.5 px-4 bg-slate-950 text-amber-400 font-bold rounded-xl text-xs hover:bg-slate-800 transition-colors"
            >
              {isArabic ? 'إغلاق ومتابعة التصفح' : 'Close and Continue'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
              <img
                src={activeQuoteProduct.images[0]}
                alt={activeQuoteProduct.name}
                className="w-14 h-14 object-cover rounded-lg border border-slate-200 bg-white shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[11px] font-bold text-amber-600">
                  {activeQuoteProduct.code}
                </div>
                <h4 className="text-xs font-bold text-slate-900 truncate">
                  {isArabic ? activeQuoteProduct.nameAr : activeQuoteProduct.name}
                </h4>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {activeQuoteProduct.atexRating}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isArabic ? 'الكمية المطلوبة *' : 'Quantity *'}
                </label>
                <input
                  type="number"
                  min={1}
                  max={500}
                  required
                  value={quantity}
                  onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 font-mono font-bold focus:border-amber-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isArabic ? 'موقع الحقل / البريمة' : 'Field / Rig Location'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={isArabic ? 'خليج السويس / غرب الصحراء' : 'Gulf of Suez / Western Desert'}
                    value={rigLocation}
                    onChange={e => setRigLocation(e.target.value)}
                    className="w-full text-xs p-2.5 ps-7 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                  />
                  <MapPin className="w-3.5 h-3.5 text-slate-400 absolute start-2 top-3" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isArabic ? 'اسم المسؤول *' : 'Contact Person *'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder={isArabic ? 'م. مصطفى كمال' : 'Eng. M. Kamal'}
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                    className="w-full text-xs p-2.5 ps-7 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                  />
                  <User className="w-3.5 h-3.5 text-slate-400 absolute start-2 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isArabic ? 'الشركة البترولية *' : 'Company Name *'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder={isArabic ? 'بتروبل / بدر الدين / إنبي...' : 'Petrobel / ENI / SLB...'}
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    className="w-full text-xs p-2.5 ps-7 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                  />
                  <Building className="w-3.5 h-3.5 text-slate-400 absolute start-2 top-3" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {isArabic ? 'البريد الإلكتروني للعمل *' : 'Work Email *'}
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full text-xs p-2.5 ps-7 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                  />
                  <Mail className="w-3.5 h-3.5 text-slate-400 absolute start-2 top-3" />
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
                    className="w-full text-xs p-2.5 ps-7 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
                  />
                  <Phone className="w-3.5 h-3.5 text-slate-400 absolute start-2 top-3" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {isArabic ? 'المواصفات المطلوبة أو الغاز المستهدف (اختياري)' : 'Target Gas / Specific Requirements'}
              </label>
              <input
                type="text"
                placeholder={isArabic ? 'مثال: تركيز H2S حتى 100 ppm مع شهادة معايرة NIST' : 'e.g. H2S range 0-50 ppm, 316 Stainless Steel casing'}
                value={targetGasOrSpecs}
                onChange={e => setTargetGasOrSpecs(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:outline-hidden"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>
                {isSubmitting
                  ? (isArabic ? 'جاري إرسال الطلب...' : 'Submitting RFQ...')
                  : (isArabic ? 'إرسال طلب التسعير الرسمي (RFQ)' : 'Send Official RFQ Request')}
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
