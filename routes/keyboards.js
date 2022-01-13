var express = require('express');
var router = express.Router();
const keyboardsCtrl = require('../controllers/keyboards')
const commentsCtrl = require('../controllers/comments');

/* GET users listing. */

// router.get('/', keyboardsCtrl.index);
// router.get('/new', keyboardsCtrl.new);
router.get('/:id', keyboardsCtrl.show);
router.get('/:id/keyboards/details', keyboardsCtrl.edit); // <--Edit button function
router.get('/:id/keyboards/new', keyboardsCtrl.new); ///<---create keyboard button
router.get('/:id/keyboards/', keyboardsCtrl.index); // <---My keyboards NAV BUtton
router.post('/:id/keyboards', keyboardsCtrl.create); /// <---add keyboard button in create
router.post('/:id/keyboards/details', commentsCtrl.create);

module.exports = router;
