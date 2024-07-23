import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

type CustomButtonProps = {
  text: string;
  onPress: () => void;
};

export default function CustomButton({ text, onPress }: CustomButtonProps) {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnText: {
    fontFamily: "montM",
    fontSize: 14,
    color: Colors.white,
  },
  btn: {
    backgroundColor: Colors.button,
    borderRadius: 4,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
});
