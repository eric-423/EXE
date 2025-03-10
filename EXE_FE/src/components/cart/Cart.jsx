import "./Cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PropTypes } from "prop-types";
import { useEffect, useRef, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartHeader = ({ branch, address }) => {
    return (
        <div className="cart-header">
            <h6>{branch}</h6>
            <p>{address}</p>
        </div>
    );
};

const CartBody = ({ name, price, quantity, additionalItems }) => {
    return (
        <div className="mb-3">
            <div className="cart-body">
                <h6>
                    {" "}
                    <BsFillTrashFill size={15} /> {name}
                </h6>

                <div className="d-flex justify-content-end gap-3">
                    <p style={{ color: "rgb(218, 115, 50)" }}>{price}</p>
                    <p>{quantity}</p>
                </div>
            </div>
            {additionalItems &&
                additionalItems.map((item, index) => (
                    <div
                        key={index}
                        className="additional-items"
                        style={{ fontWeight: "normal" }}
                    >
                        <li>{item.name}</li>
                    </div>
                ))}
        </div>
    );
};

const CartFooter = ({ totalAmount }) => {
    return (
        <div className="cart-footer">
            <div className="d-flex justify-content-between">
                <p>Tạm Tính</p>
                <p style={{ color: "rgb(218, 115, 50)" }}>
                    {" "}
                    {totalAmount}.000 đ
                </p>
            </div>
            <div className="checkoutBtn">
                <Link
                    to={"/checkout "}
                    className="linkCheckout "
                    style={{ textDecoration: "none" }}
                >
                    Xác nhận đơn hàng
                </Link>
            </div>
        </div>
    );
};

const branches = [
    {
        branch: "Tấm Tắc Làng Đaị Học",
        address: "Nhà văn hóa sinh viên Đại học Quốc gia TP.HCM, TP.HCM",
    },
];

const content = () => [
    {
        name: "Cơm tấm sườn bì chả",
        price: "35.000đ",
        quantity: "x1",
        additionalItems: [{ name: "Chả" }, { name: "Trứng" }],
    },
    {
        name: "Cơm tấm sườn bì chả",
        price: "35.000đ",
        quantity: "x1",
        additionalItems: [{ name: "Chả" }, { name: "Trứng" }],
    },
];

const Cart = () => {
    const dropdownRef = useRef(null);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        calculateTotalAmount();
    }, []);

    const calculateTotalAmount = () => {
        let total = 0;
        content().forEach((item) => {
            total +=
                parseInt(item.price) * parseInt(item.quantity.replace("x", ""));
        });
        setTotalAmount(total);
    };

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            if (!dropdownRef.current.matches(":hover")) {
                setDropdownVisible(false);
            }
        }, 300);
    };

    return (
        <div>
            <div
                className="dropdown"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src="/icons/shopping-cart-outline-badged.svg"
                    alt="cart"
                    className="header-icon"
                />
                <div
                    className={`dropdown-content ${
                        isDropdownVisible ? "show" : ""
                    }`}
                >
                    {branches.map((item, index) => (
                        <CartHeader
                            key={index}
                            branch={item.branch}
                            address={item.address}
                        />
                    ))}

                    {content().map((item, index) => (
                        <CartBody
                            key={index}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            additionalItems={item.additionalItems}
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
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    additionalItems: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
        })
    ),
};

CartFooter.propTypes = {
    totalAmount: PropTypes.number.isRequired,
};

export default Cart;
