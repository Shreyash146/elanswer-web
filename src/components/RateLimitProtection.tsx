import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock, Shield } from 'lucide-react';
import { rateLimiter } from '@/utils/security';

interface RateLimitProtectionProps {
  children: React.ReactNode;
  identifier?: string;
  maxRequests?: number;
  windowMs?: number;
  onRateLimit?: () => void;
}

const RateLimitProtection: React.FC<RateLimitProtectionProps> = ({
  children,
  identifier = 'default',
  maxRequests = 10,
  windowMs = 60000, // 1 minute
  onRateLimit
}) => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRateLimited && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime(prev => {
          if (prev <= 1000) {
            setIsRateLimited(false);
            setRequestCount(0);
            return 0;
          }
          return prev - 1000;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRateLimited, remainingTime]);

  const checkRateLimit = (): boolean => {
    const allowed = rateLimiter.isAllowed(identifier, maxRequests, windowMs);
    
    if (!allowed) {
      setIsRateLimited(true);
      setRemainingTime(windowMs);
      if (onRateLimit) {
        onRateLimit();
      }
      return false;
    }

    // Update request count for display
    const key = identifier;
    const now = Date.now();
    const windowStart = now - windowMs;
    const requests = (rateLimiter as any).requests.get(key) || [];
    const recentRequests = requests.filter((time: number) => time > windowStart);
    setRequestCount(recentRequests.length);

    return true;
  };

  // Wrap form submissions and API calls
  const handleFormSubmit = (originalHandler: (e: React.FormEvent) => void) => {
    return (e: React.FormEvent) => {
      if (!checkRateLimit()) {
        e.preventDefault();
        return;
      }
      originalHandler(e);
    };
  };

  // Wrap button clicks
  const handleButtonClick = (originalHandler: (e: React.MouseEvent) => void) => {
    return (e: React.MouseEvent) => {
      if (!checkRateLimit()) {
        e.preventDefault();
        return;
      }
      originalHandler(e);
    };
  };

  // Clone children and add rate limiting to forms and buttons
  const protectedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Handle form elements
      if (child.type === 'form') {
        const originalOnSubmit = child.props.onSubmit;
        return React.cloneElement(child, {
          onSubmit: originalOnSubmit ? handleFormSubmit(originalOnSubmit) : undefined
        });
      }

      // Handle button elements
      if (child.type === 'button' || (child.props && child.props.type === 'submit')) {
        const originalOnClick = child.props.onClick;
        return React.cloneElement(child, {
          onClick: originalOnClick ? handleButtonClick(originalOnClick) : undefined,
          disabled: isRateLimited || child.props.disabled
        });
      }

      // Recursively process children
      if (child.props && child.props.children) {
        return React.cloneElement(child, {
          children: (
            <RateLimitProtection
              identifier={identifier}
              maxRequests={maxRequests}
              windowMs={windowMs}
              onRateLimit={onRateLimit}
            >
              {child.props.children}
            </RateLimitProtection>
          )
        });
      }
    }
    return child;
  });

  if (isRateLimited) {
    return (
      <div className="relative">
        {/* Rate limit overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center rounded-lg">
          <div className="bg-red-900/90 border border-red-700 rounded-lg p-6 max-w-sm mx-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2">
              Rate Limit Exceeded
            </h3>
            
            <p className="text-red-200 text-sm mb-4">
              Too many requests. Please wait before trying again.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-red-200">
              <Clock className="w-4 h-4" />
              <span className="font-mono">
                {Math.ceil(remainingTime / 1000)}s remaining
              </span>
            </div>
          </div>
        </div>
        
        {/* Disabled content */}
        <div className="opacity-50 pointer-events-none">
          {protectedChildren}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Request counter (development only) */}
      {process.env.NODE_ENV === 'development' && requestCount > 0 && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 z-10">
          <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Shield className="w-3 h-3" />
            {requestCount}/{maxRequests}
          </div>
        </div>
      )}
      
      {protectedChildren}
    </div>
  );
};

// Higher-order component for easy wrapping
export const withRateLimit = <P extends object>(
  Component: React.ComponentType<P>,
  options: {
    identifier?: string;
    maxRequests?: number;
    windowMs?: number;
  } = {}
) => {
  return React.forwardRef<any, P>((props, ref) => (
    <RateLimitProtection {...options}>
      <Component {...props} ref={ref} />
    </RateLimitProtection>
  ));
};

// Hook for manual rate limit checking
export const useRateLimit = (
  identifier: string = 'default',
  maxRequests: number = 10,
  windowMs: number = 60000
) => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [requestCount, setRequestCount] = useState(0);

  const checkRateLimit = (): boolean => {
    const allowed = rateLimiter.isAllowed(identifier, maxRequests, windowMs);
    
    if (!allowed) {
      setIsRateLimited(true);
      setTimeout(() => setIsRateLimited(false), windowMs);
      return false;
    }

    // Update request count
    const key = identifier;
    const now = Date.now();
    const windowStart = now - windowMs;
    const requests = (rateLimiter as any).requests.get(key) || [];
    const recentRequests = requests.filter((time: number) => time > windowStart);
    setRequestCount(recentRequests.length);

    return true;
  };

  const resetRateLimit = () => {
    rateLimiter.reset(identifier);
    setIsRateLimited(false);
    setRequestCount(0);
  };

  return {
    isRateLimited,
    requestCount,
    maxRequests,
    checkRateLimit,
    resetRateLimit
  };
};

export default RateLimitProtection;
