
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CuisineGallery.css';
const CuisineGallery = () => {

    return (
        <div>
            <section className="section pt-5 pb-5 bg-white homepage-add-section">
                <Container className="container">
                    <Row className='d-flex justify-content-center'>
                        <Col className="col-3 me-4 ms-4">
                            <div className="products-box">
                                <a href="listing.html">
                                    <img alt="" src="/images/pro1.jpg" className="img-fluid rounded" />
                                </a>
                            </div>
                            <p className='FoodBanner'>NGUYÊN LIỆU TƯƠI NGON  AN TOÀN</p>
                        </Col>

                        <Col className=" col-3 me-4 ms-4">
                            <div className="products-box">
                                <a href="listing.html">
                                    <img alt="" src="/images/pro2.jpg" className="img-fluid rounded" />
                                </a>
                            </div>
                            <p className='FoodBanner'>CÔNG THỨC ƯỚP ĐỘC QUYỀN NGON CHUẨN VỊ</p>
                        </Col>

                        <Col className="col-3 me-4 ms-4">
                            <div className="products-box">
                                <a href="listing.html">
                                    <img alt="" src="/images/pro3.jpg" className="img-fluid rounded" />
                                </a>
                            </div>
                            <p className='FoodBanner'>GIÁ CẢ PHẢI CHĂNG</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
};
export default CuisineGallery;
