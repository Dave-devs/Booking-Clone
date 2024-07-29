import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const Page = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("@/assets/images/destination.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Sometimes plans change</Text>
        <Text style={styles.subText}>
          Here you can refer to all the trips you've canceled maybe next time!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  image: {
    width: 180,
    height: 180,
    alignSelf: "center",
  },
  text: {
    fontFamily: "montB",
    fontSize: 18,
    color: Colors.black,
    textAlign: "center",
    paddingTop: 30,
  },
  subText: {
    fontFamily: "mont",
    fontSize: 12,
    color: Colors.black,
    textAlign: "center",
    paddingHorizontal: 25,
    paddingTop: 10,
  },
});

export default Page;
