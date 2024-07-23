import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  FlatList,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";

type AmenitiesItemProps = {
  id: string;
  name: string;
  iconName: ImageSourcePropType;
};

export default function AmenitiesItem({
  id,
  name,
  iconName,
}: AmenitiesItemProps) {
  return (
    <ScrollView horizontal={true}>
        <Text>{name}</Text>
      {/* <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image source={iconName} style={styles.image} />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  imageBox: {
      height: 50,
      width: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      backgroundColor: "blue",
  },
  image: {
    height: 24,
    width: 24,
    resizeMode: "center",
  },
  text: {
    fontFamily: "montM",
    fontSize: 10,
    color: Colors.black,
    // textAlign: "center",
  }
});
