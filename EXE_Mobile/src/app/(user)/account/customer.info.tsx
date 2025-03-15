import ShareButton from "@/components/button/share.button";
import CustomerInforInput from "@/components/input/customerInfo.input";
import { FONTS } from "@/theme/typography";
import { APP_COLOR } from "@/utils/constant";
import { ChangePasswordSchema } from "@/utils/validate.schema";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const CustomerInfoPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [decodeToken, setDecodeToken] = useState<any>(null);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      gap: 10,
    },
  });

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const token = await AsyncStorage.getItem("access_token");
        if (token) {
          console.log(token);
        } else {
          console.log("No access token found.");
        }
      } catch (error) {
        console.error("Error retrieving or decoding access token:", error);
      }
    };
    getAccessToken();
  }, []);

  const handleImportInfo = (
    password: string,
    cofirmPassword: string,
    phone: string,
    isDefault: boolean
  ) => {
    console.log(password, cofirmPassword, phone, isDefault);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Formik
        validationSchema={ChangePasswordSchema}
        initialValues={{
          fullName: "",
          address: "",
          phone: "",
          isDefault: false,
        }}
        onSubmit={(values) =>
          handleImportInfo(
            values.fullName,
            values.address,
            values.phone,
            values.isDefault
          )
        }
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <View style={styles.container}>
            <CustomerInforInput
              title="Họ và Tên"
              onChangeText={handleChange("fullName")}
              onBlur={handleBlur("fullName")}
              value={values.fullName}
              error={errors.fullName}
              touched={touched.fullName}
            />
            <CustomerInforInput
              title="Địa chỉ"
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
              value={values.address}
              error={errors.address}
              touched={touched.address}
            />
            <CustomerInforInput
              title="Số điện thoại"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
              error={errors.phone}
              touched={touched.phone}
            />
            <CustomerInforInput
              title="Đặt làm mặc định"
              value={values.isDefault}
              setValue={(v) => setFieldValue("isDefault", v)}
              isBoolean={true}
            />
            <ShareButton
              loading={loading}
              title="Tạo địa chỉ mới"
              onPress={handleSubmit as any}
              textStyle={{
                textTransform: "uppercase",
                color: "#fff",
                paddingVertical: 5,
                fontFamily: FONTS.regular,
                fontSize: 20,
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
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default CustomerInfoPage;
