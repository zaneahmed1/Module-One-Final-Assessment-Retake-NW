const isMultipleOfFive = require("../problems/isMultipleOfFive")

describe("isMultipleOfFive", () => {
    test("Returns true for multiples of five", () => {
        expect(isMultipleOfFive(5)).toBeTrue()
        expect(isMultipleOfFive(10)).toBeTrue()
        expect(isMultipleOfFive(140)).toBeTrue()
        expect(isMultipleOfFive(125)).toBeTrue()
        expect(isMultipleOfFive(1420)).toBeTrue()
    })
    test("Returns false for non-numbers of values that are not multiples of five", () => {
        expect(isMultipleOfFive(1)).toBeFalse()
        expect(isMultipleOfFive(19)).toBeFalse()
        expect(isMultipleOfFive(3)).toBeFalse()
        expect(isMultipleOfFive(13.5)).toBeFalse()
        expect(isMultipleOfFive("Pancake")).toBeFalse()
        expect(isMultipleOfFive("5Pancake10")).toBeFalse()
    })
})
