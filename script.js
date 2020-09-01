// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log("Hello World");
}

function generatePassword() {
  console.log("Generate Password HERE");
  var length = Number(
    prompt(
      "How long would you like this password? (Please choose a value from 8-128)"
    )
  );

  console.log("User chose X length: ", length);

  if (length < 8) {
    alert("Try again, please choose a valid length");
    return;
  }

  if (length > 128) {
    alert("Try again, please choose a valid length");
    return;
  }

  console.log("you passed step 1");

  var numerical = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = lowerCase.upperCase;
  var special = "~!@#$%^&*()_+-=";
  var chosenCharacters = "";

  var useNumerical = confirm("Would you like to Numerical characters?");
  var useLowerCase = confirm("Would you like to Lowercase  characters?");
  var useUpperCase = confirm("Would you like to Uppercase characters?");
  var useSpecial = confirm("Would you like to Special characters?");

  console.log({ useNumerical, useLowerCase, useUpperCase, useSpecial });

  if (useNumerical) {
    chosenCharacters += numerical;
  }
  if (useLowerCase) {
    chosenCharacters += lowerCase;
  }
  if (useUpperCase) {
    chosenCharacters += upperCase;
  }
  if (useSpecial) {
    chosenCharacters += special;
  }

  console.log(chosenCharacters);


}

function randomize(options) {
  options = options.split('');
  var randIndex = Math.floor(Math.random() * options.length);
  var 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
