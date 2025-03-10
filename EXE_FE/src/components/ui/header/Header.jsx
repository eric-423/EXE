import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../../cart/Cart";

const Header = () => {
    return (
        <Row className="header">
            {/* // <<<<<<< Trung */}
            <Col className="col-lg-9 col-md-8 col-sm-12 header-left">
                <Link to="/">
                    <img src="/images/logo.png" alt="logo" className="logo" />
                </Link>
                <div className="nav-links">
                    <Link className="redirect" to="/">
                        Về tấm tắc
                    </Link>
                    <Link className="redirect" to="/">
                        Chuyện cơm tấm
                    </Link>
                    <Link className="redirect" to="/">
                        Đặt hàng
                    </Link>
                    <Link className="redirect" to="/">
                        Nhượng quyền
                    </Link>
                    <Link className="redirect" to="/">
                        Cửa hàng
                    </Link>
                    <Link className="redirect" to="/">
                        Tuyển dụng
                    </Link>
                </div>
            </Col>
            <Col className="col-lg-3 col-md-4 col-sm-12">
                <div className="header-right">
                    <Link to="/login" className="icon-link">
                        <img
                            src="/icons/notification-3.svg"
                            alt="notifications"
                            className="header-icon"
                        />
                    </Link>
                    <Link to="/login" className="icon-link">
                        <img
                            src="/icons/account.svg"
                            alt="account"
                            className="header-icon"
                        />
                    </Link>
                    <Link to="/login" className="icon-link">

                        <Cart />
                    </Link>
                </div>
            </Col>
        </Row>
    );
};

export default Header;
