const inquirer = require("inquirer");
const fs = require("fs");

const emailValidation = (answer) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if(!emailRegex.test(answer)) {
      return "You have to provide a valid email address!"
  }
  return true
}

const roles = [
  {
    name: "Engineer",
  },
  {
    name: "Intern",
  },
];

const teamQuestions = [
  {
    type: "input",
    name: "Manager's Name",
    message: "Please provide a team manager's name",
  },
  {
    type: "number",
    name: "Manager's ID",
    message: "Please enter employee ID",
  },
  {
    type: "input",
    name: "Manager's email",
    message: "Please enter the manager's email",
    validate: (answer) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(answer)) {
        return "You have to provide a valid email address!";
      }
      return true;
    }
  },
  {
    type: "confirm",
    name: "add role",
    message: "do you want to add a new employee",
    validate: (answer) => {
      if (answer) {
        inquirer.prompt({
          type: "list",
          name: "Roles",
          message: "Please select the role you want to add to the team",
          choices: roles,
        })
      }
      return;
    }
  },
  
];

const promptTeamQuestions = () => {
  return inquirer.prompt(teamQuestions);
    };

const init = async () => {
  const data = await promptTeamQuestions();
};

// Function call to initialize app
init();
