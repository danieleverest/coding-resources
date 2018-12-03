const jwt = require('jsonwebtoken');
const { secret } = require('../config');

// function for express middleware for routes that require authentication to access
exports.loginRequired = async (req, res, next) => {
  try {
    // get auth from header
    const { authorization } = req.headers;
    // get token from 'bearer <token>' format
    const [_, token] = authorization.split(' ');
    // jwt checks to see if the token is valid: error or decoded payload
    jwt.verify(token, secret, (error, decode) => {
      if (error) throw new Error(error);
      // add the payload to the req and continue to route
      req.user = decode;
      next();
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Not authorized. Please login again',
    });
  }
};
