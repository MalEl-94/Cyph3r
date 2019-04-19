
function userViews()
{
if (isLoggedIn === false) {


            document.getElementById('logoutOption').style.display = "none";
            document.getElementById('messengerOption').style.display = "none";

}

else {

  document.getElementById('login_form').style.display = "none";

}

  }




function inbox()

{

  var filepath = "./github/malik_ahad_set008101_coursework2/db/";
  var user =JSON.parse(fs.readFileSync(filepath+username));
  var messages = user.messages;

  document.getElementById('inbox').value = "wadddddup";

}
