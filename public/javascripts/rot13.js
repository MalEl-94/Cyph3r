/*
function checks character code of each letter in message and adds 13 to it.Will loop after 26.
 Lowercase only
*/

function encode(message) {

    return message.replace(/[a-zA-Z]/g, function (c) {
      return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
  }


/*
function checks if the encode/decode buttons are checked
   if checked, it passes input to the encode function to be processed
   and displays the output in the output textbox
*/
  function update()
   {
    if(document.getElementById("encode_btn").checked|| document.getElementById("decode_btn").checked){
    document.getElementById("output").value = encode(document.getElementById("input").value);
  }
  else {
    alert ("Please select whether to encode or decode your message!");
  }

  }


  function clear(){
    document.getElementById("output").value = "";
    document.getElementById("input").value = "";
    }

exports.encode = encode;
