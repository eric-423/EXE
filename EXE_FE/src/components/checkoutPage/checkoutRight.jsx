import { Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const CheckoutRight = ({
    handleSubmit,
    setPromotionCode,
    setNote,
    memberPoint,
    setPointUsed,
}) => {
    const [promoCode, setPromoCode] = useState("");
    const [CheckOutnote, setCheckOutNote] = useState("");
    const [discountValue, setDiscountValue] = useState(0);
    const [discountOnItem] = useState(0);
    const [shippingFee] = useState(50000);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [refreshData, setRefreshData] = useState(true);
    const [usePoint, setUsePoint] = useState(0);
    const [pointUserError, setPointUserError] = useState("");

    const handleApplyPromo = () => {
        console.log("Mã khuyến mãi:", promoCode);
        setDiscountValue(0);
        setPromotionCode(promoCode);
    };

    const getCartItems = () => {
        try {
            const cartData = localStorage.getItem("cartItems");
            const cart = cartData ? JSON.parse(cartData) : [];
            setCartItems(cart);
            const total = cart.reduce(
                (sum, item) => sum + Number(item.price) * Number(item.quantity),
                0
            );
            setTotalAmount(total);
        } catch (e) {
            console.error("Error loading cart items:", e);
        }
    };

    useEffect(() => {
        if (refreshData) {
            getCartItems();
            setRefreshData(false);
        }
    }, [refreshData]);

    const handlePointUsed = (e) => {
        const points = Number(e.target.value);
        setUsePoint(points);
        if (points <= memberPoint) {
            setPointUsed(points);
            setPointUserError("");
        } else {
            setPointUserError("Số điểm sử dụng không được lớn hơn số điểm có sẵn");
        }
    };

    return (
        <Col md={5} style={{ fontFamily: "Playfair Display, serif" }}>
            <div className="comfirm-order rounded-4">
                <div
                    className="mb-4"
                    style={{
                        backgroundColor: "transparent",
                        borderBottom: "1px solid black",
                    }}
                >
                    <h5>Tấm tắc lành đại học </h5>
                    <p>Nhà văn hóa sinh viên đại học quốc gia tp.hcm, tp.hcm</p>
                </div>

                {cartItems.map((item) => (
                    <div key={item.productId} className="mb-3">
                        <div className="confirm-order-item">
                            <h6> {item.productName}</h6>
                            <div className="d-flex justify-content-center gap-3">
                                <p style={{ color: "rgb(218, 115, 50)" }}>
                                    {item.price.toLocaleString()}
                                </p>
                                <p> x {item.quantity}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <Form className='rounded-4 card-total-price p-3'>
                    <div>
                        <div className='d-flex justify-content-between pl-3 pr-3'>
                            <h5>Giá gốc</h5>
                            <p>{totalAmount.toLocaleString()} đ</p>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex justify-content-between pl-3 pr-3'>
                            <h5>Điểm sử dụng</h5>
                            <p>{(usePoint * 1000).toLocaleString()} đ</p>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex justify-content-between pl-3 pr-3'>
                            <h5>Giảm giá khuyến mãi</h5>
                            <p>{discountValue.toLocaleString()} đ</p>
                        </div>
                    </div>
                    <div style={{ borderBottom: '1px solid black' }} className='mb-3'>
                        <div className='d-flex justify-content-between pl-3 pr-3'>
                            <h5>Phí giao hàng</h5>
                            <p>{shippingFee.toLocaleString()} đ</p>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex justify-content-between pl-3 pr-3'>
                            <h5>Tổng cộng</h5>
                            <p>{(totalAmount + shippingFee - usePoint * 1000).toLocaleString()} đ</p>
                        </div>
                    </div>
                    <button
                        disabled={pointUserError !== ''}
                        className='w-100 mt-3 rounded-3'
                        onClick={handleSubmit}
                    >
                        Đặt hàng
                    </button>
                </Form>
            </div>
        </Col>
    );
};

CheckoutRight.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    setPromotionCode: PropTypes.func.isRequired,
    setNote: PropTypes.func.isRequired,
    memberPoint: PropTypes.number.isRequired,
    setPointUsed: PropTypes.func.isRequired,
};

export default CheckoutRight;
