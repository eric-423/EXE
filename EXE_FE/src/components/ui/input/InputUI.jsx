import PropTypes from "prop-types";
import styles from "./InputUI.module.css";
import classNames from "classnames";

const InputUI = ({ type, placeholder, value, onChange, className, onKeyDown }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter
        }
        onKeyDown && onKeyDown(e);
      }}
      className={classNames(styles.input, className)}
    />
  );
};

InputUI.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  className: PropTypes.string,
};

InputUI.defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  onChange: () => { },
  onKeyDown: () => { },
  className: "",
};

export default InputUI;
