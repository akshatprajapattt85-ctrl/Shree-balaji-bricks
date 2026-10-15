import { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Share2,
  CheckCircle2,
  BookOpen,
  ChevronRight,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import type { BlogPost } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface BlogPostPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onRequestQuote: (productName?: string) => void;
}

export function BlogPostPage({ slug, onNavigate, onRequestQuote }: BlogPostPageProps) {
  const [copiedLink, setCopiedLink] = useState(false);

  // Clean slug
  const cleanSlug = slug.replace(/^\/blog\//, '').replace(/^\//, '');

  const post: BlogPost | undefined = BLOG_POSTS.find(
    (p) => p.slug === cleanSlug || p.slug === slug
  );

  if (!post) {
    return (
      <div className="pt-32 pb-24 bg-[#0D0D0E] min-h-screen text-center px-6">
        <div className="max-w-md mx-auto bg-[#141417] p-8 rounded-sm border border-neutral-800">
          <BookOpen className="w-12 h-12 text-[#DE5B3E] mx-auto mb-4" />
          <h1 className="text-2xl font-bold uppercase text-white font-display mb-2">
            Article Not Found
          </h1>
          <p className="text-sm text-neutral-400 mb-6">
            The article you are looking for does not exist or may have been relocated.
          </p>
          <button
            onClick={() => onNavigate('/blog')}
            type="button"
            className="px-5 py-2.5 text-xs font-semibold uppercase text-white bg-[#B84226] hover:bg-[#A3381E] rounded-sm cursor-pointer"
          >
            Back to Knowledge Hub
          </button>
        </div>
      </div>
    );
  }

  // Related posts
  const relatedPosts = BLOG_POSTS.filter(
    (p) => post.relatedSlugs?.includes(p.slug) || (p.category === post.category && p.slug !== post.slug)
  ).slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleTocClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article className="pt-24 pb-20 bg-[#0D0D0E] min-h-screen text-[#E6E4E2]">
      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 flex-wrap">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate('/blog')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            <span>Blog & Articles</span>
          </button>
          <span>/</span>
          <span className="text-[#DE5B3E] font-medium truncate max-w-[200px] sm:max-w-none">
            {post.category}
          </span>
        </nav>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-10">
        <div className="flex items-center justify-center gap-3 text-xs text-neutral-400 mb-4 flex-wrap">
          <span className="px-3 py-1 bg-[#B84226]/15 border border-[#B84226]/30 text-[#DE5B3E] font-semibold uppercase tracking-wider rounded-[2px]">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-neutral-500" />
            <span>{post.publishDate}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-neutral-500" />
            <span>{post.readTime}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white font-display leading-[1.15] mb-6">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
          {post.excerpt}
        </p>

        {/* Share & Author bar */}
        <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#B84226] text-white flex items-center justify-center font-bold text-[10px]">
              SB
            </div>
            <span>Published by <strong className="text-white font-normal">Shree Balaji Bricks Technical Desk</strong></span>
          </div>

          <button
            onClick={handleCopyLink}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-[#DE5B3E]" />
            <span>{copiedLink ? 'Link Copied!' : 'Share Article'}</span>
          </button>
        </div>
      </header>

      {/* Featured Hero Image */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 mb-12">
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
          <ImageWithFallback
            src={post.featuredImage}
            alt={post.imageAlt}
            className="w-full h-full object-cover"
            fallbackTitle={post.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-4 right-4 text-xs text-neutral-300 font-light drop-shadow">
            {post.imageAlt}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Table of Contents Box */}
        {post.toc && post.toc.length > 0 && (
          <aside className="p-6 sm:p-7 bg-[#141417] border border-neutral-800/90 rounded-sm shadow-lg">
            <div className="flex items-center gap-2 mb-4 text-[#DE5B3E]">
              <Layers className="w-4 h-4" />
              <h2 className="text-xs uppercase tracking-widest font-bold text-white font-display">
                Table of Contents
              </h2>
            </div>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {post.toc.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTocClick(item.id)}
                  type="button"
                  className="text-left py-1 text-neutral-400 hover:text-[#DE5B3E] transition-colors flex items-center gap-2 cursor-pointer group"
                >
                  <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-[#DE5B3E] shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              ))}
            </nav>
          </aside>
        )}

        {/* Dynamic Structured Sections */}
        {post.sections &&
          post.sections.map((section, idx) => (
            <section key={section.id || idx} id={section.id} className="space-y-5 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-display border-b border-neutral-800 pb-3">
                {section.title}
              </h2>

              {section.content.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              {/* Bulleted List if present */}
              {section.list && section.list.length > 0 && (
                <ul className="space-y-2.5 pt-2">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <ShieldCheck className="w-4 h-4 text-[#DE5B3E] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technical Comparison Table if present */}
              {section.table && (
                <div className="pt-3">
                  <div className="bg-[#141417] border border-neutral-800 rounded-sm overflow-hidden shadow-lg">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm text-neutral-300 border-collapse">
                        <thead>
                          <tr className="bg-[#1C1C22] border-b border-neutral-800 text-neutral-400 uppercase tracking-wider text-[11px]">
                            {section.table.headers.map((header, hIdx) => (
                              <th key={hIdx} className="py-3 px-4 font-semibold">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800/60 font-light">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-neutral-800/30 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`py-3.5 px-4 ${
                                    cIdx === 0 ? 'font-medium text-white' : 'text-neutral-300'
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Callout box if present */}
              {section.callout && (
                <div className="p-4 sm:p-5 bg-[#17171C] border-l-4 border-[#B84226] rounded-r-sm text-xs sm:text-sm text-neutral-300 flex items-start gap-3 my-4">
                  <Info className="w-5 h-5 text-[#DE5B3E] shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-light">{section.callout}</p>
                </div>
              )}
            </section>
          ))}

        {/* Answer Engine Optimization (AEO) Questions & Answers Section */}
        {post.qa && post.qa.length > 0 && (
          <section id="frequently-asked-questions" className="space-y-6 pt-4 scroll-mt-24">
            <div className="flex items-center gap-2 pb-2 border-b border-neutral-800">
              <HelpCircle className="w-5 h-5 text-[#DE5B3E]" />
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-display">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-5">
              {post.qa.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="p-6 sm:p-7 bg-[#17171C] border border-neutral-800/90 rounded-sm shadow-md space-y-3"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display uppercase tracking-wide flex items-start gap-3">
                    <span className="text-[#DE5B3E] font-mono text-sm mt-0.5">Q{fIdx + 1}.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Conclusion / Summary */}
        {post.conclusion && (
          <section id="conclusion" className="p-7 sm:p-8 bg-gradient-to-r from-[#17171C] to-[#1E1715] border border-neutral-800 rounded-sm space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#DE5B3E] font-semibold block">
              Key Takeaway
            </span>
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-white font-display">
              Summary & Practical Recommendation
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              {post.conclusion}
            </p>
          </section>
        )}

        {/* Author Bio Box */}
        <div className="p-6 bg-[#141417] border border-neutral-800 rounded-sm flex flex-col sm:flex-row items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-[#B84226] text-white flex items-center justify-center font-bold text-lg font-display shrink-0 shadow-md">
            SBB
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold uppercase text-white font-display">
              Shree Balaji Bricks Technical Editorial Desk
            </h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Authored and reviewed by our senior brick manufacturing technologists and logistics team. Shree Balaji Bricks supplies certified first-class red clay bricks, hydraulic fly ash bricks, concrete masonry blocks, and interlocking paving bricks across regional construction sites.
            </p>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="pt-8 border-t border-neutral-800/80 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white font-display">
                Related Building Articles
              </h2>
              <button
                onClick={() => onNavigate('/blog')}
                type="button"
                className="text-xs font-semibold uppercase tracking-wider text-[#DE5B3E] hover:text-white transition-colors cursor-pointer"
              >
                View all articles
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  onClick={() => onNavigate(`/blog/${related.slug}`)}
                  className="p-5 bg-[#141417] border border-neutral-800 rounded-sm hover:border-[#DE5B3E]/60 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#DE5B3E] tracking-wider block mb-2">
                      {related.category}
                    </span>
                    <h3 className="text-sm font-bold uppercase text-white font-display mb-2 group-hover:text-[#DE5B3E] transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light line-clamp-2 mb-4">
                      {related.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-3 border-t border-neutral-800/60">
                    <span>{related.readTime}</span>
                    <span className="inline-flex items-center gap-1 text-[#DE5B3E] font-medium group-hover:translate-x-0.5 transition-transform">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Bar */}
        <div className="p-8 sm:p-10 bg-gradient-to-r from-[#17171C] via-[#1F1715] to-[#17171C] border border-neutral-800 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#DE5B3E] font-semibold block">
              Ready to Order?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-display">
              Get an Instant Wholesale Brick Quote
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              Send us your project site address and required brick quantity for factory-direct delivered pricing.
            </p>
          </div>

          <button
            onClick={() => onRequestQuote()}
            type="button"
            className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#B84226] hover:bg-[#A3381E] rounded-sm shrink-0 cursor-pointer shadow-lg transition-all"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </article>
  );
}
