import axios from "axios";

export const getCities = (page = 0, size = 63, query = "") => {
  return axios({
    url: `https://open.oapi.vn/location/provinces?page=${page}&size=${size}&query=${query}`,
    method: "GET",
  });
};

export const getDistricts = (provinceId, page = 0, size = 63, query = "") => {
  return axios({
    url: `https://open.oapi.vn/location/districts/${provinceId}?page=${page}&size=${size}&query=${query}`,
    method: "GET",
  });
};
