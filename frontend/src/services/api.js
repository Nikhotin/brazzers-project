import axios from 'axios';
import { apiURL } from '../lib/constants';

export const routes = {
  example: '/example',
};

const config = {
  headers: { 'Content-Type': 'application/json' },
};
const configMultipart = {
  headers: { 'Content-Type': 'multipart/form-data' },
};

export const getData = async (route, token) => {
  const res = await axios.get(
    `${apiURL}${route}`,
    token
      ? {
          headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          },
        }
      : config
  );
  return res.data;
};

export const postData = async (route, data, token) => {
  const res = await axios.post(
    `${apiURL}${route}`,
    data,
    token
      ? {
          headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          },
        }
      : config
  );
  return res.data;
};

export const putData = async (route, data, token) => {
  const res = await axios.put(`${apiURL}${route}`, data, {
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const postFormData = async (route, data, token) => {
  const res = await axios.post(`${apiURL}${route}`, data, {
    headers: {
      ...configMultipart.headers,
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
