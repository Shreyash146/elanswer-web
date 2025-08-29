import React, { Suspense, lazy, ComponentType } from 'react';

// Loading component for code splitting
const LoadingSpinner = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white text-lg font-medium">Loading...</p>
    </div>
  </div>
);

// Enhanced loading component with skeleton
const PageLoadingSkeleton = () => (
  <div className="min-h-screen bg-black">
    {/* Navbar skeleton */}
    <div className="w-full h-16 bg-gray-900 animate-pulse"></div>
    
    {/* Hero section skeleton */}
    <div className="w-full py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="h-12 bg-gray-800 rounded animate-pulse"></div>
        <div className="h-6 bg-gray-800 rounded animate-pulse w-3/4"></div>
        <div className="flex gap-4">
          <div className="h-12 w-32 bg-gray-800 rounded animate-pulse"></div>
          <div className="h-12 w-32 bg-gray-800 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
    
    {/* Content skeleton */}
    <div className="w-full py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="h-8 bg-gray-800 rounded animate-pulse w-1/2"></div>
            <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-800 rounded animate-pulse w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Higher-order component for lazy loading with error boundary
export const withLazyLoading = <P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback: React.ComponentType = LoadingSpinner
) => {
  const LazyComponent = lazy(importFunc);
  
  return React.forwardRef<any, P>((props, ref) => (
    <Suspense fallback={<fallback />}>
      <LazyComponent {...props} ref={ref} />
    </Suspense>
  ));
};

// Preload function for critical routes
export const preloadComponent = (importFunc: () => Promise<any>) => {
  // Preload on mouse enter or focus
  const preload = () => {
    importFunc().catch(() => {
      // Silently handle preload errors
    });
  };
  
  return preload;
};

// Route-based code splitting
export const createLazyRoute = (importFunc: () => Promise<{ default: ComponentType<any> }>) => {
  return withLazyLoading(importFunc, PageLoadingSkeleton);
};

// Component-based code splitting for heavy components
export const createLazyComponent = <P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  customFallback?: React.ComponentType
) => {
  return withLazyLoading(importFunc, customFallback || LoadingSpinner);
};

// Bundle analyzer helper (development only)
export const analyzeBundleSize = () => {
  if (process.env.NODE_ENV === 'development') {
    // Log bundle information
    console.log('Bundle Analysis:', {
      chunks: performance.getEntriesByType('navigation'),
      resources: performance.getEntriesByType('resource').length,
      timing: performance.timing
    });
  }
};

// Intersection Observer for lazy loading components
export const useLazyComponentLoading = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

// Dynamic import with retry logic
export const dynamicImport = async <T,>(
  importFunc: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> => {
  for (let i = 0; i < retries; i++) {
    try {
      return await importFunc();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
    }
  }
  throw new Error('Dynamic import failed after retries');
};

export { LoadingSpinner, PageLoadingSkeleton };
