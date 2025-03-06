import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import { Col } from "react-bootstrap";
import { PropTypes } from "prop-types";
import AddToCart from "../../modal/addToCart/AddToCart";

const Product = ({ image, title, description, price, oldPrice }) => (
  <Col xs={12} sm={6} md={4} className="mb-3">
    {" "}
    {/* Adjust column sizes based on screen size */}
    <div className="item">
      <div className="list-card-image">
        <div className="favourite-heart text-danger position-absolute">
          <a href="detail.html">
            <i className="icofont-heart"></i>
          </a>
        </div>
        <a href="detail.html">
          <img src={image} className="img-fluid item-img" alt={title} />
        </a>
      </div>

      <div className="p-3 content">
        <div className="list-card-body">
          <h6 className="mb-1">
            <a href="detail.html" className="text-black">
              {title}
            </a>
          </h6>
          <p
            className="text-gray mb-2 mh-25 restrict-height"
            style={{ fontSize: "1rem" }}
          >
            {description}
          </p>
        </div>

        <div className="d-flex justify-content-between">
          {oldPrice ? (
            <div className="list-card-badge product-price">
              <span className="badge badge-success">
                {price.toLocaleString()}
                <u>đ</u>
              </span>
              <small
                className="ml-2"
                style={{ textDecoration: "line-through" }}
              >
                {oldPrice.toLocaleString()} <u>đ</u>
              </small>
            </div>
          ) : (
            <div className="list-card-badge product-price">
              <span className="no-discount-product px-3 py-1 ">
                {price.toLocaleString()}
              </span>
            </div>
          )}
          <div className="add-to-cart">
            <AddToCart
              href="detail.html"
              className="btn btn-outline-dark btn-sm pl-3 pr-3"
              label="Thêm"
            />
          </div>
        </div>
      </div>
    </div>
  </Col>
);

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.string,
};

export default Product;
