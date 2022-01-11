const User = require('../models/user');

module.exports = {
    index,
    // show,
    create,
    // new: newKeyboard
};

// function show(req,res) {
//     console.log(req.params, " < -req.params in the show route")
//         res.render('users/keyboards');
//     }


function create(req, res) {
    User.create(req.body, function(err, userDoc) {
        res.redirect('/users');
    })
}

function index(req, res, next ) {
    console.log("Controllers/Users, index function")
    console.log(req.user, '<--- This is the req.user')
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
//     Passing search values, name & sortKey, for use in the EJS
    res.render ('users/index', {
      users,
      user: req.user,
      name: req.query.name,
      sortKey
    });
});
}

// function newKeyboard(req, res) {
//     console.log("newkeyboard function")
//     res.render('users/keyboard');
// }