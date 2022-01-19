const router = require('express').Router(); //TODO

const { getOrders, allOrders } = require('../controllers/orderview.controller');

router.route('/')
  //вывод всех ордеров в архив
  .post(getOrders)

router.route('/allorders')
  //вывод всех для админ панели
  .get(allOrders)

module.exports = router;
