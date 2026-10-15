import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import type { GalleryItem } from '../types';
import { GalleryLightbox } from './GalleryLightbox';
import { ImageWithFallback } from './ImageWithFallback';

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Bricks & Texture', 'Architecture', 'Manufacturing', 'Paving & Site'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleOpenLightbox = (item: GalleryItem) => {
    const index = filteredItems.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0E0E10] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B84226] block mb-2">
              Visual Archive
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white font-display">
              OUR WORLD OF BRICKS
            </h2>
          </div>

          {/* Clean Segmented Interactive Category Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                type="button"
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-sm transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === category
                    ? 'bg-[#B84226] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => {
            // Vary aspect and spans for dynamic editorial gallery rhythm
            const isWide = index === 0 || index === 4;
            const aspectClass = item.aspect === 'landscape' ? 'aspect-[16/10]' : 'aspect-[4/5]';

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className={`group relative overflow-hidden rounded-sm bg-neutral-900 border border-neutral-800/80 cursor-pointer ${
                  isWide ? 'sm:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div className={`w-full ${aspectClass}`}>
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fallbackTitle={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Subtle Hover Gradient & Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#DE5B3E] font-medium block">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white font-display">
                        {item.title}
                      </h3>
                    </div>
                    <div className="p-2.5 rounded-full bg-white/10 text-white backdrop-blur-xs">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
}
