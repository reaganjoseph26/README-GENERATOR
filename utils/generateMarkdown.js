const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {

  let licenseContent = '  '

  licenses.forEach(license => {
    if(license === 'mit') {
      licenseContent+= `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  `;
    }
    
    if(license === 'ISC') {
      licenseContent += `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)  `
    }
  });

  return licenseContent;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let content = `# ${data.name}`;


  const generatedLicenseBadges = renderLicenseBadge(data.license);

  content += generatedLicenseBadges;

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
