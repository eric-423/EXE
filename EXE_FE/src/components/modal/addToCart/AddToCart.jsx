import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import QuantityButton from "../../ui/quantityButton";
import { GoDotFill } from "react-icons/go";
import { BASE_URL } from "../../../config/api";


const AddToCart = ({ label, buttonClassName, itemAddToCart }) => {
  const [modalShow, setModalShow] = useState(false);
  const [mainQuantity, setMainQuantity] = useState(1);
  const [additionalQuantities, setAdditionalQuantities] = useState({});
  const [total, setTotal] = useState(itemAddToCart.productPrice * mainQuantity);
  const [additionalOptions, setAdditionalOptions] = useState([]);
  const [refreshData, setRefreshData] = useState(true);

  // Cập nhật giỏ hàng vào localStorage
  const addToLocalStorage = (cartItems) => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.forEach((newItem) => {
      const existingProductIndex = existingCartItems.findIndex(
        (item) => item.productId === newItem.productId
      );
      if (existingProductIndex > -1) {
        existingCartItems[existingProductIndex].quantity += newItem.quantity;
      } else {
        existingCartItems.push(newItem);
      }
    });
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  };

  const handleAddToCart = () => {
    const mainProduct = {
      productId: itemAddToCart.productId,
      productName: itemAddToCart.productName,
      quantity: mainQuantity,
      price: itemAddToCart.productPrice,
    };

    const additionalProducts = additionalOptions.map((item) => ({
      productId: item.productId,
      productName: item.productName,
      quantity: additionalQuantities[item.productId] || 0,
      price: item.productPrice,
    }));

    let cartItems = [mainProduct, ...additionalProducts];
    cartItems = cartItems.filter((item) => item.quantity > 0);

    console.log("Cart items:", cartItems);
    addToLocalStorage(cartItems);
    setModalShow(false);
  };

  // Fetch dữ liệu các sản phẩm phụ bằng Promise.all để chạy đồng thời
  const fetchSubProduct = async () => {
    try {
      const [subRes, waterRes, restRes] = await Promise.all([
        fetch(`${BASE_URL}/products?page=0&size=10&typeId=2`),
        fetch(`${BASE_URL}/products?page=0&size=10&typeId=5`),
        fetch(`${BASE_URL}/products?page=0&size=10&typeId=3`),
      ]);
      const [subData, waterData, restData] = await Promise.all([
        subRes.json(),
        waterRes.json(),
        restRes.json(),
      ]);
      const data = [
        ...subData.data.content,
        ...restData.data.content,
        ...waterData.data.content,
      ];
      setAdditionalOptions(data);
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
    }
  };

  useEffect(() => {
    if (refreshData) {
      fetchSubProduct();
      setRefreshData(false);
    }
  }, [refreshData]);

  useEffect(() => {
    const calculatePrice = () => {
      let totalPrice = itemAddToCart.productPrice * mainQuantity;
      additionalOptions.forEach((item) => {
        const qty = additionalQuantities[item.productId] || 0;
        totalPrice += item.productPrice * qty;
      });
      setTotal(totalPrice);
    };
    calculatePrice();
  }, [mainQuantity, additionalQuantities, additionalOptions, itemAddToCart.productPrice]);

  return (
    <>
      <Button
        className={buttonClassName}
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        {label}
      </Button>

      <Modal size="lg" show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Thêm món ăn
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
            <Row className="foodInfo">
              <Col xs={12} sm={6} md={4}>
                {/* Sử dụng ảnh sản phẩm từ props nếu có, nếu không có thì fallback */}
                <img
                  src={itemAddToCart.productImage || "/images/bg1.png"}
                  className="modalPhoto"
                  alt="Food"
                  style={{ width: "15rem" }}
                />
              </Col>
              <Col xs={12} sm={6} md={8}>
                <div className="modalContent" >
                  <h5 style={{ fontSize: "1.7rem" }}>{itemAddToCart.productName}</h5>
                  <p>
                    <span className="product-description">
                      {itemAddToCart.productDescription}
                    </span>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="list-card-badge mt-2">
                      <span className="noDiscount px-2">
                        {itemAddToCart.productPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="mr-3 ">
                      <QuantityButton
                        quantity={mainQuantity}
                        setQuantity={setMainQuantity}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {itemAddToCart.typeId === 1 &&
              additionalOptions.map((item) => (
                <Row className="borderTop" key={item.productId}>
                  <Col className="col-12 d-flex mt-3 justify-content-between">
                    <h6>{item.productName}</h6>
                    <h6>{item.productPrice.toLocaleString()} đ</h6>
                  </Col>
                  <Row className="col-12 d-flex mt-3 justify-content-between">
                    <Col className="d-flex align-items-center">
                      <GoDotFill className="me-2" />
                      <h6 className="m-0">{item.productDescription}</h6>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <QuantityButton
                        quantity={additionalQuantities[item.productId] || 0}
                        setQuantity={(newQuantity) =>
                          setAdditionalQuantities((prev) => ({
                            ...prev,
                            [item.productId]: newQuantity,
                          }))
                        }
                      />
                    </Col>
                  </Row>
                </Row>
              ))}
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button className="modalButton" onClick={handleAddToCart}>
            {total.toLocaleString()} - Thêm vào giỏ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

AddToCart.propTypes = {
  label: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string,
  itemAddToCart: PropTypes.shape({
    productId: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    productImage: PropTypes.string, // Có thể không bắt buộc nếu có fallback
    typeId: PropTypes.number.isRequired,
  }).isRequired,
};

AddToCart.defaultProps = {
  buttonClassName: "",
};

export default AddToCart;
