// Created Arrays containing 
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = [0, 1, 2, 3, 4, 5, 6, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "("];
var emoji = ["😊","👍","🙌","😍","😒","❤","🤣","💕"];

// User
var passwordLength = "";
var isLower = false;
var isUpper = false;
var isNum = false;
var isSpec = false;
var isEmoji = false;
var passInclude = [];


// 
function passLengthConfirm(){
    passwordLength = parseInt(prompt("How long do you want your password to be? (8-128 characters)"));
    // Debug check to see what user input is interpretted as.
    console.log(`Parsed entered password length is: $ {passwordLength} .`);

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        // If they enter strings, strange characters, or numbers out of the range, code won't proceed and alert asks user to try again.
       alert("Invalid character count. Try again please.")
   } 
   else {
   confirmation();
   generation();
}

// Function for confirming what types of characters the user wants
function confirmation(){  
    // Resets passInclude's array in case users want a different customized password.
    passInclude = [];
    isLower = confirm("Do you want lowercase letters?");
    isUpper = confirm("Do you want uppercase letters?");
    isNum = confirm("Do you want numbers?");
    isSpec = confirm("Do you want special characters?");
    isEmoji = confirm("Do you want emojis?");
    if (isLower) {passInclude.push(lowerChar);}
    if (isUpper) {passInclude.push(upperChar);}
    if (isNum) {passInclude.push(numChar);}
    if (isSpec) {passInclude.push(specialChar);}
    if (isEmoji) {passInclude.push(emoji);}
}

//Function for actually generating the password
function generation(){
    for (let i = 0; i < passwordLength; i++) {
        
    }
}

}

// What happens when you click the button
document.querySelector("#generate-password-button").addEventListener("click", function(event) {
    event.preventDefault(); 
    passLengthConfirm();
});





