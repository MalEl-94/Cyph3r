

/*

function loops through input(message) while another loop runs inside that loop trying to match input to letters
in the letters array, if a match is found the index of the character in that array is used to find the equivalent
of the letter in the morseLetters array. The output is then assigned to a string(var result)

*/

function encode(message)
{
    var letters = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];

    var morseLetters = [ "\xa0\xa0\xa0\xa0", ". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .",
    "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___",
    ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___" ];

    var result = "";

    for (var i = 0; i < message.length; i++) {

        for (var j = 0; j < 37; j++) {
            if (message[i].toLowerCase() == letters[j]) {
                result += morseLetters[j];
                result += "\xa0\xa0\xa0";
                break;
            }
        }
    }
    return result;

  }


    function decode(message)

    {
        var letters = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];

        var morseLetters = [ "\xa0\xa0\xa0\xa0", ". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .",
        "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___",
        ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___" ];

        var result = "";

        for (var i = 0; i < message.length; i++) {

            for (var j = 0; j < 37; j++) {
                if (message[i] == morseletters[j]) {
                    result += letters[j];
                    break;
                }
            }
        }

return result;
}

/*
function checks if the encode/decode buttons are checked
   if checked, it passes input to the encode function to be processed
   and displays the output in the output textbox
*/
function update() {

    if(document.getElementById("encode_btn").checked){
    document.getElementById("output").value = encode(document.getElementById("input").value);
  }
    else if(document.getElementById("decode_btn").checked){
    document.getElementById("output").value = decode(document.getElementById("input").value);
  }else{
      alert ("Please select whether to encode or decode your message!");
  }
}
