import React, { createContext, useContext, ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useThemeStore } from '../stores/themeStore';
import { Theme } from '../types/theme';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (mode: 'light' | 'dark' | 'system') => void;
  mode: 'light' | 'dark' | 'system';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme, mode, setTheme, toggleTheme } = useThemeStore();

  const contextValue: ThemeContextType = {
    theme,
    mode,
    setTheme,
    toggleTheme,
  };

  // Determine status bar style based on theme
  const statusBarStyle = theme.colors.background === '#000000' ? 'light' : 'dark';

  return (
    <ThemeContext.Provider value={contextValue}>
      <StatusBar style={statusBarStyle} />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};