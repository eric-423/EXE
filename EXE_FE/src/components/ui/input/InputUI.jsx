import PropTypes from "prop-types";
import styles from "./InputUI.module.css";
import classNames from "classnames";

const InputUI = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classNames(styles.input, className)}
    />
  );
};

InputUI.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

InputUI.defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  onChange: () => {},
  className: "",
};

export default InputUI;
