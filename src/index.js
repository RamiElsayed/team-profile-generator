const inquirer = require("inquirer");
const fs = require("fs");

const emailValidation = (answer) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(answer)) {
    return "You have to provide a valid email address!";
  }
  return true;
};

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
    validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log ("Please enter the manager's name!");
          return false; 
      }
  }
  },
  {
    type: "input",
    name: "id",
    message: "Please enter employee ID",
    validate: nameInput => {
      if  (isNaN(nameInput)) {
          console.log ("Please enter the manager's ID!")
          return false; 
      } else {
          return true;
      }
    }
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the manager's email",
    validate: (answer) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(answer)) {
        return "You have to provide a valid email address!";
      }
      return true;
    },
  },
  {
    type: "confirm",
    name: "add role",
    message: "do you want to add a new employee",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter the manager's office number",
    validate: nameInput => {
      if  (isNaN(nameInput)) {
          console.log ('Please enter an office number!')
          return false; 
      } else {
          return true;
      }
  }
  },
  {
    type: "list",
    name: "Roles",
    message: "Please select the role you want to add to the team",
    choices: roles,
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
