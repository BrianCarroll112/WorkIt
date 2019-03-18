const axios = require('axios');
const BASE_URL = 'http://localhost:3001';

const registerUser = async (first_name, last_name, email, password ) => {
  const resp = await axios.post(`${BASE_URL}/user`, {
    first_name,
    last_name,
    email,
    password
  });

  return resp.data
};

const loginUser = async (email, password) => {
  const resp = await axios.post(`${BASE_URL}/user/login`, {
    email,
    password
  });
  console.log(resp.data);
  return resp.data;
}

export {
  registerUser,
  loginUser
}
