import { useState } from "react";
import { Magazine } from "@/types/types";
import Entypo from "@expo/vector-icons/Entypo";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";

type MagazineListItemProps = {
  magazine: Magazine;
};

export default function MagazineListItem({ magazine }: MagazineListItemProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={{ uri: magazine.image }} style={styles.image} />
      <Text style={styles.title}>{magazine.title}</Text>
      <Pressable onPress={() => setIsFollowing((prev) => !prev)}>
        {isFollowing ? (
          <View style={styles.followingContainer}>
            <Entypo name="check" size={12} color="grey" />
            <Text style={styles.followingText}>FOLLOWING</Text>
          </View>
        ) : (
          <Text style={styles.followText}>FOLLOW</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    gap: 5,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 5,
  },
  title: {
    fontWeight: "bold",
  },
  followingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  followingText: {
    fontWeight: "bold",
    fontSize: 10,
    color: "grey",
  },
  followText: {
    fontWeight: "bold",
    fontSize: 10,
    borderWidth: 1.5,
    borderColor: "#FC3C44",
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 10,
    color: "#FC3C44",
    alignSelf: "flex-start",
  },
});
