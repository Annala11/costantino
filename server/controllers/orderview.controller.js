const { Order } = require('../db/models');
const { User } = require('../db/models');
const { Specialist } = require('../db/models');

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
    const orders = await Order.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      include: [{
        model: User,
        attributes: ['name', 'phone']
      }, {
        model: Specialist,
        attributes: ['name']
      }],

    })

    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });

  }
}

const changeStatus = async (req, res) => {
  const { status, id } = req.body;
  try {
    const order = await Order.update({
      status: status
    }, {
      where: {
        id: id
      },
      returning: true,
    });

    res.status(200).json(order[1][0]) // TODO = check for anna
  } catch (error) {
    res.status(404).json({ message: error.message });

  }
}



module.exports = {
  getOrders,
  allOrders,
  changeStatus
};
