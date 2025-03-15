import { Row, Container } from "react-bootstrap";
import PropTypes from 'prop-types';
import Product from "./Product";
import "./Product.css";

const ProductList = ({ products, typeId }) => {
  return (
    <>
      {/* <Col md={8}>
        <div className="offer-dedicated-body-left">
          <Tab.Content className="h-100">
            <Tab.Pane eventKey="first">
              <Row>
                <h5 className="mb-4 mt-3 col-md-12">Best Sellers</h5>
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
      </Col> */}
      <section className="section pt-3 pb-5 products-section">
        <Container>
          <Row className="justify-content-start">
            {products.map((item) => (
              <Product
                key={item.productId}
                productId={item.productId}
                productImage={item.productImage}
                productName={item.productName}
                productDescription={
                  <span className="product-description">
                    {item.productDescription}
                  </span>
                }
                productPrice={item.productPrice}
                typeId={typeId}
              />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        productId: PropTypes.number.isRequired,
      }).isRequired,
      image: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      productDescription: PropTypes.string.isRequired,
      productPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  typeId: PropTypes.number.isRequired,
};

export default ProductList;
