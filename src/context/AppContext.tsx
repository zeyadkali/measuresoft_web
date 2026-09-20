import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Language,
  Product,
  Category,
  Subcategory,
  Brand,
  QuoteRequest,
  QuoteCartItem,
  BlogPost,
  QuoteStatus,
  ProductFile
} from '../types';
import {
  INITIAL_PRODUCTS,
  INITIAL_CATEGORIES,
  INITIAL_SUBCATEGORIES,
  INITIAL_BRANDS,
  INITIAL_BLOG_POSTS
} from '../data/initialData';
import { sanitizeText } from '../lib/sanitize';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPath: string;
  navigateTo: (path: string) => void;
  products: Product[];
  categories: Category[];
  subcategories: Subcategory[];
  brands: Brand[];
  blogPosts: BlogPost[];
  quoteRequests: QuoteRequest[];
  quoteCart: QuoteCartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToQuoteCart: (product: Product, quantity?: number, targetGas?: string, projectNote?: string) => void;
  removeFromQuoteCart: (productId: string) => void;
  updateQuoteCartQuantity: (productId: string, quantity: number) => void;
  clearQuoteCart: () => void;
  submitQuoteRequest: (clientData: {
    clientName: string;
    companyName: string;
    email: string;
    phone: string;
    country: string;
    rigOrProjectLocation: string;
    urgency: 'immediate' | '1-2_weeks' | '1_month' | 'planning_budget';
    additionalNotes: string;
    customItems?: QuoteCartItem[];
  }) => Promise<QuoteRequest>;
  updateQuoteStatus: (quoteId: string, status: QuoteStatus) => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  activeBrochureFile: { product: Product; file: ProductFile } | null;
  setActiveBrochureFile: (data: { product: Product; file: ProductFile } | null) => void;
  activeQuoteProduct: Product | null;
  setActiveQuoteProduct: (product: Product | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (catId: string | null) => void;
  selectedBrand: string | null;
  setSelectedBrand: (brandId: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_PRODUCTS_KEY = 'measuresoft_products_v1';
const LOCAL_STORAGE_QUOTES_KEY = 'measuresoft_quotes_v1';
const LOCAL_STORAGE_LANG_KEY = 'measuresoft_language_v1';
const LOCAL_STORAGE_CART_KEY = 'measuresoft_cart_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);
    return saved === 'ar' ? 'ar' : 'en';
  });

  const currentPath = location.pathname;

  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_PRODUCTS_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch {
        return INITIAL_PRODUCTS;
      }
    }
    return INITIAL_PRODUCTS;
  });

  const [categories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [subcategories] = useState<Subcategory[]>(INITIAL_SUBCATEGORIES);
  const [brands] = useState<Brand[]>(INITIAL_BRANDS);
  const [blogPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);

  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_QUOTES_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  const [quoteCart, setQuoteCart] = useState<QuoteCartItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeBrochureFile, setActiveBrochureFile] = useState<{ product: Product; file: ProductFile } | null>(null);
  const [activeQuoteProduct, setActiveQuoteProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [language]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PRODUCTS_KEY, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_QUOTES_KEY, JSON.stringify(quoteRequests));
  }, [quoteRequests]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(quoteCart));
  }, [quoteCart]);

  const navigateTo = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const addToQuoteCart = (product: Product, quantity = 1, targetGas?: string, projectNote?: string) => {
    setQuoteCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          targetGas: targetGas || updated[existingIndex].targetGas,
          projectNote: projectNote || updated[existingIndex].projectNote
        };
        return updated;
      }
      return [...prevCart, { product, quantity, targetGas, projectNote }];
    });
    setIsCartOpen(true);
  };

  const removeFromQuoteCart = (productId: string) => {
    setQuoteCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuoteCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromQuoteCart(productId);
      return;
    }
    setQuoteCart(prev =>
      prev.map(item => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearQuoteCart = () => {
    setQuoteCart([]);
  };

  const submitQuoteRequest = async (clientData: {
    clientName: string;
    companyName: string;
    email: string;
    phone: string;
    country: string;
    rigOrProjectLocation: string;
    urgency: 'immediate' | '1-2_weeks' | '1_month' | 'planning_budget';
    additionalNotes: string;
    customItems?: QuoteCartItem[];
  }): Promise<QuoteRequest> => {
    const itemsToQuote = clientData.customItems || quoteCart;
    const serial = Math.floor(1000 + Math.random() * 9000);
    const quoteNumber = `MS-RFQ-${new Date().getFullYear()}-${serial}`;

    const newRequest: QuoteRequest = {
      id: `quote-${Date.now()}`,
      quoteNumber,
      clientName: sanitizeText(clientData.clientName, 100),
      companyName: sanitizeText(clientData.companyName, 120),
      email: sanitizeText(clientData.email, 120),
      phone: sanitizeText(clientData.phone, 30),
      country: sanitizeText(clientData.country, 60),
      rigOrProjectLocation: sanitizeText(clientData.rigOrProjectLocation, 150),
      urgency: clientData.urgency,
      additionalNotes: sanitizeText(clientData.additionalNotes, 1500),
      items: itemsToQuote.map(item => ({
        productId: item.product.id,
        productName: item.product.name,
        productCode: item.product.code,
        quantity: Math.max(1, Math.min(item.quantity, 999)),
        targetGas: item.targetGas ? sanitizeText(item.targetGas, 50) : undefined,
        projectNote: item.projectNote ? sanitizeText(item.projectNote, 300) : undefined
      })),
      status: 'new',
      submittedAt: new Date().toISOString()
    };

    setQuoteRequests(prev => [newRequest, ...prev]);
    if (!clientData.customItems) {
      clearQuoteCart();
    }
    return newRequest;
  };

  const updateQuoteStatus = (quoteId: string, status: QuoteStatus) => {
    setQuoteRequests(prev =>
      prev.map(q => (q.id === quoteId ? { ...q, status } : q))
    );
  };

  const addProduct = (newProduct: Product) => {
    setProducts(prev => [newProduct, ...prev]);
  };

  const updateProduct = (updated: Product) => {
    setProducts(prev => prev.map(p => (p.id === updated.id ? updated : p)));
  };

  const deleteProduct = (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        currentPath,
        navigateTo,
        products,
        categories,
        subcategories,
        brands,
        blogPosts,
        quoteRequests,
        quoteCart,
        isCartOpen,
        setIsCartOpen,
        addToQuoteCart,
        removeFromQuoteCart,
        updateQuoteCartQuantity,
        clearQuoteCart,
        submitQuoteRequest,
        updateQuoteStatus,
        addProduct,
        updateProduct,
        deleteProduct,
        activeBrochureFile,
        setActiveBrochureFile,
        activeQuoteProduct,
        setActiveQuoteProduct,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedBrand,
        setSelectedBrand
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
