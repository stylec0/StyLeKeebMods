const Keyboard = require('../models/keyboard');
const Switch = require('../models/switch'); 

module.exports = {
	create,
    index,
}

function index(req, res) {
    console.log("Controller/Switches, Index Function")
    res.render('keyboards/switches')
}

// function create(req, res) {
   
//     Keyboard.findById(req.params.id, function (err, keyboardDocument) {
//       req.body.keyboard = keyboardDocument._id
//     Switch.create(req.body, function (err, switch) {
      
//     console.log("ticket function is working")
//         res.redirect(`/${keyboardDocument._id}/keyboards`); 
//     })
// })