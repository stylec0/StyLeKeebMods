var express = require('express');
var router = express.Router();
const keyboardsCtrl = require('../controllers/keyboards')

router.get('/', keyboardsCtrl.index); // <---My keyboards NAV BUtton
router.get('/new', keyboardsCtrl.new); ///<---create keyboard button
router.get('/:id', keyboardsCtrl.show);
router.post('/', keyboardsCtrl.create); /// <---add keyboard button in create
router.get('/:id/details', keyboardsCtrl.edit); // <--Edit button function
router.delete('/:id', keyboardsCtrl.delete);
router.get('/:id/edit', keyboardsCtrl.editForm);
router.put('/:id', keyboardsCtrl.update);

module.exports = router;
