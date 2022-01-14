var express = require('express');
var router = express.Router();
const keyboardsCtrl = require('../controllers/keyboards')
const commentsCtrl = require('../controllers/comments');

/* GET users listing. */

// router.get('/', keyboardsCtrl.index);
// router.get('/new', keyboardsCtrl.new);
router.get('/', keyboardsCtrl.index); // <---My keyboards NAV BUtton
router.get('/new', keyboardsCtrl.new); ///<---create keyboard button
router.get('/:id', keyboardsCtrl.show);
router.post('/', keyboardsCtrl.create); /// <---add keyboard button in create
router.get('/:id/details', keyboardsCtrl.edit); // <--Edit button function
router.delete('/:id', keyboardsCtrl.delete);
router.get('/:id/edit', keyboardsCtrl.editForm);
router.put('/:id', keyboardsCtrl.update);


// router.post('/:id/keyboards/details', commentsCtrl.create); //<-- add comment button


module.exports = router;

// router.get('/:id', keyboardsCtrl.show);
// router.get('/keyboards/:id/details', keyboardsCtrl.edit); // <--Edit button function
// router.get('/keyboards/:id/new', keyboardsCtrl.new); ///<---create keyboard button
// router.get('/keyboards/:id', keyboardsCtrl.index); // <---My keyboards NAV BUtton
// router.post('/keyboards/:id', keyboardsCtrl.create); /// <---add keyboard button in create


