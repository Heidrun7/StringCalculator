const add = require("./calculator");

it("should return zero on an emptry string", () => {
	expect(add("")).toBe(0);
});