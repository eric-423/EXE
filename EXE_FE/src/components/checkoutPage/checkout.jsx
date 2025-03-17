import { Col, Row } from "react-bootstrap";
import "./checkout.css";
import CheckoutLeft from "./checkoutLeft";
import CheckoutRight from "./checkoutRight";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "../../config/api";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
    const [userAddress, setUserAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [auth, setAuth] = useState("");
    const [isPickup, setIsPickup] = useState(false);
    const [promotionCode, setPromotionCode] = useState("");
    const [note, setNote] = useState("");
    const [pointUsed, setPointUsed] = useState(0);
    const [memberPoint, setMemberPoint] = useState(0);
    const [paymentMethodId, setPaymentMethodId] = useState(0);

    useEffect(() => {
        const access = localStorage.getItem("_acc");
        const refresh = localStorage.getItem("_ref");
        if (!access || !refresh) {
            navigate("/login");
        }
    }, [navigate]);

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
                navigate("/login");
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
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.error("Lỗi khi làm mới token:", error);
            navigate("/login");
        }
    };

    const fetchUserDetail = async () => {
        try {
            const response = await fetch(`${BASE_URL}/customer/profile/${auth.id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("_acc")}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                const user = data.data;
                setUserAddress(user.address);
                setPhoneNumber(user.phone);
                setMemberPoint(user.memberPoint);
            }
        } catch (error) {
            console.error("Lỗi khi fetch user detail:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cartItems = JSON.parse(localStorage.getItem("cartItems"));

        if (!cartItems || cartItems.length === 0) {
            alert("Giỏ hàng trống");
            return;
        }

        const totalAmount = cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
        const calculatedPoints = Math.floor(totalAmount / 10000);

        const body = {
            customerId: auth.id,
            promotionCode: promotionCode,
            note: note,
            address: userAddress,
            phoneNumber: phoneNumber,
            branchId: 1,
            pointUsed: Number(pointUsed),
            pointEarned: calculatedPoints,
            paymentMethodId: paymentMethodId,
            orderItems: cartItems.map((item) => ({
                productId: item.productId,
                quantity: item.quantity,
                note: "",
            })),
            isPickup: isPickup,
        };

        try {
            const response = await fetch(`${BASE_URL}/orders/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("_acc")}`,
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.data.payment_url) {
                    window.location.href = data.data.payment_url;
                    localStorage.removeItem("cartItems");
                } else {
                    localStorage.removeItem("cartItems");
                    navigate("/payment-success");
                }

                const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                const calculatedPoints = Math.floor(totalAmount / 10000);

                const body = {
                    customerId: auth.id,
                    promotionCode: promotionCode,
                    note: note,
                    address: userAddress,
                    phoneNumber: phoneNumber,
                    branchId: 1,
                    pointUsed: Number(pointUsed),
                    pointEarned: calculatedPoints,
                    paymentMethodId: paymentMethodId,
                    orderItems: cartItems.map(item => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        note: ""
                    })),
                    isPickup: isPickup
                }

                try {
                    const response = await fetch(`${BASE_URL}/orders/`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('_acc')}`
                        },
                        body: JSON.stringify(body)
                    });

                    if (response.ok) {
                        const data = await response.json();
                        if (data.data.payment_url) {
                            localStorage.removeItem('cartItems');
                            window.location.href = data.data.payment_url;
                        } else {
                            localStorage.removeItem('cartItems');
                            navigate('/payment-success');
                        }
                    } else {
                        const errorData = await response.json();
                        alert(errorData.message || 'Có lỗi xảy ra');
                    }
                } catch (error) {
                    console.error('Lỗi khi đặt hàng:', error);
                    alert('Có lỗi xảy ra khi đặt hàng');
                }
            };

            return (
                <div className="container py-4" >
                    <h1 className="text-center mb-5 mt-4 ">Xác nhận đơn hàng</h1>

                    <Row className="d-flex justify-content-center">
                        <CheckoutLeft
                            userAddress={userAddress}
                            setUserAddress={setUserAddress}
                            setPhoneNumber={setPhoneNumber}
                            IsPickup={setIsPickup}
                            setPaymentMethodId={setPaymentMethodId}
                        />

                        <Col md={1}></Col>

                        <CheckoutRight
                            handleSubmit={handleSubmit}
                            setPromotionCode={setPromotionCode}
                            setNote={setNote}
                            setPointUsed={setPointUsed}
                            setMemberPoint={setMemberPoint}
                            memberPoint={memberPoint}
                        />
                    </Row>
                </div>
            );
        }

export default Checkout
