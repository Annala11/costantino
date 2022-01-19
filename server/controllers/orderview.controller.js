const { Order } = require('../db/models');

const getOrders = async (req, res) => {
  //специалисты и ордеры
  const { user_id } = req.body
  try {

    const whereBlock = { status: 'finished' };
    if (user_id) {
      whereBlock.user_id = user_id
    }

    const orders = await Order.findAll({
      where: whereBlock
    });

    res.status(200).json({ orders });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    
  }
};

const allOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();

    res.status(200).json(orders)
  } catch (error) {
    res.status(404).json({ error: 'error' });
    
  }
}

module.exports = {
  getOrders,
  allOrders
};
