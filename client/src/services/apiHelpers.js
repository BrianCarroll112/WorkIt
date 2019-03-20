const axios = require('axios');

const CLOUDINARY_UPLOAD_PRESET = 'divs4zmo';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/di3ne3vdv/image/upload';
const CLOUDINARY_API_KEY = '539525393816812';
const BASE_URL = 'https://calm-thicket-19570.herokuapp.com';

const registerUser = async (data) => {
  const { first_name, last_name, email, password } = data;
  const resp = await axios.post(`${BASE_URL}/user`, {
    first_name,
    last_name,
    email,
    password
  });
  console.log(resp.data)
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

const getCompanies = async (token) => {
  const resp = await axios.get(`${BASE_URL}/company`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log(resp.data);
  return resp.data
}

const editUser = async (id, data, token) => {
  const resp = await axios.put(`${BASE_URL}/user/${id}`,
  data, { headers: { Authorization: `Bearer ${token}` } }
);
  console.log(resp.data);
  return resp.data
};

const deleteUser = async (id, token) => {
  const resp = await axios.delete(`${BASE_URL}/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log(resp.data);
  return resp.data
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
  editUser,
  registerUser,
  loginUser,
  getUser,
  uploadPhotoApi,
  getJobs,
  getCompanies,
  deleteUser
}
