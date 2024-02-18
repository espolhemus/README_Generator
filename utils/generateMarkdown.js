// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License Badge](https://img.shields.io/badge/license-${license}-green)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license !== 'None') {
//     return `\n* [License](#license)\n`;
//   }
//   return '';
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    // return `## License\nThis project is licensed according to the terms of the ${license} license.`;
    return `This project is licensed according to the terms of the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to iterate through Contributors

// TODO: Create a function to iterate through images

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}\n ${renderLicenseBadge(data.licenseType)}\n
## Description\n \n${data.projectDescription}\n 
## Table of Contents\n
- [Description](#description)\n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [Credits](#credits)\n
- [License](#license)\n
- [Tests](#tests)\n
- [Questions](#questions)\n
## Installation
  The installation instructions for this project are as follows:
  - ${data.installationInstructions}\n
## Usage\n
  - The application is deployed at the following location:
   ${data.deploymentLocation}\n
   - The screenshot of the deployed application is as follows:\n
    ![Screenshot of Deployed Application](assets/images/${data.deployedScreenshotFileName})\n
   - The location of the GitHub repository is:
    ${data.repositoryLocation}\n
    - The screenshot of the repository is as follows:\n
    ![Screenshot of Repository](assets/images/${data.repositoryScreenshotFileName})\n
## Credits
  The following individuals contributed to this project:\n
    - ${data.projectContributors}\n
  In addition, the following resources were used in the creation of this project:\n
    - ${data.projectCredits}\n
## License\n ${renderLicenseSection(data.licenseType)}\n
## Tests\n Instructions for running the test package(s) associated with this project are:\n -${data.testInstructions}\n
## Questions\n
  - If you have any questions about the project, please contact me at ${data.emailAddress}\n
  - To view more of my work, visit: https://github.com/${data.githubUsername}
`;
}

module.exports = generateMarkdown;
