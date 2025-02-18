import PropTypes from "prop-types";

const locationDropdown = {
  cities: {
    type: "cities",
    label: "Tỉnh/thành",
  },
  districts: {
    type: "districts",
    label: "Quận/huyện",
  },
};

const locationType = {
  city: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    typeText: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
  district: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    provinceId: PropTypes.string.isRequired,
    typeText: PropTypes.string.isRequired,
  }),
};

export { locationDropdown, locationType };
