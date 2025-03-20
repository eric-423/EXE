import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import EmployeeHeader from "@/components/employee/topheader.employee";
import ShareButton from "@/components/button/share.button";
import { FONTS } from "@/theme/typography";
import { APP_COLOR } from "@/utils/constant";
import { SafeAreaView } from "react-native-safe-area-context";
const HomePage = () => {
  const today = new Date();
  const currentDate = today.toISOString().split("T")[0];
  const styles = StyleSheet.create({
    textStyle: {
      fontFamily: FONTS.regular,
      fontSize: 20,
      color: APP_COLOR.WHITE,
      marginHorizontal: "auto",
    },
    btnStyle: {
      marginHorizontal: 10,
      width: 150,
    },
  });
  const test = ["2025-03-19", "2025-03-21"];

  type taskDate = {
    marked: boolean;
    selectedTextColor: string;
  };
  const handleViewSlot = () => {
    alert("me");
  };
  const [markedDates, setMarkedDates] = useState<{
    [key: string]: {
      selected?: boolean;
      selectedColor?: string;
      selectedTextColor?: string;
    };
  }>({});
  const [selectedDate, setSelectedDate] = useState("");
  const initializeMarkedDates = () => {
    const initialMarkedDates = test.reduce<{ [key: string]: taskDate }>(
      (acc, date) => {
        acc[date] = {
          marked: true,
          selectedTextColor: "white",
        };
        return acc;
      },
      {}
    );
    return initialMarkedDates;
  };

  const markedSelectDate = (day: any) => {
    const selectedDay = day.dateString;
    setSelectedDate(selectedDay);
    const newMarkedDates = {
      ...initializeMarkedDates(),
      [selectedDay]: {
        selected: true,
        selectedColor: "orange",
        selectedTextColor: "white",
      },
    };

    setMarkedDates(newMarkedDates);
  };

  const combinedMarkedDates = {
    ...initializeMarkedDates(),
    ...markedDates,
  };
  const sortedDates = Object.keys(combinedMarkedDates).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: APP_COLOR.GREY,
        }}
      >
        <View>
          <EmployeeHeader
            employeeName="Minz"
            employeeCode="123456"
            branchName="Tam Tac NVH"
          />
        </View>
        <Calendar
          current={currentDate}
          markedDates={combinedMarkedDates}
          onDayPress={markedSelectDate}
        />
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "auto",
            marginBottom: 10,
          }}
        >
          <ShareButton
            title="Ca trống"
            onPress={handleViewSlot}
            textStyle={styles.textStyle}
            btnStyle={styles.btnStyle}
          />
          <ShareButton
            title="Ca đã đăng kí"
            onPress={handleViewSlot}
            textStyle={styles.textStyle}
            btnStyle={styles.btnStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
