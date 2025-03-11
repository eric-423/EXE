import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { useCurrentApp } from "@/context/app.context";
import { loginAPI } from "@/utils/api";
import { APP_COLOR, BASE_URL } from "@/utils/constant";
import { CustomerSignInSchema } from "@/utils/validate.schema";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import Toast from "react-native-root-toast";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10,
  },
});

const CustomerLoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setAppState } = useCurrentApp();

  const handleLogin = async (
    phoneNumber: string,
    password: string,
    resetForm: any
  ) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${BASE_URL}/api/v1/users/sign-in/customer`,
        {
          phoneNumber: phoneNumber,
          password: password,
        }
      );
      setLoading(false);
      console.log(res.data);

      if (res.data) {
        await AsyncStorage.setItem("access_token", res.data);
        setAppState(res.data);
        router.replace({
          pathname: "/(tabs)",
          params: { token: res.data, isLogin: 1 },
        });
      } else {
        Toast.show("Đăng nhập không thành công", {
          duration: Toast.durations.LONG,
          textColor: "white",
          backgroundColor: APP_COLOR.ORANGE,
          opacity: 1,
        });

        if (res.statusCode === 400) {
          router.replace({
            pathname: "/(tabs)",
            params: { token: res.data, isLogin: 1 },
          });
        }
      }
    } catch (error) {
      console.log(">>> check error: ", error);
      Toast.show("Lỗi khi đăng nhập. Vui lòng thử lại.", {
        duration: Toast.durations.LONG,
        textColor: "white",
        backgroundColor: APP_COLOR.ORANGE,
        opacity: 1,
      });
      resetForm();
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Formik
        validationSchema={CustomerSignInSchema}
        initialValues={{ phoneNumber: "", password: "" }}
        onSubmit={(values, { resetForm }) =>
          handleLogin(values.phoneNumber, values.password, resetForm)
        }
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 600,
                  marginVertical: 30,
                }}
              >
                Đăng nhập
              </Text>
            </View>

            <ShareInput
              title="Số điện thoại"
              keyboardType="number-pad"
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              value={values.phoneNumber}
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
            />

            <ShareInput
              title="Mật khẩu"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />

            <View style={{ marginVertical: 10 }}>
              <Text
                onPress={() => router.navigate("/(auth)/request.password")}
                style={{
                  textAlign: "center",
                  color: APP_COLOR.ORANGE,
                }}
              >
                Quên mật khẩu ?
              </Text>
            </View>
            <ShareButton
              loading={loading}
              title="Đăng Nhập"
              onPress={handleSubmit as any}
              textStyle={{
                textTransform: "uppercase",
                color: "#fff",
                paddingVertical: 5,
              }}
              btnStyle={{
                justifyContent: "center",
                borderRadius: 30,
                marginHorizontal: 50,
                paddingVertical: 10,
                backgroundColor: APP_COLOR.ORANGE,
              }}
              pressStyle={{ alignSelf: "stretch" }}
            />

            <View
              style={{
                marginVertical: 15,
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: APP_COLOR.BLACK,
                }}
              >
                Chưa có tài khoản?
              </Text>
              <Link href={"/(auth)/customer.signup"}>
                <Text
                  style={{
                    color: APP_COLOR.ORANGE,
                    textDecorationLine: "underline",
                  }}
                >
                  Đăng ký.
                </Text>
              </Link>
            </View>

            <SocialButton title="Đăng nhập với" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default CustomerLoginPage;
