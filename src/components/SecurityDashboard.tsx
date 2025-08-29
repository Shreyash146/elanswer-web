import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, Clock, Eye, X } from 'lucide-react';
import { vulnerabilityScanner } from '@/utils/vulnerabilityScanner';
import { backupManager } from '@/utils/backup';

interface SecurityDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const SecurityDashboard: React.FC<SecurityDashboardProps> = ({ isVisible, onClose }) => {
  const [scanResult, setScanResult] = useState<any>(null);
  const [backups, setBackups] = useState<any[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (isVisible) {
      loadSecurityData();
    }
  }, [isVisible]);

  const loadSecurityData = async () => {
    // Load last scan result
    const lastScan = vulnerabilityScanner.getLastScanResult();
    setScanResult(lastScan);

    // Load backup information
    const availableBackups = backupManager.getAvailableBackups();
    setBackups(availableBackups);
  };

  const runSecurityScan = async () => {
    setIsScanning(true);
    try {
      const result = await vulnerabilityScanner.performSecurityScan();
      setScanResult(result);
    } catch (error) {
      console.error('Security scan failed:', error);
    } finally {
      setIsScanning(false);
    }
  };

  const createBackup = async () => {
    try {
      await backupManager.createBackup();
      const availableBackups = backupManager.getAvailableBackups();
      setBackups(availableBackups);
    } catch (error) {
      console.error('Backup creation failed:', error);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getVulnerabilityColor = (type: string) => {
    switch (type) {
      case 'HIGH': return 'text-red-400 bg-red-900/20 border-red-700';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      case 'LOW': return 'text-blue-400 bg-blue-900/20 border-blue-700';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-700';
    }
  };

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Security Dashboard
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Security Score */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-white">Security Score</h3>
              <button
                onClick={runSecurityScan}
                disabled={isScanning}
                className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 text-white text-sm rounded transition-colors"
              >
                {isScanning ? 'Scanning...' : 'Scan Now'}
              </button>
            </div>

            {scanResult ? (
              <div className="space-y-4">
                <div className="text-center">
                  <div className={`text-4xl font-bold ${getScoreColor(scanResult.score)}`}>
                    {scanResult.score}/100
                  </div>
                  <p className="text-gray-400 text-sm">
                    Last scan: {new Date(scanResult.lastScan).toLocaleString()}
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center">
                  {['HIGH', 'MEDIUM', 'LOW', 'INFO'].map(type => {
                    const count = scanResult.vulnerabilities.filter((v: any) => v.type === type).length;
                    return (
                      <div key={type} className="bg-gray-700 rounded p-2">
                        <div className={`font-bold ${getVulnerabilityColor(type).split(' ')[0]}`}>
                          {count}
                        </div>
                        <div className="text-xs text-gray-400">{type}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400 py-8">
                <Shield className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>No security scan available</p>
                <p className="text-sm">Click "Scan Now" to start</p>
              </div>
            )}
          </div>

          {/* Backup Status */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-white">Backup Status</h3>
              <button
                onClick={createBackup}
                className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors"
              >
                Create Backup
              </button>
            </div>

            <div className="space-y-3">
              {backups.length > 0 ? (
                <>
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">{backups.length} backups available</span>
                  </div>
                  
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {backups.slice(0, 3).map(backup => (
                      <div key={backup.id} className="flex items-center justify-between text-sm bg-gray-700 rounded p-2">
                        <div>
                          <div className="text-white">
                            {new Date(backup.timestamp).toLocaleDateString()}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {backup.size}
                          </div>
                        </div>
                        <Clock className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-400 py-4">
                  <AlertTriangle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No backups available</p>
                </div>
              )}
            </div>
          </div>

          {/* Vulnerabilities */}
          {scanResult && scanResult.vulnerabilities.length > 0 && (
            <div className="lg:col-span-2 bg-gray-800 rounded-lg p-4">
              <h3 className="font-medium text-white mb-4">Security Issues</h3>
              
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {scanResult.vulnerabilities.slice(0, 10).map((vuln: any) => (
                  <div
                    key={vuln.id}
                    className={`border rounded-lg p-3 ${getVulnerabilityColor(vuln.type)}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium px-2 py-1 rounded">
                            {vuln.type}
                          </span>
                          <span className="text-sm font-medium">{vuln.category}</span>
                        </div>
                        <p className="text-sm mb-2">{vuln.description}</p>
                        <p className="text-xs opacity-75">{vuln.recommendation}</p>
                      </div>
                      {vuln.fixed && (
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 ml-2" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security Recommendations */}
          {scanResult && scanResult.recommendations.length > 0 && (
            <div className="lg:col-span-2 bg-gray-800 rounded-lg p-4">
              <h3 className="font-medium text-white mb-4">Security Recommendations</h3>
              
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {scanResult.recommendations.slice(0, 5).map((rec: string, index: number) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <Eye className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-700 text-xs text-gray-500 text-center">
          Security Dashboard - Development Mode Only
        </div>
      </div>
    </div>
  );
};

// Hook for security dashboard
export const useSecurityDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        setIsVisible(!isVisible);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  return {
    isVisible,
    show: () => setIsVisible(true),
    hide: () => setIsVisible(false),
    toggle: () => setIsVisible(!isVisible)
  };
};

export default SecurityDashboard;
