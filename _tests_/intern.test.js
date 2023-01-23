const Intern = require("../lib/intern");

describe("getSchool", () => {
    it("should return the Intern's school", () => {
        const school = "UoA";
        const obj = new Intern("David", 1, "david@email.com", school);

        expect(obj.getSchool()).toEqual(school);
    });
})

describe("getRole", () => {
    it("should return the employee's role from getRole()", () => {
        const role = "Intern";
        const obj = new Intern("David", 1, "david@email.com", "UoA")

        expect(obj.getRole()).toEqual(role);
    });
})