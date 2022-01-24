const inquirer = require('inquirer');
const fs = require('fs');

const questions = () => {
    return inquirer.prompt([{
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Give a short description of your project",
            name: "description",
        },
        {
            type: "input",
            message: "How to install:",
            name: "installation"
        },
        {
            type: "input",
            message: "How to use the app:",
            name: "howToUse"
        },
        {
            type: "checkbox",
            message: "What license were used?",
            choices: ['Apache', 'Boost', 'MIT', 'Unlicense'],
            name: "licenses"
        },
        {
            type: "input",
            message: "How do you test your project?",
            name: "tests"
        },
        {
            type: "input",
            message: "Do you have any for guidlines to contributing to this projects?",
            name: "contribute"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your GitHub?",
            name: "github"
        }
    ]);
};

const generateReadme = ({
    title,
    description,
    howToUse,
    installation,
    licenses,
    tests,
    contribute,
    email,
    github
}) => `

# ${title}

![GitHub license](https://img.shields.io/badge/License-${licenses}-yellow.svg)

## Description

* ${description}

### Table of Contents

[Installation](#Installation)

[How to use](#How-to-use)

[Licenses Used](Licenses-Used)

[Tests](#Tests)

[How to Contribute](#How-to-Contribute)

[Report Issues](#Report-issues)


## How-to-use:
* ${howToUse}

## Installation:
* ${installation}

## Licenses-Used:
* ${licenses}

## Tests:
* ${tests}

## How-to-Contribute:
* ${contribute}

## Report-issues:
* [${email}](mailto:${email})
* [${github}](https://github.com/${github})
`

const init = () => {
    questions()
    .then((userInput) => fs.writeFileSync(`${userInput.title}.md`, generateReadme(userInput)))
    .then(() => console.log('generated readme'))
    .catch((err) => {
        throw err
    })
}
init();