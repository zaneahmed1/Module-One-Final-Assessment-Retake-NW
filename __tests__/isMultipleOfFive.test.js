const isMultipleOfFive = require("../problems/isMultipleOfFive")

describe("isMultipleOfFive", () => {
    test("Returns true for multiples of five", () => {
        expect(isMultipleOfFive(5)).toBe(true)
        expect(isMultipleOfFive(10)).toBe(true)
        expect(isMultipleOfFive(140)).toBe(true)
        expect(isMultipleOfFive(125)).toBe(true)
        expect(isMultipleOfFive(1420)).toBe(true)
    })
    test("Returns false for non-numbers of values that are not multiples of five", () => {
        expect(isMultipleOfFive(1)).toBe(false)
        expect(isMultipleOfFive(19)).toBe(false)
        expect(isMultipleOfFive(3)).toBe(false)
        expect(isMultipleOfFive(13.5)).toBe(false)
        expect(isMultipleOfFive("Pancake")).toBe(false)
        expect(isMultipleOfFive("5Pancake10")).toBe(false)
    })
})
