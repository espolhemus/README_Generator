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
    {
        type: 'choice',
        name: 'licenseType',
        message: 'What is the license associated with your project?',
        choices: ['MIT', 'GNU', 'Apache', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'projectContributiors',
        message: 'Please provide the names of the contributors to your project.',
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
        name: 'deploymentImageName',
        message: 'What is the name of the screenshot associated with your deployed application? (If none, enter "none")',
    },
    {
        type: 'input',
        name: 'repositoryImageName',
        message: 'What is the name of the image associated with your repository? (If none, enter "none")',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Generating README...');
        console.log(answers);
        // writeToFile('README.md', generateMarkdown({ ...answers }));
    });
}

// Function call to initialize app
init();
