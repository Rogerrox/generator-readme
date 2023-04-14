// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'Title',
   },  
  
   {
    type: 'input',
    message: 'What is your email address?',
    name: 'Title',
   },
  
   {
    type: 'input',
    message: 'What is your project name?',
    name: 'Title',
   },
  
  
  {
      type: 'input',
      message: 'Please write a short description of your project?',
      name: 'Title',
     },
     {
         type: 'input', 
         message: 'What kind of license should your project have?',
         name: 'Description',
     },
     {   type: 'input', 
         message: 'What command should be run to install dependencies?',
         name: 'Table of Contents', }
];
     
// //      type: 'list',  input
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
     
     

// TODO: Create a function to write README 
function writeToFile(fileName, data) {
  return fs.writeFileSync(path)
}


// .then((answers) => {
//     const question = generateReadMe(answers);

//     fs.writeFile('readMe.md', question, (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
// });

// TODO: Create a function to initialize 

// function init() {}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }









// Function call to initialize app
init();
