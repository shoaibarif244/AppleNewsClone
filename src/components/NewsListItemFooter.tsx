import { Author } from "@/types/types";
import { formatDistanceToNow } from "date-fns";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type NewsListItemFooterProps = {
  publishedDate: string;
  author: Author;
};

export default function NewsListItemFooter({
  publishedDate,
  author,
}: NewsListItemFooterProps) {
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
        color="grey"
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    color: "grey",
    fontSize: 12,
  },
  icon: {
    marginLeft: "auto",
  },
});
