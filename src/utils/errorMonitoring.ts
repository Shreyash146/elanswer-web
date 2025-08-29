// Error monitoring and reporting utility
interface ErrorReport {
  message: string;
  stack?: string;
  url: string;
  userAgent: string;
  timestamp: string;
  userId?: string;
  additionalData?: any;
}

class ErrorMonitoring {
  private static instance: ErrorMonitoring;
  private isEnabled: boolean = true;
  private apiEndpoint: string = '/api/errors'; // You'll need to implement this endpoint

  private constructor() {
    this.setupGlobalErrorHandlers();
  }

  public static getInstance(): ErrorMonitoring {
    if (!ErrorMonitoring.instance) {
      ErrorMonitoring.instance = new ErrorMonitoring();
    }
    return ErrorMonitoring.instance;
  }

  private setupGlobalErrorHandlers(): void {
    // Handle JavaScript errors
    window.addEventListener('error', (event) => {
      this.reportError({
        message: event.message,
        stack: event.error?.stack,
        url: event.filename || window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        additionalData: {
          lineno: event.lineno,
          colno: event.colno,
          type: 'javascript'
        }
      });
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        additionalData: {
          type: 'promise_rejection',
          reason: event.reason
        }
      });
    });

    // Handle React errors (if using error boundaries)
    this.setupReactErrorHandler();
  }

  private setupReactErrorHandler(): void {
    // This will be used by React Error Boundaries
    (window as any).__ELANSWER_ERROR_HANDLER__ = (error: Error, errorInfo: any) => {
      this.reportError({
        message: error.message,
        stack: error.stack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        additionalData: {
          type: 'react',
          componentStack: errorInfo.componentStack
        }
      });
    };
  }

  public reportError(errorReport: ErrorReport): void {
    if (!this.isEnabled) return;

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Report:', errorReport);
    }

    // Send to monitoring service (implement your preferred service)
    this.sendToMonitoringService(errorReport);
  }

  private async sendToMonitoringService(errorReport: ErrorReport): Promise<void> {
    try {
      // Option 1: Send to your own API
      await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport)
      });

      // Option 2: Send to external service (Sentry, LogRocket, etc.)
      // Example for Sentry:
      // Sentry.captureException(new Error(errorReport.message), {
      //   extra: errorReport.additionalData,
      //   tags: { url: errorReport.url }
      // });

    } catch (error) {
      // Fail silently to avoid infinite error loops
      console.warn('Failed to send error report:', error);
    }
  }

  public setUserId(userId: string): void {
    // Set user context for error reports
    (window as any).__ELANSWER_USER_ID__ = userId;
  }

  public addBreadcrumb(message: string, category: string = 'navigation'): void {
    // Add breadcrumb for debugging
    const breadcrumb = {
      message,
      category,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };

    // Store breadcrumbs in sessionStorage (limit to last 50)
    const breadcrumbs = JSON.parse(sessionStorage.getItem('error_breadcrumbs') || '[]');
    breadcrumbs.push(breadcrumb);
    
    if (breadcrumbs.length > 50) {
      breadcrumbs.shift();
    }
    
    sessionStorage.setItem('error_breadcrumbs', JSON.stringify(breadcrumbs));
  }

  public disable(): void {
    this.isEnabled = false;
  }

  public enable(): void {
    this.isEnabled = true;
  }
}

// Initialize error monitoring
export const errorMonitoring = ErrorMonitoring.getInstance();

// Performance monitoring
export const performanceMonitoring = {
  measurePageLoad: () => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const metrics = {
          dns: perfData.domainLookupEnd - perfData.domainLookupStart,
          tcp: perfData.connectEnd - perfData.connectStart,
          request: perfData.responseStart - perfData.requestStart,
          response: perfData.responseEnd - perfData.responseStart,
          dom: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          load: perfData.loadEventEnd - perfData.loadEventStart,
          total: perfData.loadEventEnd - perfData.navigationStart
        };

        // Send performance data
        console.log('Performance Metrics:', metrics);
        
        // You can send this to your analytics service
        // analytics.track('page_performance', metrics);
      }, 0);
    });
  },

  measureCoreWebVitals: () => {
    // Measure Core Web Vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    }).catch(() => {
      // web-vitals not available
    });
  }
};

export default ErrorMonitoring;
