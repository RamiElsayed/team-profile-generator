const Employee = require("./Employee");
const { emptyValidationMessage } = require('../validation');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        if (!school.replace(' ', '')) throw Error(emptyValidationMessage('School'));
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;