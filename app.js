const inquirer = require("inquirer");
const fs = require("fs");const Employee = require("./lib/Employee");

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");




function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your first name:",
            name: "name"
        }, {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        }, {
            type: "input",
            message: "What's your role within the company?",
            name: "role",
            choices: ['engineer', 'intern', 'manager']
            //conditional statement about employment: intern ask for school, if manager ask for office number, if engineer ask for githubname
        },
        {
            type: "input",
            message: "Enter your github username:",
            name: "username"
        }, ]);
}

