import { useState } from 'react';
import { Layers } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center p-6 text-center ${className}`}
      >
        <Layers className="w-8 h-8 text-[#B84226] mb-2 opacity-80" />
        <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
          {fallbackTitle || alt || 'Shree Balaji Bricks'}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-neutral-950 ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt || 'Shree Balaji Bricks'}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
}
