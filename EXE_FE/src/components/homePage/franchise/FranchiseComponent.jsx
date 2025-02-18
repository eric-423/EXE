import 'bootstrap/dist/css/bootstrap.min.css'
import './FranchiseComponent.css'
import { Card, Row, CardBody, CardText, CardTitle, Col } from 'react-bootstrap'
import { PropTypes } from 'prop-types'
import { useState } from 'react';

const MenuItem = ({ image, location, phoneNumber }) => (
    <Row className=" pl-4 ml-5 pt-3">
        <Col className="col-md-6">
            <Card className="shadow-sm">
                <Row className="d-flex align-items-start franchiescontent" style={{ height: '200px' }}>
                    <Col className="col-md-4 col-4 images ">
                        <img src={image} className="card-img" alt="..." />
                    </Col>
                    <Col className="col-md-8 col-8">
                        <CardBody className='pt-4'>
                            <CardTitle className='title'>Tấm Tắc Làng Đại Học</CardTitle>
                            <CardText className='subTitle'>{location}</CardText>
                            <CardText className='subTitle'>{phoneNumber}</CardText>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>
);

const Select = ({ cityList, districList }) => (
    <>
        <select className='cityDropdown'>
            {cityList.map((city, index) => (
                <option key={index}>{city}</option>
            ))}
        </select>
        <select className='districtDropdown'>
            {districList.map((district, index) => (
                <option key={index}>{district}</option>
            ))}
        </select>
    </>
)

const FranchiseComponent = () => {
    const menuItems = [
        {
            image: "images/pro1.jpg",
            location: "Nhà văn hóa sinh viên, khu đô thị đại học quốc gia TP.HCM",
            phoneNumber: "1234567890"
        },
        {
            image: "images/pro1.jpg",
            location: "Nhà văn hóa sinh viên, khu đô thị đại học quốc gia TP.HCM",
            phoneNumber: "1234567890"
        }
    ];

    const [cityList, setCityList] = useState(["Tỉnh/ Thành Phố ", "TP.HCM", "Hà Nội", "Đà Nẵng", "Hải Phòng"]);
    const [districList, setDistricList] = useState(["Quận/ Huyện ", "Quận 1", "Quận 2", "Quận 3", "Quận 4"]);

    return (
        <Row className="">
            <Col className='col-md-12'>
                <h1 className='mt-5'>Hệ thống nhượng quyền</h1>
            </Col>
            <Col className="col-md-6">
                <div className='mt-5'>
                    <Select cityList={cityList} districList={districList} />
                    <input className='Search' placeholder='Tìm theo khu vực'></input>
                </div>


                <section className="section pb-5 homepage-add-section">
                    <div className="container">
                        {
                            menuItems.map((item, index) => (
                                <MenuItem key={index} {...item} />
                            ))
                        }
                    </div>
                </section>

            </Col>

            {/* đăng kí nhượng quyền */}

            <Col className='align-items-center d-flex justify-content-center '>
                <div className='franchise-form'>
                    <div className='franchise-form-title'>
                        <h3 className='franchise-title'>ĐĂNG KÍ NHƯỢNG QUYỀN</h3>
                        <p className='frachise-content'>Nếu bạn quan tâm, hãy để lại thông tin liên lạc và người phụ trách của chúng tôi sẽ liên hệ hỗ trợ tư vấn về quy trình và các chính sách nhượng quyền tại Tấm Tắc</p>

                        <input className='InputName' placeholder='HỌ VÀ TÊN'></input>

                        <div className='infomationInput' >
                            <input placeholder='SĐT'></input>
                            <input placeholder='EMAIL'></input>
                        </div>

                        <div className='infomationSelect' >
                            <select placeholder='ĐỊA CHỈ'>
                                <option>KHU VỰC</option>
                                <option>TP.HCM</option>
                                <option>HN</option>
                                <option>TP.HCM</option>
                            </select>
                            <select>
                                <option>MỨC VỐN</option>
                                <option>DƯỚI 50 TR</option>
                                <option>TRÊN 50 TR</option>
                                <option>TRÊN 100 TR</option>
                            </select>
                        </div>
                        <textarea className='franchise-textarea' placeholder='GHI CHÚ'></textarea>
                        <button className='franchise-button'>Gửi thông tin</button>
                    </div>
                </div>

            </Col>
        </Row >
    )
};

MenuItem.propTypes = {
    image: PropTypes.string,
    location: PropTypes.string,
    phoneNumber: PropTypes.string
};

Select.propTypes = {
    cityList: PropTypes.array,
    districList: PropTypes.array
};

export default FranchiseComponent;