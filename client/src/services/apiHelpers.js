const axios = require('axios');
const BASE_URL = 'http://localhost:3001';

const registerUser = async (data) => {
  const { first_name, last_name, email, password } = data;
  const resp = await axios.post(`${BASE_URL}/user`, {
    first_name,
    last_name,
    email,
    password
  });

  return resp.data
};

const loginUser = async (data) => {
  const { email, password } = data;
  const resp = await axios.post(`${BASE_URL}/user/login`, {
    email,
    password
  });
  console.log(resp.data);
  return resp.data;
}

const getUser = async (id, token) => {
  const resp = await axios.get(`${BASE_URL}/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log(resp.data);
  return resp.data
}

const getJobs = async (token) => {
  const resp = await axios.get(`${BASE_URL}/jobs`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log(resp.data);
  return resp.data
}

const getCompany = async (id, token) => {
  const resp = await axios.get(`${BASE_URL}/company/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log(resp.data);
  return resp.data
}

export {
  registerUser,
  loginUser,
  getUser,
  getJobs,
  getCompany
}
