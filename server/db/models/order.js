const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ OrderService, Service, User, Specialist }) {
      Order.belongsToMany(Service, { through: OrderService, foreignKey: 'order_id', otherKey: 'service_id' });
      Order.belongsTo(User, { foreignKey: 'user_id' });
      Order.belongsTo(Specialist, { foreignKey: 'specialist_id' })
    }
  }
  Order.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    specialist_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Specialists',
        key: 'id',
      },
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    },
    startinterval: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
