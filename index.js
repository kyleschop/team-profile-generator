const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');
const fs = require('fs');
const path = require("path");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const question = [
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
    }
];

const questions = [
    {
        type: 'list',
        name: 'teamMember',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', 'I am done']
    },
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
        when: function (answers) {
            return answers.teamMember === 'Engineer';
        }
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "What is the engineer's ID?",
        when: function (answers) {
            return answers.teamMember === 'Engineer';
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?",
        when: function (answers) {
            return answers.teamMember === 'Engineer';
        }
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the engineer's github username?",
        when: function (answers) {
            return answers.teamMember === 'Engineer';
        }
    },
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
        when: function (answers) {
            return answers.teamMember === 'Intern';
        }
    },
    {
        type: 'input',
        name: 'internID',
        message: "What is the intern's ID?",
        when: function (answers) {
            return answers.teamMember === 'Intern';
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email?",
        when: function (answers) {
            return answers.teamMember === 'Intern';
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "what school is the intern from?",
        when: function (answers) {
            return answers.teamMember === 'Intern';
        }
    }
];

const allAnswers = [];
const askQuestion = () => {
    inquirer.prompt(question).then(answers => {
        allAnswers.push(answers);
        const askQuestions = () => {
            inquirer.prompt(questions).then(answers => {
                allAnswers.push(answers);
                if (answers.teamMember !== 'I am done') {
                    askQuestions();
                } else {
                    createHTML(allAnswers);
                }
            });
        }
        askQuestions();
    });
}

askQuestion();

const createHTML = allAnswers => {
    console.log(allAnswers);
    const template =
    generateHTML(allAnswers);
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
      }
    fs.writeFile(distPath, template, (err) => {
        err ? console.log(err) : console.log('Success!');
    });
};
