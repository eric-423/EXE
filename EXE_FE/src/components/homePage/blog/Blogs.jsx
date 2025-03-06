import 'bootstrap/dist/css/bootstrap.min.css';
import './Blogs.css';
import { Col, Container, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const MenuItem = ({ image, title, description }) => (
    <Col className="col-3">
        <div >
            <div className='item' >
                <div className="list-card-image">
                    <div className="favourite-heart text-danger position-absolute">
                        <a href="detail.html"><i className="icofont-heart"></i></a>
                    </div>
                    <a href="detail.html">
                        <img src={image} className="img-fluid item-img" alt={title} />
                    </a>
                </div>

                <div className="p-3 content">
                    <div className="list-card-body">
                        <h6 className="mb-1"><a href="detail.html" className="text-black">{title}</a></h6>
                        <p className="text-gray mb-3">{description}</p>
                    </div>

                    <div className='d-flex justify-content-end align-items-center'>
                        <div>
                            <a href="detail.html" className="btn btn-outline-dark btn-sm pl-3 pr-3 rounded">ĐỌC TIẾP</a>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </Col >
);

const Blogs = () => {
    const menuItems = [
        {
            image: "images/pro1.jpg",
            title: "World Famous",
            description: "North Indian • American • Pure veg",
            time: "20–25 min",
        },
        {
            image: "images/pro1.jpg",
            title: "World Famous",
            description: "North Indian • American • Pure veg",
            time: "20–25 min",

        },
        {
            image: "images/pro1.jpg",
            title: "World Famous",
            description: "North Indian • American • Pure veg",
            time: "20–25 min",

        },
        {
            image: "images/pro1.jpg",
            title: "World Famous",
            description: "North Indian • American • Pure veg",
            time: "20–25 min",
        },
    ];

    return (
        <div className='blogsItem'>
            <section className="section pt-5 pb-5 products-section ">
                <Container>
                    <h1> CHUYỆN CƠM TẤM </h1>
                    <Row className="justify-content-center ">
                        {menuItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                time={item.time}
                            />
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

MenuItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
};

export default Blogs;
