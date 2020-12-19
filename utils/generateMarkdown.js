const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseContent 
  
    if(license === 'mit') {
      licenseContent = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()`;
    } 
    else if(license === 'ISC') {
      licenseContent = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
    } 
    else {
      licenseContent = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]`
    }

  return licenseContent;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink 

    if(license === 'mit') {
      licenseLink = `(https://opensource.org/licenses/MIT)`
    } 
    else if (license === 'ISC') {
      licenseLink =  `(https://opensource.org/licenses/ISC)`
    }
    else {
      licenseLink = `(https://opendatacommons.org/licenses/odbl/)`
    }

    return licenseLink
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  let content = `
  ${renderLicenseBadge(data.license)}

  # ${data.name} 

  ## Description
  ${data.about}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Test](#test)
  * [Questions](#questions)
  

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Credits
  ${data.Credits}

  ## License
  This licence is covered undered ${renderLicenseLink(data.license)}.
  

  ## Contributing 
  ${data.Contribute}

  ## Test
  ${data.Test}

  ## Questions
  If you have any additional questions, please reach out to me. 
  You can reachout to me at my GitHub profile, which is [${data.githubUsername}](https://github.com/${data.githubUsername}).
  Also, you can reach out to me by email. My email address is ${data.email}. 
  `;

  writeToFile('./dist/README.md', content);

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', data, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
          }

          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
              ok: true,
              message: 'Success!'
          })
      })
  })
}

module.exports = generateMarkdown;
