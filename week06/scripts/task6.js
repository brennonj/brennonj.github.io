
// Generate Password
const generatePasswd = function(){
    password = "";
    // Get Password Length
    let passwdLen = parseInt(document.getElementById("length").value);
    // Get if Special Characters
    let containSpecial = document.getElementById("special").checked;
    // Get if Numbers
    let containsNum = document.getElementById("numbers").checked;
    // Get if Capital Letters
    let containsCap = document.getElementById("capitals").checked;

    chars = "abcdefghijklmnopqrstuvwxyz";
    capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numbers = "0123456789";
    special = "!@#$%^&*()";

    if (containSpecial) {
        console.log("Adding Special")
        chars += special
    };

    if (containsCap) {
        console.log("Adding Capitals")
        chars += capitals
    }

    if (containsNum) {
        console.log("Adding Numbers")
        chars += numbers
    }

    for (var i = 0; i <= passwdLen; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }

    // Display Password
    document.getElementById("passwd").value = password;
};

document.getElementById("generate").addEventListener('click', generatePasswd);


// Copy Password to Clipboard
const copyPassword = function(){
    let passwdText = document.getElementById("passwd").value;
};

document.getElementById("copy").addEventListener('click', copyPassword);