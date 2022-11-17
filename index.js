// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the Project Title?',
            name: 'Title',
        },
        {
            type: 'input',
            message:'Give a description of the project:',
            name: 'Description',
        },
        {
            type: 'input',
            message:'How do you install the dependencies?',
            name: 'Installation',
        },
        {
            type: 'input',
            message:'How do you use the app?',
            name: 'Usage',
        },
        {
            type: 'input',
            message:'How do you contribute to this app?',
            name: 'Contributing',
        },
        {
            type: 'input',
            message:'How do you run a test?',
            name: 'Tests',
        },
        {
            type: 'list',
            message:'What kind of license do you have?',
            name: 'License',
            choices: ['MIT', 'GPL 3.0', 'BSD 3', 'APACHE 2.0', 'none']
        },
        {
            type: 'input',
            message:'Github username:',
            name: 'Github',
        },
        {
            type: 'input',
            message:'Email:',
            name: 'Email:',
        },
        
        

    ])

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();