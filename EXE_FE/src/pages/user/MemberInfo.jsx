import { useEffect, useState } from "react";
import EditMemberModal from "../../components/user/EditMemberModal.jsx";
import SideBar from "../../components/user/SideBar.jsx";
import OrderTracking from "../../components/user/OrderTracking.jsx";
import "./MemberInfo.css";
import { Col } from "react-bootstrap";
import Infomation from "../../components/user/Infomation.jsx";
import { BASE_URL } from "../../config/api.js";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const MemberInfo = () => {
    const [userData, setUserData] = useState([]);
    const [orderData, setOrderData] = useState({
        orderId: "230120025",
        orderTime: "12:46, 25/04/2025",
        orderType: "Giao hàng",
        branch: "Tấm Tắc Làng Đại Học - 0902857455",
        orderStatus: "Đang vận chuyển",
        userName: "Lê Minh Zuy",
        phoneNumber: "0902857455",
        address: "158 Hồ Văn Huê, Phường 9, Quận Phú Nhuận, TP.HCM",
        products: [
            { productName: "COMBO - SÀ BÌ CHƯỞNG", subProductName: "Cánh gà, nước ngọt Coca Cola, cơm thêm", price: 134000, quantity: 1 },
            { productName: "COMBO - SÀ BÌ CHƯỞNG", subProductName: "Cánh gà, nước ngọt Coca Cola, cơm thêm, rau chua thêm", price: 138000, quantity: 1 },
            { productName: "CƠM SƯỜN CỘNG", subProductName: "Cánh gà\nGhi chú: Lấy ít cơm", price: 85000, quantity: 2 },
            { productName: "Chả Trứng Hấp", price: 12000, quantity: 1 },
            { productName: "Coca Cola", price: 12000, quantity: 4 }
        ]
    });

    const [showModal, setShowModal] = useState(false);
    const [activeMenu, setActiveMenu] = useState('memberInfo');
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const access = localStorage.getItem('_acc');
        if (!access) {
            console.error('Access token not found');
            return;
        }
        try {
            const decode = jwtDecode(access);
            if (decode.exp < Date.now() / 1000) {
                fetchNewToken();
            } else {
                setUserId(decode.id);
            }
        } catch (error) {
            console.error('Lỗi khi decode token:', error);
            localStorage.removeItem('_acc');
            localStorage.removeItem('_ref');
        }
    }, []);

    useEffect(() => {
        if (userId) {
            fetchUserData();
        }
    }, [userId]);

    const fetchNewToken = async () => {
        const refesh = localStorage.getItem('_ref');
        if (!refesh) {
            console.error('refesh =null');
            return;
        }
        try {
            const response = await fetch(`${BASE_URL}/token/refresh?token=${refesh}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('_acc', data.access);
                localStorage.setItem('_ref', data.refresh);
            } else {
                console.error('Không thể làm mới token:', response.statusText);
                localStorage.removeItem('_acc');
                localStorage.removeItem('_ref');
            }
        } catch (error) {
            console.error('Lỗi khi thực hiện fetch:', error);
        }
    }
    const fetchUserData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/customer/profile/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('_acc')}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setUserData(data.data)
            } else {
                console.error('Không thể lấy dữ liệu người dùng:', response.statusText);
            }
        } catch (error) {
            console.error('Lỗi khi lấy thông tin người dùng:', error);
        }
    }

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const renderContent = () => {
        switch (activeMenu) {
            case 'orderLookup':
                return <OrderTracking orderData={orderData} />;
            case 'memberInfo':
                return <Infomation userData={userData} />;
            default:
                return null;
        }
    };
    return (
        <div className="container py-4 mt-5 mb-5">
            {
                userData ? (
                    <div className="row g-4 pb-5 pt-5">
                        <Col md={4}>
                            <SideBar
                                userData={userData}
                                setShowModal={setShowModal}
                                activeMenu={activeMenu}
                                onMenuClick={handleMenuClick}
                            />
                        </Col>
                        <Col md={8} className="col-md-7">
                            {renderContent()}
                        </Col>
                    </div>
                ) : (
                    <Link to={"/login"} className="btn btn-primary">Đăng nhập</Link>
                )
            }

            {showModal && (
                <EditMemberModal
                    userData={userData}
                    onUpdate={setUserData}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default MemberInfo;
