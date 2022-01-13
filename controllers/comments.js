const Comment = require('../models/comment');
const Keyboard = require('../models/keyboard'); 

module.exports = {
	create 
}

function create(req, res){
    console.log("Controllers/comments, Create function")
	

	console.log(req.params.id, " req.params.id")
	console.log(req.body, " req.body aka the contents of the form")

	

	Keyboard.findById(req.params.id, function(err, keyboardDocument){
        // req.body.userId = req.user._id;
        // req.body.userName = req.user.name;
		
		keyboardDocument.comments.push(req.body);
		
		console.log(keyboardDocument, " <- this is KeyboardDocument, in create comments CTRL")
		// So have to .save() the document in order to update mongodb
		keyboardDocument.save(function(err){
			// redirect the user back to the show page

			// res.redirect(`/keyboards/${keyboardDocument._id}`)
            res.redirect(`/${keyboardDocument._id}/keyboards/details`)
		})
	
	})
}