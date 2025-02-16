import { Row, Col, Tab } from "react-bootstrap";
import Product from "./Product";

const ProductList = () => {
  return (
    <>
      <Col md={8}>
        <div className="offer-dedicated-body-left">
          <Tab.Content className="h-100">
            <Tab.Pane eventKey="first">
              <Row>
                <h5 className="mb-4 mt-3 col-md-12">Best Sellers</h5>
                <Col md={4} sm={6} className="mb-4">
                  <Product
                    id={1}
                    title="The osahan Restaurant"
                    subTitle="North Indian • American • Pure veg"
                    imageAlt="Product"
                    image="@/assets/icons/call.svg"
                    imageClass="img-fluid item-img"
                    price={250}
                    priceUnit="$"
                    qty={1}
                    showPromoted={true}
                    promotedVariant="dark"
                    favIcoIconColor="text-danger"
                    rating="3.1 (300+)"
                  />
                </Col>
                <Col md={4} sm={6} className="mb-4">
                  <Product
                    id={2}
                    title="The osahan Restaurant"
                    subTitle="North Indian • American • Pure veg"
                    imageAlt="Product"
                    image="@/assets/icons/call.svg"
                    imageClass="img-fluid item-img"
                    price={250}
                    priceUnit="$"
                    qty={1}
                    showPromoted={true}
                    promotedVariant="dark"
                    favIcoIconColor="text-danger"
                    rating="3.1 (300+)"
                  />
                </Col>
                <Col md={4} sm={6} className="mb-4">
                  <Product
                    id={3}
                    title="The osahan Restaurant"
                    subTitle="North Indian • American • Pure veg"
                    imageAlt="Product"
                    image="@/assets/icons/call.svg"
                    imageClass="img-fluid item-img"
                    price={250}
                    priceUnit="$"
                    qty={1}
                    showPromoted={true}
                    promotedVariant="dark"
                    favIcoIconColor="text-danger"
                    rating="3.1 (300+)"
                  />
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Col>
    </>
  );
};

export default ProductList;
