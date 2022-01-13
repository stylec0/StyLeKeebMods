const Keyboard = require('../models/keyboard'); 

module.exports = {
	create,
    delete: deleteComment,
};

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
            console.log(keyboardDocument.comments._id, "<--this is the comments id")
            res.redirect(`/${keyboardDocument._id}/keyboards/details`)
		})
    })
}

function deleteComment (req, res) {
    console.log("Controller/commments, Delete function")
    console.log(req.params.id)
    Keyboard.deleteOne(req.params.id);
    // Keyboard.findByIdAndRemove(req.params.id, function(err) {
        res.redirect(`/${keyboardDocument._id}/keyboards/details`)
    }  

    // function deleteComment (req, res){
    //     console.log("Controllers/comments, Delete function")
    //     console.log(req.params.id, " req.params.id")
    //     console.log(req.body, " req.body aka the contents of the form")
    
    //     Keyboard.findById(req.params.id, function(err, keyboardDocument){
    //         // req.body.userId = req.user._id;
    //         // req.body.userName = req.user.name;
            
    //         keyboardDocument.comments.pop(req.body);
            
    //         console.log(keyboardDocument, " <- this is KeyboardDocument, in create comments CTRL")
            
    //         // So have to .save() the document in order to update mongodb
    //         keyboardDocument.save(function(err){
    //             // redirect the user back to the show page
    //             // res.redirect(`/keyboards/${keyboardDocument._id}`)
    //             console.log(keyboardDocument.comments._id, "<--this is the comments id")
    //             res.redirect(`/${keyboardDocument._id}/keyboards/details`)
    //         })
    //     })
    // }



// function deleteComment(req, res) {
//     // Note the cool "dot" syntax to query on the property of a subdoc
//     Keyboard.findOne(
//       {'comments._id': req.params.id, 'comments.userId': req.user._id},
//       function(err, keyboard) {
//         if (!keyboard || err) return res.redirect(`/keyboards/${keyboard._id}`);
//         // Remove the subdoc (https://mongoosejs.com/docs/subdocs.html)
//         keyboard.comments.remove(req.params.id);
//         // Save the updated book
//         keyboard.save(function(err) {
//           // Redirect back to the book's show view
//           res.redirect(`/keyboards/${keyboard._id}`);
//         });
//       }
//     );
//   }


