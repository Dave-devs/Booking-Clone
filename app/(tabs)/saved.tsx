import { View, Text } from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import Colors from "@/constants/Colors";
import { FlatList } from "react-native-gesture-handler";
import { RootState } from "@/store";
import { useAppSelector, useAppDispatch } from "@/hooks/hook";
import { removeFromFavourite } from "@/slices/bookingSlice";
import DestinationItem from "@/components/DestinationItem";

export default function SavedScreen() {
  const booking = useAppSelector((state: RootState) => state.booking);
  console.log('Saved Hotel', booking.hotel)
  const dispatch = useAppDispatch();

  const [save, setSave] = useState(false)
  const handleRemoveBookmark = (item: any[]) => {
    setSave(!save);
    dispatch(removeFromFavourite(item));
  };

  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Saved",
          headerTitleAlign: "left",
          headerTitleStyle: { color: Colors.white },
          headerStyle: { backgroundColor: Colors.primary },
          headerShadowVisible: false,
          headerLeft: () => (
            <View style={{ marginLeft: 15 }}>
              <AntDesign name="arrowleft" size={24} color={Colors.white} />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 15 }}>
              <AntDesign name="sharealt" size={24} color={Colors.white} />
            </View>
          ),
        }}
      />
    </View>
  );
}
