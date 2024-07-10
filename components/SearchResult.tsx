import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { Destination } from "../utils/data/Destinations";
import { useRouter } from "expo-router";

type SearchResultProps = {
  data: typeof Destination;
  query: string;
  setQuery: (value: string) => void;
};

export default function SearchResult({
  data,
  query,
  setQuery
}: SearchResultProps) {
  const router = useRouter();

  const filteredData = data.filter((item) =>
    item.place.toLowerCase().includes(query.toLowerCase())
  );

  const navigateToHomeScreen = (place: string) => {
    router.replace({
      pathname: "(tabs)/search",
      params: { query: place },
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={query === "" ? [] : filteredData}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              setQuery(item.place);
              navigateToHomeScreen(item.place)
            }}
            style={styles.placeContainer}
          >
            <View>
              <Image style={styles.image} source={{ uri: item.placeImage }} />
            </View>
            <View style={styles.detailsBox}>
              <Text style={styles.placeText}>{item.place}</Text>
              <Text style={styles.descText}>{item.shortDescription}</Text>
              <Text style={styles.propertyText}>
                {item.properties.length} Properties
              </Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  placeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  image: {
    width: 100,
    height: 70,
    resizeMode: "cover",
    borderRadius: 4,
  },
  detailsBox: {
    marginLeft: 10,
  },
  placeText: { fontSize: 15, fontWeight: "500" },
  descText: { marginVertical: 4 },
  propertyText: {
    color: "gray",
    fontSize: 15,
  },
});
