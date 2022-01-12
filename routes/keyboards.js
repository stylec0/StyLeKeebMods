var router = require('express').Router();
const keyboardsCtrl = require('../controllers/keyboards');
const switchesCtrl = require('../controllers/switches');

// keyboardCtrl routes
router.get('/:id/keyboards', keyboardsCtrl.index)
router.get('/:id/keyboards/show', keyboardsCtrl.show)
router.post('/:id/keyboards', keyboardsCtrl.create)
router.get('/:id/keyboards/new', keyboardsCtrl.new) // <--function new Keyboard in keyboard controllers
router.get('/:id/keyboards/switches', switchesCtrl.index)
router.post('/:id/keyboards/switches', switchesCtrl.create)

module.exports = router;

