import PropTypes from "prop-types";
import styles from "./ButtonUI.module.css";
import classNames from "classnames";

const ButtonUI = ({ children, variant, onClick, className }) => {
  return (
    <button
      className={classNames(styles.button, styles[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ButtonUI.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ButtonUI.defaultProps = {
  variant: "primary",
  onClick: () => { },
  className: "",
};

export default ButtonUI;
