const { Order } = require('../db/models');

const getOrders = async (req, res) => {
  // const { user } = req.body;
  
  try {
    const orders = await Order.findAll({
          where: { status: 'завершен' }
    });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

module.exports = { getOrders };
