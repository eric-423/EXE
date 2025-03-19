import { Col, Tab, Container, Row, Form } from "react-bootstrap";
import styles from "./Menu.module.css";
import ProductList from "../../components/menu/product/ProductList";
import { useDocumentTitle } from "../../hooks";
import { useEffect, useState } from "react";
import MinimizedStoreList from "../../components/menu/store/miniStore/MinimizedStoreList";
import { BASE_URL } from "../../config/api";
import AutoCompleteNearedBranch from "./AutoCompleteNearedBranch";

const Menu = () => {
  const [onStoresShow, setOnStoresShow] = useState(true);
  const [productType, setProductType] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);
  const [typeId, setTypeId] = useState(1);
  const [products, setProducts] = useState([]);
  const [branches, setBranches] = useState([]);
  const [refeshData, setRefeshData] = useState(true);
  const [branchId, setBranchId] = useState(1);


  const [currentLocation, setCurrentLocation] = useState(null);
  const [location, setLocation] = useState(null);



  //* ==================== Fetch location ==================== */

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          console.log(position)
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },

      );
    }

  }, []);

  //* ==================== Fetch location ==================== */

  useEffect(() => {
    fetchProductType();
  }, []);

  useEffect(() => {
    fetchBranch();
    localStorage.setItem("branchId", 1);
  }, []);

  useEffect(() => {
    if (refeshData) {
      fetchProduct();
      setRefeshData(false);
    }
  }, [products, page, size, typeId]);


  const fetchProductType = async () => {
    try {
      const response = await fetch(`${BASE_URL}/product-type`);
      const data = await response.json();
      setProductType(data);
    } catch (error) {
      console.log(error)
    }
  }

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products?page=${page}&size=${size}&typeId=${typeId}`);
      const data = await response.json();
      if (data && data.data && data.data.content) {
        setProducts(data.data.content);
      } else {
        console.error("Dữ liệu không hợp lệ:", data);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const setTypeProduct = (id) => {
    setTypeId(id);
    setRefeshData(true);
  }

  const fetchBranch = async () => {
    try {
      const response = await fetch(`${BASE_URL}/branches`);
      const data = await response.json();
      setBranches(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleBranchId = (id) => {
    setBranchId(id);
    localStorage.setItem("branchId", id);
  }

  useDocumentTitle("Thực đơn Tấm Tắc");

  return (
    <div className={styles.bgColor}>
      <h1 className="text-center mb-3 mt-4">Thực đơn Tấm Tắc</h1>
      <p className="text-center w-50 m-auto" style={{ fontSize: "1.2rem" }}>
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
                  <div
                    className={`${styles.rounded} p-2 menu-filter ${styles.customBg}`}
                  >
                    <h6 className="pt-0 ml-1 my-auto font-weight-bold">
                      Thực đơn
                    </h6>
                  </div>
                  <div
                    className={`${styles.hoverEffect} ${styles.rounded} p-2`}
                  >
                    {productType.map((item) => (
                      <p
                        className="ml-3 my-2 font-weight-bold"
                        style={{ fontSize: "1rem", }}
                        key={item.id}
                        onClick={() => setTypeProduct(item.id)}

                      >
                        {item.id === typeId ? <span className="text-danger">•</span> : null}
                        {item.name}
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
                    className={`${styles.smoothTransition} ${onStoresShow ? styles.show : ""
                      } ${styles.rounded} p-2`}
                  >

                    {onStoresShow && (

                      <Form>
                        <div className={`${styles.rounded} border-bottom`}>
                          <div className={styles.inputButtonContainer}>

                            <AutoCompleteNearedBranch location={location} setLocation={setLocation} />

                          </div>
                        </div>
                      </Form>

                    )}

                  </div>

                </div>

                <div className=" mb-4 p-3 pt-0">
                  <MinimizedStoreList branchId={branchId} handleBranchId={handleBranchId} branches={branches} />

                </div>

              </Col>
              <Col md={8}>
                {products ? <ProductList products={products} typeId={typeId} /> : null}
              </Col>
            </Row>
          </Container>
        </section>
      </Tab.Container>
    </div >
  );
};

export default Menu;
