var express = require('express');
var router = express.Router();
var index = require('./index');
var fs = require('fs');
var rot13 = require('./rot13');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('messenger', { title: 'Messenger' });

  if(isLoggedIn === false)
  {
    document.getElementById('logoutOption').style.display = "none";
    document.getElementById('signupOption').style.display = "none";
    document.getElementById('messengerOption').style.display = "none";
  }
  else if (isLoggedIn === true) {

    document.getElementById('login_form').style.display = "none";

  }


});


router.post('/', function(req, res, next) {


        var recipientUsername = req.body.rec_username;
        var msg = req.body.message;
        var cipher = req.body.chooseCipher;

        //retrieve user from db
        var filepath = "./github/malik_ahad_set008101_coursework2/db/"+recipientUsername;
        var recipient = JSON.parse(fs.readFileSync(filepath));


        console.log("recipient username is : "+recipient.username);

        if(cipher === "raw"){
            recipient.messages.push(username +": "+ msg + "<br>");
        }
        else if(cipher === "rot13"){
            var encodedMsg = msg.replace(/[a-zA-Z]/g, function (c) {
                return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
              });
            console.log(encodedMsg);
            recipient.messages.push(sender +": "+ encodedMsg + " ("+cipher +")" +"<br>");
        }

        // updated recipient
        var reciepientUpdated = JSON.stringify(recipient);
        fs.writeFileSync(filepath, reciepientUpdated, "UTF-8",{'flags': 'w'});
        
        res.redirect('/profile');
        console.log("Message sent!");
    });



module.exports = router;
