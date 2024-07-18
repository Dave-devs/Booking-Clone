import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { EvilIcons, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

type Props = {
  key: number;
  rooms: any;
  children: any;
  property: any;
  adults: any;
  dates: any;
  availablerooms: any;
  onTap: () => void;
};

export default function DestinationItem({
  rooms,
  children,
  property,
  adults,
  dates,
  availablerooms,
  onTap,
}: Props) {
  const { width, height } = useWindowDimensions();
  return (
    <Pressable key={property.id} style={styles.conatiner} onPress={onTap}>
      {/* Image */}
      <Image
        source={{ uri: property.image }}
        style={[styles.image, { width: width / 3.4, height: height - 545 }]}
      />
      <View>
        {/* Title & Heart Icon */}
        <View style={styles.titleBox}>
          <Text style={styles.title}>{property.name}</Text>
          <Ionicons name="heart-outline" size={20} color="black" />
        </View>
        {/* Star Rating Row */}
        <View style={styles.ratingBox}>
          <View style={styles.starBox}></View>
          <Ionicons name="star" size={16} color="#fdc500" />
          <Ionicons name="star" size={16} color="#fdc500" />
          <Ionicons name="star" size={16} color="#fdc500" />
          <View style={styles.thumbBox}>
            <MaterialIcons name="thumb-up-alt" size={11} color={Colors.white} />
          </View>
          <Pressable style={styles.geniusBtn}>
            <Text style={styles.geniusText}>Genius</Text>
          </Pressable>
        </View>
        {/* Rating $ Reviews */}
        <View style={styles.reviewBox}>
          <View style={styles.reviewCount}>
            <Text style={styles.reviewText}>{property.rating}</Text>
          </View>
          <Text style={styles.reviews}>Good • {property.ratingCount} reviews</Text>
        </View>
        {/* Location */}
        <View style={styles.addressBox}>
          <EvilIcons name="location" size={20} color={Colors.black} />
          <Text style={styles.address}>
            {property.address.length > 50
              ? property.address.substring(0, 40) + "..."
              : property.address}
          </Text>
        </View>
        {/* Price */}
        <View style={styles.descBox}>
          <Text style={styles.descText}>
            Price for {rooms} Night and {adults} adults
          </Text>
          <View style={styles.priceBox}>
            <Text style={styles.oldPrice}>
              US$ {property.oldPrice * adults}
            </Text>
            <Text style={styles.newPrice}>
              US$ {property.newPrice * adults}
            </Text>
          </View>
          <Text style={styles.tax}>
            +US$ {property.newPrice / 2} taxes and fees
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
  },
  image: {
    borderRadius: 8,
  },
  titleBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "montSB",
    width: 195,
    fontSize: 11,
    color: Colors.black,
  },
  ratingBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    gap: 2.5,
  },
  starBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  thumbBox: {
    backgroundColor: "#fdc500",
    padding: 2,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  rating: {
    fontFamily: "montSB",
    fontSize: 11,
    color: Colors.black,
  },
  geniusBtn: {
    backgroundColor: Colors.button,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  geniusText: {
    fontFamily: "montB",
    fontSize: 13,
    color: Colors.white,
  },
  addressBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
    alignContent: "flex-start",
  },
  address: {
    fontFamily: "montM",
    fontSize: 10,
    color: Colors.black,
    width: 195,
  },
  descBox: {
    paddingVertical: 5,
  },
  descText: {
    fontFamily: "montM",
    fontSize: 10.5,
    color: Colors.black,
    width: 195,
  },
  priceBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    paddingTop: 5,
  },
  oldPrice: {
    textDecorationLine: "line-through",
    fontFamily: "mont",
    fontSize: 13,
    color: "red",
  },
  newPrice: {
    fontFamily: "montSB",
    fontSize: 16,
    color: Colors.black,
  },
  tax: {
    fontFamily: "mont",
    fontSize: 11,
    color: Colors.black,
  },
  reviewBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
    paddingTop: 5,
    width: 190
  },
  reviewCount: {
    backgroundColor: Colors.button,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  reviewText: {
    fontFamily: "montSB",
    fontSize: 11,
    color: Colors.white,
  },
  reviews: {
    fontFamily: "mont",
    fontSize: 11,
    color: Colors.black,
  },
});
