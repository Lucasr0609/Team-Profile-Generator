const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Lucas";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Lucas", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "Lucasram3@gmail.com";
    const employeeInstance = new Employee("Lucas", 2, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const nameTest = "Lucas";
    const employeeInstance = new Employee(nameTest);
    expect(employeeInstance.getName()).toBe(nameTest);
})

test("Can test ID through getID method.", () => {
    const testingID = 2;
    const employeeInstance = new Employee("Lucas", testingID);
    expect(employeeInstance.getId()).toBe(testingID);
})

test("Can test email through getEmail method.", () => {
    const emailTest = "Lucasram3@gmail.com";
    const employeeInstance = new Employee("Lucas", 2, emailTest);
    expect(employeeInstance.getEmail()).toBe(emailTest);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Lucas", 2, "Lucasram3@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})

