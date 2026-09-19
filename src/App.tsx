import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { QhsePage } from './pages/QhsePage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { QuoteRequestPage } from './pages/QuoteRequestPage';
import { CareersPage } from './pages/CareersPage';
import { AdminPage } from './pages/AdminPage';
import { QuoteDrawer } from './components/QuoteDrawer';
import { FastQuoteModal } from './components/FastQuoteModal';
import { BrochureModal } from './components/BrochureModal';

const AppContent: React.FC = () => {
  const { currentPath, language } = useApp();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  const renderRoute = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }

    if (currentPath.startsWith('/catalog')) {
      return <CatalogPage />;
    }

    if (currentPath.startsWith('/products/')) {
      const slug = currentPath.replace('/products/', '');
      return <ProductDetailPage slug={slug} />;
    }

    if (currentPath.startsWith('/about')) {
      return <AboutPage />;
    }

    if (currentPath.startsWith('/qhse')) {
      return <QhsePage />;
    }

    if (currentPath.startsWith('/contact')) {
      return <ContactPage />;
    }

    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      return <BlogPostPage slug={slug} />;
    }

    if (currentPath.startsWith('/blog')) {
      return <BlogPage />;
    }

    if (currentPath.startsWith('/quote')) {
      return <QuoteRequestPage />;
    }

    if (currentPath.startsWith('/careers')) {
      return <CareersPage />;
    }

    if (currentPath.startsWith('/admin')) {
      return <AdminPage />;
    }

    return <HomePage />;
  };

  return (
    <div
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className={`min-h-screen flex flex-col bg-white text-slate-900 ${
        language === 'ar' ? 'font-arabic' : 'font-sans'
      }`}
    >
      <Navbar />
      <main className="flex-1">
        {renderRoute()}
      </main>
      <Footer />

      <QuoteDrawer />
      <FastQuoteModal />
      <BrochureModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
