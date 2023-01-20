const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initializatoin", () => {
        it("should return an object", () => {
            const obj = new Employee();

            expect(typeof obj).toEqual("object");
        });
    })
})