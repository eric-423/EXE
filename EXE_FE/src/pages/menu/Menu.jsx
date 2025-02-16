import { Col, Image, Tab, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import ProductList from "../../components/product/ProductList";
import DropdownUI from "../../components/ui/dropdown/DropdownUI";

const Menu = () => {
  const selection = [
    { id: 1, label: "Tất cả" },
    { id: 2, label: "Món chay" },
    { id: 3, label: "Món mặn" },
    { id: 4, label: "Món ngọt" },
    { id: 5, label: "Món khai vị" },
    { id: 6, label: "Món chính" },
    { id: 7, label: "Món tráng miệng" },
  ];
  return (
    <>
      <h1 className="text-center">Tấm Tắc</h1>
      <Tab.Container defaultActiveKey="first">
        <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
          <Container>
            <Row>
              <Col md={4}>
                <div className="bg-white rounded shadow-sm text-white mb-4 p-4 clearfix restaurant-detailed-earn-pts card-icon-overlap">
                  <Image
                    fluid
                    className="float-left mr-3"
                    src="/img/earn-score-icon.png"
                  />
                  <h6 className="pt-0 text-primary mb-1 font-weight-bold">
                    OFFER
                  </h6>
                  <p className="mb-0">
                    60% off on orders above $99 | Use coupon{" "}
                    <span className="text-danger font-weight-bold">
                      OSAHAN50
                    </span>
                  </p>
                  <div className="icon-overlap"></div>
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
                  <DropdownUI options={selection} />
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
