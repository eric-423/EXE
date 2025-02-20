import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from '../../cart/Cart';

const Header = () => {
    return (
        <Row className="header">
            <Col className='col-md-9 header-left'>
                <img src="/images/logo.png" alt="" />
                <Link className='redirect' to="/">Về tấm tắc</Link>
                <Link className='redirect' to="/">Chuyện cơm tấm</Link>
                <Link className='redirect' to="/">Đặt hàng</Link>
                <Link className='redirect' to="/">Nhượng quyền</Link>
                <Link className='redirect' to="/">Cửa hàng</Link>
                <Link className='redirect' to="/">Tuyển dụng</Link>
            </Col>
            <Col>
                <div className="header-right">
                    <img src="/icons/notification-3.svg" alt="" />
                    <img src="/icons/account.svg" alt="" />
                    <Cart />
                </div>
            </Col>

        </Row>
    )
}

export default Header