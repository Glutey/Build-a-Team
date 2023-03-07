// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHubUser) {
        super(name, id, email);
        this.gitHubUser = gitHubUser; //GitHubUserName as requested by the readme.. is this right?
    }
    getGithub() {
        return this.gitHubUser;  // confirm that this is right too... im 90% sure it is
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;

// I have to run tests on eeach of the classes to make sure they pass, but having difficulty getting the tests to run correctly..
// i have ran 'npm run test' in the terminal, but i am not sure if that is correct or not

