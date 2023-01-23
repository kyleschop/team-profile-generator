const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

const intern = new Intern();
intern.getSchool();
intern.getRole();