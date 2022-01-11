const Keyboard = require('../models/keyboard'); 

module.exports = {
    index,
    create,
    new: newKeyboard,
    show,
  };

  function index (req, res) {
    console.log("Controllers/Keyboards, index function")
    console.log(req.params, " < -req.params in the index route")
    Keyboard.find({}, function(err, keyboardDocuments) {
        res.render('users/keyboards')
    })
};  

function show (req, res) {

    console.log(req.params, " < -req.params in the show route")

    // Keyboard.findById(req.params.id, function(err, keyboardDocument){
    //     res.render('users/keyboards', { title: 'Flight Details', keyboard: keyboardDocument });
    //         // Users: keyboardDocuments,
          
    //     })
}

function create (req, res) {
   
	Keyboard.create(req.body, function(err, keyboardDocument){ // response from the database
		console.log(keyboardDocument, " <---keyboard Document>");

		// after the db responds
		//then we respond to the client (aka the browser)
		res.redirect(`/${keyboardDocument._id}/keyboards`); // < tells the client make a get request to '/movies'
	})


    // Creating a review inside of a movie
	// 1 movie ID It's going req.params.id
	// console.log(req.params.id, " req.params.id")
	// console.log(req.body, " req.body aka the contents of the form")

	// // Trying to add a review to a Movie
	// // To find the movie first!
	// Keyboard.findById(req.params.id, function(err, keyboardDocument){

	// 	// Then we need to add the review to the movie.reviews array
	// 	keyboardDocument.keyboards.push(req.body);
	// 	// The above is mutating a document
	// 	// The Database (mongodb) doesn't know we mutated
	// 	// the document
	// 	console.log(keyboardDocument, " <- this is MovieDocument, in create reviews CTRL")
	// 	// So have to .save() the document in order to update mongodb
	// 	keyboardDocument.save(function(err){
	// 		// redirect the user back to the show page

	// 		// res.redirect(`/movies/${movieDocument._id}`)
    //         res.redirect(`/${keyboardDocument._id}/keyboards`);

        // keyboardDocument.save(function (err) {
        // console.log("Controllers/Keyboards, create function")
        // console.log(req.body, "<---req.body")
        // console.log(req.params, " < -req.params in the create function")
        // console.log(keyboardDocument, "<----keyboard document")
        // res.redirect(`/${keyboardDocument._id}/keyboards`);
    // })
    // })
}



function newKeyboard (req, res) {
    console.log("Controller/Keyboards, newKeyboard function")
    res.render ('keyboards/new',);
}