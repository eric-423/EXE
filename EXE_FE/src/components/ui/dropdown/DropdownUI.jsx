import { Dropdown, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useState, forwardRef } from "react";

// CustomMenu component for filtering dropdown items
const CustomMenu = forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
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

// Reusable DropdownUI component
const DropdownUI = ({
  toggleText = "Select an option",
  items = [],
  onSelect,
  filterable = false,
  disabled = false,
  variant = "primary",
}) => {
  return (
    <Dropdown onSelect={onSelect}>
      <Dropdown.Toggle
        variant={variant}
        id="dropdown-basic"
        disabled={disabled}
      >
        {toggleText}
      </Dropdown.Toggle>

      <Dropdown.Menu as={filterable ? CustomMenu : undefined}>
        {items.map((item, index) => (
          <Dropdown.Item
            key={item.eventKey || index}
            eventKey={item.eventKey || index}
            active={item.active}
          >
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

DropdownUI.propTypes = {
  /**
   * Text to display on the dropdown toggle button.
   */
  toggleText: PropTypes.string,

  /**
   * Array of items to display in the dropdown.
   * Each item should have:
   * - `label`: The text to display.
   * - `eventKey`: A unique identifier for the item (optional).
   * - `active`: Whether the item is active/selected (optional).
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      active: PropTypes.bool,
    })
  ),

  /**
   * Callback function triggered when an item is selected.
   * Receives the `eventKey` of the selected item.
   */
  onSelect: PropTypes.func,

  /**
   * Whether the dropdown should include a filter input.
   */
  filterable: PropTypes.bool,

  /**
   * Whether the dropdown toggle button is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Bootstrap variant for the dropdown toggle button (e.g., "primary", "secondary").
   */
  variant: PropTypes.string,
};

DropdownUI.defaultProps = {
  toggleText: "Select an option",
  items: [],
  filterable: false,
  disabled: false,
  variant: "primary",
};

CustomMenu.displayName = "CustomMenu";

export default DropdownUI;
