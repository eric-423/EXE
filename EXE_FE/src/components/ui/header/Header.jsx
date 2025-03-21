import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../../cart/Cart";
import { LogIn, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../config/api";

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("_acc"));

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("_acc"));
  }, []);

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("_acc");
      await fetch(`${BASE_URL}/users/logout/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.log(error)
    } finally {
      localStorage.removeItem("_acc");
      localStorage.removeItem("_ref");
      setIsLoggedIn(false);
      window.location.reload();
      window.location.href = "/";
    }
  };

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
          {!isLoggedIn ? (
            <Link to="/login" className="icon-link">
              <LogIn style={{ width: "2.5rem", height: "2.5rem" }} />
            </Link>
          ) : (
            <Link to="/" className="icon-link" onClick={handleLogout}>
              <LogOut style={{ width: "2.5rem", height: "2.5rem" }} />
            </Link>
          )}

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
