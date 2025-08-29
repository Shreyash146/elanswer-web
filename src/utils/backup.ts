// Backup and data protection utilities

interface BackupData {
  timestamp: number;
  version: string;
  data: {
    localStorage: Record<string, string>;
    sessionStorage: Record<string, string>;
    userPreferences: any;
    formData: any[];
  };
  checksum: string;
}

class BackupManager {
  private static instance: BackupManager;
  private backupKey = 'elanswer-backup';
  private maxBackups = 5;

  public static getInstance(): BackupManager {
    if (!BackupManager.instance) {
      BackupManager.instance = new BackupManager();
    }
    return BackupManager.instance;
  }

  // Create backup of critical data
  async createBackup(): Promise<string> {
    try {
      const backupData: BackupData = {
        timestamp: Date.now(),
        version: '1.0.0',
        data: {
          localStorage: this.getLocalStorageData(),
          sessionStorage: this.getSessionStorageData(),
          userPreferences: this.getUserPreferences(),
          formData: this.getFormData()
        },
        checksum: ''
      };

      // Generate checksum
      backupData.checksum = await this.generateChecksum(JSON.stringify(backupData.data));

      // Store backup
      const backupId = `backup-${Date.now()}`;
      const compressed = this.compressData(backupData);
      
      localStorage.setItem(`${this.backupKey}-${backupId}`, compressed);
      
      // Maintain backup limit
      this.cleanupOldBackups();
      
      console.log('Backup created successfully:', backupId);
      return backupId;
    } catch (error) {
      console.error('Backup creation failed:', error);
      throw error;
    }
  }

  // Restore from backup
  async restoreBackup(backupId: string): Promise<boolean> {
    try {
      const compressed = localStorage.getItem(`${this.backupKey}-${backupId}`);
      if (!compressed) {
        throw new Error('Backup not found');
      }

      const backupData: BackupData = this.decompressData(compressed);
      
      // Verify checksum
      const currentChecksum = await this.generateChecksum(JSON.stringify(backupData.data));
      if (currentChecksum !== backupData.checksum) {
        throw new Error('Backup data corrupted');
      }

      // Restore data
      this.restoreLocalStorageData(backupData.data.localStorage);
      this.restoreSessionStorageData(backupData.data.sessionStorage);
      this.restoreUserPreferences(backupData.data.userPreferences);
      
      console.log('Backup restored successfully:', backupId);
      return true;
    } catch (error) {
      console.error('Backup restoration failed:', error);
      return false;
    }
  }

