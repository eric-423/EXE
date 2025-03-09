import {
  currencyFormatter,
  getOrderHistoryAPI,
  getURLBaseBackend,
} from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "@/assets/logo.png";
import { FONTS } from "@/theme/typography";
import demo from "@/assets/demo.jpg";
const OrderPage = () => {
  const [orderHistory, setOrderHistory] = useState<IOrderHistory[]>([]);
  const styles = StyleSheet.create({
    text: {
      fontFamily: FONTS.regular,
      fontSize: 17,
      color: APP_COLOR.ORANGE,
    },
  });
  const orderHistoryList = [
    {
      restaurant: {
        name: "Nhà Hàng ABC",
        address: "123 Đường XYZ, Quận 1, TP.HCM",
        image: demo,
      },
      totalPrice: 350000,
      totalQuantity: 3,
      status: "Đã hoàn thành",
    },
    {
      restaurant: {
        name: "Quán Ăn 123",
        address: "456 Đường DEF, Quận 3, TP.HCM",
        image: demo,
      },
      totalPrice: 500000,
      totalQuantity: 4,
      status: "Đang giao",
    },
    {
      restaurant: {
        name: "Nhà Hàng XYZ",
        address: "789 Đường GHI, Quận 7, TP.HCM",
        image: demo,
      },
      totalPrice: 270000,
      totalQuantity: 2,
      status: "Đã hủy",
    },
  ];

  useEffect(() => {
    const fetchOrderHistory = async () => {
      const res = await getOrderHistoryAPI();
      if (res.data) setOrderHistory(res.data);
    };
    fetchOrderHistory();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            borderBottomColor: "#eee",
            borderBottomWidth: 1,
            paddingHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: APP_COLOR.ORANGE,
                marginVertical: "auto",
                fontFamily: FONTS.bold,
                fontSize: 20,
              }}
            >
              Lịch sử đơn hàng
            </Text>
            <Image
              source={logo}
              style={{ width: 100, height: 100, marginLeft: 110 }}
            />
          </View>
        </View>
        <ScrollView style={{ flex: 1 }}>
          {orderHistoryList.map((item, index) => {
            return (
              <View key={index}>
                <View
                  style={{
                    padding: 10,
                    flexDirection: "row",
                    gap: 10,
                    backgroundColor: "#efefef",
                  }}
                >
                  <Image
                    source={item.restaurant?.image}
                    style={{ height: 100, width: 100 }}
                  />
                  <View style={{ gap: 10 }}>
                    <Text style={styles.text}>{item.restaurant.name}</Text>
                    <Text style={styles.text}>{item.restaurant.address}</Text>
                    <Text style={styles.text}>
                      {currencyFormatter(item.totalPrice)} ({item.totalQuantity}{" "}
                      món)
                    </Text>
                    <Text style={styles.text}>
                      Trạng thái:{" "}
                      {(() => {
                        switch (item.status) {
                          case "Đã hoàn thành":
                            return (
                              <Text style={{ color: "green" }}>
                                {item.status}
                              </Text>
                            );
                          case "Đang giao":
                            return (
                              <Text style={{ color: APP_COLOR.YELLOW }}>
                                {item.status}
                              </Text>
                            );
                          case "Đã hủy":
                            return (
                              <Text style={{ color: "red" }}>
                                {item.status}
                              </Text>
                            );
                          default:
                            return null;
                        }
                      })()}
                    </Text>
                  </View>
                </View>
                <View
                  style={{ height: 10, backgroundColor: APP_COLOR.YELLOW }}
                ></View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderPage;
