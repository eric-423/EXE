import styles from "../Store.module.css";
import PropTypes from "prop-types";
import bannerImage from "/images/bg1.png";

const MinimizedStore = ({ branchId, handleBranchId, image, store, distance }) => {
  const handleClick = () => {
    handleBranchId(store.id);
  };

  return (
    <div
      className={`h-50 w-100 position-relative mb-4 ${styles.customBg} ${styles.hoverEffect} ${styles.rounded}`}
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

        <div className="d-flex justify-content-between mb-1">
          <p style={{ fontWeight: "bold" }} className={`${styles.content} mb-0`}>
            {store.name}
          </p>
          <p className={`${styles.content} mb-0`}>{distance / 1000} km</p>
        </div>

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
  distance: PropTypes.number.isRequired,
};

MinimizedStore.defaultProps = {
  image: bannerImage,
  store: {
    name: "Store Name",
    address: "Store Address",
  },
};

export default MinimizedStore;
