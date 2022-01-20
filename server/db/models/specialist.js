const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Branch, User, Order, Category, SpecialistCategory }) {
      Specialist.belongsTo(Branch, { foreignKey: 'branch_id' });
      Specialist.belongsToMany(User, { through: Order, foreignKey: 'specialist_id', otherKey: 'user_id' });
      Specialist.belongsToMany(Category, { through: SpecialistCategory, foreignKey: 'specialist_id', otherKey: 'category_id' });
      Specialist.hasMany(Order, { foreignKey: 'specialist_id' });
    }
  }
  Specialist.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    photo: {
      allowNull: false,
      type: DataTypes.STRING
    },
    branch_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Branches',
        key: 'id',
      },
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
    modelName: 'Specialist',
  });
  return Specialist;
};
