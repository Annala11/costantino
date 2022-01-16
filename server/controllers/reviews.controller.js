const { Review } = require('../db/models');

const allReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      order: [['id', 'ASC']],
    });
    console.log(reviews.title);
    // const { title, text, rating, branch_id, user_id } = reviews;
    // console.log(title);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

}
module.exports = { allReviews };
