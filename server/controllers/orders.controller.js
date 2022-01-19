const { Op } = require("sequelize");
const { Order, Service, OrderService } = require('../db/models');

const getOrdersForCalendar = async (req, res) => {
  //получает записи, для отрисовки на клиенте (свободных и занятных интервалов для указанного спец-та на указанную дату)
  //специалисты и ордеры
  const { specid, date } = req.body;

  try {
    const orders = await Order.findAll({
      where: {
        status: {
          [Op.in]:['created','finished']
        },
        specialist_id: specid,
        //date:date ???
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      include: {
        model: Service,
        attributes: ['interval']
      }
    });

    res.status(200).json({ orders });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

const orderMe = async (req, res) => {
  //специалисты и ордеры
  const { specid, date, interval, serviceid } = req.body;
  const userid = req.session.user.id;

  try {
    const order = await Order.create({
      user_id: userid,
      specialist_id: specid,
      status: 'created',
      startinterval:interval,
      date,
    });//, { plain: true }
    console.log(order,'order!!');
    if(order){
      const orderservice = await OrderService.create({
        order_id: order.id,
        service_id: serviceid
      })
      if(orderservice){
        res.status(200).json({ message: 'Запись создана'});
      }
    }else{
      res.status(404).json({ error: 'Не удается создать запись' });
    }
    

    
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

module.exports = { getOrdersForCalendar, orderMe };
