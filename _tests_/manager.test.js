const Manager = require("../lib/manager");

describe("getOfficeNumber", () => {
    it("should return the office number", () => {
        const officeNumber = 1;
        const obj = new Manager("David", 1, "david@email.com", officeNumber);

        expect(obj.getOfficeNumber()).toEqual(officeNumber);
    });
})

describe("getRole", () => {
    it("should return the employee's role from getRole()", () => {
        const role = "Manager";
        const obj = new Manager("David", 1, "david@email.com", 1)

        expect(obj.getRole()).toEqual(role);
    });
})