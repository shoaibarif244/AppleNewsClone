import { router, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="newsArticle/[id]"
          options={{
            title: "",
            headerLeft: () => (
              <Ionicons
                name="chevron-back"
                size={25}
                color="black"
                onPress={router.back}
              />
            ),
            headerRight: () => (
              <View style={styles.headerRightContainer}>
                <Ionicons
                  name="share-outline"
                  size={20}
                  color="black"
                  style={styles.icon}
                />
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </View>
            ),
          }}
        />
      </Stack>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    backgroundColor: "#EEEEEE",
    borderRadius: 15,
    padding: 5,
  },
});
