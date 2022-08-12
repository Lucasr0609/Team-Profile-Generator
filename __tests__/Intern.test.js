// My Attempt
const Intern = require("../lib/Intern");

test("Create school.", () => {
    const schoolTest = "School Name";
    const employeeInstance = new Intern("Lucas", 2, "Lucasram3@gmail.com", schoolTest);
    expect(employeeInstance.school).toBe(schoolTest);
});

test("We are testing if officeNumber will return office number.", () => {
    const schoolTest = "School Name";
    const employeeInstance = new Intern("Lucas", 2, "Lucasram3@gmail.com", schoolTest);
    expect(employeeInstance.getSchool()).toBe(schoolTest);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Lucas", 2, "Lucasram3@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});