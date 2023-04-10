// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ({ name}) =>

<h1 class="display-4"> Hi! My name is${name}</h1>


inquirer
.Prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your user name?',
    },
//     {
//  //     type: 'checkbox', input
//  //     message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
// //      type: 'list',  input
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
     ])

// TODO: Create a function to write README file


.then((answers) => {
    const question = generateReadMe(answers);

    fs.writeFile('generateReadMed', question, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
