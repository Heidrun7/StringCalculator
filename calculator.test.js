const add = require("./calculator");

it("should return zero on an emptry string", () => {
	expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
	expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () => {
	expect(add("1,2")).toBe(3);
});

it("should return sum of multiple numbers", () => {
	expect(add("1,2,3")).toBe(6);
});

it("should return sum of numbers with new lines between them", () => {
	expect(add("1\n2,3")).toBe(6);
});

it("should return sum of numbers with new lines between them", () => {
	expect(add("1\n2,3,2\n1")).toBe(9);
});

test("should throw error when a negative number is in string", () => {
	function addError() {
		add("-1,2");
	}
	expect(addError).toThrowError("Negatives not allowed: -1");
});

test("should throw error when multiple negative numbers are in string", () => {
	function addMultiError() {
		add("2,-4,3,-5");
	}
	expect(addMultiError).toThrowError("Negatives not allowed: -4,-5");
});

it("should ignore numbers bigger than 1000 and return sum of the other numbers", () => {
	expect(add("1001,2")).toBe(2);
});

it("should allow change of delimeter and return the correct sum", () => {
	expect(add("//;\n1;2")).toBe(3);
});

it("should allow change of delimeter and have more than one instance of the delimeter", () => {
	expect(add("//;\n1;2;1")).toBe(4);
});

it("should allow change of delimeter, with delimeter more than one character", () => {
	expect(add("//!!\n1!!2!!1")).toBe(4);
});