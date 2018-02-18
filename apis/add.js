const ContactModel = require('../models/contact.model');

const isAuth = require('../services/isAuth.service');

const add = (data, headers) => {
  return Promise.resolve('ok');
};

module.exports = add;