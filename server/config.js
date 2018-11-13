require('dotenv').config();

const address = process.env.DB_ADDRESS;
const pass = process.env.DB_PASS;
const port = process.env.PORT || 5000;
const user = process.env.DB_USER;

module.exports.db = `mongodb://${user}:${pass}${address}`;

module.exports.address = address;
module.exports.pass = pass;
module.exports.port = port;
module.exports.user = user;
