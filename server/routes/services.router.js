const router = require('express').Router();
const { allServices } = require('../controllers/services.controller');

router.route('/')
  //get list of all services
  .get(allServices);

module.exports = router;
