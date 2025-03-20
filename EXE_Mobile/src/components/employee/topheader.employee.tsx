import { APP_COLOR } from "@/utils/constant";
import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FONTS } from "@/theme/typography";
interface EmployeeCardProps {
  employeeName: string;
  employeeCode: number;
  employeeAddress: string;
  employeePhone: number;
}

function EmployeeHeader({
  employeeName,
  employeeCode,
  employeeAddress,
  employeePhone,
}: EmployeeCardProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Ionicons
          name="people-outline"
          size={40}
          color="black"
          style={styles.avatar}
        />
        <View style={styles.contentText}>
          <Text style={styles.employeeText}>
            <Text style={styles.boldText}>{employeeName}</Text> - Mã Nhân Viên:{" "}
            {employeeCode}
          </Text>
          <Text style={styles.branchText}>Địa chỉ: {employeeAddress}</Text>
          <Text style={styles.branchText}>{employeePhone}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: APP_COLOR.YELLOW,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  employeeText: {
    fontSize: 20,
    fontFamily: FONTS.regular,
  },
  avatar: {
    marginHorizontal: 10,
    marginVertical: "auto",
  },
  boldText: {
    fontWeight: "bold",
  },
  branchText: {
    fontSize: 20,
    color: "#555",
    marginTop: 4,
    fontFamily: FONTS.regular,
  },
  contentText: {
    marginLeft: 15,
  },
});

export default EmployeeHeader;
