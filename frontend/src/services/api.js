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

// IT'S FAKE API WHILE ROMA NE NAPISHET BACK
export const dataBase = {
  doctors: [
    {
      id: '1',
      name: 'Иванов С.',
      qualification: 'terapevt'
    },
    {
      id: '2',
      name: 'Сидоров А.',
      qualification: 'terapevt'
    },
    {
      id: '3',
      name: 'Карпенко Ю.',
      qualification: 'terapevt'
    },
    {
      id: '4',
      name: 'Серов Д.',
      qualification: 'nevropatolog'
    },
    {
      id: '5',
      name: 'Тимаков С.',
      qualification: 'nevropatolog'
    }
  ],
  me: {
    login: 'Ruslan',
    password: 123
  },
  zapisi: {

  }
}

export async function fakeApiMethod(property) {
  return await new Promise(res => setTimeout(() => {
    res(dataBase[property])
  }, 1500));
}

export async function fakeApiPost(property) {
  return await new Promise(res => setTimeout(() => {
    res(dataBase[property])
  }, 1500));
}