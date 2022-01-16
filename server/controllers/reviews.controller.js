const { Review } = require('../db/models');

const allReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      attributes: ['id', 'title', 'text', 'rating', 'branch_id', 'user_id']
    });
    // console.log({ reviews });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

}
module.exports = { allReviews };
