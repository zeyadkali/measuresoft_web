import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Product, QuoteRequest } from '../types';
import {
  Package,
  FileText,
  Layers,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  Download,
  Eye,
  Building,
  User,
  Phone,
  Mail,
  X,
  Save,
  ShieldCheck
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const {
    products,
    categories,
    subcategories,
    brands,
    quoteRequests,
    addProduct,
    updateProduct,
    deleteProduct,
    updateQuoteStatus,
    language
  } = useApp();

  const isArabic = language === 'ar';

  const [activeTab, setActiveTab] = useState<'products' | 'quotes' | 'categories'>('products');
  const [productSearch, setProductSearch] = useState('');
  const [quoteSearch, setQuoteSearch] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isCreatingProduct, setIsCreatingProduct] = useState(false);
  const [selectedQuoteDetail, setSelectedQuoteDetail] = useState<QuoteRequest | null>(null);

  const [formCode, setFormCode] = useState('');
  const [formName, setFormName] = useState('');
  const [formNameAr, setFormNameAr] = useState('');
  const [formCategoryId, setFormCategoryId] = useState(categories[0]?.id || '');
  const [formBrandId, setFormBrandId] = useState(brands[0]?.id || '');
  const [formAtex, setFormAtex] = useState('ATEX Zone 1 II 2G Ex db IIC T6');
  const [formGas, setFormGas] = useState('H2S, LEL');
  const [formDesc, setFormDesc] = useState('');
  const [formDescAr, setFormDescAr] = useState('');
  const [formImage, setFormImage] = useState('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80');

  const openCreateModal = () => {
    setFormCode(`MS-NEW-${Math.floor(100 + Math.random() * 900)}`);
    setFormName('');
    setFormNameAr('');
    setFormCategoryId(categories[0]?.id || '');
    setFormBrandId(brands[0]?.id || '');
    setFormAtex('ATEX Zone 1 II 2G Ex db IIC T6 Gb');
    setFormGas('H2S, LEL');
    setFormDesc('');
    setFormDescAr('');
    setFormImage('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80');
    setIsCreatingProduct(true);
    setEditingProduct(null);
  };

  const openEditModal = (p: Product) => {
    setEditingProduct(p);
    setFormCode(p.code);
    setFormName(p.name);
    setFormNameAr(p.nameAr);
    setFormCategoryId(p.categoryId);
    setFormBrandId(p.brandId);
    setFormAtex(p.atexRating);
    setFormGas(p.gasTargets.join(', '));
    setFormDesc(p.description);
    setFormDescAr(p.descriptionAr);
    setFormImage(p.images[0] || '');
    setIsCreatingProduct(false);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formCode || !formName) return;

    if (editingProduct) {
      updateProduct({
        ...editingProduct,
        code: formCode,
        name: formName,
        nameAr: formNameAr || formName,
        categoryId: formCategoryId,
        brandId: formBrandId,
        atexRating: formAtex,
        gasTargets: formGas.split(',').map(s => s.trim()),
        description: formDesc,
        descriptionAr: formDescAr || formDesc,
        images: [formImage]
      });
      setEditingProduct(null);
    } else {
      addProduct({
        id: `prod-${Date.now()}`,
        code: formCode,
        slug: formName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name: formName,
        nameAr: formNameAr || formName,
        shortDesc: formDesc.slice(0, 100),
        shortDescAr: (formDescAr || formDesc).slice(0, 100),
        description: formDesc,
        descriptionAr: formDescAr || formDesc,
        categoryId: formCategoryId,
        subcategoryId: subcategories.find(s => s.categoryId === formCategoryId)?.id || '',
        brandId: formBrandId,
        images: [formImage],
        atexRating: formAtex,
        gasTargets: formGas.split(',').map(s => s.trim()),
        targetIndustry: ['Upstream Drilling', 'Offshore Production', 'Refineries'],
        warrantyMonths: 24,
        specs: [
          { label: 'Hazardous Certification', labelAr: 'شهادة الاعتماد', value: formAtex, valueAr: formAtex },
          { label: 'Origin', labelAr: 'بلد المنشأ', value: 'Egypt / UK Standards', valueAr: 'مصر / معايير بريطانية' }
        ],
        applications: ['Drilling Rigs', 'Offshore Platforms'],
        applicationsAr: ['منصات الحفر', 'المنصات البحرية'],
        keyFeatures: ['Industrial Heavy Duty Construction', 'Rapid Response Calibration'],
        keyFeaturesAr: ['تصميم صناعي متين للمواقع الخطرة', 'معايرة سريعة ودقة قياس'],
        includes: ['Calibration Certificate', 'Operating Manual', 'Hard Carry Case'],
        includesAr: ['شهادة معايرة معتمدة', 'دليل التشغيل', 'حقيبة نقل مصفحة'],
        files: [
          {
            id: `file-${Date.now()}`,
            title: `${formName} Datasheet`,
            titleAr: `النشرة الفنية لمعدة ${formName}`,
            type: 'datasheet',
            size: '2.1 MB',
            pageCount: 4,
            downloadUrl: '#'
          }
        ],
        inStock: true,
        isFeatured: true
      });
      setIsCreatingProduct(false);
    }
  };

  const filteredProducts = products.filter(p => {
    if (!productSearch) return true;
    const q = productSearch.toLowerCase();
    return p.code.toLowerCase().includes(q) || p.name.toLowerCase().includes(q);
  });

  const filteredQuotes = quoteRequests.filter(q => {
    if (!quoteSearch) return true;
    const s = quoteSearch.toLowerCase();
    return (
      q.quoteNumber.toLowerCase().includes(s) ||
      q.clientName.toLowerCase().includes(s) ||
      q.companyName.toLowerCase().includes(s)
    );
  });

  const handleExportQuotesJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(quoteRequests, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `Measuresoft-RFQs-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="bg-slate-100 min-h-screen pb-16">
      <div className="bg-slate-950 text-white border-b-4 border-amber-500 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 text-slate-950 font-black rounded-lg flex items-center justify-center font-mono">
              ADM
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight">
                {isArabic ? 'لوحة تحكم Measuresoft المركزية' : 'Measuresoft Petroleum Systems Admin Console'}
              </h1>
              <p className="text-xs text-slate-400">
                {isArabic ? 'إدارة كتالوج المنتجات، طلبات عروض الأسعار، والمواصفات الفنية' : 'Catalog Management & Commercial RFQ Pipeline Engine'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={handleExportQuotesJSON}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-bold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isArabic ? 'تصدير طلبات التسعير (JSON)' : 'Export RFQs'}</span>
            </button>
            <button
              onClick={openCreateModal}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>{isArabic ? 'إضافة معدة جديدة' : 'Add New Equipment'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-xs text-slate-500 font-medium">{isArabic ? 'إجمالي المنتجات' : 'Total Equipment'}</div>
            <div className="text-2xl font-black font-mono text-slate-950 mt-1">{products.length}</div>
            <div className="text-[11px] text-amber-600 font-semibold mt-1">ATEX Zone 0/1 Certified</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-xs text-slate-500 font-medium">{isArabic ? 'طلبات التسعير (RFQ)' : 'Active RFQ Pipeline'}</div>
            <div className="text-2xl font-black font-mono text-amber-600 mt-1">{quoteRequests.length}</div>
            <div className="text-[11px] text-slate-500 mt-1">{isArabic ? 'من كبرى شركات البترول' : 'From E&P Joint Ventures'}</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-xs text-slate-500 font-medium">{isArabic ? 'تصنيفات المعدات' : 'Categories'}</div>
            <div className="text-2xl font-black font-mono text-slate-950 mt-1">{categories.length}</div>
            <div className="text-[11px] text-slate-500 mt-1">{subcategories.length} sub-categories</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-xs text-slate-500 font-medium">{isArabic ? 'كود تسجيل المورد' : 'EGPC Vendor Status'}</div>
            <div className="text-xl font-black font-mono text-emerald-600 mt-1">REG-77291</div>
            <div className="text-[11px] text-slate-500 mt-1">Upstream Egypt Approved</div>
          </div>
        </div>

        <div className="flex border-b border-slate-200 gap-4 bg-white p-2 rounded-xl shadow-xs text-xs font-bold">
          <button
            onClick={() => setActiveTab('products')}
            className={`py-2 px-4 rounded-lg flex items-center gap-2 transition-colors ${
              activeTab === 'products' ? 'bg-slate-950 text-amber-400' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>{isArabic ? 'إدارة كتالوج المنتجات' : 'Equipment Catalog'} ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('quotes')}
            className={`py-2 px-4 rounded-lg flex items-center gap-2 transition-colors ${
              activeTab === 'quotes' ? 'bg-slate-950 text-amber-400' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{isArabic ? 'طلبات عروض الأسعار (RFQ)' : 'Quotation Inquiries'} ({quoteRequests.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('categories')}
            className={`py-2 px-4 rounded-lg flex items-center gap-2 transition-colors ${
              activeTab === 'categories' ? 'bg-slate-950 text-amber-400' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{isArabic ? 'التصنيفات والشركات' : 'Categories & Brands'}</span>
          </button>
        </div>

        {activeTab === 'products' && (
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  placeholder={isArabic ? 'ابحث بكود الموديل أو اسم الجهاز...' : 'Filter products by model or name...'}
                  value={productSearch}
                  onChange={e => setProductSearch(e.target.value)}
                  className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 focus:outline-hidden"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
              </div>

              <span className="text-xs text-slate-500 font-mono">
                Showing {filteredProducts.length} of {products.length} products
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-start">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 border-b border-slate-200 font-bold">
                    <th className="p-3 text-start">{isArabic ? 'كود الموديل' : 'Code'}</th>
                    <th className="p-3 text-start">{isArabic ? 'المعدة' : 'Equipment'}</th>
                    <th className="p-3 text-start">{isArabic ? 'القسم' : 'Category'}</th>
                    <th className="p-3 text-start">{isArabic ? 'تصنيف ATEX' : 'ATEX Rating'}</th>
                    <th className="p-3 text-start">{isArabic ? 'الحالة' : 'Stock'}</th>
                    <th className="p-3 text-end">{isArabic ? 'الإجراءات' : 'Actions'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredProducts.map(p => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      <td className="p-3 font-mono font-bold text-amber-600">
                        {p.code}
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-9 h-9 object-cover rounded border border-slate-200 bg-slate-50 shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="font-bold text-slate-900 truncate max-w-xs">{p.name}</div>
                            <div className="text-[10px] text-slate-400 truncate max-w-xs">{p.nameAr}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-slate-600">
                        {categories.find(c => c.id === p.categoryId)?.name || p.categoryId}
                      </td>
                      <td className="p-3">
                        <span className="font-mono text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                          {p.atexRating}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          Ready for Rig
                        </span>
                      </td>
                      <td className="p-3 text-end space-s-2">
                        <button
                          onClick={() => openEditModal(p)}
                          className="p-1.5 text-slate-600 hover:text-amber-600 rounded hover:bg-slate-100"
                          title="Edit"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Are you sure you want to delete ${p.code}?`)) {
                              deleteProduct(p.id);
                            }
                          }}
                          className="p-1.5 text-slate-400 hover:text-red-600 rounded hover:bg-slate-100"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'quotes' && (
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  placeholder={isArabic ? 'ابحث برقم الطلب، الشركة، أو اسم المهندس...' : 'Filter RFQs by reference, client or company...'}
                  value={quoteSearch}
                  onChange={e => setQuoteSearch(e.target.value)}
                  className="w-full text-xs p-2.5 ps-8 rounded-lg border border-slate-300 focus:outline-hidden"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute start-2.5 top-3" />
              </div>

              <div className="text-xs text-slate-500">
                {quoteRequests.length} Quotation Requests Logged
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-start">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 border-b border-slate-200 font-bold">
                    <th className="p-3 text-start">{isArabic ? 'رقم الطلب' : 'RFQ Code'}</th>
                    <th className="p-3 text-start">{isArabic ? 'الشركة والمهندس' : 'Company & Contact'}</th>
                    <th className="p-3 text-start">{isArabic ? 'موقع الحفر' : 'Rig / Field'}</th>
                    <th className="p-3 text-start">{isArabic ? 'البنود' : 'Items'}</th>
                    <th className="p-3 text-start">{isArabic ? 'الإلحاح' : 'Timeframe'}</th>
                    <th className="p-3 text-start">{isArabic ? 'حالة الطلب' : 'Status'}</th>
                    <th className="p-3 text-end">{isArabic ? 'معاينة' : 'Details'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredQuotes.map(q => (
                    <tr key={q.id} className="hover:bg-slate-50">
                      <td className="p-3 font-mono font-bold text-amber-600">
                        {q.quoteNumber}
                        <div className="text-[10px] text-slate-400 font-sans">{new Date(q.submittedAt).toLocaleDateString()}</div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-slate-900">{q.companyName}</div>
                        <div className="text-[11px] text-slate-500">{q.clientName} • {q.phone}</div>
                      </td>
                      <td className="p-3 text-slate-700">
                        {q.rigOrProjectLocation || 'Egypt Upstream'}
                      </td>
                      <td className="p-3">
                        <span className="font-bold text-slate-900">{q.items.length} units</span>
                      </td>
                      <td className="p-3">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          q.urgency === 'immediate' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {q.urgency}
                        </span>
                      </td>
                      <td className="p-3">
                        <select
                          value={q.status}
                          onChange={e => updateQuoteStatus(q.id, e.target.value as any)}
                          className="bg-slate-50 border border-slate-300 rounded px-2 py-1 text-[11px] font-semibold"
                        >
                          <option value="new">New Submission</option>
                          <option value="reviewed">Pricing Calculated</option>
                          <option value="quoted">Quotation Dispatched</option>
                          <option value="closed">Deal Won / Closed</option>
                        </select>
                      </td>
                      <td className="p-3 text-end">
                        <button
                          onClick={() => setSelectedQuoteDetail(q)}
                          className="p-1.5 text-slate-700 hover:text-amber-600 hover:bg-slate-100 rounded"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-950 text-sm uppercase tracking-wide">
                {isArabic ? 'تصنيفات المعدات البترولية' : 'Equipment Categories'}
              </h3>
              <div className="space-y-3">
                {categories.map(cat => (
                  <div key={cat.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-xs">{cat.name}</div>
                      <div className="text-[11px] text-slate-500">{cat.nameAr}</div>
                    </div>
                    <span className="font-mono text-xs font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                      {products.filter(p => p.categoryId === cat.id).length} items
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-950 text-sm uppercase tracking-wide">
                {isArabic ? 'الشركات المصنعة والوكالات' : 'Authorized Brands'}
              </h3>
              <div className="space-y-3">
                {brands.map(b => (
                  <div key={b.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-xs">{b.name}</div>
                      <div className="text-[11px] text-slate-500">{b.origin}</div>
                    </div>
                    <span className="font-mono text-xs text-slate-500">
                      {products.filter(p => p.brandId === b.id).length} items
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {(isCreatingProduct || editingProduct) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-700 w-full max-w-2xl my-auto overflow-hidden">
            <div className="bg-slate-950 text-white p-4 flex items-center justify-between border-b border-slate-800">
              <h3 className="font-bold text-sm">
                {editingProduct ? (isArabic ? 'تعديل بيانات المعدة' : 'Edit Equipment Data') : (isArabic ? 'إضافة معدة جديدة للكتالوج' : 'Add New Drilling/Safety Equipment')}
              </h3>
              <button
                onClick={() => {
                  setIsCreatingProduct(false);
                  setEditingProduct(null);
                }}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    {isArabic ? 'كود الموديل *' : 'Model Code *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formCode}
                    onChange={e => setFormCode(e.target.value)}
                    className="w-full p-2 rounded-lg border border-slate-300 font-mono font-bold"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    {isArabic ? 'القسم *' : 'Category *'}
                  </label>
                  <select
                    value={formCategoryId}
                    onChange={e => setFormCategoryId(e.target.value)}
                    className="w-full p-2 rounded-lg border border-slate-300 bg-white"
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    {isArabic ? 'اسم المعدة (إنجليزي) *' : 'Product Name (EN) *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={e => setFormName(e.target.value)}
                    className="w-full p-2 rounded-lg border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    {isArabic ? 'اسم المعدة (عربي)' : 'Product Name (AR)'}
                  </label>
                  <input
                    type="text"
                    value={formNameAr}
                    onChange={e => setFormNameAr(e.target.value)}
                    className="w-full p-2 rounded-lg border border-slate-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    {isArabic ? 'شهادة ومستوى ATEX' : 'Hazardous Certification'}
                  </label>
                  <input
                    type="text"
                    value={formAtex}
                    onChange={e => setFormAtex(e.target.value)}
                    className="w-full p-2 rounded-lg border border-slate-300 font-mono"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    {isArabic ? 'الغازات المستهدفة (مفصولة بفاصلة)' : 'Target Gases (comma separated)'}
                  </label>
                  <input
                    type="text"
                    value={formGas}
                    onChange={e => setFormGas(e.target.value)}
                    className="w-full p-2 rounded-lg border border-slate-300 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {isArabic ? 'رابط الصورة' : 'Image URL'}
                </label>
                <input
                  type="text"
                  value={formImage}
                  onChange={e => setFormImage(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-300 font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {isArabic ? 'الوصف الهندسي' : 'Engineering Description'}
                </label>
                <textarea
                  rows={3}
                  value={formDesc}
                  onChange={e => setFormDesc(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-300"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => {
                    setIsCreatingProduct(false);
                    setEditingProduct(null);
                  }}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-bold flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Equipment</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedQuoteDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-700 w-full max-w-lg my-auto overflow-hidden">
            <div className="bg-slate-950 text-white p-4 flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="font-mono text-xs text-amber-400 font-bold">{selectedQuoteDetail.quoteNumber}</span>
                <h3 className="font-bold text-sm text-white">Quotation Request Details</h3>
              </div>
              <button
                onClick={() => setSelectedQuoteDetail(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Company:</span>
                  <span className="font-bold text-slate-900">{selectedQuoteDetail.companyName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Engineer / Contact:</span>
                  <span className="font-bold text-slate-900">{selectedQuoteDetail.clientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Email:</span>
                  <a href={`mailto:${selectedQuoteDetail.email}`} className="text-amber-600 font-medium hover:underline">
                    {selectedQuoteDetail.email}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-mono">{selectedQuoteDetail.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Rig Location:</span>
                  <span>{selectedQuoteDetail.rigOrProjectLocation || 'Egypt'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Urgency:</span>
                  <span className="font-bold text-amber-600">{selectedQuoteDetail.urgency}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Requested Equipment:</h4>
                <div className="space-y-2">
                  {selectedQuoteDetail.items.map((item, i) => (
                    <div key={i} className="p-2.5 bg-slate-50 rounded border border-slate-200 flex justify-between items-center">
                      <div>
                        <span className="font-mono font-bold text-amber-600">{item.productCode}</span>
                        <div className="font-medium text-slate-900">{item.productName}</div>
                      </div>
                      <span className="font-bold font-mono text-slate-700">Qty: {item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedQuoteDetail.additionalNotes && (
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Notes:</h4>
                  <p className="p-2.5 bg-slate-50 rounded border border-slate-200 text-slate-600">
                    {selectedQuoteDetail.additionalNotes}
                  </p>
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedQuoteDetail(null)}
                  className="px-4 py-2 bg-slate-950 text-white font-bold rounded-lg text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
