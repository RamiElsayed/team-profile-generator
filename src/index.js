const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamStaff = [];


const managerQuestions = [
  {
    type: "input",
    name: "Manager's Name",
    message: "Please provide a manager manager's name",
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
  }
];

const promptmanagerQuestions = () => {
  return inquirer.prompt(managerQuestions).then(managerInput => {
    const  { name, id, email, officeNumber } = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    teamStaff.push(manager); 
    console.log(manager); 
})
};

const init = async () => {
  const data = await promptmanagerQuestions();
};

// Function call to initialize app
init();
