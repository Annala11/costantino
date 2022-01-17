const router = require('express').Router();
const { allReviews, addReview } = require('../controllers/reviews.controller');


router.route('/')
  // Получени всех отзывов
  .get(allReviews);

router.route('/addreview')
  // Добавление отзыва
  .post(addReview);

module.exports = router;
