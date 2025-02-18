import { Col, Tab, Container, Row, Form } from "react-bootstrap";
import styles from "./Menu.module.css";
import ProductList from "../../components/product/ProductList";
import DropdownLocation from "../../components/ui/dropdown/DropdownLocation";
import { locationDropdown } from "../../config/constant";
import { useDocumentTitle, useSelectLocation } from "../../hooks";
import { useState } from "react";
import MinimizedStoreList from "../../components/store/miniStore/MinimizedStoreList";
import InputUI from "../../components/ui/input/InputUI";
import ButtonUI from "../../components/ui/button/ButtonUI";
import { FaSearch } from "react-icons/fa"; // Import the search icon

const Menu = () => {
  const [onStoresShow, setOnStoresShow] = useState(false);
  const { cities, city, districts, district, onSelectCity, onSelectDistrict } =
    useSelectLocation();

  const category = [
    { id: 1, label: "Cơm tấm" },
    { id: 2, label: "Món gọi thêm" },
    { id: 3, label: "Nước giải khát" },
  ];

  useDocumentTitle("Thực đơn Tấm Tắc");

  return (
    <>
      <h1 className="text-center">Thực đơn Tấm Tắc</h1>
      <p className="text-center w-50 m-auto">
        Tấm Tắc là chuỗi hệ thống cửa hàng cơm tấm với mong muốn mang đến cho
        sinh viên những bữa cơm tấm chất lượng với giá cả hợp lý, đảm bảo vệ
        sinh an toàn thực phẩm
      </p>
      <Tab.Container defaultActiveKey="first">
        <section className="pt-2 pb-2 mt-4 mb-4">
          <Container>
            <Row>
              <Col md={4}>
                <div className={`mb-1 p-3`}>
                  <div className={`${styles.rounded} p-2 ${styles.customBg}`}>
                    <h6 className="pt-0 ml-1 my-auto font-weight-bold">
                      Thực đơn
                    </h6>
                  </div>
                  <div
                    className={`${styles.hoverEffect} ${styles.rounded} p-2`}
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
                    <h6 className={`pt-0 ml-1 my-auto font-weight-bold `}>
                      Danh sách cửa hàng
                    </h6>
                  </div>
                  <div
                    className={`${styles.smoothTransition} ${
                      onStoresShow ? styles.show : ""
                    } ${styles.rounded} p-2`}
                  >
                    {onStoresShow && (
                      <Form>
                        <div className={`${styles.rounded} border-bottom`}>
                          <DropdownLocation
                            items={cities}
                            defaultSelected={city?.id}
                            type={locationDropdown.cities}
                            style={{ marginBottom: "7px" }}
                            onSelect={onSelectCity}
                            className={styles.customDropdown}
                          />
                          <DropdownLocation
                            items={districts}
                            defaultSelected={district?.id}
                            type={locationDropdown.districts}
                            style={{ marginBottom: "7px" }}
                            onSelect={onSelectDistrict}
                            className={styles.customDropdown}
                          />
                          <div className={styles.inputButtonContainer}>
                            <InputUI
                              placeholder="Tên khu vực..."
                              className={styles.customInput}
                            />
                            <ButtonUI
                              variant="secondary"
                              className={styles.customButton}
                            >
                              <FaSearch />
                            </ButtonUI>
                          </div>
                        </div>
                      </Form>
                    )}
                  </div>
                </div>
                <div className=" mb-4 p-3">
                  <MinimizedStoreList />
                </div>
              </Col>
              <Col md={8}>
                <ProductList />
              </Col>
            </Row>
          </Container>
        </section>
      </Tab.Container>
    </>
  );
};

export default Menu;
