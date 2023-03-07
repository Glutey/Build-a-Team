const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js"); //i know i have to use this but not sure how or where

const teamMembers = [];

function createManager() {   //i have tried to create a function to create the manager and then call it in the createTeam function but it is not working
  return inquirer            //im having difficulty trying to understand / figure out how i can call/render these functions.. 
    .prompt([               // i know that each one has been written correctly for hwat it is on its own, but not sure if they are working together as needed
      {                     // nor do i know how to get the code to run so that these prompts gather info from the user and generate HTML
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      console.log("Team manager has been added to the team.");
      createTeam();
    });
  }
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberType",
        message: "What type of team member would you like to add next?",
        choices: ["Engineer", "Intern", "I'm done adding team members"],
      },
    ])
    .then((answers) => {
      if (answers.memberType === "Engineer") {
        createEngineer();
      } else if (answers.memberType === "Intern") {
        createIntern();
      } else {
        generateTeam();
      }
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      console.log("Engineer has been added to the team.");
      createTeam();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      console.log("Intern has been added to the team.");
      createTeam();
    });
}

function generateTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR);
        }
}

      
render(teamMembers); // is this right for the render and generation of the HTML... 
 
// the readme states that we have the render function provided and this was it