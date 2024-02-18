// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'What are the installation instructions for your project?',
    },
    {   type: 'input',
        name: 'deploymentLocation',
        message: 'What is the URL of your deployed application?',
    },
    {   type: 'input',
        name: 'deployedScreenshotFileName',
        message: 'What is the filename of the screenshot of the deployed application?',
    },
    {
        type: 'input',
        name: 'repositoryLocation',
        message: 'What is the location of your repository?',
    },
    {   type: 'input',
        name: 'repositoryScreenshotFileName',
        message: 'What is the filename of the screenshot of the repository?',
    },
    {
        type: 'choice',
        name: 'licenseType',
        message: 'What is the license associated with your project?',
        choices: ['MIT', 'GNU', 'Apache', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'projectContributors',
        message: 'Please provide the names of the contributors to your project.',
    },
    {
        type: 'input',
        name: 'projectCredits',
        message: 'Please detail any other credits or acknowledgements for your project.',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the instructions for running any tests associated with your project?',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'repositoryName',
        message: 'What is the name of your repository?',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter your email address.',
    },
];

// Function to check to see if README.md exists, if it does, it will be overwritten
function fileExists(fileName) {
    fs.access(fileName, fs.constants.F_OK, (err) => {
        if (err) {
            console.log('File does not exist, creating README.md...');
            return false;
        }
        console.log('File exists, overwriting README.md...');
        return true;
    });
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileExists(fileName);
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Generating README...');
        console.log(answers);
        writeToFile('README.md', generateMarkdown({ ...answers }));
    });
}

// Function call to initialize app
init();
