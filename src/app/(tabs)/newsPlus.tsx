import { Menu } from "react-native-paper";
import { useEffect, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";

import { Magazine } from "@/types/types";
import newestMagazines from "@assets/data/newestMagazines.json";
import popularMagazines from "@assets/data/popularMagazines.json";
import featuredMagazines from "@assets/data/featuredMagazines.json";
import MagazineListItem from "@/components/ListItems/MagazineListItem";

const FILTERS = {
  FEATURED: "Featured",
  POPULAR: "Popular",
  NEWEST: "Newest",
};

const MAGAZINE_DATA = {
  [FILTERS.FEATURED]: featuredMagazines,
  [FILTERS.NEWEST]: newestMagazines,
  [FILTERS.POPULAR]: popularMagazines,
};

type FilterKey = keyof typeof FILTERS;

export default function NewsPlusScreen() {
  const insets = useSafeAreaInsets();
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(FILTERS.NEWEST);
  const [magazinesData, setMagazinesData] = useState<Magazine[]>(
    MAGAZINE_DATA[FILTERS.NEWEST]
  );

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setMenuVisible(false);
  };

  useEffect(() => {
    setMagazinesData(MAGAZINE_DATA[selectedOption]);
  }, [selectedOption]);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={magazinesData}
        renderItem={({ item }) => <MagazineListItem magazine={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            {/* APPLE LOGO HEADER */}
            <View style={styles.logoContainer}>
              <AntDesign name="apple1" size={24} color="black" />
              <Text style={styles.logoText}>News+</Text>
            </View>
            <Text style={styles.subtitle}>Discover</Text>

            {/* Menu Wrapper */}
            <View style={styles.menuContainer}>
              <Text style={styles.menuLabel}>Showing:</Text>
              <Menu
                visible={menuVisible}
                onDismiss={() => setMenuVisible(false)}
                anchorPosition="bottom"
                contentStyle={styles.menuContent}
                anchor={
                  <Pressable
                    onPress={() => setMenuVisible(true)}
                    style={styles.menuButton}
                  >
                    <Text style={styles.menuText}>{selectedOption}</Text>
                    <Entypo name="chevron-down" size={26} color="#FC3C44" />
                  </Pressable>
                }
              >
                {(Object.keys(FILTERS) as FilterKey[]).map((key) => (
                  <Menu.Item
                    key={key}
                    onPress={() => handleSelectOption(FILTERS[key])}
                    title={FILTERS[key]}
                    titleStyle={styles.menuItemText}
                  />
                ))}
              </Menu>
            </View>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  headerContainer: {
    paddingBottom: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  logoText: {
    fontSize: 27,
    fontWeight: "800",
  },
  subtitle: {
    fontSize: 27,
    fontWeight: "800",
    color: "grey",
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuLabel: {
    fontWeight: "bold",
    fontSize: 19,
    marginRight: 5,
  },
  menuButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: {
    fontWeight: "bold",
    fontSize: 19,
    color: "#FC3C44",
  },
  menuContent: {
    backgroundColor: "white",
  },
  menuItemText: {
    fontWeight: "bold",
    fontSize: 19,
    color: "#FC3C44",
  },
});
