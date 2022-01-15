const router = require('express').Router();
const { isAuth } = require('../controllers/isAuth.controller');

router.get('/', isAuth);

module.exports = router;
