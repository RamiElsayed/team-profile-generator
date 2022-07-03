const Employee = require("./employee");
const { emptyValidationMessage } = require('../src/validation');

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