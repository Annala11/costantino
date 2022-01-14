module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SpecialistCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      specialist_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Specialists',
          key: 'id',
        },
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SpecialistCategories');
  }
};
