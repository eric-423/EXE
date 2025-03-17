import { Link } from "react-router-dom";
import deliveryVideo from "../../assets/videos/delivery.mp4";
import "./PaymentSuccessPage.css";

const PaymentSuccessPage = () => {
    // You might want to get these values from your order context/state/props
    const orderTime = "13:46, 27/01/2025";
    const orderCode = "2501270005";
    window.location.href = "hoidanit-app://order-success";

    return (
        <div className="payment-success-container">
            <h1 className="success-title">Thanh toán thành công</h1>

            <div className="success-content">
                <div className="video-container">
                    <video autoPlay loop muted className="delivery-video">
                        <source src={deliveryVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="order-details">
                    <p className="order-time">
                        Đơn hàng được tạo lúc {orderTime}
                    </p>
                    <p className="order-code">Mã đơn hàng: {orderCode}</p>
                    <p className="order-note">
                        Hãy chú ý điện thoại của bạn trong suốt quá trình giao
                        hàng nhé!
                    </p>
                    <Link to="/order-tracking" className="track-order-link">
                        Theo dõi đơn hàng
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccessPage;
