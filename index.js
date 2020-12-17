// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const promtUser = () => {
    return inquirer
    .prompt([
        {
    type: 'input',
    name: 'name',
    message: 'What is your projects title? (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true
        } else {
            console.log('Please enter a project title')
            return false;
        }
    }
}
,
{
    type: 'input',
    name: 'about',
    message: 'Provide a description of your project. (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true
        } else {
            console.log('Please enter a description for your project')
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmContentsSection',
    message: 'Would you like to include a Table of Contents section?',
    default: true
},
{
    type: 'checkbox',
    name: 'confirmContentsSection',
    message: 'Select the sections you will like to include in your Table of Contents',
    choices: ['Installation', 'Usage', 'Credits', 'License', 'Badges', 'Test' ]
},
{
    type: 'input',
    name: 'Installation',
    message: 'Please provide a step-by-step description of how to install your project. (Required)',
    validate: nameInput => {
        if(nameInput) {
            return true
        } else {
            console.log('Please provide a step-by-step description of how to install your project.')
        }
    }

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
    message: 'Please provide a License (Required)',
    validate: nameInput => {
        if(nameInput) {
            return true
        } else {
            console.log('Please provide a License.')
        }
    }
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
])
}



// TODO: Create a function to initialize app
function init() { 
   promtUser().then( (userAnswers) => {
        //console.log(userAnswers)

         generateMarkdown(userAnswers)
    })
 
    
}

// Function call to initialize app
init();
