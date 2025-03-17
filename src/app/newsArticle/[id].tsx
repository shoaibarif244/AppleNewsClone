import { format } from "date-fns";
import Markdown from "react-native-markdown-display";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";

import allNews from "@assets/data/allNews.json";

export default function DetailedArticle() {
  const { id } = useLocalSearchParams(); // Ensures correct parameter fetching
  const newsArticle = allNews.find((article) => article.id === id);

  if (!newsArticle) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Article Not Found!</Text>
      </View>
    );
  }

  const { publisher, image, author, created_at, body, title } = newsArticle;

  return (
    <ScrollView>
      {/* HEADER TITLE */}
      <Stack.Screen
        name="newsArticle/[id]"
        options={{ title: publisher.name }}
      />

      {/* ARTICLE IMAGE */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* ARTICLE CONTENT */}
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.metaText}>
            by {author.name}{" "}
            {format(new Date(created_at), "MMM dd, yyyy hh:mm a")}
          </Text>
        </View>
        <Markdown>{body}</Markdown>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  notFoundText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
  },
  content: {
    padding: 25,
  },
  header: {
    gap: 10,
    paddingBottom: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  metaText: {
    fontWeight: "300",
    color: "grey",
    fontSize: 12,
  },
});
