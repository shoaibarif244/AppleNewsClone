import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from './ThemeProvider';
import { useThemedStyles } from '../hooks/useThemedStyles';
import { Theme } from '../types/theme';

export const ThemeToggle: React.FC = () => {
  const { theme, mode, toggleTheme } = useTheme();
  const styles = useThemedStyles(createStyles);

  const getThemeIcon = () => {
    switch (mode) {
      case 'light':
        return 'weather-sunny';
      case 'dark':
        return 'weather-night';
      case 'system':
        return 'theme-light-dark';
      default:
        return 'theme-light-dark';
    }
  };

  const getThemeLabel = () => {
    switch (mode) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return 'System';
      default:
        return 'System';
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleTheme}>
      <MaterialCommunityIcons
        name={getThemeIcon()}
        size={24}
        color={theme.colors.text}
      />
      <Text style={styles.label}>{getThemeLabel()}</Text>
    </TouchableOpacity>
  );
};

const createStyles = (theme: Theme) => ({
  container: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    gap: theme.spacing.sm,
    ...theme.shadows.sm,
  },
  label: {
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
  },
});