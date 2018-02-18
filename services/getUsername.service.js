const getUsername = headers => headers['x-auth-token'].split(' ')[0];

module.exports = getUsername;