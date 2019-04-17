
function encode(message, key) {

	var output = "";

	for (var i = 0, j = 0; i < message.length; i++) {

		var c = input.charCodeAt(i);

			output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
			j++;
	}
	return output;
}


function update()
 {
   if (document.getElementById("key").value.length == 0) {
		alert("Key is empty!");
	}
    else if(document.getElementById("encode_btn").checked|| document.getElementById("decode_btn").checked){
  document.getElementById("output").value = encode(document.getElementById("input").value,document.getElementById("key").value);
}
else {
  alert ("Please select whether to encode or decode your message!");
}

}
