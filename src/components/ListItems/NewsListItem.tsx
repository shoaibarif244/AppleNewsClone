import { Link } from "expo-router";
import { News } from "@/types/types";
import { formatDistanceToNow } from "date-fns";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, View, Pressable, StyleSheet } from "react-native";

type NewsListItemProps = {
  newsArticle: News;
};

export default function NewsListItem({ newsArticle }: NewsListItemProps) {
  return (
    <Link href={`newsArticle/${newsArticle.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.row}>
          <View style={styles.textContainer}>
            <Image
              source={require("@assets/reactNativeDev.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>{newsArticle.title}</Text>
          </View>
          <Image source={{ uri: newsArticle.image }} style={styles.image} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.metaText}>
            {formatDistanceToNow(new Date(newsArticle.created_at), {
              addSuffix: true,
            })}
          </Text>
          <Text style={styles.metaText}>&#x2022;</Text>
          <Text style={styles.metaText}>{newsArticle.author.name}</Text>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={22}
            color="grey"
            style={styles.icon}
          />
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    gap: 10,
  },
  row: {
    flexDirection: "row",
  },
  textContainer: {
    flexShrink: 1,
    marginRight: 15,
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: "auto",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  metaText: {
    color: "grey",
    fontSize: 12,
  },
  icon: {
    marginLeft: "auto",
  },
});
