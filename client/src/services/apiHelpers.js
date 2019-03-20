const axios = require('axios');
const BASE_URL = 'http://localhost:3001';
const CLOUDINARY_UPLOAD_PRESET = 'divs4zmo';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/di3ne3vdv/image/upload';
const CLOUDINARY_API_KEY = '539525393816812';


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

const baseURL = 'https://api.cloudinary.com/v1_1/di3ne3vdv/image/upload';
  let cloudinaryApi = axios.create({
    baseURL: baseURL
  });

const uploadPhotoApi = async (data) => {
  console.log(`triggered with ${data}`);
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
  uploadPhotoApi
}
