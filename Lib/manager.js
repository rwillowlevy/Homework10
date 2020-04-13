const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(name, id, email, x){
        super(name, id, email);
        this.officeNumber = x;
    }
    getRole(){
        return "Manager" 
     }
    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager