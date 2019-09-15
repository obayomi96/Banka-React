import axios from 'axios';

export const axiosPostCall = async (url, payload) => {
  const token = localStorage.getItem('token');
  const options = {
    headers: {
      'Content-Type': 'Application/json',
      'Authorization': `Bearer ${token}`,
    },
  };
  const response = await axios.post(url, payload, options);
  return response;
};

export const axiosGetCall = async (url, payload) => {
  const token = localStorage.getItem('token');
  const options = {
    headers: {
      'Content-Type': 'Application/json',
      'Authorization': `Bearer ${token}`,
    },
  };
  const response = await axios.get(url, payload, options);
  return response;
};
