// Assignment Code
// Query selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// variables for all upper and lowercase letters, numbers, characters and final option
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var optionsVariable = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function added to clear taxt after prompts
function clearText() {
    password.value = ""
}

// Write a function that generates a random password in the "text area" box
function writePassword() {

    var randomString = "";

    // Choose password criteria
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

        // Write another function that checks if it's between 8 and 128 characters
        if (passwordLength < 8 || passwordLength > 128) {
            alert("Your password is not between 8 characters and 128 characters. Please try again.");
            clearText();
            return;
        }

    var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
    var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
    var num = confirm("Do you want your password to contain numbers?");
    var specialChar = confirm("Do you want your password to contain special characters?");

    // Ensure that if someone clicks cancel for all password criteria that it asks them to choose at least one
    if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
        alert("You must chose at least one password criteria.");
        clearText();
        return;
    }

    // Use the criteria that are selected and store them in a variable
    if (lowercaseLett) {
        optionsVariable += lowercaseAlphabet;
    }

    if (uppercaseLett) {
        optionsVariable += uppercaseAlphabet;
    }

    if (num) {
        optionsVariable += numbers;
    }

    if (specialChar) {
        optionsVariable += specialCharacters;
    }

    // Generates a random password based on the criteria that have been selected

    // Basic 'for' loop
    for (var i = 0; i < passwordLength; i++) {
        // Selects a random character value from the string until it is the desired length
        var index = Math.floor(Math.random() * optionsVariable.length);
        //adds each selected random character value and adds it to the string
        randomString += optionsVariable[index];
    }
    password.value = randomString;

}

writePassword();