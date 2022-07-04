const inquirer = require("inquirer");
const fs = require("fs");

const renderHTMLPage = require('./renderTeamHTMLPage')
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamStaff = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please provide a manager manager's name",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the manager's name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Please enter employee ID",
    validate: (nameInput) => {
      if (isNaN(nameInput)) {
        console.log("Please enter the manager's ID!");
        return false;
      } else {
        return true;
      }
    },
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
    validate: (nameInput) => {
      if (isNaN(nameInput)) {
        console.log("Please enter an office number!");
        return false;
      } else {
        return true;
      }
    },
  },
];

const employeeQuestions = [
  {
    type: "list",
    name: "role",
    message: "Please choose your employee's role",
    choices: ["Engineer", "Intern"],
  },
  {
    type: "input",
    name: "name",
    message: "What's the name of the employee?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter an employee's name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: 'id',
    message: "Please enter the employee's ID.",
    validate: nameInput => {
        if  (isNaN(nameInput)) {
            console.log ("Please enter the employee's ID!")
            return false; 
        } else {
            return true;
        }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter the employee's email.",
    validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
            return true;
        } else {
            console.log ('Please enter an email!')
            return false; 
        }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: "Please enter the employee's github username.",
    when: (input) => input.role === "Engineer",
    validate: nameInput => {
        if (nameInput ) {
            return true;
        } else {
            console.log ("Please enter the employee's github username!")
        }
    }
},
{
  type: 'input',
  name: 'school',
  message: "Please enter the intern's school",
  when: (input) => input.role === "Intern",
  validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log ("Please enter the intern's school!")
      }
  }
},
{
  type: 'confirm',
  name: 'confirmAddEmployee',
  message: 'Would you like to add more team members?',
  default: false
}
];
const promptManagerQuestions = () => {
  return inquirer.prompt(managerQuestions).then((managerInput) => {
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager(name, id, email, officeNumber);

    teamStaff.push(manager);
    console.log(manager);
  })
};

const promptEmployeeQuestions = () => {
  return inquirer.prompt(employeeQuestions).then(employeeData => {
    const { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
    let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamStaff.push(employee); 

        if (confirmAddEmployee) {
            return promptEmployeeQuestions(teamStaff); 
        } else {
            return teamStaff;
        }
  })
};

const writeFile = data => {
  fs.writeFile('../dist/index.html', data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Team profile has been successfly generated in the index.html file please check it")
    }
  });
};
const init = async() => {
   await promptManagerQuestions();
   await promptEmployeeQuestions();
   renderHTMLPage(teamStaff);
   writeFile(renderHTMLPage);
   
};

// Function call to initialize app
init();
