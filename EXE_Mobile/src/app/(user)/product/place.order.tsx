import { useCurrentApp } from "@/context/app.context";
import { FONTS } from "@/theme/typography";
import { jwtDecode } from "jwt-decode";
import { currencyFormatter, placeOrderAPI } from "@/utils/api";
import { APP_COLOR, BASE_URL } from "@/utils/constant";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Modal,
} from "react-native";
import Toast from "react-native-root-toast";
import Entypo from "@expo/vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
interface IOrderItem {
  image: string;
  title: string;
  option: string;
  price: number;
  quantity: number;
  productId: number;
}
interface ICusInfor {
  address: string;
  phone: string;
  fullName: string;
  userId: number;
}
const PlaceOrderPage = () => {
  const { restaurant, cart, setCart } = useCurrentApp();
  const [orderItems, setOrderItems] = useState<IOrderItem[]>([]);
  const [decodeToken, setDecodeToken] = useState<any>("");
  const [modalVisible, setModalVisible] = useState(false);
  const [addresses, setAddresses] = useState<ICusInfor[]>([
    {
      userId: 1,
      fullName: "Home",
      address: "Hồ Chí Minh, Việt Nam",
      phone: "0889679561",
    },
    {
      userId: 2,
      fullName: "Office",
      address: "Hà Nội, Việt Nam",
      phone: "0889679561",
    },
    {
      userId: 3,
      fullName: "Friend's Place",
      address: "Đà Nẵng, Việt Nam",
      phone: "0889679561",
    },
  ]);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [orderDetails, setOrderDetails] = useState<
    { productId: number; quantity: number }[]
  >([]);
  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const token = await AsyncStorage.getItem("access_token");
        setDecodeToken(token);
        if (token) {
          const decoded = jwtDecode(token);
          setDecodeToken(decoded.id);
        } else {
          console.log("No access token found.");
        }
      } catch (error) {
        console.error("Error retrieving access token:", error);
      }
    };
    getAccessToken();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resDefault = await axios.get(
          `${BASE_URL}/information/default?customerId=${decodeToken}`
        );
        setSelectedAddress(resDefault.data.data);
        const resAddresses = await axios.get(
          `${BASE_URL}/information/${decodeToken}`
        );
        if (resAddresses.data.data) {
          setAddresses(resAddresses.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (decodeToken) {
      fetchData();
    }
  }, [decodeToken]);
  const styles = StyleSheet.create({
    container: {
      paddingTop: 5,
      gap: 3,
      height: 50,
    },
    location: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      width: "80%",
    },
    modalButton: {
      marginTop: 20,
      backgroundColor: APP_COLOR.ORANGE,
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      width: 120,
      marginHorizontal: 3,
    },
    addressItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
      borderBottomColor: "#eee",
      borderBottomWidth: 1,
    },
    textInfor: {
      color: APP_COLOR.GREY,
      fontFamily: FONTS.regular,
      fontSize: 17,
    },
    textNameInfor: {
      fontFamily: FONTS.regular,
      fontSize: 17,
    },
  });

  useEffect(() => {
    if (cart && restaurant && restaurant._id) {
      const result = [];
      const details: OrderDetail[] = [];

      for (const [menuItemId, currentItems] of Object.entries(
        cart[restaurant._id].items
      )) {
        if (currentItems.extra) {
          for (const [key, value] of Object.entries(currentItems.extra)) {
            const option = currentItems.data.options?.find(
              (item) => `${item.title}-${item.description}` === key
            );
            const addPrice = option?.additionalPrice ?? 0;
            result.push({
              image: currentItems.data.productImage,
              title: currentItems.data.title,
              option: key,
              price: currentItems.data.basePrice + addPrice,
              quantity: value,
              productId: currentItems.data.productId,
            });
          }
        } else {
          result.push({
            image: currentItems.data.productImage,
            title: currentItems.data.title,
            option: "",
            price: currentItems.data.basePrice,
            quantity: currentItems.quantity,
            productId: currentItems.data.productId,
          });
        }

        details.push({
          productId: currentItems.data.productId,
          quantity: currentItems.quantity,
        });
      }
      setOrderItems(result);
      setOrderDetails(details);
    }
  }, [restaurant]);

  const handleSelectAddress = (address: any) => {
    setSelectedAddress(address);
    setModalVisible(false);
    Toast.show(`Selected Address: ${address.name}`, {
      duration: Toast.durations.LONG,
      textColor: "white",
      backgroundColor: APP_COLOR.ORANGE,
      opacity: 1,
    });
  };

  const handleCreateNewAddress = () => {
    router.navigate("/(user)/account/customer.info");
  };

  const handlePlaceOrder = async () => {
    const data = {
      restaurant: restaurant?._id,
      totalPrice: cart?.[restaurant!._id].sum,
      totalQuantity: cart?.[restaurant!._id].quantity,
      detail: orderItems,
    };

    const res = await placeOrderAPI(data);
    if (res.data) {
      Toast.show("Đặt hàng thành công", {
        duration: Toast.durations.LONG,
        textColor: "white",
        backgroundColor: APP_COLOR.ORANGE,
        opacity: 1,
      });

      if (restaurant) {
        delete cart[restaurant._id];
        setCart((prevCart: any) => ({ ...prevCart, ...cart }));
      }

      router.navigate("/");
    } else {
      const m = Array.isArray(res.message) ? res.message[0] : res.message;

      Toast.show(m, {
        duration: Toast.durations.LONG,
        textColor: "white",
        backgroundColor: APP_COLOR.ORANGE,
        opacity: 1,
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable onPress={() => setModalVisible(true)}>
        <View
          style={{
            borderBottomColor: "#eee",
            borderBottomWidth: 1,
            padding: 10,
            flexDirection: "row",
          }}
        >
          <View style={styles.container}>
            <View style={styles.location}>
              <Entypo
                name="location-pin"
                size={20}
                color={APP_COLOR.ORANGE}
                style={{
                  marginRight: 10,
                }}
              />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    fontSize: 17,
                  }}
                >
                  {selectedAddress ? selectedAddress.fullName : "Minh Duy"}
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    fontSize: 17,
                    color: APP_COLOR.GREY,
                    marginLeft: 30,
                  }}
                >
                  {selectedAddress ? selectedAddress.phone : "0889679561"}
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 10, marginLeft: 10 }}>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: 17,
                  marginLeft: 20,
                }}
              >
                {selectedAddress
                  ? selectedAddress.address
                  : "Hồ Chí Minh, Việt Nam"}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>

      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontWeight: "600",
            fontFamily: FONTS.regular,
            fontSize: 20,
          }}
        >
          {restaurant?.name}
        </Text>
      </View>

      <ScrollView style={{ flex: 1, padding: 10 }}>
        {orderItems?.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                gap: 10,
                flexDirection: "row",
                borderBottomColor: "#eee",
                borderBottomWidth: 1,
              }}
            >
              <Image
                style={{ height: 50, width: 50 }}
                source={{
                  uri: item.image,
                }}
              />
              <View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontFamily: FONTS.regular,
                    fontSize: 20,
                    paddingVertical: 10,
                  }}
                >
                  {item.quantity} x
                </Text>
              </View>
              <View style={{ gap: 10 }}>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: 20,
                    paddingVertical: 10,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 12, color: APP_COLOR.GREY }}>
                  {item.option}
                </Text>
              </View>
            </View>
          );
        })}

        {orderItems?.length > 0 && (
          <View style={{ marginVertical: 15 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: APP_COLOR.GREY,
                  fontFamily: FONTS.regular,
                  fontSize: 20,
                }}
              >
                Tổng cộng (
                {restaurant &&
                  cart?.[restaurant._id] &&
                  cart?.[restaurant._id].quantity}{" "}
                món)
              </Text>
              <Text style={{ fontFamily: FONTS.regular, fontSize: 20 }}>
                {currencyFormatter(
                  restaurant &&
                    cart?.[restaurant._id] &&
                    cart?.[restaurant._id].sum
                )}
              </Text>
            </View>
          </View>
        )}
      </ScrollView>

      <View
        style={{
          gap: 20,
          marginBottom: 15,
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Pressable
            style={{
              borderWidth: 1,
              borderColor: APP_COLOR.ORANGE,
              flex: 1,
              padding: 7,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: APP_COLOR.ORANGE,
                textAlign: "center",
                fontFamily: FONTS.regular,
                fontSize: 20,
              }}
            >
              Ví VNPay
            </Text>
          </Pressable>
          <Pressable
            style={{
              borderWidth: 1,
              borderColor: APP_COLOR.ORANGE,
              flex: 1,
              padding: 7,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: APP_COLOR.ORANGE,
                textAlign: "center",
                fontFamily: FONTS.regular,
                fontSize: 20,
              }}
            >
              COD
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={handlePlaceOrder}
            style={({ pressed }) => ({
              opacity: pressed === true ? 0.5 : 1,
              padding: 10,
              backgroundColor: APP_COLOR.ORANGE,
              borderRadius: 10,
            })}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: FONTS.regular,
                fontSize: 20,
              }}
            >
              Đặt đơn - {``}
              {currencyFormatter(
                cart &&
                  restaurant &&
                  cart?.[restaurant._id] &&
                  cart?.[restaurant!._id].sum
              )}
            </Text>
          </Pressable>
        </View>
      </View>

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 20,
                marginBottom: 10,
              }}
            >
              Chọn địa chỉ giao hàng
            </Text>
            <ScrollView>
              {addresses.map((address) => (
                <Pressable
                  key={address.userId}
                  onPress={() => handleSelectAddress(address)}
                  style={styles.addressItem}
                >
                  <View>
                    <Text style={styles.textNameInfor}>{address.fullName}</Text>
                    <Text style={styles.textNameInfor}>{address.address}</Text>
                  </View>
                  <Text style={styles.textInfor}>{address.phone}</Text>
                </Pressable>
              ))}
            </ScrollView>

            <View style={{ flexDirection: "row" }}>
              <Pressable
                onPress={handleCreateNewAddress}
                style={styles.modalButton}
              >
                <Text style={{ color: "white", fontFamily: FONTS.regular }}>
                  Tạo địa chỉ mới
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.modalButton}
              >
                <Text style={{ color: "white", fontFamily: FONTS.regular }}>
                  Đóng
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PlaceOrderPage;
