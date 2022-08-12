// My Attempt
const Manager = require("../lib/Manager");

test("Create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("lucas", 2, "Lucasram3@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("We are testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("lucas", 2, "Lucasram3@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("lucas", 2, "Lucasram3@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});