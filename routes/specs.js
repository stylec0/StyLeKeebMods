var router = require('express').Router();
const specsCtrl = require('../controllers/keyboardspecs');

router.post('/:id/keyboard/specs', specsCtrl .create)