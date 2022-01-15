'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Specialists', [
      {
      name: 'специалист1',
      description: 'хороший специалист',
      photo: '/specialists/spec1.jpg',
      branch_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'специалист2',
      description: 'хороший специалист',
      photo: '/specialists/spec2.jpg',
      branch_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'специалист3',
      description: 'хороший специалист',
      photo: '/specialists/spec3.jpeg',
      branch_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'специалист4',
      description: 'хороший специалист',
      photo: '/specialists/spec4.jpeg',
      branch_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Specialists', null, {});

  }
};
