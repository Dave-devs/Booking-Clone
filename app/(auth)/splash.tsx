import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
      <TouchableOpacity onPress={() => {
        router.push('/(auth)/email');
      }}>
        <Text style={{color: 'black'}}>Splash Screen</Text>
      </TouchableOpacity>
    </View>
  )
}