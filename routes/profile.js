var express = require('express');
var router = express.Router();
var fs = require('fs');
var index = require('./index');


var isLoggedIn = false;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profile', { title: 'profile' });

  var filepath = "./github/malik_ahad_set008101_coursework2/db/";
  var user =JSON.parse(fs.readFileSync(filepath+username));
  var messages = user.messages;

  document.getElementById('inbox').value = messages;

});



module.exports = router;
