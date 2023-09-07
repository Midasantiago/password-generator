// Assignment code here
var alphabet = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ');
console.log(alphabet);
var upperAlpha = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ');
console.log(upperAlpha);
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
console.log(numbers);
var specChar = `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ { | } ~`.split(' ');
console.log(specChar);

function generatePassword() {
  var checkLength = window.prompt("How long would you like your password to be? (8-128 characters)")
  var checkLower = window.confirm("Would you like lowercase letters in your password?");
  var checkUpper = window.confirm("Would you like  uppercase letters in your password?");
  var checkSpecChar = window.confirm("Would you like a special character in your password?");
  var checkNumbers = window.confirm("Would you like any numbers in your password?");

  var randUpper = "";
  var randLower = "";
  var randSpecChar = "";
  var randNumber = "";

if (checkLower && checkUpper && checkSpecChar && checkNumbers && checkLength >= 8 && checkLength <= 128) {
  var upperIndex = Math.floor(Math.random() * upperAlpha.length);
  randUpper = upperAlpha[upperIndex];
  checkLength--;
  
  for (var i = 0; i < checkLength; i++) {
    var lowerIndex = Math.floor(Math.random() * alphabet.length);
    randLower += alphabet[lowerIndex];
  }
} else {
  window.alert("Invalid Response. Make sure to choose a character length from 8 to 128 and to confirm at least one of the prompts to continue.");
}

  var password = randUpper + randLower + randSpecChar + randNumber;
  return password; 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
