const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const {generator} = require("./Templates/mainTeam")
const {Htmlgenerator} = require("./Templates/mainHTML")

let teamMembers = [];
let block = ''
function promptUser() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your first name:",
            name: "name"
        }, {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        }, {
            type: "list",
            message: "What's your role within the company?",
            name: "role",
            choices: ['Engineer', 'Intern', 'Manager']
        },
        {
            type: "input",
            message: "Enter your github username:",
            name: "github"
        },
        {
            type: "input",
            message: "Enter your school name:",
            name: "School"
        },
        {
            type: "input",
            message: "Enter your office number:",
            name: "OfficeNumber"
        },
        {
            type: "confirm",
            message: "Do you want to add another employee?",
            name: "add-employee"
        },
     ])
     .then(Response => {
         teamMembers.push(Response)
            console.log(Response)
         if (Response["add-employee"] == true ){
             promptUser()
         }
         else { 
             for(let i = 0; i < teamMembers.length; i++){
                 block += generator(teamMembers[i])
             }
             fs.writeFile("index.html", Htmlgenerator(block), function(err, data) {
                if(err) {
                  console.log(err);
                }
                })
         }
     })
}

    promptUser();
