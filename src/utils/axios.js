import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://obayomi-banka.herokuapp.com/api/v1',
});
export const setToken = (token) => {
console.log('axios', axiosInstance);
  if (!token) {
    delete axiosInstance.defaults.headers.common.Authorization;
  }
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default axiosInstance;
