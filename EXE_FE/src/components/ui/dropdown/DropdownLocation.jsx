import PropTypes from "prop-types";
import { locationDropdown, locationType } from "../../../config/constant";
import DropdownUI from "./DropdownUI";

const DropdownLocation = ({
  type = locationDropdown.cities,
  items = [],
  onSelect,
  defaultSelected,
}) => {
  const data = items.map((item) => ({
    label: item.name,
    eventKey: item.id,
    active: false,
  }));

  return (
    <DropdownUI
      toggleText={type.label}
      items={data}
      onSelect={onSelect}
      defaultSelected={defaultSelected}
      filterable={true}
    ></DropdownUI>
  );
};

DropdownLocation.propTypes = {
  type: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),

  /**
   * Array of items to display in the dropdown.
   * Each item should have:
   * - `label`: The text to display.
   * - `eventKey`: A unique identifier for the item (optional).
   * - `active`: Whether the item is active/selected (optional).
   */
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(locationType.city),
    PropTypes.arrayOf(locationType.district),
  ]),

  defaultSelected: PropTypes.oneOfType([
    locationType.city,
    locationType.district,
  ]),
  onSelect: PropTypes.func,
};

DropdownLocation.defaultProps = {
  type: locationDropdown.cities,
  items: [],
  onSelect: () => {},
  defaultSelected: null,
};

export default DropdownLocation;
