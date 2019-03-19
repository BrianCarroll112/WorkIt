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
}

const baseURL =
  'https://api.cloudinary.com/v1_1/photo-sharing-app/image/upload';
let cloudinaryApi = axios.create({
  baseURL: baseURL
});

const uploadPhoto = async (data) => {
  let resp = await cloudinaryApi.post('' ,
    {
      file: data,
      upload_preset: 'divs4zmo'
    }
  );
  return resp;
}

export {
  registerUser,
  loginUser,
  getUser,
  uploadPhoto 
}
