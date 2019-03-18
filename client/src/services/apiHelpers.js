import axios from 'axios';
const BASE_URL = 'http://localhost:3001';

const registerUser = async (data) => {
  const resp = await axios.post(`${BASE_URL}/user`, data);

  return resp.data
};

export { registerUser }
