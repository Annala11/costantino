const { Review, sequelize } = require('../db/models');

// Вытащить все отзывы
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

// Добавить отзыв в БД
const addReview = async (req, res) => {
  try {

    const { title, text, rating, user_id, branch_id } = req.body;

    const review = await Review.create({
      title,
      text,
      rating,
      user_id,
      branch_id,

    })

    res.status(201).json(review);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}


// Вытащить 3 лучших отзывов по дате
const bestReviews = async (req, res) => {
  try {

    const reviews = await Review.findAll({
      order: [['updatedAt', 'DESC']],
      where: { top_review: true },
      attributes: ['id', 'title', 'text', 'rating', 'branch_id', 'user_id']
    });


    res.status(200).json(reviews);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}


module.exports = {
  allReviews,
  addReview,
  bestReviews
};
