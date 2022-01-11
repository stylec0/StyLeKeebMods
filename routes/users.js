var router = require('express'). Router();
var usersCtrl = require('../controllers/users');
const keyboardsCtrl = require('../controllers/keyboards');

// all usersCtrl routes
router.get('/users', usersCtrl.index);
router.post('/', isLoggedIn, usersCtrl.create);

// Authorizing the user to use a route
// probably only want to use this on post, put or delete routes
function isLoggedIn(req, res, next) {
	// req.isAuthenticated() this is given to us by passport
	// it returns true or false
	if ( req.isAuthenticated() ) return next();
	res.redirect('/auth/google'); // redirect them to login
}

module.exports = router;