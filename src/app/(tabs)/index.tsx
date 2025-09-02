import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, View, SectionList, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemedStyles } from "../../hooks/useThemedStyles";
import { useTheme } from "../../components/ThemeProvider";
import { Theme } from "../../types/theme";

import news from "@assets/data/homeNews.json";
import NewsListItem from "@/components/ListItems/NewsListItem";
import MainNewsCard from "@/components/ListItems/MainNewsCard";
import TrendingListItem from "@/components/ListItems/TrendingListItem";

const TITLES = {
  TOP_STORIES: "Top Stories",
  TRENDING: "Trending",
  FOR_YOU: "For You",
};

export default function HomeScreen() {
  const date = new Date();
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);

  const sectionHeaders = {
    [TITLES.TOP_STORIES]: {
      color: theme.colors.error,
      subtitle: "Chosen by the Apple News editors.",
    },
    [TITLES.TRENDING]: {
      color: theme.colors.warning,
    },
    [TITLES.FOR_YOU]: {
      color: theme.colors.success,
      subtitle: "Recommendations based on topics & channels you read.",
    },
  };

  const renderSectionHeader = (title: string) => {
    const header = sectionHeaders[title];
    return header ? (
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: header.color }]}>
          {title}
        </Text>
        {header.subtitle && (
          <Text style={styles.sectionSubtitle}>{header.subtitle}</Text>
        )}
      </View>
    ) : null;
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <SectionList
        sections={news}
        renderItem={({ item, index, section }) => {
          if (section.title === TITLES.TOP_STORIES) {
            return index === 0 ? (
              <MainNewsCard newsArticle={item} />
            ) : (
              <NewsListItem newsArticle={item} />
            );
          }
          if (section.title === TITLES.TRENDING) {
            return <TrendingListItem newsArticle={item} index={index + 1} />;
          }
          if (section.title === TITLES.FOR_YOU) {
            return <NewsListItem newsArticle={item} />;
          }
          return null;
        }}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section }) =>
          renderSectionHeader(section?.title)
        }
        ListHeaderComponent={
          <View>
            {/* APPLE LOGO HEADER */}
            <View style={styles.header}>
              <AntDesign name="apple1" size={24} color={theme.colors.text} />
              <Text style={styles.headerTitle}>News</Text>
            </View>
            <Text style={styles.dateText}>
              {date.toLocaleString("default", {
                month: "long",
                day: "numeric",
              })}
            </Text>
          </View>
        }
      />
    </View>
  );
}

const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  header: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
  },
  headerTitle: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
  },
  dateText: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textSecondary,
  },
  sectionHeader: {
    gap: theme.spacing.xs,
    marginBottom: theme.spacing.sm,
    marginTop: theme.spacing.xxl,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
  },
  sectionSubtitle: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.sm,
  },
});
