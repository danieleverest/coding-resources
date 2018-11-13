require('dotenv').config();

module.exports = {
  ADDRESS: process.env.DB_ADDRESS,
  PASS: process.env.DB_PASS,
  PORT: process.env.PORT || 5000,
  USER: process.env.DB_USER,
};
