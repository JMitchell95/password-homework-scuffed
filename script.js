// Assignment Code
var generateBtn = document.querySelector("#generate");
var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-+*/";
var length = 8;


// Write password to the #password input
function writePassword() {
    
   for (i=0; i < length; i++) {
  password = (Math.floor(Math.random() *char.length));
 }
console.log(password);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
