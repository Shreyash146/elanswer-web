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
