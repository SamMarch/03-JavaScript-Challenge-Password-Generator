# Password Generator

## Description
This project is a password generator that creates a secure password based on user-selected criteria. The user can specify the length of the password and whether it should include lowercase letters, uppercase letters, numbers, and special characters. The generated password is completely random, ensuring a high level of security.

The password generator is built with JavaScript and uses a combination of loops and arrays to generate the password. It also calculates the strength of the generated password based on the types of characters used.

## Usage
To use the password generator, open the `index.html` file in a web browser. You will see a form where you can specify your password criteria. After you have made your selections, click the "Generate Password" button. The generated password will appear in the text area above the form.

The strength of the password is represented by a progress bar above the text area. The strength increases based on the variety of character types used in the password.

## Code Structure
- `index.html`: Contains the HTML structure of the password generator.
- `style.css`: Contains the CSS styles for the password generator.
- `main.js`: Contains the main JavaScript code for handling form submissions and updating the DOM.
- `constants.js`: Contains constant values for special characters, lowercase letters, uppercase letters, and numbers.
- `generatePassword.js`: Contains the function for generating the password.
- `calculateStrength.js`: Contains the function for calculating the strength of the password.

## Credits
Special thanks to my fellow classmates for their assistance and support during the development of this project.