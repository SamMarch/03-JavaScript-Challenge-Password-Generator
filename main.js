// main.js
import { specialCharacters, lowercaseAlphabet, uppercaseAlphabet, numbers } from './constants.js';
import { generatePassword } from './generatePassword.js';
import { calculateStrength } from './calculateStrength.js';

const generateBtn = document.querySelector("#generate");
const password = document.querySelector("#password");
const copyBtn = document.querySelector("#copy");
const strengthMeter = document.querySelector("#strength");

copyBtn.addEventListener("click", function() {
    const passwordText = document.querySelector("#password");
    passwordText.select();
    document.execCommand("copy");
    alert("Copied the text: " + passwordText.value);
});

generateBtn.addEventListener("click", writePassword);

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

    // Generate the password
    let generatedPassword = generatePassword(passwordLength, optionsVariable);

    // Set the password value
    password.value = generatedPassword;

    // Calculate and set the strength of the password
    strengthMeter.value = calculateStrength(generatedPassword);
}

writePassword();