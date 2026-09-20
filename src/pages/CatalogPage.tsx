import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Filter,
  Search,
  SlidersHorizontal,
  Grid,
  List,
  X,
  Check,
  ChevronDown,
  ChevronRight,
  ShieldAlert,
  Flame,
  Activity,
  Gauge
} from 'lucide-react';

export const CatalogPage: React.FC = () => {
  const {
    products,
    categories,
    subcategories,
    brands,
    language,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand
  } = useApp();

  const isArabic = language === 'ar';

  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedAtex, setSelectedAtex] = useState<string | null>(null);
  const [selectedGas, setSelectedGas] = useState<string | null>(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'code-asc' | 'code-desc' | 'name'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const qParam = searchParams.get('q');
    if (qParam && qParam !== searchQuery) {
      setSearchQuery(qParam);
    }
  }, [searchParams]);

  const atexOptions = ['Zone 0', 'Zone 1', 'Zone 2'];
  const commonGases = ['H2S', 'LEL', 'Hydrocarbons', 'VOC', 'CO', 'Oxygen', 'Radiation'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (selectedCategory && product.categoryId !== selectedCategory) {
        return false;
      }
      if (selectedSubcategory && product.subcategoryId !== selectedSubcategory) {
        return false;
      }
      if (selectedBrand && product.brandId !== selectedBrand) {
        return false;
      }
      if (selectedAtex && !product.atexRating.toLowerCase().includes(selectedAtex.toLowerCase())) {
        return false;
      }
      if (selectedGas && !product.gasTargets.some(g => g.toLowerCase().includes(selectedGas.toLowerCase()))) {
        return false;
      }
      if (inStockOnly && !product.inStock) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query) || product.nameAr.includes(query);
        const matchesCode = product.code.toLowerCase().includes(query);
        const matchesDesc = product.shortDesc.toLowerCase().includes(query);
        const matchesGas = product.gasTargets.some(g => g.toLowerCase().includes(query));
        if (!matchesName && !matchesCode && !matchesDesc && !matchesGas) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'code-asc') return a.code.localeCompare(b.code);
      if (sortBy === 'code-desc') return b.code.localeCompare(a.code);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [
    products,
    selectedCategory,
    selectedSubcategory,
    selectedBrand,
    selectedAtex,
    selectedGas,
    inStockOnly,
    searchQuery,
    sortBy
  ]);

  const activeCategoryObj = categories.find(c => c.id === selectedCategory);

  const resetAllFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSelectedBrand(null);
    setSelectedAtex(null);
    setSelectedGas(null);
    setInStockOnly(false);
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedCategory !== null ||
    selectedSubcategory !== null ||
    selectedBrand !== null ||
    selectedAtex !== null ||
    selectedGas !== null ||
    inStockOnly ||
    searchQuery.trim() !== '';

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumbs
        items={[
          {
            label: isArabic ? 'كتالوج المنتجات' : 'Equipment Catalog',
            labelAr: 'كتالوج المنتجات والمعدات',
            path: '/catalog'
          },
          ...(activeCategoryObj
            ? [
                {
                  label: isArabic ? activeCategoryObj.nameAr : activeCategoryObj.name,
                  labelAr: activeCategoryObj.nameAr
                }
              ]
            : [])
        ]}
      />

      <div className="bg-slate-900 text-white py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                <span>{isArabic ? 'الكتالوج البترولي المعتمد' : 'EGPC Approved Equipment Portfolio'}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                {activeCategoryObj
                  ? (isArabic ? activeCategoryObj.nameAr : activeCategoryObj.name)
                  : (isArabic ? 'كتالوج أجهزة ومعدات الحفر وكشف الغازات' : 'Petroleum Drilling & Gas Detection Catalog')}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                {activeCategoryObj
                  ? (isArabic ? activeCategoryObj.descriptionAr : activeCategoryObj.description)
                  : (isArabic
                      ? 'استعرض أكثر من 20 منظومة متقدمة لتسجيل سائل الحفر، كواشف غاز H2S المقاومة للانفجار، ومعدات المعايرة المعتمدة.'
                      : 'Explore specialized mud logging FID analyzers, pneumatic agitators, ATEX certified gas heads, and span cylinders.')}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold bg-amber-500 text-slate-950 px-3 py-1.5 rounded-lg shadow-sm">
                {filteredProducts.length} {isArabic ? 'معدة معتمدة' : 'Instruments Found'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:hidden col-span-1">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="w-full py-3 px-4 bg-white border border-slate-300 rounded-xl shadow-xs font-bold text-xs text-slate-800 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-amber-600" />
                <span>{isArabic ? 'فلاتر البحث والمواصفات' : 'Filter Specifications & Ratings'}</span>
              </div>
              <span className="text-amber-600 font-mono">({filteredProducts.length})</span>
            </button>
          </div>

          <aside
            className={`lg:block ${
              mobileFilterOpen ? 'block fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden'
            } lg:relative lg:bg-transparent lg:p-0 col-span-1 space-y-6`}
          >
            {mobileFilterOpen && (
              <div className="lg:hidden flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <h3 className="font-bold text-base text-slate-950">
                  {isArabic ? 'فلاتر الكتالوج' : 'Catalog Filters'}
                </h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                  <SlidersHorizontal className="w-4 h-4 text-amber-500" />
                  <span>{isArabic ? 'تصفية النتائج' : 'Filter Criteria'}</span>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={resetAllFilters}
                    className="text-[11px] font-semibold text-red-600 hover:text-red-700 underline"
                  >
                    {isArabic ? 'إعادة ضبط' : 'Clear All'}
                  </button>
                )}
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2.5">
                  {isArabic ? 'قسم المعدات' : 'Equipment Category'}
                </h4>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedSubcategory(null);
                    }}
                    className={`w-full text-start px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                      selectedCategory === null
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>{isArabic ? 'كافة الأقسام' : 'All Categories'}</span>
                    <span className="text-[11px] font-mono">{products.length}</span>
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSelectedSubcategory(null);
                      }}
                      className={`w-full text-start px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                        selectedCategory === cat.id
                          ? 'bg-amber-500 text-slate-950 font-bold'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span className="truncate">{isArabic ? cat.nameAr : cat.name}</span>
                      <span className="text-[11px] font-mono">
                        {products.filter(p => p.categoryId === cat.id).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {selectedCategory && (
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2.5">
                    {isArabic ? 'التصنيف الفرعي' : 'Sub-Category'}
                  </h4>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedSubcategory(null)}
                      className={`w-full text-start px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        selectedSubcategory === null
                          ? 'bg-slate-900 text-amber-400 font-bold'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {isArabic ? 'كافة التصنيفات الفرعية' : 'All Sub-categories'}
                    </button>
                    {subcategories
                      .filter(sub => sub.categoryId === selectedCategory)
                      .map(sub => (
                        <button
                          key={sub.id}
                          onClick={() => setSelectedSubcategory(sub.id)}
                          className={`w-full text-start px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            selectedSubcategory === sub.id
                              ? 'bg-slate-900 text-amber-400 font-bold'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {isArabic ? sub.nameAr : sub.name}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2.5">
                  {isArabic ? 'الشركة المصنعة / العلامة' : 'Manufacturer Brand'}
                </h4>
                <div className="space-y-1">
                  {brands.map(b => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBrand(selectedBrand === b.id ? null : b.id)}
                      className={`w-full text-start px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                        selectedBrand === b.id
                          ? 'bg-slate-900 text-amber-400 font-bold'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span>{b.name}</span>
                      <span className="text-[10px] text-slate-400">{b.origin}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2.5">
                  {isArabic ? 'تصنيف المناطق الخطرة (ATEX)' : 'Hazardous Area Rating'}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {atexOptions.map(atex => (
                    <button
                      key={atex}
                      onClick={() => setSelectedAtex(selectedAtex === atex ? null : atex)}
                      className={`px-2.5 py-1 rounded text-xs font-mono font-semibold border transition-colors ${
                        selectedAtex === atex
                          ? 'bg-amber-500 border-amber-600 text-slate-950 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {atex}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2.5">
                  {isArabic ? 'نوع الغاز المستهدف' : 'Target Gas Target'}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {commonGases.map(gas => (
                    <button
                      key={gas}
                      onClick={() => setSelectedGas(selectedGas === gas ? null : gas)}
                      className={`px-2.5 py-1 rounded text-xs font-mono font-medium border transition-colors ${
                        selectedGas === gas
                          ? 'bg-slate-900 border-slate-900 text-amber-400 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {gas}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <label className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={e => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-600 border-slate-300 focus:ring-amber-500"
                  />
                  <span>{isArabic ? 'الأجهزة المتوفرة للتوريد الفوري فقط' : 'Ready Stock in Cairo / Suez Only'}</span>
                </label>
              </div>

              {mobileFilterOpen && (
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full py-3 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs"
                >
                  {isArabic ? 'تطبيق الفلاتر وعرض النتائج' : 'Apply Filters'}
                </button>
              )}
            </div>
          </aside>

          <main className="col-span-1 lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-72">
                <input
                  type="text"
                  placeholder={isArabic ? 'ابحث في النتائج...' : 'Filter within results...'}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2 ps-9 pe-3 text-xs focus:bg-white focus:border-amber-500 focus:outline-hidden"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute start-3 top-2.5" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute end-2.5 top-2 text-slate-400 hover:text-slate-600 text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <span className="font-semibold">{isArabic ? 'الترتيب:' : 'Sort:'}</span>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value as any)}
                    className="bg-slate-50 border border-slate-300 rounded-md py-1.5 px-2 text-xs font-medium focus:outline-hidden"
                  >
                    <option value="featured">{isArabic ? 'المعدات البارزة' : 'Featured First'}</option>
                    <option value="code-asc">{isArabic ? 'كود الموديل (أ - ي)' : 'Model Code (A-Z)'}</option>
                    <option value="code-desc">{isArabic ? 'كود الموديل (ي - أ)' : 'Model Code (Z-A)'}</option>
                    <option value="name">{isArabic ? 'اسم المعدة' : 'Product Name'}</option>
                  </select>
                </div>

                <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-slate-50">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 ${
                      viewMode === 'grid' ? 'bg-amber-500 text-slate-950' : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Grid View"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 ${
                      viewMode === 'list' ? 'bg-amber-500 text-slate-950' : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Technical List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-500 font-semibold">{isArabic ? 'الفلاتر النشطة:' : 'Active Filters:'}</span>
                {selectedCategory && (
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                    {activeCategoryObj?.name}
                    <button onClick={() => setSelectedCategory(null)} className="hover:text-red-600">×</button>
                  </span>
                )}
                {selectedSubcategory && (
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                    {subcategories.find(s => s.id === selectedSubcategory)?.name}
                    <button onClick={() => setSelectedSubcategory(null)} className="hover:text-red-600">×</button>
                  </span>
                )}
                {selectedBrand && (
                  <span className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                    {brands.find(b => b.id === selectedBrand)?.name}
                    <button onClick={() => setSelectedBrand(null)} className="hover:text-red-600">×</button>
                  </span>
                )}
                {selectedAtex && (
                  <span className="bg-amber-50 text-amber-700 border border-amber-300 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                    {selectedAtex}
                    <button onClick={() => setSelectedAtex(null)} className="hover:text-red-600">×</button>
                  </span>
                )}
                {selectedGas && (
                  <span className="bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                    {selectedGas}
                    <button onClick={() => setSelectedGas(null)} className="hover:text-red-600">×</button>
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                    "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="hover:text-red-600">×</button>
                  </span>
                )}
                <button
                  onClick={resetAllFilters}
                  className="text-red-600 hover:text-red-700 font-bold underline ms-2 text-[11px]"
                >
                  {isArabic ? 'مسح الكل' : 'Clear All'}
                </button>
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {isArabic ? 'لم يتم العثور على معدات مطابقة لمعايير البحث' : 'No Instruments Matched Selected Criteria'}
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  {isArabic
                    ? 'جرب تقليل الفلاتر أو البحث باسم غاز آخر مثل H2S أو LEL، أو تواصل مع مهندسينا لتوفير أي مواصفات خاصة.'
                    : 'Try clearing some active filters or searching for alternative gas types, or request a custom engineering consultation.'}
                </p>
                <button
                  onClick={resetAllFilters}
                  className="py-2.5 px-5 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs hover:bg-amber-400 transition-colors"
                >
                  {isArabic ? 'إعادة ضبط كافة الفلاتر' : 'Reset All Filters'}
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'space-y-4'
                }
              >
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
