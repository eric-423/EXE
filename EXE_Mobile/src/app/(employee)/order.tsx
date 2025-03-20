import React, { useEffect, useState } from "react";
import { Text, View, Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const OrderPage = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [address, setAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getAddressFromCoords = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
      );
      const data = await response.json();
      if (data.display_name) {
        setAddress(data.display_name);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      if (loc.coords) {
        getAddressFromCoords(loc.coords.latitude, loc.coords.longitude);
      }
      setIsLoading(false);
    };

    getLocation();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location?.coords) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Vị trí của bạn
        </Text>
        {isLoading ? (
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            Đang tải vị trí...
          </Text>
        ) : (
          <View style={{ flex: 1, marginTop: 20 }}>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>
              Tọa độ: {location?.coords.latitude}, {location?.coords.longitude}
            </Text>
            {address ? (
              <Text
                style={{ textAlign: "center", marginBottom: 10, padding: 10 }}
              >
                Địa chỉ: {address}
              </Text>
            ) : null}
            <MapView
              style={{ flex: 1 }}
              region={{
                latitude: location?.coords.latitude ?? 0,
                longitude: location?.coords.longitude ?? 0,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location?.coords.latitude ?? 0,
                  longitude: location?.coords.longitude ?? 0,
                }}
                title="Vị trí của bạn"
                description={address}
              />
            </MapView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default OrderPage;
