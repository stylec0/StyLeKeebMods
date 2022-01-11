var router = require('express').Router();
const keyboardsCtrl = require('../controllers/keyboards');

// keyboardCtrl routes
router.get('/:id/keyboards', keyboardsCtrl.index)
router.get('/:id/new', keyboardsCtrl.new)
router.get('/:id', keyboardsCtrl.show);
router.post('/:id/keyboards', keyboardsCtrl.create)
router.get('/:id/keyboards/new', keyboardsCtrl.new) // <--function new Keyboard in keyboard controllers


module.exports = router;

