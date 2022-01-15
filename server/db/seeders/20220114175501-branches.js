'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Branches', [
      {
      name: 'Castantino',
      address: 'Санкт-Петербург, Кирочная 19',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Castantino2',
      address: 'Москва, Орджоникидзе д11 стр10',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Branches', null, {});

  }
};
