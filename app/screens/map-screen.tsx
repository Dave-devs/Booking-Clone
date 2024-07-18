import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import React, { useRef, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import MapView, { Marker } from "react-native-maps";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

export default function MapScreen() {
  const router = useRouter();
  const { destinations, destination, date } = useLocalSearchParams();
  const parsedDate = JSON.parse(date as string);
  const parsedDestinations = JSON.parse(destinations?.toString() || "[]");
  
  const mapView = useRef<MapView | null>(null);
  let coordinates: { latitude: number; longitude: number }[] = [];
  const details = parsedDestinations?.map((item: any) =>
    item.properties?.map((prop: any) => {
      coordinates.push({
        latitude: Number(prop.latitude),
        longitude: Number(prop.longitude),
      });
    })
  );

  useEffect(() => {
    mapView!.current!.fitToCoordinates(coordinates, {
      edgePadding: {
        top: 190,
        left: 190,
        bottom: 190,
        right: 190,
      },
    });
  }, []);

  return (
    <View style={defaultStyles.container}>
      {/* MapView Component */}
      <MapView ref={mapView} style={styles.map}>
        {parsedDestinations.map((item: any) =>
          item.properties?.map((prop: any) => {
            return (
              <Marker
                key={prop.id}
                title={prop.title}
                coordinate={{
                  latitude: Number(prop.latitude),
                  longitude: Number(prop.longitude),
                }}
              >
                <TouchableOpacity style={styles.priceBox}>
                  <Text style={styles.price}>{"$" + prop.newPrice}</Text>
                </TouchableOpacity>
              </Marker>
            );
          })
        )}
      </MapView>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
  priceBox: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 8,
  },
  price: {
    fontFamily: "montSB",
    fontSize: 12,
    color: Colors.white,
    textAlign: "center",
  },
});
