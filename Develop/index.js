// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
   },
    
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'contribution',
   },  
  
   {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
   },
  
   {
    type: 'input',
    message: 'What is your project name?',
    name: 'title',
   },
   
   {
      type: 'input',
      message: 'Please write a short description of your project?',
      name: 'description',
   },
   {
         type: 'checkbox', 
         message: 'What kind of license should your project have?',
         name: 'license',
         choices:['apex','mit','apache','none'],
   },
   {   type: 'input', 
         message: 'What command should be run to install dependencies?',
         name: 'Installation', 
   },
   {   type: 'input', 
   message: 'What technologies were used for this project?',
   name: 'usage', 
},


];
     
// //      type: 'list',  input
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
     
     

// TODO: Create a function to write README 
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// .then((answers) => {
//     const question = generateReadMe(answers);

//     fs.writeFile('readMe.md', question, (err) =>
//       err ? console.log(err) : console.log('Successfully created a readMe!')
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
