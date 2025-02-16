import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ children, type = "primary", onClick }) => {
  return (
    <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
