import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../../cart/Cart";

const Header = () => {
  return (
    <Row className="header">
      <Col md={1} className="p-0 ">
        <Link to="/" className="d-flex justify-content-center pl-5">
          <img src="/images/logo.png" alt="logo" className="logo" />
        </Link>
      </Col>

      <Col md={8} className="header-left">
        <div className="nav-links">
          <Link className="redirect" to="/">
            Về tấm tắc
          </Link>
          <Link className="redirect" to="/">
            Chuyện cơm tấm
          </Link>
          <Link className="redirect" to="/menu">
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

      <Col md={3}>
        <div className="header-right">
          <Link to="/login" className="icon-link">
            <img
              src="/icons/notification-3.svg"
              alt="notifications"
              className="header-icon"
            />
          </Link>
          <Link to="/user" className="icon-link">
            <img
              src="/icons/account.svg"
              alt="account"
              className="header-icon"
            />
          </Link>
          <div to="/" className="icon-link">
            <Cart />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
