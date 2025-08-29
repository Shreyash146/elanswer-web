import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

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

    // Optimize images with Intersection Observer
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src!;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    // Defer non-critical JavaScript
    const deferNonCriticalJS = () => {
      // Defer analytics and tracking scripts
      const scripts = [
        // Add your analytics scripts here
        // 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
      ];

      scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      });
    };

    // Optimize CSS delivery
    const optimizeCSS = () => {
      // Load non-critical CSS asynchronously
      const nonCriticalCSS = [
        // Add non-critical CSS files here
      ];

      nonCriticalCSS.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = 'style';
        link.onload = function(this: HTMLLinkElement) {
          this.onload = null;
          this.rel = 'stylesheet';
        };
        document.head.appendChild(link);
      });
    };

    // Service Worker registration for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
              console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
              console.log('SW registration failed: ', registrationError);
            });
        });
      }
    };

    // Resource hints for better performance
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'cal.com',
        'tally.so'
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical origins
      const criticalOrigins = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      criticalOrigins.forEach(origin => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = origin;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Reduce layout shifts
    const reduceLayoutShifts = () => {
      // Add aspect ratio containers for images
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        const imageElement = img as HTMLImageElement;
        if (imageElement.naturalWidth && imageElement.naturalHeight) {
          const aspectRatio = imageElement.naturalWidth / imageElement.naturalHeight;
          if (aspectRatio) {
            imageElement.style.aspectRatio = aspectRatio.toString();
          }
        }
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    deferNonCriticalJS();
    optimizeCSS();
    addResourceHints();
    
    // Delay non-critical optimizations
    setTimeout(() => {
      registerServiceWorker();
      reduceLayoutShifts();
    }, 1000);

    // Cleanup function
    return () => {
      // Cleanup observers if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
