const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');


// router.post('/keyboards/:id/comments', commentsCtrl.create);
router.post('/:id/keyboards/details', commentsCtrl.create);
router.delete('/details/:id', commentsCtrl.delete);
// router.delete('/:id/keyboards/details', commentsCtrl.delete);

 
module.exports = router;

// const express = require('express');
// const router = express.Router();
// const commentsCtrl = require('../controllers/switches');
 
// router.get('/:id/keyboards/switches', switchesCtrl.index);
// router.post('/:id/keyboard/switches', switchesCtrl.create);
 
// module.exports = router;