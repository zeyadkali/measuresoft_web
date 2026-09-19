import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  BookOpen,
  Tag
} from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { blogPosts, language, navigateTo } = useApp();
  const isArabic = language === 'ar';

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    if (selectedTag && !post.tags.includes(selectedTag)) {
      return false;
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const matchTitle = post.title.toLowerCase().includes(q) || post.titleAr.includes(q);
      const matchExcerpt = post.excerpt.toLowerCase().includes(q) || post.excerptAr.includes(q);
      if (!matchTitle && !matchExcerpt) return false;
    }
    return true;
  });

  const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags)));

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <Breadcrumbs
        items={[
          {
            label: isArabic ? 'المقالات والأبحاث البترولية' : 'Technical Blog & Insights',
            labelAr: 'المقالات والأبحاث البترولية'
          }
        ]}
      />

      <div className="bg-slate-950 text-white py-14 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              <BookOpen className="w-4 h-4" />
              <span>{isArabic ? 'المعرفة الهندسية لقطاع البترول' : 'Petroleum Engineering Knowledge Base'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              {isArabic ? 'مدونة Measuresoft للمعدات وكشف الغازات' : 'Technical Insights & Drilling Standards'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {isArabic
                ? 'أدلة هندسية، إرشادات معايرة أجهزة الحفر، معايير كشف غاز H2S، ومقالات تفصيلية بأقلام خبراء هندسة البترول في مصر.'
                : 'In-depth engineering articles on mud logging gas extraction, ATEX Zone 0 compliance, sensor recalibration protocols, and field safety.'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder={isArabic ? 'ابحث في المقالات...' : 'Search technical insights...'}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg py-2.5 ps-9 pe-3 text-xs focus:border-amber-500 focus:outline-hidden"
            />
            <Search className="w-4 h-4 text-slate-400 absolute start-3 top-3" />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedTag === null ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {isArabic ? 'كافة المواضيع' : 'All Topics'}
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedTag === tag ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-100'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              onClick={() => navigateTo(`/blog/${post.slug}`)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-amber-500 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 start-3">
                  <span className="text-[10px] font-bold bg-slate-950/90 text-amber-400 px-2.5 py-1 rounded shadow-md border border-slate-800">
                    {isArabic ? post.categoryAr : post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-slate-950 group-hover:text-amber-600 transition-colors line-clamp-2 mb-2 leading-snug">
                    {isArabic ? post.titleAr : post.title}
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {isArabic ? post.excerptAr : post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="text-slate-500 flex items-center gap-1.5 font-medium">
                    <User className="w-3.5 h-3.5 text-amber-600" />
                    <span>{post.author}</span>
                  </div>

                  <span className="text-amber-600 font-bold flex items-center gap-1">
                    <span>{isArabic ? 'قراءة التحليل' : 'Read Article'}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
