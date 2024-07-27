import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

export default function LevelTile() {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Genius Level 1</Text>
      <View style={styles.levelBox}>
        <Text>Genius Level 1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 130,
    left: 20,
    right: 20,
  },
  title: {
    fontFamily: "mont",
    fontSize: 12,
    color: Colors.yellow,
    textAlign: "center",
    marginBottom: 20,
  },
  levelBox: {
      backgroundColor: "#f8f9fa",
    height: 220,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
