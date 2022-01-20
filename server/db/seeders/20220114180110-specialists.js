'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Specialists', [
      {
      name: 'Абакарова Ольга',
      description: 'Парикмахер',
      photo: '/specialists/spec1.jpg',
      branch_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Арустамян Анна',
      description: 'Парикмахер',
      photo: '/specialists/spec2.jpg',
      branch_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Вампилова светлана',
      description: 'Парикмахер',
      photo: '/specialists/spec3.jpg',
      branch_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Геращенко Любовь',
      description: 'Парикмахер',
      photo: '/specialists/spec4.jpg',
      branch_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Григорьева Екатерина',
      description: 'Парикмахер',
      photo: '/specialists/spec5.jpg',
      branch_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Нарыжная Татьяна',
      description: 'Парикмахер',
      photo: '/specialists/spec6.jpeg',
      branch_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Нежевенко Ольга',
      description: 'Парикмахер',
      photo: '/specialists/spec7.jpg',
      branch_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Печуро Людмила',
      description: 'Парикмахер',
      photo: '/specialists/spec8.jpg',
      branch_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Ушакова Анна',
      description: 'Парикмахер',
      photo: '/specialists/spec9.jpg',
      branch_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Specialists', null, {});

  }
};
