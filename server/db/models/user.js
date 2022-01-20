const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Review, Order, Branch, Specialist }) {
      User.belongsToMany(Branch, { through: Review, foreignKey: 'user_id', otherKey: 'branch_id' });
      User.belongsToMany(Specialist, { through: Order, foreignKey: 'user_id', otherKey: 'specialist_id' });
      User.hasMany(Order, { foreignKey:'user_id'});
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    phone: {
      allowNull: false,
      type: DataTypes.BIGINT
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING
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
    modelName: 'User',
  });
  return User;
};
