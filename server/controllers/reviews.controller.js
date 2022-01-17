const { Review } = require('../db/models');

const allReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      attributes: ['id', 'title', 'text', 'rating', 'branch_id', 'user_id']
    });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

}

const addReview = async (req, res) => {
  try {

    const { title, text, rating, user_id, branch_id } = req.body;

    const review = await Review.create({
      title,
      text,
      rating,
      user_id,
      branch_id,

    });

    res.status(201).json(review);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

module.exports = {
  allReviews,
  addReview,
};
