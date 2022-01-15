'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Женский зал',
        description: '',
        parent_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Мужской зал',
        description: '',
        parent_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Детский зал',
        description: '',
        parent_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Стрижки',
        description: '',
        parent_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Укладка',
        description: '',
        parent_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Окрашивание волос',
        description: '',
        parent_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Восстановление волос',
        description: '',
        parent_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Стрижки',
        description: '',
        parent_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Дополнительные услуги',
        description: '',
        parent_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Стрижка',
        description: '',
        parent_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Дополнительные услуги',
        description: '',
        parent_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Categories', null, {});

  }
};
