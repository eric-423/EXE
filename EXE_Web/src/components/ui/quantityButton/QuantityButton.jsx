import { Button } from "react-bootstrap";
import styles from "./QuantityButton.module.css";
import PropTypes from "prop-types";
import { FaPlus, FaMinus } from "react-icons/fa6";

const QuantityButton = ({ quantity, setQuantity, maxValue = 99 }) => {
  const IncrementItem = () => {
    if (quantity < maxValue) setQuantity(quantity + 1);
  };

  const DecreaseItem = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <span className={`${styles.countNumber} float-right`}>
        <Button
          variant="outline-secondary"
          onClick={DecreaseItem}
          size="lg"
          className={`${styles.countNumberBtn} ${styles.leftBorderRadius} dec`}
        >
          <FaMinus />
        </Button>
        <input
          className={`${styles.countNumberInput}`}
          type="text"
          value={quantity}
          readOnly
        />
        <Button
          variant="outline-secondary"
          onClick={IncrementItem}
          size="lg"
          className={`${styles.countNumberBtn} ${styles.rightBorderRadius} inc`}
        >
          <FaPlus />
        </Button>
      </span>
    </div>
  );
};

QuantityButton.propTypes = {
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
  maxValue: PropTypes.number,
};

QuantityButton.defaultProps = {
  quantity: 0,
  maxValue: 99,
};

export default QuantityButton;
