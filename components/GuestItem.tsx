import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface GuestItemProps {
  title: string;
  count: number;
  increase: () => void;
  decrease: () => void;
}

const GuestItem = ({ title, count, increase, decrease }: GuestItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.btnBox}>
        <TouchableOpacity onPress={decrease}>
          <Ionicons name="remove" size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.count}>{count}</Text>
        <TouchableOpacity onPress={increase}>
          <Ionicons name="add" size={24} color={Colors.button} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GuestItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontFamily: "montM",
    fontSize: 12,
    color: Colors.black,
  },
  btnBox: {
    width: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.black,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  count: {
    fontFamily: "montM",
    fontSize: 12,
    color: Colors.black,
  },
});
