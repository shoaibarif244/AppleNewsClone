import { Link } from "expo-router";
import { News } from "@/types/types";
import { formatDistanceToNow } from "date-fns";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, View, Pressable, StyleSheet } from "react-native";
import { useThemedStyles } from "../../hooks/useThemedStyles";
import { Theme } from "../../types/theme";

type NewsListItemProps = {
  newsArticle: News;
};

export default function NewsListItem({ newsArticle }: NewsListItemProps) {
  const styles = useThemedStyles(createStyles);
  
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
            color={styles.iconColor}
            style={styles.icon}
          />
        </View>
      </Pressable>
    </Link>
  );
}

const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
    paddingHorizontal: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.xs,
    gap: theme.spacing.sm,
    ...theme.shadows.sm,
  },
  row: {
    flexDirection: "row" as const,
  },
  textContainer: {
    flexShrink: 1,
    marginRight: theme.spacing.md,
    gap: theme.spacing.xs,
  },
  logo: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: theme.borderRadius.md,
    marginLeft: "auto" as const,
  },
  footer: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: theme.spacing.xs,
  },
  metaText: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.xs,
  },
  icon: {
    marginLeft: "auto" as const,
  },
  iconColor: theme.colors.textSecondary,
});
