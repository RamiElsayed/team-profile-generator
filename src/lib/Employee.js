const { emptyValidationMessage } = require("../validation");

class Employee {
  constructor(name, id, email) {
    if (!name.replace(' ', '')) throw Error(emptyValidationMessage('Name'));
    if (!id.replace(' ', '')) throw Error(emptyValidationMessage('Id'));
    if (!email.replace(' ', '')) throw Error(emptyValidationMessage('Email'));
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail(){
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
