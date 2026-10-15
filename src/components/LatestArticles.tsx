import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import { ImageWithFallback } from './ImageWithFallback';

interface LatestArticlesProps {
  onNavigate: (path: string) => void;
}

export function LatestArticles({ onNavigate }: LatestArticlesProps) {
  // Select top 3 featured articles
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog-preview" className="py-24 sm:py-32 bg-[#0E0E10] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#DE5B3E] font-semibold block mb-3">
              Knowledge & Insights
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white font-display">
              Latest Articles & Building Guides
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Expert advice on selecting quality bricks, understanding manufacturing standards, calculating project quantities, and estimating masonry costs.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/blog')}
            type="button"
            className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-[#B84226] border border-neutral-800 hover:border-[#B84226] rounded-sm transition-all duration-200 group cursor-pointer shadow-md"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Featured Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col bg-[#141417] border border-neutral-800/90 rounded-sm overflow-hidden hover:border-[#DE5B3E]/50 transition-all duration-300 group shadow-xl"
            >
              {/* Card Image */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white bg-[#B84226]/90 backdrop-blur-sm rounded-[2px] shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Meta: Date & Read Time */}
                  <div className="flex items-center gap-4 text-xs text-neutral-400 mb-3 font-light">
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
                    className="text-lg sm:text-xl font-bold uppercase text-white font-display mb-3 group-hover:text-[#DE5B3E] transition-colors leading-snug cursor-pointer"
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/blog/${post.slug}`)}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#DE5B3E] hover:text-white transition-colors cursor-pointer group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </button>

                  <span className="text-[11px] text-neutral-500 flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-neutral-600" />
                    <span>Technical Guide</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner to Knowledge Hub */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#141418] via-[#1A1414] to-[#141418] border border-neutral-800 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#B84226]/15 border border-[#B84226]/30 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-[#DE5B3E]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold uppercase text-white font-display">
                Need more building advice or brick price estimations?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light">
                Browse our complete collection of 10+ detailed masonry guides and calculation thumb rules.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('/blog')}
            type="button"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#B84226] hover:bg-[#A3381E] rounded-sm shrink-0 cursor-pointer shadow-lg transition-all"
          >
            Explore Knowledge Hub
          </button>
        </div>
      </div>
    </section>
  );
}
