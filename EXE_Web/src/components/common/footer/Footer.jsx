import "./Footer.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Row className='footer'>
      <Col className='footer-logo' md={3}>
        <Link to='/'>
          <img src='/images/logo.png' alt='Tấm Tắc Logo' />
        </Link>
      </Col>
      <Col className='footer-info' md={3}>
        <h4>Thông tin</h4>
        <Link className='footerLink' to='/'>
          Về tấm tắc
        </Link>
        <Link className='footerLink' to='/'>
          Chuyện Cơm Tấm
        </Link>
      </Col>
      <Col className='footer-info' md={3}>
        <h4>Dịch vụ</h4>
        <Link className='footerLink' to='/'>
          Đặt hàng
        </Link>
        <Link className='footerLink' to='/'>
          Nhượng quyền
        </Link>
      </Col>
      <Col className='footer-info' md={3}>
        <h4>Liên hệ</h4>
        <div className='contact-item'>
          <img
            src='/icons/location.svg'
            alt='location'
            className='contact-icon'
          />
          <span>
            Lô E2a-7, Đường D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Hồ Chí Minh
          </span>
        </div>
        <div className='contact-item'>
          <img src='/icons/call.svg' alt='phone' className='contact-icon' />
          <span>0902-123-456</span>
        </div>
        <div className='contact-item'>
          <img src='/icons/mail.svg' alt='email' className='contact-icon' />
          <span>cskh@tamtac.com</span>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
