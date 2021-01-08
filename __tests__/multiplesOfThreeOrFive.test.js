const multiplesOfThreeOrFive = require("../problems/multiplesOfThreeOrFive")

describe("multiplesOfThreeOrFive", () => {
    test("Sums the numbers under n that are either a multiple of 3 or 5", () => {
        expect(multiplesOfThreeOrFive(10)).toBe(23)
        expect(multiplesOfThreeOrFive(500)).toBe(57918)
        expect(multiplesOfThreeOrFive(1000)).toBe(233168)
    })
})