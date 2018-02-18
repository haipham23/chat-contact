const axios = require('axios');

const isAuth = (username, token) => {
  return axios.get(`${process.env.AUTH_API}/${token}/${username}`)
    .then((response) => {
      return response.data
        ? username
        : Promise.reject()
    });
};

module.exports = isAuth;