import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import React, { useEffect } from "react";
import { defaultStyles } from "@/constants/Styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import * as Location from "expo-location";
import { AntDesign } from "@expo/vector-icons";

const PlaceSearch = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <KeyboardAvoidingView
      style={[{ paddingTop: insets.top }, defaultStyles.container]}
    >
      <View style={styles.container}>
        <AntDesign name="arrowleft" size={20} color="black" />

        <GooglePlacesAutocomplete
          placeholder="Enter destination"
          minLength={2}
          listViewDisplayed="auto"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // Navigate back to the home screen with the selected place
            router.push({
              pathname: "(tabs)/search",
              params: { selectedPlace: data.description },
            });
          }}
          query={{
            key: "YOUR_GOOGLE_API_KEY",
            language: "en",
          }}
          styles={{
            description: {
              fontWeight: "bold",
            },
            predefinedPlacesDescription: {
              color: Colors.black,
              cursor: "pointer",
              fontFamily: 'mont',
              fontWeight: "bold",
            },
          }}
          currentLocation={true}
          currentLocationLabel="Current location"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default PlaceSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: Colors.yellow,
    borderRadius: 4,
    marginHorizontal: 15,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
