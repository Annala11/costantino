'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('SpecialistCategories', [
      {
      specialist_id: 1,
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 1,
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 1,
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 2,
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 2,
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 1,
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 3,
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 3,
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 4,
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 4,
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 5,
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 5,
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 6,
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 7,
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 7,
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 8,
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 8,
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      specialist_id: 9,
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('SpecialistCategories', null, {});

  }
};
