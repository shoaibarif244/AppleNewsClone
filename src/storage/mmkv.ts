import { MMKV } from 'react-native-mmkv';

// Create MMKV instance for theme storage
export const themeStorage = new MMKV({
  id: 'theme-storage',
  encryptionKey: 'theme-encryption-key',
});

// Storage utility functions
export const storageUtils = {
  setItem: (key: string, value: string) => {
    themeStorage.set(key, value);
  },
  
  getItem: (key: string): string | undefined => {
    return themeStorage.getString(key);
  },
  
  removeItem: (key: string) => {
    themeStorage.delete(key);
  },
  
  clear: () => {
    themeStorage.clearAll();
  },
};

// Theme-specific storage keys
export const STORAGE_KEYS = {
  THEME_MODE: 'theme_mode',
} as const;