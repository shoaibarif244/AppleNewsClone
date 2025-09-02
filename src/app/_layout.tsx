import { router, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { ThemeProvider, useTheme } from "../components/ThemeProvider";

function ThemedNavigationStack() {
  const { theme } = useTheme();
  
  const themedStyles = StyleSheet.create({
    headerRightContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    icon: {
      backgroundColor: theme.colors.surface,
      borderRadius: 15,
      padding: 5,
    },
  });

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="newsArticle/[id]"
        options={{
          title: "",
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.text,
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={25}
              color={theme.colors.text}
              onPress={router.back}
            />
          ),
          headerRight: () => (
            <View style={themedStyles.headerRightContainer}>
              <Ionicons
                name="share-outline"
                size={20}
                color={theme.colors.text}
                style={themedStyles.icon}
              />
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color={theme.colors.text}
                style={themedStyles.icon}
              />
            </View>
          ),
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <PaperProvider>
        <ThemedNavigationStack />
      </PaperProvider>
    </ThemeProvider>
  );
}


