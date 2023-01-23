const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

const engineer = new Engineer()
engineer.getGithub();
engineer.getRole();