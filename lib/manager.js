const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

const manager = new Manager();
manager.getOfficeNumber();
manager.getRole();