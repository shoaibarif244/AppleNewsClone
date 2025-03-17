import { Link } from "expo-router";
import { News } from "@/types/types";
import { Pressable, Text, View, Image, StyleSheet } from "react-native";

import NewsListItemFooter from "../NewsListItemFooter";

type NewsListItemProps = {
  newsArticle: News;
  index: number;
};

export default function TrendingListItem({
  newsArticle,
  index,
}: NewsListItemProps) {
  return (
    <Link href={`newsArticle/${newsArticle.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.indexContainer}>
          <Text style={styles.indexText}>{index + 1}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.header}>
            <Image
              source={require("@assets/reactNativeDev.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>{newsArticle.title}</Text>
          </View>
          <NewsListItemFooter
            publishedDate={newsArticle.created_at}
            author={newsArticle.author}
          />
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 15,
  },
  indexContainer: {
    backgroundColor: "#FA8128",
    width: 35,
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  indexText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    flex: 1,
    gap: 25,
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgrey",
    paddingBottom: 10,
  },
  header: {
    gap: 5,
  },
  logo: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
