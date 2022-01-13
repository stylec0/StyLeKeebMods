const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');



router.post('/:id/keyboards/details', commentsCtrl.create);
router.delete('/:id/keyboards/:commentsid/details', commentsCtrl.delete);


 
module.exports = router;
