const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'managerID',
        message: "What is the team manager's ID?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email?"
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the team manager's office number?"
    },
    {
        type: 'list',
        name: 'teamMember',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', 'I am done']
    },
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "What is the engineer's ID?"
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?"
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the engineer's github username?"
    },
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'internID',
        message: "What is the intern's ID?"
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email?"
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "what school is the intern from?"
    }
];

inquirer.prompt(questions).then(answers => {
    createHTML(answers);
});

const createHTML = data => {
    const template =
    generateHTML(data);
    fs.writeFile('team.html', template, (err) => {
        err ? console.log(err) : console.log('Success!');
    });
};