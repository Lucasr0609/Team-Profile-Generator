const Engineer = require("../lib/Engineer");

test("Create a github.", () => {
    const githubTest = "lucasr0609";
    const employeeInstance = new Engineer("Lucas", 2, "lucasram3@gmail.com", githubTest);
    expect(employeeInstance.github).toBe(githubTest);
});

test("Testing if getGithub will return github.", () => {
    const githubTest = "lucasr0609";
    const employeeInstance = new Engineer("Lucas", 2, "lucasram3@gmail.com", githubTest);
    expect(employeeInstance.getGithub()).toBe(githubTest);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Lucas", 2, "lucasram3@gmail.com", "lucasr0609");
    expect(employeeInstance.getRole()).toBe(returnValue);
});