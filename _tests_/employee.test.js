const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initializatoin", () => {
        it("should return an object", () => {
            const obj = new Employee();

            expect(typeof obj).toEqual("object");
        });
    })

    describe("name", () => {
        it("should return a name", () => {
            const name = "David";
            const obj = new Employee(name)

            expect(obj.name).toEqual(name);
        });
    })

    describe("id", () => {
        it("should return an ID", () => {
            const id = 1;
            const obj = new Employee("David", id)

            expect(obj.id).toEqual(id);
        });
    })

    describe("email", () => {
        it("should return an email", () => {
            const email = "david@email.com";
            const obj = new Employee("David", 1, email)

            expect(obj.email).toEqual(email);
        });
    })

    describe("getName", () => {
        it("should return a name from getName()", () => {
            const name = "David";
            const obj = new Employee(name)

            expect(obj.getName()).toEqual(name);
        });
    })

    describe("getId", () => {
        it("should return the ID from getId()", () => {
            const id = 1;
            const obj = new Employee("David", id)

            expect(obj.getId()).toEqual(id);
        });
    })

    describe("getEmail", () => {
        it("should return a email from getEmail()", () => {
            const email = "david@email.com";
            const obj = new Employee("David", 1, email)

            expect(obj.getEmail()).toEqual(email);
        });
    })

    describe("getRole", () => {
        it("should return the employee's role from getRole()", () => {
            const role = "Employee";
            const obj = new Employee()

            expect(obj.getRole()).toEqual(role);
        });
    })

})