import "./Cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartHeader = ({ branch, address }) => (
    <div className="cart-header">
        <h6>{branch}</h6>
        <p>{address}</p>
    </div>
);

const CartBody = ({ id, name, price, quantity, deleteCartItem }) => (
    <div className="mb-3">
        <div className="cart-body mb-5">
            <h6 className="justify-content-start">
                <BsFillTrashFill
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteCartItem(id);
                    }}
                    size={15}
                    style={{ cursor: "pointer", marginRight: 10 }}
                /> {name}
            </h6>
            <div className="d-flex justify-content-end gap-3">
                <p style={{ color: "rgb(218, 115, 50)" }}>{price.toLocaleString()} đ</p>
                <p>x {quantity}</p>
            </div>
        </div>
    </div>
);

const CartFooter = ({ totalAmount }) => (
    <div className="cart-footer">
        <div className="d-flex justify-content-between">
            <p>Tạm Tính</p>
            <p style={{ color: "rgb(218, 115, 50)" }}>{totalAmount.toLocaleString()} đ</p>
        </div>
        <div className="checkoutBtn">
            <Link to="/checkout" className="linkCheckout" style={{ textDecoration: "none" }}>
                Xác nhận đơn hàng
            </Link>
        </div>
    </div>
);

const branches = [
    {
        branch: "Tấm Tắc Làng Đại Học",
        address: "Nhà văn hóa sinh viên Đại học Quốc gia TP.HCM, TP.HCM",
    },
];

const Cart = () => {
    const dropdownRef = useRef(null);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [refreshData, setRefreshData] = useState(true);

    const getCartItems = () => {
        try {
            const cartData = localStorage.getItem("cartItems");
            const cart = cartData ? JSON.parse(cartData) : [];
            setCartItems(cart);
            const total = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0);
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

    useEffect(() => {
        let previousValue = localStorage.getItem('cartItems');

        setInterval(() => {
            const currentValue = localStorage.getItem('cartItems');
            if (currentValue !== previousValue) {
                previousValue = currentValue;
                setRefreshData(true);
            }
        }, 1000);
    }, [])

    const deleteCartItem = (productId) => {
        const updatedCart = cartItems.filter((item) => item.productId !== productId);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        setRefreshData(true);
    };

    const handleMouseEnter = () => setDropdownVisible(true);

    const handleMouseLeave = () => {
        setTimeout(() => {
            if (!dropdownRef.current.matches(":hover")) {
                setDropdownVisible(false);
            }
        }, 300);
    };

    return (
        <div>
            <div className="dropdown" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src="/icons/shopping-cart-outline-badged.svg" alt="cart" className="header-icon" />
                <div className={`dropdown-content ${isDropdownVisible ? "show" : ""}`}>
                    {branches.map((item, index) => (
                        <CartHeader key={index} branch={item.branch} address={item.address} />
                    ))}
                    {cartItems.map((item) => (
                        <CartBody
                            key={item.productId}
                            id={item.productId}
                            name={item.productName}
                            price={Number(item.price)}
                            quantity={Number(item.quantity)}
                            deleteCartItem={deleteCartItem}
                        />
                    ))}
                    <CartFooter totalAmount={totalAmount} />
                </div>
            </div>
        </div>
    );
};

CartHeader.propTypes = {
    branch: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};

CartBody.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    deleteCartItem: PropTypes.func.isRequired,
};

CartFooter.propTypes = {
    totalAmount: PropTypes.number.isRequired,
};

export default Cart;
