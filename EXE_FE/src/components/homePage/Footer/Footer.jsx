import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <Row className="footer">
            <Col className="footer-logo" md={3}>
                <img src="/images/logo.png" alt="..." />
            </Col>
            <Col className='footer-info' md={3}>
                <h4>Thông tin</h4>
                <Link className='footerLink' to="">Về tấm tắc</Link>
                <Link className='footerLink' to="">Chuyện Cơm Tấm</Link>
            </Col>
            <Col className='footer-info' md={3}>
                <h4>Dịch vụ</h4>
                <Link className='footerLink' to="">Đặt hàng</Link>
                <Link className='footerLink' to="">Nhượng quyền</Link>
            </Col>
            <Col className='footer-info' md={3}>
                <h4>Liên Hệ</h4>
                <Link className='footer-address' to="">
                    <img className='pr-2' src="/icons/location.svg" alt="asd" />
                    <p className=''>
                        Lô E2a-7, Đường D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Hồ Chí Minh
                    </p>
                </Link>
                <Link className='footerLink' to="">
                    <img className='pr-2' src="/icons/call.svg" alt="" />
                    012-345-678
                </Link>
                <Link className='footerLink' to="">
                    <img className='pr-2' src="/icons/mail.svg " alt="" />
                    tamtac@gmail.com
                </Link>
            </Col>

        </Row>
    )
}

export default Footer