const router = require('express').Router();
const { allReviews, addReview, bestReviews } = require('../controllers/reviews.controller');


router.route('/')
  // Получени всех отзывов
  .get(allReviews);

router.route('/bestreviews')
  // Получени 3 лучших отзывов
  .get(bestReviews);

router.route('/addreview')
  // Добавление отзыва
  .post(addReview);

module.exports = router;
