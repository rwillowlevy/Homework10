const Employee = require("./employee.js");

class Engineer extends Employee{
    constructor(name, id, email, githubUsername){
        super(name, id, email);
        this.github = githubUsername;

    }
    getRole(){
       return "Engineer" 
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer; 