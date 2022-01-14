const Keyboard = require('../models/keyboard'); 


module.exports = {
    index,
    create,
    new: newKeyboard,
    show,
    edit,
    editForm,
    update,
    delete: deleteKeyboard,
  };

  function index (req, res) {
    console.log("Controllers/Keyboards, index function")
    console.log(req.params, " < -req.params in the index route")
    Keyboard.find({}, function(err, keyboardDocuments) {
        console.log(keyboardDocuments)
        res.render('keyboards/index', {
            title: 'Keyboards',
            keyboards: keyboardDocuments
        })
        
    })
  }
  

  function show (req, res) {
    console.log(" <--Controller/keyboards, show function")
    console.log(req.params, " < -req.params in the show route")

    Keyboard.find({user: req.params.id}, function(err, keyboardDocument){
        console.log(keyboardDocument, "<---Keyboard Document")
        res.render('keyboards/show', {
             title: 'Keyboards', 
             keyboards: keyboardDocument });
       
          
        })
}

function create (req, res) {
   req.body.user = req.user._id
	Keyboard.create(req.body, function(err, keyboardDocument){ // response from the database
		console.log("Controller/Keyboards, create function")
        console.log(keyboardDocument, " <---keyboard Document>");

		// after the db responds
		//then we respond to the client (aka the browser)
		res.redirect(`/keyboards/${req.user._id}`); // < tells the client make a get request to '/movies'
	})
}



function newKeyboard (req, res) {
    console.log("Controller/Keyboards, newKeyboard function")
    res.render ('keyboards/new',);
}

// function edit(req,res) {
//     console.log("Controller/Keyboards, edit function",)
//     Keyboard.findById(req.params.id, function(err, keyboardDocument){
//         console.log(keyboardDocument, "<---this is KeyboardDocument")
//         res.render('keyboards/details', {
//              title: 'Test function show', 
//              keyboards: keyboardDocument });
//     })


// function deleteKeyboard(req, res) {
//     console.log("Controller/commments, Delete function")
//     console.log(req.params.id)
//     Keyboard.findById(req.params.id, function(err, keyboardDocument){
//         keyboardDocument.comments.pull(req.params.id);
//         keyboardDocument.save(function(err){
//             res.redirect(`/keyboards/${req.user._id}`)
//         })
//     })
// }

function deleteKeyboard(req, res) {
    Keyboard.findOneAndDelete(
      // Ensue that the book was created by the logged in user
      {_id: req.params.id, user: req.user._id}, function(err) {
        // Deleted book, so must redirect to index
        res.redirect(`/keyboards/${req.user._id}`);
      }
    );
  }

  function editForm(req, res) {
      console.log("This is the editForm Function")
    Keyboard.findOne({_id: req.params.id, user: req.user._id}, function(err, keyboard) {
      if (err || !keyboard) return res.redirect('/keyboards');
      res.render('keyboards/edit', {keyboard});
    });
  }

  function update(req, res) {
    Keyboard.findByIdAndUpdate(req.params.id, req.body, function(err, keyboard) {
        console.log("this is the function update")
        res.redirect(`/keyboards/${req.user._id}`);
    })
  }

//   function update(req, res) {
//     Keyboard.findOneAndUpdate(
//       {_id: req.params.id, user: req.user._id},
//       // update object with updated properties
//       req.body,
//       // options object with new: true to make sure updated doc is returned
//       {new: true},
//       function(err, keyboard) {
//         if (err || !keyboard) return res.redirect('/keyboards');
//         res.redirect(`/keyboards/${req.user._id}`);
//       }
//     );
//   }

// function index (req, res) {
//     console.log("Controllers/Keyboards, index function")
//     console.log(req.params, " < -req.params in the index route")
//     Keyboard.find({}, function(err, keyboardDocuments) {
//         res.render('keyboards/profile', {
//             title: 'Keyboards',
//             keyboards: keyboardDocuments
//         })
//         console.log(keyboardDocuments)
//     })
//   }
  

//   function show (req, res) {
//     console.log(" <--Controller/keyboards, show function")
//     console.log(req.params, " < -req.params in the show route")

//     Keyboard.findById(req.params.id, function(err, keyboardDocument){
//         res.render('keyboards/show', {
//              title: 'Test function show', 
//              keyboards: keyboardDocument });
//             // Users: keyboardDocuments,
//         console.log(keyboardDocument, "<---Keyboard Document")
          
//         })
// }

// function create (req, res) {
   
// 	Keyboard.create(req.body, function(err, keyboardDocument){ // response from the database
// 		console.log("Controller/Keyboards, create function")
//         console.log(keyboardDocument, " <---keyboard Document>");

// 		// after the db responds
// 		//then we respond to the client (aka the browser)
// 		res.redirect(`/keyboards/${keyboardDocument._id}`); // < tells the client make a get request to '/movies'
// 	})
// }



// function newKeyboard (req, res) {
//     console.log("Controller/Keyboards, newKeyboard function")
//     res.render ('keyboards/new',);
// }

function edit(req,res) {
    console.log("Controller/Keyboards, edit function",)
    Keyboard.findById(req.params.id, function(err, keyboardDocument){
        console.log(keyboardDocument, "<---this is KeyboardDocument")
        res.render('keyboards/details', {
             title: 'Test function show', 
             keyboards: keyboardDocument });
    })
}