import { Dropdown, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useState, forwardRef, useEffect } from "react";

// CustomMenu component for filtering dropdown items
const CustomMenu = forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={{ ...style, maxHeight: "200px", overflowY: "auto" }}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Tìm kiếm"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value ||
              child.props.children.toLowerCase().startsWith(value.toLowerCase())
          )}
        </ul>
      </div>
    );
  }
);
CustomMenu.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  "aria-labelledby": PropTypes.string,
};
CustomMenu.displayName = "CustomMenu";

const DropdownUI = ({
  toggleText = "Select an option",
  items = [],
  onSelect,
  filterable = false,
  disabled = false,
  variant = "primary",
  defaultSelected, // New prop for default selected item
}) => {
  const [selectedItem, setSelectedItem] = useState(
    defaultSelected || toggleText
  );
  // Ensure default selected item updates when the prop changes
  useEffect(() => {
    if (defaultSelected) {
      const foundItem = items.find((item) => item.eventKey === defaultSelected);
      if (foundItem) setSelectedItem(foundItem.label);
    }
  }, [defaultSelected, items]);

  const handleSelect = (eventKey) => {
    const selected = items.find((item) => item.eventKey === eventKey);
    if (selected) {
      setSelectedItem(selected.label);
      if (onSelect) {
        console.log("onselect");
        onSelect(eventKey);
      } // Trigger parent onSelect callback
    }
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle
        variant={variant}
        id="dropdown-basic"
        disabled={disabled}
      >
        {selectedItem}
      </Dropdown.Toggle>

      <Dropdown.Menu as={filterable ? CustomMenu : undefined}>
        {items.map((item, index) => (
          <Dropdown.Item
            key={item.eventKey || index}
            eventKey={item.eventKey || index}
            active={selectedItem === item.eventKey} // Mark selected item
          >
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

DropdownUI.propTypes = {
  toggleText: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      active: PropTypes.bool,
    })
  ),
  onSelect: PropTypes.func,
  filterable: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  defaultSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Default selected value
};

DropdownUI.defaultProps = {
  toggleText: "Select an option",
  items: [],
  filterable: false,
  disabled: false,
  variant: "primary",
  defaultSelected: null,
};

export default DropdownUI;
