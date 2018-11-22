const router = require('express').Router();
const { check, validationResult } = require('express-validator/check');
const User = require('../../models/user');

// validator/sanitizer
const regValidation = [
  check('username')
    .trim()
    .escape()
    .isLength({ min: 5 })
    .withMessage('Username should be longer than 5 characters')
    .isLength({ max: 25 })
    .withMessage('Username should be less than 25 characters')
    .custom((value) => {
      try {
        User.findOne({ username: value })
          .then((user) => {
            return user ? Promise.reject('E-mail already in use') : Promise.resolve()
          })
      } catch (error) {
        return error;
      }
    }),
  check('email')
    .trim()
    .escape()
    .isEmail()
    .normalizeEmail(),
  check('password')
    .trim()
];

router.post('/register', regValidation, register);
router.post('/login', login);

// Route functions
async function register(req, res) {
  try {
    const errors = validationResult(req);
    res.status(422).json({ errors: errors.array() });
    const { username, email, password } = req.body;
    // input validated pre-save by User model and password hashed
    await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      message: 'Registration successful',
    });
  } catch (error) {
    const errors = {};
    if (error.errors) {
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
    }
    res.status(400).json({
      success: false,
      error: errors,
    });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    // User not found
    if (!user) throw new Error('Username not found');
    // Incorrect password
    const pwIsValid = await user.checkPassword(password);
    if (!pwIsValid) throw new Error('Password is incorrect');
    // User found and correct password: login()
    user.login(res);
  } catch (error) {
    res.json({
      success: false,
      error,
    });
  }
}

module.exports = router;
