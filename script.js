// Assignment Code
const generateBtn = document.querySelector("#generate");
const password = document.querySelector("#password");

// Variables for all upper and lowercase letters, numbers, characters and final option
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate a random password
function generatePassword(length, characters) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

// Function to write password
function writePassword() {
    password.value = "";

    let passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Your password is not between 8 characters and 128 characters. Please try again.");
        return;
    }

    let optionsVariable = "";
    if (confirm("Do you want your password to contain lowercase letters?")) optionsVariable += lowercaseAlphabet;
    if (confirm("Do you want your password to contain uppercase letters?")) optionsVariable += uppercaseAlphabet;
    if (confirm("Do you want your password to contain numbers?")) optionsVariable += numbers;
    if (confirm("Do you want your password to contain special characters?")) optionsVariable += specialCharacters;

    if (optionsVariable === "") {
        alert("You must chose at least one password criteria.");
        return;
    }

    password.value = generatePassword(passwordLength, optionsVariable);
}

writePassword();