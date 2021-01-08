const countNumbers = require("../problems/mostCommonLetter")

describe("mostCommonLetter", () => {
    test("Returns the most common letter", () => {
        expect(mostCommonLetter("testing")).toBe("t")
        expect(mostCommonLetter("javascript")).toBe("a")
        expect(mostCommonLetter("hello world")).toBe("l")
        expect(mostCommonLetter("bookkeeper")).toBe("e")
    })
    test("Handles capitalization and punctuation", () => {
        expect(mostCommonLetter("JavaScript is high-level, often just-in-time compiled, and multi-paradigm")).toBe("i")
        expect(mostCommonLetter("AAbbbaa")).toBe("a")
        expect(mostCommonLetter("A A a a b c c c ")).toBe("a")
    })
})
