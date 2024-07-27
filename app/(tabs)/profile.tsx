import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import SettingTile from "@/components/SettingTile";
import { Settings } from "@/utils/data/Settings";
import { Help } from "@/utils/data/Help";
import { Discover } from "@/utils/data/Discover";
import { Legal } from "@/utils/data/Legal";
import { Partners } from "@/utils/data/Partners";

export default function ProfileScreen() {
  return (
    <View style={defaultStyles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "",
          headerStyle: { backgroundColor: Colors.primary },
          headerShadowVisible: false,
          headerRight: () => {
            return (
              <View style={{ marginRight: 20 }}>
                <SimpleLineIcons
                  name="question"
                  size={24}
                  color={Colors.white}
                />
              </View>
            );
          },
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Profile Pic & Details */}
        <View style={styles.blueBox}>
          <View style={styles.imageBox}>
            <Image
              source={require("@/assets/images/dave-devs.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.name}>Davedevs</Text>
        </View>
        {/* Settings Item */}
        <View style={styles.listContainer}>
          {/* Settings and Lagel */}
          <View style={styles.helpTextContainer}>
            <Text style={styles.helpText}>Settings and Lagel</Text>
          </View>
          <FlatList
            data={Settings}
            renderItem={({ item }) => {
              return <SettingTile iconName={item.iconName} title={item.name} />;
            }}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
          />
          {/* Help and support */}
          <View style={styles.helpTextContainer}>
            <Text style={styles.helpText}>Help and support</Text>
          </View>
          <FlatList
            data={Help}
            renderItem={({ item }) => {
              return <SettingTile iconName={item.iconName} title={item.name} />;
            }}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
          />
          {/* Discover */}
          <View style={styles.helpTextContainer}>
            <Text style={styles.helpText}>Discover</Text>
          </View>
          <FlatList
            data={Discover}
            renderItem={({ item }) => {
              return <SettingTile iconName={item.iconName} title={item.name} />;
            }}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
          />
          {/* Settings and Lagel */}
          <View style={styles.helpTextContainer}>
            <Text style={styles.helpText}>Settings and Lagel</Text>
          </View>
          <FlatList
            data={Legal}
            renderItem={({ item }) => {
              return <SettingTile iconName={item.iconName} title={item.name} />;
            }}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
          />
          {/* Partners */}
          <View style={styles.helpTextContainer}>
            <Text style={styles.helpText}>Partners</Text>
          </View>
          <FlatList
            data={Partners}
            renderItem={({ item }) => {
              return <SettingTile iconName={item.iconName} title={item.name} />;
            }}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
          />
        </View>
        {/* Sign out Button */}
        <View style={styles.signout}>
          <Image
            source={require("@/assets/images/signout.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>Sign out</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.white,
    paddingBottom: 20, // Ensure there's some padding at the bottom
  },
  blueBox: {
    backgroundColor: Colors.primary,
    height: 150,
    width: "100%",
    position: "relative",
    top: 0,
    zIndex: -1,
  },
  imageBox: {
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: Colors.yellow,
    marginTop: 10,
  },
  image: {
    height: 67,
    width: 67,
    resizeMode: "cover",
    borderRadius: 50,
    alignSelf: "center",
  },
  name: {
    fontFamily: "montB",
    color: Colors.white,
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
  },
  listContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  helpTextContainer: {
    marginVertical: 15,
  },
  helpText: {
    fontFamily: "montSB",
    fontSize: 14,
    color: Colors.black,
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    tintColor: 'red',
  },
  text: {
    fontFamily: "montM",
    fontSize: 10,
    color: 'red',
    textAlign: "center",
  },
  signout: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginHorizontal: 28,
    marginBottom: 15,
  },
});
