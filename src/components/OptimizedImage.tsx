import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  quality?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PC9zdmc+',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate optimized image URLs with WebP support
  const getOptimizedSrc = (originalSrc: string, width?: number, quality?: number, format?: 'webp' | 'jpg' | 'png') => {
    // For external images or if no optimization service is available
    if (originalSrc.startsWith('http') || originalSrc.startsWith('//')) {
      return originalSrc;
    }

    // For local images, implement optimization logic
    let optimizedSrc = originalSrc;

    // Add width parameter if specified
    if (width) {
      const separator = optimizedSrc.includes('?') ? '&' : '?';
      optimizedSrc += `${separator}w=${width}`;
    }

    // Add quality parameter if specified
    if (quality && quality !== 85) {
      const separator = optimizedSrc.includes('?') ? '&' : '?';
      optimizedSrc += `${separator}q=${quality}`;
    }

    // Add format parameter for WebP support
    if (format) {
      const separator = optimizedSrc.includes('?') ? '&' : '?';
      optimizedSrc += `${separator}f=${format}`;
    }

    return optimizedSrc;
  };

  // Check WebP support
  const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  // Generate srcSet for responsive images with WebP support
  const generateSrcSet = (src: string, useWebP: boolean = false) => {
    const breakpoints = [320, 640, 768, 1024, 1280, 1920];
    const format = useWebP ? 'webp' : undefined;

    return breakpoints
      .map(bp => `${getOptimizedSrc(src, bp, quality, format)} ${bp}w`)
      .join(', ');
  };

  // Generate WebP source element
  const generateWebPSource = (src: string) => {
    if (!supportsWebP()) return null;

    return (
      <source
        srcSet={generateSrcSet(src, true)}
        sizes={sizes}
        type="image/webp"
      />
    );
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ 
            backgroundImage: `url(${placeholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Main Image with WebP Support */}
      {(isInView || priority) && (
        <picture>
          {/* WebP source for modern browsers */}
          {generateWebPSource(src)}

          {/* Fallback image */}
          <img
            src={error ? placeholder : getOptimizedSrc(src, width, quality)}
            srcSet={error ? undefined : generateSrcSet(src)}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`
              transition-opacity duration-300
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
              ${className}
            `}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
        </picture>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
