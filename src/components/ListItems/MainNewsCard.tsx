import { Link } from "expo-router";
import { News } from "@/types/types";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";

import NewsListItemFooter from "../NewsListItemFooter";

type MainNewsCardProps = {
  newsArticle: News;
};

export default function MainNewsCard({ newsArticle }: MainNewsCardProps) {
  return (
    <Link href={`newsArticle/${newsArticle.id}`} asChild>
      <Pressable style={styles.card}>
        <Image source={{ uri: newsArticle.image }} style={styles.image} />
        <View style={styles.content}>
          <Image
            source={require("@assets/reactNativeDev.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>{newsArticle.title}</Text>
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
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 10,
  },
  logo: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 25,
  },
});
