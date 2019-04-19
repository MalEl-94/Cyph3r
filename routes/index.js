var express = require('express');
var router = express.Router();
var fs = require('fs');

global.username;
global.isLoggedIn = false;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });


});


router.post('/', function(req, res, next) {

  //assign variables
  username = req.body.username.toLowerCase();
  var password = req.body.psw;
  var filepath = "./github/malik_ahad_set008101_coursework2/db/";
  var logUser={
      username:username,
      password:password
  }

   // check if username exists in the db folder
      if(fs.existsSync(filepath+username)){

        // user that exists in the db with the username provided at login
           var existingUser =JSON.parse(fs.readFileSync(filepath+username));
           var existingUserObj = {
          username:existingUser.username,
          password: existingUser.password,
       }

       // if user id and password both match
          if(logUser.username === existingUserObj.username && logUser.password === existingUserObj.password){
            console.log("access granted");
            isLoggedIn = true;
            res.redirect('/profile')
             }
          else{
            res.redirect('/');
            alert ("Incorrect password");
            username = null;
           }
    }

  else
  {
      res.redirect("/");
      username = null;
  }

});


module.exports.router = router;
