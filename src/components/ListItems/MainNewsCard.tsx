import { Link } from "expo-router";
import { News } from "@/types/types";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { useThemedStyles } from "../../hooks/useThemedStyles";
import { Theme } from "../../types/theme";
import NewsListItemFooter from "../NewsListItemFooter";

type MainNewsCardProps = {
  newsArticle: News;
};

export default function MainNewsCard({ newsArticle }: MainNewsCardProps) {
  const styles = useThemedStyles(createStyles);
  
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

const createStyles = (theme: Theme) => StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
    ...theme.shadows.md,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderTopLeftRadius: theme.borderRadius.md,
    borderTopRightRadius: theme.borderRadius.md,
  },
  content: {
    padding: theme.spacing.sm,
  },
  logo: {
    width: 30,
    height: 30,
    marginBottom: theme.spacing.xs,
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.lg,
  },
});
