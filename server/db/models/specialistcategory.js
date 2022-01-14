const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpecialistCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      
    }
  }
  SpecialistCategory.init({
    specialist_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Specialists',
        key: 'id',
      },
    },
    category_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
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
    modelName: 'SpecialistCategory',
  });
  return SpecialistCategory;
};
