const { Category } = require('../db/models');

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({});
    res.status(200).json({ categories });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

module.exports = { getCategories };
