const rp = require('chat-rp');
const isAuth = require('chat-auth-mw');

const getAll = require('../apis/getAll');
const add = require('../apis/add');

const middlewares = [];
middlewares.push(isAuth);

const routes = [{
  method: 'get',
  path: '/api/contacts',
  middlewares,
  func: (req, res) =>
    getAll(req.headers)
      .then(contacts => rp.ok(res, contacts))
      .catch((error) => rp.error(res, error))
}, {
  method: 'post',
  path: '/api/contacts',
  middlewares,
  func: (req, res) =>
    add(req.body, req.headers)
      .then(() => rp.ok(res, 'ok'))
      .catch((error) => rp.error(res, error))
}]

module.exports = routes;