'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Reviews', [
      {
        title: 'Спасибо огромное!',
        text: 'Крашусь много лет, но такой невероятный результат получаю впервые!!',
        rating: 5,
        top_review: true,
        branch_id: 1,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        title: 'Очень хорошо',
        text: 'Постоянно стригусь у мастера Ольги. Мне очень нравится, как она работает. Каждый раз, после очередной стрижки, я выгляжу по-новому и все говорят, что я помолодела. С ней и общаться одно удовольствие!',
        rating: 5,
        top_review: true,
        branch_id: 1,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Просто класс',
        text: 'Делала стрижку в салоне , огромное спасибо мастеру Александру, волос у меня кудрявый, не простой, теперь укладываются отлично. Много полезных рекомендаций, я очень довольна!',
        rating: 5,
        top_review: true,
        branch_id: 1,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        title: 'Хорошо',
        text: 'Дружелюбная атмосфера, красивый салон',
        rating: 4,
        top_review: false,
        branch_id: 1,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        title: 'Хорошо',
        text: 'Все хорошо',
        rating: 4,
        top_review: false,
        branch_id: 1,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
