const { Order } = require('../db/models');
const { Specialist } = require('../db/models');

const getOrdersAndSpecialists = async (req, res) => { 
  //специалисты и ордеры
  try {
    const specialists = await Specialist.findAll({});
    
    const orders = await Order.findAll({
      where: { status: 'finished' }
});
    res.status(200).json({ specialists, orders });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

module.exports = { getOrdersAndSpecialists };
