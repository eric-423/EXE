import { Col, Row } from 'react-bootstrap'
import { Smile } from 'lucide-react';






const Infomation = () => {
    return (
        <div className="mt-5">
            <Row className='d-flex justify-content-center gap-4'>
                <Col md={3} className='cart-customer'>
                    <div className='d-flex justify-content-start pl-2 pr-2'>
                        <div
                            className='mr-4 icon-smile text-white d-flex justify-content-center align-items-center'
                        >
                            <Smile size={35} />
                        </div>
                        <div>
                            <h4>Đ   ộ Hài Lòng</h4>
                            <h3>92%</h3>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between pl-2 pr-2 mt-3'>
                        <h6>Khiếu nại</h6>
                        <h6>Đã xử lí</h6>
                    </div>
                    <div className='d-flex justify-content-between pl-2 pr-2'>
                        <h6>10</h6>
                        <h6 style={{ color: 'green' }}>9</h6>
                    </div>
                </Col>


                <Col md={3} className='cart-customer'>
                    <div className='d-flex justify-content-start pl-2 pr-2'>
                        <div
                            className='mr-4 icon-smile text-white d-flex justify-content-center align-items-center'
                        >
                            <Smile size={35} />
                        </div>
                        <div>
                            <h4>Độ Hài Lòng</h4>
                            <h3>92%</h3>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between pl-2 pr-2 mt-3'>
                        <h6>Khiếu nại</h6>
                        <h6>Đã xử lí</h6>
                    </div>
                    <div className='d-flex justify-content-between pl-2 pr-2'>
                        <h6>10</h6>
                        <h6 style={{ color: 'green' }}>9</h6>
                    </div>
                </Col>


                <Col md={3} className='cart-customer'>
                    <div className='d-flex justify-content-start pl-2 pr-2'>
                        <div
                            className='mr-4 icon-smile text-white d-flex justify-content-center align-items-center'
                        >
                            <Smile size={35} />
                        </div>
                        <div>
                            <h4>Độ Hài Lòng</h4>
                            <h3>92%</h3>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between pl-2 pr-2 mt-3'>
                        <h6>Khiếu nại</h6>
                        <h6>Đã xử lí</h6>
                    </div>
                    <div className='d-flex justify-content-between pl-2 pr-2'>
                        <h6>10</h6>
                        <h6 style={{ color: 'green' }}>9</h6>
                    </div>
                </Col>
            </Row>
            <Row className='mt-5 d-flex justify-content-center gap-4'>
                <Col md={5} className='cart-trainning'>
                    <h4>Tiến độ đào tạo</h4>
                    <div
                        style={{
                            border: " 1px solid black",
                            paddingTop: '0px',
                            padding: '20px',
                            borderRadius: 10,
                        }}
                    >
                        <div>
                            <div className='cart-trainning-content '>
                                <div>
                                    <strong>
                                        Lê Minh Zuy
                                    </strong>
                                    <h6>
                                        Đầu bếp
                                    </h6>
                                </div>
                                <h6>95%</h6>
                            </div>
                            <div className='cart-trainning-process '>
                                <div className='cart-trainning-process-percent'></div>
                            </div>
                        </div>
                        <div>
                            <div className='cart-trainning-content '>
                                <div>
                                    <strong>
                                        Lê Minh Zuy
                                    </strong>
                                    <h6>
                                        Đầu bếp
                                    </h6>
                                </div>
                                <h6>95%</h6>
                            </div>
                            <div className='cart-trainning-process '>
                                <div className='cart-trainning-process-percent'></div>
                            </div>
                        </div>
                        <div>
                            <div className='cart-trainning-content '>
                                <div>
                                    <strong>
                                        Lê Minh Zuy
                                    </strong>
                                    <h6>
                                        Đầu bếp
                                    </h6>
                                </div>
                                <h6>95%</h6>
                            </div>
                            <div className='cart-trainning-process '>
                                <div className='cart-trainning-process-percent'></div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={5} className='cart-trainning'>
                    <h4>Hiệu quả khuyến mãi</h4>
                    <div
                        style={{
                            border: " 1px solid black",
                            paddingTop: '0px',
                            padding: '20px',
                            borderRadius: 10,
                        }}
                    >
                        <div className=' bg-white p-4 rounded-3 mb-3 '>
                            <div className='d-flex justify-content-between'>
                                <h6 style={{ fontWeight: "700" }}>Khuyễn mãi ...</h6>
                                <h6>15.6M</h6>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='m-0'>156 lượt sử dụng</p>
                                <p className='m-0'>doanh thu</p>
                            </div>
                        </div>
                        <div className=' bg-white p-4 rounded-3 '>
                            <div className='d-flex justify-content-between'>
                                <h6 style={{ fontWeight: "700" }}>Khuyễn mãi ...</h6>
                                <h6>15.6M</h6>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='m-0'>156 lượt sử dụng</p>
                                <p className='m-0'>doanh thu</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={5} className='cart-trainning'>
                    <h4>Hiệu quả khuyến mãi</h4>
                    <div
                        style={{
                            border: " 1px solid black",
                            paddingTop: '0px',
                            padding: '20px',
                            borderRadius: 10,
                        }}
                    >
                        <div className=' bg-white p-4 rounded-3 mb-3 '>
                            <div className='d-flex justify-content-between'>
                                <h6 style={{ fontWeight: "700" }}>Khuyễn mãi ...</h6>
                                <h6>15.6M</h6>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='m-0'>156 lượt sử dụng</p>
                                <p className='m-0'>doanh thu</p>
                            </div>
                        </div>
                        <div className=' bg-white p-4 rounded-3 '>
                            <div className='d-flex justify-content-between'>
                                <h6 style={{ fontWeight: "700" }}>Khuyễn mãi ...</h6>
                                <h6>15.6M</h6>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='m-0'>156 lượt sử dụng</p>
                                <p className='m-0'>doanh thu</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Infomation