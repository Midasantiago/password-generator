// Object containing all characters divided into each criteria for their corresponding comfirm windows
var passChar = {
  lowerAlpha : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  upperAlhpa : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  numbers : ['1','2','3','4','5','6','7','8','9','0'],
  specChar : ['!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '_', '|', '~', ',']
}

// Main function that generates random password based on user input
function generatePassword() {
  // Variables to contain the user's inputs
  var checkLength = window.prompt("How long would you like your password to be? (8-128 characters)");
  var checkLower = window.confirm("Would you like lowercase letters in your password?");
  var checkUpper = window.confirm("Would you like uppercase letters in your password?");
  var checkNumbers = window.confirm("Would you like any numbers in your password?");
  var checkSpecChar = window.confirm("Would you like a special character in your password?");

  // Empty string that will be filled by random characters generated later in the function
  var password = "";

  // Empty array that will hold all the characters that the user wants in their password
  var userPreference = [];

  // Checks wether the user has inputted a valid character length and has chosen at least one of the confirm prompts
  if (
    (checkLength < 8 || checkLength > 128) ||
    (!checkLower && !checkUpper && !checkSpecChar && !checkNumbers)
  ) {
    return window.alert("Invalid Response: Make sure to choose a character length from 8 to 128 or confirm at least one of the prompts to continue.");
  }

  // Checks wether they confirmed having the corresponding criteria in their password and adds that entire array into the userPreference array
  if (checkLower) {
    userPreference = userPreference.concat(passChar.lowerAlpha);
  }

  if (checkUpper) {
    userPreference = userPreference.concat(passChar.upperAlhpa);
  }

  if (checkNumbers) {
    userPreference = userPreference.concat(passChar.numbers);
  }

  if (checkSpecChar) {
    userPreference = userPreference.concat(passChar.specChar);
  }

  // Iterates through the user inputted length and adds a random character from the userPreference array until it reaches that length
  for (var i = 0; i < checkLength; i++) {
    var index = Math.floor(Math.random() * userPreference.length);
    password += userPreference[index];
  }

  // Outputs the password string to be used in the writePassword function
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
