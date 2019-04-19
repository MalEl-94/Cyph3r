var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register' });
});


router.post('/', function(req, res, next) {


  var name =  req.body.firstname;
  var username = req.body.username;
  var password = req.body.psw;
  var messages=[];

  var user =
      {
      username: username,
      name: name,
      password: password,
      messages: messages
      }

  var stringUser = JSON.stringify(user);
  var filepath = "./github/malik_ahad_set008101_coursework2/db/"+username;

  fs.writeFile(filepath,stringUser,'utf8',function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("File saved successfully!");
      res.redirect('/');
      alert("User Registered!");

  });

});

module.exports = router;
