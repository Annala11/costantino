const router = require('express').Router(); //TODO

const { getOrders } = require('../controllers/orderview.controller');


router.route('/')
  //вывод всех ордеров в архив
  .get(getOrders);

module.exports = router;
