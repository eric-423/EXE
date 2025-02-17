import styles from "../Store.module.css";
import PropTypes from "prop-types";
import bannerImage from "../../../assets/images/Home - Banner.jpg";

const MinimizedStore = ({ image, store }) => {
  return (
    <div
      className={`h-50 w-100 position-relative ${styles.customBg} ${styles.hoverEffect} ${styles.rounded}`}
      style={{ maxHeight: "75px" }}
    >
      <div className={`${styles.imgContainer} `}>
        <img
          src={image} // Use the imported image
          alt="store"
          className={`${styles.img} ${styles.rounded}`}
        />
      </div>
      <div className={`${styles.contentContainer} `}>
        <p style={{ fontWeight: "bold" }} className={`${styles.content} mb-0`}>
          {store.name}
        </p>
        <p className={`${styles.content} mb-0`}>{store.address}</p>
      </div>
    </div>
  );
};

MinimizedStore.propTypes = {
  image: PropTypes.string,
  store: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
};

MinimizedStore.defaultProps = {
  image: bannerImage,
  store: {
    name: "Store Name",
    address: "Store Address",
  },
};

export default MinimizedStore;
