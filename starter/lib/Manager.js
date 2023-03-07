// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;

// I have to run tests on eeach of the classes to make sure they pass, but having difficulty getting the tests to run correctly..
// i have ran 'npm run test' in the terminal, but i am not sure if that is correct or not