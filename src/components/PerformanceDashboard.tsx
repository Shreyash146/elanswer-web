import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, Eye, Gauge } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  loadTime: number;
  cacheHitRate: number;
  bundleSize: number;
}

// Performance monitoring dashboard (development only)
const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const collectMetrics = async () => {
      try {
        // Get navigation timing
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        // Get Core Web Vitals with error handling
        const webVitals: Partial<PerformanceMetrics> = {};

        try {
          const webVitalsModule = await import('web-vitals');
          const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitalsModule;

          if (getCLS && typeof getCLS === 'function') {
            getCLS((metric) => { webVitals.cls = metric.value; });
          }
          if (getFID && typeof getFID === 'function') {
            getFID((metric) => { webVitals.fid = metric.value; });
          }
          if (getFCP && typeof getFCP === 'function') {
            getFCP((metric) => { webVitals.fcp = metric.value; });
          }
          if (getLCP && typeof getLCP === 'function') {
            getLCP((metric) => { webVitals.lcp = metric.value; });
          }
          if (getTTFB && typeof getTTFB === 'function') {
            getTTFB((metric) => { webVitals.ttfb = metric.value; });
          }
        } catch (webVitalsError) {
          console.warn('Web Vitals library not available:', webVitalsError);
          // Set default values
          webVitals.cls = 0;
          webVitals.fid = 0;
          webVitals.fcp = 0;
          webVitals.lcp = 0;
          webVitals.ttfb = 0;
        }

        // Calculate additional metrics
        const loadTime = navigation.loadEventEnd - navigation.navigationStart;
        const bundleSize = performance.getEntriesByType('resource')
          .filter(entry => entry.name.includes('.js'))
          .reduce((total, entry) => total + (entry as any).transferSize || 0, 0);

        // Simulate cache hit rate (in real app, get from service worker)
        const cacheHitRate = Math.random() * 100;

        setTimeout(() => {
          setMetrics({
            lcp: webVitals.lcp || 0,
            fid: webVitals.fid || 0,
            cls: webVitals.cls || 0,
            fcp: webVitals.fcp || 0,
            ttfb: webVitals.ttfb || 0,
            loadTime,
            cacheHitRate,
            bundleSize: Math.round(bundleSize / 1024) // Convert to KB
          });
        }, 2000);

      } catch (error) {
        console.warn('Performance metrics collection failed:', error);
      }
    };

    collectMetrics();

    // Toggle visibility with keyboard shortcut
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  // Don't render in production
  if (process.env.NODE_ENV !== 'development' || !isVisible || !metrics) {
    return null;
  }

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatTime = (ms: number) => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <Activity className="w-4 h-4" />
          Performance
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-sm"
        >
          ✕
        </button>
      </div>

      <div className="space-y-2 text-sm">
        {/* Core Web Vitals */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-800 p-2 rounded">
            <div className="flex items-center gap-1 mb-1">
              <Eye className="w-3 h-3 text-blue-400" />
              <span className="text-gray-300">LCP</span>
            </div>
            <div className={`font-mono ${getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}`}>
              {formatTime(metrics.lcp)}
            </div>
          </div>

          <div className="bg-gray-800 p-2 rounded">
            <div className="flex items-center gap-1 mb-1">
              <Zap className="w-3 h-3 text-yellow-400" />
              <span className="text-gray-300">FID</span>
            </div>
            <div className={`font-mono ${getScoreColor(metrics.fid, { good: 100, poor: 300 })}`}>
              {formatTime(metrics.fid)}
            </div>
          </div>

          <div className="bg-gray-800 p-2 rounded">
            <div className="flex items-center gap-1 mb-1">
              <Gauge className="w-3 h-3 text-purple-400" />
              <span className="text-gray-300">CLS</span>
            </div>
            <div className={`font-mono ${getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}`}>
              {metrics.cls.toFixed(3)}
            </div>
          </div>

          <div className="bg-gray-800 p-2 rounded">
            <div className="flex items-center gap-1 mb-1">
              <Clock className="w-3 h-3 text-green-400" />
              <span className="text-gray-300">FCP</span>
            </div>
            <div className={`font-mono ${getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}`}>
              {formatTime(metrics.fcp)}
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="border-t border-gray-700 pt-2 space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-400">TTFB:</span>
            <span className={`font-mono ${getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}`}>
              {formatTime(metrics.ttfb)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Load Time:</span>
            <span className="text-white font-mono">
              {formatTime(metrics.loadTime)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Bundle Size:</span>
            <span className="text-white font-mono">
              {metrics.bundleSize}KB
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Cache Hit:</span>
            <span className="text-green-400 font-mono">
              {metrics.cacheHitRate.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-700 text-xs text-gray-500">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceDashboard;
