const router = require('express').Router(); //TODO

const { getOrdersAndSpecialists } = require('../controllers/orderview.controller');

router.route('/')
  //вывод всех ордеров в архив
  .get(getOrdersAndSpecialists)
  

module.exports = router;
