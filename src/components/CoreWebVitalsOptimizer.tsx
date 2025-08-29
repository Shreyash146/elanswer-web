import { useEffect } from 'react';

// Core Web Vitals optimization component
const CoreWebVitalsOptimizer = () => {
  useEffect(() => {
    // Optimize Largest Contentful Paint (LCP)
    const optimizeLCP = () => {
      // Preload hero image
      const heroImage = '/lovable-uploads/13161c05-4e61-4eec-9034-00e6fcdaead7.webp';
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = heroImage;
      link.as = 'image';
      document.head.appendChild(link);

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Remove unused CSS (in production, this would be done at build time)
      if (process.env.NODE_ENV === 'production') {
        // Add critical CSS inline
        const criticalCSS = `
          .hero-section { display: block; }
          .navbar { position: fixed; top: 0; z-index: 50; }
          .loading-spinner { animation: spin 1s linear infinite; }
        `;
        const style = document.createElement('style');
        style.textContent = criticalCSS;
        document.head.appendChild(style);
      }
    };

    // Optimize First Input Delay (FID)
    const optimizeFID = () => {
      // Defer non-critical JavaScript
      const deferredScripts = [
        // Add non-critical scripts here
      ];

      deferredScripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);
      });

      // Use passive event listeners for better performance
      const addPassiveListeners = () => {
        const passiveEvents = ['touchstart', 'touchmove', 'wheel'];
        passiveEvents.forEach(event => {
          document.addEventListener(event, () => {}, { passive: true });
        });
      };

      // Delay non-critical operations
      setTimeout(addPassiveListeners, 100);
    };

    // Optimize Cumulative Layout Shift (CLS)
    const optimizeCLS = () => {
      // Add aspect ratios to prevent layout shifts
      const addAspectRatios = () => {
        const images = document.querySelectorAll('img:not([width]):not([height])');
        images.forEach((img: HTMLImageElement) => {
          // Set default aspect ratio to prevent layout shift
          if (!img.style.aspectRatio) {
            img.style.aspectRatio = '16/9'; // Default ratio
          }
        });
      };

      // Reserve space for dynamic content
      const reserveSpace = () => {
        const dynamicElements = document.querySelectorAll('[data-dynamic]');
        dynamicElements.forEach((element: HTMLElement) => {
          if (!element.style.minHeight) {
            element.style.minHeight = '200px'; // Reserve minimum space
          }
        });
      };

      // Run after DOM is loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          addAspectRatios();
          reserveSpace();
        });
      } else {
        addAspectRatios();
        reserveSpace();
      }
    };

    // Optimize First Contentful Paint (FCP)
    const optimizeFCP = () => {
      // Inline critical CSS (this would typically be done at build time)
      const criticalCSS = `
        body { margin: 0; font-family: Inter, sans-serif; }
        .bg-black { background-color: #000; }
        .text-white { color: #fff; }
        .min-h-screen { min-height: 100vh; }
      `;

      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.insertBefore(style, document.head.firstChild);

      // Preconnect to external domains
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://cal.com',
        'https://tally.so'
      ];

      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Monitor Core Web Vitals
    const monitorWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        const sendToAnalytics = (metric: any) => {
          // In production, send to your analytics service
          if (process.env.NODE_ENV === 'development') {
            console.log('Core Web Vital:', metric);
          }
          
          // Example: Send to Google Analytics
          // gtag('event', metric.name, {
          //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          //   event_category: 'Web Vitals',
          //   event_label: metric.id,
          //   non_interaction: true,
          // });
        };

        getCLS(sendToAnalytics);
        getFID(sendToAnalytics);
        getFCP(sendToAnalytics);
        getLCP(sendToAnalytics);
        getTTFB(sendToAnalytics);
      } catch (error) {
        console.warn('Web Vitals monitoring failed:', error);
      }
    };

    // Resource hints for better performance
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'cal.com',
        'tally.so',
        'res.cloudinary.com'
      ];

      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Prefetch critical pages
      const prefetchPages = [
        '/about',
        '/contact',
        '/blog'
      ];

      // Delay prefetching to not interfere with critical loading
      setTimeout(() => {
        prefetchPages.forEach(page => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = page;
          document.head.appendChild(link);
        });
      }, 2000);
    };

    // Initialize optimizations
    optimizeLCP();
    optimizeFID();
    optimizeCLS();
    optimizeFCP();
    addResourceHints();
    
    // Monitor performance
    setTimeout(monitorWebVitals, 1000);

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default CoreWebVitalsOptimizer;
