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
      name: 'Вампилова Светлана',
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
      name: 'Илья Коновалов',
      description: 'Парикмахер',
      photo: '/specialists/spec7.jpg',
      branch_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Артем Денисов',
      description: 'Парикмахер',
      photo: '/specialists/spec8.jpg',
      branch_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Александр Денисов',
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
