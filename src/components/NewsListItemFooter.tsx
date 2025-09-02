import { Author } from "@/types/types";
import { formatDistanceToNow } from "date-fns";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useThemedStyles } from "../hooks/useThemedStyles";
import { Theme } from "../types/theme";

type NewsListItemFooterProps = {
  publishedDate: string;
  author: Author;
};

export default function NewsListItemFooter({
  publishedDate,
  author,
}: NewsListItemFooterProps) {
  const styles = useThemedStyles(createStyles);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {formatDistanceToNow(new Date(publishedDate), { addSuffix: true })}
      </Text>
      <Text style={styles.text}>&#x2022;</Text>
      <Text style={styles.text}>{author.name}</Text>
      <MaterialCommunityIcons
        name="dots-horizontal"
        size={22}
        color={styles.iconColor}
        style={styles.icon}
      />
    </View>
  );
}

const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: theme.spacing.xs,
  },
  text: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.fontSize.xs,
  },
  icon: {
    marginLeft: "auto" as const,
  },
  iconColor: theme.colors.textSecondary,
});
