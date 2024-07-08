import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Calendar from "react-native-calendar-range-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { useDateContext } from "@/context/DateContext";

type Props = {
  startDate: string;
  endDate: string;
  onChange: ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }) => void;
};

export default function DateScreen() {
  const wt = useWindowDimensions().width;
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const params = useLocalSearchParams();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { setSelectedDates } = useDateContext();

  const handleSelectDates = new Function(
    "return " + params.handleSelectDates
  )();

  const onDonePress = () => {
    if (startDate && endDate) {
      setSelectedDates({
        startDate: startDate,
        endDate: endDate,
      });
      router.back();
    }
  };

  const onDonePressr = () => {
    if (startDate && endDate) {
      setSelectedDates({ startDate: startDate, endDate: endDate });
      router.back();
    }
  };

  return (
    <View style={{ paddingTop: insets.top, flex: 1 }}>
      <Calendar
        style={{
          todayColor: "green",
          selectedDayTextColor: "#ffffff",
          selectedDayBackgroundColor: "#0c63e7",
          selectedBetweenDayTextColor: "#495057",
          selectedBetweenDayBackgroundTextColor: "#f8f9fa",
        }}
        startDate={startDate}
        endDate={endDate}
        onChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
      />

      <Pressable
        style={[styles.button, { width: wt * 0.9, alignSelf: "center" }]}
        onPress={onDonePress}
      >
        <Text style={styles.btnText}>Apply</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.button,
    height: 50,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
  },
  btnText: {
    fontFamily: "montM",
    fontSize: 15,
    color: Colors.white,
  },
});
