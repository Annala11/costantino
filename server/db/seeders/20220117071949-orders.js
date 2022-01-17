'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Orders', [
      {
        user_id: 1,
        specialist_id: 1,
        status: 'created',
        startinterval: 10,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 2,
        specialist_id: 2,
        status: 'finished',
        startinterval: 12,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        user_id: 2,
        specialist_id: 1,
        status: 'closed',
        startinterval: 14,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 2,
        specialist_id: 2,
        status: 'finished',
        startinterval: 12,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        user_id: 2,
        specialist_id: 2,
        status: 'finished',
        startinterval: 12,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        user_id: 2,
        specialist_id: 2,
        status: 'finished',
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
