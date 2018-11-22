const { check } = require('express-validator/check');
const User = require('../../models/user');

const alreadyTaken = field => async (value) => {
  return await User.findOne({ [field]: value })
    ? Promise.reject(new Error(`${field} already taken`)) : Promise.resolve();
};

const userExists = async (username) => {
  return await User.findOne({ username })
    ? Promise.resolve()
    : Promise.reject(new Error('That username does not exist'));
}

const regValidation = [
  check('username')
    .trim()
    .escape()
    .isLength({ min: 5 })
    .withMessage('Username must be longer than 5 characters')
    .isLength({ max: 25 })
    .withMessage('Username must be less than 25 characters')
    .custom(alreadyTaken('username')),
  check('email')
    .trim()
    .escape()
    .isEmail()
    .withMessage('Must be a valid email')
    .normalizeEmail()
    .custom(alreadyTaken('email')),
  check('password')
    .trim()
    .escape()
    .isLength({ min: 6 })
    .withMessage('Password must be longer than 6 characters')
    .isLength({ max: 25 })
    .withMessage('Password must be less than 25 characters'),
];

const loginValidation = [
  check('username')
    .trim()
    .escape()
    .isLength({ min: 5 })
    .withMessage('Usernames are longer than 5 characters')
    .isLength({ max: 25 })
    .withMessage('Usernames are shorter than 25 characters')
    .custom(userExists),
  check('password')
    .trim()
    .escape()
    .isLength({ min: 6 })
    .withMessage('Passwords are longer than 6 characters')
    .isLength({ max: 25 })
    .withMessage('Passwords are shorter than 25 characters'),
];

module.exports = {
  regValidation,
  loginValidation,
};
