const axios = require('axios');

const ContactModel = require('../models/contact.model');

const getUsername = require('../services/getUsername.service');

const checkUsernameAndContact = (username, contact) =>
  ContactModel
    .findOne({ contact })
    .then((contact) => !!contact);

const checkContactExist = (contact) =>
  axios
    .get(`${process.env.CHECK_CONTACT_API}/${contact}`)
    .then((response) => response.data);

const saveContact = (username, contact) =>
  (new ContactModel({
    username,
    contact,
  })).save();

const add = (data, headers) => {
  const username = getUsername(headers);
  const { contact } = data;

  if (username === contact) {
    return Promise.reject(new Error('INVALID_CONTACT'));
  }

  return checkUsernameAndContact(username, contact)
    .then((isExist) => {
      if (isExist) {
        return Promise.reject(new Error('CONTACT_EXIST'));
      }

      return checkContactExist(contact);
    })
    .then((isExist) => {
      if (!isExist) {
        return Promise.reject(new Error('CONTACT_NOT_FOUND'));
      }

      return saveContact(username, contact);
    });
};

module.exports = add;