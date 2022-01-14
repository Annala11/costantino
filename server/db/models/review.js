const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      
    }
  }
  Review.init({
    title: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    text: {
      allowNull: false,
      type: DataTypes.STRING
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    branch_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Branches',
        key: 'id',
      },
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
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
    modelName: 'Review',
  });
  return Review;
};
