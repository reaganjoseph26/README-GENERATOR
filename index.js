// TODO: Include packages needed for this application
const { fstat } = require('fs');
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
    name: 'confirmContentsSection',
    message: 'Would you like to include a Table of Contents section?',
    default: true 
},
{
    type: 'input',
    name: 'Installation',
    message: 'Please provide a step-by-step description of how to install your project. (Required)',
   
},
{
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Would you like to include a Usage section? (ie.. instrcutions, examples of use, screenshots..etc)',
    default: true 
},
{
    type: 'confirm',
    name: 'confirmCredits',
    message: 'Would you like to include a Credits section? (ie.. List of collabortors..etc) ',
    default: true 
},
{
    type: 'input',
    name: 'license',
    message: 'Please provide a License',
},
{
    type: 'confirm',
    name: 'confirmBadges',
    message: 'Would you like to include a Badges section? (ie.. List of collabortors..etc) ',
    default: true 
},
{
    type: 'confirm',
    name: 'confirmContribute',
    message: 'Would you like others developers to contribute to this application? ',
    default: true 
},
{
    type: 'confirm',
    name: 'confirmTest',
    message: 'Would you like to include a Test section? (ie.. List of collabortors..etc) ',
    default: true 
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, rejects) => {
        fs.wrtieFile('')
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
