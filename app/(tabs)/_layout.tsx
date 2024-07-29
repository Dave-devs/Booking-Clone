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
        headerShown: true,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontFamily: 'montM',
          fontSize: 10,
        },
        headerStyle: {
          backgroundColor: Colors.primary,
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
              <Feather name="message-circle" size={24} color={Colors.white} />
              <Ionicons name="notifications-outline" size={24} color={Colors.white} />
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
        name="(bookings)"
        options={{
          headerShown: true,
          headerTitle: "Trips",
          headerTitleStyle: { color: Colors.white },
          headerShadowVisible: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="bag-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Bookings',
          headerLeft: () => (
            <View style={{ marginLeft: 15 }}>
              <AntDesign name="arrowleft" size={24} color={Colors.white} />
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15, gap: 18 }}>
              <SimpleLineIcons
                name="question"
                size={24}
                color={Colors.white}
              />
              <Ionicons name="add" size={24} color={Colors.white} />
            </View>
          ),
          
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
