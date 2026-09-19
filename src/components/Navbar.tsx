import React, { useState } from 'react';
import {
  ShieldAlert,
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingCart,
  ChevronDown,
  Layers,
  Activity,
  Flame,
  Gauge,
  SlidersHorizontal,
  Menu,
  X,
  Globe,
  Award,
  Lock,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const {
    language,
    setLanguage,
    currentPath,
    navigateTo,
    categories,
    brands,
    products,
    quoteCart,
    setIsCartOpen,
    searchQuery,
    setSearchQuery,
    setSelectedCategory
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const isArabic = language === 'ar';
  const totalCartCount = quoteCart.reduce((sum, item) => sum + item.quantity, 0);

  const searchResults = searchQuery.trim()
    ? products
        .filter(p =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.nameAr.includes(searchQuery) ||
          p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.gasTargets.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigateTo(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchFocused(false);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    navigateTo('/catalog');
    setCategoriesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-amber-500" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-amber-500" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>{isArabic ? 'مورد معتمد للهيئة المصرية العامة للبترول (EGPC Approved)' : 'EGPC Approved Oil & Gas Supplier (No. 77291)'}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{isArabic ? 'طوارئ المنصات والحقول: ' : '24/7 Rig Support: '}</span>
              <a href="tel:+201005549821" className="font-mono text-white font-semibold">+20 100 554 9821</a>
            </div>
            <div className="hidden lg:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{isArabic ? 'القاهرة الجديدة • قاعدة السويس البحرية • هيوستن • أبردين' : 'Cairo HQ • Suez Marine Base • Houston • Aberdeen'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 ms-auto">
            <button
              onClick={() => navigateTo('/admin')}
              className="flex items-center gap-1 hover:text-amber-400 text-slate-300 transition-colors py-0.5 px-2 rounded-sm bg-slate-900 border border-slate-800"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>{isArabic ? 'لوحة التحكم' : 'Staff Portal'}</span>
            </button>

            <div className="flex items-center gap-1 border-s border-slate-800 ps-3">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 rounded text-xs font-semibold uppercase ${
                  language === 'en' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-1.5 py-0.5 rounded text-xs font-semibold ${
                  language === 'ar' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                عربي
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => navigateTo('/')}
            className="flex items-center gap-3 text-start group focus:outline-hidden"
          >
            <div className="w-11 h-11 bg-slate-950 rounded-lg flex items-center justify-center border-2 border-amber-500 shadow-sm group-hover:border-amber-400 transition-colors">
              <span className="font-mono text-xl font-black text-amber-400 tracking-tighter">MS</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-950 font-sans">
                  MEASURESOFT
                </span>
                <span className="bg-amber-500/10 text-amber-700 border border-amber-500/30 text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wide">
                  Oil & Gas
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-tight">
                {isArabic ? 'معدات تسجيل سائل الحفر ورصد الغازات البترولية' : 'Mud Logging & Petroleum Gas Detection Egypt'}
              </p>
            </div>
          </button>

          <div className="hidden md:flex flex-1 max-w-lg mx-6 relative">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <input
                type="text"
                placeholder={isArabic ? 'ابحث بكود الموديل، نوع الغاز (H2S, CH4), أو مجسات البريمة...' : 'Search model (e.g. MS-FID-800), gas target (H2S, LEL), mud degasser...'}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                className="w-full bg-slate-100 text-slate-900 border border-slate-300 rounded-lg py-2.5 ps-10 pe-4 text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-hidden transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-3.5 pointer-events-none" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute end-3 top-3 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </form>

            {searchFocused && searchResults.length > 0 && (
              <div className="absolute top-full start-0 end-0 mt-1.5 bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden z-50">
                <div className="p-2 bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 flex justify-between">
                  <span>{isArabic ? 'نتائج مطابقة من الكتالوج' : 'Matching Catalog Products'}</span>
                  <span>{searchResults.length} {isArabic ? 'منتجات' : 'items'}</span>
                </div>
                <div className="divide-y divide-slate-100">
                  {searchResults.map(prod => (
                    <button
                      key={prod.id}
                      onClick={() => {
                        navigateTo(`/products/${prod.slug}`);
                        setSearchFocused(false);
                      }}
                      className="w-full p-3 text-start flex items-center gap-3 hover:bg-amber-50/60 transition-colors"
                    >
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        className="w-10 h-10 object-cover rounded-md border border-slate-200 bg-white"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                            {prod.code}
                          </span>
                          <span className="text-xs text-slate-500 truncate">{prod.atexRating}</span>
                        </div>
                        <p className="text-sm font-semibold text-slate-900 truncate">
                          {isArabic ? prod.nameAr : prod.name}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="p-2 bg-slate-50 text-center border-t border-slate-100">
                  <button
                    onClick={() => {
                      navigateTo(`/catalog?q=${encodeURIComponent(searchQuery)}`);
                      setSearchFocused(false);
                    }}
                    className="text-xs font-semibold text-amber-600 hover:text-amber-700"
                  >
                    {isArabic ? 'عرض كافة المنتجات في الكتالوج' : 'View all matching products in catalog'} →
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-2.5 rounded-lg font-medium text-sm transition-colors border border-slate-200 focus:outline-hidden"
            >
              <ShoppingCart className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline font-semibold">
                {isArabic ? 'سلة عروض الأسعار' : 'RFQ Basket'}
              </span>
              {totalCartCount > 0 ? (
                <span className="w-5 h-5 bg-amber-500 text-slate-950 text-xs font-bold rounded-full flex items-center justify-center">
                  {totalCartCount}
                </span>
              ) : (
                <span className="w-5 h-5 bg-slate-200 text-slate-600 text-xs font-medium rounded-full flex items-center justify-center">
                  0
                </span>
              )}
            </button>

            <button
              onClick={() => navigateTo('/quote')}
              className="hidden lg:flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-sm transition-all shadow-sm shadow-amber-500/20"
            >
              <span>{isArabic ? 'طلب عرض سعر سريع' : 'Request Rapid Quote'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden md:block bg-slate-900 border-t border-slate-800 text-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="relative">
                <button
                  onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                  onMouseEnter={() => setCategoriesDropdownOpen(true)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-bold tracking-wide transition-colors ${
                    categoriesDropdownOpen || currentPath === '/catalog'
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>{isArabic ? 'أقسام المنتجات والمعدات' : 'All Product Categories'}</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {categoriesDropdownOpen && (
                  <div
                    onMouseLeave={() => setCategoriesDropdownOpen(false)}
                    className="absolute top-full start-0 w-80 bg-white border border-slate-200 shadow-2xl rounded-b-lg py-2 z-50 text-slate-800"
                  >
                    <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                      {isArabic ? 'الكتالوج البترولي المتخصص' : 'Petroleum Equipment Catalog'}
                    </div>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)}
                        className="w-full px-4 py-3 text-start flex items-start gap-3 hover:bg-amber-50/70 border-b border-slate-50 last:border-0 transition-colors"
                      >
                        <div className="p-2 bg-slate-100 rounded-lg mt-0.5">
                          {getCategoryIcon(cat.iconName)}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">
                            {isArabic ? cat.nameAr : cat.name}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {isArabic ? cat.descriptionAr : cat.description}
                          </div>
                        </div>
                      </button>
                    ))}
                    <div className="p-2 bg-slate-50 mt-1 border-t border-slate-100">
                      <button
                        onClick={() => {
                          setSelectedCategory(null);
                          navigateTo('/catalog');
                          setCategoriesDropdownOpen(false);
                        }}
                        className="w-full py-2 bg-slate-950 hover:bg-slate-800 text-amber-400 rounded-md text-xs font-bold text-center block transition-colors"
                      >
                        {isArabic ? 'عرض كتالوج المنتجات بالكامل (الفلاتر)' : 'Open Full Catalog & Advanced Filters'} →
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigateTo('/')}
                className={`px-3.5 py-3 text-sm font-medium transition-colors ${
                  currentPath === '/' ? 'text-amber-400 font-bold border-b-2 border-amber-400' : 'hover:text-amber-400'
                }`}
              >
                {isArabic ? 'الرئيسية' : 'Home'}
              </button>

              <button
                onClick={() => {
                  setSelectedCategory('mud-logging');
                  navigateTo('/catalog');
                }}
                className={`px-3.5 py-3 text-sm font-medium transition-colors ${
                  currentPath === '/catalog' ? 'hover:text-amber-400' : 'hover:text-amber-400'
                }`}
              >
                {isArabic ? 'أجهزة تسجيل سائل الحفر' : 'Mud Logging Tools'}
              </button>

              <button
                onClick={() => {
                  setSelectedCategory('gas-detection');
                  navigateTo('/catalog');
                }}
                className="px-3.5 py-3 text-sm font-medium hover:text-amber-400 transition-colors"
              >
                {isArabic ? 'كواشف الغازات ATEX' : 'ATEX Gas Detection'}
              </button>

              <button
                onClick={() => navigateTo('/about')}
                className={`px-3.5 py-3 text-sm font-medium transition-colors ${
                  currentPath === '/about' ? 'text-amber-400 font-bold border-b-2 border-amber-400' : 'hover:text-amber-400'
                }`}
              >
                {isArabic ? 'عن الشركة' : 'About Measuresoft'}
              </button>

              <button
                onClick={() => navigateTo('/qhse')}
                className={`px-3.5 py-3 text-sm font-medium transition-colors ${
                  currentPath === '/qhse' ? 'text-amber-400 font-bold border-b-2 border-amber-400' : 'hover:text-amber-400'
                }`}
              >
                {isArabic ? 'الجودة والسلامة (QHSE)' : 'QHSE & ISO'}
              </button>

              <button
                onClick={() => navigateTo('/contact')}
                className={`px-3.5 py-3 text-sm font-medium transition-colors ${
                  currentPath === '/contact' ? 'text-amber-400 font-bold border-b-2 border-amber-400' : 'hover:text-amber-400'
                }`}
              >
                {isArabic ? 'فروعنا ومعاملنا' : 'Branches & Calibration Base'}
              </button>

              <button
                onClick={() => navigateTo('/blog')}
                className={`px-3.5 py-3 text-sm font-medium transition-colors ${
                  currentPath === '/blog' ? 'text-amber-400 font-bold border-b-2 border-amber-400' : 'hover:text-amber-400'
                }`}
              >
                {isArabic ? 'مقالات وأخبار البترول' : 'Technical Insights'}
              </button>

              <button
                onClick={() => navigateTo('/careers')}
                className={`px-3.5 py-3 text-sm font-medium transition-colors ${
                  currentPath === '/careers' ? 'text-amber-400 font-bold border-b-2 border-amber-400' : 'hover:text-amber-400'
                }`}
              >
                {isArabic ? 'الوظائف' : 'Careers'}
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{isArabic ? 'معمل المعايرة نشط 24/7' : 'Cairo Calibration Lab Active'}</span>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 text-slate-100 p-4 space-y-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder={isArabic ? 'ابحث عن منتج، كود، أو غاز...' : 'Search product or model code...'}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 text-white rounded-lg py-2.5 ps-10 pe-4 text-sm border border-slate-700"
            />
            <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-3.5" />
          </form>

          <div className="space-y-1 font-medium">
            <button
              onClick={() => {
                navigateTo('/');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 text-start hover:bg-slate-800 rounded-lg flex items-center justify-between"
            >
              <span>{isArabic ? 'الرئيسية' : 'Home'}</span>
            </button>
            <button
              onClick={() => {
                setSelectedCategory(null);
                navigateTo('/catalog');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 text-start hover:bg-slate-800 rounded-lg flex items-center justify-between text-amber-400 font-bold"
            >
              <span>{isArabic ? 'كتالوج المنتجات بالكامل' : 'All Products Catalog'}</span>
              <span>→</span>
            </button>
            <div className="ps-3 space-y-1 border-s-2 border-slate-800 my-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    handleCategoryClick(cat.id);
                  }}
                  className="w-full py-2 text-start text-xs text-slate-300 hover:text-white flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{isArabic ? cat.nameAr : cat.name}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                navigateTo('/about');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 text-start hover:bg-slate-800 rounded-lg"
            >
              {isArabic ? 'عن الشركة وتاريخها' : 'About Measuresoft'}
            </button>
            <button
              onClick={() => {
                navigateTo('/qhse');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 text-start hover:bg-slate-800 rounded-lg"
            >
              {isArabic ? 'الجودة والسلامة والشهادات (QHSE)' : 'QHSE & ISO Certificates'}
            </button>
            <button
              onClick={() => {
                navigateTo('/contact');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 text-start hover:bg-slate-800 rounded-lg"
            >
              {isArabic ? 'الفروع (القاهرة، السويس، هيوستن، أبردين)' : 'Branches & Locations'}
            </button>
            <button
              onClick={() => {
                navigateTo('/blog');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 text-start hover:bg-slate-800 rounded-lg"
            >
              {isArabic ? 'المقالات والأخبار التقنية' : 'Blog & Technical Articles'}
            </button>
            <button
              onClick={() => {
                navigateTo('/careers');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 text-start hover:bg-slate-800 rounded-lg"
            >
              {isArabic ? 'الوظائف المتاحة' : 'Careers'}
            </button>
            <button
              onClick={() => {
                navigateTo('/admin');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 text-start bg-slate-800 text-amber-400 rounded-lg flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>{isArabic ? 'لوحة التحكم للمسؤولين' : 'Admin & Staff Portal'}</span>
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">{isArabic ? 'اللغة' : 'Language'}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  language === 'en' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  language === 'ar' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-white'
                }`}
              >
                عربي
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
