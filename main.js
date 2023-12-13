// main.js
import { specialCharacters, lowercaseAlphabet, uppercaseAlphabet, numbers } from './constants.js';
import { generatePassword } from './generatePassword.js';
import { calculateStrength } from './calculateStrength.js';

// State object
let state = {
    password: '',
    strength: 0
};

// Function to handle form submission
function handleFormSubmit(event) {
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
    state.password = generatePassword(passwordLength, optionsVariable);

    // Calculate and set the strength of the password
    state.strength = calculateStrength(state.password);

    // Update the DOM
    updateDOM();
}

// Function to update the DOM based on the current state
function updateDOM() {
    document.querySelector("#password").value = state.password;

    let progressBarValue = document.querySelector("#progress-bar-value");
    progressBarValue.style.width = state.strength + '%';
    progressBarValue.setAttribute('data-value', state.strength);
}

// Event listener for the form submission
document.querySelector("#passwordOptions").addEventListener("submit", handleFormSubmit);