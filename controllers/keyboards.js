const Keyboard = require('../models/keyboard'); 


module.exports = {
    index,
    // create,
    // new: newKeyboard,
    show,
  };

  function index (req, res) {
    console.log("Controllers/Keyboards, index function")
    console.log(req.params, " < -req.params in the index route")
    // Keyboard.find({}, function(err, keyboardDocuments) {
        res.render('/keyboards/index')
            // title: 'Keyboards',
            // keyboards: keyboardDocuments
        // })
    // })
  }
  

function show (req, res) {
    console.log(" < Controller/keyboards, show function")
    console.log(req.params, " < -req.params in the show route")

    Keyboard.findById(req.params.id, function(err, keyboardDocument){
        res.render('keyboards/show'), {}
            //  title: 'Test function show', 
            //  keyboards: keyboardDocument });
            // Users: keyboardDocuments,
        console.log(keyboardDocument, "<---Keyboard Document")
          
        })
}

// function create (req, res) {
   
// 	Keyboard.create(req.body, function(err, keyboardDocument){ // response from the database
// 		console.log("Controller/Keyboards, create function")
//         console.log(keyboardDocument, " <---keyboard Document>");

// 		// after the db responds
// 		//then we respond to the client (aka the browser)
// 		res.redirect(`/${keyboardDocument._id}/keyboards`); // < tells the client make a get request to '/movies'
// 	})
// }



// function newKeyboard (req, res) {
//     console.log("Controller/Keyboards, newKeyboard function")
//     res.render ('keyboards/new',);
// }
