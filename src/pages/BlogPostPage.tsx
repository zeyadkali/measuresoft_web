import React from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Share2,
  FileText,
  Send,
  CheckCircle2,
  Award
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

interface BlogPostPageProps {
  slug: string;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  const { blogPosts, products, language, navigateTo, setActiveQuoteProduct } = useApp();
  const isArabic = language === 'ar';

  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <button
          onClick={() => navigateTo('/blog')}
          className="mt-4 px-6 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs"
        >
          Return to Blog
        </button>
      </div>
    );
  }

  const relatedProducts = products.slice(0, 2);

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumbs
        items={[
          { label: isArabic ? 'المدونة الهندسية' : 'Technical Blog', labelAr: 'المدونة الهندسية', path: '/blog' },
          { label: isArabic ? post.titleAr : post.title, labelAr: post.titleAr }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 md:p-10 mb-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-bold bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded font-mono">
              {isArabic ? post.categoryAr : post.category}
            </span>
            <span className="text-slate-400 font-mono flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-slate-400 font-mono flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 leading-tight">
            {isArabic ? post.titleAr : post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 pb-4 border-b border-slate-100 text-xs text-slate-600">
            <div className="w-9 h-9 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
              MS
            </div>
            <div>
              <div className="font-bold text-slate-900">{post.author}</div>
              <div className="text-[11px] text-slate-400">Measuresoft Egypt Upstream Technical Committee</div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden bg-slate-100 h-64 sm:h-80 md:h-96 border border-slate-200">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 pt-4">
            <p className="font-medium text-slate-900 text-base sm:text-lg border-s-4 border-amber-500 ps-4 py-1 bg-amber-50/50 rounded-e-lg">
              {isArabic ? post.excerptAr : post.excerpt}
            </p>

            <div className="whitespace-pre-line leading-relaxed text-justify">
              {isArabic ? post.contentAr : post.content}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 font-bold">{isArabic ? 'الوسوم:' : 'Tags:'}</span>
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert(isArabic ? 'تم نسخ رابط المقال إلى الحافظة' : 'Article URL copied to clipboard');
              }}
              className="text-xs font-bold text-slate-700 hover:text-amber-600 flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{isArabic ? 'مشاركة المقال' : 'Share Article'}</span>
            </button>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-slate-950">
                {isArabic ? 'المعدات والأجهزة المرتبطة بهذا المقال' : 'Instruments Mentioned in this Engineering Paper'}
              </h3>
              <button
                onClick={() => navigateTo('/catalog')}
                className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1"
              >
                <span>{isArabic ? 'عرض كل الكتالوج' : 'Browse Catalog'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};
