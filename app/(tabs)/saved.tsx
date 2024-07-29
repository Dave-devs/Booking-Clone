import { View, Text } from "react-native";
import React from "react";
import { SimpleLineIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";

export default function SavedScreen() {
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
