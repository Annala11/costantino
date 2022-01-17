const router = require('express').Router(); //TODO

const { getSpecialists } = require('../controllers/specialists.controller');

router.get('/', getSpecialists);

module.exports = router;
