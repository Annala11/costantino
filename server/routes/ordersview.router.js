const router = require('express').Router(); //TODO

const { getOrders } = require('../controllers/orderview.controller');

router.route('/')
  //вывод всех ордеров в архив
  .post(getOrders)
  

module.exports = router;
