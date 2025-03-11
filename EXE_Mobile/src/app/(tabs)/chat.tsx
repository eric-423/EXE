import EmployeeHeader from "@/components/employee/topheader.employee";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface User {
  id: string;
  name: string;
  status: string;
  avatar: any;
  time: string;
}

const users: User[] = [
  {
    id: "1",
    name: "An đẹp chai",
    status: "Chiều mới lên",
    avatar: "@/assets/demo.jpg",
    time: "5 giờ",
  },
  {
    id: "2",
    name: "An And The Besties",
    status: "Thư đã bình chọn cho 'Cố'...",
    avatar: "@/assets/demo.jpg",
    time: "16 phút",
  },
  {
    id: "3",
    name: "An SanSan",
    status: "Đã bày tỏ cảm xúc 😆 về tin nhắn...",
    avatar: "@/assets/demo.jpg",
    time: "20 phút",
  },
  {
    id: "4",
    name: "An BE",
    status: "Bạn đã gửi một video.",
    avatar: "@/assets/demo.jpg",
    time: "21 phút",
  },
  {
    id: "5",
    name: "...",
    status: "Đã bày tỏ cảm xúc ❤️ về tin nhắn...",
    avatar: "@/assets/demo.jpg",
    time: "22 phút",
  },
  {
    id: "6",
    name: "SWD",
    status: "Phúc: 🤘",
    avatar: "@/assets/demo.jpg",
    time: "23 phút",
  },
  {
    id: "7",
    name: "Trung Trương",
    status: "Đơnn =>> : 1 ngày",
    avatar: "@/assets/demo.jpg",
    time: "1 ngày",
  },
];
const handleSubmit = (id: string) => {
  router.navigate({ pathname: "/chat/[id]", params: { id: id } });
};
const ChatList = () => {
  const renderItem = ({ item }: { item: User }) => {
    return (
      <Pressable onPress={() => handleSubmit(item.id)}>
        <View style={styles.userContainer}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <EmployeeHeader
        branchName="Tam Tac NVH"
        employeeCode="123456"
        employeeName="Minz"
      />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    padding: 10,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  status: {
    color: "#777",
    fontSize: 14,
  },
  time: {
    color: "#777",
    fontSize: 12,
  },
});

export default ChatList;
