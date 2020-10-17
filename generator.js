// Created Arrays containing 
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = [0, 1, 2, 3, 4, 5, 6, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "("];
var emoji = ["😊","👍","🙌","😍","😒","❤","🤣","💕"];

// User
var passwordLength = "";
var passInclude = [];

// Function for confirming what types of characters the user wants
function confirmation(){  
    var isLower = confirm("Do you want lowercase letters?");
    var isUpper = confirm("Do you want uppercase letters?");
    var isNum = confirm("Do you want numbers?");
    var isSpec = confirm("Do you want special characters?");
    var isEmoji = confirm("Do you want emojis?");
}

//Function for actually generating the password
function genPass(){
    passwordLength = parseInt(prompt("How long do you want your password to be? (8-128 characters)"));
    if (passwordLength === NaN || passwordLength < 8 || passwordLength > 128) {
       alert("Try again.")
       passwordLength = prompt("How long do you want your password to be? (8-128 characters)");
   } else 
   for (let i = 0; i < passwordLength; i++) {
}

// What happens when you click the button
document.querySelector("#generate-password-button").addEventListener("click", function(event) {
    console.log("Line 38 Hi");
    event.preventDefault(); 
    confirmation();
    genPass();
    }

)};



