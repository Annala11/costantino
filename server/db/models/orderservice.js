'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      
    }
  }
  OrderService.init({
    order_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders',
        key: 'id',
      },
    },
    service_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Services',
        key: 'id',
      },
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
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
    modelName: 'OrderService',
  });
  return OrderService;
};
