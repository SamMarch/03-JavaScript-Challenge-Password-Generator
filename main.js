// main.js
import { specialCharacters, lowercaseAlphabet, uppercaseAlphabet, numbers } from './constants.js';
import { generatePassword } from './generatePassword.js';
import { calculateStrength } from './calculateStrength.js';

const password = document.querySelector("#password");
const strengthMeter = document.querySelector("#strength");
const passwordOptions = document.querySelector("#passwordOptions");

passwordOptions.addEventListener("submit", function(event) {
    event.preventDefault();

    let passwordLength = document.querySelector("#length").value;
    let optionsVariable = "";

    if (document.querySelector("#lowercase").checked) optionsVariable += lowercaseAlphabet;
    if (document.querySelector("#uppercase").checked) optionsVariable += uppercaseAlphabet;
    if (document.querySelector("#numbers").checked) optionsVariable += numbers;
    if (document.querySelector("#special").checked) optionsVariable += specialCharacters;

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
});