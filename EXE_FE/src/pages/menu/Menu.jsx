import { Col, Image, Tab, Container, Row } from "react-bootstrap";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import ProductList from "../../components/product/ProductList";
import DropdownLocation from "../../components/ui/dropdown/DropdownLocation";
import { locationDropdown } from "../../config/constant";
import useSelectLocation from "../../hooks/useSelectLocation";
import { useState } from "react";

const Menu = () => {
  const [onStoresShow, setOnStoresShow] = useState(false);
  const { cities, city, districts, district, onSelectCity, onSelectDistrict } =
    useSelectLocation();

  const category = [
    { id: 1, label: "Cơm tấm" },
    { id: 2, label: "Món gọi thêm" },
    { id: 3, label: "Nước giải khát" },
  ];

  return (
    <>
      <h1 className="text-center">Thực đơn Tấm Tắc</h1>
      <p className="text-center w-50 m-auto">
        Tấm Tắc là chuỗi hệ thống cửa hàng cơm tấm với mong muốn mang đến cho
        sinh viên những bữa cơm tấm chất lượng với giá cả hợp lý, đảm bảo vệ
        sinh an toàn thực phẩm
      </p>
      <Tab.Container defaultActiveKey="first">
        <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
          <Container>
            <Row>
              <Col md={4}>
                <div className={`mb-1 p-3`}>
                  <div className={`${styles.rounded} p-2 ${styles.customBg}`}>
                    <h5 className="pt-0 ml-1 my-auto font-weight-bold">
                      Thực đơn
                    </h5>
                  </div>
                  <div
                    className={`${styles.hoverEffect} ${styles.rounded} p-2 border-bottom`}
                  >
                    {category.map((item) => (
                      <p className="ml-3 my-2 font-weight-bold" key={item.id}>
                        {item.label}
                      </p>
                    ))}
                  </div>
                </div>
                <div className={`mb-1 p-3`}>
                  <div
                    className={`${styles.rounded} p-2 ${styles.customBg} ${styles.clickable}`}
                    onClick={() => setOnStoresShow(!onStoresShow)}
                  >
                    <h5 className={`pt-0 ml-1 my-auto font-weight-bold `}>
                      Danh sách cửa hàng
                    </h5>
                  </div>
                  <div
                    className={`${styles.smoothTransition} ${
                      onStoresShow ? styles.show : ""
                    } ${styles.rounded} p-2 border-bottom`}
                  >
                    {onStoresShow && (
                      <div
                        className={`${styles.hoverEffect} ${styles.rounded} p-2 border-bottom`}
                      >
                        <DropdownLocation
                          items={cities}
                          defaultSelected={city.id}
                          type={locationDropdown.cities}
                          onSelect={onSelectCity}
                        />
                        <DropdownLocation
                          items={districts}
                          defaultSelected={district?.id}
                          type={locationDropdown.districts}
                          onSelect={onSelectDistrict}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
                  <h5 className="mb-1 text-white">Your Order</h5>
                  <p className="mb-4 text-white">6 Items</p>
                  <div className="bg-white rounded shadow-sm mb-2"></div>
                  <div className="mb-2 bg-white rounded p-2 clearfix">
                    <Image
                      fluid
                      className="float-left"
                      src="/img/wallet-icon.png"
                    />
                    <h6 className="font-weight-bold text-right mb-2">
                      Subtotal : <span className="text-danger">$456.4</span>
                    </h6>
                    <p className="seven-color mb-1 text-right">
                      Extra charges may apply
                    </p>
                    <p className="text-black mb-0 text-right">
                      You have saved $955 on the bill
                    </p>
                  </div>
                  <Link
                    to="/thanks"
                    className="btn btn-success btn-block btn-lg"
                  >
                    Checkout
                  </Link>
                  {/* <DropdownUI items={selection} /> */}
                  <div className="pt-2"></div>
                  <div className="alert alert-success" role="alert">
                    You have saved <strong>$1,884</strong> on the bill
                  </div>
                  <div className="pt-2"></div>
                  <div className="text-center pt-2"></div>
                </div>
              </Col>
              <ProductList />
            </Row>
          </Container>
        </section>
      </Tab.Container>
    </>
  );
};

export default Menu;
