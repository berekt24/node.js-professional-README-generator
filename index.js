// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generate = require('generateMarkdown.js');
const genMarkdown = (data, badge) =>
  `# ${data.title}
  ## Licensing
   ${badge}

  ## Description
    ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install dependencies, run the following commands;

    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
    This project has a ${data.license} license.

  ## Contributing
    ${data.contributing}

  ## Tests
  To run tests, run the following command;
    ${data.tests}

  ## Questions
    Github: https://github.com/${data.github}
    Email: ${data.email}


`;

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the Project Title?',
            name: 'title',
        },
        {
            type: 'input',
            message:'Give a description of the project:',
            name: 'description',
        },
        {
            type: 'input',
            message:'How do you install the dependencies?',
            name: 'installation',
        },
        {
            type: 'input',
            message:'How do you use the app?',
            name: 'usage',
        },
        {
            type: 'input',
            message:'How do you contribute to this app?',
            name: 'contributing',
        },
        {
            type: 'input',
            message:'How do you run a test?',
            name: 'tests',
        },
        {
            type: 'list',
            message:'What kind of license do you have?',
            name: 'license',
            choices: ['MIT', 'GPL 3.0', 'APACHE 2.0', 'none']
        },
        {
            type: 'input',
            message:'Github username:',
            name: 'github',
        },
        {
            type: 'input',
            message:'Email:',
            name: 'email',
        },
        
    ])

// TODO: Create a function to write README file
.then((data) => {
    console.log(data.license);
    if (data.license === 'MIT'){
       badge = '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' 
    } else if (data.license ==='GPL 3.0') {
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else if (data.license ==='APACHE 2.0'){
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (data.license === 'none'){
        badge = 'none'
    }
const genMark = genMarkdown(data, badge);

fs.writeFile('README.md', genMark, (err) => err ? console.log(err) : console.log('Success!')
    );
});
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();