import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../components/ThemeProvider';
import { Theme } from '../types/theme';

export function useThemedStyles<T extends StyleSheet.NamedStyles<T>>(
  styleFactory: (theme: Theme) => T
): T {
  const { theme } = useTheme();
  
  return useMemo(() => styleFactory(theme), [theme, styleFactory]);
}