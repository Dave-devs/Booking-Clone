import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { View } from "react-native";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.button,
        tabBarInactiveTintColor: Colors.black,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontFamily: 'montM',
          fontSize: 10,
        }
      }}
    >
      <Tabs.Screen
        name="search"
        options={{
          headerShown: true,
          title: 'Booking.com',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'montSB',
            fontSize: 20,
            color: Colors.white
          },
          headerStyle: {
            backgroundColor: Colors.primary,
            borderBottomColor: 'transparent',
            shadowColor: 'transparent'
          },
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, gap: 18}}>
              <Feather name="message-circle" size={28} color={Colors.white} />
              <Ionicons name="notifications-outline" size={28} color={Colors.white} />
            </View>
          ),
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
          tabBarLabel: 'Search'
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="heart" size={size} color={color} />
          ),
          tabBarLabel: 'Saved'
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="bag-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Bookings'
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Profile'
        }}
      />
    </Tabs>
  );
}
