import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';

type SettingsTileProps = {
    iconName: ImageSourcePropType;
    title: string;
    onPress?: () => void;
}

export default function SettingTile({ iconName, title, onPress }: SettingsTileProps) {
  return (
      <View style={styles.container}>
          <Image source={iconName} style={styles.icon} />
          <Text style={styles.text}>{title}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", alignItems: "center", gap: 20, marginHorizontal: 15, marginBottom: 15
    },
    icon: {
        height: 20,
        width: 20,
        resizeMode: "contain",
    },
    text: {
        fontFamily: "montM",
        fontSize: 10,
        color: Colors.black,
        textAlign: "center",
    },
})