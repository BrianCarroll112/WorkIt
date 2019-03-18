const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: BASE_URL,

});

const main = async () => {
  try {
    const resp = await api.post('/user/login', {
      email: 'cc@cc.com',
      password: 'cc',
    });
    // return resp.data;
    console.log(resp.data);
  } catch (e) {
    console.log(e.message);
  }
};

main();
