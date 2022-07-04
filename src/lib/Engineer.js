const Employee = require("./Employee");
const { emptyValidationMessage } = require('../validation');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        if (!github.replace(' ', '')) throw Error(emptyValidationMessage('GitHub'));
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;