# Theming System with Zustand and MMKV

This React Native app now includes a comprehensive theming system using Zustand for state management and MMKV for persistent storage.

## Features

- 🎨 **Complete Theme System**: Light, dark, and system themes
- 💾 **Persistent Storage**: Theme preferences saved with MMKV
- ⚡ **Fast State Management**: Zustand for efficient theme state
- 🔄 **System Theme Support**: Automatically follows system appearance
- 📱 **TypeScript Support**: Fully typed theme configuration
- 🎯 **Easy Integration**: Simple hooks and components

## Quick Start

### 1. Basic Usage

```tsx
import { useTheme } from './src/theme';

function MyComponent() {
  const { theme } = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>Hello World!</Text>
    </View>
  );
}
```

### 2. Using Themed Styles Hook

```tsx
import { useThemedStyles } from './src/hooks/useThemedStyles';
import { Theme } from './src/types/theme';

function MyComponent() {
  const styles = useThemedStyles(createStyles);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Themed Component</Text>
    </View>
  );
}

const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    ...theme.shadows.sm,
  },
  title: {
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
  },
});
```

### 3. Theme Toggle Component

Add the theme toggle anywhere in your app:

```tsx
import { ThemeToggle } from './src/theme';

function SettingsScreen() {
  return (
    <View>
      <ThemeToggle />
    </View>
  );
}
```

### 4. Direct Store Access

```tsx
import { useThemeStore } from './src/stores/themeStore';

function CustomThemeControl() {
  const { mode, setTheme } = useThemeStore();
  
  return (
    <View>
      <Button title="Light" onPress={() => setTheme('light')} />
      <Button title="Dark" onPress={() => setTheme('dark')} />
      <Button title="System" onPress={() => setTheme('system')} />
    </View>
  );
}
```

## Theme Structure

### Colors
- `primary`, `secondary`, `accent` - Brand colors
- `background`, `surface`, `card` - Background colors
- `text`, `textSecondary` - Text colors
- `border`, `disabled`, `placeholder` - UI element colors
- `error`, `warning`, `success`, `notification` - Status colors

### Typography
- Font sizes: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`
- Font weights: `light`, `regular`, `medium`, `semiBold`, `bold`
- Line heights: `tight`, `normal`, `relaxed`

### Spacing
- Consistent spacing scale: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

### Other
- Border radius: `sm`, `md`, `lg`, `xl`
- Shadows: `sm`, `md`, `lg` with platform-specific elevation

## Customization

### Adding Custom Colors

Edit `/src/theme/themes.ts`:

```tsx
export const lightTheme: Theme = {
  colors: {
    // ... existing colors
    customColor: '#FF6B6B',
  },
  // ... rest of theme
};
```

### Creating Custom Themes

```tsx
import { Theme } from './src/types/theme';

export const customTheme: Theme = {
  // Define your custom theme here
};

// Update the theme store to include your custom theme
```

## Integration

The theming system is already integrated into:

1. **App Layout** (`/src/app/_layout.tsx`) - Navigation headers and status bar
2. **News Components** - All list items and cards
3. **Theme Provider** - Wraps the entire app

## Best Practices

1. **Always use theme colors** instead of hardcoded values
2. **Use spacing from theme** for consistent layout
3. **Leverage typography scale** for text consistency
4. **Apply shadows from theme** for consistent elevation
5. **Use useThemedStyles hook** for complex styling logic

## File Structure

```
src/
├── theme/
│   ├── index.ts          # Main theme exports
│   └── themes.ts         # Theme definitions
├── types/
│   └── theme.ts          # TypeScript interfaces
├── stores/
│   └── themeStore.ts     # Zustand store
├── storage/
│   └── mmkv.ts           # MMKV storage utilities
├── hooks/
│   └── useThemedStyles.ts # Styled components hook
├── components/
│   ├── ThemeProvider.tsx # Theme context provider
│   └── ThemeToggle.tsx   # Theme toggle component
└── examples/
    └── ThemeUsageExample.tsx # Usage examples
```

## Performance

- **MMKV**: Ultra-fast storage for theme persistence
- **Zustand**: Minimal re-renders with selective subscriptions
- **Memoized Styles**: Styles are memoized and only recalculated when theme changes
- **System Theme**: Automatically responds to system appearance changes