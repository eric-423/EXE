import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Modal,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as Location from "expo-location";
import { APP_COLOR, BASE_URL } from "@/utils/constant";
import logo from "@/assets/logo.png";
import { FONTS } from "@/theme/typography";
import axios from "axios";
interface HeaderHomeProps {
  onBranchSelect: (id: string) => void;
}
interface IPropsBranches {
  id: number;
  name: string;
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    gap: 3,
    height: 50,
    marginBottom: 5,
  },
  location: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  branchModalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    width: "80%",
    maxWidth: 400,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  branchItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontFamily: FONTS.medium,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: APP_COLOR.BLACK,
    borderBottomColor: APP_COLOR.GREY,
    borderBottomWidth: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalHeader: {
    fontFamily: FONTS.medium,
    fontSize: 18,
    marginBottom: 15,
    color: APP_COLOR.BLACK,
    textAlign: "center",
    fontWeight: "bold",
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: APP_COLOR.ORANGE,
    borderRadius: 8,
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});

const HeaderHome: React.FC<HeaderHomeProps> = ({ onBranchSelect }) => {
  const [location, setLocation] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const [branchesInfo, setBranchInfo] = useState([]);
  const branches = [
    { id: 1, name: "Chi nhánh 1 - Hà Nội" },
    { id: 2, name: "Chi nhánh 2 - TP HCM" },
    { id: 3, name: "Chi nhánh 3 - Đà Nẵng" },
    { id: 4, name: "Chi nhánh 4 - Cần Thơ" },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/branches`);
        console.log(res.data.data);
        setBranchInfo(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleBranchSelect = (branch: any) => {
    setSelectedBranch(branch.name);
    onBranchSelect(branch.id); // Pass the branch ID to parent
    setIsModalVisible(false); // Close the modal
  };
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const locationData = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = locationData.coords;

        const address = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        if (address.length > 0) {
          const { city, region, subregion, district } = address[0];
          const parts = [];
          if (city) parts.push(city);
          if (region) parts.push(region);
          if (subregion || district) parts.push(district || subregion);
          const fullAddress = parts.join(", ");
          setLocation(fullAddress || "Không tìm thấy địa chỉ");
        } else {
          setLocation("Không tìm thấy địa chỉ");
        }
      }
    };

    getLocation();
  }, []);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Text
          style={{
            paddingLeft: 5,
            position: "absolute",
            top: 3,
            left: 10,
            fontFamily: FONTS.medium,
            fontSize: 17,
          }}
        >
          Giao đến:
        </Text>
        <Entypo
          name="location-pin"
          size={20}
          color={APP_COLOR.ORANGE}
          style={{
            marginLeft: 10,
            position: "absolute",
            top: 3,
            left: 70,
          }}
        />
        <Text
          style={{
            position: "absolute",
            top: 3,
            left: 100,
            fontFamily: FONTS.medium,
            fontSize: 17,
          }}
        >
          {location ? location : "Đang lấy vị trí..."}
        </Text>

        <Image
          source={logo}
          style={{
            height: 70,
            width: 70,
            position: "absolute",
            right: 10,
            top: 10,
            transform: [{ translateY: -25 }],
          }}
        />
      </View>

      <Pressable onPress={() => setIsModalVisible(true)}>
        <Text
          style={{
            position: "absolute",
            fontFamily: FONTS.regular,
            fontSize: 17,
            color: APP_COLOR.ORANGE,
            top: 25,
            left: 15,
          }}
        >
          {selectedBranch || "Chọn chi nhánh"}
        </Text>
      </Pressable>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.branchModalContent}>
            <Text style={styles.modalHeader}>Chọn chi nhánh</Text>
            <FlatList
              data={branchesInfo}
              renderItem={({ item }: { item: IPropsBranches }) => (
                <Pressable onPress={() => handleBranchSelect(item)}>
                  <Text style={styles.branchItem}>{item.name}</Text>
                </Pressable>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            <Pressable onPress={() => setIsModalVisible(false)}>
              <Text style={styles.closeButton}>Đóng</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HeaderHome;
