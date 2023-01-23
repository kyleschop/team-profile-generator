const Engineer = require("../lib/engineer");

describe("getGithub", () => {
    it("should return the Engineer's Github", () => {
        const github = "graveto";
        const obj = new Engineer("David", 1, "david@email.com", github);

        expect(obj.getGithub()).toEqual(github);
    });
})

describe("getRole", () => {
    it("should return the employee's role from getRole()", () => {
        const role = "Engineer";
        const obj = new Engineer("David", 1, "david@email.com", "graveto")

        expect(obj.getRole()).toEqual(role);
    });
})