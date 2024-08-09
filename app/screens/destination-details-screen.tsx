import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { Destination } from "@/utils/data/Destinations";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { pixelNormalize } from "@/components/Normalize";
import CustomButton from "@/cons../../components/CustomButton";
import Colors from "@/constants/Colors";
import { AmenitisList } from "@/utils/data/AmenitiesList";
import AmenitiesItem from "@/components/AmenitiesItem";

const { width } = Dimensions.get("window");

export default function DestinationDetailsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const {
    name,
    rating,
    oldPrice,
    newPrice,
    photos,
    rooms,
    adults,
    children,
    animals,
    checkin,
    checkout,
    room,
  } = useLocalSearchParams();
  const images = JSON.parse(photos as any);
  const safeNewPrice: any = newPrice ?? 0;

  const rows = [
    images.slice(0, 2), // Top row (2 images)
    images.slice(2, 5), // Bottom row (3 images)
  ];

  return (
    <ScrollView
      style={defaultStyles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Title & Rating */}
      <View style={styles.titleBox}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.reviewCount}>
          <Text style={styles.reviewText}>{rating}</Text>
        </View>
      </View>
      {/* Star Rating & Plan */}
      <View style={styles.planBox}>
        <Ionicons name="star" size={24} color="#fdc500" />
        <Pressable style={styles.geniusBtn}>
          <Text style={styles.geniusText}>Genius</Text>
        </Pressable>
      </View>

      {/* Images */}
      <FlatList
        data={rows}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            {item.map((data: any, imgIndex: any) => (
              <View
                key={data.id}
                style={[
                  styles.column,
                  item.length === 2 ? styles.twoColumn : styles.threeColumn,
                  { width: width / (item.length === 2 ? 2 : 3) - 10 },
                ]}
              >
                <Image source={{ uri: data.image }} style={styles.image} />
                {index === 1 && imgIndex === item.length - 1 && (
                  <View style={styles.overlay}>
                    <Text style={styles.overlayText}>+{5 - item.length}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        )}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
      />
      {/* Amenities List Here */}
      {/* Check in & Check out */}
      <View style={styles.bookingTime}>
        <View>
          <Text>Check-in</Text>
          <Text style={styles.date}>{checkin}</Text>
        </View>

        <View>
          <Text>Check-out</Text>
          <Text style={styles.date}>{checkout}</Text>
        </View>
      </View>

      {/* Rooms, Adults & Children */}
      <View style={styles.rooms}>
        <Text>Rooms and guests</Text>
        <Text style={styles.date}>{`${room ? room : 0} rooms, ${
          adults ? adults : 0
        } adults, ${children ? children : 0} children`}</Text>
      </View>
      {/* Percent Off */}
      <View style={styles.percentBox}>
        <View style={styles.percent}>
          <Text style={styles.percentText}>20% off</Text>
        </View>

        <View style={styles.percent}>
          <Text style={styles.percentText}>Gateway Deal</Text>
        </View>
      </View>
      {/* Price Details */}
      <View style={styles.priceDetails}>
        <Text style={styles.priceText}>
          Price for 1 night and {adults ? adults : 0} adult
        </Text>
        <View style={styles.priceBox}>
          <Text style={styles.oldPrice}>US${oldPrice}</Text>
          <Text style={styles.newPrice}>US${newPrice}</Text>
        </View>
        <Text style={styles.taxPrice}>
          +US$ {safeNewPrice / 10} taxes and fees
        </Text>
      </View>
      {/* Separator */}
      <View style={defaultStyles.separator} />

      {/* Floating Button */}
      {/* <View style={[styles.btnContaier, { width: width }]}>
        <CustomButton text={"See your options"} onPress={() => { }} />
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btnContaier: {
    height: 80,
    position: "absolute",
    bottom: -0,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  titleBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
    marginHorizontal: 15,
  },
  reviewCount: {
    backgroundColor: Colors.primary,
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
  title: {
    fontFamily: "montSB",
    fontSize: 18,
    color: Colors.black,
    flex: 1,
  },
  planBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  geniusBtn: {
    backgroundColor: Colors.primary,
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
  container: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  column: {
    position: "relative",
    height: 150, // Adjust height as needed
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  overlayText: {
    fontFamily: "montSB",
    color: Colors.white,
    fontSize: 17,
  },
  twoColumn: {
    width: width / 2 - 10,
  },
  threeColumn: {
    width: width / 3 - 10,
  },
  bookingTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 60,
    marginBottom: 15,
  },
  date: {
    fontFamily: "montSB",
    fontSize: 14,
    color: Colors.accent,
  },
  rooms: {
    marginHorizontal: 15,
    marginBottom: 15,
  },
  percentBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginHorizontal: 15,
  },
  percent: {
    backgroundColor: "#1c7c54",
    padding: 5,
    borderRadius: 4,
  },
  percentText: {
    fontFamily: "mont",
    fontSize: 10,
    color: Colors.white,
  },
  priceDetails: {
    marginHorizontal: 15,
    paddingTop: 3,
  },
  priceText: {
    fontFamily: "mont",
    fontSize: 12,
    color: Colors.black,
  },
  priceBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  oldPrice: {
    textDecorationLine: "line-through",
    fontFamily: "mont",
    fontSize: 13,
    color: "red",
  },
  newPrice: {
    fontFamily: "montB",
    fontSize: 18,
    color: Colors.black,
  },
  taxPrice: {
    fontFamily: "mont",
    fontSize: 11,
    color: Colors.black,
  },
});
