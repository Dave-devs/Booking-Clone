import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import * as Location from "expo-location";
import { AntDesign, Feather } from "@expo/vector-icons";

const PlaceSearch = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [searchInput, setSearchInput] = useState("");

  // const requestLocationPermission = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== "granted") {
  //     console.log("Permission to access location was denied");
  //     return;
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   console.log(location);
  // };

  // useEffect(() => {
  //   requestLocationPermission();
  // }, []);

  return (
    <KeyboardAvoidingView
      style={[{ paddingTop: insets.top }, defaultStyles.container]}
    >
      <View style={styles.container}>
        <Pressable onPress={router.back}>
          <AntDesign name="arrowleft" size={20} color={Colors.black} />
        </Pressable>
        <TextInput
          value={searchInput}
          onChangeText={(value) => setSearchInput(value)}
          placeholder="Enter destination"
          style={styles.textinput}
          numberOfLines={1}
        />
        <Pressable>
          <Feather name="search" size={20} color={Colors.black} />
        </Pressable>

        {/* <GooglePlacesAutocomplete
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
        /> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default PlaceSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    borderWidth: 3,
    borderColor: Colors.yellow,
    borderRadius: 4,
    marginHorizontal: 15,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  textinput: {
    flex: 1,
    height: 40,
    fontFamily: 'montM',
    fontSize: 13,
  },
});
