
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
// const copyPassword = function(){
//     /* Get the text field */
//     var copyText = document.getElementById("passwd");
// 
//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /* For mobile devices */
// 
//     /* Copy the text inside the text field */
//     navigator.clipboard.writeText(copyText.value);
// 
//     /* Alert the copied text */
//     alert("Copied the text: " + copyText.value);
// };

// document.getElementById("copy").addEventListener('click', copyPassword);