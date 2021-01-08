const countNumbers = require("../problems/countThrees")

describe("countThrees", () => {
    test("Counts the number of threes in a numerical input", () => {
        expect(countThrees(300)).toBe(1)
        expect(countThrees(15)).toBe(0)
        expect(countThrees(3203)).toBe(2)
        expect(countThrees(9003330)).toBe(3)
        expect(countThrees(33300839373)).toBe(6)
    })
})
