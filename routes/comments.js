const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');



router.post('/keyboards/:id/details', commentsCtrl.create);
router.delete('/details/:id', commentsCtrl.delete);


 
module.exports = router;
