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

const statusMap = {
  pending: { text: "Đang thảo luận", className: "status-badge-pending" },
  processing: {
    text: "Đang thực hiện",
    className: "status-badge-processing",
  },
  completed: { text: "Đã giải quyết", className: "status-badge-completed" },
  resolved: { text: "Đã xử lý", className: "status-badge-resolved" },
};

export { locationDropdown, locationType, statusMap };
