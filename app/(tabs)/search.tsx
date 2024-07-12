import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Switch,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Header from "@/components/Header";
import Colors from "@/constants/Colors";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import GuestItem from "@/components/GuestItem";
import { useDateContext } from "@/context/DateContext";
import DiscountItem from "@/components/DiscountItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SearchScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [guestModalVisible, setGuestModalVisible] = useState(false);
  const { selectedDates } = useDateContext();
  const [room, setRoom] = useState(0);
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(false);

  const params = useLocalSearchParams();
  
  const searchClick = () => {
    if(!params.query || !selectedDates) {
      Alert.alert(
        "Invalid Details",
        "Please enter all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
      return;
    }

    if (params.query && selectedDates) {
      router.push({
        pathname: 'screens/destinations',
        params: { 
          destination: params.query,
          selectedDates: JSON.stringify(selectedDates),
          room: room,
          adult: adult,
          children: children,
          pets: pets.toString()
        }
      })
    }
  }

  return (
    <>
      <ScrollView style={defaultStyles.container}>
        {/* Header */}
        <Header />

        <ScrollView style={{ flex: 1 }}>
          {/* Booking Card */}
          <View style={styles.bookingCard}>
            {/* Address Text Componenet */}
            <Pressable
              style={styles.textinput}
              onPress={() => router.push("screens/place-search")}
            >
              <AntDesign name="search1" size={24} color="black" />
              <Text style={styles.boxText}>
                {params.query ? params.query : "Enter your destination"}
              </Text>
            </Pressable>

            {/* Date Text Componenet */}
            <Pressable
              style={styles.textinput}
              onPress={() => router.push("screens/date-screen")}
            >
              <AntDesign name="calendar" size={24} color="black" />
              <Text style={styles.boxText}>
                {selectedDates.startDate && selectedDates.endDate
                  ? `${selectedDates.startDate} - ${selectedDates.endDate}`
                  : "Select Dates"}
              </Text>
            </Pressable>

            {/* Room Text Componenet */}
            <Pressable
              style={styles.textinput}
              onPress={() => setGuestModalVisible(!guestModalVisible)}
            >
              <Octicons name="person" size={24} color="black" />
              <Text style={styles.boxText}>
                {`${room} room, ${adult} adult, ${children} children`}
              </Text>
            </Pressable>
            {/* Button */}
            <Pressable style={styles.btn} onPress={searchClick}>
              <Text style={styles.btnText}>Search</Text>
            </Pressable>
          </View>

          {/* Travel More Header Text */}
          <View style={styles.discountHeaderContainer}>
            <Text style={styles.discountHeaderText}>
              Travel more, spend less
            </Text>
          </View>
          <DiscountItem />

          {/* More For You Pic */}
          <View style={styles.discountHeaderContainer}>
            <Text style={styles.discountHeaderText}>More for you</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHg-8YR2cx29gd2vGu9z2ZiXxk422zguuCg&s",
              }}
            />
            <Pressable>
              <Text style={styles.imageText}>Travel articles</Text>
            </Pressable>
          </View>

          <ScrollView></ScrollView>
        </ScrollView>
      </ScrollView>

      {/* Guset Bottom Modal */}
      <BottomModal
        visible={guestModalVisible}
        swipeThreshold={200}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              textStyle={styles.modalText}
              style={styles.modal}
              onPress={() => setGuestModalVisible(!guestModalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={
          <ModalTitle
            title="Select rooms and guests"
            textStyle={{ fontFamily: "montSB", textAlign: "left" }}
            style={{
              marginHorizontal: 0,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          ></ModalTitle>
        }
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        // onBackdropPress={() => setModalVisible(!modalVisible)}
        // onHardwareBackPress={() => setModalVisible(!modalVisible)}
        onTouchOutside={() => setGuestModalVisible(!guestModalVisible)}
      >
        <ModalContent>
          {/* Rooms Button */}
          <GuestItem
            title="Rooms"
            count={room}
            increase={() => setRoom(Math.max(1, room + 1))}
            decrease={() => setRoom(Math.max(1, room - 1))}
          />
          <GuestItem
            title="Adults"
            count={adult}
            increase={() => setAdult(Math.max(1, adult + 1))}
            decrease={() => setAdult(Math.max(1, adult - 1))}
          />
          <GuestItem
            title="Children"
            count={children}
            increase={() => setChildren(Math.max(1, children + 1))}
            decrease={() => setChildren(Math.max(1, children - 1))}
          />
          <View
            style={{
              paddingTop: 25,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Traveling with pets?</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={pets ? "#0c63e7" : "#0a85ed"}
              value={pets}
              onValueChange={() => setPets(!pets)}
            />
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
}

const styles = StyleSheet.create({
  bookingCard: {
    borderWidth: 3,
    borderColor: Colors.yellow,
    margin: 20,
    borderRadius: 5,
  },
  boxText: {
    fontFamily: "mont",
    fontSize: 13,
    color: Colors.black,
    flex: 1,
  },
  btnText: {
    fontFamily: "montM",
    fontSize: 14,
    color: Colors.white,
  },
  textinput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderBottomWidth: 3,
    borderColor: Colors.yellow,
    padding: 14,
  },
  btn: {
    backgroundColor: Colors.button,
    borderRadius: 1,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: Colors.button,
    marginBottom: 15,
    marginHorizontal: 10,
    height: 50,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontFamily: "montM",
    fontSize: 13,
    color: Colors.white,
  },
  discountHeaderContainer: {
    marginLeft: 15,
    marginTop: 20,
  },
  discountHeaderText: {
    fontFamily: "montB",
    fontSize: 15,
    color: Colors.black,
  },
  imageContainer: {
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 30,
  },
  image: {
    height: 250,
    borderRadius: 8,
    width: "100%",
    resizeMode: "cover",
  },
  imageText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
    fontFamily: "montSB",
    fontSize: 15,
  },
});
