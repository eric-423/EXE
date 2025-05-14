import { District } from '@/types/common.type';
import axios from 'axios';

export const GET_DISTRICTS_QUERY_KEY = 'GET_DISTRICTS_QUERY_KEY';
export const getDistricts = (provinceId: string, page: number = 0, size: number = 63, query: string = '') => {
  axios({
    url: `https://open.oapi.vn/location/districts/${provinceId}?page=${page}&size=${size}&query=${query}`,
    method: 'GET',
  })
    .then((res) => {
      return res.data as District[];
    })
    .catch((error) => {
      console.error('Error fetching districts:', error);
    });
  return [] as District[];
};
