import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { errorMonitoring, performanceMonitoring } from './utils/errorMonitoring'
import { initializeCaching, monitorCachePerformance } from './utils/caching'
import { initializeSecurity } from './utils/security'
import { backupManager } from './utils/backup'
import { vulnerabilityScanner } from './utils/vulnerabilityScanner'

// Initialize error monitoring
errorMonitoring.addBreadcrumb('Application started', 'lifecycle');

// Global error handler for third-party scripts and extensions
window.addEventListener('error', (event) => {
  // Suppress errors from browser extensions and third-party scripts
  if (event.filename && (
    event.filename.includes('extension://') ||
    event.filename.includes('content.js') ||
    event.filename.includes('chrome-extension://') ||
    event.filename.includes('moz-extension://') ||
    event.filename.includes('index.js')
  )) {
    event.preventDefault();
    return false;
  }

  // Suppress specific extension error messages
  if (event.message && (
    event.message.includes('Target website not loaded') ||
    event.message.includes('Extension context invalidated')
  )) {
    event.preventDefault();
    return false;
  }
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  // Log for debugging but don't crash the app
  console.warn('Unhandled promise rejection:', event.reason);
});

// CSS loading fallback
document.addEventListener('DOMContentLoaded', () => {
  // Check if CSS is loaded properly
  const testElement = document.createElement('div');
  testElement.style.display = 'none';
  testElement.className = 'bg-black text-white'; // Tailwind classes
  document.body.appendChild(testElement);

  const computedStyle = window.getComputedStyle(testElement);
  const hasStyles = computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)' &&
                   computedStyle.backgroundColor !== 'transparent';

  if (!hasStyles) {
    console.warn('CSS may not have loaded properly, attempting fallback');
    // Force reload CSS if needed
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    cssLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes('assets')) {
        const newLink = document.createElement('link');
        newLink.rel = 'stylesheet';
        newLink.href = href + '?v=' + Date.now();
        document.head.appendChild(newLink);
      }
    });
  }

  document.body.removeChild(testElement);
});

// Initialize performance monitoring
performanceMonitoring.measurePageLoad();
performanceMonitoring.measureCoreWebVitals();

// Initialize caching strategies
initializeCaching();

// Initialize security measures
initializeSecurity();

// Initialize backup system
backupManager.scheduleAutoBackup();

// Initialize vulnerability scanning
vulnerabilityScanner.scheduleRegularScans();

// Monitor cache performance (development only)
if (process.env.NODE_ENV === 'development') {
  setTimeout(monitorCachePerformance, 5000);
}

createRoot(document.getElementById("root")!).render(<App />);
