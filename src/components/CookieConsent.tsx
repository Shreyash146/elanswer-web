import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Type declarations for global analytics functions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    const consentDate = localStorage.getItem('cookie-consent-date');
    
    if (!consent || isConsentExpired(consentDate)) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 2000);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
        applyCookieSettings(savedPreferences);
      } catch (error) {
        console.warn('Failed to parse cookie preferences:', error);
        setShowBanner(true);
      }
    }
  }, []);

  const isConsentExpired = (dateString: string | null): boolean => {
    if (!dateString) return true;
    const consentDate = new Date(dateString);
    const now = new Date();
    const daysDiff = (now.getTime() - consentDate.getTime()) / (1000 * 3600 * 24);
    return daysDiff > 365; // Expire after 1 year
  };

  const applyCookieSettings = (prefs: CookiePreferences) => {
    // Apply analytics cookies
    if (prefs.analytics) {
      // Initialize Google Analytics
      if (typeof window.gtag !== 'undefined') {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    }

    // Apply marketing cookies
    if (prefs.marketing) {
      // Initialize marketing pixels
      if (typeof window.fbq !== 'undefined') {
        window.fbq('consent', 'grant');
      }
    }

    // Apply functional cookies
    if (prefs.functional) {
      // Enable functional features like live chat
      console.log('Functional cookies enabled');
    }
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setPreferences(prefs);
    applyCookieSettings(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    saveConsent(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    saveConsent(necessaryOnly);
  };

  const saveCustomPreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const cookieTypes = [
    {
      key: 'necessary' as keyof CookiePreferences,
      title: 'Necessary Cookies',
      description: 'Essential for the website to function properly. These cannot be disabled.',
      required: true
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website by collecting anonymous information.',
      required: false
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      title: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant advertisements.',
      required: false
    },
    {
      key: 'functional' as keyof CookiePreferences,
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality like live chat, social media features, and personalization.',
      required: false
    }
  ];

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
        {/* Cookie Settings Modal */}
        <AnimatePresence>
          {showSettings && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettings(false)}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl border border-gray-700 p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Cookie Preferences
                  </h2>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {cookieTypes.map((type) => (
                    <div key={type.key} className="border border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-white">{type.title}</h3>
                        <div className="flex items-center gap-2">
                          {type.required && (
                            <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                              Required
                            </span>
                          )}
                          <button
                            onClick={() => togglePreference(type.key)}
                            disabled={type.required}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              preferences[type.key]
                                ? 'bg-indigo-600'
                                : 'bg-gray-600'
                            } ${type.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full transition-transform ${
                                preferences[type.key] ? 'translate-x-6' : 'translate-x-0.5'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300">{type.description}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    onClick={saveCustomPreferences}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Save Preferences
                  </Button>
                  <Button
                    onClick={acceptAll}
                    variant="outline"
                    className="flex-1 border-gray-600 text-white hover:bg-gray-800"
                  >
                    Accept All
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cookie Banner */}
        <motion.div
          className="bg-gray-900 border border-gray-700 rounded-lg p-3 max-w-lg w-full shadow-xl pointer-events-auto relative"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Close Button */}
          <button
            onClick={acceptNecessary}
            className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors p-0.5"
            title="Close"
          >
            <X className="w-3 h-3" />
          </button>

          <div className="flex items-center gap-2 pr-6">
            <Cookie className="w-5 h-5 text-indigo-400 flex-shrink-0" />

            <div className="flex-1 min-w-0">
              <p className="text-gray-300 text-xs mb-2 leading-tight">
                We use cookies to improve your experience.{' '}
                <a href="/privacy-policy" className="text-indigo-400 hover:text-indigo-300 underline">
                  Learn more
                </a>
              </p>

              <div className="flex gap-1.5">
                <Button
                  onClick={acceptAll}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 text-xs h-auto font-medium"
                >
                  Accept
                </Button>
                <Button
                  onClick={acceptNecessary}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-500 bg-transparent px-3 py-1 text-xs h-auto"
                >
                  Decline
                </Button>
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-gray-800 px-2 py-1 text-xs h-auto"
                >
                  <Settings className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CookieConsent;
