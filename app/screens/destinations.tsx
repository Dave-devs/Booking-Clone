import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { Destination } from "@/utils/data/Destinations";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import DestinationItem from "@/components/DestinationItem";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import { Sort } from "@/utils/data/Sort";
import { defaultStyles } from "@/constants/Styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { RootState } from "@/store";
import { addToFavourite, removeFromFavourite } from "@/slices/bookingSlice";

export default function Destinations() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const params = useLocalSearchParams();
  const parsedDates = JSON.parse(params.selectedDates as string);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [selectedfilter, setSelectedFilter] = useState<string>();
  const [sortedData, setSortedData] = useState(Destination);

  const destinations = Destination.filter(
    (item) => item.place === params.destination
  );
  const compareH2L = (a: any, b: any) => {
    if (a.newPrice > b.newPrice) return -1;
    if (a.newPrice < b.newPrice) return 1;
    return 0;
  };
  const compareL2H = (a: any, b: any) => {
    if (a.newPrice < b.newPrice) return -1;
    if (a.newPrice > b.newPrice) return 1;
    return 0;
  };
  const applySort = (filter: string) => {
    setSortModalVisible(!sortModalVisible); // false
    switch (filter) {
      case "Price (high to low)":
        destinations.map((item) => item.properties.sort(compareH2L));
        setSortedData(destinations);
        break;
      case "Price (low to high)":
        destinations.map((item) => item.properties.sort(compareL2H));
        setSortedData(destinations);
        break;

      default:
        break;
    }
  };


  const dispatch = useAppDispatch();

  const [save, setSave] = useState(false)
  const handleAddBookmark = (item: any[]) => {
    {/*OnClick affected all Icon color */}
    setSave(!save);
    dispatch(addToFavourite(item));
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {/* Header Componenet */}
      <View style={styles.headerContainer}>
        <Pressable
          style={styles.headerItem}
          onPress={() => setSortModalVisible(!sortModalVisible)}
        >
          <Ionicons
            name="swap-vertical-outline"
            size={20}
            color={Colors.black}
          />
          <Text style={styles.headerText}>Sort</Text>
        </Pressable>

        <Pressable
          style={styles.headerItem}
          onPress={() => router.push("/screens/filter-screen")}
        >
          <Ionicons name="options-outline" size={20} color={Colors.black} />
          <Text style={styles.headerText}>Filter</Text>
        </Pressable>

        <Pressable
          style={styles.headerItem}
          onPress={() =>
            router.push({
              pathname: "/screens/map-screen",
              params: {
                destinations: JSON.stringify(
                  destinations as typeof Destination
                ),
                destination: params.destination,
                date: params.selectedDates,
              },
            })
          }
        >
          <MaterialCommunityIcons
            name="map-search-outline"
            size={20}
            color={Colors.black}
          />
          <Text style={styles.headerText}>Map</Text>
        </Pressable>
      </View>

      {/* Back Floating Tile Button */}
      <Pressable style={styles.backBtnTile} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={Colors.black} />
        <Text style={styles.btnText}>
          {params.destination} • {parsedDates.startDate.substring(5, 10)} -{" "}
          {parsedDates.endDate.substring(5, 10)}
        </Text>
      </Pressable>

      {/* Destinations Tile */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.secContainer}
      >
        {sortedData
          ?.filter((item) => item.place === params.destination)
          .map((item) =>
            item.properties.map((property, index) => (
              <DestinationItem
                key={index}
                rooms={params.room as string}
                children={params.children as string}
                property={property}
                adults={params.children as string}
                dates={params.selectedDates as string}
                availablerooms={property.rooms}
                onTap={() =>
                  router.push({
                    pathname: "/screens/destination-details-screen",
                    params: {
                      name: property.name,
                      rating: property.rating,
                      oldPrice: property.oldPrice,
                      newPrice: property.newPrice,
                      photos: JSON.stringify(property.photos),
                      rooms: JSON.stringify(property.rooms),
                      adults: params.adults,
                      children: params.children,
                      animals: params.pets,
                      checkin: parsedDates.startDate,
                      checkout: parsedDates.endDate,
                      room: params.room,
                    },
                  })
                }
                bookmarkTap={save}
                bookmark={() => handleAddBookmark({...item.properties})}
              />
            ))
          )}
      </ScrollView>

      <BottomModal
        visible={sortModalVisible}
        swipeThreshold={200}
        swipeDirection={["up", "down"]}
        modalTitle={
          <ModalTitle
            title="Sort by"
            textStyle={defaultStyles.modalTitleText}
            style={defaultStyles.modalTitle}
          ></ModalTitle>
        }
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              textStyle={defaultStyles.modalText}
              style={defaultStyles.modal}
              onPress={() => applySort(selectedfilter!)}
            />
          </ModalFooter>
        }
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onTouchOutside={() => setSortModalVisible(!sortModalVisible)}
      >
        <ModalContent>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={defaultStyles.sortTextContaier}>
              <Text style={defaultStyles.sortTitleText}>Sort</Text>
            </View>

            <View style={{ flex: 3, margin: 10 }}>
              {Sort.map((item, index) => (
                <Pressable
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                  onPress={() => setSelectedFilter(item.sort)}
                >
                  <FontAwesome
                    name={
                      selectedfilter?.includes(item.sort)
                        ? "circle"
                        : "circle-thin"
                    }
                    size={18}
                    color={
                      selectedfilter?.includes(item.sort)
                        ? Colors.button
                        : Colors.black
                    }
                  />
                  <Text style={defaultStyles.sortText}>{item.sort}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    height: 90,
    backgroundColor: "#f8f9fa",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
    shadowColor: Colors.black,
    shadowRadius: 5,
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  headerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  headerText: {
    fontFamily: "montM",
    fontSize: 12,
  },
  secContainer: {
    marginTop: 5,
    marginHorizontal: 15,
  },
  backBtnTile: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    alignItems: "center",
    gap: 10,
    borderWidth: 3,
    borderColor: Colors.yellow,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    height: 50,
    position: "absolute",
    top: 1,
    left: 10,
    right: 10,
    borderRadius: 8,
  },
  btnText: {
    fontFamily: "montM",
    fontSize: 14,
    color: Colors.black,
    flex: 1,
  },
});
