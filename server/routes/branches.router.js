const router = require('express').Router();
const { branches } = require('../controllers/branches.controller');

router.route('/')
  .post(branches);

module.exports = router;
