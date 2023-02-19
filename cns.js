function encryptMessage() {
    var message = document.getElementById("message").value;
    var shift = parseInt(document.getElementById("shift").value);
    var encryptedMessage = "";
    for (var i = 0; i < message.length; i++) {
      var char = message.charCodeAt(i);
      if (char >= 65 && char <= 90) {
        encryptedMessage += String.fromCharCode((char - 65 + shift) % 26 + 65);
      } else if (char >= 97 && char <= 122) {
        encryptedMessage += String.fromCharCode((char - 97 + shift) % 26 + 97);
      } else {
        encryptedMessage += message.charAt(i);
      }
    }
    document.getElementById("encryptedMessage").innerHTML = encryptedMessage;
  }