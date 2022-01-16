const router = require('express').Router();
const { allReviews } = require('../controllers/reviews.controller');


router.route('/')
  //get list of all reviews
  .get(allReviews);

module.exports = router;
