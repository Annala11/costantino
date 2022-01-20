const router = require('express').Router(); //TODO

const { getOrdersForCalendar, orderMe } = require('../controllers/orders.controller');

router.route('/getordersforcalendar')
  //вывод всех ордеров в архив
  .post(getOrdersForCalendar)

router.route('/makeorder')
  //вывод всех ордеров в архив
  .post(orderMe)


module.exports = router;
