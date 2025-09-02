import { Tabs } from "expo-router";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { useTheme } from "../../components/ThemeProvider";

const tabIcons: any = {
  index: (color: string) => <Entypo name="news" size={24} color={color} />,
  newsPlus: (color: string) => (
    <MaterialCommunityIcons name="cards" size={24} color={color} />
  ),
  sports: (color: string) => (
    <MaterialCommunityIcons name="soccer-field" size={24} color={color} />
  ),
  audio: (color: string) => (
    <MaterialCommunityIcons name="headphones" size={24} color={color} />
  ),
  following: (color: string) => (
    <MaterialCommunityIcons name="card-search" size={24} color={color} />
  ),
};

const tabScreens = [
  { name: "index", title: "Today" },
  { name: "newsPlus", title: "News+" },
  { name: "sports", title: "Sports" },
  { name: "audio", title: "Audio" },
  { name: "following", title: "Following" },
];

export default function TabsLayout() {
  const { theme } = useTheme();
  
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.card,
          borderTopColor: theme.colors.border,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
      }}
    >
      {tabScreens.map(({ name, title }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color }) => tabIcons[name](color),
          }}
        />
      ))}
    </Tabs>
  );
}
