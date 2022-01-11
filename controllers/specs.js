const Keyboard = require('../models/keyboards');

module.exports = {
	create 
}

function create(req, res){
	// Creating a review inside of a movie
	// 1 movie ID It's going req.params.id
	console.log(req.params.id, " req.params.id")
	console.log(req.body, " req.body aka the contents of the form")

	// Trying to add a review to a Movie
	// To find the movie first!
	Keyboard.findById(req.params.id, function(err, keyboardDocument){

		// Then we need to add the review to the movie.reviews array
		keyboardDocument.specs.push(req.body);
		// The above is mutating a document
		// The Database (mongodb) doesn't know we mutated
		// the document
		console.log(keyboardDocument, " <- this is MovieDocument, in create reviews CTRL")
		// So have to .save() the document in order to update mongodb
		keyboardDocument.save(function(err){
			// redirect the user back to the show page

			// res.redirect(`/movies/${movieDocument._id}`)
            res.redirect(`/${keyboardDocument._id}/keyboards`);

        // keyboardDocument.save(function (err) {
        console.log("Controllers/Keyboards, create function")
        console.log(req.body, "<---req.body")
        console.log(req.params, " < -req.params in the create function")
        console.log(keyboardDocument, "<----keyboard document")
        res.redirect(`/${keyboardDocument._id}/keyboards`);
		})
	})
    // })
}