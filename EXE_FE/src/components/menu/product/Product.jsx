import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import { Col } from "react-bootstrap";
import AddToCart from "../../modal/addToCart/AddToCart";
import PropTypes from 'prop-types';

const Product = ({ productId, productImage, productName, productDescription, productPrice, typeId }) => {
  return (
    <>
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={4}
        className="mb-4 d-flex justify-content-center"
        key={productId}
      >
        <div className="item pb-3" style={{
          height: "100%",
          width: "100%",
          maxWidth: "300px"
        }}>
          <div className="list-card-image" style={{
            height: "200px",
            width: "100%",
            position: "relative"
          }}>
            <div className="favourite-heart text-danger position-absolute">
              <a href="detail.html">
                <i className="icofont-heart"></i>
              </a>
            </div>
            <a href="detail.html">
              <img
                src={productImage}
                className="img-fluid item-img w-100 h-100"
                alt='...'
                style={{ objectFit: "cover" }}
              />
            </a>
          </div>

          <div className="p-3 content">
            <div className="list-card-body">
              <h6 className="mb-1">
                <a href="detail.html" className="text-black">
                  {productName}
                </a>
              </h6>
              <p className="text-gray mb-2 mh-25 restrict-height" style={{ fontSize: "1rem" }}>
                {productDescription}
              </p>
            </div>

            <div className="d-flex justify-content-between">
              <div className="list-card-badge product-price">
                <span className="no-discount-product px-3 py-1 ">
                  {productPrice.toLocaleString()}
                </span>
              </div>
              <div className="add-to-cart">
                <AddToCart
                  href="detail.html"
                  className="btn btn-outline-dark btn-sm pl-3 pr-3"
                  label="Thêm"
                  itemAddToCart={{
                    productId: productId,
                    productName: productName,
                    productDescription: productDescription,
                    productPrice: productPrice,
                    productImage: productImage,
                    typeId: typeId
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

Product.propTypes = {
  productId: PropTypes.number.isRequired,
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  typeId: PropTypes.number.isRequired,
};

export default Product;
