import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TallyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TallyModal: React.FC<TallyModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    // Preload Tally script on component mount for faster loading
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;

      // Check if script is already loaded
      if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
        document.head.appendChild(script);
      }
    }
  }, []);

  useEffect(() => {
    // Load embeds when modal opens
    if (isOpen && typeof window !== 'undefined' && window.Tally) {
      setIsLoading(true);
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        window.Tally.loadEmbeds();
        // Set loading to false after a short delay to allow form to render
        setTimeout(() => setIsLoading(false), 1500);
      }, 100);
    }
  }, [isOpen]);

  // Listen for Tally form submission
  useEffect(() => {
    const handleTallySubmit = (event: MessageEvent) => {
      // Listen for Tally form submission events
      if (event.data && typeof event.data === 'object') {
        if (event.data.type === 'TALLY_FORM_SUBMIT' ||
            event.data.type === 'tally.submit' ||
            event.data.type === 'TALLY_FORM_COMPLETED' ||
            (event.data.payload && event.data.payload.formId === '3jRd06') ||
            event.data.eventType === 'form_submit') {
          // Show success message
          setIsSubmitted(true);
          setIsLoading(false);

          // Close modal after showing success message
          setTimeout(() => {
            onClose();
          }, 2000);
        }
      }
    };

    if (isOpen) {
      window.addEventListener('message', handleTallySubmit);
    }

    return () => {
      window.removeEventListener('message', handleTallySubmit);
    };
  }, [isOpen, onClose]);

  // Reset states when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsLoading(true);
      setIsSubmitted(false);
    }
  }, [isOpen]);

  // Handle escape key and mobile scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent background scrolling on mobile
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      // Restore scrolling
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
      document.body.style.height = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4">
          {/* Responsive Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Responsive Modal Content */}
          <motion.div
            className="relative w-full max-w-[98vw] sm:max-w-[95vw] md:max-w-5xl h-[98vh] sm:h-[95vh] mx-1 sm:mx-2 bg-black rounded-lg sm:rounded-2xl shadow-2xl overflow-hidden border border-white/20 flex flex-col"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Compact Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/20 bg-gradient-to-r from-green-500/20 to-blue-500/20 flex-shrink-0">
              <div className="flex-1 pr-3">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                  Book Your Free AI Automation Demo
                </h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            {/* Optimized Form Container with Loading & Success States */}
            <div className="flex-1 bg-black overflow-hidden relative">
              {/* Loading Indicator */}
              {isLoading && !isSubmitted && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-10">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 text-green-500 animate-spin" />
                    <p className="text-white text-sm">Loading form...</p>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-20">
                  <motion.div
                    className="flex flex-col items-center gap-4 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500" />
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">Thank You!</h3>
                      <p className="text-gray-300 text-sm">Your demo request has been submitted successfully.</p>
                      <p className="text-gray-400 text-xs mt-2">We'll be in touch soon!</p>
                    </div>
                  </motion.div>
                </div>
              )}

              <div className="h-full overflow-y-auto overflow-x-hidden">
                <iframe
                  data-tally-src="https://tally.so/embed/3jRd06?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&preload=1"
                  loading="eager"
                  width="100%"
                  height="auto"
                  title="Book Your Free AI Automation Demo"
                  className="w-full border-0"
                  style={{
                    minHeight: '600px',
                    display: 'block',
                    background: 'transparent'
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation"
                  onLoad={() => {
                    // Hide loading indicator when iframe loads
                    setTimeout(() => setIsLoading(false), 500);
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
      openPopup?: (formId: string, options?: any) => void;
    };
  }
}

export default TallyModal;
