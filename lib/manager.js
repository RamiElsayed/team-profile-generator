const Employee = require("./employee");
const { emptyValidationMessage } = require('../src/validation');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        if (!officeNumber.replace(' ', '')) throw Error(emptyValidationMessage('OfficeNumber'));
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;