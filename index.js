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
                name: 'Sections',
                message: 'Select the sections you will like to include in your Table of Contents',
                choices: ['Installation', 'Usage', 'Credits', 'License', 'Contribute', 'Test', 'Questions']
            },
            {
                type: 'input',
                name: 'Installation',
                message: 'Please provide a step-by-step description of how to install your project. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please provide a step-by-step description of how to install your project.')
                    }
                }

            },
            {
                type: 'input',
                name: 'Usage',
                message: 'Please provide the usage of this project?, i,e., instrcutions, examples of use, screenshots..etc)',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        return false
                    }
                }

            },
            {
                type: 'input',
                name: 'Credits',
                message: 'List your collabortors, if any, with links to their GitHub profiles.',
                message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
                message: 'If you followed tutorials, include links to those here as well.',
                validate: nameInput => {
                    if(nameInput) {
                        return true
                    } else {
                        return false
                    }
                }
            },
            {
                type: 'list',
                name: 'license',
                message: 'Please select a License (Required)',
                choices: ['mit', 'ISC', 'Open Database License'],
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please provide a License.')
                    }
                }
            },
            {
                type: 'input',
                name: 'Contribute',
                message: 'Would you like others developers to contribute to this application? if so, provide the guidelines of how to. ',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        return false
                    }
                }
            },
                
            {
                type: 'input',
                name: 'Test',
                message: 'Please provide a test for your application and examples on how to run them.',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        return false
                    }
                }
               
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: 'Please enter your github username. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please enter a project title')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email address. (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please enter a project title')
                        return false;
                }
            }
        },
     ])
}



// TODO: Create a function to initialize app
function init() {
    promtUser().then((userAnswers) => {
        console.log(userAnswers)

        generateMarkdown(userAnswers)
    })


}

// Function call to initialize app
init();
