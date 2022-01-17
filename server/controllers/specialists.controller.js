const { Specialist } = require('../db/models');

const getSpecialists = async (req, res) => { 
  
  try {
    const specialists = await Specialist.findAll({});
    res.status(200).json({ specialists });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

module.exports = { getSpecialists };
