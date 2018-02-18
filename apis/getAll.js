const ContactModel = require('../models/contact.model');

const getUsername = require('../services/getUsername.service');

const getAll = (headers) => {
  const username = getUsername(headers);

  return ContactModel.find({
    username
  }, '-_id contact');
}

module.exports = getAll;