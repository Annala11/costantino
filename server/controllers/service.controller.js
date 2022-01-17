const { Service } = require('../db/models');

const allServices = async (req, res) => {
  try {
    const services = await Service.findAll({
      order: [['id', 'ASC']],
    });
    res.status(200).json({ services });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { allServices };
