// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'name',
    message: 'What is your projects title? (Required)'
},
{
    type: 'input',
    name: 'about',
    message: 'Provide a description of your project',
},
{
    type: 'confirm',
    name: ''
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
