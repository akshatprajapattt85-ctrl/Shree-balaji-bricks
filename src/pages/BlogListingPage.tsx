import { useState, useMemo } from 'react';
import { ArrowLeft, Search, Calendar, Clock, ArrowRight, BookOpen, Filter, X } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import type { BlogPost } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface BlogListingPageProps {
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
}

export function BlogListingPage({ onNavigate, onRequestQuote }: BlogListingPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories list
  const categories = [
    'All',
    'Quality & Selection',
    'House Construction',
    'Brick Pricing & Cost',
    'Brick Types & Materials',
  ];

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.mainKeyword.toLowerCase().includes(q) ||
        post.relatedKeywords.some((k) => k.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost: BlogPost = BLOG_POSTS[0];

  return (
    <div className="pt-24 pb-20 bg-[#0D0D0E] min-h-screen text-[#E6E4E2]">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-[#DE5B3E] font-medium">Blog & Articles</span>
        </div>
      </div>

      {/* Main Hub Header */}
      <header className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#B84226]/10 border border-[#B84226]/30 text-xs font-semibold uppercase tracking-widest text-[#DE5B3E]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Shree Balaji Bricks Knowledge Hub</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white font-display leading-tight mb-6">
          Brick & Construction Knowledge Hub
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
          Welcome to the authoritative knowledge repository by <strong className="text-white font-normal">Shree Balaji Bricks</strong>. Explore engineering guides, physical quality testing methods, house construction quantity estimates, brick price dynamics, and technical masonry advice curated for homebuilders, architects, and civil contractors.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Search and Category Filter Toolbar */}
        <div className="bg-[#141417] border border-neutral-800 rounded-sm p-4 sm:p-6 mb-12 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, brick type, or keyword..."
                className="w-full pl-10 pr-9 py-2.5 bg-[#0D0D0E] border border-neutral-800 focus:border-[#DE5B3E] text-white text-xs sm:text-sm rounded-sm outline-none transition-colors placeholder:text-neutral-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-medium flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5 text-[#DE5B3E]" />
                <span className="hidden sm:inline">Category:</span>
              </span>
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-[2px] transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#B84226] text-white shadow-sm'
                        : 'bg-[#1C1C22] text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800/80'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Top Post (shown when not filtering by specific query) */}
        {selectedCategory === 'All' && !searchQuery && (
          <div className="mb-14">
            <div className="p-6 sm:p-8 bg-gradient-to-r from-[#17171C] via-[#1A1616] to-[#17171C] border border-neutral-800/90 rounded-sm shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div
                  onClick={() => onNavigate(`/blog/${featuredPost.slug}`)}
                  className="lg:col-span-7 aspect-[16/10] rounded-sm overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer group relative"
                >
                  <ImageWithFallback
                    src={featuredPost.featuredImage}
                    alt={featuredPost.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fallbackTitle={featuredPost.title}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-[#B84226] rounded-[2px] shadow-md">
                      Featured Pillar Guide
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                      <span className="px-2.5 py-0.5 bg-neutral-800 text-[#DE5B3E] font-medium rounded-[2px]">
                        {featuredPost.category}
                      </span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <h2
                      onClick={() => onNavigate(`/blog/${featuredPost.slug}`)}
                      className="text-2xl sm:text-3xl font-bold uppercase text-white font-display mb-4 hover:text-[#DE5B3E] transition-colors leading-tight cursor-pointer"
                    >
                      {featuredPost.title}
                    </h2>

                    <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(`/blog/${featuredPost.slug}`)}
                      type="button"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#B84226] hover:bg-[#A3381E] rounded-sm cursor-pointer shadow-md transition-all group"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <span className="text-xs text-neutral-400">{featuredPost.publishDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-neutral-800/80">
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white font-display">
            {selectedCategory === 'All' ? 'All Articles' : selectedCategory}{' '}
            <span className="text-sm text-[#DE5B3E] font-normal">({filteredPosts.length})</span>
          </h2>
          {searchQuery && (
            <span className="text-xs text-neutral-400">
              Matching <strong className="text-white">"{searchQuery}"</strong>
            </span>
          )}
        </div>

        {/* Articles Responsive Grid */}
        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center bg-[#141417] border border-neutral-800 rounded-sm">
            <BookOpen className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white uppercase font-display mb-2">No matching articles found</h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto mb-6">
              We couldn't find any articles matching your search query. Try searching for "red clay", "price", "house", or clear your filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 text-xs font-semibold uppercase text-white bg-[#B84226] rounded-sm cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col bg-[#141417] border border-neutral-800/90 rounded-sm overflow-hidden hover:border-[#DE5B3E]/60 transition-all duration-300 group shadow-xl"
              >
                {/* Image */}
                <div
                  onClick={() => onNavigate(`/blog/${post.slug}`)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 cursor-pointer"
                >
                  <ImageWithFallback
                    src={post.featuredImage}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fallbackTitle={post.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white bg-[#B84226]/90 backdrop-blur-sm rounded-[2px] shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Meta: Date & Read Time */}
                    <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3 font-light">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                        <span>{post.publishDate}</span>
                      </span>
                      <span className="inline-block w-1 h-1 rounded-full bg-neutral-600" />
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-neutral-500" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onNavigate(`/blog/${post.slug}`)}
                      className="text-lg font-bold uppercase text-white font-display mb-3 group-hover:text-[#DE5B3E] transition-colors leading-snug cursor-pointer"
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(`/blog/${post.slug}`)}
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#DE5B3E] hover:text-white transition-colors cursor-pointer group/link"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </button>

                    <span className="text-[11px] text-neutral-500">IS Standards</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom CTA Block */}
        <div className="mt-20 p-8 sm:p-10 bg-gradient-to-r from-[#17171C] via-[#1E1513] to-[#17171C] border border-neutral-800 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#DE5B3E] font-semibold block">
              Wholesale Supply & Project Support
            </span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-display">
              Have Questions About Your Construction Project?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Our technical brick experts assist builders, contractors, and individual homeowners in calculating exact brick quantities, choosing between clay and fly ash units, and scheduling bulk delivered truckloads.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onRequestQuote}
              type="button"
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#B84226] hover:bg-[#A3381E] rounded-sm cursor-pointer shadow-lg transition-all"
            >
              Request a Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
