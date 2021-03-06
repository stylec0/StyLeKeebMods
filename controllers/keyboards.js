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
	Keyboard.create(req.body, function(err, keyboardDocument){ 
		console.log("Controller/Keyboards, create function")
        console.log(keyboardDocument, " <---keyboard Document>");
		res.redirect(`/keyboards/${req.user._id}`); 
	})
}

function newKeyboard (req, res) {
    console.log("Controller/Keyboards, newKeyboard function")
    res.render ('keyboards/new',);
}

function deleteKeyboard(req, res) {
    Keyboard.findOneAndDelete(
      {_id: req.params.id, user: req.user._id}, function(err) {
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

function edit(req,res) {
    console.log(req.params.id, "<---Controller/Keyboards, edit function",)
    Keyboard.findById(req.params.id, function(err, keyboardDocument){
        console.log(keyboardDocument, "<---this is KeyboardDocument in Edit")
        res.render('keyboards/details', {
             title: 'Test function show', 
             keyboards: keyboardDocument });
    })
}