  // Get all available backups
  getAvailableBackups(): Array<{ id: string; timestamp: number; size: string }> {
    const backups: Array<{ id: string; timestamp: number; size: string }> = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(this.backupKey)) {
        const data = localStorage.getItem(key);
        if (data) {
          const backupId = key.replace(`${this.backupKey}-`, '');
          const timestamp = parseInt(backupId.replace('backup-', ''));
          const size = this.formatBytes(data.length);
          backups.push({ id: backupId, timestamp, size });
        }
      }
    }
    
    return backups.sort((a, b) => b.timestamp - a.timestamp);
  }

  // Auto backup on critical actions
  scheduleAutoBackup(): void {
    // Backup on page unload
    window.addEventListener('beforeunload', () => {
      this.createBackup().catch(console.error);
    });

    // Backup every 30 minutes
    setInterval(() => {
      this.createBackup().catch(console.error);
    }, 30 * 60 * 1000);

    // Backup on form submissions
    document.addEventListener('submit', () => {
      setTimeout(() => {
        this.createBackup().catch(console.error);
      }, 1000);
    });
  }

  private getLocalStorageData(): Record<string, string> {
    const data: Record<string, string> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && !key.startsWith(this.backupKey)) {
        data[key] = localStorage.getItem(key) || '';
      }
    }
    return data;
  }

  private getSessionStorageData(): Record<string, string> {
    const data: Record<string, string> = {};
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key) {
        data[key] = sessionStorage.getItem(key) || '';
      }
    }
    return data;
  }

  private getUserPreferences(): any {
    return {
      cookieConsent: localStorage.getItem('cookie-consent'),
      theme: localStorage.getItem('theme'),
      language: localStorage.getItem('language')
    };
  }

  private getFormData(): any[] {
    // Get any pending form data
    const formData = localStorage.getItem('pending-form-data');
    return formData ? JSON.parse(formData) : [];
  }

  private restoreLocalStorageData(data: Record<string, string>): void {
    Object.entries(data).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
  }

  private restoreSessionStorageData(data: Record<string, string>): void {
    Object.entries(data).forEach(([key, value]) => {
      sessionStorage.setItem(key, value);
    });
  }

  private restoreUserPreferences(preferences: any): void {
    if (preferences.cookieConsent) {
      localStorage.setItem('cookie-consent', preferences.cookieConsent);
    }
    if (preferences.theme) {
      localStorage.setItem('theme', preferences.theme);
    }
    if (preferences.language) {
      localStorage.setItem('language', preferences.language);
    }
  }

  private compressData(data: BackupData): string {
    // Simple compression using JSON stringify
    return JSON.stringify(data);
  }

  private decompressData(compressed: string): BackupData {
    return JSON.parse(compressed);
  }

  private async generateChecksum(data: string): Promise<string> {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  private cleanupOldBackups(): void {
    const backups = this.getAvailableBackups();
    if (backups.length > this.maxBackups) {
      const toDelete = backups.slice(this.maxBackups);
      toDelete.forEach(backup => {
        localStorage.removeItem(`${this.backupKey}-${backup.id}`);
      });
    }
  }

  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Export backup to file
  exportBackup(backupId: string): void {
    const compressed = localStorage.getItem(`${this.backupKey}-${backupId}`);
    if (!compressed) return;

    const blob = new Blob([compressed], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `elanswer-backup-${backupId}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Import backup from file
  async importBackup(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const content = e.target?.result as string;
          const backupData: BackupData = JSON.parse(content);
          
          // Verify checksum
          const currentChecksum = await this.generateChecksum(JSON.stringify(backupData.data));
          if (currentChecksum !== backupData.checksum) {
            throw new Error('Imported backup data is corrupted');
          }

          // Store imported backup
          const backupId = `imported-${Date.now()}`;
          localStorage.setItem(`${this.backupKey}-${backupId}`, content);
          
          resolve(backupId);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error('Failed to read backup file'));
      reader.readAsText(file);
    });
  }
}

// Form data protection
export class FormDataProtection {
  private static instance: FormDataProtection;
  private formDataKey = 'form-data-backup';

  public static getInstance(): FormDataProtection {
    if (!FormDataProtection.instance) {
      FormDataProtection.instance = new FormDataProtection();
    }
    return FormDataProtection.instance;
  }

  // Save form data as user types
  saveFormData(formId: string, data: Record<string, any>): void {
    const existingData = this.getFormData();
    existingData[formId] = {
      ...data,
      timestamp: Date.now()
    };
    localStorage.setItem(this.formDataKey, JSON.stringify(existingData));
  }

  // Restore form data
  restoreFormData(formId: string): Record<string, any> | null {
    const data = this.getFormData();
    return data[formId] || null;
  }

  // Clear form data after successful submission
  clearFormData(formId: string): void {
    const data = this.getFormData();
    delete data[formId];
    localStorage.setItem(this.formDataKey, JSON.stringify(data));
  }

  private getFormData(): Record<string, any> {
    const data = localStorage.getItem(this.formDataKey);
    return data ? JSON.parse(data) : {};
  }

  // Auto-save form data
  setupAutoSave(formElement: HTMLFormElement, formId: string): void {
    const inputs = formElement.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        const formData = new FormData(formElement);
        const data: Record<string, any> = {};
        
        formData.forEach((value, key) => {
          data[key] = value;
        });
        
        this.saveFormData(formId, data);
      });
    });
  }
}

export const backupManager = BackupManager.getInstance();
export const formDataProtection = FormDataProtection.getInstance();

export default { BackupManager, FormDataProtection, backupManager, formDataProtection };
