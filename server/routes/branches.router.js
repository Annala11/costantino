const router = require('express').Router();
const { branches } = require('../controllers/branches.controller');

router.route('/getall')
  .get(branches);

module.exports = router;
