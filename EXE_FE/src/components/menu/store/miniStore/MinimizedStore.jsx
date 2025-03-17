import styles from "../Store.module.css";
import PropTypes from "prop-types";
import bannerImage from "/images/bg1.png";

const MinimizedStore = ({ branchId, handleBranchId, image, store }) => {
  const handleClick = () => {
    handleBranchId(store.id);
  };

  return (
    <div
      className={`h-50 w-100 position-relative ${styles.customBg} ${styles.hoverEffect} ${styles.rounded}`}
      style={{ maxHeight: "75px" }}
      onClick={() => handleClick()}
    >
      {branchId === store.id ? <span className="text-danger">•</span> : null}
      <div className={`${styles.imgContainer}`}>
        <img
          src={image}
          alt="store"
          className={`${styles.img} ${styles.rounded}`}
        />
      </div>
      <div className={`${styles.contentContainer}`}>
        <p style={{ fontWeight: "bold" }} className={`${styles.content} mb-0`}>
          {store.name}
        </p>
        <p className={`${styles.content} mb-0`}>Address: {store.address}</p>
        <p className={`${styles.content} mb-0`}>Phone Number: {store.phone}</p>
      </div>
    </div>
  );
};


MinimizedStore.propTypes = {
  branchId: PropTypes.number.isRequired,
  image: PropTypes.string,
  handleBranchId: PropTypes.func.isRequired,
  store: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
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
