import { Col, Row } from 'react-bootstrap';
import './checkout.css'
import CheckoutLeft from './checkoutLeft';
import CheckoutRight from './checkoutRight';


const checkout = () => {
    const place = [
        { name: 'tp HCM' },
        { name: 'NVH' },
        { name: 'Q1' },
    ];
    const city = [
        { name: 'Quận 1' },
        { name: 'Quận 2' },
        { name: 'Quận 3' },
    ];


    return (
        <div className="container py-4" >
            <h1 className="text-center mb-5 mt-4 ">Xác nhận đơn hàng</h1>

            <Row className="d-flex justify-content-center">

                {
                    <CheckoutLeft place={place} city={city} />
                }

                <Col md={1}></Col>

                <CheckoutRight />

            </Row>
        </div>
    );
}



export default checkout