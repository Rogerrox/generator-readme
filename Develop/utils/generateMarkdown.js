// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'none'){
    return`![license](https://img.shields.io/badge/License-${license}-green.svg)`;
  }else{
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'none'){
    return`[license](#license)`
  }else{
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none'){
    return `## License section of ReadMe ${license},`;
  }else{
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by $(data,name)

  ${renderLicenseBadge(data.license)}

## Table of Contents
*[Installaton](#installation)
*[Description](#description)
*[Usage](#usage)
*[License](#license)
*[Contribution](#contribution)
*[Test](#test)
*[Questions](#questions)
#Installation
// These dependencies listed must be installed for this application to work: 

## installation
${data.installation}
## description
${data.description}
## usage
${data.usage}
## licence
${data.license}
## contribution
${data.contribution}
## test
${data.test}

`;
}

module.exports = generateMarkdown;
// https://github.com/Rogerrox/generator-readme