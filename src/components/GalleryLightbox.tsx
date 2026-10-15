import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Top Bar with Title and Close */}
      <div
        className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <span className="text-xs uppercase tracking-widest text-[#B84226] font-semibold block">
            {currentItem.category}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white font-display">
            {currentItem.title}
          </h3>
        </div>

        <button
          onClick={onClose}
          type="button"
          aria-label="Close lightbox"
          className="p-3 text-neutral-400 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image View */}
      <div
        className="relative max-w-6xl max-h-[80vh] flex items-center justify-center my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.image}
          alt={currentItem.title}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[78vh] object-contain rounded-xs shadow-2xl border border-neutral-800"
        />
      </div>

      {/* Navigation Controls */}
      {items.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + items.length) % items.length);
            }}
            type="button"
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-full transition-colors cursor-pointer z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % items.length);
            }}
            type="button"
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 rounded-full transition-colors cursor-pointer z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Counter Bottom */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-400 tracking-widest font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
}
