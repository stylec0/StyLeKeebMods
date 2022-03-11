var express = require('express');
var router = express.Router();
const keyboardsCtrl = require('../controllers/keyboards')

router.get('/', keyboardsCtrl.index); 
router.get('/new', keyboardsCtrl.new); 
router.get('/:id', keyboardsCtrl.show);
router.post('/', keyboardsCtrl.create); 
router.get('/:id/details', keyboardsCtrl.edit);
router.delete('/:id', keyboardsCtrl.delete);
router.get('/:id/edit', keyboardsCtrl.editForm);
router.put('/:id', keyboardsCtrl.update);

module.exports = router;
