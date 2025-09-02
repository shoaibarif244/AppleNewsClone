import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useTheme, useThemedStyles, ThemeToggle } from '../theme';
import { Theme } from '../types/theme';

export const ThemeUsageExample: React.FC = () => {
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Theme System Demo</Text>
        
        {/* Theme Toggle */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Theme Toggle</Text>
          <ThemeToggle />
        </View>

        {/* Color Palette */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Color Palette</Text>
          <View style={styles.colorGrid}>
            <View style={[styles.colorBox, { backgroundColor: theme.colors.primary }]}>
              <Text style={styles.colorLabel}>Primary</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: theme.colors.secondary }]}>
              <Text style={styles.colorLabel}>Secondary</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: theme.colors.accent }]}>
              <Text style={styles.colorLabel}>Accent</Text>
            </View>
            <View style={[styles.colorBox, { backgroundColor: theme.colors.surface }]}>
              <Text style={[styles.colorLabel, { color: theme.colors.text }]}>Surface</Text>
            </View>
          </View>
        </View>

        {/* Typography */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Typography</Text>
          <Text style={styles.headingXL}>Extra Large Heading</Text>
          <Text style={styles.headingLG}>Large Heading</Text>
          <Text style={styles.headingMD}>Medium Heading</Text>
          <Text style={styles.bodySM}>Small body text with secondary color</Text>
        </View>

        {/* Card Example */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Card Components</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Themed Card</Text>
            <Text style={styles.cardBody}>
              This card automatically adapts to the current theme, including colors, 
              spacing, and shadows.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyles = (theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: theme.spacing.md,
  },
  title: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    textAlign: 'center' as const,
    marginBottom: theme.spacing.xl,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semiBold,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  colorGrid: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    gap: theme.spacing.sm,
  },
  colorBox: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    ...theme.shadows.sm,
  },
  colorLabel: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.medium,
    color: 'white',
    textAlign: 'center' as const,
  },
  headingXL: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  headingLG: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semiBold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  headingMD: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  bodySM: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    lineHeight: theme.typography.lineHeight.normal * theme.typography.fontSize.sm,
  },
  card: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.md,
  },
  cardTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semiBold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  cardBody: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    lineHeight: theme.typography.lineHeight.relaxed * theme.typography.fontSize.md,
  },
});