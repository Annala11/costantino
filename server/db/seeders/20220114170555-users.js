'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
      phone: 1111,
      password: 'test1',
      name: 'Алексей',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      phone: 2222,
      password: 'test2',
      name: 'Анна',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      phone: 9999,
      password: 'test9',
      name: 'Admin',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
