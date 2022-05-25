// Assignment code here
var generateBtn = document.querySelector("#generate");

    

var passwordText = document.querySelector("#password");
function generatePassword() {
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()123456789";
    var length = prompt( "Choose a number between 8 and 128") ;
    var password = "";

for (var i=0; i <= length; i++){

       var randomNumber = Math.floor( Math.random() * characters.length);
       password += characters.substring(randomNumber,randomNumber + 1);

    }  
    passwordText.value = password; 

}
generateBtn.addEventListener("Click", () => {
       generatePassword() ;
   
})