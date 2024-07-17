import React, { useEffect } from "react";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ModalPortal } from "react-native-modals";
import { DateProvider } from "@/context/DateContext";
import Colors from "@/constants/Colors";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";

export { ErrorBoundary } from "expo-router";
export const unstable_settings = { initialRouteName: "(tabs)" };
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    mont: require("../assets/fonts/Montserrat-Regular.ttf"),
    montM: require("../assets/fonts/Montserrat-Medium.ttf"),
    montSB: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    montB: require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <DateProvider>
          <RootLayoutNav />
          <ModalPortal />
        </DateProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function RootLayoutNav() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="screens/place-search" />
      <Stack.Screen name="screens/date-screen" />
      <Stack.Screen
        name="screens/destinations"
        options={{
          headerShown: true,
          headerLeft: () => null,
          headerBackVisible: false,
          title: "",
          headerStyle: { backgroundColor: Colors.primary },
        }}
      />
      <Stack.Screen
        name="screens/filter-screen"
        options={{
          headerShown: true,
          headerBackVisible: false,
          headerLeft: () => {
            return (
              <Pressable onPress={() => router.back()}>
                <FontAwesome6 name="arrow-left" size={24} color="white" />
              </Pressable>
            )
          },
          headerRight: () => {
            return (
              <Pressable>
                <Text style={defaultStyles.headerTitle}>Reset</Text>
              </Pressable>
            );
          },
          title: "Set your filters",
          headerBackTitleStyle: { fontFamily: "montSB", fontSize: 14 },
          headerTitle(props) {
            return (
              <Text style={defaultStyles.headerTitle}>{props.children}</Text>
            );
          },
          headerStyle: defaultStyles.headerStyle,
        }}
      />
    </Stack>
  );
}
