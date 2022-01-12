var router = require('express').Router();
const passport = require('passport');

//session middleware

// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/users');
  console.log("You are being redirected")
  // Where do you want to go for the root route
  // in the student demo this was res.redirect('/students'), what do you want?
  // This could be a landing page, or just redirect to your main resource page which you'll have an a tag that makes 
  // a request to `/auth/google` route below
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate( // The route the client makes a request to, to login, in this case the login with Google a tag, in the index.ejs
  'google',
  { scope: ['profile', 'email'] } // our app redirects the user to the google login page, step 2 in the oauth flow diagram
  // In the lesson Oauth Vocabulary, scope, 
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/', // where do you want the client to go after you login 
    failureRedirect : '/' // where do you want the client to go if login fails
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  // the client can make a request <a href="/logout">logout</a> in your ejs anywhere
  req.logout(); // passport attaches this .logout() function to the request object that we can call at it destroys session cookie, connect.sid
  res.redirect('/');
});

module.exports = router;
