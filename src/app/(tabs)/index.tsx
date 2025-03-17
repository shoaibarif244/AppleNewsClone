import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, View, SectionList, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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

  const sectionHeaders = {
    [TITLES.TOP_STORIES]: {
      color: "#FC3C44",
      subtitle: "Chosen by the Apple News editors.",
    },
    [TITLES.TRENDING]: {
      color: "#EC9706",
    },
    [TITLES.FOR_YOU]: {
      color: "#3CB043",
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
              <AntDesign name="apple1" size={24} color="black" />
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

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 27,
    fontWeight: "800",
  },
  dateText: {
    fontSize: 27,
    fontWeight: "800",
    color: "grey",
  },
  sectionHeader: {
    gap: 5,
    marginBottom: 10,
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "800",
  },
  sectionSubtitle: {
    color: "#AAAAAA",
  },
});
