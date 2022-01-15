const router = require('express').Router();
const { registerUser } = require('../controllers/registration.controller');


router.route('/')
  // регистрация нового пользователя
  .post(registerUser);


module.exports = router;
