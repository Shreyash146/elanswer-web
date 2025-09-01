// Security utilities and configurations

// Security headers configuration
export const SECURITY_HEADERS = {
  // Content Security Policy
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://cal.com https://tally.so https://js.stripe.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cal.com https://tally.so",
    "img-src 'self' data: https: blob:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://www.google-analytics.com https://api.elanswer.com https://cal.com https://tally.so wss:",
    "frame-src 'self' https://cal.com https://tally.so https://js.stripe.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://cal.com https://tally.so",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; '),
  
  // Prevent clickjacking
  'X-Frame-Options': 'DENY',
  
  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',
  
  // XSS Protection
  'X-XSS-Protection': '1; mode=block',
  
  // Referrer Policy
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  
  // Permissions Policy
  'Permissions-Policy': [
    'camera=()',
    'microphone=()',
    'geolocation=()',
    'payment=(self)',
    'usb=()',
    'magnetometer=()',
    'gyroscope=()',
    'accelerometer=()'
  ].join(', '),
  
  // Strict Transport Security (HTTPS enforcement)
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  
  // Cross-Origin policies
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin'
};

// HTTPS enforcement
export const enforceHTTPS = () => {
  if (typeof window !== 'undefined' && window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
    window.location.replace(`https:${window.location.href.substring(window.location.protocol.length)}`);
  }
};

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Phone validation
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

// Rate limiting for client-side
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  
  isAllowed(key: string, maxRequests: number = 10, windowMs: number = 60000): boolean {
    const now = Date.now();
    const windowStart = now - windowMs;
    
    // Get existing requests for this key
    const keyRequests = this.requests.get(key) || [];
    
    // Filter out old requests
    const recentRequests = keyRequests.filter(time => time > windowStart);
    
    // Check if limit exceeded
    if (recentRequests.length >= maxRequests) {
      return false;
    }
    
    // Add current request
    recentRequests.push(now);
    this.requests.set(key, recentRequests);
    
    return true;
  }
  
  reset(key: string): void {
    this.requests.delete(key);
  }
  
  cleanup(): void {
    const now = Date.now();
    for (const [key, requests] of this.requests.entries()) {
      const recentRequests = requests.filter(time => time > now - 300000); // Keep last 5 minutes
      if (recentRequests.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, recentRequests);
      }
    }
  }
}

export const rateLimiter = new RateLimiter();

// Security monitoring
export class SecurityMonitor {
  private static instance: SecurityMonitor;
  private violations: Array<{
    type: string;
    details: string;
    timestamp: number;
    userAgent: string;
    ip?: string;
  }> = [];

  public static getInstance(): SecurityMonitor {
    if (!SecurityMonitor.instance) {
      SecurityMonitor.instance = new SecurityMonitor();
    }
    return SecurityMonitor.instance;
  }

  logViolation(type: string, details: string, additionalData?: any): void {
    const violation = {
      type,
      details,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      ...additionalData
    };
    
    this.violations.push(violation);
    
    // Keep only last 100 violations
    if (this.violations.length > 100) {
      this.violations.shift();
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Security Violation:', violation);
    }
    
    // In production, send to monitoring service
    this.reportViolation(violation);
  }

  private async reportViolation(violation: any): Promise<void> {
    // Disable security API reporting entirely for now
    // TODO: Implement proper security monitoring service
    console.debug('Security violation logged:', violation.type);
    return;

    // Original code commented out until proper API is implemented
    /*
    try {
      // Send to your security monitoring service
      await fetch('/api/security/violations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(violation)
      });
    } catch (error) {
      console.debug('Security API not available');
    }
    */
  }

  getViolations(): typeof this.violations {
    return [...this.violations];
  }

  clearViolations(): void {
    this.violations = [];
  }
}

// Content Security Policy violation handler
export const setupCSPViolationReporting = () => {
  document.addEventListener('securitypolicyviolation', (e) => {
    SecurityMonitor.getInstance().logViolation('CSP_VIOLATION', e.violatedDirective, {
      blockedURI: e.blockedURI,
      documentURI: e.documentURI,
      originalPolicy: e.originalPolicy
    });
  });
};

// Detect suspicious activity
export const detectSuspiciousActivity = () => {
  // Monitor for rapid form submissions
  let formSubmissions = 0;
  const resetFormCounter = () => { formSubmissions = 0; };
  
  document.addEventListener('submit', (e) => {
    formSubmissions++;
    if (formSubmissions > 5) {
      SecurityMonitor.getInstance().logViolation('RAPID_FORM_SUBMISSION', 'Too many form submissions');
      e.preventDefault();
      return false;
    }
    setTimeout(resetFormCounter, 60000); // Reset after 1 minute
  });
  
  // Monitor for console access (potential developer tools usage)
  let devtools = false;
  setInterval(() => {
    if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
      if (!devtools) {
        devtools = true;
        SecurityMonitor.getInstance().logViolation('DEVTOOLS_DETECTED', 'Developer tools opened');
      }
    } else {
      devtools = false;
    }
  }, 1000);
};

// Initialize security measures
export const initializeSecurity = () => {
  // Enforce HTTPS
  enforceHTTPS();

  // Setup CSP violation reporting
  setupCSPViolationReporting();

  // Only detect suspicious activity in production to reduce development console noise
  if (process.env.NODE_ENV === 'production') {
    detectSuspiciousActivity();
  }
  
  // Cleanup rate limiter periodically
  setInterval(() => {
    rateLimiter.cleanup();
  }, 300000); // Every 5 minutes
  
  // Disable right-click in production (optional)
  if (process.env.NODE_ENV === 'production') {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      SecurityMonitor.getInstance().logViolation('RIGHT_CLICK_DISABLED', 'Right-click attempted');
    });
    
    // Disable F12, Ctrl+Shift+I, Ctrl+U
    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
        SecurityMonitor.getInstance().logViolation('DEVTOOLS_SHORTCUT', `Key combination: ${e.key}`);
      }
    });
  }
};

export default {
  SECURITY_HEADERS,
  enforceHTTPS,
  sanitizeInput,
  isValidEmail,
  isValidPhone,
  rateLimiter,
  SecurityMonitor,
  initializeSecurity
};
