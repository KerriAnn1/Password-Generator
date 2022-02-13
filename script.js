// Assignment code here
var special = ["!","'", "#", "@", "$", "%", "^", "&", "*", "(", ")", "+", ":",",", "<", ">", "/", "\\", "?", "=", "-", "{", "}", "[", "]", ".", "~", ]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numeric = [0,1,2,3,4,5,6,7,8,9];
var characters = []
var password = []
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// write a function to generate the password
function generatePassword(){
 //get password criteria from user
    var criteria = getCriteria();
    console.log(criteria);
    if (criteria.lowerCase) {
    characters = characters.concat(lowercase)
   }
    if  (criteria.upperCase){
     characters = characters.concat(uppercase)
   } 
   if (criteria.special){
     characters = characters.concat(special)
   } 
   if (criteria.numeric) {
     characters = characters.concat(numeric)
   }
   for ( var i = 0; i < criteria.length; i++ ) {
    var passwordCharacters = characters[Math.floor(Math.random() * characters.length)];
    password.push(passwordCharacters)
   }
 console.log(password) 
 var finalPassword =  password.join("")
 return finalPassword
}

function getCriteria(){
   var length = parseInt(prompt("Pick a length from 8 to 128 characters."));
   if (length < 8 || length > 128){
       alert("Password must be between 8 - 128 characters")
       return 
   }
   var lowerCase = confirm("Would you like to include lowercase?");
   var upperCase = confirm("Would you like to include upppercase?");
   var special = confirm("Would you like to include special?");
   var numeric = confirm("Would you like to include numeric?");
   console.log(length, lowerCase, upperCase, special, numeric)
   // stuff all of our user preferences into an object to pass into the generate password
   var prefObj = {
       length: length,
       lowerCase: lowerCase,
       upperCase: upperCase,
       special: special,
       numeric: numeric, 
   } 
   return prefObj
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);