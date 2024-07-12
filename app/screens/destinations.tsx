import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { Destination } from "@/utils/data/Destinations";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import DestinationItem from "@/components/DestinationItem";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Destinations() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const parsedDates = JSON.parse(params.selectedDates as string);

  return (
    <View style={styles.container}>
      {/* Header Componenet */}
      <View style={styles.headerContainer}>
        <Pressable style={styles.headerItem}>
          <Ionicons
            name="swap-vertical-outline"
            size={20}
            color={Colors.black}
          />
          <Text style={styles.headerText}>Sort</Text>
        </Pressable>

        <Pressable style={styles.headerItem}>
          <Ionicons name="options-outline" size={20} color={Colors.black} />
          <Text style={styles.headerText}>Filter</Text>
        </Pressable>

        <Pressable style={styles.headerItem}>
          <MaterialCommunityIcons
            name="map-search-outline"
            size={20}
            color={Colors.black}
          />
          <Text style={styles.headerText}>Map</Text>
        </Pressable>
      </View>

      {/* Back Button */}
      <Pressable style={styles.backBtnTile} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={Colors.black} />
        <Text style={styles.btnText}>
          {params.destination} • {parsedDates.startDate.substring(5, 10)} -{" "}
          {parsedDates.endDate.substring(5, 10)}
        </Text>
      </Pressable>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.secContainer}
      >
        {Destination.filter((item) => item.place === params.destination).map(
          (item) =>
            item.properties.map((property, index) => (
              <DestinationItem
                key={index}
                rooms={params.room as string}
                children={params.children as string}
                property={property}
                adults={params.children as string}
                dates={params.selectedDates as string}
                availablerooms={property.rooms}
              />
            ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    height: 90,
    backgroundColor: "#f8f9fa",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
    shadowColor: Colors.black,
    shadowRadius: 5,
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  headerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  headerText: {
    fontFamily: "montM",
    fontSize: 12,
  },
  secContainer: {
    marginTop: 5,
    marginHorizontal: 15,
  },
  backBtnTile: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    alignItems: "center",
    gap: 10,
    borderWidth: 3,
    borderColor: Colors.yellow,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    height: 50,
    position: "absolute",
    top: 1,
    left: 10,
    right: 10,
    borderRadius: 8,
  },
  btnText: {
    fontFamily: "montM",
    fontSize: 14,
    color: Colors.black,
    flex: 1
  }
});
