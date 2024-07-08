import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Switch,
} from "react-native";
import React, { createContext, useEffect, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Header from "@/components/Header";
import Colors from "@/constants/Colors";
import { AntDesign, Octicons, Feather } from "@expo/vector-icons";
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

export default function SearchScreen() {
  const router = useRouter();
  const [guestModalVisible, setGuestModalVisible] = useState(false);
  const { selectedPlace } = useLocalSearchParams();
  const [address, setAddress] = useState("United States (U.S.A)");
  const { selectedDates } = useDateContext();
  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(1);
  const [pets, setPets] = useState(false);

  useEffect(() => {
    if (selectedPlace) {
      setAddress(selectedPlace as string);
    }
  }, [selectedPlace]);

  return (
    <>
      <ScrollView style={defaultStyles.container}>
        {/* Header */}
        <Header />

        <ScrollView style={{ flex: 1 }}>
          {/* Booking Card */}
          <View style={styles.bookingCard}>
            {/* Addres TextInput */}
            <Pressable
              style={styles.textinput}
              onPress={() => router.push("screens/place-search")}
            >
              <AntDesign name="search1" size={24} color="black" />
              <Text
                style={{
                  fontFamily: "mont",
                  fontSize: 13,
                  color: Colors.black,
                  flex: 1,
                }}
              >
                {address}
              </Text>
            </Pressable>

            {/* Date TextInput */}
            <Pressable
              style={styles.textinput}
              onPress={() => router.push("screens/date-screen")}
            >
              <AntDesign name="calendar" size={24} color="black" />
              <Text
                style={{
                  fontFamily: "mont",
                  fontSize: 13,
                  color: Colors.black,
                  flex: 1,
                }}
              >
                {selectedDates.startDate && selectedDates.endDate
                  ? `${selectedDates.startDate} - ${selectedDates.endDate}`
                  : "Select Dates"}
              </Text>
            </Pressable>

            {/* Room TextInput */}
            <Pressable
              style={styles.textinput}
              onPress={() => setGuestModalVisible(!guestModalVisible)}
            >
              <Octicons name="person" size={24} color="black" />
              <Text
                style={{
                  fontFamily: "mont",
                  fontSize: 13,
                  color: Colors.black,
                  flex: 1,
                }}
              >
                {`${room} room, ${adult} adult, ${children} children`}
              </Text>
            </Pressable>
            {/* Button */}
            <Pressable style={styles.btn}>
              <Text
                style={{
                  fontFamily: "montM",
                  fontSize: 14,
                  color: Colors.white,
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>

          {/*  */}
          <View style={{ marginLeft: 15, marginTop: 35 }}>
            <Text
              style={{ fontFamily: "montB", fontSize: 15, color: Colors.black }}
            >
              Travel more, spend less
            </Text>
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
            increase={() => setRoom(room + 1)}
            decrease={() => setRoom(room - 1)}
          />
          <GuestItem
            title="Adults"
            count={adult}
            increase={() => setAdult(adult + 1)}
            decrease={() => setAdult(adult - 1)}
          />
          <GuestItem
            title="Children"
            count={children}
            increase={() => setChildren(children + 1)}
            decrease={() => setChildren(children - 1)}
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
});
