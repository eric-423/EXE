import { Row, Container } from "react-bootstrap";
import Product from "./Product";
import "./Product.css";
import bannerImage from "../../../assets/images/Home - Banner.jpg";

const ProductList = () => {
  const menuItems = [
    {
      image: bannerImage,
      title: "World Famous",
      description: "North Indian • American • Pure veg",
      time: "20–25 min",
      price: "$250",
      oldPrice: "$350",
    },
    {
      image: bannerImage,
      title: "World Famous",
      description: "North Indian • American • Pure veg",
      time: "20–25 min",
      price: "$250",
      oldPrice: "",
    },
    {
      image: bannerImage,
      title: "World Famous",
      description: `- Cơm: sườn nướng, bì, chả trứng
- Canh tự chọn
- Nước ngọt tự chọn`,
      time: "20–25 min",
      price: "$250",
      oldPrice: "$350",
    },
    {
      image: bannerImage,
      title: "World Famous",
      description: "North Indian • American • Pure veg",
      time: "20–25 min",
      price: "$250",
      oldPrice: "",
    },
    {
      image: bannerImage,
      title: "World Famous",
      description: `- Cơm: sườn nướng, bì, chả trứng
- Canh tự chọn
- Nước ngọt tự chọn`,
      time: "20–25 min",
      price: "$250",
      oldPrice: "$350",
    },
  ];
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
            {menuItems.map((item, index) => (
              <Product
                key={index}
                image={item.image}
                title={item.title}
                description={
                  <span className="product-description">
                    {item.description}
                  </span>
                }
                time={item.time}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductList;
