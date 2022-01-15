'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Services', [
      {
        name: 'Короткие волосы (до 10см)',
        description: null,
        price: 750,
        interval: 2,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Короткие волосы (до 25см)',
        description: null,
        price: 990,
        interval: 2,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Короткие волосы (от 25см)',
        description: null,
        price: 1290,
        interval: 2,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Полировка волос средние/длинные волосы',
        description: null,
        price: 1390,
        interval: 2,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Полировка волос очень длинные волосы',
        description: null,
        price: 1490,
        interval: 3,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Подравнивание челки',
        description: null,
        price: 250,
        interval: 1,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Зигзаги, полоски, выбривание',
        description: null,
        price: 200,
        interval: 1,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Подравнивание кончиков волос',
        description: null,
        price: 600,
        interval: 2,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Мытье и сушка на короткие волосы',
        description: null,
        price: 450,
        interval: 1,
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Мытье и сушка на средние или длинные волосы',
        description: null,
        price: 650,
        interval: 1,
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Укладка на короткие волосы',
        description: null,
        price: 850,
        interval: 1,
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Укладка на средние или длинные волосы/очень длинные',
        description: null,
        price: 1500,
        interval: 2,
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Плетение',
        description: null,
        price: 400,
        interval: 1,
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Прическа от топ-мастера',
        description: null,
        price: 3000,
        interval: 3,
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Окрашивание корней Estel Deluxe',
        description: null,
        price: 2500,
        interval: 6,
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Окрашивание волос Estel Deluxe (1 тон)',
        description: null,
        price: 2000,
        interval: 6,
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Estel осветление корней (до 2 см) на короткие/средние волосы',
        description: null,
        price: 1500,
        interval: 2,
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Окрашивание волос Estel Deluxe (1 тон)',
        description: null,
        price: 2000,
        interval: 4,
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Estel тонирование (1 тон) на средние волосы',
        description: null,
        price: 1700,
        interval: 4,
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Протопак на средние волосы',
        description: null,
        price: 1200,
        interval: 2,
        category_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Кератиновое выпрямление на средние волосы',
        description: null,
        price: 3500,
        interval: 3,
        category_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Ботокс на средние волосы',
        description: null,
        price: 4000,
        interval: 3,
        category_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Биоботокс на средние волосы',
        description: null,
        price: 2400,
        interval: 3,
        category_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Ребонд на средние волосы',
        description: null,
        price: 750,
        interval: 2,
        category_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Модельная/теннис стрижка',
        description: null,
        price: 720,
        interval: 1,
        category_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Бокс/полубокс/спортивная/окантовка с переходом/стрижка шейвером',
        description: null,
        price: 690,
        interval: 1,
        category_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Креативная стрижка',
        description: null,
        price: 990,
        interval: 2,
        category_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Мытье и укладка волос',
        description: null,
        price: 450,
        interval: 1,
        category_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Наголо',
        description: null,
        price: 400,
        interval: 1,
        category_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Оформление усов',
        description: null,
        price: 300,
        interval: 1,
        category_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Оформление бороды',
        description: null,
        price: 450,
        interval: 1,
        category_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Зигзаги/полоски/выбривание',
        description: null,
        price: 300,
        interval: 1,
        category_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Массаж головы с Карбон Турбо',
        description: null,
        price: 250,
        interval: 1,
        category_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Estel камуфляж седины Альфа Ом',
        description: null,
        price: 900,
        interval: 1,
        category_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Спортивная стрижка (дет.)',
        description: null,
        price: 350,
        interval: 1,
        category_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Модельная стрижка (дет.)',
        description: null,
        price: 450,
        interval: 1,
        category_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Креативная стрижка (дет.)',
        description: null,
        price: 650,
        interval: 1,
        category_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Оформление/подравнивание челки (дет.)',
        description: null,
        price: 250,
        interval: 1,
        category_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Плетение',
        description: null,
        price: 400,
        interval: 1,
        category_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Прическа',
        description: null,
        price: 890,
        interval: 2,
        category_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Художественный выстриг',
        description: null,
        price: 800,
        interval: 2,
        category_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Зигзаги/полоски/выбривание (дет.)',
        description: null,
        price: 250,
        interval: 1,
        category_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Services', null, {});

  }
};
