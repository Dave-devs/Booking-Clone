import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function DiscountItem() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {/* Genius Item */}
      <Pressable style={styles.blueItem}>
        <Text style={styles.blueTitle}>Genius</Text>
        <Text style={styles.blueSubtitle}>
          Oreoluwa, you're at{" "}
          <Text style={[styles.blueItem, { fontFamily: "montB" }]}>
            Genius Level 1
          </Text>{" "}
          in our loyalty program
        </Text>
      </Pressable>

      {/* Clear Items */}
      <Pressable style={styles.borderItem}>
        <View style={styles.clearTitleContainer}>
          <Text style={styles.clearTitle}>10% discounts on stays</Text>
          <Feather name="divide-circle" size={20} color={Colors.button} />
        </View>
        <Text style={styles.clearSubtitle}>
          Enjoy discounts at participating properties worldwide
        </Text>
      </Pressable>

      <Pressable style={styles.borderItem}>
        <View style={styles.borderTitleContainer}>
          <Text style={styles.borderTitle}>10% off rental cars</Text>
          <Ionicons name="car-sport-outline" size={20} color={Colors.button} />
        </View>
        <Text style={styles.borderSubtitle}>Save on select rental cars</Text>
      </Pressable>

      <Pressable style={styles.clearItem}>
        <View style={styles.clearTitleContainer}>
          <Text style={styles.clearTitle}>15% discouts on stays</Text>
          <MaterialIcons name="lock-outline" size={20} color="#adb5bd" />
        </View>
        <Text style={styles.clearSubtitle}>
          Complete 5 bookings to unlock Genius Level 2
        </Text>
      </Pressable>

      <Pressable style={styles.clearItem}>
        <View style={styles.clearTitleContainer}>
          <Text style={styles.clearTitle}>Free breakfasts</Text>
          <MaterialIcons name="lock-outline" size={20} color="#adb5bd" />
        </View>
        <Text style={styles.clearSubtitle}>
          Complete 5 bookings to unlock Genius Level 2
        </Text>
      </Pressable>

      <Pressable style={styles.clearItem}>
        <View style={styles.clearTitleContainer}>
          <Text style={styles.clearTitle}>Free room upgrades</Text>
          <MaterialIcons name="lock-outline" size={20} color="#adb5bd" />
        </View>
        <Text style={styles.clearSubtitle}>
          Complete 5 bookings to unlock Genius Level 2
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  blueItem: {
    padding: 12,
    marginRight: 10,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    height: 100,
    width: 210,
    gap: 10,
    alignContent: "center",
  },
  blueTitle: {
    fontFamily: "montB",
    fontSize: 16,
    color: Colors.white,
  },
  blueSubtitle: {
    fontFamily: "mont",
    fontSize: 12,
    color: Colors.white,
  },
  borderItem: {
    padding: 12,
    marginRight: 10,
    borderWidth: 0.6,
    borderColor: Colors.primary,
    borderRadius: 8,
    height: 100,
    width: 210,
    gap: 10,
    alignContent: "center",
  },
  borderTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  borderTitle: {
    fontFamily: "montSB",
    fontSize: 12,
    color: Colors.black,
  },
  borderSubtitle: {
    fontFamily: "mont",
    fontSize: 10.5,
    color: Colors.black,
  },
  clearItem: {
      backgroundColor: "#e9ecef",
    padding: 12,
    marginRight: 10,
    borderWidth: 0.6,
    borderColor: "grey",
    borderRadius: 8,
    height: 100,
    width: 210,
    gap: 10,
    alignContent: "center",
  },
  clearTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  clearTitle: {
    fontFamily: "montSB",
    fontSize: 12,
    color: Colors.black,
  },
  clearSubtitle: {
    fontFamily: "mont",
    fontSize: 10.5,
    color: Colors.black,
  },
});
