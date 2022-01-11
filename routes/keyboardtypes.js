var router = require('express').Router();
const keyboardTypesCtrl = require('../controllers/keyboardtypes');

router.post('/:id/keyboards', keyboardTypesCtrl.create)