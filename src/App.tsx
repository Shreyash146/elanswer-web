import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
// Lazy load pages for better performance
import { createLazyRoute } from "./utils/codeSplitting";

// Critical pages loaded immediately
import Index from "./pages/Index";

// Non-critical pages loaded lazily
const About = createLazyRoute(() => import("./pages/About"));
const PrivacyPolicy = createLazyRoute(() => import("./pages/PrivacyPolicy"));
const Disclaimer = createLazyRoute(() => import("./pages/Disclaimer"));
const TermsOfService = createLazyRoute(() => import("./pages/TermsOfService"));
const CookiePolicy = createLazyRoute(() => import("./pages/CookiePolicy"));
const RefundPolicy = createLazyRoute(() => import("./pages/RefundPolicy"));
const Careers = createLazyRoute(() => import("./pages/Careers"));
const Contact = createLazyRoute(() => import("./pages/Contact"));
const Blog = createLazyRoute(() => import("./pages/Blog"));
const BlogPost = createLazyRoute(() => import("./pages/BlogPost"));
const ComplianceSecurity = createLazyRoute(() => import("./pages/ComplianceSecurity"));
const NotFound = createLazyRoute(() => import("./pages/NotFound"));
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import CoreWebVitalsOptimizer from "./components/CoreWebVitalsOptimizer";
import PerformanceDashboard from "./components/PerformanceDashboard";
import CookieConsent from "./components/CookieConsent";
import SecurityDashboard, { useSecurityDashboard } from "./components/SecurityDashboard";

const queryClient = new QueryClient();

const App = () => {
  const securityDashboard = useSecurityDashboard();

  return (
  <HelmetProvider>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <ScrollToTop />
          <PerformanceOptimizer />
          <CoreWebVitalsOptimizer />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/compliance-security" element={<ComplianceSecurity />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </BrowserRouter>

          {/* Performance Dashboard (Development Only) */}
          <PerformanceDashboard />

          {/* Cookie Consent Banner */}
          <CookieConsent />

          {/* Security Dashboard (Development Only) */}
          <SecurityDashboard
            isVisible={securityDashboard.isVisible}
            onClose={securityDashboard.hide}
          />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </HelmetProvider>
  );
};

export default App;
