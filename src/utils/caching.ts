// Comprehensive caching strategies for performance optimization

// Cache configuration
export const CACHE_CONFIG = {
  // Static assets cache duration (1 year)
  STATIC_ASSETS: 31536000,
  // API responses cache duration (5 minutes)
  API_RESPONSES: 300,
  // Images cache duration (30 days)
  IMAGES: 2592000,
  // HTML pages cache duration (1 hour)
  HTML_PAGES: 3600,
  // CSS/JS cache duration (1 week)
  STYLES_SCRIPTS: 604800
};

// Browser cache management
export class BrowserCache {
  private static instance: BrowserCache;
  private cache: Map<string, { data: any; timestamp: number; ttl: number }> = new Map();

  public static getInstance(): BrowserCache {
    if (!BrowserCache.instance) {
      BrowserCache.instance = new BrowserCache();
    }
    return BrowserCache.instance;
  }

  // Set cache with TTL
  set(key: string, data: any, ttl: number = CACHE_CONFIG.API_RESPONSES): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttl * 1000 // Convert to milliseconds
    });
  }

  // Get from cache
  get(key: string): any | null {
    const item = this.cache.get(key);
    if (!item) return null;

    const now = Date.now();
    if (now - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  // Clear expired items
  cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key);
      }
    }
  }

  // Clear all cache
  clear(): void {
    this.cache.clear();
  }

  // Get cache size
  size(): number {
    return this.cache.size;
  }
}

// Local Storage cache with compression
export class LocalStorageCache {
  private static compress(data: any): string {
    return JSON.stringify(data);
  }

  private static decompress(data: string): any {
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }

  static set(key: string, data: any, ttl: number = CACHE_CONFIG.API_RESPONSES): void {
    try {
      const item = {
        data,
        timestamp: Date.now(),
        ttl: ttl * 1000
      };
      localStorage.setItem(key, this.compress(item));
    } catch (error) {
      console.warn('LocalStorage cache set failed:', error);
    }
  }

  static get(key: string): any | null {
    try {
      const item = this.decompress(localStorage.getItem(key) || '');
      if (!item) return null;

      const now = Date.now();
      if (now - item.timestamp > item.ttl) {
        localStorage.removeItem(key);
        return null;
      }

      return item.data;
    } catch (error) {
      console.warn('LocalStorage cache get failed:', error);
      return null;
    }
  }

  static remove(key: string): void {
    localStorage.removeItem(key);
  }

  static clear(): void {
    localStorage.clear();
  }

  static cleanup(): void {
    const now = Date.now();
    const keysToRemove: string[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;

      try {
        const item = this.decompress(localStorage.getItem(key) || '');
        if (item && item.timestamp && now - item.timestamp > item.ttl) {
          keysToRemove.push(key);
        }
      } catch {
        // Invalid item, remove it
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach(key => localStorage.removeItem(key));
  }
}

// HTTP cache headers utility
export const setCacheHeaders = (response: Response, cacheType: keyof typeof CACHE_CONFIG): Response => {
  const duration = CACHE_CONFIG[cacheType];
  
  response.headers.set('Cache-Control', `public, max-age=${duration}`);
  response.headers.set('Expires', new Date(Date.now() + duration * 1000).toUTCString());
  
  return response;
};

// Resource preloading
export const preloadResources = () => {
  // Preload critical CSS
  const criticalCSS = [
    '/assets/index.css'
  ];

  criticalCSS.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = 'style';
    document.head.appendChild(link);
  });

  // Preload critical fonts
  const criticalFonts = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  ];

  criticalFonts.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = 'style';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  // Preload critical images
  const criticalImages = [
    '/favicon.png',
    '/lovable-uploads/13161c05-4e61-4eec-9034-00e6fcdaead7.webp'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);
  });
};

// CDN configuration
export const CDN_CONFIG = {
  // Image CDN (you can replace with your preferred CDN)
  IMAGE_CDN: 'https://cdn.elanswer.com/images',
  // Static assets CDN
  STATIC_CDN: 'https://cdn.elanswer.com/static',
  // Video CDN
  VIDEO_CDN: 'https://cdn.elanswer.com/videos'
};

// CDN URL generator
export const getCDNUrl = (path: string, type: 'image' | 'static' | 'video' = 'static'): string => {
  // In development, use local paths
  if (process.env.NODE_ENV === 'development') {
    return path;
  }

  const cdnBase = {
    image: CDN_CONFIG.IMAGE_CDN,
    static: CDN_CONFIG.STATIC_CDN,
    video: CDN_CONFIG.VIDEO_CDN
  }[type];

  return `${cdnBase}${path}`;
};

// Initialize caching
export const initializeCaching = () => {
  // Preload critical resources
  preloadResources();

  // Setup periodic cache cleanup
  setInterval(() => {
    BrowserCache.getInstance().cleanup();
    LocalStorageCache.cleanup();
  }, 300000); // Every 5 minutes

  // Setup service worker for advanced caching
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  }
};

// Performance monitoring
export const monitorCachePerformance = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Cache Performance:', {
      browserCacheSize: BrowserCache.getInstance().size(),
      localStorageUsage: JSON.stringify(localStorage).length,
      serviceWorkerActive: navigator.serviceWorker?.controller ? 'Yes' : 'No'
    });
  }
};

export default { BrowserCache, LocalStorageCache, initializeCaching };
