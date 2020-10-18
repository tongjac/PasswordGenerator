// Created Arrays containing 
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = [0, 1, 2, 3, 4, 5, 6, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "("];
var emoji = ["😊","👍","🙌","😍","😒","❤","🤣","💕"];

// User-dependent input
var passwordLength = "";
var isLower = false;
var isUpper = false;
var isNum = false;
var isSpec = false;
var isEmoji = false;
var passInclude = [];
var password = "";
var checkAgain = true;


// 
function passLengthConfirm(){
    passwordLength = parseInt(prompt("How long do you want your password to be? (8-128 characters)"));
    // Debug check to see what user input is interpretted as.
    console.log(`Parsed entered password length is: ${passwordLength} .`);

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        // If they enter strings, strange characters, or numbers out of the range, code won't proceed and alert asks user to try again.
       alert("Invalid character count. Try again please.")
   } 
   else {
   charConfirmation();
    }
}

// Function for confirming what types of characters the user wants
function charConfirmation(){  
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
    // If user chooses None for these options, they have to repeat the process instead of proceeding.
    if (isLower == false && isUpper == false && isNum == false && isSpec == false && isEmoji == false) {
        alert("Your password must have some characters. Please try again.")
    } else {
        checkAgain = false;
        generation();
    }
}

// Function for actually generating the password and pushing it to display on the HTML.
function generation(){
    // Resets the Password variable so generator can keep making new passwords.
    password = "";
    for (let i = 0; i < passwordLength; i++) {
        if (password.length < passwordLength) {
            let total = Math.floor(Math.random() * passInclude.length);
            let within = Math.floor(Math.random() * passInclude[total].length)
            // Debug 
            console.log("Total: " + total + ", and i is: " + i);
            console.log("PassInclude at i:" + passInclude[total] + "and passinclude[i].length : " + passInclude[total].length);
            console.log("pass include at Total: " + passInclude[total]);
            password += passInclude[total][within];
          }
    }
    document.querySelector("#password-display").textContent = password;
}


// Starts the password generation process when you click the button
document.querySelector("#generate-password-button").addEventListener("click", function(event) {
    event.preventDefault(); 
    passLengthConfirm();
});

// Allow users to create another Password without going through prompts, but only after successfully passing passLengthConfirm and charConfirmation which sets the checkAgain variable to false.
document.querySelector("#generate-again").addEventListener("click", function(event) {
    event.preventDefault(); 
    if (checkAgain){
        alert("Please set password criteria first.");
    } 
    else {
    generation();
    }
});



