import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import img from "/images/bg1.png";
import styles from "./AddToCart.module.css"; // Import the CSS module correctly
import QuantityButton from "../../ui/quantityButton";
import { GoDotFill } from "react-icons/go";

const foodInfo = {
  title: "COMBO - SÀ BÌ CHƯỞNG",
  description: `- Cơm: sườn nướng, bì, chả trứng
- Canh tự chọn
- Nước ngọt tự chọn`,
  price: 25000,
  oldPrice: 30000,
  quantity: 1,
};

const additionalOptions = [
  {
    id: 1,
    label: "Canh ăn kèm",
    note: "chọn 1",
    limited: 1,
    options: [
      { id: 1, label: "Canh bí đỏ", price: 0 },
      { id: 2, label: "Canh cải bẹ xanh", price: 0 },
      { id: 3, label: "Canh cải thảo", price: 0 },
    ],
  },
  {
    id: 2,
    label: "Nước ngọt",
    note: "chọn 1",
    limited: 1,
    options: [
      { id: 1, label: "Pepsi", price: 0 },
      { id: 2, label: "Coca", price: 0 },
      { id: 3, label: "7UP", price: 0 },
    ],
  },
  {
    id: 3,
    label: "Món gọi thêm",
    options: [
      { id: 1, label: "Trứng chiên", price: 5000 },
      { id: 2, label: "Cơm thêm", price: 2000 },
      { id: 3, label: "Chả trứng hấp", price: 12000 },
      { id: 4, label: "Sườn nướng", price: 20000 },
    ],
  },
];

function AddToCart({ label, buttonClassName }) {
  const [modalShow, setModalShow] = useState(false);
  const [foodQuantity, setFoodQuantity] = useState(foodInfo.quantity);
  const [sideQuantity, setSideQuantity] = useState(() =>
    additionalOptions.map((fields) => {
      return fields.options.map((option) => {
        return {
          id: option.id,
          label: option.label,
          price: option.price,
          quantity: 0,
        };
      });
    })
  );
  const [total, setTotal] = useState(foodInfo.price * foodQuantity);

  useEffect(() => {
    const calculatePrice = () => {
      let totalPrice = foodInfo.price * foodQuantity;

      sideQuantity.forEach((fields) => {
        fields.forEach((option) => {
          totalPrice += option.quantity * option.price;
        });
      });
      setTotal(totalPrice);
    };

    calculatePrice();
  }, [foodQuantity, sideQuantity]);

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
        <Modal.Body className={`grid-example`}>
          {" "}
          {/* Apply the CSS module class */}
          <Container>
            <Row className={styles.foodInfo}>
              <Col xs={12} sm={6} md={4}>
                <img src={img} className={styles.modalPhoto} />
              </Col>
              <Col xs={12} sm={6} md={8}>
                <div className={styles.modalContent}>
                  <h5>{foodInfo.title}</h5>
                  <p>
                    <span className="product-description">
                      {foodInfo.description}
                    </span>
                  </p>

                  <div className="d-flex justify-content-between ">
                    {foodInfo.oldPrice ? (
                      <div
                        className={`d-flex align-items-center ${styles.offerPrice}`}
                      >
                        <span className="badge badge-success">
                          {foodInfo.price.toLocaleString()}{" "}
                          <c style={{ textDecoration: "underline" }}>đ</c>
                        </span>
                        <p
                          className="ml-2"
                          style={{ textDecoration: "line-through" }}
                        >
                          {foodInfo.oldPrice.toLocaleString()} đ
                        </p>
                      </div>
                    ) : (
                      <div className="list-card-badge mt-2">
                        <span className="noDiscount px-2">
                          {foodInfo.price.toLocaleString()}
                        </span>
                      </div>
                    )}
                    <div className="mr-3">
                      <QuantityButton
                        quantity={foodQuantity}
                        setQuantity={setFoodQuantity}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {additionalOptions.map((fields, index) => {
              return (
                <>
                  <Row className={`${styles.borderTop}`} key={index}>
                    <Col className="col-12 d-flex mt-3">
                      <h6>
                        {fields.label}
                        {fields.note && <span> - {fields.note}</span>}
                      </h6>
                    </Col>
                    {fields.options.map((option, optionIndex) => {
                      return (
                        <Col className="col-12 d-flex px-4" key={optionIndex}>
                          <span className="mr-2">
                            <GoDotFill />
                          </span>
                          <div className={styles.modalContent}>
                            <p>{option.label}</p>
                            <p>
                              + {option.price.toLocaleString()}
                              <span
                                style={{
                                  textDecoration: "underline",
                                  fontSize: "0.8rem",
                                }}
                              >
                                đ
                              </span>
                            </p>
                          </div>
                          <span className="ml-auto">
                            <QuantityButton
                              quantity={
                                sideQuantity[index][optionIndex].quantity
                              }
                              setQuantity={(value) => {
                                const newSideQuantity = [...sideQuantity];
                                newSideQuantity[index][optionIndex].quantity =
                                  value;
                                setSideQuantity(newSideQuantity);
                              }}
                              maxValue={fields.limited ?? 99}
                            />
                          </span>
                        </Col>
                      );
                    })}
                  </Row>
                </>
              );
            })}
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button
            className={styles.modalButton}
            onClick={() => setModalShow(false)}
          >
            {total} - Thêm vào giỏ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

AddToCart.propTypes = {
  label: PropTypes.string.isRequired,
  buttonClassName: PropTypes.string,
};

AddToCart.defaultProps = {
  buttonClassName: "",
};

export default AddToCart;
