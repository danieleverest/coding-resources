const router = require('express').Router();
const { register, login } = require('./controller');
const { regValidation, loginValidation } = require('./validation');

router.post('/register', regValidation, register);
router.post('/login', loginValidation, login);

module.exports = router;
