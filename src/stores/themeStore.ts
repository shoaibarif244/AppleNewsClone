import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { Appearance } from 'react-native';
import { ThemeState, ThemeMode, Theme } from '../types/theme';
import { lightTheme, darkTheme } from '../theme/themes';
import { storageUtils, STORAGE_KEYS } from '../storage/mmkv';

// Helper function to get system theme
const getSystemTheme = (): 'light' | 'dark' => {
  return Appearance.getColorScheme() || 'light';
};

// Helper function to resolve theme based on mode
const resolveTheme = (mode: ThemeMode): Theme => {
  if (mode === 'system') {
    return getSystemTheme() === 'dark' ? darkTheme : lightTheme;
  }
  return mode === 'dark' ? darkTheme : lightTheme;
};

// Get initial theme mode from storage or default to system
const getInitialThemeMode = (): ThemeMode => {
  const storedMode = storageUtils.getItem(STORAGE_KEYS.THEME_MODE) as ThemeMode;
  return storedMode || 'system';
};

export const useThemeStore = create<ThemeState>()(
  subscribeWithSelector((set, get) => {
    const initialMode = getInitialThemeMode();
    
    return {
      mode: initialMode,
      theme: resolveTheme(initialMode),
      
      setTheme: (mode: ThemeMode) => {
        // Persist theme mode to MMKV
        storageUtils.setItem(STORAGE_KEYS.THEME_MODE, mode);
        
        set({
          mode,
          theme: resolveTheme(mode),
        });
      },
      
      toggleTheme: () => {
        const currentMode = get().mode;
        let newMode: ThemeMode;
        
        switch (currentMode) {
          case 'light':
            newMode = 'dark';
            break;
          case 'dark':
            newMode = 'system';
            break;
          case 'system':
            newMode = 'light';
            break;
          default:
            newMode = 'light';
        }
        
        get().setTheme(newMode);
      },
    };
  })
);

// Subscribe to system theme changes when in system mode
Appearance.addChangeListener(({ colorScheme }) => {
  const state = useThemeStore.getState();
  if (state.mode === 'system') {
    useThemeStore.setState({
      theme: colorScheme === 'dark' ? darkTheme : lightTheme,
    });
  }
});