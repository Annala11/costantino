const router = require('express').Router();
const { initData } = require('../controllers/initdata.controller');

router.route('/')
  .get(initData);

module.exports = router;
