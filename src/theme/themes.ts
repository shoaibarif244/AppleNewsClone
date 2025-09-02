import { Theme } from '../types/theme';

const commonSpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

const commonTypography = {
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
  },
  fontWeight: {
    light: '300' as const,
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: '700' as const,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
  },
};

const commonBorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
};

export const lightTheme: Theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    card: '#FFFFFF',
    text: '#000000',
    textSecondary: '#6D6D70',
    border: '#C6C6C8',
    notification: '#FF3B30',
    error: '#FF3B30',
    warning: '#FF9500',
    success: '#34C759',
    accent: '#FF2D92',
    disabled: '#8E8E93',
    placeholder: '#C7C7CC',
  },
  spacing: commonSpacing,
  typography: commonTypography,
  borderRadius: commonBorderRadius,
  shadows: {
    sm: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    },
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    background: '#000000',
    surface: '#1C1C1E',
    card: '#2C2C2E',
    text: '#FFFFFF',
    textSecondary: '#8E8E93',
    border: '#38383A',
    notification: '#FF453A',
    error: '#FF453A',
    warning: '#FF9F0A',
    success: '#30D158',
    accent: '#FF375F',
    disabled: '#48484A',
    placeholder: '#48484A',
  },
  spacing: commonSpacing,
  typography: commonTypography,
  borderRadius: commonBorderRadius,
  shadows: {
    sm: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 8,
    },
  },
};