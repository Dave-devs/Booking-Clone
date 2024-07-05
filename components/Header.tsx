import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    >
      <TouchableOpacity style={styles.selectedItemBox}>
        <Ionicons name="bed-outline" size={24} color={Colors.white} />
        <Text style={styles.selectedItemText}>Stays</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.unselectedItemBox}>
        <Ionicons name="car-sport-outline" size={24} color={Colors.white} />
        <Text style={styles.selectedItemText}>Car rental</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.unselectedItemBox}>
        <Ionicons name="airplane-outline" size={24} color={Colors.white} />
        <Text style={styles.selectedItemText}>Flight</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.unselectedItemBox}>
        <FontAwesome5 name="galactic-republic" size={24} color={Colors.white} />
        <Text style={styles.selectedItemText}>Activities</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    height: 55,
    alignItems: "center",
    justifyContent: "space-around",
    gap: 20,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  selectedItemBox: {
    backgroundColor: Colors.accent,
    borderWidth: 1,
    borderColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 90,
  },
  selectedItemText: {
    fontFamily: "montM",
    fontSize: 12,
    color: Colors.white,
  },
  unselectedItemBox: {
    borderColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 9,
    borderRadius: 90,
  },
  unselectedItemText: {
    fontFamily: "montM",
    fontSize: 12,
    color: Colors.white,
  },
});
