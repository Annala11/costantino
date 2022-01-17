'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Orders', [
      {
        user_id: 1,
        specialist_id: 1,
        status: 'завершен',
        startinterval: 10,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 2,
        specialist_id: 2,
        status: 'завершен',
        startinterval: 12,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Orders', null, {});

  }
};
