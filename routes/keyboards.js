var express = require('express');
var router = express.Router();
const keyboardsCtrl = require('../controllers/keyboards')

/* GET users listing. */

router.get('/', keyboardsCtrl.index);
router.get('/new', keyboardsCtrl.new);
router.get('/:id', keyboardsCtrl.show);
router.post('/', keyboardsCtrl.create)

module.exports = router;
