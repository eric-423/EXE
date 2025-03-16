import { Col, Row } from "react-bootstrap";
import "./checkout.css";
import CheckoutLeft from "./checkoutLeft";
import CheckoutRight from "./checkoutRight";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "../../config/api";

const Checkout = () => {
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [auth, setAuth] = useState("");
  const [isPickup, setIsPickup] = useState(false);
  const [promotionCode, setPromotionCode] = useState("");
  const [note, setNote] = useState("");
  const [pointUsed, setPointUsed] = useState(0);
  const [pointEarned, setPointEarned] = useState(0);
  const [paymentMethodId, setPaymentMethodId] = useState(0);

  useEffect(() => {
    const access = localStorage.getItem("_acc");
    if (access) {
      try {
        const decode = jwtDecode(access);
        if (decode.exp < Date.now() / 1000) {
          fetchNewToken();
        } else {
          setAuth(decode);
        }
      } catch (error) {
        console.error("Lỗi khi decode token:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (auth) {
      fetchUserDetail();
    }
  }, [auth]);

  const fetchNewToken = async () => {
    const refresh = localStorage.getItem("_ref");
    try {
      const response = await fetch(
        `${BASE_URL}/token/refresh?token=${refresh}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("_acc", data.access);
        localStorage.setItem("_ref", data.refresh);
        setAuth(jwtDecode(data.access));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserDetail = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/information/default?customerId=${auth.id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("_acc")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const user = data.data;
        setUserName(user.fullName);
        setUserAddress(user.address);
        setPhoneNumber(user.phone);
      }
    } catch (error) {
      console.error("Lỗi khi fetch user detail:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const items = cartItems.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
    }));
    const body = {
      customerId: auth.id,
      promotionCode: promotionCode,
      note: note,
      address: userAddress,
      phoneNumber: phoneNumber,
      branchId: 1,
      pointUsed: pointUsed,
      pointEarned: pointEarned,
      paymentMethodId: paymentMethodId,
      orderItems: cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        note: "",
      })),
      isPickup: isPickup,
    };

    console.log(body);

    if (!auth) {
      fetchNewToken();
    }
    try {
      const response = await fetch(`${BASE_URL}/orders/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.access}`,
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-5 mt-4 ">Xác nhận đơn hàng</h1>

      <Row className="d-flex justify-content-center">
        {
          <CheckoutLeft
            setUserName={setUserName}
            setUserAddress={setUserAddress}
            setPhoneNumber={setPhoneNumber}
            setIsPickup={setIsPickup}
            setPaymentMethodId={setPaymentMethodId}
          />
        }

        <Col md={1}></Col>

        <CheckoutRight
          handleSubmit={handleSubmit}
          setPromotionCode={setPromotionCode}
          setNote={setNote}
          setPointUsed={setPointUsed}
          setPointEarned={setPointEarned}
        />
      </Row>
    </div>
  );
};

export default Checkout;
