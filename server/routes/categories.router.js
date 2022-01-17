const router = require('express').Router(); //TODO

const { getCategories } = require('../controllers/category.controller');

router.get('/', getCategories);

module.exports = router;
