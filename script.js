// Assignment code here
var generateBtn = document.querySelector("#generate");

    

var passwordText = document.querySelector("#password");
function generatePassword() {
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()123456789";
    
    var length = prompt( "Choose a number between 8 and 128")
        let max = (length > 128)
        let min = (length < 8)
       if (max){
        window.alert("Try again. Choose a number between 8 and 128")
        return
        }
       else if (min){
            window.alert("Try again. Choose a number between 8 and 128")
        return
        }else {

        }

    var password = "";
    alert("Your password must contain special characters, numbers, upper and lower case letters; do you wish to continue??");
  for (var i=0; i <= length; i++){

       var randomNumber = Math.floor( Math.random() * characters.length);
       password += characters.substring(randomNumber,randomNumber + 1);

    }  
    passwordText.value = password; 
}
generateBtn.addEventListener("Click", () => {
       
    generatePassword() ;
   
})