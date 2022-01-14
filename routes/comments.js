const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');



router.post('/keyboards/:id/comments', commentsCtrl.create);
router.delete('/comments/:id', commentsCtrl.delete);
router.get('/comments/:id/edit', commentsCtrl.edit);


 
module.exports = router;
